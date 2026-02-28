import { z } from "zod";

/**
 * ===== 基础枚举 & 类型 =====
 */

export const HOME_SCOPES = ["team", "project", "me"] as const;
export type HomeScope = (typeof HOME_SCOPES)[number];

export const TIME_RANGES = ["7d", "30d", "quarter"] as const;
export type TimeRange = (typeof TIME_RANGES)[number];

export const WIDGET_STATES = ["loading", "ready", "empty", "error"] as const;
export type WidgetState = (typeof WIDGET_STATES)[number];

export const PERMISSION_VIEWS = ["owner", "editor", "viewer", "guest"] as const;
export type PermissionView = (typeof PERMISSION_VIEWS)[number];

/**
 * 可复用的 widget 基础 meta 信息
 */
export interface DashboardWidgetMeta {
  id: string; // 前端本页唯一 ID（用于 key）
  widgetId: string; // 固定业务 ID，例如 "home.activity"
  title: string; // Widget 标题
  scope: HomeScope; // team / project / me
  range: TimeRange; // 7d / 30d / quarter
  state: WidgetState;
  permission: PermissionView;
}

/**
 * DashboardWidget 泛型，data 可为 null（loading / error 时）
 */
export type DashboardWidget<TData> = DashboardWidgetMeta & {
  data: TData | null;
};

/**
 * ===== 首页具体 widget 类型（当前只落地 activity，可按此模式扩展）=====
 */
export type ActivityVerb = "created" | "updated" | "completed" | "commented";

export interface ActivityItem {
  id: string;
  actorId: string;
  actorName: string;
  entityId: string;
  entityType: "task" | "project" | "comment";
  verb: ActivityVerb;
  createdAt: string; // ISO string
  summary: string; // 简短描述，用于 UI 展示
}

export interface ActivityWidgetData {
  items: ActivityItem[];
  hasMore: boolean;
}

/**
 * 首页 Activity widget
 */
export type ActivityWidget = DashboardWidget<ActivityWidgetData> & {
  widgetId: "home.activity";
};

/**
 * DashboardHomeDTO：汇总首页所有 widget
 * 未来新增 widget 时，在 widgets union 中追加即可。
 */
export interface DashboardHomeDTO {
  scope: HomeScope;
  range: TimeRange;
  widgets: ActivityWidget[]; // 后续可以扩成 ActivityWidget | OtherWidget | ...
}

/**
 * ===== Zod 基础枚举 schema =====
 */

export const homeScopeSchema = z.enum(HOME_SCOPES);
export const timeRangeSchema = z.enum(TIME_RANGES);
export const widgetStateSchema = z.enum(WIDGET_STATES);
export const permissionViewSchema = z.enum(PERMISSION_VIEWS);

/**
 * ===== Query schema =====
 * 约束：
 * - scope = team 时必须带 teamId
 * - scope = project 时必须带 projectId
 * - scope = me 时不能带 teamId / projectId
 */

const baseDashboardScopeQuerySchema = z.object({
  scope: homeScopeSchema.default("me"),
  range: timeRangeSchema.default("7d"),
  teamId: z.string().uuid().optional().nullable(),
  projectId: z.string().uuid().optional().nullable(),
});

export const dashboardHomeQuerySchema =
  baseDashboardScopeQuerySchema.superRefine((value, ctx) => {
    if (value.scope === "team") {
      if (!value.teamId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["teamId"],
          message: "team scope requires teamId",
        });
      }
    } else if (value.scope === "project") {
      if (!value.projectId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["projectId"],
          message: "project scope requires projectId",
        });
      }
    } else if (value.scope === "me") {
      if (value.teamId || value.projectId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["scope"],
          message: "me scope must not specify teamId or projectId",
        });
      }
    }
  });

/**
 * Activity 专用 query（通常会有分页）
 * 同样复用 scope / range 限制，保证与首页一致。
 */
export const activityQuerySchema = baseDashboardScopeQuerySchema
  .extend({
    cursor: z.string().optional(),
    limit: z
      .string()
      .optional()
      .transform((v) => (v ? Number(v) : 20))
      .pipe(z.number().int().min(1).max(100)),
  })
  .superRefine((value, ctx) => {
    // 复用上面的 scope 约束逻辑
    const tmp = dashboardHomeQuerySchema.safeParse(value);
    if (!tmp.success) {
      const formatted = tmp.error.format();
      if (formatted.scope?._errors?.length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["scope"],
          message: formatted.scope._errors.join(", "),
        });
      }
      if (formatted.teamId?._errors?.length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["teamId"],
          message: formatted.teamId._errors.join(", "),
        });
      }
      if (formatted.projectId?._errors?.length) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["projectId"],
          message: formatted.projectId._errors.join(", "),
        });
      }
    }
  });

/**
 * ===== Response schema（覆盖首页所有 widget）=====
 */

export const activityItemSchema = z.object({
  id: z.string().min(1),
  actorId: z.string().min(1),
  actorName: z.string().min(1),
  entityId: z.string().min(1),
  entityType: z.enum(["task", "project", "comment"]),
  verb: z.enum(["created", "updated", "completed", "commented"]),
  createdAt: z.string().datetime(),
  summary: z.string().min(1),
});

export const activityWidgetDataSchema = z.object({
  items: z.array(activityItemSchema),
  hasMore: z.boolean(),
});

export const activityWidgetSchema = z.object({
  id: z.string().min(1),
  widgetId: z.literal("home.activity"),
  title: z.string().min(1),
  scope: homeScopeSchema,
  range: timeRangeSchema,
  state: widgetStateSchema,
  permission: permissionViewSchema,
  data: activityWidgetDataSchema.nullable(),
});

export const dashboardHomeResponseSchema = z.object({
  scope: homeScopeSchema,
  range: timeRangeSchema,
  widgets: z.array(activityWidgetSchema),
});

export type DashboardHomeQueryInput = z.infer<typeof dashboardHomeQuerySchema>;
export type DashboardHomeResponse = z.infer<typeof dashboardHomeResponseSchema>;
export type ActivityQueryInput = z.infer<typeof activityQuerySchema>;

export const ErrorCodes = {
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  BAD_REQUEST: "BAD_REQUEST",
  INTERNAL: "INTERNAL",
  VALIDATION: "VALIDATION",
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];

export interface LogContext {
  traceId: string;
  actorId?: string;
  scope: string;
  widgetId?: string;
}

export interface AppErrorPayload {
  code: ErrorCode;
  message: string;
  context?: LogContext;
  cause?: unknown;
}

export class AppError extends Error {
  readonly code: ErrorCode;
  readonly context?: LogContext;
  readonly cause?: unknown;

  constructor(payload: AppErrorPayload) {
    super(payload.message);
    this.name = "AppError";
    this.code = payload.code;
    this.context = payload.context;
    this.cause = payload.cause;
    if (payload.cause instanceof Error)
      Error.captureStackTrace?.(this, AppError);
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      traceId: this.context?.traceId,
      actorId: this.context?.actorId,
      scope: this.context?.scope,
      widgetId: this.context?.widgetId,
    };
  }
}

import type { InferSelectModel } from "drizzle-orm";
import type { users } from "@/db/schemas/schema";

type DbUser = InferSelectModel<typeof users>;

export type SessionUser = Pick<
  DbUser,
  "id" | "name" | "email" | "image" | "role"
>;

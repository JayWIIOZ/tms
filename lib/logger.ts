// lib/logger.ts

import type { LogContext } from "./errors";

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogFields extends LogContext {
  level: LogLevel;
  message: string;
  [key: string]: unknown;
}

function formatLog(fields: LogFields): string {
  return JSON.stringify({
    timestamp: new Date().toISOString(),
    traceId: fields.traceId,
    actorId: fields.actorId,
    scope: fields.scope,
    widgetId: fields.widgetId,
    level: fields.level,
    message: fields.message,
    ...Object.fromEntries(
      Object.entries(fields).filter(
        ([k]) =>
          ![
            "traceId",
            "actorId",
            "scope",
            "widgetId",
            "level",
            "message",
          ].includes(k),
      ),
    ),
  });
}

export function createLogger(defaultContext: Partial<LogContext>) {
  return {
    log(level: LogLevel, message: string, extra?: Record<string, unknown>) {
      const fields: LogFields = {
        ...defaultContext,
        level,
        message,
        ...extra,
      } as LogFields;
      const out = formatLog(fields);
      if (level === "error") console.error(out);
      else console.log(out);
    },
    debug(msg: string, extra?: Record<string, unknown>) {
      this.log("debug", msg, extra);
    },
    info(msg: string, extra?: Record<string, unknown>) {
      this.log("info", msg, extra);
    },
    warn(msg: string, extra?: Record<string, unknown>) {
      this.log("warn", msg, extra);
    },
    error(msg: string, extra?: Record<string, unknown>) {
      this.log("error", msg, extra);
    },
  };
}

export function generateTraceId(): string {
  return `tr_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

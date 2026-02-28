import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface DashboardWidgetShellProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  children: ReactNode;
  badge?: string;
  actionLabel?: string;
  className?: string;
}

export default function DashboardWidgetShell({
  title,
  subtitle,
  icon,
  children,
  badge,
  actionLabel,
  className,
}: DashboardWidgetShellProps) {
  return (
    <section
      className={cn(
        "glass-panel rounded-2xl border border-white/60 bg-white/70 p-5 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#101922]/70",
        className,
      )}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#0d7ff2]/10 text-[#0d7ff2]">
            {icon}
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {badge ? (
            <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white dark:bg-slate-100 dark:text-slate-900">
              {badge}
            </span>
          ) : null}
          {actionLabel ? (
            <button className="rounded-lg border border-[#0d7ff2]/25 bg-[#0d7ff2]/10 px-2.5 py-1 text-xs font-bold text-[#0d7ff2] transition-colors hover:bg-[#0d7ff2] hover:text-white">
              {actionLabel}
            </button>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}

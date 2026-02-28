import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WidgetShellProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export default function WidgetShell({
  title,
  description,
  icon,
  className,
  actions,
  children,
}: WidgetShellProps) {
  return (
    <section
      className={cn(
        "glass-panel rounded-2xl border border-white/50 bg-white/70 p-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#101922]/70",
        className,
      )}
    >
      <header className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#0d7ff2]/10 text-[#0d7ff2]">
            {icon}
          </span>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {description}
            </p>
          </div>
        </div>
        {actions ? <div>{actions}</div> : null}
      </header>

      <div className="space-y-3">{children}</div>
    </section>
  );
}

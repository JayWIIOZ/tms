import { CircleDot, Flag, Link2, Timer } from "lucide-react";
import DashboardWidgetShell from "@/components/dashboard/DashboardWidgetShell";

const tasks = [
  {
    title: "Finalize onboarding flow for beta team",
    priority: "P0",
    eta: "Due in 2h",
    blocked: false,
    kr: "KR-1.2",
  },
  {
    title: "Patch sign-in retry edge case",
    priority: "P1",
    eta: "Overdue 4h",
    blocked: true,
    kr: "KR-2.1",
  },
  {
    title: "Prepare sprint review notes",
    priority: "P2",
    eta: "Due tomorrow",
    blocked: false,
    kr: "KR-1.4",
  },
];

export default function MyQueueSection() {
  return (
    <DashboardWidgetShell
      title="My Queue"
      subtitle="Priority scored execution list"
      badge="Sorted"
      actionLabel="Re-score"
      icon={<CircleDot size={20} />}
      className="h-full"
    >
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <article
            key={task.title}
            className="rounded-xl border border-white/50 bg-white/70 p-3 transition-colors hover:bg-white dark:border-white/10 dark:bg-slate-900/40 dark:hover:bg-slate-900/70"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {task.title}
              </h4>
              <span
                className={
                  task.priority === "P0"
                    ? "rounded-md bg-red-500/10 px-2 py-0.5 text-[10px] font-bold text-red-600 dark:text-red-300"
                    : task.priority === "P1"
                      ? "rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-300"
                      : "rounded-md bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-300"
                }
              >
                {task.priority}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Timer size={12} />
                {task.eta}
              </span>
              <span className="flex items-center gap-1">
                <Link2 size={12} />
                {task.kr}
              </span>
              <span
                className={
                  task.blocked
                    ? "flex items-center gap-1 rounded-full bg-red-500/10 px-2 py-0.5 font-semibold text-red-600 dark:text-red-300"
                    : "flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-semibold text-emerald-600 dark:text-emerald-300"
                }
              >
                <Flag size={12} />
                {task.blocked ? "Blocked" : "On track"}
              </span>
            </div>
          </article>
        ))}
      </div>
    </DashboardWidgetShell>
  );
}

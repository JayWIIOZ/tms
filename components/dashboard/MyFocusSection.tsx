import { AlertTriangle, CheckCircle2, CircleDashed, Flag } from "lucide-react";
import DashboardWidgetShell from "@/components/dashboard/DashboardWidgetShell";

const focusStats = [
  {
    label: "Due Today",
    value: "6",
    delta: "+2",
    icon: Flag,
    tone: "text-blue-500 bg-blue-500/10",
  },
  {
    label: "Overdue",
    value: "3",
    delta: "+1",
    icon: AlertTriangle,
    tone: "text-red-500 bg-red-500/10",
  },
  {
    label: "Blocked",
    value: "2",
    delta: "0",
    icon: CircleDashed,
    tone: "text-amber-500 bg-amber-500/10",
  },
  {
    label: "In Review",
    value: "4",
    delta: "-1",
    icon: CheckCircle2,
    tone: "text-green-500 bg-green-500/10",
  },
];

export default function MyFocusSection() {
  return (
    <DashboardWidgetShell
      title="My Focus"
      subtitle="What requires your attention today"
      badge="Personal"
      icon={<Flag size={20} />}
    >
      <div className="grid grid-cols-2 gap-3">
        {focusStats.map((item) => (
          <article
            key={item.label}
            className="rounded-xl border border-white/40 bg-white/70 p-3 dark:border-white/10 dark:bg-slate-900/40"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {item.label}
              </span>
              <div className={`rounded-lg p-1.5 ${item.tone}`}>
                <item.icon size={14} />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                {item.value}
              </p>
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white dark:bg-slate-100 dark:text-slate-900">
                {item.delta}
              </span>
            </div>
          </article>
        ))}
      </div>
    </DashboardWidgetShell>
  );
}

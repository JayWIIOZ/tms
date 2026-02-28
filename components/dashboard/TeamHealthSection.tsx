import { Activity, AlertTriangle, CheckCircle2, Layers3, Target } from "lucide-react";
import DashboardWidgetShell from "@/components/dashboard/DashboardWidgetShell";

const metrics = [
  { label: "In Progress", value: "148", hint: "active tasks", icon: Activity },
  { label: "On-time Rate", value: "87%", hint: "within SLA", icon: CheckCircle2 },
  { label: "Overdue Rate", value: "9.4%", hint: "needs focus", icon: AlertTriangle },
  { label: "WIP", value: "62", hint: "current load", icon: Layers3 },
  { label: "Blocked Rate", value: "4.8%", hint: "cross-team risk", icon: AlertTriangle },
  { label: "Goal Hit", value: "71%", hint: "KR weighted", icon: Target },
];

export default function TeamHealthSection() {
  return (
    <DashboardWidgetShell
      title="Team Health KPIs"
      subtitle="Cross project delivery status"
      badge="Team"
      icon={<Activity size={20} />}
    >
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-xl border border-white/40 bg-white/75 p-3 dark:border-white/10 dark:bg-slate-900/40"
          >
            <div className="mb-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <metric.icon size={13} className="text-[#0d7ff2]" />
              {metric.label}
            </div>
            <p className="text-2xl font-black text-slate-900 dark:text-white">
              {metric.value}
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {metric.hint}
            </p>
          </article>
        ))}
      </div>
    </DashboardWidgetShell>
  );
}

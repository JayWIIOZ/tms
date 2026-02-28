import { Sparkles, TrendingUp } from "lucide-react";
import DashboardWidgetShell from "@/components/dashboard/DashboardWidgetShell";

const objectives = [
  { name: "O1 Improve onboarding conversion", progress: 72, trend: "+6%" },
  { name: "O2 Reduce production incidents", progress: 58, trend: "+3%" },
  { name: "O3 Improve roadmap predictability", progress: 64, trend: "+4%" },
];

export default function OkrHealthSection() {
  return (
    <DashboardWidgetShell
      title="OKR Health"
      subtitle="Objective progress and trend snapshot"
      icon={<Sparkles size={20} />}
      actionLabel="View OKRs"
    >
      <div className="space-y-3">
        {objectives.map((objective) => (
          <article
            key={objective.name}
            className="rounded-xl border border-white/40 bg-white/75 p-3 dark:border-white/10 dark:bg-slate-900/40"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                {objective.name}
              </h4>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-300">
                <TrendingUp size={10} className="mr-1 inline-block" />
                {objective.trend}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-[#0d7ff2] to-[#22c55e]"
                style={{ width: `${objective.progress}%` }}
              />
            </div>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              {objective.progress}% completed
            </p>
          </article>
        ))}
      </div>
    </DashboardWidgetShell>
  );
}

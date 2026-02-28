import { Goal } from "lucide-react";
import WidgetShell from "@/components/dashboard/WidgetShell";

const OBJECTIVES = [
  { id: "obj-1", name: "Improve onboarding conversion", progress: 68 },
  { id: "obj-2", name: "Reduce task workflow latency", progress: 74 },
  { id: "obj-3", name: "Stabilize real-time updates", progress: 59 },
];

export default function OkrHealth() {
  return (
    <WidgetShell
      title="OKR Health"
      description="Objective and KR delivery trend"
      icon={<Goal size={20} />}
      actions={
        <button className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-bold text-slate-700 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-200">
          This Quarter
        </button>
      }
    >
      <div className="space-y-3">
        {OBJECTIVES.map((objective) => (
          <div
            key={objective.id}
            className="rounded-xl border border-white/60 bg-white/55 p-3 dark:border-white/10 dark:bg-slate-800/60"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {objective.name}
              </p>
              <span className="text-xs font-bold text-[#0d7ff2]">
                {objective.progress}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-[#0d7ff2] to-[#6ea8ff]"
                style={{ width: `${objective.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

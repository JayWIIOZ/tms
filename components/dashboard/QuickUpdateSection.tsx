import { Gauge, Save, Target } from "lucide-react";
import DashboardWidgetShell from "@/components/dashboard/DashboardWidgetShell";

export default function QuickUpdateSection() {
  return (
    <DashboardWidgetShell
      title="Quick Update"
      subtitle="Update KR progress without leaving home"
      icon={<Target size={20} />}
      actionLabel="Submit"
    >
      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Key Result
          </label>
          <div className="rounded-xl border border-white/50 bg-white/80 px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-200">
            KR-2.1 Improve sprint predictability
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Progress
            </label>
            <span className="text-xs font-bold text-[#0d7ff2]">64%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
            <div className="h-2 w-[64%] rounded-full bg-gradient-to-r from-[#0d7ff2] to-[#7c3aed]" />
          </div>
        </div>
        <div className="rounded-xl border border-white/50 bg-white/80 px-3 py-2 text-sm text-slate-500 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-400">
          Add note: &quot;Unblocked QA and completed smoke suite for milestone B.&quot;
        </div>
        <div className="flex items-center justify-between rounded-xl border border-emerald-500/25 bg-emerald-500/5 px-3 py-2 text-xs text-emerald-700 dark:text-emerald-300">
          <span>
            <Gauge size={12} className="mr-1 inline-block" />
            Forecast: On track
          </span>
          <span className="font-bold">
            <Save size={12} className="mr-1 inline-block" />
            draft saved
          </span>
        </div>
      </div>
    </DashboardWidgetShell>
  );
}

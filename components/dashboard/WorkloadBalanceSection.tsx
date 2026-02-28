import { BarChart3, UserCircle2 } from "lucide-react";
import DashboardWidgetShell from "@/components/dashboard/DashboardWidgetShell";

const memberLoads = [
  { name: "Amy", load: 78, index: "12.4" },
  { name: "Leo", load: 62, index: "9.2" },
  { name: "Nora", load: 55, index: "8.1" },
  { name: "Kai", load: 86, index: "14.7" },
  { name: "Mia", load: 44, index: "6.3" },
];

export default function WorkloadBalanceSection() {
  return (
    <DashboardWidgetShell
      title="Workload Balance"
      subtitle="Member load heat overview"
      icon={<BarChart3 size={20} />}
      actionLabel="Rebalance"
    >
      <div className="space-y-3">
        {memberLoads.map((member) => (
          <article
            key={member.name}
            className="rounded-xl border border-white/40 bg-white/75 p-3 dark:border-white/10 dark:bg-slate-900/40"
          >
            <div className="mb-2 flex items-center justify-between gap-2 text-sm">
              <span className="font-bold text-slate-800 dark:text-slate-100">
                <UserCircle2 size={13} className="mr-1 inline-block text-[#0d7ff2]" />
                {member.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                load index {member.index}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className={
                  member.load >= 80
                    ? "h-2 rounded-full bg-red-500"
                    : member.load >= 60
                      ? "h-2 rounded-full bg-amber-500"
                      : "h-2 rounded-full bg-emerald-500"
                }
                style={{ width: `${member.load}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </DashboardWidgetShell>
  );
}

import { Activity } from "lucide-react";
import WidgetShell from "@/components/dashboard/WidgetShell";

const KPI_ITEMS = [
  { id: "in-progress", label: "In Progress", value: "48", trend: "+12%" },
  { id: "on-time", label: "On-time Rate", value: "87%", trend: "+4%" },
  { id: "overdue", label: "Overdue Rate", value: "9%", trend: "-2%" },
  { id: "blocked", label: "Blocked Rate", value: "6%", trend: "-1%" },
  { id: "wip", label: "WIP", value: "21", trend: "+3" },
  { id: "okr", label: "OKR Attainment", value: "73%", trend: "+5%" },
];

export default function TeamHealth() {
  return (
    <WidgetShell
      title="Team Health KPIs"
      description="Operational pulse for this scope"
      icon={<Activity size={20} />}
    >
      <div className="grid grid-cols-2 gap-3">
        {KPI_ITEMS.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-white/60 bg-white/55 p-3 dark:border-white/10 dark:bg-slate-800/60"
          >
            <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {item.label}
            </p>
            <div className="mt-1 flex items-end justify-between">
              <p className="text-xl font-black text-slate-900 dark:text-white">
                {item.value}
              </p>
              <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                {item.trend}
              </p>
            </div>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

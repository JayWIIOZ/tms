import { Siren, TriangleAlert } from "lucide-react";
import DashboardWidgetShell from "@/components/dashboard/DashboardWidgetShell";

const riskItems = [
  {
    task: "Deploy workflow rollback for API gateway",
    reason: "Overdue 52h",
    level: "Critical",
  },
  {
    task: "Mobile QA regression suite missing owner",
    reason: "No assignee",
    level: "High",
  },
  {
    task: "Checkout timeout investigation blocked by infra",
    reason: "Blocked 36h",
    level: "High",
  },
];

export default function DeliveryRiskSection() {
  return (
    <DashboardWidgetShell
      title="Delivery Risk"
      subtitle="Tasks likely to impact commitments"
      icon={<TriangleAlert size={20} />}
      badge="Action needed"
      actionLabel="Triage"
    >
      <div className="space-y-3">
        {riskItems.map((item) => (
          <article
            key={item.task}
            className="rounded-xl border border-red-500/20 bg-red-500/5 p-3"
          >
            <div className="mb-1 flex items-center justify-between gap-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                {item.task}
              </h4>
              <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
                {item.level}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <Siren size={12} className="mr-1 inline-block text-red-500" />
              {item.reason}
            </p>
          </article>
        ))}
      </div>
    </DashboardWidgetShell>
  );
}

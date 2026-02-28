import { AlertOctagon, ArrowRight } from "lucide-react";
import WidgetShell from "@/components/dashboard/WidgetShell";

const RISK_ITEMS = [
  {
    id: "risk-1",
    title: "Payment retry worker has no owner",
    signal: "No assignee",
    level: "HIGH",
  },
  {
    id: "risk-2",
    title: "Task reorder drift in board column B",
    signal: "Blocked > 48h",
    level: "HIGH",
  },
  {
    id: "risk-3",
    title: "Auth onboarding completion is slipping",
    signal: "2 days overdue",
    level: "MED",
  },
];

export default function DeliveryRisk() {
  return (
    <WidgetShell
      title="Delivery Risk"
      description="Risks requiring immediate action"
      icon={<AlertOctagon size={20} />}
      actions={
        <span className="rounded-full bg-red-100 px-2.5 py-1 text-[11px] font-bold text-red-600 dark:bg-red-900/30 dark:text-red-300">
          3 Active
        </span>
      }
    >
      <div className="space-y-2.5">
        {RISK_ITEMS.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-red-200/60 bg-red-50/70 p-3 dark:border-red-800/35 dark:bg-red-900/20"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-bold text-red-700 dark:text-red-300">
                {item.title}
              </p>
              <span className="rounded-md bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-900/35 dark:text-red-300">
                {item.level}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span className="font-medium text-red-600/90 dark:text-red-300/90">
                {item.signal}
              </span>
              <button className="inline-flex items-center gap-1 font-bold text-red-700 dark:text-red-200">
                Resolve
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

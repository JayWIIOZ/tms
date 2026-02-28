import { Activity, MessageSquareMore, ShieldCheck, Target, Workflow } from "lucide-react";
import DashboardWidgetShell from "@/components/dashboard/DashboardWidgetShell";

const timelineItems = [
  {
    type: "task",
    message: "Amy moved TASK-842 to In Progress",
    time: "Just now",
    icon: Workflow,
  },
  {
    type: "comment",
    message: "Leo commented on TASK-790: 'API contract updated'",
    time: "4m ago",
    icon: MessageSquareMore,
  },
  {
    type: "okr",
    message: "KR-2.1 progress updated from 58% to 64%",
    time: "12m ago",
    icon: Target,
  },
  {
    type: "audit",
    message: "Role change: Nora -> PM in Project Atlas",
    time: "21m ago",
    icon: ShieldCheck,
  },
];

export default function ActivityTimelineSection() {
  return (
    <DashboardWidgetShell
      title="Activity Timeline"
      subtitle="Live cross-domain activity feed"
      icon={<Activity size={20} />}
      actionLabel="Open stream"
      className="h-full"
    >
      <div className="custom-scrollbar max-h-[360px] space-y-3 overflow-y-auto pr-1">
        {timelineItems.map((item) => (
          <article
            key={`${item.type}-${item.message}`}
            className="rounded-xl border border-white/45 bg-white/75 p-3 dark:border-white/10 dark:bg-slate-900/45"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#0d7ff2]/10 text-[#0d7ff2]">
                <item.icon size={14} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-800 dark:text-slate-100">
                  {item.message}
                </p>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {item.time}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </DashboardWidgetShell>
  );
}

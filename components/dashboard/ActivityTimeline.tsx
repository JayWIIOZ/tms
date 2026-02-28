import { MessageCircle, RefreshCw } from "lucide-react";
import WidgetShell from "@/components/dashboard/WidgetShell";

const TIMELINE_ITEMS = [
  {
    id: "a-1",
    actor: "Mina",
    action: "moved TASK-128 to In Progress",
    time: "1m ago",
  },
  {
    id: "a-2",
    actor: "Alex",
    action: "added comment on TASK-087",
    time: "4m ago",
  },
  {
    id: "a-3",
    actor: "Sora",
    action: "updated KR-3.1 progress to 72%",
    time: "9m ago",
  },
  {
    id: "a-4",
    actor: "Kai",
    action: "changed role for member Ember to Viewer",
    time: "13m ago",
  },
  {
    id: "a-5",
    actor: "Bot",
    action: "reconnected socket channel dashboard:team-1",
    time: "18m ago",
  },
];

export default function ActivityTimeline() {
  return (
    <WidgetShell
      title="Activity Timeline"
      description="Live updates across tasks and governance"
      icon={<MessageCircle size={20} />}
      actions={
        <button className="inline-flex items-center gap-1 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-bold text-slate-700 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-200">
          <RefreshCw size={12} />
          Refresh
        </button>
      }
      className="h-full"
    >
      <div className="space-y-2">
        {TIMELINE_ITEMS.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-white/60 bg-white/55 p-3 dark:border-white/10 dark:bg-slate-800/60"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                <span className="font-bold text-slate-900 dark:text-white">
                  {item.actor}
                </span>{" "}
                {item.action}
              </p>
              <span className="shrink-0 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                {item.time}
              </span>
            </div>
          </article>
        ))}
      </div>
    </WidgetShell>
  );
}

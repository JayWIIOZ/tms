import { ArrowRight, Clock3, Flag, Link2 } from "lucide-react";
import WidgetShell from "@/components/dashboard/WidgetShell";

const QUEUE_ITEMS = [
  {
    id: "q-1",
    title: "Design system tokens cleanup",
    tag: "HIGH",
    deadline: "2h left",
    kr: "KR-2.1",
  },
  {
    id: "q-2",
    title: "Refactor task reorder endpoint",
    tag: "MED",
    deadline: "Tomorrow",
    kr: "KR-1.3",
  },
  {
    id: "q-3",
    title: "Validate role matrix snapshot tests",
    tag: "HIGH",
    deadline: "Today 18:00",
    kr: "KR-3.2",
  },
  {
    id: "q-4",
    title: "Ship dashboard empty-state assets",
    tag: "LOW",
    deadline: "Next week",
    kr: "KR-1.1",
  },
];

export default function MyQueue() {
  return (
    <WidgetShell
      title="My Queue"
      description="Priority-ranked work queue"
      icon={<Flag size={20} />}
      actions={
        <button className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-bold text-white transition-colors hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white">
          View All
        </button>
      }
    >
      <div className="space-y-3">
        {QUEUE_ITEMS.map((item) => (
          <article
            key={item.id}
            className="group rounded-xl border border-white/60 bg-white/55 p-3 transition-all hover:-translate-y-0.5 hover:border-[#0d7ff2]/40 hover:shadow-md dark:border-white/10 dark:bg-slate-800/60"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                {item.title}
              </h4>
              <span className="rounded-md bg-[#0d7ff2]/10 px-2 py-0.5 text-[10px] font-bold text-[#0d7ff2]">
                {item.tag}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Clock3 size={13} />
                {item.deadline}
              </span>
              <span className="inline-flex items-center gap-1">
                <Link2 size={13} />
                {item.kr}
              </span>
              <button className="ml-auto inline-flex items-center gap-1 font-bold text-[#0d7ff2] opacity-0 transition-opacity group-hover:opacity-100">
                Open
                <ArrowRight size={13} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </WidgetShell>
  );
}

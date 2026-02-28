import { AlertTriangle, CheckCircle2, ListChecks, Timer } from "lucide-react";
import WidgetShell from "@/components/dashboard/WidgetShell";

const FOCUS_ITEMS = [
  {
    id: "due-today",
    label: "Due Today",
    value: "6",
    tone: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "overdue",
    label: "Overdue",
    value: "2",
    tone: "text-red-600 dark:text-red-400",
  },
  {
    id: "blocked",
    label: "Blocked",
    value: "3",
    tone: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "in-review",
    label: "In Review",
    value: "4",
    tone: "text-emerald-600 dark:text-emerald-400",
  },
];

export default function MyFocus() {
  return (
    <WidgetShell
      title="My Focus"
      description="Personal execution snapshot"
      icon={<Timer size={20} />}
      actions={
        <span className="rounded-full bg-[#0d7ff2]/10 px-2.5 py-1 text-[11px] font-bold text-[#0d7ff2]">
          Today
        </span>
      }
    >
      <div className="grid grid-cols-2 gap-3">
        {FOCUS_ITEMS.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-white/60 bg-white/55 p-3 dark:border-white/10 dark:bg-slate-800/60"
          >
            <p className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {item.label}
            </p>
            <p className={`mt-1 text-2xl font-black ${item.tone}`}>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between rounded-lg border border-red-200/60 bg-red-50/70 px-3 py-2 text-xs dark:border-red-800/40 dark:bg-red-900/20">
          <span className="flex items-center gap-2 font-medium text-red-700 dark:text-red-300">
            <AlertTriangle size={14} />
            API auth callback timeout
          </span>
          <span className="font-bold">P1</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-emerald-200/60 bg-emerald-50/70 px-3 py-2 text-xs dark:border-emerald-800/40 dark:bg-emerald-900/20">
          <span className="flex items-center gap-2 font-medium text-emerald-700 dark:text-emerald-300">
            <CheckCircle2 size={14} />
            Yesterday review completed
          </span>
          <span className="font-bold">Done</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-blue-200/60 bg-blue-50/70 px-3 py-2 text-xs dark:border-blue-800/40 dark:bg-blue-900/20">
          <span className="flex items-center gap-2 font-medium text-blue-700 dark:text-blue-300">
            <ListChecks size={14} />
            2 KR updates pending
          </span>
          <span className="font-bold">Action</span>
        </div>
      </div>
    </WidgetShell>
  );
}

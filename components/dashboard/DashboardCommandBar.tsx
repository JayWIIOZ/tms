import { Bell, Clock3, PlusSquare, Target, UserPlus, Wifi } from "lucide-react";

const scopeOptions = ["Team", "Project", "Me"];
const rangeOptions = ["7d", "30d", "Quarter"];

const quickActions = [
  { label: "New Task", icon: PlusSquare },
  { label: "Update KR", icon: Target },
  { label: "Invite", icon: UserPlus },
];

export default function DashboardCommandBar() {
  return (
    <header className="glass-panel sticky top-4 z-20 mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/50 bg-white/80 px-4 py-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#101922]/75 md:px-6">
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3">
        <div className="min-w-[210px]">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Scope
          </p>
          <div className="mt-1 flex gap-1 rounded-xl border border-slate-200/70 bg-white/70 p-1 dark:border-slate-700/60 dark:bg-slate-900/60">
            {scopeOptions.map((scope, index) => (
              <button
                key={scope}
                className={
                  index === 0
                    ? "rounded-lg bg-[#0d7ff2] px-3 py-1.5 text-xs font-bold text-white"
                    : "rounded-lg px-3 py-1.5 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                }
              >
                {scope}
              </button>
            ))}
          </div>
        </div>
        <div className="min-w-[210px]">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Time Range
          </p>
          <div className="mt-1 flex gap-1 rounded-xl border border-slate-200/70 bg-white/70 p-1 dark:border-slate-700/60 dark:bg-slate-900/60">
            {rangeOptions.map((range, index) => (
              <button
                key={range}
                className={
                  index === 0
                    ? "rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white dark:bg-slate-200 dark:text-slate-900"
                    : "rounded-lg px-3 py-1.5 text-xs font-bold text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                }
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-end">
        <div className="flex items-center gap-2 rounded-xl border border-white/50 bg-white/80 px-3 py-2 dark:border-white/10 dark:bg-slate-900/70">
          <Wifi size={14} className="text-green-500" />
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
            Realtime Connected
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            <Clock3 size={12} className="mr-1 inline-block" />
            synced 3s ago
          </span>
        </div>
        <div className="flex items-center gap-2">
          {quickActions.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1.5 rounded-xl border border-[#0d7ff2]/25 bg-[#0d7ff2]/10 px-3 py-2 text-xs font-bold text-[#0d7ff2] transition-all hover:-translate-y-0.5 hover:bg-[#0d7ff2] hover:text-white"
            >
              <item.icon size={14} />
              {item.label}
            </button>
          ))}
          <button className="relative flex size-9 items-center justify-center rounded-full border border-white/40 bg-white/80 text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800">
            <Bell size={16} />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500" />
          </button>
        </div>
      </div>
    </header>
  );
}

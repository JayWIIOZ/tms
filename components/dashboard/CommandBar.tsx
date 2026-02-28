import {
  CalendarRange,
  ChevronDown,
  Clock3,
  Layers,
  PlusCircle,
  Target,
  UserPlus,
  Wifi,
} from "lucide-react";

export default function CommandBar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 rounded-2xl border border-white/50 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0e1620]/80 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="flex items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-xl bg-[#0d7ff2]/10 text-[#0d7ff2]">
            <Layers size={22} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white">
              Team Mission Dashboard
            </h1>
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Live coordination cockpit
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-1 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:bg-white dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-700/70">
            Team Scope
            <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:bg-white dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-700/70">
            <CalendarRange size={14} />
            7d
            <ChevronDown size={14} />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-1 rounded-full bg-[#0d7ff2] px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-[#0d7ff2]/30 transition-transform hover:scale-105">
            <PlusCircle size={14} />
            New Task
          </button>
          <button className="flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-700/40 dark:bg-emerald-900/20 dark:text-emerald-300 dark:hover:bg-emerald-900/35">
            <Target size={14} />
            Update KR
          </button>
          <button className="flex items-center gap-1 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:bg-white dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-700/70">
            <UserPlus size={14} />
            Invite
          </button>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300">
            <Wifi size={14} className="text-emerald-500" />
            Synced
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300">
            <Clock3 size={14} />
            10:24
          </span>
        </div>
      </div>
    </header>
  );
}

import {
  ClipboardList,
  PlusCircle,
  Clock,
  Zap,
  CheckCircle,
  Star,
  Play,
} from "lucide-react";

export default function MissionsList() {
  return (
    <div className="flex flex-col flex-1 glass-panel bg-white/70 dark:bg-[#101922]/70 rounded-xl overflow-hidden shadow-xl border border-white/60 dark:border-white/10">
      <div className="p-5 border-b border-slate-200/50 dark:border-slate-700/50 flex justify-between items-center bg-white/30 dark:bg-black/20 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ClipboardList size={20} className="text-[#0d7ff2]" />
            Daily Missions
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            3 Tasks Remaining
          </p>
        </div>
        <button className="p-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg text-[#0d7ff2] transition-colors">
          <PlusCircle size={24} />
        </button>
      </div>

      <div className="overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar h-full">
        {/* Task Card 1 */}
        <div className="group relative bg-white/60 dark:bg-slate-800/60 p-4 rounded-xl border border-white/50 dark:border-slate-700 hover:border-[#0d7ff2]/50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white text-base">
                Refactor Backend API
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300 uppercase tracking-wide">
                  Core Systems
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Clock size={14} /> 2h left
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-black text-[#0d7ff2] flex items-center gap-1 bg-[#0d7ff2]/10 px-2 py-1 rounded-lg">
                <Zap size={16} /> 500 XP
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white dark:border-slate-800" />
              <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white dark:border-slate-800" />
            </div>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-700/50 hover:bg-green-500 hover:text-white dark:hover:bg-green-600 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold transition-all group-hover:bg-[#0d7ff2] group-hover:text-white">
              <CheckCircle size={16} /> Complete
            </button>
          </div>
        </div>

        {/* Task Card 2 */}
        <div className="group relative bg-white/60 dark:bg-slate-800/60 p-4 rounded-xl border border-white/50 dark:border-slate-700 hover:border-[#0d7ff2]/50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white text-base">
                Fix Login Bug
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300 uppercase tracking-wide">
                  Urgent
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Clock size={14} /> 30m
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-black text-[#FF9F43] flex items-center gap-1 bg-orange-100/50 dark:bg-orange-900/20 px-2 py-1 rounded-lg">
                <Star size={16} /> Rare Drop
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-3 overflow-hidden">
            <div className="bg-[#0d7ff2] h-1.5 rounded-full w-2/3" />
          </div>
          <div className="flex items-center justify-end">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-700/50 hover:bg-green-500 hover:text-white dark:hover:bg-green-600 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold transition-all group-hover:bg-[#0d7ff2] group-hover:text-white">
              <Play size={16} /> Resume
            </button>
          </div>
        </div>

        {/* Task Card 3 */}
        <div className="group relative bg-white/40 dark:bg-slate-800/30 p-4 rounded-xl border border-white/30 dark:border-slate-700/50 hover:border-[#0d7ff2]/50 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 opacity-75 hover:opacity-100">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-bold text-slate-700 dark:text-slate-200 text-base">
                Read Documentation
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 uppercase tracking-wide">
                  Learning
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-black text-slate-500 dark:text-slate-400 flex items-center gap-1 bg-slate-200/50 dark:bg-slate-800 px-2 py-1 rounded-lg">
                <Zap size={16} /> 100 XP
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end mt-2">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 rounded-lg text-xs font-bold transition-all group-hover:bg-[#0d7ff2] group-hover:text-white">
              <Play size={16} /> Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

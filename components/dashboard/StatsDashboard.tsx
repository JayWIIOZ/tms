import { Heart, Flame } from "lucide-react";

export default function StatsDashboard() {
  return (
    <div className="grid grid-cols-2 gap-3 shrink-0">
      {/* Trust Level */}
      <div className="glass-panel p-4 rounded-xl bg-white/70 dark:bg-[#101922]/70 col-span-2 sm:col-span-1 relative overflow-hidden group">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-colors" />
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <Heart size={18} className="text-pink-500" />
            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
              Trust Level
            </span>
          </div>
          <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-full">
            +5%
          </span>
        </div>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-3xl font-black text-slate-800 dark:text-white">
            85%
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">
            Affection
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-pink-400 to-pink-600 h-2 rounded-full"
            style={{ width: "85%" }}
          />
        </div>
      </div>

      {/* Streak */}
      <div className="glass-panel p-4 rounded-xl bg-white/70 dark:bg-[#101922]/70 col-span-2 sm:col-span-1 relative overflow-hidden group">
        <div className="absolute -right-6 -top-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors" />
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <Flame size={18} className="text-[#FF9F43]" />
            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
              Streak
            </span>
          </div>
          <span className="text-xs font-bold text-[#FF9F43] bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded-full">
            Hot!
          </span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-black text-slate-800 dark:text-white">
            12
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">
            Days
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-2">+2 days from record</p>
      </div>
    </div>
  );
}

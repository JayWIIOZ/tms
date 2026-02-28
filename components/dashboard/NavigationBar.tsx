import Link from "next/link";
import { Bot, Home, BookOpen, Gem, Settings, Bell } from "lucide-react";

export default function NavigationBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-panel mx-4 mt-4 rounded-xl bg-white/70 dark:bg-[#101922]/70">
      <div className="flex items-center gap-4">
        <div className="size-10 bg-[#0d7ff2]/10 rounded-full flex items-center justify-center text-[#0d7ff2]">
          <Bot size={24} />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Mission Control
          </h2>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            System Online
          </p>
        </div>
      </div>

      {/* Center Nav Links */}
      <nav className="hidden md:flex items-center gap-1 bg-white/50 dark:bg-black/20 p-1.5 rounded-full backdrop-blur-sm border border-white/20">
        <Link
          href="/home"
          className="px-5 py-2 rounded-full bg-[#0d7ff2] text-white text-sm font-bold shadow-lg shadow-[#0d7ff2]/30 transition-all hover:scale-105 flex items-center gap-1"
        >
          <Home size={18} /> Home
        </Link>
        <Link
          href="/grimoire"
          className="px-5 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-white/40 dark:hover:bg-white/10 text-sm font-medium transition-all hover:text-[#0d7ff2] flex items-center gap-1"
        >
          <BookOpen size={18} /> Grimoire
        </Link>
        <Link
          href="/board"
          className="px-5 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-white/40 dark:hover:bg-white/10 text-sm font-medium transition-all hover:text-[#0d7ff2] flex items-center gap-1"
        >
          <Gem size={18} /> Quests
        </Link>
        <Link
          href="#"
          className="px-5 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-white/40 dark:hover:bg-white/10 text-sm font-medium transition-all hover:text-[#0d7ff2] flex items-center gap-1"
        >
          <Settings size={18} /> Settings
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <button className="relative size-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-[#0d7ff2]/10 text-slate-700 dark:text-slate-200 transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 size-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-800" />
        </button>
        <div className="flex items-center gap-3 pl-2 pr-1 py-1 bg-white/80 dark:bg-slate-800/80 rounded-full border border-white/40 dark:border-white/5">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-800 dark:text-white leading-none mb-0.5">
              Player One
            </p>
            <p className="text-[10px] text-[#0d7ff2] font-bold tracking-wide uppercase">
              LVL. 54
            </p>
          </div>
          <div
            className="size-8 rounded-full bg-cover bg-center border-2 border-[#0d7ff2]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCi6GUOjAj0DuOd8GlLBg32LPbGDSJlAD4agUf1DrgWUrOC6_hUXyIsVzf-PJ5GGeNbk_J9eQLX2gfFapsgbS37Rxvq6863XDO4DXmGrSiKg_lUFK1_nsnC1NijMh8OpyPVTEBUHFdzzdnQqXNHd-VZw2N6pA2kKLdj9nlm7wfpXwxWs15Y_1FGLJm1HoYgwbgLo32ZLZsV4jJpwtV50Dy6KJMw-7a7WyPSba_TKYnhFeX4GTUkAfCbpomaOzj7haEicCXH6R8WrVY')",
            }}
          />
        </div>
      </div>
    </header>
  );
}

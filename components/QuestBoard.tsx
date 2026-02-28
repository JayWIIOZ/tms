import Link from "next/link";
import {
  Swords,
  Search,
  Bell,
  Activity,
  Flame,
  CheckCircle,
  PlusSquare,
  RefreshCw,
  Diamond,
  Clock,
  MoreHorizontal,
  Plus,
} from "lucide-react";

export default function QuestBoard() {
  return (
    <div className="bg-[#f0f9ff] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-vietnam min-h-screen relative overflow-x-hidden selection:bg-[#3b82f6] selection:text-white">
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHxhAK1FtBzAGalV6Dt-i4aJOS9zk9ckAXtn_0EJmOZwWOIAEIdg2iy1rqTNNZWZy3yBYvl95GcACr0Fg9Bl5XeymTC2o_v2Sc43n6qcmXjgFphdwbcjar6MwonyeCjlTWRuGERtyEIIaoyIqmrq5O3AATJF9m9NbvrZYDfQXLxQ1pVLH575IG4-Y7UXo7MwPgZQId9IW1M1ZHQE_xTqd4osBBEd5B0P1Q2Fq05Pbe9w28YrzZFBStsEkayofgJ2iIdjbwka4e8UI')",
        }}
      />

      <div className="relative z-10 flex flex-col h-screen max-h-screen">
        {/* Header */}
        <header className="glass-panel sticky top-0 z-20 flex items-center justify-between border-b border-white/20 px-6 py-3 bg-white/60 dark:bg-slate-900/60">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-[#3b82f6] dark:text-blue-400">
              <Swords size={32} />
              <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">
                Quest Log
              </h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-slate-600 dark:text-slate-300 hover:text-[#3b82f6] dark:hover:text-blue-400 font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/board"
                className="text-[#3b82f6] dark:text-blue-400 font-bold bg-[#3b82f6]/10 px-3 py-1 rounded-full transition-colors"
              >
                Quests
              </Link>
              <Link
                href="/grimoire"
                className="text-slate-600 dark:text-slate-300 hover:text-[#3b82f6] dark:hover:text-blue-400 font-medium transition-colors"
              >
                Inventory
              </Link>
              <Link
                href="#"
                className="text-slate-600 dark:text-slate-300 hover:text-[#3b82f6] dark:hover:text-blue-400 font-medium transition-colors"
              >
                Guild
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                className="block w-full rounded-full border-none bg-white/50 dark:bg-slate-800/50 py-2 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-[#3b82f6] shadow-sm backdrop-blur-sm"
                placeholder="Search quests..."
              />
            </div>
            <button className="relative p-2 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50 rounded-full transition-colors group">
              <Bell size={24} />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white dark:border-slate-900" />
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] p-[2px] cursor-pointer shadow-md hover:shadow-lg transition-shadow">
              <div className="h-full w-full rounded-full bg-white dark:bg-slate-900 p-[2px]">
                <img
                  alt="User Avatar"
                  className="rounded-full h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoBqhzW5XrD_UNFEKiq2Kntr4Z8uwsH4831Z6wSUGYFt8ffpt6Eqcg0Gh-N76BeWxrHrpYRym-r0TgE5O82vP7JfkqKGYlWyNsXIdhXFjWjMFmHOouvhB8P_n2HaSF9KtBSPs1pgwjj9tTRVWeJF0NXd46GvQrKQdrfMk9AGTXe1X49vmBWzW1im7uIeicPuY1w3rNa0I990Im2NQ7J8xHDQMqVlPY62XWjqcJGSji6yjid6h-xGY3IriYjwK_teBsOytrPcwm1bM"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex overflow-hidden p-6 gap-6">
          {/* Left Side: Stats & Filters */}
          <aside className="hidden lg:flex flex-col gap-6 w-64 shrink-0 overflow-y-auto custom-scrollbar pr-2">
            {/* User Stats Card */}
            <div className="glass-panel rounded-2xl p-5 bg-white/40 dark:bg-slate-800/40 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-800 dark:text-white">
                  Senpai's Stats
                </h3>
                <Activity size={20} className="text-[#3b82f6]" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600 dark:text-slate-300 font-medium">
                      Lvl 12
                    </span>
                    <span className="text-[#3b82f6] font-bold">
                      450 / 1000 XP
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] w-[45%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/50 dark:bg-slate-700/50 rounded-xl p-3 text-center border border-white/20">
                    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                      Streak
                    </div>
                    <div className="text-xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-1">
                      <Flame size={16} className="text-orange-500" />
                      14
                    </div>
                  </div>
                  <div className="bg-white/50 dark:bg-slate-700/50 rounded-xl p-3 text-center border border-white/20">
                    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">
                      Completed
                    </div>
                    <div className="text-xl font-black text-slate-800 dark:text-white flex items-center justify-center gap-1">
                      <CheckCircle size={16} className="text-green-500" />
                      86
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mascot Interaction */}
            <div className="relative mt-auto">
              <div className="absolute -top-16 left-0 right-0 z-20 animate-bounce">
                <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white p-3 rounded-2xl rounded-bl-none shadow-lg border border-[#3b82f6]/20 text-sm font-medium relative">
                  "You're doing great, Senpai! Keep it up!"
                  <div className="absolute -bottom-2 left-0 w-4 h-4 bg-white dark:bg-slate-800 border-b border-l border-[#3b82f6]/20 transform rotate-45 skew-x-12 translate-x-2" />
                </div>
              </div>
              <div className="h-64 w-full rounded-2xl overflow-hidden relative glass-panel bg-[#3b82f6]/5 border-[#3b82f6]/20">
                <img
                  alt="Anime Mascot Character"
                  className="w-full h-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV_g5sY6FDYcqV5o0UQy20PvJPB0ZeEI0qBVgFxqfR4eh0guTXtqAYWtfxV7EZq2DAyDVdUnsGwaQyCES47h2pBlIpFYBMnmN0qeamwt3wCTeWHCEzxJY_W6VNbl_R1YcwzKZtArTp4X7OaqobBcaX2nNIkhA0uLhLUTJtqL6NSuRmlbIYyt5GBqGW-b8Np-8tyof4b0a0Rb6c_mYtjXI0ydVSswoqdRe5pnw-TNxt4EfENPGJKXn3U78TcHtjIW3NmFQm5WOMuiM"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-bold text-sm">Hina-chan</p>
                  <p className="text-white/80 text-xs">Quest Guide</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Side: Kanban Board */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight drop-shadow-sm">
                  Daily Missions
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Manage your tasks and earn rewards.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-[#3b82f6] hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-[#3b82f6]/30 transition-all hover:scale-105 active:scale-95">
                <PlusSquare size={20} />
                <span>New Quest</span>
              </button>
            </div>

            {/* Kanban Columns Container */}
            <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4">
              <div className="flex h-full gap-6 min-w-[1000px]">
                {/* Column 1: To-Do */}
                <div className="flex-1 flex flex-col glass-panel rounded-2xl bg-blue-50/50 dark:bg-slate-800/40 border-t-4 border-t-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  <div className="p-4 border-b border-white/10 flex justify-between items-center">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      To-Do
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold px-2 py-0.5 rounded-md">
                      3
                    </span>
                  </div>
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                    {/* Card Critical */}
                    <Link
                      href="/quest/1"
                      className="block bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 group hover:shadow-md transition-all relative overflow-hidden cursor-pointer"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400 px-2 py-0.5 rounded">
                            CRITICAL
                          </span>
                        </div>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight mb-2">
                        Calculus Final Prep
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">
                        Review integrals and derivatives chapter 4-5. Don't
                        forget the practice problems!
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] text-white font-bold">
                            A
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-[#3b82f6] font-bold text-sm">
                          <Diamond size={16} />
                          <span>150 XP</span>
                        </div>
                      </div>
                    </Link>

                    {/* Card Normal */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 group hover:shadow-md transition-all relative overflow-hidden cursor-pointer">
                      <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-0.5 rounded">
                          NORMAL
                        </span>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight mb-2">
                        Grocery Run
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                        Buy milk, eggs, and snacks for the weekend raid.
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex -space-x-2" />
                        <div className="flex items-center gap-1 text-[#3b82f6] font-bold text-sm">
                          <Diamond size={16} />
                          <span>50 XP</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Low */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 group hover:shadow-md transition-all relative overflow-hidden cursor-pointer opacity-80">
                      <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded">
                          LOW
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight mb-2">
                        Water Plants
                      </h4>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700 mt-2">
                        <div className="flex -space-x-2" />
                        <div className="flex items-center gap-1 text-[#3b82f6] font-bold text-sm">
                          <Diamond size={16} />
                          <span>20 XP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <button className="w-full py-2 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors text-sm font-bold flex items-center justify-center gap-1">
                      <Plus size={18} /> Add Task
                    </button>
                  </div>
                </div>

                {/* Column 2: Ongoing */}
                <div className="flex-1 flex flex-col glass-panel rounded-2xl bg-amber-50/50 dark:bg-slate-800/40 border-t-4 border-t-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                  <div className="p-4 border-b border-white/10 flex justify-between items-center">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      Ongoing
                    </h3>
                    <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-xs font-bold px-2 py-0.5 rounded-md">
                      2
                    </span>
                  </div>
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                    {/* Card Active */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-amber-200 dark:border-amber-900 group hover:shadow-lg transition-all relative overflow-hidden cursor-pointer ring-2 ring-amber-100 dark:ring-amber-900/30">
                      <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-white bg-amber-500 px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                          <RefreshCw size={10} className="animate-spin" />
                          IN PROGRESS
                        </span>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight mb-2">
                        Design Portfolio
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                        Update the case study for the mobile app project.
                      </p>
                      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 mb-3">
                        <div
                          className="bg-amber-500 h-1.5 rounded-full"
                          style={{ width: "60%" }}
                        />
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex items-center text-xs text-slate-500 font-medium">
                          <Clock size={14} className="mr-1" /> 2h left
                        </div>
                        <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold text-sm">
                          <Diamond size={16} />
                          <span>300 XP</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Normal */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 group hover:shadow-md transition-all relative overflow-hidden cursor-pointer">
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-0.5 rounded">
                          SIDE QUEST
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg leading-tight mb-2">
                        Clean Room
                      </h4>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700 mt-2">
                        <div className="flex -space-x-2" />
                        <div className="flex items-center gap-1 text-[#3b82f6] font-bold text-sm">
                          <Diamond size={16} />
                          <span>50 XP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3: Completed */}
                <div className="flex-1 flex flex-col glass-panel rounded-2xl bg-green-50/50 dark:bg-slate-800/40 border-t-4 border-t-green-400 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  <div className="p-4 border-b border-white/10 flex justify-between items-center">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Completed
                    </h3>
                    <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs font-bold px-2 py-0.5 rounded-md">
                      5
                    </span>
                  </div>
                  <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                    {/* Card Done */}
                    <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 group hover:shadow-md transition-all relative overflow-hidden opacity-70 hover:opacity-100">
                      <div className="absolute top-0 left-0 w-1 h-full bg-slate-300 dark:bg-slate-600" />
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded flex items-center gap-1">
                          <CheckCircle size={12} /> DONE
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-700 dark:text-slate-300 text-lg leading-tight mb-2 line-through decoration-2 decoration-green-500/50">
                        Morning Jog
                      </h4>
                      <p className="text-sm text-slate-400 dark:text-slate-500 mb-3">
                        5km run around the park.
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700">
                        <div className="text-xs text-slate-400 italic">
                          Completed 2h ago
                        </div>
                        <div className="flex items-center gap-1 text-slate-400 font-bold text-sm">
                          <Diamond size={16} />
                          <span>100 XP</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Done */}
                    <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 group hover:shadow-md transition-all relative overflow-hidden opacity-70 hover:opacity-100">
                      <div className="absolute top-0 left-0 w-1 h-full bg-slate-300 dark:bg-slate-600" />
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded flex items-center gap-1">
                          <CheckCircle size={12} /> DONE
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-700 dark:text-slate-300 text-lg leading-tight mb-2 line-through decoration-2 decoration-green-500/50">
                        Read Chapter 3
                      </h4>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700 mt-2">
                        <div className="text-xs text-slate-400 italic">
                          Completed yesterday
                        </div>
                        <div className="flex items-center gap-1 text-slate-400 font-bold text-sm">
                          <Diamond size={16} />
                          <span>25 XP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

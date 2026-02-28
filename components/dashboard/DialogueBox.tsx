export default function DialogueBox() {
  return (
    <div className="relative z-10 w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto lg:mr-20 mb-6 lg:mb-12">
      <div className="glass-panel bg-white/80 dark:bg-slate-900/80 p-6 rounded-2xl border-l-4 border-l-[#0d7ff2] shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-start gap-4">
          <div className="shrink-0 hidden sm:block">
            <div className="size-14 rounded-full border-2 border-[#0d7ff2] p-0.5 bg-white dark:bg-slate-800">
              <img
                alt="Character portrait"
                className="w-full h-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhSCi61dfTtW4OlVA50toyU5QXTbzO5oxo8g5paNbHFjPsxmc7j0GcW7TY120xAPscLdLL0xvkwL1bMXVoZ5wFM8CaDxvRN-w4_hgH2nLgZlwApjZoKM51_cdrwD-ZEWZ3y_hbwx8Auk53AT8FEfKEUcrzsztiwGBdo8u35H4lt_Lq9tVlVlrgUPcmP_vhc990Jynm-dVGvLovT_Oblulx_c63LkB-RkLx-i9XVAZEw0pjZ9jF0JQ_9skbbrCvRdp69CfhWoEkHYg"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-bold text-[#0d7ff2] text-lg">Companion</h3>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                Idle
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed font-medium">
              &quot;Welcome back! Don&apos;t forget, we need to finish that API
              refactor before the server reset tonight. I&apos;ve prepared some
              coffee!&quot;
            </p>
            <div className="flex gap-2 mt-4">
              <button className="px-4 py-1.5 rounded-full bg-[#0d7ff2]/10 hover:bg-[#0d7ff2] hover:text-white text-[#0d7ff2] text-sm font-bold transition-all border border-[#0d7ff2]/20">
                Thanks!
              </button>
              <button className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold transition-all">
                Remind me later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

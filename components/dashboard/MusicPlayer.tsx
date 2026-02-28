import { Music } from "lucide-react";

export default function MusicPlayer() {
  return (
    <div className="absolute bottom-6 left-6 z-10 hidden lg:block">
      <div className="glass-panel p-3 rounded-xl bg-black/40 text-white flex items-center gap-3 backdrop-blur-md border border-white/10 hover:bg-black/50 transition-colors cursor-pointer w-64">
        <div
          className="size-10 rounded-lg bg-cover bg-center shrink-0"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoTjK6wUbzgJJtOia9Bk0mTFtHU90unLjh1bwBRo-mKx9Qfo5MFbcUgLIwrV-3Y7BR5aC-YJWPM5jkbHhggRoQzitG0NVZyPNEvkCqsPm32Kb2wEq8LpHbNRd_PETeTOwVEXPXh1pOSleHtW-SuNlLlw_gKvFMWLyS3PmkS8QmVwvr3ND2xDO6bQW-8HKd_kYRyQFsS2ytzqzJjFGb7Lyn6GXgKqM8Mfcc2bX9CYbtM3_D7dBF9H0uTh0BhrDAo1vUHz6HniXMnR0')",
          }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/30 rounded-lg">
            <Music size={16} />
          </div>
        </div>
        <div className="overflow-hidden">
          <p className="text-sm font-bold truncate">Lofi Study Beats</p>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 items-end h-3">
              <div className="w-1 bg-[#0d7ff2] h-2 animate-pulse" />
              <div className="w-1 bg-[#0d7ff2] h-3 animate-pulse delay-75" />
              <div className="w-1 bg-[#0d7ff2] h-1.5 animate-pulse delay-150" />
            </div>
            <span className="text-xs text-slate-300">Playing Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

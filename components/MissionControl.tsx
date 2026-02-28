import NavigationBar from "@/components/dashboard/NavigationBar";
import StatsDashboard from "@/components/dashboard/StatsDashboard";
import MissionsList from "@/components/dashboard/MissionsList";
import DialogueBox from "@/components/dashboard/DialogueBox";
import MusicPlayer from "@/components/dashboard/MusicPlayer";

const BACKGROUND_IMAGE =
  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDp5IPtaBqD8yj2gwX4DeKRUAFBRojHqrZeBbkMolyhjj9-NVgJr4DqKRRIPrlcFa6DVCzcZwjEMbLmlFs9B3-jUNh7LRbGN8h9XH2mO_2_uu1-xsdVnpW8q7u9xzKVY-nlMnZP79szXTpT55rnBDp7OIJYs9YTydyzhZoyMvamTUzgtbiuco_pb2dBOgKOJJ8RsvjRaOgMaRYdASiwMty6T9Db44YYRIJQ3CQlj5JuuDR4I9Dw9Ewo74YLbrLRytbG-nZEiJupgUw')";

const CHARACTER_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXTPJvsZTQnba9Tl61ifnD8BkMk6pJcv4LbukcvYFLCvJWnRkGnZvSVI2AH0pTyYqMCzQp0xWxF3nYVgDTBAm2PQbPhXxdgA_RchwICqVdkprzNBRJERljOFQcgK4vBfN-OcSKPPvepvelEAYMEAIS4yxoyZ1eoST5kWH2UDM4K0eauwGR_7QKcvCgmHN5D8vrTl9n331B3gVGvGUMuDRGRw_sbCmIX4Cb-6QZFmTtC9L0VJnfVgXmwca0Dkn7siJN1k8iWqTq43Y";

export default function MissionControl() {
  return (
    <div className="bg-[#f5f7f8] dark:bg-[#101922] font-spline text-slate-900 dark:text-slate-100 min-h-screen overflow-hidden flex flex-col relative transition-colors duration-300">
      {/* Background layers */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-40 dark:opacity-20"
        style={{ backgroundImage: BACKGROUND_IMAGE }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100/50 via-white/20 to-orange-100/40 dark:from-blue-900/40 dark:via-[#101922]/80 dark:to-purple-900/30 pointer-events-none" />

      <NavigationBar />

      <main className="relative z-10 flex flex-col lg:flex-row flex-1 overflow-hidden pt-24 px-4 pb-4 gap-6 h-full">
        {/* Left: Stats + Missions */}
        <div className="flex flex-col w-full lg:w-5/12 xl:w-1/3 h-full gap-5 overflow-hidden">
          <StatsDashboard />
          <MissionsList />
        </div>

        {/* Right: Character + Dialogue + Music */}
        <div className="flex-1 relative flex flex-col justify-end pb-8 lg:pb-0">
          <div className="absolute inset-0 z-0 flex items-end justify-center lg:justify-end pointer-events-none">
            <div className="absolute bottom-0 right-0 lg:right-20 w-[600px] h-[600px] bg-gradient-to-t from-orange-200/30 to-blue-200/0 rounded-full blur-3xl mix-blend-screen" />
            <img
              alt="Anime style character"
              className="max-h-[85vh] object-contain object-bottom drop-shadow-2xl opacity-90 transition-opacity duration-500 hover:opacity-100"
              src={CHARACTER_IMAGE}
              style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>

          <DialogueBox />
          <MusicPlayer />
        </div>
      </main>
    </div>
  );
}

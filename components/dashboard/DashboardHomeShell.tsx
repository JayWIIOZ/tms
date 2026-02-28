import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import CommandBar from "@/components/dashboard/CommandBar";
import DeliveryRisk from "@/components/dashboard/DeliveryRisk";
import GovernancePanel from "@/components/dashboard/GovernancePanel";
import MyFocus from "@/components/dashboard/MyFocus";
import MyQueue from "@/components/dashboard/MyQueue";
import OkrHealth from "@/components/dashboard/OkrHealth";
import TeamHealth from "@/components/dashboard/TeamHealth";
import WorkloadBalance from "@/components/dashboard/WorkloadBalance";

export default function DashboardHomeShell() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f5f7f8] font-spline text-slate-900 transition-colors duration-300 dark:bg-[#101922] dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-blue-100/60 via-white/15 to-indigo-100/40 dark:from-blue-950/40 dark:via-[#101922]/75 dark:to-indigo-950/30" />
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#0d7ff2]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10" />

      <CommandBar />

      <main className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-4 pb-8 pt-28 lg:px-6">
        <section className="space-y-3">
          <div className="px-1">
            <h2 className="text-sm font-black uppercase tracking-wider text-[#0d7ff2]">
              Personal Execution Layer
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              What I should push in the next few hours.
            </p>
          </div>
          <div className="grid gap-6 xl:grid-cols-12">
            <div className="xl:col-span-4">
              <MyFocus />
            </div>
            <div className="xl:col-span-8">
              <MyQueue />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="px-1">
            <h2 className="text-sm font-black uppercase tracking-wider text-[#0d7ff2]">
              Team Operation Layer
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Delivery health, risk exposure, and workload distribution.
            </p>
          </div>
          <div className="grid gap-6 xl:grid-cols-12">
            <div className="xl:col-span-4">
              <TeamHealth />
            </div>
            <div className="xl:col-span-4">
              <DeliveryRisk />
            </div>
            <div className="xl:col-span-4">
              <OkrHealth />
            </div>
            <div className="xl:col-span-5">
              <WorkloadBalance />
            </div>
            <div className="xl:col-span-7">
              <ActivityTimeline />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="px-1">
            <h2 className="text-sm font-black uppercase tracking-wider text-[#0d7ff2]">
              Governance Layer
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Access control, audit highlights, and system notices.
            </p>
          </div>
          <GovernancePanel />
        </section>
      </main>
    </div>
  );
}

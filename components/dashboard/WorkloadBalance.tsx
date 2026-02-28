import { BarChart3 } from "lucide-react";
import WidgetShell from "@/components/dashboard/WidgetShell";

const MEMBERS = [
  { id: "m-1", name: "Alex", score: 78, tasks: 9 },
  { id: "m-2", name: "Sora", score: 64, tasks: 7 },
  { id: "m-3", name: "Mina", score: 89, tasks: 12 },
  { id: "m-4", name: "Kai", score: 55, tasks: 6 },
];

export default function WorkloadBalance() {
  return (
    <WidgetShell
      title="Workload Balance"
      description="Member capacity and risk spread"
      icon={<BarChart3 size={20} />}
    >
      <div className="space-y-2.5">
        {MEMBERS.map((member) => (
          <div
            key={member.id}
            className="rounded-xl border border-white/60 bg-white/55 p-3 dark:border-white/10 dark:bg-slate-800/60"
          >
            <div className="mb-2 flex items-center justify-between text-sm">
              <p className="font-bold text-slate-800 dark:text-slate-100">
                {member.name}
              </p>
              <p className="font-bold text-slate-600 dark:text-slate-300">
                {member.tasks} tasks
              </p>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-[#0d7ff2] to-[#6ea8ff]"
                style={{ width: `${member.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

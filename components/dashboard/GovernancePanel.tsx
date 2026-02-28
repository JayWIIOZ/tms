import { ShieldCheck } from "lucide-react";
import WidgetShell from "@/components/dashboard/WidgetShell";

const ACCESS_CHANGES = [
  "Kai promoted Ember to VIEWER in Project Atlas",
  "Alex revoked guest invite for staging board",
];

const AUDIT_HIGHLIGHTS = [
  "TASK-128 priority changed HIGH -> CRITICAL",
  "Board reorder batch committed (23 items)",
];

const SYSTEM_NOTICES = [
  "Webhook retry queue at 92% threshold",
  "Redis latency spiked to 170ms for 2m",
];

export default function GovernancePanel() {
  return (
    <WidgetShell
      title="Governance & Audit"
      description="Security, role updates, and platform notices"
      icon={<ShieldCheck size={20} />}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-white/60 bg-white/55 p-3 dark:border-white/10 dark:bg-slate-800/60">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Access & Role Changes
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            {ACCESS_CHANGES.map((item) => (
              <li key={item} className="rounded-lg bg-white/70 p-2 dark:bg-slate-700/40">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/60 bg-white/55 p-3 dark:border-white/10 dark:bg-slate-800/60">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Audit Highlights
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            {AUDIT_HIGHLIGHTS.map((item) => (
              <li key={item} className="rounded-lg bg-white/70 p-2 dark:bg-slate-700/40">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/60 bg-white/55 p-3 dark:border-white/10 dark:bg-slate-800/60">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
            System Notices
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            {SYSTEM_NOTICES.map((item) => (
              <li key={item} className="rounded-lg bg-white/70 p-2 dark:bg-slate-700/40">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WidgetShell>
  );
}

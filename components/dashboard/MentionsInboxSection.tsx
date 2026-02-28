import { AtSign, MessageSquare, ShieldCheck } from "lucide-react";
import DashboardWidgetShell from "@/components/dashboard/DashboardWidgetShell";

const inboxItems = [
  {
    type: "Mention",
    content: "Amy mentioned you in Task #T-1042",
    time: "2m ago",
    tone: "bg-blue-500/10 text-blue-600 dark:text-blue-300",
  },
  {
    type: "Assignment",
    content: "You were assigned to 'Design API retries'",
    time: "17m ago",
    tone: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  },
  {
    type: "Approval",
    content: "Need your approval on KR-2.1 adjustment",
    time: "42m ago",
    tone: "bg-amber-500/10 text-amber-600 dark:text-amber-300",
  },
];

export default function MentionsInboxSection() {
  return (
    <DashboardWidgetShell
      title="Mentions & Inbox"
      subtitle="@me, assignment updates and approvals"
      badge="7 new"
      actionLabel="Open all"
      icon={<MessageSquare size={20} />}
    >
      <div className="space-y-3">
        {inboxItems.map((item) => (
          <article
            key={item.content}
            className="rounded-xl border border-white/40 bg-white/70 p-3 dark:border-white/10 dark:bg-slate-900/40"
          >
            <div className="mb-1 flex items-center justify-between gap-3">
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${item.tone}`}>
                {item.type}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {item.time}
              </span>
            </div>
            <p className="text-sm text-slate-800 dark:text-slate-100">{item.content}</p>
          </article>
        ))}
        <div className="rounded-xl border border-dashed border-[#0d7ff2]/40 bg-[#0d7ff2]/5 px-3 py-2 text-xs text-[#0d7ff2]">
          <AtSign size={12} className="mr-1 inline-block" />
          Mentions are grouped by project and auto-prioritized.
          <ShieldCheck size={12} className="ml-1 inline-block" />
        </div>
      </div>
    </DashboardWidgetShell>
  );
}

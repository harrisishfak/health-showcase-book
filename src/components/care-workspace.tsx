import { useState } from "react";
import nigashLogo from "@/assets/nigashlogo.png";
import { Activity, ArrowUpRight, BarChart2, Briefcase, CalendarDays, Check, ChevronDown, ChevronRight, CircleCheck, ClipboardList, FileText, LayoutDashboard, MessageSquare, PanelLeft, Plug, Search, Settings, ShieldCheck, Sparkles, Target, UserCheck, Users, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const views = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "mywork", label: "My Work", icon: Briefcase },
  { id: "individuals", label: "My Individuals", icon: UserCheck },
  { id: "assessment", label: "Assessment Builder", icon: ClipboardList },
  { id: "iep-compliance", label: "IEP Compliance", icon: ShieldCheck },
  { id: "staff", label: "Staff Management", icon: Users },
  { id: "leads", label: "Leads Management", icon: Target },
  { id: "ieps", label: "Active IEPs", icon: FileText },
  { id: "scheduling", label: "Scheduling", icon: CalendarDays },
  { id: "reports", label: "Reports & Analytics", icon: BarChart2 },
  { id: "family", label: "Family Communication", icon: MessageSquare },
  { id: "integrations", label: "Integrations", icon: Plug },
] as const;
type View = typeof views[number]["id"];

const ieps = [
  { initials: "YS", name: "Yahya Saad", goal: "Progress to 2–3 word phrases", status: "On Track", color: "#22c55e", progress: 82 },
  { initials: "AY", name: "Ayesha Yousuf", goal: "Social skills development", status: "On Track", color: "#22c55e", progress: 91 },
  { initials: "MR", name: "Muhammad Raza", goal: "Follow 2-step instructions accurately", status: "Needs Attention", color: "#f97316", progress: 67 },
];
const sessions = [ { initials: "YS", name: "Yahya Saad", therapy: "Yahya will progress to 2–3 word phrases.", prefix: "Session:", time: "Excellent Progress (Score: 5)", status: "Logged" }, { initials: "AY", name: "Ayesha Yousuf", therapy: "Social skills", prefix: "Session:", time: "Average Progress (Score: 3)", status: "Logged" }, { initials: "MR", name: "Muhammad Raza", therapy: "Follow 2-step instructions accurately.", prefix: "Session:", time: "",status: "Pending" } ];
const goals = [{ name: "Yahya will progress to 2–3 word phrases.", value: 82, tone: "teal" }, { name: "Follow 2-step instructions accurately.", value: 67, tone: "blue" }, { name: "Social skills", value: 91, tone: "amber" }];

const iepData = [
  { label: "On Track", count: 3, color: "#22c55e" },
  { label: "Needs Attention", count: 2, color: "#f97316" },
  { label: "Need Support", count: 1, color: "#ef4444" },
];

export function CareWorkspace({ compact = false }: { compact?: boolean }) {
  const [view, setView] = useState<View>("overview");
  const [iepTooltip, setIepTooltip] = useState<null | { label: string; count: number; color: string }>(null);
  const primaryViews = views.slice(0, 6);
  return <div className={`care-workspace ${compact ? "workspace-compact" : ""}`}>
    <div className="workspace-chrome"><div className="chrome-dots"><span/><span/><span/></div><span><span className="secure-dot"/>carevirt / provider workspace</span></div>
    <div className="workspace-body"><aside className="workspace-sidebar"><div className="workspace-center"><span className="center-monogram"><img src={nigashLogo} alt="Nigash Foundation" className="center-monogram-logo"/></span><div>Nigash Foundation<small>Provider Command Center</small></div></div><div className="workspace-menu" role="tablist" aria-label="Product preview views">
  {primaryViews.map(v => <Button key={v.id} variant="ghost" role="tab" aria-selected={v.id === "overview"} aria-controls="workspace-panel" id={`workspace-${v.id}`} className={`workspace-menu-item${v.id !== "overview" ? " workspace-menu-item--locked" : ""}`} data-active={v.id === "overview"} onClick={v.id === "overview" ? () => setView(v.id) : e => e.preventDefault()}><v.icon/>{v.label}</Button>)}
  <div className="workspace-more-btn"><ChevronDown size={11}/>More modules</div>
</div><div className="workspace-team"><span className="workspace-team-icon"><Settings size={12}/></span><span className="workspace-team-info">Dr. Shahzal<small>Administrator</small></span></div></aside>
      <div className="workspace-content" id="workspace-panel" role="tabpanel" aria-labelledby={`workspace-${view}`}><div className="workspace-breadcrumb"><span><PanelLeft size={14}/>Workspace <ChevronRight size={12}/> {views.find(v => v.id === view)?.label}</span><Search size={15}/></div><div className="workspace-heading"><div><div className="workspace-kicker">Provider Command Center</div><h3>{view === "overview" ? "Good Morning, Dr. Shahzal" : view === "sessions" ? "Today’s care, all in view." : "Small steps. Shared goals."}</h3><p>{view === "overview" ? "" : view === "sessions" ? "See who’s scheduled and what’s been completed." : "Keep each individual’s progress visible to the team."}</p></div><div className="workspace-live-group"><span className="workspace-live"><span/>All connected</span><button className="workspace-quick-btn">Ask Bloomy</button><button className="workspace-quick-btn">Search IEP Report</button><button className="workspace-quick-btn">Developmental Milestones</button></div></div>
        <div className="workspace-metrics">
          <div className="workspace-metric"><div><span>Active individuals</span><UsersRound size={16}/></div><strong>27</strong><small>Care starts with a complete picture</small></div>
          <div className="workspace-metric workspace-metric--iep"><div><span>IEP Compliance</span><span className="iep-active-plans"><ClipboardList size={10}/>5 Active Plans</span></div>
            <div className="iep-chart-wrap">
              <div className="iep-chart-container">
                <svg viewBox="0 0 64 64" className="iep-chart" aria-label="IEP Compliance chart">
                  <g className="iep-arc-group" onMouseEnter={() => setIepTooltip(iepData[0])} onMouseLeave={() => setIepTooltip(null)}>
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#e8e8e8" strokeWidth="5"/>
                    <circle cx="32" cy="32" r="28" fill="none" stroke="#22c55e" strokeWidth="5" strokeDasharray="127 49" strokeLinecap="round" transform="rotate(-90 32 32)"/>
                  </g>
                  <g className="iep-arc-group" onMouseEnter={() => setIepTooltip(iepData[1])} onMouseLeave={() => setIepTooltip(null)}>
                    <circle cx="32" cy="32" r="19" fill="none" stroke="#e8e8e8" strokeWidth="5"/>
                    <circle cx="32" cy="32" r="19" fill="none" stroke="#f97316" strokeWidth="5" strokeDasharray="54 66" strokeLinecap="round" transform="rotate(-90 32 32)"/>
                  </g>
                  <g className="iep-arc-group" onMouseEnter={() => setIepTooltip(iepData[2])} onMouseLeave={() => setIepTooltip(null)}>
                    <circle cx="32" cy="32" r="10" fill="none" stroke="#e8e8e8" strokeWidth="5"/>
                    <circle cx="32" cy="32" r="10" fill="none" stroke="#ef4444" strokeWidth="5" strokeDasharray="13 50" strokeLinecap="round" transform="rotate(-90 32 32)"/>
                  </g>
                </svg>
                {iepTooltip && (
                  <div className="iep-tooltip" style={{ borderColor: iepTooltip.color }}>
                    <span className="iep-tooltip-dot" style={{ background: iepTooltip.color }}/>
                    <span><strong>{iepTooltip.count}</strong> {iepTooltip.label}</span>
                  </div>
                )}
              </div>
              <div className="iep-legend">
                <span><i style={{background:"#22c55e"}}/>On Track</span>
                <span><i style={{background:"#f97316"}}/>Needs Attention</span>
                <span><i style={{background:"#ef4444"}}/>Need Support</span>
              </div>
            </div>
          </div>
          <div className="workspace-metric"><div><span>Today's Sessions</span><CalendarDays size={16}/></div><strong>08</strong><small>Your team’s day, coordinated</small></div>
        </div>
        <div className={`workspace-detail ${view === "sessions" ? "sessions-expanded" : ""} ${view === "ieps" ? "ieps-expanded" : ""}`}>
          {view !== "plans" && view !== "ieps" && <section className="workspace-sessions"><div className="workspace-panel-heading"><h4>Today’s sessions</h4><span>3 of 8 shown</span></div>{sessions.map(s => <div className="workspace-session" key={s.initials}><span className="workspace-avatar">{s.initials}</span><div><strong>{s.name}</strong><small>{"prefix" in s && s.prefix ? <><b>{s.prefix}</b> {s.therapy}</> : s.therapy}</small></div>{s.time && <time>{s.time}</time>}<span className="workspace-status" data-complete={s.status === "Logged"}>{s.status === "Logged" && <Check size={11}/>}<span>{s.status}</span></span></div>)}</section>}
          {view !== "sessions" && view !== "ieps" && <section className="workspace-goals"><div className="workspace-panel-heading"><h4>{view === "plans" ? "Individualized goals" : "IEP goal progress"}</h4><Activity size={14}/></div>{goals.map(g => <div className="workspace-goal" key={g.name}><div><span>{g.name}</span><strong>{g.value}%</strong></div><progress value={g.value} max={100} data-tone={g.tone} aria-label={`${g.name} goal progress`}/></div>)}<div className="workspace-goal-foot"><CircleCheck size={13}/>Every session moves a goal forward.</div></section>}
          {view === "ieps" && <section className="workspace-ieps"><div className="workspace-panel-heading"><h4>Active IEPs</h4><span>{ieps.length} plans</span></div>{ieps.map(iep => <div className="workspace-iep-row" key={iep.initials}><span className="workspace-avatar">{iep.initials}</span><div className="workspace-iep-body"><div className="workspace-iep-top"><strong>{iep.name}</strong><span className="workspace-iep-status" style={{color:iep.color, background:iep.color+"18"}}>{iep.status}</span></div><small>{iep.goal}</small><div className="workspace-iep-bar"><div className="workspace-iep-fill" style={{width:`${iep.progress}%`, background:iep.color}}/></div></div><span className="workspace-iep-pct" style={{color:iep.color}}>{iep.progress}%</span></div>)}</section>}
        </div><div className="workspace-insight"><div className="insight-symbol"><Sparkles size={16}/></div><div><strong>Bloomy AI <span>· Your care assistant</span></strong><p>Bring progress patterns into focus. Give your team more context for the next step.</p></div><ArrowUpRight size={16}/></div>
      </div></div>
  </div>;
}
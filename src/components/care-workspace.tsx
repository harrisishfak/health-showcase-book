import { Bell, CalendarDays, CircleHelp, ClipboardList, Clock, House, ListChecks, Search, Settings, ShieldCheck, Sparkles, Sprout, UserRound, UsersRound } from "lucide-react";

const nav = [House, ListChecks, UserRound, ClipboardList, CalendarDays, UsersRound, Clock, CircleHelp, Settings];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const onboarded = [2,3,3,5,7,6,8,9,11,12,14,16];

export function CareWorkspace({ compact = false }: { compact?: boolean }) {
  const max = Math.max(...onboarded);
  const pts = onboarded.map((v, i) => `${(i / 11) * 100},${40 - (v / max) * 34}`).join(" ");
  return <div className={`pcc ${compact ? "pcc-compact" : ""}`} role="img" aria-label="Illustrative CareVirt Provider Command Center with sample data">
    <aside className="pcc-rail"><span className="pcc-logo">CV</span>{nav.map((Icon, i) => <span key={i} className="pcc-rail-icon" data-active={i === 0}><Icon size={15}/></span>)}</aside>
    <div className="pcc-main">
      <div className="pcc-top"><span className="pcc-sample">Sample data</span><span className="pcc-user"><Bell size={13}/><span className="pcc-avatar">MC</span>My care center</span></div>
      <div className="pcc-head"><div><h3>Provider Command Center</h3><p>Good morning, care team</p></div><div className="pcc-actions"><span><Sparkles size={11}/>Ask Bloomy</span><span><Search size={11}/>Search IEP Report</span><span><Sprout size={11}/>Developmental Milestones</span></div></div>
      <div className="pcc-cards">
        <div className="pcc-card"><h4>Active Individuals</h4><div className="pcc-row"><strong>27</strong><svg viewBox="0 0 60 34" className="pcc-gauge"><path d="M5 30a25 25 0 0 1 50 0" className="track"/><path d="M5 30a25 25 0 0 1 43 -17" className="fill"/></svg></div><small>of 35 capacity · 77%</small></div>
        <div className="pcc-card"><h4>Incident Reports</h4><div className="pcc-row"><strong>2</strong><div className="pcc-mini-bars">{[30,55,20,70,40].map((h,i) => <span key={i} style={{ height: `${h}%` }}/>)}</div></div><small>This year · all resolved</small></div>
        <div className="pcc-card"><h4>My Today Tasks</h4><div className="pcc-row"><strong>6</strong><ListChecks size={18} className="pcc-muted"/></div><div className="pcc-progress"><span style={{ width: "66%" }}/></div><small>Completed 4 · Pending 2</small></div>
        <div className="pcc-card"><h4>IEP Compliance</h4><div className="pcc-row"><svg viewBox="0 0 36 36" className="pcc-donut"><circle cx="18" cy="18" r="14" className="track"/><circle cx="18" cy="18" r="14" className="fill" strokeDasharray="70 88"/></svg><ul><li><i data-tone="ok"/>On track 11</li><li><i data-tone="warn"/>Attention 3</li><li><i data-tone="alert"/>Support 1</li></ul></div><small>15 active plans</small></div>
      </div>
      <div className="pcc-lower">
        <div className="pcc-card pcc-chart"><h4>Individuals Onboarded (2026)</h4><svg viewBox="0 0 100 42" preserveAspectRatio="none"><polygon points={`0,42 ${pts} 100,42`} className="area"/><polyline points={pts} className="line"/></svg><div className="pcc-months">{months.map(m => <span key={m}>{m}</span>)}</div></div>
        <div className="pcc-side">
          <div className="pcc-card pcc-teal"><h4><ShieldCheck size={12}/>Today’s Compliance</h4><strong>100%</strong><small>As of today</small></div>
          <div className="pcc-card pcc-navy"><h4><CalendarDays size={12}/>Today’s Sessions</h4><ul><li>Logged <b>5</b></li><li>Pending <b>3</b></li></ul></div>
          <div className="pcc-card pcc-staff"><h4><UsersRound size={12}/>Staff Performance</h4><ul><li><i data-tone="ok"/>On track <b>9</b></li><li><i data-tone="warn"/>Monitor <b>2</b></li></ul></div>
        </div>
      </div>
    </div>
  </div>;
}

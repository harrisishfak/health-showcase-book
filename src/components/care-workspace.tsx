import { Accessibility, Bell, CalendarDays, ClipboardList, Clock, FileSearch, HelpCircle, Home, Settings, Sparkles, UsersRound } from "lucide-react";
import { BrandMark } from "./site-shell";

const railIcons = [Home, ClipboardList, Accessibility, CalendarDays, Clock, UsersRound, HelpCircle, Settings];

export function CareWorkspace({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`care-workspace ${compact ? "workspace-compact" : ""}`} role="img" aria-label="Illustrative CareVirt Provider Command Center dashboard with active individuals, tasks, IEP compliance, and today's sessions. Sample data.">
      <div className="workspace-chrome">
        <div className="chrome-dots"><span /><span /><span /></div>
        <span><span className="secure-dot" />app.carevirt.com / provider / dashboard</span>
        <span className="workspace-sample">Sample data</span>
      </div>
      <div className="workspace-body">
        <aside className="ws-rail" aria-hidden="true">
          <span className="ws-rail-logo"><BrandMark /></span>
          {railIcons.map((Icon, i) => <span className="ws-rail-icon" data-active={i === 0} key={i}><Icon size={14} /></span>)}
        </aside>
        <div className="ws-main">
          <div className="ws-head">
            <div>
              <h3>Provider Command Center</h3>
              <p>Good morning, Harris — here’s your center today.</p>
            </div>
            <div className="ws-actions">
              <span className="ws-pill ws-pill-ai"><Sparkles size={11} />Ask Bloomy</span>
              <span className="ws-pill"><FileSearch size={11} />Search IEP Report</span>
              <span className="ws-pill"><Accessibility size={11} />Milestones</span>
              <span className="ws-bell"><Bell size={13} /><i>3</i></span>
            </div>
          </div>
          <div className="ws-cards">
            <div className="ws-card ws-card-blue">
              <div className="ws-card-top"><strong>Active Individuals</strong></div>
              <div className="ws-card-row">
                <div><b>27</b><small>of 40 capacity</small></div>
                <svg viewBox="0 0 60 34" className="ws-gauge" aria-hidden="true">
                  <path d="M6 30 A24 24 0 0 1 54 30" fill="none" strokeWidth="6" className="gauge-track" />
                  <path d="M6 30 A24 24 0 0 1 44 12" fill="none" strokeWidth="6" strokeLinecap="round" className="gauge-fill" />
                  <text x="30" y="30" textAnchor="middle">68%</text>
                </svg>
              </div>
            </div>
            <div className="ws-card ws-card-orange">
              <div className="ws-card-top"><strong>Incident Reports</strong></div>
              <div className="ws-card-row">
                <div><b>2</b><small>This year (2026)</small></div>
                <div className="ws-minibars" aria-hidden="true">{[8, 14, 10, 18, 12, 22].map((h, i) => <span key={i} style={{ height: h }} />)}</div>
              </div>
            </div>
            <div className="ws-card ws-card-teal">
              <div className="ws-card-top"><strong>My Today Tasks</strong></div>
              <div className="ws-card-row">
                <div><b>6</b><small>Sun, 18 Oct 2026</small></div>
              </div>
              <div className="ws-taskbar" aria-hidden="true"><span /></div>
              <div className="ws-tasklegend"><span><i className="dot-done" />Completed 4</span><span><i className="dot-pending" />Pending 2</span></div>
            </div>
            <div className="ws-card ws-card-violet">
              <div className="ws-card-top"><strong>IEP Compliance</strong><em>16 active plans</em></div>
              <div className="ws-card-row">
                <svg viewBox="0 0 36 36" className="ws-donut" aria-hidden="true">
                  <circle cx="18" cy="18" r="14" className="donut-track" />
                  <circle cx="18" cy="18" r="14" className="donut-a" />
                  <circle cx="18" cy="18" r="14" className="donut-b" />
                </svg>
                <ul className="ws-legend">
                  <li><i className="dot-done" />On Track<b>12</b></li>
                  <li><i className="dot-warn" />Needs Attention<b>3</b></li>
                  <li><i className="dot-risk" />Needs Support<b>1</b></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ws-grid">
            <div className="ws-panel ws-chart">
              <strong>Individuals Onboarded (2026)</strong>
              <svg viewBox="0 0 300 110" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="wsArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" className="area-top" />
                    <stop offset="1" className="area-bottom" />
                  </linearGradient>
                </defs>
                <path d="M0 105 C 30 105 45 100 60 78 C 75 56 85 30 100 28 C 115 26 125 60 140 86 C 155 106 170 108 185 84 C 200 60 210 24 225 22 C 240 20 252 62 265 88 C 278 104 290 105 300 105 L 300 110 L 0 110 Z" className="area-fill" />
                <path d="M0 105 C 30 105 45 100 60 78 C 75 56 85 30 100 28 C 115 26 125 60 140 86 C 155 106 170 108 185 84 C 200 60 210 24 225 22 C 240 20 252 62 265 88 C 278 104 290 105 300 105" fill="none" className="area-line" />
              </svg>
              <div className="ws-months" aria-hidden="true">{["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map(m => <span key={m}>{m}</span>)}</div>
            </div>
            <div className="ws-panel ws-compliance">
              <strong>Today’s Compliance</strong>
              <b>92%</b>
              <small>As of today</small>
              <div className="ws-compliance-bar" aria-hidden="true"><span /></div>
            </div>
            <div className="ws-panel ws-sessions">
              <strong>Today’s Sessions</strong>
              <div className="ws-card-row">
                <svg viewBox="0 0 36 36" className="ws-donut" aria-hidden="true">
                  <circle cx="18" cy="18" r="14" className="donut-track donut-track-dark" />
                  <circle cx="18" cy="18" r="14" className="donut-a donut-a-light" />
                </svg>
                <ul className="ws-legend ws-legend-dark">
                  <li><i className="dot-done" />Logged<b>5</b></li>
                  <li><i className="dot-warn" />Pending<b>3</b></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

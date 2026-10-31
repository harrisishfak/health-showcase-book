import { LayoutDashboard, CalendarDays, UsersRound, ClipboardList, ChartNoAxesCombined, Settings, Sparkles, Bell, ChevronDown, Check } from "lucide-react";
import { BrandMark } from "./site-shell";

export function ProductPreview() {
  return <div className="provider-preview" role="img" aria-label="Illustrative CareVirt Provider Command Center. Sample data.">
    <div className="provider-preview-header"><div><div className="provider-preview-kicker"><span className="product-live-dot"/>Live · Sample view</div><strong>Provider Command Center</strong></div><BrandMark/></div>
    <div className="provider-preview-body">
      <div className="provider-alert"><span className="provider-alert-dot"/><div><strong>Sara Raza is unavailable today.</strong><p>Her 3 sessions have been flagged for reassignment.</p></div><span className="provider-alert-badge"><Check size={9}/>Handled</span></div>
      <div className="provider-divider"/>
      <div className="provider-section-head"><span>Team accountability</span><span>Today</span></div>
      <div className="provider-team-row"><span className="provider-session-avatar">AM</span><div><strong>Ali Malik</strong><small>ABA Therapist · 2 sessions</small></div><span className="provider-team-status" data-active="true">Logged</span></div>
      <div className="provider-team-row"><span className="provider-session-avatar">NF</span><div><strong>Nadia Farooq</strong><small>OT Specialist · 2 sessions</small></div><span className="provider-team-status" data-active="true">Logged</span></div>
      <div className="provider-team-row"><span className="provider-session-avatar">MK</span><div><strong>Maria Khan</strong><small>Speech Therapist · 1 session</small></div><span className="provider-team-status" data-active="false">Pending</span></div>
      <div className="provider-divider"/>
      <div className="provider-insight"><Sparkles size={11}/><span>Muhammad's IEP goal is slipping. <strong>Review recommended before Thursday.</strong></span></div>
    </div>
  </div>;
}
export function BloomyNote() { return <div className="bloomy-note"><strong><Sparkles size={13}/> A little help from Bloomy AI</strong><p>See patterns in progress. Make the next care decision with more context.</p></div>; }

export function GuardianPreview() { return <div className="guardian-preview"><div className="eyebrow"><UsersRound size={15}/> Guardian Confidence Hub · Sample view</div><h4>Every small step matters.</h4><p>Your child’s care journey, shared with you.</p><div className="guardian-update"><strong>Today’s session is complete ✓</strong><p>Yahya practiced asking for help and taking turns. His therapist has shared a session update.</p></div><div className="guardian-update"><strong>A goal worth celebrating</strong><div className="progress-row"><div className="progress-label"><span>Communication</span><strong>82%</strong></div><div className="progress-track"><span className="progress-82"/></div></div><p>Keep up with care plans, milestones, and the team supporting your child.</p></div></div>; }
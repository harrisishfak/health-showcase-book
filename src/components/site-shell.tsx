import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, ChevronDown, Brain, GraduationCap, Activity, Users, Accessibility, Home, Building2, MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import cvLogo from "@/assets/cv_upscale_png.png";

export function BrandMark() {
  return <svg className="brand-mark" viewBox="0 0 40 42" fill="none" aria-hidden="true"><path d="M26 4C11 2 2 11 2 21s9 19 24 17V28c-8 2-13-1-13-7s5-9 13-7V4Z" fill="currentColor"/><path d="M29 10h9v9h-9zM29 23h9v9h-9z" fill="currentColor"/></svg>;
}
export function Brand() { return <Link to="/" className="brand" aria-label="CareVirt home"><img src={cvLogo} alt="CareVirt" className="brand-logo"/>CareVirt</Link>; }
const links = [] as const;

const cvStandardsCategories = [
  {
    heading: "Care & Clinical Outcomes",
    items: [
      { label: "Individual Management & Records", desc: "Manage individuals, demographics, facesheets and clinical records." },
      { label: "Individualised Care Plans", desc: "Create, manage, and automate individualised BSP/IEP care plans." },
      { label: "Individualised Assessments", desc: "Evaluate individual needs to guide targeted, clinical interventions." },
      { label: "Progress Tracking & Reporting", desc: "Track real-time progress and generate reports in one click." },
      { label: "Incident Reporting & Alerts", desc: "Log incidents, identify patterns, and instantly notify participants." },
      { label: "Goal Setting & Milestones", desc: "Set benchmarks and track progress toward milestones." },
    ],
  },
  {
    heading: "Workforce & Operations",
    items: [
      { label: "Session Scheduling & Logging", desc: "Schedule, automate, and capture care delivery effortlessly." },
      { label: "Staffing & Team Management", desc: "Manage staff, roles, schedules, and accountability." },
      { label: "Work & Task Management", desc: "Provide staff a focused view of assigned tasks and daily responsibilities." },
      { label: "Care Attendance", desc: "Track attendance across all scheduled care sessions." },
      { label: "Role-Based Access", desc: "Control access across teams and responsibilities." },
    ],
  },
  {
    heading: "Connectivity & Expansion",
    items: [
      { label: "Guardian Portal", desc: "Keep guardians informed and engaged in care." },
      { label: "Cross-Zone Care", desc: "Coordinate care across different time zones." },
      { label: "Mobile Accessibility", desc: "Access essential workflows and updates from any device." },
      { label: "Leads Management", desc: "Capture, organize, and manage prospective clients." },
      { label: "Business Integrations", desc: "Embed forms, portals, and authentication into your workspace." },
    ],
  },
];

function CVStandardsDropdown({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const path = useRouterState({ select: s => s.location.pathname });
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <div ref={ref} className={`login-dropdown-wrap cv-standards-wrap${className ? " " + className : ""}`}>
      <button className="nav-link header-login" onClick={() => setOpen(o => !o)} aria-haspopup="true" aria-expanded={open}>
        CV Standards <ChevronDown className={`login-chevron${open ? " open" : ""}`} aria-hidden="true"/>
      </button>
      {open && (
        <div className="cv-standards-dropdown" role="menu">
          {cvStandardsCategories.map(cat => (
            <div key={cat.heading} className="cv-standards-col">
              <div className="cv-standards-heading">{cat.heading}</div>
              {cat.items.map(item => (
                <div key={item.label} className="cv-standards-item">
                  <strong>{item.label}</strong>
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
const whoWeServeItems = [
  { label: "Autism & Special Needs Centers", icon: Brain },
  { label: "Special Education Schools & Centers", icon: GraduationCap },
  { label: "Therapy & Rehabilitation Centers", icon: Activity },
  { label: "Multidisciplinary Care Teams", icon: Users },
  { label: "Disability & IDD Service Providers", icon: Accessibility },
  { label: "Guardians & Families", icon: Home },
  { label: "Community & Nonprofit Care Organizations", icon: Building2 },
];

const operatingCountries = [
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "South Africa", flag: "🇿🇦" },
];

function WhereWeOperateDropdown({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const path = useRouterState({ select: s => s.location.pathname });
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <div ref={ref} className={`login-dropdown-wrap${className ? " " + className : ""}`}>
      <button className="nav-link header-login" onClick={() => setOpen(o => !o)} aria-haspopup="true" aria-expanded={open}>
        Where We Operate <ChevronDown className={`login-chevron${open ? " open" : ""}`} aria-hidden="true"/>
      </button>
      {open && (
        <div className="login-dropdown who-dropdown operate-dropdown" role="menu">
          <div className="operate-dropdown-title">Supporting care across borders</div>
          {operatingCountries.map(({ name, flag }) => (
            <div key={name} className="login-dropdown-item who-dropdown-item who-readonly operate-item">
              <span className="operate-flag">{flag}</span>{name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function WhoWeServeDropdown({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const path = useRouterState({ select: s => s.location.pathname });
  const isActive = path === "/who-we-serve";
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <div ref={ref} className={`login-dropdown-wrap${className ? " " + className : ""}`}>
      <button className={`nav-link header-login${isActive ? " who-active" : ""}`} onClick={() => setOpen(o => !o)} aria-haspopup="true" aria-expanded={open}>
        Who we serve <ChevronDown className={`login-chevron${open ? " open" : ""}`} aria-hidden="true"/>
      </button>
      {open && (
        <div className="login-dropdown who-dropdown" role="menu">
          <div className="who-dropdown-heading">Who We Serve</div>
          {whoWeServeItems.map(({ label, icon: Icon }) => (
            <div key={label} className="login-dropdown-item who-dropdown-item who-readonly">
              <span className="who-dropdown-icon"><Icon/></span>{label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function LoginDropdown({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <div ref={ref} className={`login-dropdown-wrap${className ? " " + className : ""}`}>
      <button className="nav-link header-login" onClick={() => setOpen(o => !o)} aria-haspopup="true" aria-expanded={open}>
        Log in <ChevronDown className={`login-chevron${open ? " open" : ""}`} aria-hidden="true"/>
      </button>
      {open && (
        <div className="login-dropdown" role="menu">
          <a href="https://app.carevirt.com/providers/sign_in" className="login-dropdown-item" role="menuitem">
            Provider Login <ArrowUpRight/>
          </a>
          <a href="https://app.carevirt.com/guardians/sign_in" className="login-dropdown-item" role="menuitem">
            Guardian Login <ArrowUpRight/>
          </a>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: s => s.location.pathname });
  useEffect(() => { setOpen(false); }, [path]);
  return <div className="wrap"><header className="site-header"><Brand/><nav className="desktop-nav" aria-label="Main navigation"><CVStandardsDropdown/>{links.map(l => <Link key={l.to} to={l.to} className="nav-link" activeProps={{ "data-status": "active" }}>{l.label}</Link>)}<WhereWeOperateDropdown/><WhoWeServeDropdown/></nav><div className="header-actions"><LoginDropdown/><Button asChild><a href="https://app.carevirt.com/sign_up">Start Free Trial <ArrowUpRight/></a></Button><Button className="mobile-menu-trigger" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button></div>{open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation"><CVStandardsDropdown className="mobile-login"/>{links.map(l => <Link key={l.to} to={l.to} className="nav-link">{l.label}</Link>)}<WhereWeOperateDropdown className="mobile-login"/><WhoWeServeDropdown className="mobile-login"/><LoginDropdown className="mobile-login"/></nav>}</header></div>;
}
export function ScrollToTopWidget() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 300); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button className="scroll-top-fab" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
      <ArrowUp size={20}/>
    </button>
  );
}

export function MessengerWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="messenger-widget">
      {open && (
        <div className="messenger-popup">
          <div className="messenger-popup-header">
            <div className="messenger-popup-avatar"><MessageCircle size={18}/></div>
            <div>
              <strong>CareVirt Support</strong>
              <span>Typically replies in a few hours</span>
            </div>
            <button className="messenger-popup-close" onClick={() => setOpen(false)} aria-label="Close"><X size={16}/></button>
          </div>
          <div className="messenger-popup-body">
            <div className="messenger-bubble">
              <p>Hi there! Have a question about CareVirt? We're here to help.</p>
            </div>
          </div>
          <div className="messenger-popup-actions">
            <a href="https://www.facebook.com/carevirt/" target="_blank" rel="noopener noreferrer" className="messenger-cta">Send us a message <ArrowUpRight size={14}/></a>
          </div>
        </div>
      )}
      <button className="messenger-fab" onClick={() => setOpen(o => !o)} aria-label="Open messenger">
        {open ? <X size={22}/> : <MessageCircle size={22}/>}
        {!open && <span className="messenger-pulse"/>}
      </button>
    </div>
  );
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="wrap"><div className="footer-top"><div className="footer-brand"><Brand/><p>AI-powered IDD care management for low-resource settings — helping care centers work smarter, coordinate care, and deliver better outcomes.</p></div><div className="footer-column"><h4>Product</h4><a href="https://play.google.com/store/apps/details?id=com.icb.ichildbloom" target="_blank" rel="noopener noreferrer">PlayStore App</a><a href="https://app.carevirt.com/calculator" target="_blank" rel="noopener noreferrer">ROI Calculator</a><a href="https://app.carevirt.com/verify-certificate" target="_blank" rel="noopener noreferrer">Verify Certificate</a></div><div className="footer-column"><h4>CareVirt</h4><a href="/#about-us">About Us</a><a href="/#what-carevirt-offers">Why CareVirt</a><Link to="/submit-inquiry">Pricing</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/submit-inquiry">Contact Us</Link><a href="https://app.carevirt.com/super_users/sign_in" target="_blank" rel="noopener noreferrer">Admin Login</a></div><div className="footer-column"><h4>Let’s talk</h4><a href="mailto:sales@carevirt.com">sales@carevirt.com</a><a href="mailto:carevirt@gmail.com">carevirt@gmail.com</a><a href="tel:+923477789945">+92 347 778 9945</a><span>Lahore, Pakistan</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} CareVirt. All rights reserved.</span><div style={{display:"flex",gap:"20px",alignItems:"center"}}><span>Purpose-built for autism & IDD care.</span><Link to="/privacy-policy" style={{color:"inherit",textDecoration:"none",fontSize:"12px"}}>Privacy Policy</Link></div></div></div></footer>;
}
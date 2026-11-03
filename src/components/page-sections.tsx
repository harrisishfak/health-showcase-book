import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check, Clock3, HeartHandshake, ChevronLeft, ChevronRight, Heart, Activity, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { RelationshipFlow } from "@/components/relationship-flow";
import { Button } from "./ui/button";
import { features } from "@/lib/site-content";

export function Eyebrow({ children }: { children: React.ReactNode }) { return <div className="eyebrow"><span className="eyebrow-dot"/>{children}</div>; }
export function PageIntro({ eyebrow, title, description, action = false }: { eyebrow:string; title:React.ReactNode; description:string; action?:boolean }) { return <div className="wrap"><section className="page-intro hero-reveal"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p>{action && <div className="hero-buttons"><Button asChild size="lg"><a href="https://app.carevirt.com/sign_up">Start Free Trial <ArrowUpRight/></a></Button></div>}</section></div>; }
export function CheckList({ items }: {items:string[]}) { return <ul className="check-list">{items.map(i => <li key={i}><Check/>{i}</li>)}</ul>; }
export function FeatureSection() { return <section className="light-band"><div className="wrap"><div className="section-head"><div><Eyebrow>What CareVirt offers</Eyebrow><h2 className="section-title">Your everyday care tools.<br/>Connected in one place.</h2></div><p className="section-copy">Manage the details of care with practical tools for autism centers, special education teams, and independent providers.</p></div><div className="feature-grid">{features.map(f => <article className="feature-item" key={f.short}><div className="feature-icon"><f.icon/></div><h3>{f.short}</h3><p>{f.text}</p></article>)}</div><Button asChild size="lg"><Link to="/platform">Explore the platform <ArrowUpRight/></Link></Button></div></section>; }
export function ModuleSection() {
 const [module,setModule] = useState<"provider"|"guardian">("provider");
 return <section className="standard-band"><div className="wrap"><Eyebrow>One platform. A more connected circle of care.</Eyebrow><h2 className="section-title">For your team. For their families.</h2><div className="module-tabs" role="tablist" aria-label="Platform modules"><Button variant="tab" data-active={module === "provider"} role="tab" aria-selected={module === "provider"} aria-controls="module-panel" id="provider-tab" onClick={() => setModule("provider")}>Provider Command Center</Button><Button variant="tab" data-active={module === "guardian"} role="tab" aria-selected={module === "guardian"} aria-controls="module-panel" id="guardian-tab" onClick={() => setModule("guardian")}>Guardian Confidence Hub</Button></div><div className="module-layout" id="module-panel" role="tabpanel" aria-labelledby={`${module}-tab`}><div className="module-content"><div className="eyebrow eyebrow--muted">{module === "provider" ? "For directors, admins & care teams" : "For parents & guardians"}</div><h3>{module === "provider" ? "A clear view of your center. A stronger foundation for care." : "Feel every step of your child's progress."}</h3><p>{module === "provider" ? "Know what’s scheduled, what’s completed, and where attention is needed. Give your whole team one reliable place to coordinate care and manage daily operations." : "You trust us with the most important person in your life. The least we can do is make sure you never feel left out. With CareVirt, every milestone, every session, every small win — you feel it as it happens."}</p><CheckList items={module === "provider" ? ["Always in Control", "Zero Admin Chaos", "Real-Time Progress. Real Trust.", "Accountability Built In", "Structured Care, Visible Always"] : ["Always Informed", "Closer to Your Child", "Support in Your Language", "Trust at Every Step"]}/></div><div className="module-visual"><RelationshipFlow/></div></div></div></section>;
}
export function StepsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <section id="how-it-works" className="light-band"><div className="wrap"><div className="section-head"><div><Eyebrow>See CareVirt in Action</Eyebrow><h2 className="section-title">Get up and running<br/>in 3 simple steps.</h2></div><p className="section-copy">You don’t have to figure it out alone. We help your team move from scattered workflows to structured care.</p></div><div className="steps-wrap" ref={ref} data-visible={visible}><div className="steps"><article style={{"--step-delay":"100ms"} as React.CSSProperties}><div className="step-number"><span>1</span><span>Let’s Talk</span></div><h3>Book a Personalized Demo.</h3><p>Tell us about your team, your workflow, and your challenges. We’ll walk you through how CareVirt can fit.</p><div className="step-meta"><Clock3/>30-minute personalized demo</div></article><article style={{"--step-delay":"300ms"} as React.CSSProperties}><div className="step-number"><span>2</span><span>Make It Yours</span></div><h3>Bring your team on board.</h3><p>Work with a CareVirt representative to set up your center and train staff around their everyday roles.</p><div className="step-meta"><HeartHandshake/>1-3 Days</div></article><article style={{"--step-delay":"500ms"} as React.CSSProperties}><div className="step-number"><span>3</span><span>Keep Moving</span></div><h3>Go live with support.</h3><p>Launch your center on CareVirt with confidence. Our team stays with you for ongoing support whenever needed.</p><div className="step-meta"><Check/>Ongoing support</div></article></div></div></div></section>;
}
const reviews = [
  { initials:"IS", name:"Dr. Imtisal Safdar", role:"Care professional", quote:"CareVirt completely transformed how we manage our 50+ clients. It has streamlined our daily operations, improved documentation, and made collaboration across our team much easier. Highly recommended for any autism or special education center in low-resource settings." },
  { initials:"SP", name:"Samina Parveen", role:"Care professional", quote:"Before CareVirt, we were drowning in paperwork. Now our therapists spend more time with children and less time writing notes. The progress tracking feature is outstanding." },
  { initials:"SM", name:"Sara Manzoor", role:"Care professional", quote:"The Guardian Portal has been a game changer for us. Our parents are more engaged than ever in their children's therapy goals. CareVirt truly understands the needs of care centers in low-resource settings." },
];
export function AboutSection() {
  const features = [
    { icon: Heart, title:"Care That Actually Reaches People", body:"When admin burden drops, therapists show up fully — and individuals feel the difference." },
    { icon: Activity, title:"Growth That Doesn't Break Systems", body:"More clients, more staff, more sessions — CareVirt keeps your center structured as it scales." },
    { icon: Users, title:"Built for Your World", body:"We're not a generic software company. We work specifically with Autism and Special Needs Centers — your challenges are ones we know well." },
  ];
  const outcomes = [
    { icon: Heart, color:"#226BA8", title:"Consistent, Personalized Care", body:"Every individual gets the attention they deserve." },
    { icon: Activity, color:"#7c3aed", title:"Maximum Center Impact", body:"Streamlined operations, stronger outcomes." },
    { icon: Users, color:"#f97316", title:"Built for Independence", body:"Helping individuals move toward more independent lives." },
  ];
  return (
    <section id="about-us" className="about-cv-section">
      <div className="wrap">
        <div className="about-cv-layout">
          <div className="about-cv-left">
            <Eyebrow>About CareVirt</Eyebrow>
            <h2 className="about-cv-heading">Eliminate the chaos.<br/><span>Amplify the care.</span></h2>
            <p className="about-cv-desc">We eliminate operational chaos and growth breakdowns from Autism and Special Needs Centers — so they can focus on what they're actually here to do: deliver consistent care, improve outcomes, and scale their impact.</p>
            <div className="about-cv-features">
              {features.map(({ icon: Icon, title, body }) => <div className="about-cv-feature" key={title}>
                <span className="about-cv-icon"><Icon size={18}/></span>
                <div><strong>{title}</strong><p>{body}</p></div>
              </div>)}
            </div>
          </div>
          <div className="about-cv-right">
            {outcomes.map(({ icon: Icon, color, title, body }) => <div className="about-cv-outcome" key={title}>
              <span className="about-cv-outcome-icon" style={{background:`color-mix(in srgb,${color} 12%,transparent)`, color}}><Icon size={18}/></span>
              <div><strong>{title}</strong><p>{body}</p></div>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
export function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIdx(i => (i + 1) % reviews.length);
  const r = reviews[idx];
  return (
    <section className="testimonial-section">
      <div className="wrap">
        <Eyebrow>From the people delivering care</Eyebrow>
        <div className="testimonial-card">
          <span className="testimonial-mark">"</span>
          <div className="testimonial-stars">{"★★★★★"}</div>
          <blockquote>{r.quote}</blockquote>
          <div className="testimonial-author">
            <span className="testimonial-avatar">{r.initials}</span>
            <div><strong>{r.name}</strong><span>{r.role}</span></div>
            <div className="testimonial-nav">
              <button className="testimonial-arrow" onClick={prev} aria-label="Previous review"><ChevronLeft size={16}/></button>
              <div className="testimonial-dots">{reviews.map((_,i) => <span key={i} className="testimonial-dot" data-active={i === idx} onClick={() => setIdx(i)}/>)}</div>
              <button className="testimonial-arrow" onClick={next} aria-label="Next review"><ChevronRight size={16}/></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function CtaSection() { return <section className="wrap cta-band"><div><Eyebrow>Better systems. More human care.</Eyebrow><h2 className="mt-4">Give care the clarity it deserves.</h2><p>Let’s talk about your center — and what a simpler day could look like.</p></div><Button asChild size="lg"><a href="https://app.carevirt.com/sign_up">Start Free Trial <ArrowUpRight/></a></Button></section>; }
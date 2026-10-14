import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, ModuleSection, StepsSection, CtaSection } from "@/components/page-sections";
import { OperatingCountries } from "@/components/operating-countries";
import { pageHead } from "@/lib/site-content";
import { CareWorkspace } from "@/components/care-workspace";
import { OfferingsSection } from "@/components/offerings-section";

export const Route = createFileRoute("/")({
  head: () => pageHead("Autism & IDD care-management software", "CareVirt brings individual profiles, sessions, care plans, and family updates together. Purpose-built for autism and IDD care in low-resource settings."),
  component: Index,
});
function Index() {
 return <main><section className="welcome-hero modern-hero"><div className="wrap"><div className="welcome-copy hero-reveal"><Eyebrow>CareVirt · Built for autism & IDD care</Eyebrow><h1>A connected center.<br/><em>A clearer path to progress.</em></h1><p>Bring your team, sessions, and care plans together.<br/>Spend less time managing the details — and more time moving care forward.</p><div className="hero-buttons"><Button asChild size="lg"><Link to="/book-demo">See CareVirt in action <ArrowUpRight/></Link></Button><Button asChild size="lg" variant="outline"><Link to="/platform">Explore the platform <ArrowRight/></Link></Button></div><div className="benefit-strip"><span><Check/>Built for specialized care</span><span><Check/>Supported onboarding</span><span><Check/>Free personalized demo</span></div></div><div className="workspace-hero-stage hero-reveal"><CareWorkspace/></div></div></section><OperatingCountries/><OfferingsSection/><ModuleSection/><StepsSection/><section className="wrap quote-layout"><div><Eyebrow>From the people delivering care</Eyebrow><h2 className="section-title">Helping teams<br/>focus on care.</h2></div><div><blockquote>“CareVirt completely transformed how we manage our 50+ clients. It has streamlined our daily operations, improved documentation, and made collaboration across our team much easier.”</blockquote><p className="quote-author">Dr. Imtisal Safdar <span aria-hidden="true">—</span> Care professional</p></div></section><CtaSection/></main>;
}

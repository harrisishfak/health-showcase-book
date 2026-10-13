import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, FeatureSection, ModuleSection, StepsSection, CtaSection } from "@/components/page-sections";
import { OperatingCountries } from "@/components/operating-countries";
import { pageHead } from "@/lib/site-content";
import careStats from "@/assets/care-stats.jpg";

export const Route = createFileRoute("/")({
  head: () => pageHead("Autism & IDD care-management software", "CareVirt brings individual profiles, sessions, care plans, and family updates together. Purpose-built for autism and IDD care in low-resource settings."),
  component: Index,
});
function Index() {
 return <main><section className="welcome-hero"><div className="wrap"><div className="welcome-copy hero-reveal"><Eyebrow>CareVirt · Autism & IDD care management</Eyebrow><h1>Better organized care.<br/><em>More meaningful progress.</em></h1><p>CareVirt helps autism and special needs providers manage sessions, care plans, and progress in one place — while keeping teams and families connected.</p><div className="hero-buttons"><Button asChild size="lg"><Link to="/book-demo">Book a free demo <ArrowUpRight/></Link></Button><Button asChild size="lg" variant="outline"><Link to="/platform">Explore our platform <ArrowRight/></Link></Button></div><div className="hero-footnote">A free, 30-minute conversation about your center’s needs.</div><div className="benefit-strip"><span><Check/>Simpler daily operations</span><span><Check/>Visible care progress</span><span><Check/>Connected families</span></div></div><figure className="stats-figure hero-reveal"><img className="stats-image" src={careStats} alt="Illustrative CareVirt statistics: 27 active individuals, 15 care plans, 8 sessions, weekly session chart and IEP goal progress. Sample data." width={1536} height={1024}/><figcaption>Sample data shown for illustration.</figcaption></figure></div></section><OperatingCountries/><FeatureSection/><ModuleSection/><StepsSection/><section className="wrap quote-layout"><div><Eyebrow>From the people delivering care</Eyebrow><h2 className="section-title">Helping teams<br/>focus on care.</h2></div><div><blockquote>“CareVirt completely transformed how we manage our 50+ clients. It has streamlined our daily operations, improved documentation, and made collaboration across our team much easier.”</blockquote><p className="quote-author">Dr. Imtisal Safdar <span aria-hidden="true">—</span> Care professional</p></div></section><CtaSection/></main>;
}

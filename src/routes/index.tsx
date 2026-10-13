import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Heart, Building2, UsersRound, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, FeatureSection, ModuleSection, StepsSection, CtaSection } from "@/components/page-sections";
import { ProductPreview, BloomyNote } from "@/components/product-preview";
import { pageHead } from "@/lib/site-content";
import careSession from "@/assets/care-session.jpg";

export const Route = createFileRoute("/")({
  head: () => pageHead("Autism & IDD care-management software", "CareVirt brings individual profiles, sessions, care plans, and family updates together. Purpose-built for autism and IDD care in low-resource settings."),
  component: Index,
});
function Index() {
 return <main><section className="home-hero"><div className="wrap"><div className="hero-top hero-reveal"><div><Eyebrow>Purpose-built for autism & IDD care</Eyebrow><h1 className="hero-title">Care management.<br/><em>With people at its heart.</em></h1></div><div className="hero-aside"><p>Less paperwork. More time for people.<br/>CareVirt connects your team, care plans, and families — so your center can focus on progress, not process.</p><div className="hero-buttons"><Button asChild size="lg"><Link to="/book-demo">Book a demo <ArrowUpRight/></Link></Button><Button asChild variant="ghost"><Link to="/platform">Explore platform <ArrowRight/></Link></Button></div><div className="hero-footnote">A personal walkthrough. No pressure. No commitment.</div></div></div><div className="hero-bottom hero-reveal"><div className="photo-wrap"><img className="care-photo" src={careSession} alt="A therapist and child working together with colorful learning blocks" width={1536} height={1024}/><div className="photo-caption"><div>Behind every goal, there’s a person.<span>Keep them at the center of care.</span></div><Heart size={22} className="text-primary"/></div></div><div className="product-stage"><ProductPreview/><BloomyNote/></div></div><div className="audience-strip"><span>Specialized care deserves<br/>specialized software.</span><div className="audience-types"><span><Building2/>Autism & IDD centers</span><span><UsersRound/>Special education teams</span><span><Stethoscope/>Independent providers</span></div></div></div></section><FeatureSection/><ModuleSection/><StepsSection/><section className="wrap quote-layout"><div><Eyebrow>From the people delivering care</Eyebrow><h2 className="section-title">Less admin.<br/>More impact.</h2></div><div><blockquote>“CareVirt completely transformed how we manage our 50+ clients. It has streamlined our daily operations, improved documentation, and made collaboration across our team much easier.”</blockquote><p className="quote-author">Dr. Imtisal Safdar <span aria-hidden="true">—</span> Care professional</p></div></section><CtaSection/></main>;
}

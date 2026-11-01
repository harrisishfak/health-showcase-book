import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow, ModuleSection, StepsSection, CtaSection, TestimonialCarousel, AboutSection } from "@/components/page-sections";
import { OperatingCountries } from "@/components/operating-countries";
import { pageHead } from "@/lib/site-content";
import { CareWorkspace } from "@/components/care-workspace";
import { OfferingsSection } from "@/components/offerings-section";

const heroWords = ["Made Simpler.", "Better Connected.", "Built Around Every Individual."];

export const Route = createFileRoute("/")({
  head: () => pageHead("Autism & Special Needs Care Software", "CareVirt connects care teams, families, and essential care information to support coordinated care, track individual progress, and improve continuity for autism and special-needs centres."),
  component: Index,
});
function Index() {
 const [wordIdx, setWordIdx] = useState(0);
 const [fade, setFade] = useState(true);
 useEffect(() => {
   const interval = setInterval(() => {
     setFade(false);
     setTimeout(() => {
       setWordIdx(i => (i + 1) % heroWords.length);
       setFade(true);
     }, 400);
   }, 5000);
   return () => clearInterval(interval);
 }, []);
 return <main>
  <section className="welcome-hero modern-hero">
    <div className="wrap">
      <div className="welcome-copy hero-reveal">
        <Eyebrow>Transforming Long-term Complex Care in Low-Resource Settings</Eyebrow>

        <h1>Autism & Special Needs Care,<br/>
        <em className="hero-rotating-word" style={{opacity: fade ? 1 : 0, transition: "opacity 0.4s ease"}}>{heroWords[wordIdx]}</em>
        </h1>

        <p>We help care centres deliver consistent, person-centred care — simplifying daily operations, improving efficiency, and strengthening family trust, so clients stay longer and every individual achieves better outcomes.</p><div className="hero-buttons"><Button asChild size="lg"><Link to="/submit-inquiry">Book a Demo <ArrowUpRight/></Link></Button><Button asChild size="lg" variant="outline"><a href="#how-it-works">See CareVirt in Action <ArrowRight/></a></Button></div><div className="benefit-strip"><span><Check/>Care Visibility Is The New Standard.</span><span><Check/>Staff Changes Shouldn't Disrupt Care.</span><span><Check/>Turn Invisible Care into Visible Progress.</span></div></div><div className="workspace-hero-stage hero-reveal"><CareWorkspace/></div></div></section><OperatingCountries/><OfferingsSection/><ModuleSection/><StepsSection/><TestimonialCarousel/><AboutSection/><CtaSection/></main>;
}

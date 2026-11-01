import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock3 } from "lucide-react";
import { Eyebrow } from "@/components/page-sections";
import { pageHead } from "@/lib/site-content";
import { InquiryForm } from "@/components/inquiry-form";

export const Route = createFileRoute("/submit-inquiry")({
  head: () => pageHead("Book your free CareVirt demo", "Book a free 30-minute CareVirt demo. Tell us about your care center and see how connected profiles, scheduling, care plans, and family updates could fit your workflow."),
  component: BookDemo,
});

function BookDemo() {
  return (
    <main className="demo-page">
      <div className="wrap">
        <div className="demo-split">

          {/* Left — Info */}
          <div className="demo-left">
            <Eyebrow>Book a Free Personalized Demo.</Eyebrow>
            <h1 className="demo-left-title">Simplify Autism & Special Needs Care<br/><em>with CareVirt.</em></h1>
            <p className="demo-left-desc">Book a free, 30-minute demo. Tell us your challenges, and we'll show you how CareVirt can help — no commitment.</p>

            <div className="demo-what-to-expect">
              <div className="demo-expect-head"><Clock3 size={15}/> What to expect</div>
              <p>We'll contact you within 1 business day to confirm your demo and send calendar details.</p>
            </div>

            <div className="demo-contact-list">
              <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}><a href="mailto:sales@carevirt.com"><Mail size={15}/>sales@carevirt.com</a><a href="mailto:carevirt@gmail.com"><Mail size={15}/>carevirt@gmail.com</a></div>
              <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}><a href="tel:+923477789945"><Phone size={15}/>+92 347 778 9945</a><a href="tel:04237452839"><Phone size={15}/>042-37452839</a></div>
              <span><MapPin size={15}/>Lahore, Pakistan</span>
            </div>
          </div>

          {/* Right — Inquiry Form */}
          <div className="demo-right demo-right--fallback">
            <InquiryForm/>
          </div>

        </div>
      </div>
    </main>
  );
}

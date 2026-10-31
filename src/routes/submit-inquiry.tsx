import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock3 } from "lucide-react";
import { Eyebrow } from "@/components/page-sections";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/submit-inquiry")({
  head: () => pageHead("Book your free CareVirt demo", "Book a free 30-minute CareVirt demo. Tell us about your care center and see how connected profiles, scheduling, care plans, and family updates could fit your workflow."),
  component: BookDemo,
});

function BookDemo() {
  const iframeSrc = import.meta.env.VITE_DEMO_FORM_URL as string;
  return (
    <main className="demo-page">
      <div className="wrap">
        <div className="demo-split">

          {/* Left — Info */}
          <div className="demo-left">
            <Eyebrow>A conversation, not a commitment</Eyebrow>
            <h1 className="demo-left-title">Simplify Autism & Special Needs Care<br/><em>with CareVirt.</em></h1>
            <p className="demo-left-desc">Book a free, 30-minute walkthrough. We'll listen to your challenges and show you how CareVirt could work for your center — no pressure, no commitment.</p>

<div className="demo-what-to-expect">
              <div className="demo-expect-head"><Clock3 size={15}/> What to expect</div>
              <p>After submitting, a CareVirt representative will reach out within 1 business day to confirm your demo time and send calendar details.</p>
            </div>

            <div className="demo-contact-list">
              <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}><a href="mailto:sales@carevirt.com"><Mail size={15}/>sales@carevirt.com</a><a href="mailto:carevirt@gmail.com"><Mail size={15}/>carevirt@gmail.com</a></div>
              <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}><a href="tel:+923477789945"><Phone size={15}/>+92 347 778 9945</a><a href="tel:04237452839"><Phone size={15}/>042-37452839</a></div>
              <span><MapPin size={15}/>Lahore, Pakistan</span>
            </div>
          </div>

          {/* Right — Embedded Rails form */}
          <div className="demo-right demo-right--iframe">
            <iframe
              src={iframeSrc}
              width="100%"
              height="900"
              frameBorder="0"
              scrolling="no"
              style={{ border: "none", borderRadius: "12px", overflow: "hidden", display: "block" }}
              title="Book a Demo — CareVirt"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

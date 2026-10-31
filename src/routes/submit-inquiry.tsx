import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Check, Clock3 } from "lucide-react";
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
            <h1 className="demo-left-title">See what a clearer<br/><em>day could look like.</em></h1>
            <p className="demo-left-desc">Book a free, 30-minute walkthrough. We'll listen to your challenges and show you how CareVirt could work for your center — no pressure, no commitment.</p>

            <ul className="demo-benefits">
              {[
                "A walkthrough tailored to your workflow",
                "A closer look at the tools your team needs",
                "Clear answers on setup and pricing",
                "No pressure or commitment required",
              ].map(item => (
                <li key={item}><span className="demo-check"><Check size={13}/></span>{item}</li>
              ))}
            </ul>

            <div className="demo-what-to-expect">
              <div className="demo-expect-head"><Clock3 size={15}/> What to expect</div>
              <p>After submitting, a CareVirt representative will reach out within 1 business day to confirm your demo time and send calendar details.</p>
            </div>

            <div className="demo-contact-list">
              <a href="mailto:sales@carevirt.com"><Mail size={15}/>sales@carevirt.com</a>
              <a href="tel:+923477789945"><Phone size={15}/>+92 347 778 9945</a>
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

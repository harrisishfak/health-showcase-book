import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock3, RefreshCw, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Eyebrow } from "@/components/page-sections";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/submit-inquiry")({
  head: () => pageHead("Book your free CareVirt demo", "Book a free 30-minute CareVirt demo. Tell us about your care center and see how connected profiles, scheduling, care plans, and family updates could fit your workflow."),
  component: BookDemo,
});

function BookDemo() {
  const iframeSrc = import.meta.env["VITE_DEMO_FORM_URL"] as string;
  const [timedOut, setTimedOut] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [key, setKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    setTimedOut(false);
    setDismissed(false);
    timerRef.current = setTimeout(() => {
      setTimedOut(true);
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, [key]);

  function handleRetry() {
    setKey(k => k + 1);
  }

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

          {/* Right — Embedded Rails form */}
          <div className="demo-right demo-right--iframe">
            <div style={{position:"relative"}}>
              <iframe
                key={key}
                src={iframeSrc}
                width="100%"
                height="900"
                frameBorder="0"
                scrolling="no"
                style={{ border: "none", borderRadius: "12px", overflow: "hidden", display: "block" }}
                title="Book a Demo — CareVirt"
              />
              {timedOut && !dismissed && (
                <div className="iframe-fallback">
                  <button className="iframe-dismiss-btn" onClick={() => setDismissed(true)} aria-label="Dismiss"><X size={14}/></button>
                  <p>The form is taking longer than expected to load.</p>
                  <button className="iframe-retry-btn" onClick={handleRetry}>
                    <RefreshCw size={15}/> Reload Inquiry Form
                  </button>
                  <p style={{fontSize:"13px",color:"var(--muted-foreground)",margin:0}}>
                    or<br/><a href="https://www.facebook.com/carevirt/" target="_blank" rel="noopener noreferrer" style={{color:"#226BA8",fontWeight:700,textDecoration:"underline",textUnderlineOffset:"3px"}}>Contact us here</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

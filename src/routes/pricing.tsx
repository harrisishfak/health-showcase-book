import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, X, Calculator } from "lucide-react";
import { CheckList, CtaSection, Eyebrow } from "@/components/page-sections";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site-content";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => pageHead("Pricing", "Simple, transparent pricing for care organizations in Pakistan and internationally. Every 2 individuals give you one staff seat and one role."),
  component: Pricing,
});

type Plan = {
  name: string;
  currency: string;
  pricePerIndividual: number;
  originalPrice?: number;
  signupUrl: string;
  badge: string;
  badgeClass: string;
};

const PLANS: Record<string, Plan> = {
  domestic: {
    name: "Pakistan",
    currency: "PKR",
    pricePerIndividual: 999,
    originalPrice: 1499,
    signupUrl: "https://app.carevirt.com/sign_up?tab=provider_organization",
    badge: "Domestic",
    badgeClass: "price-card-badge--green",
  },
  international: {
    name: "Global Markets",
    currency: "USD",
    pricePerIndividual: 7,
    signupUrl: "https://app.carevirt.com/sign_up?tab=provider_organization",
    badge: "International",
    badgeClass: "price-card-badge--blue",
  },
};

function EstimateModal({ plan, onClose }: { plan: Plan; onClose: () => void }) {
  const [raw, setRaw] = useState("10");
  const count = parseInt(raw) || 0;
  const selectRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    selectRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const underMin = raw === "" || count < 10;
  const overLimit = count > 100;
  const staffSeats = Math.floor(count / 2);
  const roles = Math.floor(count / 2);
  const monthly = count * plan.pricePerIndividual;
  const fmt = (n: number) =>
    plan.currency === "PKR"
      ? `${n.toLocaleString()} PKR`
      : `$${n.toLocaleString()}`;

  return (
    <div className="estimate-overlay" onClick={onClose}>
      <div className="estimate-modal" onClick={e => e.stopPropagation()}>
        <button className="estimate-close" onClick={onClose} aria-label="Close"><X size={18} /></button>

        <div className="estimate-header">
          <Calculator size={20} />
          <div>
            <p className="estimate-plan-label">Estimate for</p>
            <strong className="estimate-plan-name">{plan.name}</strong>
          </div>
        </div>

        <label className="estimate-label" htmlFor="est-count">Number of individuals</label>
        <div className="estimate-input-row">
          <input
            ref={selectRef}
            id="est-count"
            className={`estimate-input${underMin ? " estimate-input--error" : ""}`}
            type="number"
            min={1}
            value={raw}
            placeholder="e.g. 20"
            onChange={e => setRaw(e.target.value)}
          />
          <span className="estimate-input-min">min. 10</span>
        </div>
        {underMin && (
          <p className="estimate-undermin">Minimum plan starts at 10 individuals.</p>
        )}

        {!underMin && (overLimit ? (
          <div className="estimate-overlimit">
            <p>For more than 100 individuals, let's talk about a custom plan.</p>
            <Button asChild size="lg" className="estimate-contact-btn">
              <a href="/submit-inquiry">Contact Us <ArrowUpRight size={16} /></a>
            </Button>
          </div>
        ) : (
          <>
            <div className="estimate-result">
              <div className="estimate-row">
                <span>Individuals</span>
                <strong>{count}</strong>
              </div>
              <div className="estimate-row">
                <span>Staff seats</span>
                <strong>{staffSeats}</strong>
              </div>
              <div className="estimate-row">
                <span>Roles</span>
                <strong>{roles}</strong>
              </div>
              <div className="estimate-row">
                <span>All modules</span>
                <strong>Included</strong>
              </div>
              <div className="estimate-row estimate-row--total">
                <span>Monthly total</span>
                <div className="estimate-total-price">
                  {plan.originalPrice && (
                    <s className="estimate-was">{fmt(count * plan.originalPrice)}</s>
                  )}
                  <strong>{fmt(monthly)}</strong>
                </div>
              </div>
            </div>
            <p className="estimate-note">
              {plan.currency === "PKR" ? "First-year introductory price." : "Flat rate."} Billed monthly.
            </p>
            <Button asChild variant="paper" size="lg" className="estimate-trial-btn">
              <a href={plan.signupUrl}>Start Free Trial Today! <ArrowUpRight size={16} /></a>
            </Button>
          </>
        ))}
      </div>
    </div>
  );
}

function Pricing() {
  const [modal, setModal] = useState<string | null>(null);
  const activePlan = modal ? PLANS[modal] : null;

  return (
    <main>
      {activePlan && (
        <EstimateModal plan={activePlan} onClose={() => setModal(null)} />
      )}

      <section className="pricing-hero">
        <div className="wrap">
          <Eyebrow>Plans &amp; Pricing</Eyebrow>
          <h1 className="pricing-hero-title">
            Straightforward pricing,<br />
            <em>wherever you are.</em>
          </h1>
          <p className="pricing-hero-desc">
            Every 2 individuals in your package include one staff seat and one role. Choose your region to get started.
          </p>

          <div className="pricing-grid">

            {/* Domestic */}
            <article className="price-card">
              <div className="price-card-region">
                <span className="price-card-badge price-card-badge--green">Domestic</span>
              </div>
              <h2>Pakistan</h2>
              <div className="price-card-countries">
                <span>🇵🇰 Pakistan</span>
              </div>
              <div className="price-card-pricing">
                <div className="price-card-was">
                  <s>1499 PKR</s>
                  <span>/ per individual / mo</span>
                </div>
                <div className="price-card-now">
                  <strong>999</strong>
                  <div className="price-card-unit">
                    <span className="price-card-currency">PKR</span>
                    <span className="price-card-period">/ per individual / mo</span>
                  </div>
                </div>
                <p className="price-card-note">First-year introductory price</p>
              </div>
              <CheckList items={[
                "1 staff seat per 2 individuals",
                "1 role per 2 individuals",
                "Access to all modules",
              ]} />
              <div className="price-actions">
                <Button asChild size="lg" className="price-action">
                  <a href="https://app.carevirt.com/sign_up?tab=provider_organization&region=domestic">
                    Start Free Trial <ArrowUpRight />
                  </a>
                </Button>
                <Button variant="paper" size="lg" className="price-action" onClick={() => setModal("domestic")}>
                  <Calculator size={16} /> Get Estimate
                </Button>
              </div>
            </article>

            {/* International */}
            <article className="price-card">
              <div className="price-card-region">
                <span className="price-card-badge price-card-badge--blue">International</span>
              </div>
              <h2>Global Markets</h2>
              <div className="price-card-countries">
                <span>🇬🇭 Ghana</span>
                <span>🇿🇦 South Africa</span>
                <span>🇧🇩 Bangladesh</span>
              </div>
              <div className="price-card-pricing">
                <div className="price-card-was price-card-was--empty" aria-hidden="true" />
                <div className="price-card-now">
                  <strong>$7</strong>
                  <div className="price-card-unit">
                    <span className="price-card-currency">USD</span>
                    <span className="price-card-period">/ per individual / mo</span>
                  </div>
                </div>
                <p className="price-card-note">Flat rate</p>
              </div>
              <CheckList items={[
                "1 staff seat per 2 individuals",
                "1 role per 2 individuals",
                "Access to all modules",
              ]} />
              <div className="price-actions">
                <Button asChild size="lg" className="price-action">
                  <a href="https://app.carevirt.com/sign_up?tab=provider_organization&region=international">
                    Start Free Trial <ArrowUpRight />
                  </a>
                </Button>
                <Button variant="paper" size="lg" className="price-action" onClick={() => setModal("international")}>
                  <Calculator size={16} /> Get Estimate
                </Button>
              </div>
            </article>

          </div>

          <div className="pricing-scale">
            <div className="pricing-scale-label">How it scales</div>
            <div className="pricing-scale-steps">
              <div className="pricing-scale-step" data-start="true">
                <strong>10</strong>
                <span>individuals</span>
                <em>Minimum</em>
              </div>
              <div className="pricing-scale-flow">
                <span>11, 12, 13 …</span>
                <small>add as many as you need, one at a time</small>
              </div>
            </div>
            <p className="pricing-scale-note">Plans start at 10 individuals. After that, add one individual at a time — pay only for what you need.</p>
          </div>
        </div>
      </section>

      <section className="standard-band">
        <div className="wrap faq-wrap">
          <h2 className="section-title">A few things you might be wondering.</h2>
          {[
            {
              q: "What counts as an individual?",
              a: "An individual is a client in your care. Every 2 individuals you add to your plan gives your team one staff seat and one role in the platform, and access to all modules.",
            },
            {
              q: "Why is there a minimum of 10 individuals?",
              a: "The minimum package of 10 individuals keeps the platform viable and ensures your team has enough capacity to operate effectively from day one.",
            },
            {
              q: "Can I see CareVirt before committing?",
              a: "Yes. Book a free, personalized 30-minute demo. We'll learn about your workflow, show you the platform, and answer your questions — with no commitment required.",
            },
            {
              q: "Will you help our team get started?",
              a: "Yes. A CareVirt representative helps onboard your center and train staff around their roles. Our team also provides ongoing support. We'll discuss your onboarding timeline during the demo.",
            },
            {
              q: "Is the domestic introductory price guaranteed?",
              a: "The 999 PKR rate is locked in for your first year. Renewal pricing will be communicated well in advance so you can plan accordingly.",
            },
          ].map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaSection />
    </main>
  );
}

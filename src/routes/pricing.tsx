import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CheckList, CtaSection, Eyebrow } from "@/components/page-sections";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/pricing")({
  head: () => pageHead("Pricing", "Simple, transparent pricing for care organizations in Pakistan and internationally. One individual gives you one staff and one role."),
  component: Pricing,
});

function Pricing() {
  return (
    <main>
      <section className="pricing-hero">
        <div className="wrap">
          <Eyebrow>Plans &amp; Pricing</Eyebrow>
          <h1 className="pricing-hero-title">
            Straightforward pricing,<br />
            <em>wherever you are.</em>
          </h1>
          <p className="pricing-hero-desc">
            Each individual in your package includes one staff seat and one role. Choose your region to get started.
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
                  <s>1799 PKR</s>
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
                "1 staff seat per individual",
                "1 role per individual",
                "Access to all modules",
              ]} />
              <Button asChild variant="paper" size="lg" className="price-action">
                <a href="https://app.carevirt.com/sign_up?tab=provider_organization&region=domestic">
                  Start Free Trial <ArrowUpRight />
                </a>
              </Button>
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
                "1 staff seat per individual",
                "1 role per individual",
                "Access to all modules",
              ]} />
              <Button asChild variant="paper" size="lg" className="price-action">
                <a href="https://app.carevirt.com/sign_up?tab=provider_organization&region=international">
                  Start Free Trial <ArrowUpRight />
                </a>
              </Button>
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
              a: "An individual is a client in your care. Each individual you add to your plan gives your team one staff seat and one role in the platform, and access to all modules.",
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

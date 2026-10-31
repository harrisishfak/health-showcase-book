import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/privacy-policy")({
  head: () => pageHead("Privacy Policy", "CareVirt privacy policy — how we collect, use, and protect your data."),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <div className="wrap">
<div className="privacy-container">
          <div className="privacy-eyebrow">Legal</div>
          <h1 className="privacy-title">Privacy Policy</h1>
          <div className="privacy-meta">
            <span>Effective Date: March 31, 2026</span>
            <span>Last Updated: March 31, 2026</span>
          </div>

          <div className="privacy-body">
            <section className="privacy-section">
              <div className="privacy-section-num">1</div>
              <div className="privacy-section-content">
                <h2>Introduction &amp; Scope</h2>
                <p>CareVirt ("we," "us," or "the Platform"), a product of iChildBloom (Pvt) Ltd, provides digital infrastructure for specialized care centers. This policy governs how we process data within our SaaS environment, including Individualized Education Programs (IEPs), staff scheduling, and incident reporting.</p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-num">2</div>
              <div className="privacy-section-content">
                <h2>Data We Collect (The "Need-to-Know")</h2>
                <p>We categorize data into two distinct streams to ensure maximum security:</p>
                <ul>
                  <li><strong>Administrative Data:</strong> Names, professional emails, and contact details of Center Administrators and Staff.</li>
                  <li><strong>Protected Health &amp; Care Data:</strong> Patient/Student names, Facesheets, customized assessments, IEP goals, and behavioral incident reports uploaded by the Center.</li>
                </ul>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-num">3</div>
              <div className="privacy-section-content">
                <h2>Data Ownership (Crucial for B2B Trust)</h2>
                <p>The Center remains the sole owner of all patient and staff data. CareVirt acts strictly as a Data Processor.</p>
                <p>We do not sell, rent, or trade any personal information to third parties or pharmaceutical companies.</p>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-num">4</div>
              <div className="privacy-section-content">
                <h2>How We Use Information</h2>
                <p>Data is processed exclusively to:</p>
                <ul>
                  <li><strong>Automate IEP Generation:</strong> Using your center's specific assessment inputs.</li>
                  <li><strong>Optimize Scheduling:</strong> Managing staff assignments and attendance.</li>
                  <li><strong>Security &amp; Audit:</strong> Maintaining "Incident Reporting" logs for legal compliance at the center level.</li>
                </ul>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-num">5</div>
              <div className="privacy-section-content">
                <h2>Security Protocols (The "2026 Standard")</h2>
                <p>We implement industry-standard encryption to protect sensitive disability care records:</p>
                <ul>
                  <li><strong>Encryption at Rest:</strong> All patient files and assessments are encrypted using AES-256.</li>
                  <li><strong>Access Control:</strong> Roles and Permissions ensure that only authorized staff (e.g., a Lead Therapist) can view specific sensitive profiles.</li>
                  <li><strong>Database Isolation:</strong> Each center's data is logically isolated to prevent cross-tenancy leaks.</li>
                </ul>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-num">6</div>
              <div className="privacy-section-content">
                <h2>Data Localization &amp; Retention</h2>
                <p>As a Pakistan-based entity, we prioritize local data integrity.</p>
                <ul>
                  <li><strong>Retention:</strong> Data is kept as long as the Center maintains an active subscription.</li>
                  <li><strong>Deletion:</strong> Upon contract termination, all "Protected Health Data" is purged from our active databases within 30 days, unless a legal hold is required.</li>
                </ul>
              </div>
            </section>

            <section className="privacy-section">
              <div className="privacy-section-num">7</div>
              <div className="privacy-section-content">
                <h2>Disclosure to Third Parties</h2>
                <p>We only disclose information:</p>
                <ul>
                  <li>To essential service providers (e.g., secure cloud hosting) who are contractually bound to the same privacy standards.</li>
                  <li>If required by Pakistani Law or a valid court order.</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="privacy-footer">
            <span>© 2026 CareVirt — a product of iChildBloom (Pvt) Ltd</span>
            <span className="privacy-footer-sep">·</span>
            <Link to="/">Home</Link>
            <span className="privacy-footer-sep">·</span>
            <a href="mailto:sales@carevirt.com">sales@carevirt.com</a>
          </div>
        </div>
      </div>
    </main>
  );
}

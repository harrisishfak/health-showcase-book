import { useState, useEffect, useCallback } from "react";
import { Check } from "lucide-react";

const API_BASE = "https://app.carevirt.com";
// const API_BASE = "http://localhost:3000";


const orgTypes = [
  { value: "special_school", label: "Special School" },
  { value: "therapy_center", label: "Therapy Center" },
  { value: "hospital_clinic", label: "Hospital / Clinic" },
  { value: "ngo_welfare", label: "NGO / Welfare" },
  { value: "other", label: "Other" },
];

const inquiryTypes = [
  { value: "demo", label: "Request a Demo" },
  { value: "pricing", label: "Pricing" },
  { value: "contact", label: "General Info" },
];

type FormData = {
  name: string;
  email: string;
  contact_number: string;
  role: string;
  organization_name: string;
  organization_type: string;
  inquiry_type: string;
  no_of_individuals: string;
  city: string;
  country: string;
  message: string;
};

const empty: FormData = {
  name: "", email: "", contact_number: "", role: "",
  organization_name: "", organization_type: "",
  inquiry_type: "demo", no_of_individuals: "",
  city: "", country: "", message: "",
};

export function InquiryForm() {
  const [formData, setFormData] = useState<FormData>(empty);
  const [browserToken, setBrowserToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const fetchBrowserToken = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/v1/inquiry/token`);
      const data = await res.json();
      setBrowserToken(data.token);
    } catch {
      // will show error on submit if token missing
    }
  }, []);

  useEffect(() => { fetchBrowserToken(); }, [fetchBrowserToken]);

  function set(field: keyof FormData, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  const isOrg = formData.role === "provider_organization";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors([]);

    if (!browserToken) {
      setErrors(["Form is not ready yet. Please wait a moment and try again."]);
      return;
    }

    setSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      contact_number: formData.contact_number,
      role: formData.role,
      ...(isOrg && { organization_name: formData.organization_name }),
      ...(isOrg && formData.organization_type && { organization_type: formData.organization_type }),
      inquiry_type: formData.inquiry_type,
      no_of_individuals: Number(formData.no_of_individuals),
      city: formData.city,
      country: formData.country,
      message: formData.message,
      referral_code: -1,
    };

    try {
      const res = await fetch(`${API_BASE}/api/v1/inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Form-Token": browserToken,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSucceeded(true);
      } else if (res.status === 403 && data.code === "token_expired") {
        setErrors(["Session expired. Please try submitting again."]);
        fetchBrowserToken();
      } else {
        setErrors(data.errors ?? ["Something went wrong. Please try again."]);
      }
    } catch {
      setErrors(["Network error. Please check your connection and try again."]);
    } finally {
      setSubmitting(false);
    }
  }

  if (succeeded) {
    return (
      <div className="inq-success">
        <span className="inq-success-icon"><Check size={28}/></span>
        <h3>We've received your inquiry!</h3>
        <p>We'll get back to you within 1 business day.</p>
        <button className="inq-again-btn" onClick={() => { setSucceeded(false); setFormData(empty); }}>Submit another inquiry</button>
      </div>
    );
  }

  return (
    <form className="inq-form" onSubmit={handleSubmit} noValidate>

      <div className="inq-row">
        <div className="inq-field">
          <label htmlFor="name">Full name</label>
          <input id="name" type="text" placeholder="Your full name" required value={formData.name} onChange={e => set("name", e.target.value)}/>
        </div>
        <div className="inq-field">
          <label htmlFor="email">Work email</label>
          <input id="email" type="email" placeholder="you@yourcenter.com" required value={formData.email} onChange={e => set("email", e.target.value)}/>
        </div>
      </div>

      <div className="inq-row">
        <div className="inq-field">
          <label htmlFor="contact_number">WhatsApp Number</label>
          <input id="contact_number" type="tel" placeholder="+1 000 000 0000" required value={formData.contact_number} onChange={e => set("contact_number", e.target.value)}/>
        </div>
        <div className="inq-field">
          <label htmlFor="role">Your role</label>
          <select id="role" required value={formData.role} onChange={e => set("role", e.target.value)}>
            <option value="" disabled>Select your role</option>
            <option value="provider_organization">Center / School / Organization / Clinic</option>
            <option value="provider_individual">Therapist / Independent Provider</option>
          </select>
        </div>
      </div>

      {isOrg && (
        <div className="inq-row">
          <div className="inq-field">
            <label htmlFor="organization_name">Organization Name</label>
            <input id="organization_name" type="text" placeholder="Your organization name" required value={formData.organization_name} onChange={e => set("organization_name", e.target.value)}/>
          </div>
          <div className="inq-field">
            <label htmlFor="organization_type">Organization Type</label>
            <select id="organization_type" value={formData.organization_type} onChange={e => set("organization_type", e.target.value)}>
              <option value="">Select type</option>
              {orgTypes.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>
        </div>
      )}

      <div className="inq-row">
        <div className="inq-field">
          <label htmlFor="inquiry_type">Inquiry about</label>
          <select id="inquiry_type" required value={formData.inquiry_type} onChange={e => set("inquiry_type", e.target.value)}>
            {inquiryTypes.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div className="inq-field">
          <label htmlFor="no_of_individuals">No. of Individuals</label>
          <input id="no_of_individuals" type="number" placeholder="e.g. 25" min={1} required value={formData.no_of_individuals} onChange={e => set("no_of_individuals", e.target.value)}/>
        </div>
      </div>

      <div className="inq-row">
        <div className="inq-field">
          <label htmlFor="city">City</label>
          <input id="city" type="text" placeholder="Enter city" required value={formData.city} onChange={e => set("city", e.target.value)}/>
        </div>
        <div className="inq-field">
          <label htmlFor="country">Country</label>
          <input id="country" type="text" placeholder="Enter country" required value={formData.country} onChange={e => set("country", e.target.value)}/>
        </div>
      </div>

      <div className="inq-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Tell us about your center and what you're looking for..." rows={4} required value={formData.message} onChange={e => set("message", e.target.value)}/>
      </div>

      {errors.length > 0 && (
        <div className="inq-errors">
          {errors.map((err, i) => <p key={i}>{err}</p>)}
        </div>
      )}

      <button type="submit" className="inq-submit" disabled={submitting || !browserToken}>
        {submitting ? "Submitting…" : "Submit Inquiry"}
      </button>
    </form>
  );
}

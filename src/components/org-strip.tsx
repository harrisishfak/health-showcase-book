const countries = [
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "South Africa", flag: "🇿🇦" },
];

const orgs = [
  { name: "Autism South Africa", abbr: undefined },
  { name: "Irene Homes", abbr: undefined },
  { name: "Lethabo Le Khutso", abbr: undefined },
  { name: "Sunshine Association", abbr: undefined },
  { name: "The Hamlet Foundation", abbr: undefined },
  { name: "Autism Awareness Care and Training", abbr: "AACT" },
  { name: "HopeSetters Autism Center", abbr: undefined },
  { name: "Multikids Inclusive Academy", abbr: undefined },
  { name: "Awaawaa2", abbr: undefined },
  { name: "Klicks Africa Foundation", abbr: undefined },
];

export function OrgStrip() {
  const track = [...orgs, ...orgs];

  return (
    <section className="org-strip-section" aria-label="Supporting care across borders">
      <div className="wrap">
        <div className="org-strip-top">
          <div className="org-strip-left">
            <div className="operations-title">
              Supporting care across borders
              <span>Coordinating care across regions, time zones and diverse care settings.</span>
            </div>
            <div className="country-list">
              {countries.map(c => (
                <div className="country" key={c.name}>
                  <span className="country-flag" aria-hidden="true">{c.flag}</span>{c.name}
                </div>
              ))}
            </div>
          </div>
          <div className="org-strip-divider" aria-hidden="true"/>
          <div className="org-strip-right">
            <h2 className="org-strip-title">Global Perspective on Special Needs Care</h2>
            <p className="org-strip-sub">
              CareVirt draws inspiration from the evolving landscape of autism and special-needs care, where organisations worldwide are working to improve support, service delivery and quality of life.
            </p>
          </div>
        </div>
      </div>

      <div className="org-marquee-outer" aria-hidden="true">
        <div className="org-marquee-track">
          {track.map((org, i) => (
            <div key={i} className="org-wordmark">
              <span className="org-wordmark-name">
                {org.name}
                {org.abbr && <em className="org-wordmark-abbr">&thinsp;({org.abbr})</em>}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap">
        <p className="org-disclaimer">Organisations shaping the global landscape of autism and special-needs care.</p>
      </div>
    </section>
  );
}

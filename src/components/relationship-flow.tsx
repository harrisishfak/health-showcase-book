export function RelationshipFlow() {
  // 10s dot cycle:
  //   0s–2.5s  travel Care Org → CareVirt   keyTime 0→0.25
  //   2.5s–4.5s pause at CareVirt for 2s    keyTime 0.25→0.45
  //   4.5s–7s  travel CareVirt → Individual  keyTime 0.45→0.70
  //   7s–10s   rest gap ~3s before next cycle
  //
  // keyPoints="0;0.5;0.5;1;1" keyTimes="0;0.25;0.45;0.70;1"
  // Dot path: M 145 87 L 290 187 L 145 287 (segments ≈176px each)
  // Circle r=52 at cx=290. Entry t≈0.176, exit t≈0.524.
  const DUR  = "10s";
  const KT        = "0;0.14;0.18;0.52;0.55;0.67;0.70;1"; // dot visibility — hides at Individual
  const KT_DELIVER = "0;0.14;0.18;0.57;0.62;0.67;1"; // hide as dot enters circle, never returns
  const KT_RECEIVE = "0;0.52;0.55;0.67;0.70;1";      // show as soon as dot exits circle → hide exactly at Individual
  // 3 messages × 10s = 30s cycle. Inside-circle window: t=1.76s–5.24s.
  const MDUR = "30s";
  const messages: { l1: string; l2: string; kt: string }[] = [
    { l1: "He is making real progress.",  l2: "I can see the difference.",       kt: "0;0.05;0.07;0.17;0.19;1" },
    { l1: "This is exactly the support",  l2: "he needed. Thank you!",           kt: "0;0.38;0.40;0.50;0.52;1" },
    { l1: "I feel confident knowing his", l2: "care is being managed so well.",  kt: "0;0.72;0.74;0.84;0.86;1" },
  ];

  return (
    <div className="rel-flow-diagram" role="img" aria-label="CareVirt relationship flow">
      <svg viewBox="0 0 540 360" className="rel-flow-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="cv-grad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffffff"/>
            <stop offset="100%" stopColor="#dbeeff"/>
          </radialGradient>
          <filter id="rf-card-shadow" x="-15%" y="-15%" width="130%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#226BA8" floodOpacity="0.10"/>
          </filter>
          <filter id="rf-circle-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#226BA8" floodOpacity="0.18"/>
          </filter>
          <filter id="rf-dot-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="rf-label-shadow" x="-10%" y="-20%" width="120%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0f4c81" floodOpacity="0.22"/>
          </filter>
          <radialGradient id="pulse-grad" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#226BA8" stopOpacity="0"/>
            <stop offset="100%" stopColor="#226BA8" stopOpacity="0.15"/>
          </radialGradient>
        </defs>

        {/* Dashed lines — static, extended toward cards */}
        <path d="M 110 68 L 248 158"
          fill="none" stroke="#7ab3d9" strokeWidth="1.8" strokeDasharray="7 5"/>
        <path d="M 248 217 L 110 306"
          fill="none" stroke="#7ab3d9" strokeWidth="1.8" strokeDasharray="7 5"/>

        {/* Invisible combined path the dot follows */}
        <path id="rf-dot-path" d="M 145 87 L 290 187 L 145 287" fill="none" stroke="none"/>

        {/* ── Animated dot + labels (drawn before circle so circle masks it) ── */}
        <g>
          <animateMotion dur={DUR} repeatCount="indefinite" calcMode="linear"
            keyPoints="0;0.5;0.5;1;1" keyTimes="0;0.25;0.45;0.70;1">
            <mpath href="#rf-dot-path"/>
          </animateMotion>

          <circle r="6" fill="#226BA8" filter="url(#rf-dot-glow)">
            <animate attributeName="opacity" values="1;1;0;0;1;1;0;0" keyTimes={KT} dur={DUR} repeatCount="indefinite"/>
          </circle>
          <circle r="2.5" fill="white">
            <animate attributeName="opacity" values="1;1;0;0;1;1;0;0" keyTimes={KT} dur={DUR} repeatCount="indefinite"/>
          </circle>

          {/* "Delivering Care" — visible during segment 1 travel only */}
          <g filter="url(#rf-label-shadow)">
            <animate attributeName="opacity" values="1;1;0;0;0;0;0" keyTimes={KT_DELIVER} dur={DUR} repeatCount="indefinite"/>
            <rect x="-52" y="-30" width="104" height="19" rx="9.5" fill="#226BA8"/>
            <text x="0" y="-16" textAnchor="middle" fontSize="10.5"
              fill="white" fontWeight="600" fontFamily="inherit" letterSpacing="0.2">Delivering Care</text>
          </g>

          {/* "Receiving Care" — visible for full segment 2 travel as soon as dot exits circle */}
          <g filter="url(#rf-label-shadow)">
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes={KT_RECEIVE} dur={DUR} repeatCount="indefinite"/>
            <rect x="-49" y="-30" width="98" height="19" rx="9.5" fill="#226BA8"/>
            <text x="0" y="-16" textAnchor="middle" fontSize="10.5"
              fill="white" fontWeight="600" fontFamily="inherit" letterSpacing="0.2">Receiving Care</text>
          </g>
        </g>

        {/* ── CareVirt circle — drawn on top to mask dot inside ── */}
        <circle cx="290" cy="187" r="52" fill="url(#cv-grad)" stroke="#226BA8" strokeWidth="1.8"/>
        <circle cx="290" cy="187" r="45" fill="none" stroke="#226BA8" strokeWidth="0.5" strokeOpacity="0.25"/>
        <text x="290" y="183" textAnchor="middle" fontSize="13" fontWeight="700"
          fill="#0f4c81" fontFamily="inherit" letterSpacing="0.5">CareVirt</text>
        <text x="290" y="200" textAnchor="middle" fontSize="8.5" fontWeight="400"
          fill="#226BA8" fontFamily="inherit" letterSpacing="0.8" fillOpacity="0.7">PLATFORM</text>

        {/* ── Pulse rings — 3 cascading waves while dot is inside ── */}
        <circle cx="290" cy="187" fill="none" stroke="#226BA8" strokeWidth="1.8">
          <animate attributeName="r"              values="52;52;86;86" keyTimes="0;0.26;0.33;1" dur={DUR} repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" values="0;0.55;0;0"  keyTimes="0;0.26;0.33;1" dur={DUR} repeatCount="indefinite"/>
        </circle>
        <circle cx="290" cy="187" fill="none" stroke="#226BA8" strokeWidth="1.4">
          <animate attributeName="r"              values="52;52;86;86" keyTimes="0;0.33;0.39;1" dur={DUR} repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" values="0;0.45;0;0"  keyTimes="0;0.33;0.39;1" dur={DUR} repeatCount="indefinite"/>
        </circle>
        <circle cx="290" cy="187" fill="none" stroke="#226BA8" strokeWidth="1.0">
          <animate attributeName="r"              values="52;52;86;86" keyTimes="0;0.39;0.45;1" dur={DUR} repeatCount="indefinite"/>
          <animate attributeName="stroke-opacity" values="0;0.35;0;0"  keyTimes="0;0.39;0.45;1" dur={DUR} repeatCount="indefinite"/>
        </circle>

        {/* ── Care Provider card (top-left) ── */}
        <rect x="15" y="57" width="130" height="60" rx="10"
          fill="#236BA8" stroke="none"/>
        <text x="80" y="90" textAnchor="middle" fontSize="12" fontWeight="700"
          fill="white" fontFamily="inherit">Care Provider</text>

        {/* ── Individual card (bottom-left) ── */}
        <rect x="15" y="257" width="130" height="60" rx="10"
          fill="#236BA8" stroke="none"/>
        <text x="80" y="292" textAnchor="middle" fontSize="12" fontWeight="700"
          fill="white" fontFamily="inherit">Individual</text>

        {/* ── Guardian card (right of CareVirt, no link) ── */}
        <rect x="390" y="157" width="130" height="60" rx="10"
          fill="white" stroke="#236BA8" strokeWidth="1.8"/>
        <text x="455" y="192" textAnchor="middle" fontSize="12" fontWeight="700"
          fill="#236BA8" fontFamily="inherit">Guardian</text>

        {/* ── Guardian messenger notifications — one per pulse, cycling every 30s ── */}
        {messages.map(({ l1, l2, kt }) => (
          <g key={l1}>
            <animateTransform attributeName="transform" type="translate"
              values="0,8;0,8;0,0;0,0;0,8;0,8" keyTimes={kt} dur={MDUR} repeatCount="indefinite" additive="sum"/>
            <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes={kt} dur={MDUR} repeatCount="indefinite"/>

            {/* Speech bubble tail fill — drawn before card so card overlaps the base */}
            {/* Speech bubble tail fill — drawn before card so card overlaps the base */}
            <path d={`M 451,${l2?144:132} Q 456,${l2?146:134} 458,${l2?150:138} Q 454,${l2?145:133} 455,${l2?144:132} Z`}
              fill="#fffbeb"/>
            {/* Card */}
            <rect x="372" y="82" width="162" height={l2 ? 62 : 50} rx="12"
              fill="#fffbeb" stroke="#fde68a" strokeWidth="1"/>
            {/* Tail outline — only the curved visible sides */}
            <path d={`M 451,${l2?144:132} Q 456,${l2?146:134} 458,${l2?150:138} Q 454,${l2?145:133} 455,${l2?144:132}`}
              fill="none" stroke="#fde68a" strokeWidth="1"/>

            {/* Title + unread dot */}
            <text x="384" y="99" fontSize="10" fontWeight="700"
              fill="#1e293b" fontFamily="inherit" letterSpacing="0.3">Guardian</text>
            <circle cx="526" cy="95" r="3.5" fill="#22c55e"/>

            {/* Message lines */}
            <text x="384" y={l2 ? 115 : 120} fontSize="10" fontWeight="500"
              fill="#374151" fontFamily="inherit">{l1}</text>
            {l2 && (
              <text x="384" y="129" fontSize="10" fontWeight="500"
                fill="#374151" fontFamily="inherit">{l2}</text>
            )}
          </g>
        ))}

      </svg>
    </div>
  );
}

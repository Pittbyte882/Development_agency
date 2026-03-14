export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="220"
      height="52"
      viewBox="50 35 550 145"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="trailLogo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00e896" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00e896" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Globe outline */}
      <g transform="translate(52, 36)">
        <circle cx="70" cy="70" r="62" fill="none" stroke="#00e896" strokeWidth="1.5" opacity="0.35" />
        <ellipse cx="70" cy="70" rx="62" ry="22" fill="none" stroke="#00e896" strokeWidth="0.8" opacity="0.2" />
        <ellipse cx="70" cy="70" rx="62" ry="44" fill="none" stroke="#00e896" strokeWidth="0.8" opacity="0.2" />
        <line x1="70" y1="8" x2="70" y2="132" stroke="#00e896" strokeWidth="0.8" opacity="0.2" />
        <path d="M70 8 A62 62 0 0 1 132 70" fill="none" stroke="#00e896" strokeWidth="2.5" strokeLinecap="round" />

        {/* Browser window */}
        <rect x="86" y="4" width="58" height="42" rx="5" fill="none" stroke="#00e896" strokeWidth="1.2" />
        <rect x="87" y="5" width="56" height="12" rx="4" fill="#001a0e" opacity="0.9" />
        <line x1="86" y1="16" x2="144" y2="16" stroke="#00e896" strokeWidth="0.8" opacity="0.4" />

        {/* Traffic light dots */}
        <circle cx="94" cy="11" r="2.2" fill="#ff5f57" />
        <circle cx="101" cy="11" r="2.2" fill="#febc2e" />
        <circle cx="108" cy="11" r="2.2" fill="#28c840" />

        {/* Rocket */}
        <path d="M115 38 L110 24 Q115 12 120 24 Z" fill="#00e896" />
        <path d="M110 32 L105 38 L112 35 Z" fill="#00e896" opacity="0.7" />
        <path d="M120 32 L125 38 L118 35 Z" fill="#00e896" opacity="0.7" />
        <circle cx="115" cy="23" r="3" fill="#000000" stroke="#00e896" strokeWidth="1" />
        <path d="M111 38 Q113 46 115 42 Q117 46 119 38" fill="url(#trailLogo)" />
      </g>

      {/* Wordmark */}
      <text x="240" y="98" fontFamily="Georgia,serif" fontSize="42" fontWeight="900" fill="#ffffff" letterSpacing="-1.5">
        ReadySetGo
      </text>
      <text x="240" y="138" fontFamily="Georgia,serif" fontSize="42" fontWeight="900" fill="#00e896" letterSpacing="-1.5">
        Sites
      </text>
    </svg>
  )
}
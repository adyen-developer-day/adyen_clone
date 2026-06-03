// Polished delivery drone illustration carrying a beaver package.
export default function DroneIllustration({ size = 220, className = "" }) {
  const w = size;
  const h = size * 0.65;
  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox="0 0 320 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Drone delivering a beaver"
    >
      <defs>
        <linearGradient id="drn-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#606060" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </linearGradient>
        <linearGradient id="drn-arm" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#555" />
          <stop offset="50%" stopColor="#777" />
          <stop offset="100%" stopColor="#555" />
        </linearGradient>
        <linearGradient id="drn-pkg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4922e" />
          <stop offset="100%" stopColor="#a86420" />
        </linearGradient>
        <filter id="drn-sh" x="-5%" y="-5%" width="115%" height="125%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Motion lines */}
      <g stroke="#c47a2a" strokeWidth="2" strokeLinecap="round" opacity="0.25">
        <line x1="5" y1="45" x2="35" y2="45" />
        <line x1="0" y1="60" x2="45" y2="60" />
        <line x1="8" y1="75" x2="38" y2="75" />
        <line x1="282" y1="50" x2="312" y2="50" />
        <line x1="275" y1="65" x2="320" y2="65" />
      </g>

      <g filter="url(#drn-sh)">
        {/* Main body */}
        <rect x="110" y="38" width="100" height="22" rx="11" fill="url(#drn-body)" />

        {/* Cross arms */}
        <rect x="40" y="47" width="240" height="5" rx="2.5" fill="url(#drn-arm)" />

        {/* Motor housings */}
        {[50, 120, 190, 260].map(x => (
          <g key={x}>
            <rect x={x - 11} y="40" width="22" height="16" rx="6" fill="#4a4a4a" />
            {/* Spinning propeller */}
            <ellipse cx={x} cy="36" rx="32" ry="5" fill="#bbb" opacity="0.4">
              <animateTransform attributeName="transform" type="rotate"
                values={`0 ${x} 36;${x % 3 === 0 ? 6 : -6} ${x} 36;0 ${x} 36;${x % 3 === 0 ? -6 : 6} ${x} 36;0 ${x} 36`}
                dur={`${0.1 + (x % 7) * 0.01}s`} repeatCount="indefinite" />
            </ellipse>
            {/* Hub */}
            <circle cx={x} cy="36" r="4.5" fill="#3a3a3a" />
          </g>
        ))}

        {/* LED lights */}
        <circle cx="50" cy="36" r="2.5" fill="#ff3333" opacity="0.85" />
        <circle cx="260" cy="36" r="2.5" fill="#33cc44" opacity="0.85" />

        {/* Canadian flag on body */}
        <rect x="140" y="41" width="28" height="16" rx="2" fill="#fff" />
        <rect x="140" y="41" width="7" height="16" fill="#d52b1e" />
        <rect x="161" y="41" width="7" height="16" fill="#d52b1e" />
        <path d="M154 45l1.5 3h2.5l-2 2.5.8 3-2.8-1.5-2.8 1.5.8-3-2-2.5h2.5z" fill="#d52b1e" />

        {/* Camera/sensor pod */}
        <circle cx="160" cy="63" r="5" fill="#2a2a2a" />
        <circle cx="160" cy="63" r="2.5" fill="#444" />

        {/* Cargo tether lines */}
        <line x1="130" y1="60" x2="125" y2="92" stroke="#777" strokeWidth="2" />
        <line x1="190" y1="60" x2="195" y2="92" stroke="#777" strokeWidth="2" />

        {/* Package */}
        <rect x="115" y="92" width="90" height="65" rx="7" fill="url(#drn-pkg)" />
        <rect x="115" y="92" width="90" height="65" rx="7" stroke="#8B5A1B" strokeWidth="2" fill="none" />
        {/* Strapping */}
        <line x1="160" y1="92" x2="160" y2="157" stroke="#8B5A1B" strokeWidth="2" />
        <line x1="115" y1="122" x2="205" y2="122" stroke="#8B5A1B" strokeWidth="2" />

        {/* Maple leaf on package */}
        <path d="M160 128l3 6h5l-4 5 1.5 7-5.5-3-5.5 3 1.5-7-4-5h5z" fill="#d52b1e" />

        {/* LIVE BEAVER label */}
        <text x="160" y="112" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" fontFamily="sans-serif">LIVE BEAVER</text>

        {/* Air holes */}
        {[125, 133, 187, 195].map(x => (
          <circle key={x} cx={x} cy="102" r="3" fill="none" stroke="#fff" strokeWidth="1.2" />
        ))}

        {/* THIS SIDE UP */}
        <text x="160" y="152" textAnchor="middle" fontSize="6" fontWeight="600" fill="#fff" fontFamily="sans-serif" opacity="0.8">THIS SIDE UP ↑</text>

        {/* Tiny beaver peeking out of top */}
        <circle cx="160" cy="88" r="10" fill="#8B6914" />
        <circle cx="156" cy="85" r="2.5" fill="#fff" />
        <circle cx="164" cy="85" r="2.5" fill="#fff" />
        <circle cx="156.5" cy="85.3" r="1.3" fill="#2c1810" />
        <circle cx="164.5" cy="85.3" r="1.3" fill="#2c1810" />
        <circle cx="157.5" cy="83.5" r="0.7" fill="#fff" />
        <circle cx="165.5" cy="83.5" r="0.7" fill="#fff" />
        <ellipse cx="160" cy="89" rx="2.5" ry="1.5" fill="#3d261a" />
        {/* Tiny ears */}
        <circle cx="152" cy="80" r="3" fill="#D4A855" />
        <circle cx="168" cy="80" r="3" fill="#D4A855" />
      </g>

      {/* Floating maple leaves */}
      <g opacity="0.4">
        <path d="M25 100l1.5 3h2.5l-2 2.5.8 3-2.8-1.5-2.8 1.5.8-3-2-2.5h2.5z" fill="#d52b1e">
          <animateTransform attributeName="transform" type="translate" values="0,0;4,-6;0,0" dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M290 90l1.5 3h2.5l-2 2.5.8 3-2.8-1.5-2.8 1.5.8-3-2-2.5h2.5z" fill="#d52b1e">
          <animateTransform attributeName="transform" type="translate" values="0,0;-3,5;0,0" dur="5s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}

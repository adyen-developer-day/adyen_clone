// Polished beaver mascot with Canadian Mountie hat.
// Scenes: "wave" (hero), "ride-drone" (on drone), "package" (holding box), "flag" (with Canadian flag).
export default function BeaverMascot({ scene = "wave", size = 200, className = "" }) {
  const id = `bm-${scene}`;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Beaver mascot – ${scene}`}
    >
      <defs>
        {/* Fur gradient — dark-brown base to warm mid-brown */}
        <radialGradient id={`${id}-fur`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#B8860B" />
          <stop offset="70%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#6B4226" />
        </radialGradient>
        {/* Belly gradient — golden highlight */}
        <radialGradient id={`${id}-belly`} cx="48%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#F0D080" />
          <stop offset="100%" stopColor="#D4A855" />
        </radialGradient>
        {/* Hat gradient — RCMP red */}
        <linearGradient id={`${id}-hat`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8303A" />
          <stop offset="50%" stopColor="#C41E3A" />
          <stop offset="100%" stopColor="#9B162E" />
        </linearGradient>
        {/* Tail wood grain */}
        <linearGradient id={`${id}-tail`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5A3A1E" />
          <stop offset="50%" stopColor="#6B4226" />
          <stop offset="100%" stopColor="#4A2E14" />
        </linearGradient>
        {/* Subtle shadow */}
        <filter id={`${id}-shadow`} x="-10%" y="-10%" width="130%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#2c1810" floodOpacity="0.18" />
        </filter>
        {/* Nose shine */}
        <radialGradient id={`${id}-nose`} cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#5a3a2a" />
          <stop offset="100%" stopColor="#2c1810" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id={`${id}-eye`} cx="45%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#3d261a" />
          <stop offset="100%" stopColor="#1a0e08" />
        </radialGradient>
        {/* Sky for ride-drone scene */}
        {scene === "ride-drone" && (
          <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#E0F0FF" />
          </linearGradient>
        )}
      </defs>

      {/* Scene background for ride-drone */}
      {scene === "ride-drone" && (
        <g>
          <rect width="300" height="300" rx="20" fill={`url(#${id}-sky)`} />
          {/* Clouds */}
          <g opacity="0.6">
            <ellipse cx="50" cy="50" rx="35" ry="14" fill="#fff" />
            <ellipse cx="70" cy="46" rx="25" ry="12" fill="#fff" />
            <ellipse cx="250" cy="80" rx="30" ry="12" fill="#fff" />
            <ellipse cx="230" cy="76" rx="22" ry="10" fill="#fff" />
          </g>
          {/* Maple leaves floating */}
          <g opacity="0.5">
            <path d="M30 120l2 4h3l-2.5 3 1 4-3.5-2-3.5 2 1-4-2.5-3h3z" fill="#d52b1e" />
            <path d="M270 60l1.5 3h2.5l-2 2.5.8 3-2.8-1.5-2.8 1.5.8-3-2-2.5h2.5z" fill="#d52b1e" />
            <path d="M260 200l2 4h3l-2.5 3 1 4-3.5-2-3.5 2 1-4-2.5-3h3z" fill="#d52b1e" />
          </g>
        </g>
      )}

      <g filter={`url(#${id}-shadow)`}>
        {/* ===== DRONE (ride-drone scene) ===== */}
        {scene === "ride-drone" && (
          <g>
            {/* Drone frame */}
            <rect x="60" y="185" width="180" height="14" rx="7" fill="#4a4a4a" />
            <rect x="40" y="190" width="220" height="5" rx="2.5" fill="#5a5a5a" />
            {/* Arms extending out */}
            <rect x="25" y="190" width="250" height="4" rx="2" fill="#666" />
            {/* Motor housings */}
            <rect x="35" y="183" width="20" height="16" rx="5" fill="#4a4a4a" />
            <rect x="105" y="183" width="20" height="16" rx="5" fill="#4a4a4a" />
            <rect x="175" y="183" width="20" height="16" rx="5" fill="#4a4a4a" />
            <rect x="245" y="183" width="20" height="16" rx="5" fill="#4a4a4a" />
            {/* Spinning propellers */}
            <ellipse cx="45" cy="180" rx="28" ry="5" fill="#aaa" opacity="0.45">
              <animateTransform attributeName="transform" type="rotate" values="0 45 180;5 45 180;0 45 180;-5 45 180;0 45 180" dur="0.15s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="115" cy="180" rx="28" ry="5" fill="#aaa" opacity="0.45">
              <animateTransform attributeName="transform" type="rotate" values="0 115 180;-5 115 180;0 115 180;5 115 180;0 115 180" dur="0.12s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="185" cy="180" rx="28" ry="5" fill="#aaa" opacity="0.45">
              <animateTransform attributeName="transform" type="rotate" values="0 185 180;5 185 180;0 185 180;-5 185 180;0 185 180" dur="0.13s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="255" cy="180" rx="28" ry="5" fill="#aaa" opacity="0.45">
              <animateTransform attributeName="transform" type="rotate" values="0 255 180;-5 255 180;0 255 180;5 255 180;0 255 180" dur="0.14s" repeatCount="indefinite" />
            </ellipse>
            {/* LED lights */}
            <circle cx="45" cy="180" r="3" fill="#ff3333" opacity="0.9" />
            <circle cx="255" cy="180" r="3" fill="#33ff33" opacity="0.9" />
            {/* Landing gear */}
            <line x1="90" y1="199" x2="80" y2="220" stroke="#555" strokeWidth="3" strokeLinecap="round" />
            <line x1="210" y1="199" x2="220" y2="220" stroke="#555" strokeWidth="3" strokeLinecap="round" />
            <line x1="65" y1="220" x2="95" y2="220" stroke="#555" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="205" y1="220" x2="235" y2="220" stroke="#555" strokeWidth="3.5" strokeLinecap="round" />
            {/* Canadian flag on drone body */}
            <rect x="130" y="173" width="22" height="14" rx="2" fill="#fff" stroke="#ccc" strokeWidth="0.5" />
            <rect x="130" y="173" width="5.5" height="14" fill="#d52b1e" />
            <rect x="146.5" y="173" width="5.5" height="14" fill="#d52b1e" />
            <path d="M141 177l1.2 2.5h2l-1.5 2 .5 2.5-2.2-1.2-2.2 1.2.5-2.5-1.5-2h2z" fill="#d52b1e" />
            {/* Package hanging below */}
            <line x1="130" y1="199" x2="125" y2="230" stroke="#888" strokeWidth="1.5" />
            <line x1="170" y1="199" x2="175" y2="230" stroke="#888" strokeWidth="1.5" />
            <rect x="115" y="230" width="70" height="50" rx="6" fill="#c47a2a" stroke="#a86420" strokeWidth="2" />
            <line x1="150" y1="230" x2="150" y2="280" stroke="#a86420" strokeWidth="1.5" />
            <line x1="115" y1="255" x2="185" y2="255" stroke="#a86420" strokeWidth="1.5" />
            <path d="M150 260l2 4h3l-2.5 3 1 4-3.5-2-3.5 2 1-4-2.5-3h3z" fill="#d52b1e" />
            <text x="150" y="247" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff" fontFamily="sans-serif">LIVE BEAVER</text>
          </g>
        )}

        {/* ===== CANADIAN FLAG (flag scene) ===== */}
        {scene === "flag" && (
          <g>
            {/* Flag pole */}
            <rect x="188" y="20" width="5" height="180" rx="2.5" fill="#8B7355" />
            <circle cx="190.5" cy="18" r="5" fill="#C9A96E" />
            {/* Flag fabric with wave */}
            <path d="M193 30 Q230 25 260 40 Q280 48 280 80 Q280 110 260 118 Q230 128 193 125 Z" fill="#d52b1e" />
            <path d="M193 30 Q210 28 220 35 L220 120 Q210 125 193 125 Z" fill="#fff" />
            <path d="M250 35 Q265 42 270 55 L270 100 Q265 112 250 118 Q260 110 260 78 Q260 48 250 35 Z" fill="#fff" />
            {/* Maple leaf on flag */}
            <path d="M235 65 l3 7 h5 l-4 5 1.5 7 -5.5-3.5 -5.5 3.5 1.5-7 -4-5 h5 z" fill="#d52b1e" />
            {/* Flag shadow/fold lines */}
            <path d="M220 35 Q240 30 255 42" stroke="#b81830" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M220 80 Q240 75 260 82" stroke="#b81830" strokeWidth="1" fill="none" opacity="0.3" />
          </g>
        )}

        {/* ===== PACKAGE (package scene) ===== */}
        {scene === "package" && (
          <g>
            {/* Delivery drone on ground */}
            <rect x="170" y="200" width="100" height="10" rx="5" fill="#4a4a4a" />
            <rect x="160" y="203" width="120" height="4" rx="2" fill="#666" />
            <ellipse cx="175" cy="198" rx="20" ry="3" fill="#aaa" opacity="0.3" />
            <ellipse cx="265" cy="198" rx="20" ry="3" fill="#aaa" opacity="0.3" />
            <line x1="190" y1="214" x2="185" y2="230" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="250" y1="214" x2="255" y2="230" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="175" y1="230" x2="195" y2="230" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="245" y1="230" x2="265" y2="230" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
            {/* Canadian flag on drone */}
            <rect x="205" y="190" width="18" height="11" rx="1.5" fill="#fff" stroke="#ccc" strokeWidth="0.5" />
            <rect x="205" y="190" width="4.5" height="11" fill="#d52b1e" />
            <rect x="218.5" y="190" width="4.5" height="11" fill="#d52b1e" />

            {/* Package in beaver's arms */}
            <rect x="90" y="155" width="70" height="55" rx="7" fill="#c47a2a" />
            <rect x="90" y="155" width="70" height="55" rx="7" stroke="#a86420" strokeWidth="2.5" fill="none" />
            <line x1="125" y1="155" x2="125" y2="210" stroke="#a86420" strokeWidth="2" />
            <line x1="90" y1="180" x2="160" y2="180" stroke="#a86420" strokeWidth="2" />
            {/* Maple leaf stamp */}
            <path d="M125 188l2.5 5h4l-3 4 1 5-4.5-2.5-4.5 2.5 1-5-3-4h4z" fill="#d52b1e" />
            <text x="125" y="172" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fff" fontFamily="sans-serif">LIVE BEAVER</text>
            {/* Air holes */}
            <circle cx="100" cy="164" r="3" fill="none" stroke="#fff" strokeWidth="1.2" />
            <circle cx="108" cy="164" r="3" fill="none" stroke="#fff" strokeWidth="1.2" />
            <circle cx="142" cy="164" r="3" fill="none" stroke="#fff" strokeWidth="1.2" />
            <circle cx="150" cy="164" r="3" fill="none" stroke="#fff" strokeWidth="1.2" />
          </g>
        )}

        {/* ===== BEAVER CHARACTER ===== */}
        <g transform={scene === "ride-drone" ? "translate(70, -10) scale(0.55)" : ""}>
          {/* Shadow on ground (non-drone scenes) */}
          {scene !== "ride-drone" && (
            <ellipse cx="150" cy="272" rx="65" ry="10" fill="#2c1810" opacity="0.1" />
          )}

          {/* === TAIL === */}
          <g transform={scene === "ride-drone" ? "translate(10, 10)" : ""}>
            <ellipse cx="82" cy="238" rx="32" ry="12" fill={`url(#${id}-tail)`} transform="rotate(-25, 82, 238)" />
            {/* Tail scale pattern */}
            {[0, 1, 2, 3, 4].map(i => (
              <line key={`th${i}`} x1={62 + i * 10} y1="228" x2={62 + i * 10} y2="252" stroke="#4A2E14" strokeWidth="0.7" opacity="0.3" transform="rotate(-25, 82, 238)" />
            ))}
            {[0, 1, 2].map(i => (
              <line key={`tv${i}`} x1="58" y1={232 + i * 8} x2="108" y2={232 + i * 8} stroke="#4A2E14" strokeWidth="0.7" opacity="0.3" transform="rotate(-25, 82, 238)" />
            ))}
          </g>

          {/* === BODY === */}
          <ellipse cx="150" cy="200" rx="55" ry="50" fill={`url(#${id}-fur)`} />
          {/* Fur texture lines */}
          {[0, 1, 2, 3].map(i => (
            <path key={`fur${i}`} d={`M${115 + i * 22} ${170 + i * 5} q${3 - i} 15 ${-2 + i * 2} 30`} stroke="#6B4226" strokeWidth="0.6" fill="none" opacity="0.25" />
          ))}
          {/* Belly */}
          <ellipse cx="150" cy="210" rx="38" ry="32" fill={`url(#${id}-belly)`} />
          {/* Belly fur detail */}
          <path d="M130 195 q5 8 3 20" stroke="#C49840" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M155 193 q3 10 -1 22" stroke="#C49840" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M142 192 q4 12 1 24" stroke="#C49840" strokeWidth="0.5" fill="none" opacity="0.3" />

          {/* === FEET === */}
          <ellipse cx="125" cy="248" rx="20" ry="8" fill="#6B4226" />
          <ellipse cx="175" cy="248" rx="20" ry="8" fill="#6B4226" />
          {/* Toe details */}
          <path d="M112 245 l-3 4" stroke="#4A2E14" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M118 244 l-2 5" stroke="#4A2E14" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M124 244 l-1 5" stroke="#4A2E14" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M169 244 l1 5" stroke="#4A2E14" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M175 244 l2 5" stroke="#4A2E14" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M181 245 l3 4" stroke="#4A2E14" strokeWidth="1.2" strokeLinecap="round" />

          {/* === ARMS === */}
          {scene === "wave" ? (
            <>
              {/* Left arm relaxed */}
              <path d="M100 180 Q85 195 88 215 Q89 220 95 218" fill={`url(#${id}-fur)`} stroke="#6B4226" strokeWidth="1" />
              {/* Right arm waving up */}
              <path d="M200 175 Q220 155 215 130 Q213 122 207 125" fill={`url(#${id}-fur)`} stroke="#6B4226" strokeWidth="1" />
              {/* Waving paw */}
              <circle cx="212" cy="122" r="12" fill="#D4A855" />
              <path d="M206 116 l-2 -6" stroke="#C49840" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M210 114 l0 -6" stroke="#C49840" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M214 115 l2 -6" stroke="#C49840" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M218 118 l3 -4" stroke="#C49840" strokeWidth="1.5" strokeLinecap="round" />
            </>
          ) : scene === "package" ? (
            <>
              {/* Arms wrapping around package */}
              <path d="M195 180 Q210 170 200 155 Q195 148 185 155" fill={`url(#${id}-fur)`} stroke="#6B4226" strokeWidth="1" />
              <path d="M115 185 Q95 180 100 165 Q102 158 110 160" fill={`url(#${id}-fur)`} stroke="#6B4226" strokeWidth="1" />
              {/* Paws on package */}
              <circle cx="110" cy="162" r="9" fill="#D4A855" />
              <circle cx="186" cy="157" r="9" fill="#D4A855" />
            </>
          ) : scene === "ride-drone" ? (
            <>
              {/* Arms gripping drone edges */}
              <path d="M105 185 Q90 195 85 210 Q83 218 90 216" fill={`url(#${id}-fur)`} stroke="#6B4226" strokeWidth="1" />
              <path d="M195 185 Q210 195 215 210 Q217 218 210 216" fill={`url(#${id}-fur)`} stroke="#6B4226" strokeWidth="1" />
            </>
          ) : (
            <>
              {/* Flag scene: right arm holding pole */}
              <path d="M195 175 Q210 165 208 145 Q207 138 200 142" fill={`url(#${id}-fur)`} stroke="#6B4226" strokeWidth="1" />
              <circle cx="203" cy="140" r="9" fill="#D4A855" />
              {/* Left arm on hip */}
              <path d="M105 185 Q85 195 88 215 Q89 220 95 218" fill={`url(#${id}-fur)`} stroke="#6B4226" strokeWidth="1" />
            </>
          )}

          {/* === HEAD === */}
          <circle cx="150" cy="130" r="48" fill={`url(#${id}-fur)`} />
          {/* Head fur highlight */}
          <circle cx="140" cy="118" r="30" fill="#9B7520" opacity="0.3" />

          {/* === CHEEKS === */}
          <circle cx="122" cy="140" r="16" fill="#D4A855" />
          <circle cx="178" cy="140" r="16" fill="#D4A855" />
          {/* Rosy cheeks */}
          <circle cx="118" cy="145" r="8" fill="#E8A080" opacity="0.35" />
          <circle cx="182" cy="145" r="8" fill="#E8A080" opacity="0.35" />

          {/* === EYES === */}
          {/* Eye whites */}
          <ellipse cx="135" cy="124" rx="11" ry="12" fill="#fff" />
          <ellipse cx="165" cy="124" rx="11" ry="12" fill="#fff" />
          {/* Iris */}
          <circle cx={scene === "wave" ? "138" : "136"} cy="123" r="7" fill={`url(#${id}-eye)`} />
          <circle cx={scene === "wave" ? "168" : "166"} cy="123" r="7" fill={`url(#${id}-eye)`} />
          {/* Pupil */}
          <circle cx={scene === "wave" ? "139" : "137"} cy="122" r="3.5" fill="#0a0503" />
          <circle cx={scene === "wave" ? "169" : "167"} cy="122" r="3.5" fill="#0a0503" />
          {/* Eye shine — large */}
          <circle cx={scene === "wave" ? "141" : "139"} cy="119" r="2.5" fill="#fff" />
          <circle cx={scene === "wave" ? "171" : "169"} cy="119" r="2.5" fill="#fff" />
          {/* Eye shine — small */}
          <circle cx={scene === "wave" ? "136" : "134"} cy="125" r="1.2" fill="#fff" opacity="0.7" />
          <circle cx={scene === "wave" ? "166" : "164"} cy="125" r="1.2" fill="#fff" opacity="0.7" />
          {/* Eyelids hint */}
          <path d="M124 116 Q135 112 146 116" stroke="#6B4226" strokeWidth="1.5" fill="none" />
          <path d="M154 116 Q165 112 176 116" stroke="#6B4226" strokeWidth="1.5" fill="none" />
          {/* Eyebrows */}
          <path d="M122 110 Q135 104 148 110" stroke="#6B4226" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M152 110 Q165 104 178 110" stroke="#6B4226" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* === NOSE === */}
          <ellipse cx="150" cy="142" rx="8" ry="5.5" fill={`url(#${id}-nose)`} />
          {/* Nose shine */}
          <ellipse cx="147" cy="140" rx="3" ry="2" fill="#fff" opacity="0.25" />

          {/* === MOUTH === */}
          <path d="M140 150 Q150 160 160 150" stroke="#3d261a" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Smile lines */}
          <path d="M136 148 Q138 152 140 150" stroke="#3d261a" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M164 148 Q162 152 160 150" stroke="#3d261a" strokeWidth="1" fill="none" opacity="0.4" />

          {/* === BUCK TEETH === */}
          <rect x="143" y="150" width="7" height="10" rx="2" fill="#FFFEF8" stroke="#e0ddd5" strokeWidth="0.8" />
          <rect x="150" y="150" width="7" height="10" rx="2" fill="#FFFEF8" stroke="#e0ddd5" strokeWidth="0.8" />
          {/* Tooth line */}
          <line x1="150" y1="151" x2="150" y2="159" stroke="#e8e5dd" strokeWidth="0.5" />

          {/* === EARS === */}
          <circle cx="108" cy="98" r="13" fill={`url(#${id}-fur)`} />
          <circle cx="108" cy="98" r="8.5" fill="#D4A855" />
          <circle cx="108" cy="98" r="5" fill="#E8C080" opacity="0.5" />
          <circle cx="192" cy="98" r="13" fill={`url(#${id}-fur)`} />
          <circle cx="192" cy="98" r="8.5" fill="#D4A855" />
          <circle cx="192" cy="98" r="5" fill="#E8C080" opacity="0.5" />

          {/* === WHISKERS === */}
          <line x1="118" y1="140" x2="88" y2="134" stroke="#8B6914" strokeWidth="1" opacity="0.35" />
          <line x1="118" y1="144" x2="86" y2="144" stroke="#8B6914" strokeWidth="1" opacity="0.35" />
          <line x1="118" y1="148" x2="88" y2="153" stroke="#8B6914" strokeWidth="1" opacity="0.35" />
          <line x1="182" y1="140" x2="212" y2="134" stroke="#8B6914" strokeWidth="1" opacity="0.35" />
          <line x1="182" y1="144" x2="214" y2="144" stroke="#8B6914" strokeWidth="1" opacity="0.35" />
          <line x1="182" y1="148" x2="212" y2="153" stroke="#8B6914" strokeWidth="1" opacity="0.35" />

          {/* === MOUNTIE HAT === */}
          {/* Hat brim */}
          <ellipse cx="150" cy="92" rx="54" ry="11" fill="#9B162E" />
          <ellipse cx="150" cy="90" rx="54" ry="11" fill={`url(#${id}-hat)`} />
          {/* Hat crown — classic campaign cover shape */}
          <path d="M106 90 Q106 45 150 35 Q194 45 194 90" fill={`url(#${id}-hat)`} />
          {/* Hat crown highlight */}
          <path d="M120 85 Q120 55 150 48 Q160 50 168 55" stroke="#E8303A" strokeWidth="2" fill="none" opacity="0.3" />
          {/* Hat band */}
          <rect x="110" y="80" width="80" height="9" rx="2" fill="#8B6914" />
          {/* Hat band buckle */}
          <rect x="143" y="79" width="14" height="11" rx="2" fill="#C9A96E" stroke="#8B6914" strokeWidth="1" />
          <rect x="146" y="81" width="8" height="7" rx="1" fill="#8B6914" />
          {/* Hat crease/dent */}
          <path d="M118 65 Q150 52 182 65" stroke="#9B162E" strokeWidth="2" fill="none" />
          {/* Maple leaf badge on hat */}
          <path d="M150 62 l3 6 h5 l-4 5 1.5 6 -5.5-3 -5.5 3 1.5-6 -4-5 h5 z" fill="#fff" />
        </g>
      </g>

      {/* Floating maple leaves for wave/flag scenes */}
      {(scene === "wave" || scene === "flag") && (
        <g>
          <g opacity="0.6">
            <path d="M245 80l2 4h3l-2.5 3 1 4-3.5-2-3.5 2 1-4-2.5-3h3z" fill="#d52b1e">
              <animateTransform attributeName="transform" type="translate" values="0,0;5,-8;0,0;-3,5;0,0" dur="5s" repeatCount="indefinite" />
            </path>
          </g>
          <g opacity="0.45">
            <path d="M60 60l1.5 3h2.5l-2 2.5.8 3-2.8-1.5-2.8 1.5.8-3-2-2.5h2.5z" fill="#d52b1e">
              <animateTransform attributeName="transform" type="translate" values="0,0;-4,6;0,0;6,-3;0,0" dur="6.5s" repeatCount="indefinite" />
            </path>
          </g>
          <g opacity="0.5">
            <path d="M260 200l2 4h3l-2.5 3 1 4-3.5-2-3.5 2 1-4-2.5-3h3z" fill="#d52b1e">
              <animateTransform attributeName="transform" type="translate" values="0,0;3,7;0,0;-5,-4;0,0" dur="7s" repeatCount="indefinite" />
            </path>
          </g>
        </g>
      )}
    </svg>
  );
}

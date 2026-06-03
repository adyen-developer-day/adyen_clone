// BeaverDirect wordmark — beaver silhouette with Mountie hat + Canadian flag accent.
export default function AdyenLogo({ className, height = 26 }) {
  const width = (160 / 26) * height;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 160 26"
      fill="currentColor"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BeaverDirect"
    >
      <title>BeaverDirect</title>
      {/* Beaver body */}
      <ellipse cx="11" cy="16" rx="7" ry="8" fill="#8B6914" />
      {/* Belly */}
      <ellipse cx="11" cy="18" rx="5" ry="5" fill="#D4A855" />
      {/* Head */}
      <circle cx="11" cy="10" r="6" fill="#8B6914" />
      {/* Eyes */}
      <circle cx="9" cy="9" r="1.2" fill="#fff" />
      <circle cx="13" cy="9" r="1.2" fill="#fff" />
      <circle cx="9.3" cy="8.8" r="0.6" fill="#2c1810" />
      <circle cx="13.3" cy="8.8" r="0.6" fill="#2c1810" />
      {/* Nose */}
      <ellipse cx="11" cy="11" rx="1" ry="0.7" fill="#3d261a" />
      {/* Buck teeth */}
      <rect x="10" y="11.8" width="1" height="1.5" rx="0.3" fill="#fff" />
      <rect x="11" y="11.8" width="1" height="1.5" rx="0.3" fill="#fff" />
      {/* Mountie hat */}
      <ellipse cx="11" cy="5.5" rx="7" ry="1.5" fill="#c41e3a" />
      <path d="M5.5 5.5 Q5.5 1 11 0 Q16.5 1 16.5 5.5" fill="#c41e3a" />
      {/* Hat band */}
      <rect x="6" y="4" width="10" height="1.2" rx="0.3" fill="#8B6914" />
      {/* Maple leaf on hat */}
      <path d="M11 2.5l0.5 1h0.8l-0.6 0.7 0.2 1-0.9-0.5-0.9 0.5 0.2-1-0.6-0.7h0.8z" fill="#fff" />
      {/* Tail */}
      <ellipse cx="3" cy="21" rx="3.5" ry="1.5" fill="#6B4226" transform="rotate(-15, 3, 21)" />
      {/* Ears */}
      <circle cx="6" cy="6" r="1.5" fill="#D4A855" />
      <circle cx="16" cy="6" r="1.5" fill="#D4A855" />
      {/* Small Canadian flag */}
      <rect x="19" y="4" width="8" height="5" rx="0.5" fill="#fff" stroke="#d52b1e" strokeWidth="0.3" />
      <rect x="19" y="4" width="2" height="5" fill="#d52b1e" />
      <rect x="25" y="4" width="2" height="5" fill="#d52b1e" />
      <circle cx="23" cy="6.5" r="0.8" fill="#d52b1e" />
      {/* Text: BeaverDirect */}
      <text
        x="30"
        y="18"
        fontFamily="inherit"
        fontWeight="700"
        fontSize="14"
        letterSpacing="-0.3"
      >
        BeaverDirect
      </text>
    </svg>
  );
}

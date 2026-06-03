// Polished Canadian maple leaf SVG with vein details.
export default function MapleLeaf({ size = 24, color = "#d52b1e", className = "", style = {} }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      {/* Proper 11-point Canadian maple leaf */}
      <path
        d="M20 2 L22 10 L28 7 L25 14 L32 14 L27 18 L33 22 L26 22 L28 30 L20 25 L12 30 L14 22 L7 22 L13 18 L8 14 L15 14 L12 7 L18 10 Z"
        fill={color}
      />
      {/* Stem */}
      <rect x="19" y="28" width="2" height="10" rx="1" fill={color} opacity="0.7" />
      {/* Vein details */}
      <line x1="20" y1="12" x2="20" y2="25" stroke={color} strokeWidth="0.8" opacity="0.3" />
      <line x1="20" y1="16" x2="14" y2="20" stroke={color} strokeWidth="0.6" opacity="0.2" />
      <line x1="20" y1="16" x2="26" y2="20" stroke={color} strokeWidth="0.6" opacity="0.2" />
    </svg>
  );
}

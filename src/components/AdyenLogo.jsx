// BeaverDirect wordmark — a beaver silhouette + text logo.
// Uses currentColor so it adapts to surrounding theme.
export default function AdyenLogo({ className, height = 26 }) {
  const width = (140 / 26) * height;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 140 26"
      fill="currentColor"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BeaverDirect"
    >
      <title>BeaverDirect</title>
      {/* Beaver silhouette */}
      <ellipse cx="10" cy="13" rx="8" ry="10" />
      <ellipse cx="6" cy="5" rx="3" ry="4" />
      <ellipse cx="14" cy="5" rx="3" ry="4" />
      <rect x="6" y="20" width="3" height="6" rx="1.5" />
      <rect x="11" y="20" width="3" height="6" rx="1.5" />
      {/* Flat beaver tail */}
      <ellipse cx="10" cy="24" rx="5" ry="2" />
      {/* Text: BeaverDirect */}
      <text
        x="24"
        y="18"
        fontFamily="inherit"
        fontWeight="700"
        fontSize="16"
        letterSpacing="-0.5"
      >
        BeaverDirect
      </text>
    </svg>
  );
}

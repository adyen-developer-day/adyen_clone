// MGNUM Holdings Inc. wordmark. Uses currentColor so it adapts to the
// surrounding theme (navy on light, white on dark, navy on green).
export default function AdyenLogo({ className, height = 26 }) {
  const width = (120 / 26) * height;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 120 26"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MGNUM"
    >
      <title>MGNUM</title>
      <text
        x="0"
        y="22"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="24"
        fontWeight="900"
        fill="currentColor"
        letterSpacing="-1"
      >
        MGNUM
      </text>
    </svg>
  );
}

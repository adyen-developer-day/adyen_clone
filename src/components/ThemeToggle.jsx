export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  const nextLabel = `Switch to ${isDark ? "light" : "dark"} mode`;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={nextLabel}
      title={nextLabel}
    >
      {isDark ? (
        <svg
          className="theme-toggle__icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 2.5v3" />
            <path d="M12 18.5v3" />
            <path d="M2.5 12h3" />
            <path d="M18.5 12h3" />
            <path d="M5 5l2.1 2.1" />
            <path d="M16.9 16.9L19 19" />
            <path d="M19 5l-2.1 2.1" />
            <path d="M7.1 16.9L5 19" />
          </g>
        </svg>
      ) : (
        <svg
          className="theme-toggle__icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}

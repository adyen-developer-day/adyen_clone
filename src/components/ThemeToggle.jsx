import { useTheme } from "../hooks/useTheme.js";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" fill="currentColor" />
          <g
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M12 2.6v2.4" />
            <path d="M12 19v2.4" />
            <path d="M2.6 12H5" />
            <path d="M19 12h2.4" />
            <path d="M5.1 5.1l1.7 1.7" />
            <path d="M17.2 17.2l1.7 1.7" />
            <path d="M18.9 5.1l-1.7 1.7" />
            <path d="M6.8 17.2l-1.7 1.7" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.5 14.2A8 8 0 0 1 9.8 3.5a8 8 0 1 0 10.7 10.7z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}

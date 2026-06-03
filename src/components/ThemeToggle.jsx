import { useTheme } from "../data/content.js";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isRetro = theme === "retro";
  return (
    <div className="themetoggle">
      <span className="themetoggle__label">
        Now viewing:{" "}
        <span className="themetoggle__state">
          {isRetro ? "Retro '90s" : "Default"}
        </span>
      </span>
      <button
        type="button"
        className="themetoggle__btn"
        onClick={toggleTheme}
        aria-pressed={isRetro}
      >
        {isRetro ? "Switch to Default" : "Switch to Retro '90s"}
      </button>
    </div>
  );
}

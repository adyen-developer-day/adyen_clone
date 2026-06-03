import { useEffect, useState } from "react";

export const THEME_KEY = "theme";

// Resolve the initial theme: an explicit stored choice wins, otherwise fall
// back to the OS preference. Mirrors the inline script in index.html so the
// React state matches the attribute already applied before first paint.
export function getInitialTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable (e.g. privacy mode) — fall through.
  }
  const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
  return mql && mql.matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(THEME_KEY, next);
      } catch {
        // Persistence is best-effort; ignore storage failures.
      }
      return next;
    });

  return { theme, toggleTheme };
}

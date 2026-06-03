import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const prefersDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export function readStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

// Resolve the initial theme: an explicit stored choice wins, otherwise follow
// the OS `prefers-color-scheme` setting.
export function resolveInitialTheme() {
  return readStoredTheme() ?? (prefersDark() ? "dark" : "light");
}

export function useTheme() {
  const [theme, setTheme] = useState(resolveInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // While the user hasn't made an explicit choice, keep mirroring the OS.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      if (readStoredTheme() === null) {
        setTheme(event.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore storage failures (e.g. private mode); state still updates
      }
      return next;
    });
  };

  return { theme, toggle };
}

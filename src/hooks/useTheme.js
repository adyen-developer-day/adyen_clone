import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const prefersDark = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const getStored = () => {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "light" || value === "dark" ? value : null;
};

const getInitialTheme = () => getStored() ?? (prefersDark() ? "dark" : "light");

// Light/dark theme controller. The choice is persisted to localStorage only
// when the user explicitly toggles; until then we follow `prefers-color-scheme`.
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => {
      if (!getStored()) setTheme(event.matches ? "dark" : "light");
    };
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}

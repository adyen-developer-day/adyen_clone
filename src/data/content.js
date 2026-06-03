// Theme-aware content provider.
// Exposes the active theme ("default" | "retro"), a toggle, and the matching copy.

import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import defaultContent from "./content.default.js";
import retroContent from "./content.retro.js";

export const THEMES = {
  default: defaultContent,
  retro: retroContent,
};

const STORAGE_KEY = "adyen-clone-theme";

function readStoredTheme() {
  if (typeof window === "undefined") return "default";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "retro" ? "retro" : "default";
}

const ThemeContext = createContext({
  theme: "default",
  content: defaultContent,
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      content: THEMES[theme],
      setTheme,
      toggleTheme: () =>
        setTheme((prev) => (prev === "retro" ? "default" : "retro")),
    }),
    [theme]
  );

  return createElement(ThemeContext.Provider, { value }, children);
}

// Returns { theme, content, setTheme, toggleTheme }. Falls back to default
// content when used outside a provider (e.g. in isolated component tests).
export function useTheme() {
  return useContext(ThemeContext);
}

export function useContent() {
  return useTheme().content;
}

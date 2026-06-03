import { createContext, useEffect, useState } from "react";

const STORAGE_KEY = "starwars-mode";

export const ThemeContext = createContext({
  starWarsMode: false,
  toggleStarWars: () => {},
});

function getInitialMode() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export function ThemeProvider({ children }) {
  const [starWarsMode, setStarWarsMode] = useState(getInitialMode);

  useEffect(() => {
    if (starWarsMode) {
      document.documentElement.setAttribute("data-theme", "starwars");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    window.localStorage.setItem(STORAGE_KEY, String(starWarsMode));
  }, [starWarsMode]);

  const toggleStarWars = () => setStarWarsMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ starWarsMode, toggleStarWars }}>
      {children}
    </ThemeContext.Provider>
  );
}

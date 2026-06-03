import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import * as adyenContent from "../data/content.js";
import * as starWarsContent from "../data/starwars-content.js";

// Returns the active content module based on the current theme.
export function useContent() {
  const { starWarsMode } = useContext(ThemeContext);
  return starWarsMode ? starWarsContent : adyenContent;
}

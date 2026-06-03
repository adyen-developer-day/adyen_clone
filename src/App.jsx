import { useEffect, useState } from "react";
import TopBanner from "./components/TopBanner.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ValueProps from "./components/ValueProps.jsx";
import MoneyMovement from "./components/MoneyMovement.jsx";
import Industries from "./components/Industries.jsx";
import Stats from "./components/Stats.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Toast from "./components/Toast.jsx";

const THEME_COOKIE = "theme";
const THEME_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function readThemeCookie() {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)theme=(light|dark)\b/);
  return match ? match[1] : null;
}

function writeThemeCookie(theme) {
  if (typeof document === "undefined") return;
  document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=${THEME_MAX_AGE}; SameSite=Lax`;
}

function getInitialTheme() {
  const saved = readThemeCookie();
  if (saved === "light" || saved === "dark") return saved;
  return "light";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    writeThemeCookie(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      setToast({ id: Date.now(), text: `Switched to ${next} mode` });
      return next;
    });
  };

  return (
    <div className="page">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <MoneyMovement />
        <Industries />
        <Stats />
        <CaseStudies />
        <FinalCTA />
      </main>
      <Footer />
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}

import { useEffect } from "react";
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

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function randomizeAllColors() {
  const els = document.querySelectorAll("*");
  els.forEach((el) => {
    el.style.backgroundColor = randomColor();
    el.style.color = randomColor();
    el.style.borderColor = randomColor();
  });
}

export default function App() {
  useEffect(() => {
    randomizeAllColors();
    const id = setInterval(randomizeAllColors, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="page">
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
    </div>
  );
}

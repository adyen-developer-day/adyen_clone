import ThemeToggle from "./components/ThemeToggle.jsx";
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

export default function App() {
  return (
    <div className="page">
      <ThemeToggle />
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

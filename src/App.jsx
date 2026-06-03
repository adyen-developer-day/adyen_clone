import StockTicker from "./components/StockTicker.jsx";
import TopBanner from "./components/TopBanner.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ValueProps from "./components/ValueProps.jsx";
import MoneyMovement from "./components/MoneyMovement.jsx";
import Industries from "./components/Industries.jsx";
import Stats from "./components/Stats.jsx";
import CountdownTimer from "./components/CountdownTimer.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import Disclaimer from "./components/Disclaimer.jsx";

export default function App() {
  return (
    <div className="page">
      <StockTicker />
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <MoneyMovement />
        <Industries />
        <Stats />
        <CountdownTimer />
        <CaseStudies />
        <FinalCTA />
      </main>
      <Footer />
      <Disclaimer />
    </div>
  );
}

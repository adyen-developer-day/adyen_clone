import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LogoCloud from "./components/LogoCloud.jsx";
import Features from "./components/Features.jsx";
import Stats from "./components/Stats.jsx";
import Solutions from "./components/Solutions.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Stats />
        <Solutions />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

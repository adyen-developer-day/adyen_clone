import { hero } from "../data/content.js";
import BeaverMascot from "./BeaverMascot.jsx";
import MapleLeaf from "./MapleLeaf.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">{hero.title}</h1>
            <p className="hero__subtitle">{hero.subtitle}</p>
            <div className="hero__cta">
              <a className="btn btn--dark btn--lg" href="#contact">
                {hero.cta}
              </a>
            </div>
          </div>
          <div className="hero__mascot">
            <BeaverMascot scene="wave" size={280} />
          </div>
        </div>
        <div className="hero__maple-accents" aria-hidden="true">
          <MapleLeaf size={20} className="hero__leaf hero__leaf--1" />
          <MapleLeaf size={14} className="hero__leaf hero__leaf--2" />
          <MapleLeaf size={18} className="hero__leaf hero__leaf--3" />
        </div>
      </div>
    </section>
  );
}

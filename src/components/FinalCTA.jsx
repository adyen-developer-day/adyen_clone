import { finalCta } from "../data/content.js";
import BeaverMascot from "./BeaverMascot.jsx";
import MapleLeaf from "./MapleLeaf.jsx";

export default function FinalCTA() {
  return (
    <section className="finalcta" id="contact">
      <div className="container finalcta__inner">
        <div className="finalcta__maple-row" aria-hidden="true">
          <MapleLeaf size={28} color="#2c1810" className="finalcta__leaf" />
          <MapleLeaf size={22} color="#2c1810" className="finalcta__leaf" />
          <MapleLeaf size={28} color="#2c1810" className="finalcta__leaf" />
        </div>
        <h2 className="finalcta__title">{finalCta.title}</h2>
        <div className="finalcta__mascot">
          <BeaverMascot scene="ride-drone" size={220} />
        </div>
        <a className="btn btn--dark btn--lg" href="#contact">
          {finalCta.cta}
        </a>
      </div>
    </section>
  );
}

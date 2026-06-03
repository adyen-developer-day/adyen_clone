import { moneyMovement } from "../data/content.js";
import SectionStatement from "./SectionStatement.jsx";
import BeaverMascot from "./BeaverMascot.jsx";
import DroneIllustration from "./DroneIllustration.jsx";

export default function MoneyMovement() {
  return (
    <section className="section moneymove">
      <div className="container">
        <SectionStatement lead={moneyMovement.lead} trail={moneyMovement.trail} />
        <div className="moneymove__grid">
          {moneyMovement.cards.map((card, i) => (
            <article
              key={card.title}
              className={`bigcard bigcard--${card.theme}`}
            >
              <span className="bigcard__eyebrow">{card.eyebrow}</span>
              <h3 className="bigcard__title">{card.title}</h3>
              <p className="bigcard__body">{card.body}</p>
              <div className="bigcard__illustration">
                {i === 0 ? (
                  <DroneIllustration size={220} />
                ) : (
                  <BeaverMascot scene="package" size={140} />
                )}
              </div>
              <a className="bigcard__cta" href="#products">
                {card.cta}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

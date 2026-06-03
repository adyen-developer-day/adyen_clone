import { moneyMovement } from "../data/content.js";
import SectionStatement from "./SectionStatement.jsx";
import Win95Window from "./Win95Window.jsx";

export default function MoneyMovement() {
  return (
    <section className="section moneymove win95-section">
      <div className="container">
        <SectionStatement lead={moneyMovement.lead} trail={moneyMovement.trail} />
        <div className="moneymove__grid">
          {moneyMovement.cards.map((card) => (
            <Win95Window key={card.title} title={`💰 ${card.eyebrow}`} className={`bigcard bigcard--${card.theme}`}>
              <h3 className="bigcard__title">{card.title}</h3>
              <p className="bigcard__body">{card.body}</p>
              <a className="bigcard__cta win95-btn" href="#products">
                {card.cta}
                <span aria-hidden="true">→</span>
              </a>
            </Win95Window>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionStatement from "./SectionStatement.jsx";
import { useContent } from "../hooks/useContent.js";

export default function MoneyMovement() {
  const { moneyMovement } = useContent();
  return (
    <section className="section moneymove">
      <div className="container">
        <SectionStatement lead={moneyMovement.lead} trail={moneyMovement.trail} />
        <div className="moneymove__grid">
          {moneyMovement.cards.map((card) => (
            <article
              key={card.title}
              className={`bigcard bigcard--${card.theme}`}
            >
              <span className="bigcard__eyebrow">{card.eyebrow}</span>
              <h3 className="bigcard__title">{card.title}</h3>
              <p className="bigcard__body">{card.body}</p>
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

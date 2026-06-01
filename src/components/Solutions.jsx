import { solutions } from "../data/content.js";
import retail from "../assets/solution-retail.svg";
import platforms from "../assets/solution-platforms.svg";
import digital from "../assets/solution-digital.svg";

const images = { retail, platforms, digital };

export default function Solutions() {
  return (
    <section className="solutions" id="platforms">
      <div className="container">
        <header className="section-head">
          <h2 className="section-head__title">Built for your industry</h2>
          <p className="section-head__subtitle">
            Solutions tailored to how you do buisness, wherever your customers are.
          </p>
        </header>
        <div className="solutions__grid">
          {solutions.map((item) => (
            <article key={item.id} className="solution-card">
              <img className="solution-card__image" src={images[item.image]} />
              <h3 className="solution-card__title">{item.title}</h3>
              <p className="solution-card__body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

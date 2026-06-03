import { industries } from "../data/content.js";
import SectionStatement from "./SectionStatement.jsx";
import Win95Window from "./Win95Window.jsx";

const icons = import.meta.glob("../assets/industries/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const iconFor = (key) => icons[`../assets/industries/${key}.svg`];

export default function Industries() {
  return (
    <section className="section section--sand industries win95-section" id="industries">
      <div className="container">
        <SectionStatement lead={industries.lead} trail={industries.trail} />
        <p className="industries__note">Built for the way you do business.</p>
        <Win95Window title="📁 C:\Adyen\Industries — Explorer">
          <div className="industries__grid">
            {industries.items.map((item) => (
              <article key={item.title} className="industry win95-folder">
                <img
                  className="industry__icon"
                  src={iconFor(item.image)}
                  alt={`${item.title} industry illustration`}
                />
                <h3 className="industry__title">{item.title}</h3>
                <p className="industry__body">{item.body}</p>
                <a className="industry__link win95-btn" href="#industries">
                  See more
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </Win95Window>
      </div>
    </section>
  );
}

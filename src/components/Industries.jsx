import { useContent } from "../data/content.js";
import SectionStatement from "./SectionStatement.jsx";

// Industry illustrations are bundled as static assets and resolved by key.
const icons = import.meta.glob("../assets/industries/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const iconFor = (key) => icons[`../assets/industries/${key}.svg`];

export default function Industries() {
  const { industries } = useContent();
  return (
    <section className="section section--sand industries" id="industries">
      <div className="container">
        <SectionStatement lead={industries.lead} trail={industries.trail} />
        <p className="industries__note">{industries.note}</p>
        <div className="industries__grid">
          {industries.items.map((item) => (
            <article key={item.title} className="industry">
              <img
                className="industry__icon"
                src={iconFor(item.image)}
                alt={`${item.title} industry illustration`}
              />
              <h3 className="industry__title">{item.title}</h3>
              <p className="industry__body">{item.body}</p>
              <a className="industry__link" href="#industries">
                {industries.linkLabel}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

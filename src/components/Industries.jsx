import { industries } from "../data/content.js";
import SectionStatement from "./SectionStatement.jsx";

// Industry illustrations are bundled as static assets and resolved by key.
const icons = import.meta.glob("../assets/industries/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
});

const iconFor = (key) => icons[`../assets/industries/${key}.svg`];

// Industry photos for card headers.
const photos = import.meta.glob("../assets/images/industry-*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

const photoFor = (key) => photos[`../assets/images/industry-${key}.jpg`];

export default function Industries() {
  return (
    <section className="section section--sand industries" id="industries">
      <div className="container">
        <SectionStatement lead={industries.lead} trail={industries.trail} />
        <p className="industries__note">Built for the way you do buisness.</p>
        <div className="industries__grid">
          {industries.items.map((item) => (
            <article key={item.title} className="industry">
              <img
                className="industry__photo"
                src={photoFor(item.image)}
                alt={item.title}
              />
              <div className="industry__content">
                <img className="industry__icon" src={iconFor(item.image)} />
                <h3 className="industry__title">{item.title}</h3>
                <p className="industry__body">{item.body}</p>
                <a className="industry__link" href="#industries">
                  See more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

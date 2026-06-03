import { valueProps } from "../data/content.js";
import SectionStatement from "./SectionStatement.jsx";
import Win95Window from "./Win95Window.jsx";

export default function ValueProps() {
  return (
    <section className="section section--sand valueprops win95-section" id="products">
      <div className="container">
        <SectionStatement lead={valueProps.lead} trail={valueProps.trail} />
        <Win95Window title="📋 Product Features — Properties">
          <ul className="valueprops__grid">
            {valueProps.items.map((item, i) => (
              <li key={item.title} className="valueprop win95-inset-box">
                <span className="valueprop__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="valueprop__title">{item.title}</h3>
                <p className="valueprop__body">{item.body}</p>
              </li>
            ))}
          </ul>
        </Win95Window>
      </div>
    </section>
  );
}

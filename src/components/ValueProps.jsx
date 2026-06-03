import { valueProps } from "../data/content.js";
import SectionStatement from "./SectionStatement.jsx";
import valuepropsBg from "../assets/images/valueprops-bg.jpg";

export default function ValueProps() {
  return (
    <section className="section section--sand valueprops" id="products">
      <div className="container">
        <SectionStatement lead={valueProps.lead} trail={valueProps.trail} />
        <img
          className="valueprops__hero"
          src={valuepropsBg}
          alt="Professional team collaborating in a modern office meeting"
        />
        <ul className="valueprops__grid">
          {valueProps.items.map((item, i) => (
            <li key={item.title} className="valueprop">
              <span className="valueprop__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="valueprop__title">{item.title}</h3>
              <p className="valueprop__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

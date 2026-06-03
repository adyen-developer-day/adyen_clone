import SectionStatement from "./SectionStatement.jsx";
import { useContent } from "../hooks/useContent.js";

export default function ValueProps() {
  const { valueProps } = useContent();
  return (
    <section className="section section--sand valueprops" id="products">
      <div className="container">
        <SectionStatement lead={valueProps.lead} trail={valueProps.trail} />
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

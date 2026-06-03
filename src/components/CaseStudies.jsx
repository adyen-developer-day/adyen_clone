import { caseStudies } from "../data/content.js";
import Win95Window from "./Win95Window.jsx";

export default function CaseStudies() {
  return (
    <section className="section section--sand cases win95-section" id="resources">
      <div className="container">
        <h2 className="cases__title">{caseStudies.lead}</h2>
      </div>
      <div className="cases__rail" role="list">
        {caseStudies.stories.map((story) => (
          <article key={story.brand} className="storycard win95-storycard" role="listitem">
            <span className="storycard__tag">Story</span>
            <span className="storycard__brand">{story.brand}</span>
            <p className="storycard__body">{story.body}</p>
            <a className="storycard__link win95-btn" href="#resources">
              Read story
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

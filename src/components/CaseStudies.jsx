import { caseStudies } from "../data/content.js";

export default function CaseStudies() {
  return (
    <section className="section section--sand cases" id="resources">
      <div className="container">
        <h2 className="cases__title">{caseStudies.lead}</h2>
      </div>
      <div className="cases__rail" role="list">
        {caseStudies.stories.map((story) => (
          <article key={story.brand} className="storycard" role="listitem">
            <span className="storycard__tag">Tea ☕</span>
            <span className="storycard__brand">{story.brand}</span>
            <p className="storycard__body">{story.body}</p>
            <a className="storycard__link" href="#resources">
              Get the tea
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

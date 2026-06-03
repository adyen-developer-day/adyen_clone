import { useContent } from "../hooks/useContent.js";

export default function CaseStudies() {
  const { caseStudies } = useContent();
  return (
    <section className="section section--sand cases" id="resources">
      <div className="container">
        <h2 className="cases__title">{caseStudies.lead}</h2>
      </div>
      <div className="cases__rail" role="list">
        {caseStudies.stories.map((story) => (
          <article key={story.brand} className="storycard" role="listitem">
            <span className="storycard__tag">Story</span>
            <span className="storycard__brand">{story.brand}</span>
            <p className="storycard__body">{story.body}</p>
            <a className="storycard__link" href="#resources">
              Read story
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

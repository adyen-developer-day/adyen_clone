import { useContent } from "../data/content.js";

export default function TopBanner() {
  const { announcement } = useContent();
  return (
    <a className="topbanner" href={announcement.href}>
      <span className="topbanner__tag">{announcement.tag}</span>
      <span className="topbanner__text">{announcement.text}</span>
      <span className="topbanner__arrow" aria-hidden="true">→</span>
    </a>
  );
}

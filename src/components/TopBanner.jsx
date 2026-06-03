import { announcement } from "../data/content.js";

export default function TopBanner() {
  return (
    <a className="topbanner win95-topbanner" href={announcement.href}>
      <span className="topbanner__tag win95-topbanner__tag">📢 {announcement.tag}</span>
      <span className="topbanner__text">{announcement.text}</span>
      <span className="topbanner__arrow" aria-hidden="true">→</span>
    </a>
  );
}

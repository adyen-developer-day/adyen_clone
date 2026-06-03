import { announcement } from "../data/content.js";

export default function TopBanner() {
  return (
    <a className="topbanner" href={announcement.href}>
      <span className="topbanner__pulse" aria-hidden="true" />
      <span className="topbanner__tag">{announcement.tag}</span>
      <span className="topbanner__text">
        NEW OPERATION AVAILABLE — LOOT CRATES NOW LIVE
      </span>
      <span className="topbanner__arrow" aria-hidden="true">→</span>
    </a>
  );
}

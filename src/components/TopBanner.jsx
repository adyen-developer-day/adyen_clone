import { announcement } from "../data/content.js";
import MapleLeaf from "./MapleLeaf.jsx";

export default function TopBanner() {
  return (
    <a className="topbanner" href={announcement.href}>
      <MapleLeaf size={14} color="#d52b1e" style={{ opacity: 0.8 }} />
      <span className="topbanner__tag">{announcement.tag}</span>
      <span className="topbanner__text">{announcement.text}</span>
      <span className="topbanner__arrow" aria-hidden="true">→</span>
    </a>
  );
}

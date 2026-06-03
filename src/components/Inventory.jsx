// Terraria-style inventory sidebar collecting all action buttons/links
import { navLinks, hero, moneyMovement, finalCta } from "../data/content.js";

const inventoryItems = [
  { icon: "⚔️", label: hero.cta, href: "#contact", active: true },
  { icon: "📞", label: "Contact Sales", href: "#contact" },
  { icon: "📰", label: "Newsletter", href: "#newsletter" },
  { icon: "💰", label: finalCta.cta, href: "#contact" },
  ...navLinks.map((link) => ({
    icon: getNavIcon(link.label),
    label: link.label,
    href: link.href,
  })),
  ...moneyMovement.cards.map((card) => ({
    icon: card.theme === "dark" ? "💎" : "🏗️",
    label: card.cta,
    href: "#products",
  })),
  { icon: "🛡️", label: "Compliance", href: "#products" },
  { icon: "⚡", label: "Uptime", href: "#about" },
  { icon: "🌍", label: "Global", href: "#about" },
  { icon: "🔧", label: "Integrate", href: "#products" },
  { icon: "📊", label: "Optimize", href: "#products" },
  { icon: "🏪", label: "Retail", href: "#industries" },
  { icon: "✈️", label: "Travel", href: "#industries" },
  { icon: "🎮", label: "Digital", href: "#industries" },
  { icon: "💻", label: "SaaS", href: "#industries" },
  { icon: "🍔", label: "Food", href: "#industries" },
  { icon: "🏦", label: "Finance", href: "#industries" },
];

function getNavIcon(label) {
  const icons = {
    Products: "🗡️",
    "Businesses we serve": "🏰",
    About: "📜",
    Resources: "📦",
    Pricing: "💰",
  };
  return icons[label] || "📋";
}

// Fill remaining slots to make a nice grid
const totalSlots = Math.ceil(inventoryItems.length / 4) * 4;
const emptySlots = totalSlots - inventoryItems.length;

export default function Inventory() {
  return (
    <aside className="inventory" aria-label="Inventory">
      <div className="inventory__header">⚒ Inventory ⚒</div>

      {/* HP & Mana bars */}
      <div className="inventory__bars">
        <div className="inventory__bar">
          <span className="inventory__bar-label">HP</span>
          <div className="inventory__bar-track">
            <div className="inventory__bar-fill inventory__bar-fill--hp" />
          </div>
        </div>
        <div className="inventory__bar">
          <span className="inventory__bar-label">MP</span>
          <div className="inventory__bar-track">
            <div className="inventory__bar-fill inventory__bar-fill--mana" />
          </div>
        </div>
      </div>

      {/* Main inventory grid */}
      <div className="inventory__grid">
        {inventoryItems.map((item, i) => (
          <a
            key={`${item.label}-${i}`}
            href={item.href}
            className={`inventory__slot${item.active ? " inventory__slot--active" : ""}`}
            title={item.label}
          >
            <span className="inventory__slot-icon">{item.icon}</span>
            <span className="inventory__slot-label">{item.label}</span>
          </a>
        ))}
        {Array.from({ length: emptySlots }, (_, i) => (
          <div key={`empty-${i}`} className="inventory__slot inventory__slot--empty" />
        ))}
      </div>

      {/* Quick bar */}
      <div className="inventory__quickbar">
        <div className="inventory__quickbar-title">~ Quick Bar ~</div>
        <div className="inventory__quickbar-grid">
          <a href="#contact" className="inventory__slot inventory__slot--active" title="Talk to team">
            <span className="inventory__slot-icon">⚔️</span>
          </a>
          <a href="#products" className="inventory__slot" title="Products">
            <span className="inventory__slot-icon">🗡️</span>
          </a>
          <a href="#industries" className="inventory__slot" title="Industries">
            <span className="inventory__slot-icon">🏰</span>
          </a>
          <a href="#about" className="inventory__slot" title="About">
            <span className="inventory__slot-icon">📜</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

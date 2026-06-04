import { describe, it, expect } from "vitest";
import {
  announcement,
  navLinks,
  hero,
  valueProps,
  moneyMovement,
  industries,
  stats,
  caseStudies,
  finalCta,
  footerColumns,
  footerLegal,
} from "./content.js";

const isAnchor = (href) => typeof href === "string" && href.startsWith("#");

describe("content.js", () => {
  it("exposes an announcement with an in-page href", () => {
    expect(announcement.tag).toBeTruthy();
    expect(announcement.text).toBeTruthy();
    expect(isAnchor(announcement.href)).toBe(true);
  });

  it("defines nav links with labels and anchor hrefs", () => {
    expect(navLinks.length).toBeGreaterThan(0);
    navLinks.forEach((link) => {
      expect(link.label).toBeTruthy();
      expect(isAnchor(link.href)).toBe(true);
    });
  });

  it("provides hero copy", () => {
    expect(hero.title).toBeTruthy();
    expect(hero.subtitle).toBeTruthy();
    expect(hero.cta).toBeTruthy();
  });

  it("provides value props with title and body", () => {
    expect(valueProps.items.length).toBeGreaterThan(0);
    valueProps.items.forEach((item) => {
      expect(item.title).toBeTruthy();
      expect(item.body).toBeTruthy();
    });
  });

  it("provides money movement cards with a theme", () => {
    moneyMovement.cards.forEach((card) => {
      expect(card.eyebrow).toBeTruthy();
      expect(card.title).toBeTruthy();
      expect(card.body).toBeTruthy();
      expect(card.cta).toBeTruthy();
      expect(["dark", "green"]).toContain(card.theme);
    });
  });

  it("provides industries each with an image key", () => {
    expect(industries.items.length).toBeGreaterThan(0);
    industries.items.forEach((item) => {
      expect(item.title).toBeTruthy();
      expect(item.body).toBeTruthy();
      expect(item.image).toBeTruthy();
    });
  });

  it("provides stats with value and label", () => {
    stats.items.forEach((stat) => {
      expect(stat.value).toBeTruthy();
      expect(stat.label).toBeTruthy();
    });
  });

  it("provides case studies with brand and body", () => {
    expect(caseStudies.lead).toBeTruthy();
    caseStudies.stories.forEach((story) => {
      expect(story.brand).toBeTruthy();
      expect(story.body).toBeTruthy();
    });
  });

  it("provides a final CTA", () => {
    expect(finalCta.title).toBeTruthy();
    expect(finalCta.cta).toBeTruthy();
  });

  it("defines footer columns with labelled anchor links", () => {
    expect(footerColumns.length).toBeGreaterThan(0);
    footerColumns.forEach((col) => {
      expect(col.heading).toBeTruthy();
      expect(col.links.length).toBeGreaterThan(0);
      col.links.forEach((link) => {
        expect(link.label).toBeTruthy();
        expect(isAnchor(link.href)).toBe(true);
      });
    });
  });

  it("defines legal links as labelled anchors", () => {
    footerLegal.forEach((link) => {
      expect(link.label).toBeTruthy();
      expect(isAnchor(link.href)).toBe(true);
    });
  });
});

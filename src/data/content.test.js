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

const nonEmptyString = (value) =>
  typeof value === "string" && value.trim().length > 0;

// Internal anchors used across the site point to in-page fragments.
const isFragment = (href) =>
  typeof href === "string" && /^#[\w-]+$/.test(href);

describe("content.js output", () => {
  it("announcement has a tag, text, and fragment href", () => {
    expect(nonEmptyString(announcement.tag)).toBe(true);
    expect(nonEmptyString(announcement.text)).toBe(true);
    expect(isFragment(announcement.href)).toBe(true);
  });

  it("navLinks each have a label and a fragment href", () => {
    expect(navLinks.length).toBeGreaterThan(0);
    navLinks.forEach((link) => {
      expect(nonEmptyString(link.label)).toBe(true);
      expect(isFragment(link.href)).toBe(true);
    });
  });

  it("hero has title, subtitle, and cta copy", () => {
    expect(nonEmptyString(hero.title)).toBe(true);
    expect(nonEmptyString(hero.subtitle)).toBe(true);
    expect(nonEmptyString(hero.cta)).toBe(true);
  });

  it("valueProps has a lead, trail, and well-formed items", () => {
    expect(nonEmptyString(valueProps.lead)).toBe(true);
    expect(nonEmptyString(valueProps.trail)).toBe(true);
    expect(valueProps.items.length).toBeGreaterThan(0);
    valueProps.items.forEach((item) => {
      expect(nonEmptyString(item.title)).toBe(true);
      expect(nonEmptyString(item.body)).toBe(true);
    });
  });

  it("moneyMovement cards expose eyebrow, title, body, cta, and theme", () => {
    expect(nonEmptyString(moneyMovement.lead)).toBe(true);
    expect(nonEmptyString(moneyMovement.trail)).toBe(true);
    expect(moneyMovement.cards.length).toBeGreaterThan(0);
    moneyMovement.cards.forEach((card) => {
      expect(nonEmptyString(card.eyebrow)).toBe(true);
      expect(nonEmptyString(card.title)).toBe(true);
      expect(nonEmptyString(card.body)).toBe(true);
      expect(nonEmptyString(card.cta)).toBe(true);
      expect(["dark", "green"]).toContain(card.theme);
    });
  });

  it("industries items have a title, body, and image key", () => {
    expect(nonEmptyString(industries.lead)).toBe(true);
    expect(nonEmptyString(industries.trail)).toBe(true);
    expect(industries.items.length).toBe(6);
    industries.items.forEach((item) => {
      expect(nonEmptyString(item.title)).toBe(true);
      expect(nonEmptyString(item.body)).toBe(true);
      expect(nonEmptyString(item.image)).toBe(true);
    });
  });

  it("stats items have a value and label", () => {
    expect(nonEmptyString(stats.lead)).toBe(true);
    expect(nonEmptyString(stats.trail)).toBe(true);
    expect(stats.items.length).toBeGreaterThan(0);
    stats.items.forEach((stat) => {
      expect(nonEmptyString(stat.value)).toBe(true);
      expect(nonEmptyString(stat.label)).toBe(true);
    });
  });

  it("caseStudies stories have a brand and body", () => {
    expect(nonEmptyString(caseStudies.lead)).toBe(true);
    expect(caseStudies.stories.length).toBeGreaterThan(0);
    caseStudies.stories.forEach((story) => {
      expect(nonEmptyString(story.brand)).toBe(true);
      expect(nonEmptyString(story.body)).toBe(true);
    });
  });

  it("finalCta has a title and cta", () => {
    expect(nonEmptyString(finalCta.title)).toBe(true);
    expect(nonEmptyString(finalCta.cta)).toBe(true);
  });

  it("footerColumns have a heading and non-empty links", () => {
    expect(footerColumns.length).toBeGreaterThan(0);
    footerColumns.forEach((col) => {
      expect(nonEmptyString(col.heading)).toBe(true);
      expect(col.links.length).toBeGreaterThan(0);
      col.links.forEach((link) => {
        // Footer link entries are either bare label strings or {label, href}.
        const label = typeof link === "string" ? link : link.label;
        expect(nonEmptyString(label)).toBe(true);
      });
    });
  });

  it("footerLegal entries are non-empty", () => {
    expect(footerLegal.length).toBeGreaterThan(0);
    footerLegal.forEach((entry) => {
      const label = typeof entry === "string" ? entry : entry.label;
      expect(nonEmptyString(label)).toBe(true);
    });
  });
});

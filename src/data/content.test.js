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

describe("content.js exports", () => {
  describe("announcement", () => {
    it("has tag, text, and href", () => {
      expect(announcement).toHaveProperty("tag");
      expect(announcement).toHaveProperty("text");
      expect(announcement).toHaveProperty("href");
      expect(typeof announcement.tag).toBe("string");
      expect(typeof announcement.text).toBe("string");
      expect(typeof announcement.href).toBe("string");
    });
  });

  describe("navLinks", () => {
    it("is a non-empty array of links with label and href", () => {
      expect(Array.isArray(navLinks)).toBe(true);
      expect(navLinks.length).toBeGreaterThan(0);
      navLinks.forEach((link) => {
        expect(link).toHaveProperty("label");
        expect(link).toHaveProperty("href");
        expect(typeof link.label).toBe("string");
        expect(typeof link.href).toBe("string");
      });
    });
  });

  describe("hero", () => {
    it("has title, subtitle, and cta", () => {
      expect(hero).toHaveProperty("title");
      expect(hero).toHaveProperty("subtitle");
      expect(hero).toHaveProperty("cta");
      expect(typeof hero.title).toBe("string");
      expect(typeof hero.subtitle).toBe("string");
      expect(typeof hero.cta).toBe("string");
    });
  });

  describe("valueProps", () => {
    it("has lead, trail, and a non-empty items array", () => {
      expect(typeof valueProps.lead).toBe("string");
      expect(typeof valueProps.trail).toBe("string");
      expect(valueProps.items.length).toBeGreaterThan(0);
    });

    it("each item has title and body", () => {
      valueProps.items.forEach((item) => {
        expect(typeof item.title).toBe("string");
        expect(typeof item.body).toBe("string");
      });
    });
  });

  describe("moneyMovement", () => {
    it("has lead, trail, and a non-empty cards array", () => {
      expect(typeof moneyMovement.lead).toBe("string");
      expect(typeof moneyMovement.trail).toBe("string");
      expect(moneyMovement.cards.length).toBeGreaterThan(0);
    });

    it("each card has eyebrow, title, body, cta, and theme", () => {
      moneyMovement.cards.forEach((card) => {
        expect(typeof card.eyebrow).toBe("string");
        expect(typeof card.title).toBe("string");
        expect(typeof card.body).toBe("string");
        expect(typeof card.cta).toBe("string");
        expect(typeof card.theme).toBe("string");
      });
    });
  });

  describe("industries", () => {
    it("has lead, trail, and a non-empty items array", () => {
      expect(typeof industries.lead).toBe("string");
      expect(typeof industries.trail).toBe("string");
      expect(industries.items.length).toBeGreaterThan(0);
    });

    it("each item has title, body, and image key", () => {
      industries.items.forEach((item) => {
        expect(typeof item.title).toBe("string");
        expect(typeof item.body).toBe("string");
        expect(typeof item.image).toBe("string");
      });
    });
  });

  describe("stats", () => {
    it("has lead, trail, and a non-empty items array", () => {
      expect(typeof stats.lead).toBe("string");
      expect(typeof stats.trail).toBe("string");
      expect(stats.items.length).toBeGreaterThan(0);
    });

    it("each item has value and label", () => {
      stats.items.forEach((item) => {
        expect(typeof item.value).toBe("string");
        expect(typeof item.label).toBe("string");
      });
    });
  });

  describe("caseStudies", () => {
    it("has lead and a non-empty stories array", () => {
      expect(typeof caseStudies.lead).toBe("string");
      expect(caseStudies.stories.length).toBeGreaterThan(0);
    });

    it("each story has brand and body", () => {
      caseStudies.stories.forEach((story) => {
        expect(typeof story.brand).toBe("string");
        expect(typeof story.body).toBe("string");
      });
    });
  });

  describe("finalCta", () => {
    it("has title and cta", () => {
      expect(typeof finalCta.title).toBe("string");
      expect(typeof finalCta.cta).toBe("string");
    });
  });

  describe("footerColumns", () => {
    it("is a non-empty array of columns with heading and links", () => {
      expect(footerColumns.length).toBeGreaterThan(0);
      footerColumns.forEach((col) => {
        expect(typeof col.heading).toBe("string");
        expect(Array.isArray(col.links)).toBe(true);
        expect(col.links.length).toBeGreaterThan(0);
        col.links.forEach((link) => {
          expect(typeof link).toBe("string");
        });
      });
    });
  });

  describe("footerLegal", () => {
    it("is a non-empty array of strings", () => {
      expect(footerLegal.length).toBeGreaterThan(0);
      footerLegal.forEach((item) => {
        expect(typeof item).toBe("string");
      });
    });
  });
});

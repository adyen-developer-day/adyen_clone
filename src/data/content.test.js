import { describe, it, expect } from "vitest";
import {
  announcement,
  navLinks,
  footerColumns,
  footerLegal,
} from "./content.js";

// Section ids that actually exist in the rendered app (see the `id=...`
// attributes on each <section>). Every in-page link must resolve to one of
// these so navigation never lands on a missing anchor.
const SECTION_IDS = [
  "#top",
  "#products",
  "#industries",
  "#about",
  "#resources",
  "#contact",
];

const isNonEmptyString = (v) => typeof v === "string" && v.trim().length > 0;

describe("content.js", () => {
  it("exposes a valid announcement linking to a real section", () => {
    expect(isNonEmptyString(announcement.tag)).toBe(true);
    expect(isNonEmptyString(announcement.text)).toBe(true);
    expect(SECTION_IDS).toContain(announcement.href);
  });

  it("defines nav links that each resolve to a real section", () => {
    expect(navLinks.length).toBeGreaterThan(0);
    for (const link of navLinks) {
      expect(isNonEmptyString(link.label)).toBe(true);
      expect(SECTION_IDS).toContain(link.href);
    }
  });

  it("has unique nav link labels", () => {
    const labels = navLinks.map((l) => l.label);
    expect(new Set(labels).size).toBe(labels.length);
  });

  it("defines footer columns whose links resolve to real sections", () => {
    expect(footerColumns.length).toBeGreaterThan(0);
    for (const col of footerColumns) {
      expect(isNonEmptyString(col.heading)).toBe(true);
      expect(Array.isArray(col.links)).toBe(true);
      expect(col.links.length).toBeGreaterThan(0);
      for (const link of col.links) {
        expect(isNonEmptyString(link.label)).toBe(true);
        expect(SECTION_IDS).toContain(link.href);
      }
    }
  });

  it("defines footer legal links that resolve to real sections", () => {
    expect(footerLegal.length).toBeGreaterThan(0);
    for (const item of footerLegal) {
      expect(isNonEmptyString(item.label)).toBe(true);
      expect(SECTION_IDS).toContain(item.href);
    }
  });

  it("has no leftover placeholder or removed anchors", () => {
    const allHrefs = [
      announcement.href,
      ...navLinks.map((l) => l.href),
      ...footerColumns.flatMap((c) => c.links.map((l) => l.href)),
      ...footerLegal.map((l) => l.href),
    ];
    for (const href of allHrefs) {
      expect(href).not.toBe("#");
      expect(href).not.toBe("#pricing");
      expect(href).not.toBe("#fraud-report");
    }
  });
});

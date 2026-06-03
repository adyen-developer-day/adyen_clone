import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";
import { navLinks } from "./data/content.js";

describe("App accessibility & navigation", () => {
  it("gives every image-role element an accessible name", () => {
    render(<App />);
    // Covers <img> and any element with explicit role="img" (e.g. AdyenLogo).
    for (const img of screen.getAllByRole("img")) {
      const name =
        img.getAttribute("alt") ?? img.getAttribute("aria-label") ?? "";
      expect(name.trim().length).toBeGreaterThan(0);
    }
  });

  it("labels or hides every inline <svg>", () => {
    // <svg> without role="img" has no implicit role, so getAllByRole("img")
    // doesn't catch it. Walk the DOM explicitly and require either a label
    // or a presentational opt-out.
    const { container } = render(<App />);
    for (const svg of container.querySelectorAll("svg")) {
      const label =
        svg.getAttribute("aria-label") ?? svg.getAttribute("aria-labelledby");
      const hidden =
        svg.getAttribute("aria-hidden") === "true" ||
        svg.getAttribute("role") === "presentation" ||
        svg.getAttribute("role") === "none";
      expect(
        Boolean((label && label.trim().length > 0) || hidden)
      ).toBe(true);
    }
  });

  it("has no placeholder '#' dead-end links", () => {
    const { container } = render(<App />);
    for (const link of container.querySelectorAll("a")) {
      expect(link.getAttribute("href")).not.toBe("#");
    }
  });

  it("points every navbar link to a section id that exists on the page", () => {
    const { container } = render(<App />);
    for (const link of navLinks) {
      const id = link.href.replace(/^#/, "");
      expect(
        container.querySelector(`[id="${CSS.escape(id)}"]`)
      ).not.toBeNull();
    }
  });
});

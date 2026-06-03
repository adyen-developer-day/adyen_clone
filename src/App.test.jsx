import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";
import { navLinks } from "./data/content.js";

describe("App accessibility & navigation", () => {
  it("gives every image alt text", () => {
    render(<App />);
    for (const img of screen.getAllByRole("img")) {
      // role="img" elements (incl. inline SVGs) must have an accessible name.
      const name =
        img.getAttribute("alt") ?? img.getAttribute("aria-label") ?? "";
      expect(name.trim().length).toBeGreaterThan(0);
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
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  });
});

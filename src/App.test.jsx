import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";
import { navLinks } from "./data/content.js";

describe("App (integration)", () => {
  it("gives every rendered image alt text", () => {
    const { container } = render(<App />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });

  it("points every navbar link at a section that exists on the page", () => {
    const { container } = render(<App />);
    for (const link of navLinks) {
      expect(link.href.startsWith("#")).toBe(true);
      const id = link.href.slice(1);
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  });

  it("has no placeholder href=\"#\" anchors anywhere", () => {
    const { container } = render(<App />);
    const deadLinks = Array.from(container.querySelectorAll("a")).filter(
      (a) => a.getAttribute("href") === "#"
    );
    expect(deadLinks).toHaveLength(0);
  });

  it("renders the primary site landmarks", () => {
    render(<App />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});

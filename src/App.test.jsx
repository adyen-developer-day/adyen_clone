import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";
import { industries } from "./data/content.js";

describe("App accessibility", () => {
  it("renders an alt text for every image on the page", () => {
    const { container } = render(<App />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
    for (const img of images) {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")?.trim()).not.toBe("");
    }
  });

  it("gives every element with an img role an accessible name", () => {
    render(<App />);
    // Includes the industry <img> tags plus the AdyenLogo SVGs (role="img").
    const imgRoles = screen.getAllByRole("img");
    expect(imgRoles.length).toBeGreaterThanOrEqual(industries.items.length);
    for (const el of imgRoles) {
      const name =
        el.getAttribute("alt") ?? el.getAttribute("aria-label") ?? "";
      expect(name.trim()).not.toBe("");
    }
  });
});

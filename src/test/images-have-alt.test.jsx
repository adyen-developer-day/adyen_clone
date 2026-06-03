import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App.jsx";

// Accessibility guard: every <img> rendered anywhere in the app must carry
// non-empty alt text. This covers the industry icons and catches regressions
// if new images are added without a description.
describe("image accessibility", () => {
  it("gives every rendered <img> non-empty alt text", () => {
    const { container } = render(<App />);
    const images = [...container.querySelectorAll("img")];
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")?.trim()).toBeTruthy();
    });
  });
});

import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App.jsx";

describe("Image accessibility", () => {
  it("all rendered images have non-empty alt text", () => {
    const { container } = render(<App />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt").trim()).not.toBe("");
    });
  });
});

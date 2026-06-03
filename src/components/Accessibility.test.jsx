import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App.jsx";

describe("Accessibility", () => {
  it("every rendered image has non-empty alt text", () => {
    const { container } = render(<App />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

import { render } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import App from "./App.jsx";

afterEach(() => {
  cleanup();
});

describe("App accessibility", () => {
  it("renders every image with a non-empty alt attribute", () => {
    const { container } = render(<App />);
    const images = [...container.querySelectorAll("img")];

    // There should be images to check (industry icons).
    expect(images.length).toBeGreaterThan(0);

    for (const img of images) {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")?.trim().length ?? 0).toBeGreaterThan(0);
    }
  });
});

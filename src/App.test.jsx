import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";

describe("App accessibility", () => {
  it("gives every rendered image a non-empty alt attribute", () => {
    const { container } = render(<App />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });

  it("points every in-page anchor at an existing section id", () => {
    const { container } = render(<App />);
    const ids = new Set(
      [...container.querySelectorAll("[id]")].map((el) => el.id)
    );
    const anchors = [...container.querySelectorAll('a[href^="#"]')];
    expect(anchors.length).toBeGreaterThan(0);
    anchors.forEach((a) => {
      const href = a.getAttribute("href");
      expect(href).not.toBe("#");
      expect(ids.has(href.slice(1))).toBe(true);
    });
  });

  it("renders the hero and footer landmarks", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});

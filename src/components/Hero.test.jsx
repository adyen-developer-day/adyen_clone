import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

describe("Hero", () => {
  it("renders the title, subtitle, and CTA from content", () => {
    render(<Hero />);
    expect(screen.getByText(hero.title)).toBeInTheDocument();
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
    expect(screen.getByText(hero.cta)).toBeInTheDocument();
  });

  it("has no images without alt text", () => {
    const { container } = render(<Hero />);
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });
});

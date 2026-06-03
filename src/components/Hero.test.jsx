import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

describe("Hero", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      hero.title,
    );
  });

  it("renders the subtitle copy", () => {
    render(<Hero />);
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
  });

  it("renders the call-to-action link", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: hero.cta });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", "#contact");
  });

  it("has no images without alt text", () => {
    render(<Hero />);
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

describe("Hero", () => {
  it("renders without crashing", () => {
    render(<Hero />);
  });

  it("renders the title from content.js", () => {
    render(<Hero />);
    expect(screen.getByText(hero.title)).toBeInTheDocument();
  });

  it("renders the subtitle from content.js", () => {
    render(<Hero />);
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
  });

  it("renders the CTA text from content.js", () => {
    render(<Hero />);
    expect(screen.getByText(hero.cta)).toBeInTheDocument();
  });

  it("renders the CTA as a link", () => {
    render(<Hero />);
    const link = screen.getByText(hero.cta);
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "#contact");
  });
});

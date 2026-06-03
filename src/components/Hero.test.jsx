import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

describe("Hero", () => {
  it("renders the title as a level-1 heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: hero.title })
    ).toBeInTheDocument();
  });

  it("renders the subtitle copy", () => {
    render(<Hero />);
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
  });

  it("renders the CTA linking to the contact section", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: hero.cta });
    expect(cta).toHaveAttribute("href", "#contact");
  });
});

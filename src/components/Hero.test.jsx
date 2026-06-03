import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

describe("Hero", () => {
  it("renders the hero title", () => {
    render(<Hero />);
    expect(screen.getByText(hero.title)).toBeInTheDocument();
  });

  it("renders the hero subtitle", () => {
    render(<Hero />);
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
  });

  it("renders the CTA button with correct text and href", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: hero.cta });
    expect(cta).toHaveAttribute("href", "#contact");
  });
});

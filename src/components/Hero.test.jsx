import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

describe("Hero", () => {
  it("renders without crashing", () => {
    render(<Hero />);
  });

  it("displays the hero title from content data", () => {
    render(<Hero />);
    expect(screen.getByText(hero.title)).toBeInTheDocument();
  });

  it("displays the hero subtitle from content data", () => {
    render(<Hero />);
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
  });

  it("renders the call-to-action link with correct text", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: hero.cta });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", "#contact");
  });
});

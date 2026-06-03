import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

describe("Hero", () => {
  it("renders the hero title from content data", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      hero.title,
    );
  });

  it("renders the hero subtitle", () => {
    render(<Hero />);
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
  });

  it("renders the call-to-action button with correct text and link", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: hero.cta });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", "#contact");
  });

  it("wraps content in a landmark section", () => {
    const { container } = render(<Hero />);
    const section = container.querySelector("section.hero");
    expect(section).toBeInTheDocument();
  });
});

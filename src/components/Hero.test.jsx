import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

describe("Hero", () => {
  it("renders the hero title, subtitle, and cta from content", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: hero.title })
    ).toBeInTheDocument();
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: hero.cta });
    expect(cta).toHaveAttribute("href", "#contact");
  });
});

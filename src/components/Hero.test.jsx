import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

describe("Hero", () => {
  it("renders the title, subtitle and call to action", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: hero.title })
    ).toBeInTheDocument();
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: hero.cta });
    expect(cta).toHaveAttribute("href", "#contact");
  });
});

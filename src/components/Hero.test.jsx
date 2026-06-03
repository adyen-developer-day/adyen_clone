import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

describe("Hero", () => {
  it("renders the title and subtitle", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: hero.title })
    ).toBeInTheDocument();
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
  });

  it("renders the CTA linking to #contact", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: hero.cta })).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});

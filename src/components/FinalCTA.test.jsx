import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the title from content data", () => {
    render(<FinalCTA />);
    expect(
      screen.getByRole("heading", { name: finalCta.title }),
    ).toBeInTheDocument();
  });

  it("renders the CTA link with correct text and href", () => {
    render(<FinalCTA />);
    const link = screen.getByRole("link", { name: finalCta.cta });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#contact");
  });

  it("wraps content in a section with the finalcta class", () => {
    const { container } = render(<FinalCTA />);
    const section = container.querySelector("section.finalcta");
    expect(section).toBeInTheDocument();
  });
});

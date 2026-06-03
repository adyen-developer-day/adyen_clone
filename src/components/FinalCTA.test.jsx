import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the title as a heading", () => {
    render(<FinalCTA />);
    expect(
      screen.getByRole("heading", { level: 2, name: finalCta.title })
    ).toBeInTheDocument();
  });

  it("renders the CTA linking to the contact section", () => {
    render(<FinalCTA />);
    const cta = screen.getByRole("link", { name: finalCta.cta });
    expect(cta).toHaveAttribute("href", "#contact");
  });
});

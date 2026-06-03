import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the title", () => {
    render(<FinalCTA />);
    expect(screen.getByText(finalCta.title)).toBeInTheDocument();
  });

  it("renders the CTA link with correct text and href", () => {
    render(<FinalCTA />);
    const link = screen.getByRole("link", { name: finalCta.cta });
    expect(link).toHaveAttribute("href", "#contact");
  });
});

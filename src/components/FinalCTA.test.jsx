import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the CTA title", () => {
    render(<FinalCTA />);
    expect(screen.getByText(finalCta.title)).toBeInTheDocument();
  });

  it("renders the contact button linking to #contact", () => {
    render(<FinalCTA />);
    const link = screen.getByText(finalCta.cta);
    expect(link.closest("a")).toHaveAttribute("href", "#contact");
  });
});

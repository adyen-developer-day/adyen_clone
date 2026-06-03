import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the closing title from content", () => {
    render(<FinalCTA />);
    expect(
      screen.getByRole("heading", { name: finalCta.title })
    ).toBeInTheDocument();
  });

  it("renders the call-to-action link pointing at the contact anchor", () => {
    render(<FinalCTA />);
    const cta = screen.getByRole("link", { name: finalCta.cta });
    expect(cta).toHaveAttribute("href", "#contact");
  });
});

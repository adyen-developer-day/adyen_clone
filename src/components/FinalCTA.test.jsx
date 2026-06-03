import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the title and the contact call to action", () => {
    render(<FinalCTA />);
    expect(
      screen.getByRole("heading", { name: finalCta.title })
    ).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: finalCta.cta });
    expect(cta).toHaveAttribute("href", "#contact");
  });
});

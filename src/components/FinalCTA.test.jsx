import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the title", () => {
    render(<FinalCTA />);
    expect(
      screen.getByRole("heading", { level: 2, name: finalCta.title })
    ).toBeInTheDocument();
  });

  it("renders the CTA linking to #contact", () => {
    render(<FinalCTA />);
    expect(screen.getByRole("link", { name: finalCta.cta })).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});

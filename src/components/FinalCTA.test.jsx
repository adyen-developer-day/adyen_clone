import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the title and CTA from content", () => {
    render(<FinalCTA />);
    expect(
      screen.getByRole("heading", { name: finalCta.title })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: finalCta.cta })).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});

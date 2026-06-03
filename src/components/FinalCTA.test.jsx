import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the title from content", () => {
    render(<FinalCTA />);
    expect(screen.getByText(finalCta.title)).toBeInTheDocument();
  });

  it("renders the call-to-action link from content", () => {
    render(<FinalCTA />);
    expect(
      screen.getByRole("link", { name: finalCta.cta })
    ).toBeInTheDocument();
  });
});

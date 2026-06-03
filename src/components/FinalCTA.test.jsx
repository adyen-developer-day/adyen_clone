import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the final CTA title from content data", () => {
    render(<FinalCTA />);
    expect(screen.getByText(finalCta.title)).toBeInTheDocument();
  });

  it("renders the contact CTA button", () => {
    render(<FinalCTA />);
    expect(screen.getByText(finalCta.cta)).toBeInTheDocument();
  });
});

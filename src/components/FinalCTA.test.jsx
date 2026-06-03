import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the title and CTA from content", () => {
    render(<FinalCTA />);
    expect(screen.getByText(finalCta.title)).toBeInTheDocument();
    expect(screen.getByText(finalCta.cta)).toBeInTheDocument();
  });

  it("has no images without alt text", () => {
    const { container } = render(<FinalCTA />);
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });
});

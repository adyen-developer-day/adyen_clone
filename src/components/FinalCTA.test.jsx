import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FinalCTA from "./FinalCTA.jsx";
import { finalCta } from "../data/content.js";

describe("FinalCTA", () => {
  it("renders the heading", () => {
    render(<FinalCTA />);
    expect(
      screen.getByRole("heading", { name: finalCta.title }),
    ).toBeInTheDocument();
  });

  it("renders the call-to-action link", () => {
    render(<FinalCTA />);
    const cta = screen.getByRole("link", { name: finalCta.cta });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", "#contact");
  });

  it("has no images without alt text", () => {
    render(<FinalCTA />);
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Stats from "./Stats.jsx";
import { stats } from "../data/content.js";

describe("Stats", () => {
  it("renders the lead and trail headline text", () => {
    render(<Stats />);
    expect(screen.getByText(stats.lead)).toBeInTheDocument();
    expect(screen.getByText(stats.trail)).toBeInTheDocument();
  });

  it("renders every stat value and label", () => {
    render(<Stats />);
    stats.items.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it("renders stats in a description list", () => {
    render(<Stats />);
    const terms = screen.getAllByRole("term");
    const definitions = screen.getAllByRole("definition");
    expect(terms).toHaveLength(stats.items.length);
    expect(definitions).toHaveLength(stats.items.length);
  });

  it("has no images without alt text", () => {
    render(<Stats />);
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

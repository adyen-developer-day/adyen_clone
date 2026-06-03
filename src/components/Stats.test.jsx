import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Stats from "./Stats.jsx";
import { stats } from "../data/content.js";

describe("Stats", () => {
  it("renders the lead statement", () => {
    render(<Stats />);
    expect(screen.getByText(stats.lead)).toBeInTheDocument();
  });

  it("renders the trail statement", () => {
    render(<Stats />);
    expect(screen.getByText(stats.trail)).toBeInTheDocument();
  });

  it("renders every stat value and label", () => {
    render(<Stats />);
    stats.items.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it("has no images without alt text", () => {
    const { container } = render(<Stats />);
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });
});

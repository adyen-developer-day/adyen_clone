import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Stats from "./Stats.jsx";
import { stats } from "../data/content.js";

describe("Stats", () => {
  it("renders the lead and trail text from content data", () => {
    render(<Stats />);
    expect(screen.getByText(stats.lead)).toBeInTheDocument();
    expect(screen.getByText(stats.trail)).toBeInTheDocument();
  });

  it("renders all stat values and labels from content data", () => {
    render(<Stats />);
    stats.items.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it("uses a description list for semantic stat markup", () => {
    const { container } = render(<Stats />);
    expect(container.querySelector("dl")).toBeInTheDocument();
    const terms = container.querySelectorAll("dt");
    const definitions = container.querySelectorAll("dd");
    expect(terms).toHaveLength(stats.items.length);
    expect(definitions).toHaveLength(stats.items.length);
  });
});

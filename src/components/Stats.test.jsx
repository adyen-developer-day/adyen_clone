import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Stats from "./Stats.jsx";
import { stats } from "../data/content.js";

describe("Stats", () => {
  it("renders lead and trail text", () => {
    render(<Stats />);
    expect(screen.getByText(stats.lead)).toBeInTheDocument();
    expect(screen.getByText(stats.trail)).toBeInTheDocument();
  });

  it("renders all stat values and labels", () => {
    render(<Stats />);
    stats.items.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it("uses a definition list for stats", () => {
    const { container } = render(<Stats />);
    expect(container.querySelector("dl")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Stats from "./Stats.jsx";
import { stats } from "../data/content.js";

describe("Stats", () => {
  it("renders the statement copy", () => {
    render(<Stats />);
    expect(screen.getByText(stats.lead)).toBeInTheDocument();
    expect(screen.getByText(stats.trail)).toBeInTheDocument();
  });

  it("renders every stat value and label", () => {
    render(<Stats />);
    for (const item of stats.items) {
      expect(screen.getByText(item.value)).toBeInTheDocument();
      expect(screen.getByText(item.label)).toBeInTheDocument();
    }
  });
});

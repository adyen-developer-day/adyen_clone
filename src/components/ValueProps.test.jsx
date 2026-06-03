import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ValueProps from "./ValueProps.jsx";
import { valueProps } from "../data/content.js";

describe("ValueProps", () => {
  it("renders without crashing", () => {
    render(<ValueProps />);
  });

  it("displays the section lead and trail from content data", () => {
    render(<ValueProps />);
    expect(screen.getByText(valueProps.lead)).toBeInTheDocument();
    expect(screen.getByText(valueProps.trail)).toBeInTheDocument();
  });

  it("renders all value prop items", () => {
    render(<ValueProps />);
    valueProps.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("displays zero-padded index numbers for each item", () => {
    render(<ValueProps />);
    valueProps.items.forEach((_, i) => {
      const index = String(i + 1).padStart(2, "0");
      expect(screen.getByText(index)).toBeInTheDocument();
    });
  });

  it("renders items as list items", () => {
    render(<ValueProps />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(valueProps.items.length);
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ValueProps from "./ValueProps.jsx";
import { valueProps } from "../data/content.js";

describe("ValueProps", () => {
  it("renders the section statement lead and trail", () => {
    render(<ValueProps />);
    expect(screen.getByText(valueProps.lead)).toBeInTheDocument();
    expect(screen.getByText(valueProps.trail)).toBeInTheDocument();
  });

  it("renders all value proposition items from content data", () => {
    render(<ValueProps />);
    valueProps.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("displays zero-padded index numbers for each item", () => {
    render(<ValueProps />);
    valueProps.items.forEach((_, i) => {
      const padded = String(i + 1).padStart(2, "0");
      expect(screen.getByText(padded)).toBeInTheDocument();
    });
  });

  it("renders items inside a list for accessibility", () => {
    render(<ValueProps />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(valueProps.items.length);
  });
});

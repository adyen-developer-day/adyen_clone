import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ValueProps from "./ValueProps.jsx";
import { valueProps } from "../data/content.js";

describe("ValueProps", () => {
  it("renders the section statement from content", () => {
    render(<ValueProps />);
    expect(screen.getByText(valueProps.lead)).toBeInTheDocument();
    expect(screen.getByText(valueProps.trail)).toBeInTheDocument();
  });

  it("renders every value prop title and body from content", () => {
    render(<ValueProps />);
    for (const item of valueProps.items) {
      expect(
        screen.getByRole("heading", { name: item.title })
      ).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    }
  });

  it("renders a zero-padded index for each value prop", () => {
    render(<ValueProps />);
    valueProps.items.forEach((_, i) => {
      const index = String(i + 1).padStart(2, "0");
      expect(screen.getByText(index)).toBeInTheDocument();
    });
  });
});

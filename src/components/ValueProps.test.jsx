import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ValueProps from "./ValueProps.jsx";
import { valueProps } from "../data/content.js";

describe("ValueProps", () => {
  it("renders the lead and trail statement", () => {
    render(<ValueProps />);
    expect(screen.getByText(valueProps.lead)).toBeInTheDocument();
    expect(screen.getByText(valueProps.trail)).toBeInTheDocument();
  });

  it("renders every value prop title and body from content data", () => {
    render(<ValueProps />);
    valueProps.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders the zero-padded index for each item", () => {
    render(<ValueProps />);
    valueProps.items.forEach((_, i) => {
      expect(
        screen.getByText(String(i + 1).padStart(2, "0")),
      ).toBeInTheDocument();
    });
  });
});

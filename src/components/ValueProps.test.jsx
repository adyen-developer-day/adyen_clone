import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ValueProps from "./ValueProps.jsx";
import { valueProps } from "../data/content.js";

describe("ValueProps", () => {
  it("renders the statement and every value prop", () => {
    render(<ValueProps />);
    expect(screen.getByText(valueProps.lead)).toBeInTheDocument();
    expect(screen.getByText(valueProps.trail)).toBeInTheDocument();
    valueProps.items.forEach((item) => {
      expect(
        screen.getByRole("heading", { name: item.title })
      ).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders a zero-padded index for each item", () => {
    render(<ValueProps />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(
      screen.getByText(String(valueProps.items.length).padStart(2, "0"))
    ).toBeInTheDocument();
  });
});

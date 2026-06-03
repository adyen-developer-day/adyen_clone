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

  it("renders every value prop title and body", () => {
    render(<ValueProps />);
    valueProps.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders zero-padded 1-based index labels", () => {
    render(<ValueProps />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(
      screen.getByText(String(valueProps.items.length).padStart(2, "0"))
    ).toBeInTheDocument();
  });
});

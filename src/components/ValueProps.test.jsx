import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ValueProps from "./ValueProps.jsx";
import { valueProps } from "../data/content.js";

describe("ValueProps", () => {
  it("renders the section statement", () => {
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

  it("renders zero-padded index numbers", () => {
    render(<ValueProps />);
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(
      screen.getByText(String(valueProps.items.length).padStart(2, "0")),
    ).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the section statement from content", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
  });

  it("renders every industry title and body", () => {
    render(<Industries />);
    for (const item of industries.items) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    }
  });

  it("renders one image per industry, each with descriptive alt text", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(industries.items.length);
    for (const item of industries.items) {
      expect(
        screen.getByRole("img", { name: `${item.title} industry illustration` })
      ).toBeInTheDocument();
    }
  });
});

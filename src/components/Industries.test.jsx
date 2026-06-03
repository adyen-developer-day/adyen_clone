import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the lead and trail statement", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
  });

  it("renders every industry title and body from content data", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders a descriptive alt attribute on each industry image", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(
        screen.getByAltText(`${item.title} industry illustration`),
      ).toBeInTheDocument();
    });
  });
});

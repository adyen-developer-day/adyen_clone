import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the statement and every industry from content", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    for (const item of industries.items) {
      expect(
        screen.getByRole("heading", { name: item.title })
      ).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    }
  });

  it("gives every industry image descriptive alt text", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(industries.items.length);
    for (const item of industries.items) {
      expect(
        screen.getByAltText(`${item.title} industry illustration`)
      ).toBeInTheDocument();
    }
  });

  it("uses the corrected spelling 'business'", () => {
    render(<Industries />);
    expect(screen.getByText(/the way you do business/i)).toBeInTheDocument();
    expect(screen.queryByText(/buisness/i)).not.toBeInTheDocument();
  });
});

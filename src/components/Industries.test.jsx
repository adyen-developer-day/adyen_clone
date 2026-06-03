import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the corrected note copy (no typo)", () => {
    render(<Industries />);
    expect(
      screen.getByText("Built for the way you do business.")
    ).toBeInTheDocument();
    expect(screen.queryByText(/buisness/i)).not.toBeInTheDocument();
  });

  it("renders every industry card with title and body", () => {
    render(<Industries />);
    for (const item of industries.items) {
      expect(
        screen.getByRole("heading", { name: item.title })
      ).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    }
  });

  it("gives every industry image descriptive alt text", () => {
    const { container } = render(<Industries />);
    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(industries.items.length);
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
    industries.items.forEach((item) => {
      expect(
        screen.getByAltText(`${item.title} industry illustration`)
      ).toBeInTheDocument();
    });
  });
});

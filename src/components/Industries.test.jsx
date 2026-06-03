import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the section statement and intro note from content.js", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
    expect(screen.getByText(/Built for the way you do/i)).toBeInTheDocument();
  });

  it("renders every industry item with title and body", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(
        screen.getByRole("heading", { name: item.title })
      ).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("gives every industry icon descriptive alt text", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(industries.items.length);
    industries.items.forEach((item) => {
      expect(
        screen.getByAltText(`${item.title} industry icon`)
      ).toBeInTheDocument();
    });
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });
});

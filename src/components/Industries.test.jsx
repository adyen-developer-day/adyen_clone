import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders every industry with its title and body", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(
        screen.getByRole("heading", { level: 3, name: item.title })
      ).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("gives every image descriptive alt text", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(industries.items.length);
    industries.items.forEach((item) => {
      const img = screen.getByAltText(`${item.title} illustration`);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src");
    });
  });

  it("leaves no image without an alt attribute", () => {
    const { container } = render(<Industries />);
    container.querySelectorAll("img").forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders a card for every industry with its title and body", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(
        screen.getByRole("heading", { name: item.title })
      ).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("gives each industry icon a descriptive alt matching its title", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      const img = screen.getByAltText(item.title);
      expect(img.tagName).toBe("IMG");
      expect(img).toHaveAttribute("src");
    });
  });

  it("renders one image per industry, all with a non-empty alt", () => {
    const { container } = render(<Industries />);
    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(industries.items.length);
    images.forEach((img) => {
      expect(img.getAttribute("alt")?.trim()).not.toBe("");
    });
  });
});

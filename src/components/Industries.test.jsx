import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders without crashing", () => {
    render(<Industries />);
  });

  it("renders the lead and trail from content.js", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
  });

  it("renders every industry item title and body", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders an image for each industry item with a non-empty alt", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(industries.items.length);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });

  it("sets alt text matching the item title pattern", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(
        screen.getByAltText(`${item.title} icon`)
      ).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the section statement", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
  });

  it("renders all industry cards", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders images with alt attributes for every industry", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(industries.items.length);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

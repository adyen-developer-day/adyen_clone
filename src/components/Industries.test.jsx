import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the lead statement", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
  });

  it("renders the trail statement", () => {
    render(<Industries />);
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
  });

  it("renders every industry title and body", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("has no images without alt text", () => {
    const { container } = render(<Industries />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });
});

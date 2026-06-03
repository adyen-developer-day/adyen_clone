import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the section statement lead and trail", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
  });

  it("renders all industry items with title and body", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("every industry icon image has an alt attribute", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    // Filter to industry icons (exclude the Adyen logo SVGs)
    const industryImages = images.filter((img) =>
      img.classList.contains("industry__icon")
    );
    expect(industryImages).toHaveLength(industries.items.length);
    industryImages.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });

  it("renders a 'See more' link for each industry", () => {
    render(<Industries />);
    const links = screen.getAllByText("See more");
    expect(links).toHaveLength(industries.items.length);
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders without crashing", () => {
    render(<Industries />);
  });

  it("displays the section lead and trail from content data", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
  });

  it("renders all industry items", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders each industry as an article", () => {
    render(<Industries />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(industries.items.length);
  });

  it("renders an image for each industry with non-empty alt text", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    // Filter to only industry images (exclude SVG logos etc.)
    const industryImages = images.filter((img) =>
      img.classList.contains("industry__icon"),
    );
    expect(industryImages).toHaveLength(industries.items.length);
    industryImages.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Industries from "./Industries.jsx";
import { industries } from "../data/content.js";

describe("Industries", () => {
  it("renders the lead statement", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
  });

  it("renders each industry title and body", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders an image with non-empty alt text for each industry", () => {
    render(<Industries />);
    const images = screen.getAllByRole("img");
    // The industries section should have one image per industry item
    const industryImages = images.filter((img) =>
      img.classList.contains("industry__icon")
    );
    expect(industryImages).toHaveLength(industries.items.length);
    industryImages.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

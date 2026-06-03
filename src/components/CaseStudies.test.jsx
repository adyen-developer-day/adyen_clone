import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the lead title", () => {
    render(<CaseStudies />);
    expect(screen.getByText(caseStudies.lead)).toBeInTheDocument();
  });

  it("renders every story brand and body", () => {
    render(<CaseStudies />);
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
  });

  it("has no images without alt text", () => {
    const { container } = render(<CaseStudies />);
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });
});

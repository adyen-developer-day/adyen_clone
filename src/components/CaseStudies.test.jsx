import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the section lead heading from content", () => {
    render(<CaseStudies />);
    expect(screen.getByText(caseStudies.lead)).toBeInTheDocument();
  });

  it("renders every case study's brand and body copy", () => {
    render(<CaseStudies />);
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
  });

  it("renders a read-story link for each case study", () => {
    render(<CaseStudies />);
    const links = screen.getAllByRole("link", { name: /read story/i });
    expect(links).toHaveLength(caseStudies.stories.length);
  });
});

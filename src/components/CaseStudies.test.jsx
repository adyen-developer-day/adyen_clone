import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the section title from content data", () => {
    render(<CaseStudies />);
    expect(screen.getByText(caseStudies.lead)).toBeInTheDocument();
  });

  it("renders every story brand and body from content data", () => {
    render(<CaseStudies />);
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
  });

  it("renders a story tag for each case study", () => {
    render(<CaseStudies />);
    const tags = screen.getAllByText("Story");
    expect(tags).toHaveLength(caseStudies.stories.length);
  });
});

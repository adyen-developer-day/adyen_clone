import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the lead heading from content", () => {
    render(<CaseStudies />);
    expect(screen.getByText(caseStudies.lead)).toBeInTheDocument();
  });

  it("renders every story's brand and body", () => {
    render(<CaseStudies />);
    for (const story of caseStudies.stories) {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    }
  });

  it("renders one list item per story", () => {
    render(<CaseStudies />);
    expect(screen.getAllByRole("listitem")).toHaveLength(
      caseStudies.stories.length
    );
  });
});

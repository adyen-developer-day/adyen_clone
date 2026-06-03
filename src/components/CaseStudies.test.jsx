import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the section title", () => {
    render(<CaseStudies />);
    expect(screen.getByText(caseStudies.lead)).toBeInTheDocument();
  });

  it("renders each story brand and body", () => {
    render(<CaseStudies />);
    for (const story of caseStudies.stories) {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    }
  });

  it("exposes the stories as an accessible list", () => {
    render(<CaseStudies />);
    expect(screen.getAllByRole("listitem")).toHaveLength(
      caseStudies.stories.length
    );
  });
});

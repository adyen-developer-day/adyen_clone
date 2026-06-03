import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the title and every story from content", () => {
    render(<CaseStudies />);
    expect(screen.getByText(caseStudies.lead)).toBeInTheDocument();
    for (const story of caseStudies.stories) {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    }
  });

  it("exposes the stories as a list", () => {
    render(<CaseStudies />);
    expect(screen.getAllByRole("listitem")).toHaveLength(
      caseStudies.stories.length
    );
  });
});

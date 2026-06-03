import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the lead heading from content.js", () => {
    render(<CaseStudies />);
    expect(
      screen.getByRole("heading", { name: caseStudies.lead })
    ).toBeInTheDocument();
  });

  it("renders every story brand and body as list items", () => {
    render(<CaseStudies />);
    expect(screen.getAllByRole("listitem")).toHaveLength(
      caseStudies.stories.length
    );
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
  });
});

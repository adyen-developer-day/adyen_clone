import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the lead and a story card for every case study", () => {
    render(<CaseStudies />);
    expect(
      screen.getByRole("heading", { name: caseStudies.lead })
    ).toBeInTheDocument();
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
  });

  it("exposes the stories as an accessible list", () => {
    render(<CaseStudies />);
    expect(screen.getAllByRole("listitem")).toHaveLength(
      caseStudies.stories.length
    );
  });
});

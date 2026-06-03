import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the section heading", () => {
    render(<CaseStudies />);
    expect(screen.getByText(caseStudies.lead)).toBeInTheDocument();
  });

  it("renders all story cards", () => {
    render(<CaseStudies />);
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
  });

  it("renders a list structure with role attributes", () => {
    render(<CaseStudies />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(
      caseStudies.stories.length,
    );
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders without crashing", () => {
    render(<CaseStudies />);
  });

  it("displays the section heading from content data", () => {
    render(<CaseStudies />);
    expect(
      screen.getByRole("heading", { name: caseStudies.lead }),
    ).toBeInTheDocument();
  });

  it("renders all case study stories", () => {
    render(<CaseStudies />);
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
  });

  it("renders each story as a list item", () => {
    render(<CaseStudies />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(caseStudies.stories.length);
  });

  it("renders a 'Get the tea' link for each case study", () => {
    render(<CaseStudies />);
    const links = screen.getAllByRole("link", { name: /get the tea/i });
    expect(links).toHaveLength(caseStudies.stories.length);
  });
});

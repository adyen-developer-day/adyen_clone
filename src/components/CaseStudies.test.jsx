import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the section lead heading", () => {
    render(<CaseStudies />);
    expect(
      screen.getByRole("heading", { level: 2, name: caseStudies.lead })
    ).toBeInTheDocument();
  });

  it("renders a story card for every case study", () => {
    render(<CaseStudies />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(caseStudies.stories.length);
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
  });

  it("renders a read-story link per card pointing at the resources anchor", () => {
    render(<CaseStudies />);
    const links = screen.getAllByRole("link", { name: /read story/i });
    expect(links).toHaveLength(caseStudies.stories.length);
    links.forEach((link) => expect(link).toHaveAttribute("href", "#resources"));
  });
});

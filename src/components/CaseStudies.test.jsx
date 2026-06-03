import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the section heading from content data", () => {
    render(<CaseStudies />);
    expect(
      screen.getByRole("heading", { name: caseStudies.lead }),
    ).toBeInTheDocument();
  });

  it("renders all case study stories with brand and body from content data", () => {
    render(<CaseStudies />);
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
  });

  it("renders a 'Read story' link for each case study", () => {
    render(<CaseStudies />);
    const links = screen.getAllByRole("link", { name: /read story/i });
    expect(links).toHaveLength(caseStudies.stories.length);
  });

  it("uses list roles for the story rail", () => {
    render(<CaseStudies />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(caseStudies.stories.length);
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the section lead", () => {
    render(<CaseStudies />);
    expect(
      screen.getByRole("heading", { level: 2, name: caseStudies.lead })
    ).toBeInTheDocument();
  });

  it("renders each story as a listitem linking to #resources", () => {
    render(<CaseStudies />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(caseStudies.stories.length);
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
    screen
      .getAllByRole("link", { name: /read story/i })
      .forEach((link) => expect(link).toHaveAttribute("href", "#resources"));
  });
});

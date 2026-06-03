import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CaseStudies from "./CaseStudies.jsx";
import { caseStudies } from "../data/content.js";

describe("CaseStudies", () => {
  it("renders the section heading", () => {
    render(<CaseStudies />);
    expect(
      screen.getByRole("heading", { name: caseStudies.lead }),
    ).toBeInTheDocument();
  });

  it("renders every story brand and body", () => {
    render(<CaseStudies />);
    caseStudies.stories.forEach((story) => {
      expect(screen.getByText(story.brand)).toBeInTheDocument();
      expect(screen.getByText(story.body)).toBeInTheDocument();
    });
  });

  it("renders a 'Read story' link for each case study", () => {
    render(<CaseStudies />);
    const links = screen.getAllByRole("link", { name: /Read story/i });
    expect(links).toHaveLength(caseStudies.stories.length);
  });

  it("uses a list role for the story rail", () => {
    render(<CaseStudies />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(caseStudies.stories.length);
  });

  it("has no images without alt text", () => {
    render(<CaseStudies />);
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

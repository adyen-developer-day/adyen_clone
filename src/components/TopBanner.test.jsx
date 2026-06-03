import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TopBanner from "./TopBanner.jsx";
import { announcement } from "../data/content.js";

describe("TopBanner", () => {
  it("renders the announcement tag and text from content", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.tag)).toBeInTheDocument();
    expect(screen.getByText(announcement.text)).toBeInTheDocument();
  });

  it("links to the announcement href", () => {
    const { container } = render(<TopBanner />);
    const link = container.querySelector("a.topbanner");
    expect(link).toHaveAttribute("href", announcement.href);
  });
});

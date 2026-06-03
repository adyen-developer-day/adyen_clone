import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TopBanner from "./TopBanner.jsx";
import { announcement } from "../data/content.js";

describe("TopBanner", () => {
  it("renders without crashing", () => {
    render(<TopBanner />);
  });

  it("displays the announcement tag", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.tag)).toBeInTheDocument();
  });

  it("displays the announcement text", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.text)).toBeInTheDocument();
  });

  it("links to the correct href", () => {
    render(<TopBanner />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", announcement.href);
  });
});

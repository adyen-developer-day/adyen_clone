import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TopBanner from "./TopBanner.jsx";
import { announcement } from "../data/content.js";

describe("TopBanner", () => {
  it("renders the announcement tag and text", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.tag)).toBeInTheDocument();
    expect(screen.getByText(announcement.text)).toBeInTheDocument();
  });

  it("links to the announcement href", () => {
    render(<TopBanner />);
    expect(screen.getByRole("link")).toHaveAttribute("href", announcement.href);
  });
});

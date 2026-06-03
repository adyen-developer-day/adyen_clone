import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TopBanner from "./TopBanner.jsx";
import { announcement } from "../data/content.js";

describe("TopBanner", () => {
  it("renders the announcement tag from content data", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.tag)).toBeInTheDocument();
  });

  it("renders the announcement text from content data", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.text)).toBeInTheDocument();
  });
});

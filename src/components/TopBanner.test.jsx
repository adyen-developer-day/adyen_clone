import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TopBanner from "./TopBanner.jsx";
import { announcement } from "../data/content.js";

describe("TopBanner", () => {
  it("renders the announcement tag and text in a link to the announcement href", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.tag)).toBeInTheDocument();
    const link = screen.getByRole("link", {
      name: new RegExp(announcement.text, "i"),
    });
    expect(link).toHaveAttribute("href", announcement.href);
  });
});

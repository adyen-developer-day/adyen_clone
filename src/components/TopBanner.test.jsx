import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TopBanner from "./TopBanner.jsx";
import { announcement } from "../data/content.js";

describe("TopBanner", () => {
  it("renders the announcement tag, text and link target", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.tag)).toBeInTheDocument();
    expect(screen.getByText(announcement.text)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", announcement.href);
  });
});

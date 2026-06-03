import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TopBanner from "./TopBanner.jsx";
import { announcement } from "../data/content.js";

describe("TopBanner", () => {
  it("renders the announcement tag and text from content data", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.tag)).toBeInTheDocument();
    expect(screen.getByText(announcement.text)).toBeInTheDocument();
  });

  it("links to the correct href", () => {
    render(<TopBanner />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", announcement.href);
  });

  it("contains a decorative arrow hidden from assistive technology", () => {
    const { container } = render(<TopBanner />);
    const arrow = container.querySelector("[aria-hidden='true']");
    expect(arrow).toBeInTheDocument();
  });
});

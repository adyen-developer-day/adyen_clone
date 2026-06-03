import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TopBanner from "./TopBanner.jsx";
import { announcement } from "../data/content.js";

describe("TopBanner", () => {
  it("renders the announcement tag", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.tag, { exact: false })).toBeInTheDocument();
  });

  it("renders the announcement text", () => {
    render(<TopBanner />);
    expect(screen.getByText(announcement.text)).toBeInTheDocument();
  });

  it("links to the correct href", () => {
    render(<TopBanner />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", announcement.href);
  });

  it("has no images without alt text", () => {
    render(<TopBanner />);
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders every footer column heading", () => {
    render(<Footer />);
    for (const col of footerColumns) {
      expect(
        screen.getByRole("heading", { name: col.heading })
      ).toBeInTheDocument();
    }
  });

  it("renders footer links and legal links from content", () => {
    render(<Footer />);
    for (const col of footerColumns) {
      for (const link of col.links) {
        expect(screen.getByText(link.label)).toBeInTheDocument();
      }
    }
    for (const item of footerLegal) {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    }
  });

  it("has no dead-end href=\"#\" links", () => {
    const { container } = render(<Footer />);
    const anchors = container.querySelectorAll("a");
    expect(anchors.length).toBeGreaterThan(0);
    anchors.forEach((a) => {
      const href = a.getAttribute("href");
      expect(href).toBeTruthy();
      expect(href).not.toBe("#");
      expect(href.startsWith("#")).toBe(true);
    });
  });
});

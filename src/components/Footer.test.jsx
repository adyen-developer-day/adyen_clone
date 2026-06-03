import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App.jsx";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders every column heading and its links from content", () => {
    render(<Footer />);
    for (const col of footerColumns) {
      expect(
        screen.getByRole("heading", { name: col.heading })
      ).toBeInTheDocument();
      for (const link of col.links) {
        expect(screen.getAllByText(link)).not.toHaveLength(0);
      }
    }
  });

  it("renders the legal links and copyright", () => {
    render(<Footer />);
    for (const item of footerLegal) {
      expect(screen.getByRole("link", { name: item })).toBeInTheDocument();
    }
    expect(screen.getByText(/© 2026 Adyen/)).toBeInTheDocument();
  });

  it("points every footer link to a section id that exists on the page", () => {
    // Render the full App so we can verify each footer href resolves to a
    // real section, not just that it isn't literally "#". This catches the
    // `sectionForHeading` fallback in Footer.jsx pointing to a missing id.
    const { container } = render(<App />);
    const footer = container.querySelector("footer");
    expect(footer).not.toBeNull();
    const links = [...footer.querySelectorAll("a")];
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      const href = link.getAttribute("href");
      expect(href).toBeTruthy();
      expect(href).not.toBe("#");
      const id = href.replace(/^#/, "");
      expect(
        container.querySelector(`[id="${CSS.escape(id)}"]`)
      ).not.toBeNull();
    }
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it("renders the Adyen logo", () => {
    render(<Footer />);
    expect(screen.getByRole("img", { name: /adyen/i })).toBeInTheDocument();
  });

  it("displays the newsletter subscription link", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", { name: /enlist for dispatches/i }),
    ).toBeInTheDocument();
  });

  it("renders all footer column headings from content data", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(
        screen.getByRole("heading", { name: col.heading }),
      ).toBeInTheDocument();
    });
  });

  it("renders all footer column links from content data", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      col.links.forEach((link) => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });
  });

  it("renders all legal links from content data", () => {
    render(<Footer />);
    footerLegal.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("displays the copyright notice", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Adyen/)).toBeInTheDocument();
  });

  it("displays the disclaimer text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/workshop replica for localhost demo only/i),
    ).toBeInTheDocument();
  });
});

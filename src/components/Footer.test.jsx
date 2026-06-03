import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders all footer column headings from content data", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(screen.getByText(col.heading)).toBeInTheDocument();
    });
  });

  it("renders all footer links from content data", () => {
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

  it("renders the newsletter subscription link", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", { name: /subscribe to our newsletter/i }),
    ).toBeInTheDocument();
  });

  it("renders the Adyen logo with accessible label", () => {
    render(<Footer />);
    const logo = screen.getByRole("img", { name: /adyen/i });
    expect(logo).toBeInTheDocument();
  });

  it("renders the copyright notice", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Adyen/)).toBeInTheDocument();
  });

  it("renders the disclaimer text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/workshop replica for localhost demo only/i),
    ).toBeInTheDocument();
  });

  it("uses a footer landmark element", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});

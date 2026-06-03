import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders every footer column heading from content data", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(screen.getByText(col.heading)).toBeInTheDocument();
    });
  });

  it("renders every link label from footer columns", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      col.links.forEach((link) => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });
  });

  it("renders the legal links from content data", () => {
    render(<Footer />);
    footerLegal.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders the newsletter subscribe button", () => {
    render(<Footer />);
    expect(
      screen.getByText(/subscribe to our newsletter/i),
    ).toBeInTheDocument();
  });

  it("renders the footer tagline and copyright", () => {
    render(<Footer />);
    expect(
      screen.getByText(
        "One platform for payments, data, and financial products.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/© 2026 Adyen/)).toBeInTheDocument();
  });
});

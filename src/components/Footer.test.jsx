import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders the Adyen logo", () => {
    render(<Footer />);
    expect(screen.getByTitle("Adyen")).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    render(<Footer />);
    expect(
      screen.getByText(
        "One platform for payments, data, and financial products."
      )
    ).toBeInTheDocument();
  });

  it("renders newsletter subscription link", () => {
    render(<Footer />);
    expect(
      screen.getByText("Subscribe to our newsletter")
    ).toBeInTheDocument();
  });

  it("renders all footer column headings and links", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(screen.getByText(col.heading)).toBeInTheDocument();
      col.links.forEach((link) => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });
  });

  it("renders footer legal links", () => {
    render(<Footer />);
    footerLegal.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders copyright and region", () => {
    render(<Footer />);
    expect(screen.getByText("© 2026 Adyen")).toBeInTheDocument();
    expect(screen.getByText("Global (English)")).toBeInTheDocument();
  });

  it("renders the workshop disclaimer", () => {
    render(<Footer />);
    expect(
      screen.getByText(
        "Workshop replica for localhost demo only. Not affiliated with Adyen."
      )
    ).toBeInTheDocument();
  });
});

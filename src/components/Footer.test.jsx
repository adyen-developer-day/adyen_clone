import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders all column headings", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(screen.getByText(col.heading)).toBeInTheDocument();
    });
  });

  it("renders all column links", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      col.links.forEach((link) => {
        expect(screen.getByText(link)).toBeInTheDocument();
      });
    });
  });

  it("renders legal links", () => {
    render(<Footer />);
    footerLegal.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders the Adyen logo", () => {
    render(<Footer />);
    expect(screen.getByRole("img", { name: /adyen/i })).toBeInTheDocument();
  });

  it("renders newsletter subscribe link", () => {
    render(<Footer />);
    expect(
      screen.getByText(/subscribe to our newsletter/i),
    ).toBeInTheDocument();
  });

  it("renders the disclaimer", () => {
    render(<Footer />);
    expect(screen.getByText(/workshop replica/i)).toBeInTheDocument();
  });
});

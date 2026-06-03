import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer.jsx";
import { footerColumns, footerLegal } from "../data/content.js";

describe("Footer", () => {
  it("renders all column headings", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      expect(
        screen.getByRole("heading", { name: col.heading }),
      ).toBeInTheDocument();
    });
  });

  it("renders every link in every column", () => {
    render(<Footer />);
    footerColumns.forEach((col) => {
      col.links.forEach((link) => {
        expect(screen.getByRole("link", { name: link })).toBeInTheDocument();
      });
    });
  });

  it("renders the footer tagline", () => {
    render(<Footer />);
    expect(
      screen.getByText(
        "One platform for payments, data, and financial products.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the newsletter subscribe link", () => {
    render(<Footer />);
    expect(
      screen.getByRole("link", { name: /subscribe to our newsletter/i }),
    ).toBeInTheDocument();
  });

  it("renders the legal links", () => {
    render(<Footer />);
    footerLegal.forEach((item) => {
      expect(screen.getByRole("link", { name: item })).toBeInTheDocument();
    });
  });

  it("renders the copyright notice", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Adyen/)).toBeInTheDocument();
  });

  it("renders the region label", () => {
    render(<Footer />);
    expect(screen.getByText("Global (English)")).toBeInTheDocument();
  });

  it("renders the workshop disclaimer", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Workshop replica for localhost demo only/i),
    ).toBeInTheDocument();
  });

  it("has no images without alt text", () => {
    render(<Footer />);
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

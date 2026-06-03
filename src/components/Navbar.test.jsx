import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar.jsx";
import { navLinks } from "../data/content.js";

describe("Navbar", () => {
  it("renders the contact sales call to action", () => {
    render(<Navbar />);
    expect(screen.getByText(/contact sales/i)).toBeInTheDocument();
  });

  it("renders every nav link from content.js with its href", () => {
    render(<Navbar />);
    navLinks.forEach((link) => {
      const el = screen.getByRole("link", { name: new RegExp(link.label, "i") });
      expect(el).toHaveAttribute("href", link.href);
    });
  });

  it("exposes the brand logo with an accessible name", () => {
    render(<Navbar />);
    expect(screen.getByRole("img", { name: "Adyen" })).toBeInTheDocument();
  });
});

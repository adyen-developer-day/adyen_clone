import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navbar from "./Navbar.jsx";
import { navLinks } from "../data/content.js";

describe("Navbar", () => {
  it("renders the contact sales call to action", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("link", { name: /contact sales/i })
    ).toHaveAttribute("href", "#contact");
  });

  it("renders the brand link to the top of the page", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /adyen home/i })).toHaveAttribute(
      "href",
      "#top"
    );
  });

  it("renders every nav link with its href", () => {
    render(<Navbar />);
    navLinks.forEach((link) => {
      expect(
        screen.getByRole("link", { name: new RegExp(link.label, "i") })
      ).toHaveAttribute("href", link.href);
    });
  });

  it("defaults to the light theme", () => {
    render(<Navbar />);
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(
      screen.getByRole("button", { name: /switch to dark theme/i })
    ).toHaveAttribute("aria-pressed", "false");
  });

  it("toggles to dark theme and persists the choice", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /switch to dark theme/i });
    fireEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(
      screen.getByRole("button", { name: /switch to light theme/i })
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("toggles back to light theme", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /switch to dark theme/i });
    fireEvent.click(toggle);
    fireEvent.click(
      screen.getByRole("button", { name: /switch to light theme/i })
    );

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("respects a stored theme preference", () => {
    localStorage.setItem("theme", "dark");
    render(<Navbar />);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(
      screen.getByRole("button", { name: /switch to light theme/i })
    ).toBeInTheDocument();
  });

  it("respects a theme already set on <html> (no-FOUC script)", () => {
    document.documentElement.dataset.theme = "dark";
    render(<Navbar />);
    expect(
      screen.getByRole("button", { name: /switch to light theme/i })
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("falls back to the system dark preference when nothing is stored", () => {
    const original = window.matchMedia;
    window.matchMedia = vi.fn().mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
    render(<Navbar />);
    expect(document.documentElement.dataset.theme).toBe("dark");
    window.matchMedia = original;
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Navbar from "./Navbar.jsx";
import { navLinks } from "../data/content.js";

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

describe("Navbar", () => {
  it("renders the contact sales call to action and the nav links", () => {
    render(<Navbar />);
    expect(screen.getByText(/contact sales/i)).toBeInTheDocument();
    navLinks.forEach((link) => {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute(
        "href",
        link.href
      );
    });
  });

  it("defaults to light when no theme is set and offers a switch-to-dark toggle", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /switch to dark mode/i });
    expect(toggle).toHaveAttribute("aria-pressed", "false");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("toggles to dark mode, persists the choice, and back to light", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /switch to dark mode/i });

    fireEvent.click(toggle);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    const back = screen.getByRole("button", { name: /switch to light mode/i });
    expect(back).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(back);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("initializes from an existing data-theme attribute", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    render(<Navbar />);
    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeInTheDocument();
  });

  it("still toggles when localStorage writes throw (e.g. private mode)", () => {
    const spy = vi
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {
        throw new Error("denied");
      });
    render(<Navbar />);
    fireEvent.click(screen.getByRole("button", { name: /switch to dark mode/i }));
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    spy.mockRestore();
  });
});

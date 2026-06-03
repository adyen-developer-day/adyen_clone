import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import Navbar from "./Navbar.jsx";
import { navLinks } from "../data/content.js";

// Simulate a system color-scheme preference via window.matchMedia.
function mockPrefersDark(prefersDark) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: prefersDark && query.includes("dark"),
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent: () => false,
  }));
}

describe("Navbar", () => {
  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset.theme;
    mockPrefersDark(false);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the contact sales call to action", () => {
    render(<Navbar />);
    expect(screen.getByText(/contact sales/i)).toBeInTheDocument();
  });

  it("renders every nav link from content.js", () => {
    render(<Navbar />);
    for (const link of navLinks) {
      const anchor = screen.getByRole("link", { name: link.label });
      expect(anchor).toHaveAttribute("href", link.href);
    }
  });

  it("defaults to light theme when nothing is stored and system is light", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("button", { name: /switch to dark mode/i })
    ).toBeInTheDocument();
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("toggles to dark mode, persists the choice, and renders the sun icon", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /switch to dark mode/i });

    fireEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(toggle).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeInTheDocument();
  });

  it("toggles back to light mode", () => {
    render(<Navbar />);
    const toggle = screen.getByRole("button", { name: /switch to dark mode/i });

    fireEvent.click(toggle); // -> dark
    fireEvent.click(
      screen.getByRole("button", { name: /switch to light mode/i })
    ); // -> light

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("restores a previously stored dark choice on mount", () => {
    localStorage.setItem("theme", "dark");
    render(<Navbar />);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeInTheDocument();
  });

  it("respects prefers-color-scheme: dark when no choice is stored", () => {
    mockPrefersDark(true);
    render(<Navbar />);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeInTheDocument();
  });
});

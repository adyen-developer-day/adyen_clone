import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import ThemeToggle from "./ThemeToggle.jsx";

describe("ThemeToggle", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  afterEach(() => {
    cleanup();
  });

  it("defaults to light and applies data-theme to the document", () => {
    render(<ThemeToggle />);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(
      screen.getByRole("button", { name: /switch to dark mode/i })
    ).toBeInTheDocument();
  });

  it("toggles to dark, persists the choice, and updates the label", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(window.localStorage.getItem("theme")).toBe("dark");
    expect(button).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeInTheDocument();
  });
});

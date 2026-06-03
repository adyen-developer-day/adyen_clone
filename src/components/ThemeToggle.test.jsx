import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import ThemeToggle from "./ThemeToggle.jsx";

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

describe("ThemeToggle", () => {
  it("renders a switch defaulting to light (system not dark)", () => {
    render(<ThemeToggle />);
    const toggle = screen.getByRole("switch", { name: /toggle dark mode/i });
    expect(toggle).toHaveAttribute("aria-checked", "false");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  });

  it("switches to dark, persists the choice, and updates the document", () => {
    render(<ThemeToggle />);
    const toggle = screen.getByRole("switch", { name: /toggle dark mode/i });

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-checked", "true");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("toggles back to light on a second click", () => {
    render(<ThemeToggle />);
    const toggle = screen.getByRole("switch", { name: /toggle dark mode/i });

    fireEvent.click(toggle);
    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-checked", "false");
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("initializes from a stored preference", () => {
    localStorage.setItem("theme", "dark");
    render(<ThemeToggle />);
    expect(
      screen.getByRole("switch", { name: /toggle dark mode/i })
    ).toHaveAttribute("aria-checked", "true");
  });
});

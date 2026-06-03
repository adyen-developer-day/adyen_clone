import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Navbar from "./Navbar.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const theme = () => document.documentElement.getAttribute("data-theme");

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

describe("Dark mode toggle", () => {
  it("renders a theme toggle in the navbar", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("button", { name: /switch to dark theme/i })
    ).toBeInTheDocument();
  });

  it("toggles between light and dark, applying data-theme to <html>", () => {
    render(<ThemeToggle />);
    expect(theme()).toBe("light");

    fireEvent.click(screen.getByRole("button", { name: /switch to dark theme/i }));
    expect(theme()).toBe("dark");

    fireEvent.click(screen.getByRole("button", { name: /switch to light theme/i }));
    expect(theme()).toBe("light");
  });

  it("persists the user's choice to localStorage", () => {
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole("button", { name: /switch to dark theme/i }));
    expect(window.localStorage.getItem("theme")).toBe("dark");
  });

  it("restores the previously chosen theme on a later visit", () => {
    window.localStorage.setItem("theme", "dark");
    render(<ThemeToggle />);
    expect(theme()).toBe("dark");
    // Reflects current state: offers to switch back to light.
    expect(
      screen.getByRole("button", { name: /switch to light theme/i })
    ).toBeInTheDocument();
  });
});

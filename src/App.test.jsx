import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";
import { hero, finalCta } from "./data/content.js";

describe("App", () => {
  it("renders the full page with hero and footer", () => {
    const { container } = render(<App />);
    expect(container.querySelector(".page")).toBeInTheDocument();
    expect(container.querySelector("main")).toBeInTheDocument();
    expect(screen.getByText(hero.title)).toBeInTheDocument();
    expect(screen.getByText(finalCta.title)).toBeInTheDocument();
    expect(screen.getByText(/workshop replica/i)).toBeInTheDocument();
  });
});

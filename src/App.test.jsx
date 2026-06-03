import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";
import {
  hero,
  valueProps,
  industries,
  finalCta,
} from "./data/content.js";

describe("App", () => {
  it("renders the main landmark and key section copy", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: hero.title })
    ).toBeInTheDocument();
    expect(screen.getByText(valueProps.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(finalCta.title)).toBeInTheDocument();
  });

  it("gives every <img> a non-empty alt attribute", () => {
    const { container } = render(<App />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")?.trim()).not.toBe("");
    });
  });

  it("labels the inline brand logos with an accessible name", () => {
    render(<App />);
    expect(screen.getAllByRole("img", { name: "Adyen" }).length).toBeGreaterThan(
      0
    );
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { industries } from "../data/content.js";

// Mock import.meta.glob used by Industries to resolve SVG icons.
vi.mock("../assets/industries/retail.svg?url", () => ({ default: "retail.svg" }));
vi.mock("../assets/industries/travel.svg?url", () => ({ default: "travel.svg" }));
vi.mock("../assets/industries/digital.svg?url", () => ({ default: "digital.svg" }));
vi.mock("../assets/industries/saas.svg?url", () => ({ default: "saas.svg" }));
vi.mock("../assets/industries/food.svg?url", () => ({ default: "food.svg" }));
vi.mock("../assets/industries/financial.svg?url", () => ({ default: "financial.svg" }));

// We need to mock the glob result used inside Industries.jsx
// The component uses import.meta.glob which Vitest handles via its Vite transform.
// If the SVG files exist, the test should work. If not, we mock the module.
import Industries from "./Industries.jsx";

describe("Industries", () => {
  it("renders the section statement lead and trail", () => {
    render(<Industries />);
    expect(screen.getByText(industries.lead)).toBeInTheDocument();
    expect(screen.getByText(industries.trail)).toBeInTheDocument();
  });

  it("renders the note text", () => {
    render(<Industries />);
    expect(
      screen.getByText(/Built for the way you do business/i),
    ).toBeInTheDocument();
  });

  it("renders every industry title and body", () => {
    render(<Industries />);
    industries.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    });
  });

  it("renders a 'See more' link for each industry", () => {
    render(<Industries />);
    const links = screen.getAllByRole("link", { name: /See more/i });
    expect(links).toHaveLength(industries.items.length);
  });

  it("renders an image for each industry with a non-empty alt attribute", () => {
    render(<Industries />);
    const images = document.querySelectorAll("img");
    expect(images).toHaveLength(industries.items.length);
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

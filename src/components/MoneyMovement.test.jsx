import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoneyMovement from "./MoneyMovement.jsx";
import { moneyMovement } from "../data/content.js";

describe("MoneyMovement", () => {
  it("renders the section statement lead and trail", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.lead)).toBeInTheDocument();
    expect(screen.getByText(moneyMovement.trail)).toBeInTheDocument();
  });

  it("renders every card eyebrow, title, body, and cta", () => {
    render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(screen.getByText(card.eyebrow)).toBeInTheDocument();
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(card.body)).toBeInTheDocument();
      expect(screen.getByRole("link", { name: new RegExp(card.cta) })).toBeInTheDocument();
    });
  });

  it("applies the correct theme class to each card", () => {
    const { container } = render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      const article = container.querySelector(`.bigcard--${card.theme}`);
      expect(article).not.toBeNull();
    });
  });

  it("has no images without alt text", () => {
    render(<MoneyMovement />);
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });
});

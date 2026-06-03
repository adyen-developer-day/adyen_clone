import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoneyMovement from "./MoneyMovement.jsx";
import { moneyMovement } from "../data/content.js";

describe("MoneyMovement", () => {
  it("renders without crashing", () => {
    render(<MoneyMovement />);
  });

  it("displays the section lead and trail from content data", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.lead)).toBeInTheDocument();
    expect(screen.getByText(moneyMovement.trail)).toBeInTheDocument();
  });

  it("renders all money movement cards", () => {
    render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(screen.getByText(card.eyebrow)).toBeInTheDocument();
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(card.body)).toBeInTheDocument();
    });
  });

  it("renders CTA links for each card", () => {
    render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(
        screen.getByRole("link", { name: new RegExp(card.cta) }),
      ).toBeInTheDocument();
    });
  });

  it("renders cards as articles", () => {
    render(<MoneyMovement />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(moneyMovement.cards.length);
  });
});

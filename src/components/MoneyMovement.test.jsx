import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoneyMovement from "./MoneyMovement.jsx";
import { moneyMovement } from "../data/content.js";

describe("MoneyMovement", () => {
  it("renders the section statement from content.js", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.lead)).toBeInTheDocument();
    expect(screen.getByText(moneyMovement.trail)).toBeInTheDocument();
  });

  it("renders every card with eyebrow, title, body, and CTA", () => {
    render(<MoneyMovement />);
    moneyMovement.cards.forEach((card) => {
      expect(screen.getByText(card.eyebrow)).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: card.title })
      ).toBeInTheDocument();
      expect(screen.getByText(card.body)).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: new RegExp(card.cta, "i") })
      ).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MoneyMovement from "./MoneyMovement.jsx";
import { moneyMovement } from "../data/content.js";

describe("MoneyMovement", () => {
  it("renders the statement and every card from content", () => {
    render(<MoneyMovement />);
    expect(screen.getByText(moneyMovement.lead)).toBeInTheDocument();
    expect(screen.getByText(moneyMovement.trail)).toBeInTheDocument();
    for (const card of moneyMovement.cards) {
      expect(screen.getByText(card.eyebrow)).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: card.title })
      ).toBeInTheDocument();
      expect(screen.getByText(card.body)).toBeInTheDocument();
      expect(screen.getByRole("link", { name: card.cta })).toBeInTheDocument();
    }
  });
});

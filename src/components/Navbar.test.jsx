import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar.jsx";

// Workshop note: this is the ONLY test in the project on purpose.
// The "add test coverage" task (Devin Cloud) is meant to expand from here.
describe("Navbar", () => {
  it("renders the PLAY tab", () => {
    render(<Navbar />);
    expect(screen.getByText(/play/i)).toBeInTheDocument();
  });
});

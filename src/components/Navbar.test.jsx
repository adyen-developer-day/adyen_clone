import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar.jsx";

describe("Navbar", () => {
  it("renders the order now call to action", () => {
    render(<Navbar />);
    expect(screen.getByText(/order now/i)).toBeInTheDocument();
  });
});

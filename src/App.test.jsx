import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";

// Smoke test guarding the React 18 -> 19 upgrade: rendering the full tree
// exercises createRoot/render end to end and catches breaking changes.
describe("App", () => {
  it("renders the homepage without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /fintech you can bank on/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/talk to our team/i)).toBeInTheDocument();
  });
});

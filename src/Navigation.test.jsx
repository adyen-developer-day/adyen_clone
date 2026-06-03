import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App.jsx";

// Guards against dead-end links: every in-page anchor (href="#...") must point
// to a section that actually exists on the page.
describe("In-page navigation", () => {
  it("resolves every in-page anchor to a matching section id", () => {
    const { container } = render(<App />);

    const inPageAnchors = [...container.querySelectorAll("a[href^='#']")];
    expect(inPageAnchors.length).toBeGreaterThan(0);

    const broken = inPageAnchors
      .map((a) => ({ href: a.getAttribute("href"), text: a.textContent.trim() }))
      .filter(({ href }) => {
        const id = href.slice(1);
        return id === "" || !container.querySelector(`#${CSS.escape(id)}`);
      });

    expect(broken).toEqual([]);
  });
});

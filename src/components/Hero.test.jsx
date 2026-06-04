import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import Hero from "./Hero.jsx";
import { hero } from "../data/content.js";

afterEach(() => {
  vi.useRealTimers();
});

describe("Hero", () => {
  it("renders the eyebrow, title and subtitle", () => {
    render(<Hero />);
    expect(screen.getByText(hero.eyebrow)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: hero.title })
    ).toBeInTheDocument();
    expect(screen.getByText(hero.subtitle)).toBeInTheDocument();
  });

  it("renders the primary and secondary CTAs with their hrefs", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: hero.cta })).toHaveAttribute(
      "href",
      "#contact"
    );
    expect(
      screen.getByRole("link", { name: hero.secondaryCta })
    ).toHaveAttribute("href", "#products");
  });

  it("reveals the section once observed in view", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector(".hero")).toHaveClass("hero--in");
  });

  it("stays hidden until the section intersects the viewport", () => {
    const original = global.IntersectionObserver;
    global.IntersectionObserver = class {
      constructor(cb) {
        this.cb = cb;
      }
      observe(el) {
        this.cb([{ isIntersecting: false, target: el }]);
      }
      unobserve() {}
      disconnect() {}
    };
    const { container } = render(<Hero />);
    expect(container.querySelector(".hero")).not.toHaveClass("hero--in");
    global.IntersectionObserver = original;
  });

  it("renders the dynamic payment visual with all methods", () => {
    render(<Hero />);
    hero.payments.forEach((p) => {
      expect(screen.getByText(p.method)).toBeInTheDocument();
    });
    // First method is active and its amount is shown.
    expect(screen.getByText(hero.payments[0].amount)).toBeInTheDocument();
  });

  it("cycles the active payment method over time", () => {
    vi.useFakeTimers();
    const { container } = render(<Hero />);

    const firstActive = container.querySelector(".paychip--active");
    expect(firstActive).toHaveTextContent(hero.payments[0].method);

    act(() => {
      vi.advanceTimersByTime(2400);
    });

    const nextActive = container.querySelector(".paychip--active");
    expect(nextActive).toHaveTextContent(hero.payments[1].method);
    expect(screen.getByText(hero.payments[1].amount)).toBeInTheDocument();
  });

  it("reveals immediately and does not cycle when reduced motion is preferred", () => {
    const original = window.matchMedia;
    window.matchMedia = vi.fn().mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
    vi.useFakeTimers();
    const { container } = render(<Hero />);

    expect(container.querySelector(".hero")).toHaveClass("hero--in");
    const before =
      container.querySelector(".paychip--active").textContent;

    act(() => {
      vi.advanceTimersByTime(7200);
    });

    expect(container.querySelector(".paychip--active").textContent).toBe(
      before
    );
    window.matchMedia = original;
  });
});

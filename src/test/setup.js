import "@testing-library/jest-dom";
import { vi } from "vitest";

// jsdom does not implement matchMedia; stub it so components that read the
// system color scheme (e.g. the theme toggle) can render in tests.
if (typeof window.matchMedia !== "function") {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

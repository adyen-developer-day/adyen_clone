import "@testing-library/jest-dom";
import { afterEach, vi } from "vitest";

// jsdom does not implement matchMedia; provide a default (light) stub.
if (!window.matchMedia) {
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

// Keep theme state from leaking between tests.
afterEach(() => {
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});

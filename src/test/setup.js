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

// jsdom does not implement IntersectionObserver; stub one that immediately
// reports the observed element as intersecting.
if (!global.IntersectionObserver) {
  global.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback;
    }
    observe(element) {
      this.callback([{ isIntersecting: true, target: element }]);
    }
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
}

// Keep theme state from leaking between tests.
afterEach(() => {
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});

import "@testing-library/jest-dom";

// jsdom does not implement matchMedia; components that read prefers-reduced-motion
// (e.g. the Win95 hero animations) rely on it, so provide a no-op stub.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// jsdom does not implement IntersectionObserver; the hero's scroll-triggered
// progress animation constructs one on mount.
if (!global.IntersectionObserver) {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
  window.IntersectionObserver = global.IntersectionObserver;
}

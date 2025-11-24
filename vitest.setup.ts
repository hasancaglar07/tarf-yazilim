import "@testing-library/jest-dom/vitest";

class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Vitest ortamında IntersectionObserver mock'u
(globalThis as unknown as { IntersectionObserver?: typeof IntersectionObserver }).IntersectionObserver =
  MockIntersectionObserver;

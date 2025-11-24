import "@testing-library/jest-dom/vitest";

const MockIntersectionObserver: typeof IntersectionObserver = class
  implements IntersectionObserver
{
  readonly root: Element | Document | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;
  private readonly callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback, options: IntersectionObserverInit = {}) {
    this.callback = callback;
    this.root = options.root ?? null;
    this.rootMargin = options.rootMargin ?? "0px";
    const threshold = options.threshold ?? 0;
    this.thresholds = Array.isArray(threshold) ? threshold : [threshold];
  }

  observe(): void {
    // no-op
  }
  unobserve(): void {
    // no-op
  }
  disconnect(): void {
    // no-op
  }
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  // Test helper to manually trigger callback
  trigger(entries: IntersectionObserverEntry[]): void {
    this.callback(entries, this);
  }
};

// Vitest ortamında IntersectionObserver mock'u
(globalThis as unknown as { IntersectionObserver?: typeof IntersectionObserver }).IntersectionObserver =
  MockIntersectionObserver;

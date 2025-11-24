import "@testing-library/jest-dom/vitest";

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;
  private callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback;
    this.root = options?.root ?? null;
    this.rootMargin = options?.rootMargin ?? "0px";
    const threshold = options?.threshold ?? 0;
    this.thresholds = Array.isArray(threshold) ? threshold : [threshold];
  }

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trigger(entries: IntersectionObserverEntry[]): void {
    this.callback(entries, this);
  }
}

// Vitest ortamında IntersectionObserver mock'u
(globalThis as unknown as { IntersectionObserver?: typeof IntersectionObserver }).IntersectionObserver =
  MockIntersectionObserver;

import '@testing-library/jest-dom';

// JSDOM does not implement TransitionEvent; provide a minimal polyfill so
// tests can dispatch transitionend events via fireTransitionEnd().
if (typeof TransitionEvent === 'undefined') {
  (globalThis as Record<string, unknown>)['TransitionEvent'] = class TransitionEvent extends Event {
    constructor(type: string, init?: EventInit) {
      super(type, init);
    }
  };
}

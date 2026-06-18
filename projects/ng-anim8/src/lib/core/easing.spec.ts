import { EASINGS, resolveEasing, DEFAULT_EASING } from './easing';

describe('EASINGS', () => {
  it('has exactly 12 entries', () => {
    expect(Object.keys(EASINGS)).toHaveLength(12);
  });

  it('maps linear to "linear"', () => {
    expect(EASINGS['linear']).toBe('linear');
  });

  it('maps spring to a cubic-bezier string', () => {
    expect(EASINGS['spring']).toMatch(/^cubic-bezier\(/);
  });

  it('maps elastic to a cubic-bezier string', () => {
    expect(EASINGS['elastic']).toMatch(/^cubic-bezier\(/);
  });
});

describe('DEFAULT_EASING', () => {
  it('is ease-in-out', () => {
    expect(DEFAULT_EASING).toBe('ease-in-out');
  });
});

describe('resolveEasing', () => {
  it('resolves a named key to its CSS value', () => {
    expect(resolveEasing('spring')).toBe(EASINGS['spring']);
  });

  it('resolves every named key without returning the key itself (for cubic-bezier entries)', () => {
    const cubicKeys = ['smooth', 'snappy', 'spring', 'elastic', 'bounce', 'decelerate', 'accelerate'] as const;
    for (const key of cubicKeys) {
      expect(resolveEasing(key)).toMatch(/^cubic-bezier\(/);
    }
  });

  it('passes through an unknown string unchanged', () => {
    expect(resolveEasing('my-custom-bezier')).toBe('my-custom-bezier');
  });

  it('passes through a raw cubic-bezier string unchanged', () => {
    const raw = 'cubic-bezier(0.1, 0.2, 0.3, 0.4)';
    expect(resolveEasing(raw)).toBe(raw);
  });
});

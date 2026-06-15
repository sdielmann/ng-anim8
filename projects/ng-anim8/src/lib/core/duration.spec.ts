import { resolveDuration, DURATION_MAP } from './duration';

describe('resolveDuration', () => {
  it('returns the mapped ms for "fast"', () => {
    expect(resolveDuration('fast')).toBe(150);
  });

  it('returns the mapped ms for "normal"', () => {
    expect(resolveDuration('normal')).toBe(300);
  });

  it('returns the mapped ms for "slow"', () => {
    expect(resolveDuration('slow')).toBe(500);
  });

  it('returns the number directly when a number is given', () => {
    expect(resolveDuration(450)).toBe(450);
  });

  it('returns 0 for explicit 0', () => {
    expect(resolveDuration(0)).toBe(0);
  });
});

describe('DURATION_MAP', () => {
  it('has entries for fast, normal, and slow', () => {
    expect(Object.keys(DURATION_MAP)).toEqual(expect.arrayContaining(['fast', 'normal', 'slow']));
  });
});

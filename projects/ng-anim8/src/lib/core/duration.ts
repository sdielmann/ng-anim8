export type Duration = 'fast' | 'normal' | 'slow' | number;

export const DURATION_MAP: Record<string, number> = {
  fast:   150,
  normal: 300,
  slow:   500,
};

export function resolveDuration(d: Duration): number {
  return typeof d === 'number' ? d : DURATION_MAP[d];
}

export type EasingName =
  | 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'
  | 'smooth' | 'snappy' | 'spring' | 'elastic' | 'bounce'
  | 'decelerate' | 'accelerate';

export const EASINGS: Record<EasingName, string> = {
  'linear':      'linear',
  'ease':        'ease',
  'ease-in':     'ease-in',
  'ease-out':    'ease-out',
  'ease-in-out': 'ease-in-out',
  'smooth':      'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  'snappy':      'cubic-bezier(0.4, 0, 0.2, 1)',
  'spring':      'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  'elastic':     'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  'bounce':      'cubic-bezier(0.34, 1.56, 0.64, 1)',
  'decelerate':  'cubic-bezier(0, 0, 0.2, 1)',
  'accelerate':  'cubic-bezier(0.4, 0, 1, 1)',
};

export const DEFAULT_EASING: EasingName = 'ease-in-out';

export function resolveEasing(value: string): string {
  return (EASINGS as Record<string, string>)[value] ?? value;
}

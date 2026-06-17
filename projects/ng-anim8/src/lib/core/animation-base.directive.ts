import { Directive, computed, input } from '@angular/core';
import { DEFAULT_EASING } from './easing';
import { Duration, resolveDuration } from './duration';

@Directive({
  host: {
    '[style.--anim8-duration]': 'resolvedDuration()',
    '[style.--anim8-easing]': 'easing()',
    '[style.--anim8-delay]': 'resolvedDelay()',
  },
})
export abstract class AnimationBase {
  show     = input<boolean>(false);
  duration = input<Duration>('normal');
  easing   = input<string>(DEFAULT_EASING);
  delay    = input<number>(0);

  protected readonly resolvedDuration = computed(() => `${resolveDuration(this.duration())}ms`);
  protected readonly resolvedDelay    = computed(() => `${this.delay()}ms`);
}

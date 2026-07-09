import { Component, computed, input } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

export type FlyDirection = 'up' | 'down' | 'left' | 'right';

@Component({
  selector: 'anim8-fly',
  standalone: true,
  template: `<ng-content/>`,
  styleUrl: './fly.component.scss',
  host: {
    '[class]': 'elementClass()',
    '[style.--anim8-fly-distance]': 'distance()',
    'animate.enter': 'anim8-fly--enter',
    'animate.leave': 'anim8-fly--leave',
  },
})
export class FlyComponent extends AnimationBase {
  direction = input<FlyDirection>('up');
  distance  = input('100%');

  protected elementClass = computed(() => `anim8-fly anim8-fly--${this.direction()}`);
}

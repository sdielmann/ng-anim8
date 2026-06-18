import {Component, computed, input} from '@angular/core';
import {AnimationBase} from '../core/animation-base.directive';

export type SlideDirection = 'up' | 'down' | 'left' | 'right';

@Component({
  selector: 'anim8-slide',
  standalone: true,
  template: `<ng-content />`,
  styleUrl: './slide.component.scss',
  host: {
    '[class]': 'elementClass()',
    'animate.enter': 'anim8-slide--enter',
    'animate.leave': 'anim8-slide--leave'
  }
})
export class SlideComponent extends AnimationBase {
  direction = input<SlideDirection>('up');
  protected elementClass = computed(() => `anim8-slide anim8-slide--${this.direction()}`);
}

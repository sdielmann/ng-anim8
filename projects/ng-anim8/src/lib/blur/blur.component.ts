import { Component, computed, input, numberAttribute } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

@Component({
  selector: 'anim8-blur',
  standalone: true,
  template: `<ng-content/>`,
  styleUrl: './blur.component.scss',
  host: {
    class: 'anim8-blur',
    '[style.--anim8-blur]': 'blurCss()',
    'animate.enter': 'anim8-blur--enter',
    'animate.leave': 'anim8-blur--leave',
  },
})
export class BlurComponent extends AnimationBase {
  blurAmount = input(4, { transform: numberAttribute });
  protected readonly blurCss = computed(() => `${this.blurAmount()}px`);
}

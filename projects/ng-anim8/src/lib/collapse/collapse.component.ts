import {Component} from '@angular/core';
import {AnimationBase} from '../core/animation-base.directive';

@Component({
  selector: 'anim8-collapse',
  standalone: true,
  template: `
    <div class="anim8-collapse__inner">
      <ng-content />
    </div>
  `,
  styleUrl: './collapse.component.scss',
  host: {
    class: 'anim8-collapse',
    'animate.enter': 'anim8-collapse--enter',
    'animate.leave': 'anim8-collapse--leave'
  }
})
export class CollapseComponent extends AnimationBase {}

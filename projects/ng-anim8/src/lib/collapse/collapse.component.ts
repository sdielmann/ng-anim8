import { Component } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

@Component({
  selector: 'anim8-collapse',
  standalone: true,
  template: `
    @if (show()) {
      <div class="anim8-collapse"
           animate.enter="anim8-collapse--enter"
           animate.leave="anim8-collapse--leave">
        <div class="anim8-collapse__inner">
          <ng-content />
        </div>
      </div>
    }
  `,
  styleUrl: './collapse.component.scss',
})
export class CollapseComponent extends AnimationBase {}

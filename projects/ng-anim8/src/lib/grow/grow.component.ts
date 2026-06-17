import { Component } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

@Component({
  selector: 'anim8-grow',
  standalone: true,
  template: `
    @if (show()) {
      <div class="anim8-grow"
           animate.enter="anim8-grow--enter"
           animate.leave="anim8-grow--leave">
        <ng-content />
      </div>
    }
  `,
  styleUrl: './grow.component.scss',
})
export class GrowComponent extends AnimationBase {}

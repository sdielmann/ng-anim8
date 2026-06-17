import { Component } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

@Component({
  selector: 'anim8-zoom',
  standalone: true,
  template: `
    @if (show()) {
      <div class="anim8-zoom"
           animate.enter="anim8-zoom--enter"
           animate.leave="anim8-zoom--leave">
        <ng-content />
      </div>
    }
  `,
  styleUrl: './zoom.component.scss',
})
export class ZoomComponent extends AnimationBase {}

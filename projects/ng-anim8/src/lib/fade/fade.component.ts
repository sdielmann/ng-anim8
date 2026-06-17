import { Component } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

@Component({
  selector: 'anim8-fade',
  standalone: true,
  template: `
    @if (show()) {
      <div class="anim8-fade"
           animate.enter="anim8-fade--enter"
           animate.leave="anim8-fade--leave">
        <ng-content />
      </div>
    }
  `,
  styleUrl: './fade.component.scss',
})
export class FadeComponent extends AnimationBase {}

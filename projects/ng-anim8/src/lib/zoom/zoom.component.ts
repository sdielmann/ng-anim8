import {Component} from '@angular/core';
import {AnimationBase} from '../core/animation-base.directive';

@Component({
  selector: 'anim8-zoom',
  standalone: true,
  template: `<ng-content />`,
  styleUrl: './zoom.component.scss',
  host: {
    class: 'anim8-zoom',
    'animate.enter': 'anim8-zoom--enter',
    'animate.leave': 'anim8-zoom--leave'
  }
})
export class ZoomComponent extends AnimationBase {}

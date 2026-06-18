import {Component} from '@angular/core';
import {AnimationBase} from '../core/animation-base.directive';

@Component({
  selector: 'anim8-grow',
  standalone: true,
  template: `<ng-content />`,
  styleUrl: './grow.component.scss',
  host: {
    class: 'anim8-grow',
    'animate.enter': 'anim8-grow--enter',
    'animate.leave': 'anim8-grow--leave'
  }
})
export class GrowComponent extends AnimationBase {}

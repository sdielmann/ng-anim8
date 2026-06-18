import {Component} from '@angular/core';
import {AnimationBase} from '../core/animation-base.directive';

@Component({
  selector: 'anim8-fade',
  standalone: true,
  template: `<ng-content/>`,
  styleUrl: './fade.component.scss',
  host: {
    class: 'anim8-fade',
    'animate.enter': 'anim8-fade--enter',
    'animate.leave': 'anim8-fade--leave'
  }
})
export class FadeComponent extends AnimationBase {
}

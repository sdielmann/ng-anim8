import { Component, ViewEncapsulation, input } from '@angular/core';

export type AttentionVariant = 'shake' | 'pulse' | 'bounce' | 'wiggle';

@Component({
  selector: '[anim8Attention]',
  standalone: true,
  template: '<ng-content />',
  styleUrl: './attention.directive.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.anim8-attention--shake]': 'anim8Attention() === "shake"',
    '[class.anim8-attention--pulse]': 'anim8Attention() === "pulse"',
    '[class.anim8-attention--bounce]': 'anim8Attention() === "bounce"',
    '[class.anim8-attention--wiggle]': 'anim8Attention() === "wiggle"',
  },
})
export class Anim8AttentionDirective {
  anim8Attention = input.required<AttentionVariant>();
}

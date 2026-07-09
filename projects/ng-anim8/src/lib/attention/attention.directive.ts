import { Directive, input } from '@angular/core';

export type AttentionVariant = 'shake' | 'pulse' | 'bounce' | 'wiggle';

@Directive({
  selector: '[anim8Attention]',
  standalone: true,
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

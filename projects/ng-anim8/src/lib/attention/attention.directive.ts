import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { resolveDuration } from '../core/duration';
import { injectIsBrowser } from '../core/platform';

export type AttentionVariant = 'shake' | 'pulse' | 'bounce' | 'wiggle';

@Component({
  selector: '[anim8Attention]',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './attention.directive.scss',
  encapsulation: ViewEncapsulation.None,
  exportAs: 'anim8Attention',
  host: {
    class: 'anim8-attention',
    '[class.anim8-attention--shake]':  'anim8Attention() === "shake"',
    '[class.anim8-attention--pulse]':  'anim8Attention() === "pulse"',
    '[class.anim8-attention--bounce]': 'anim8Attention() === "bounce"',
    '[class.anim8-attention--wiggle]': 'anim8Attention() === "wiggle"',
    '[style.--anim8-attention-duration]': 'resolvedDuration()',
  },
})
export class Anim8AttentionDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly isBrowser = injectIsBrowser();

  anim8Attention = input.required<AttentionVariant>();
  anim8Trigger   = input<unknown>(undefined);
  duration       = input<number | undefined, string | number | undefined>(undefined, {
    transform: (value) => value === undefined ? undefined : resolveDuration(value),
  });

  protected readonly resolvedDuration = computed(() => {
    const ms = this.duration();
    return ms !== undefined ? `${ms}ms` : null;
  });

  private initialized = false;

  constructor() {
    effect(() => {
      this.anim8Trigger();
      if (!this.initialized) {
        this.initialized = true;
        return;
      }
      this.trigger();
    });
  }

  private readonly onAnimationEnd = (event: Event): void => {
    if (event.target !== this.el.nativeElement) return;
    this.el.nativeElement.classList.remove('anim8-attention--active');
  };

  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.ensureTransformableDisplay();
    this.el.nativeElement.addEventListener('animationend', this.onAnimationEnd);
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    this.el.nativeElement.removeEventListener('animationend', this.onAnimationEnd);
  }

  trigger(): void {
    if (!this.isBrowser) return;
    const host = this.el.nativeElement;
    host.classList.remove('anim8-attention--active');
    void host.offsetWidth;
    host.classList.add('anim8-attention--active');
  }

  private ensureTransformableDisplay(): void {
    const host = this.el.nativeElement;
    if (getComputedStyle(host).display === 'inline') {
      host.style.display = 'inline-block';
    }
  }
}

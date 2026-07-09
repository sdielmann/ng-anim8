import {
  CSP_NONCE,
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { resolveDuration } from '../core/duration';
import { injectIsBrowser } from '../core/platform';

export type AttentionVariant = 'shake' | 'pulse' | 'bounce' | 'wiggle';

const ATTENTION_STYLE_ID = 'anim8-attention-styles';
const ATTENTION_STYLES = `
@keyframes anim8-attention-shake {
  0% { transform: translateX(0); }
  10% { transform: translateX(-8px); }
  20% { transform: translateX(8px); }
  30% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  50% { transform: translateX(-4px); }
  60% { transform: translateX(4px); }
  70% { transform: translateX(-2px); }
  80% { transform: translateX(2px); }
  100% { transform: translateX(0); }
}

@keyframes anim8-attention-pulse {
  0%, 100% { transform: scale(1); }
  30% { transform: scale(1.15); }
  70% { transform: scale(1.05); }
}

@keyframes anim8-attention-bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}

@keyframes anim8-attention-wiggle {
  0%, 100% { transform: rotate(0deg); }
  15% { transform: rotate(-10deg); }
  30% { transform: rotate(10deg); }
  45% { transform: rotate(-8deg); }
  60% { transform: rotate(8deg); }
  75% { transform: rotate(-4deg); }
  90% { transform: rotate(4deg); }
}

.anim8-attention.anim8-attention--shake.anim8-attention--active {
  animation: anim8-attention-shake var(--anim8-attention-duration, 500ms) ease-in-out both;
}

.anim8-attention.anim8-attention--pulse.anim8-attention--active {
  animation: anim8-attention-pulse var(--anim8-attention-duration, 600ms) ease-in-out both;
}

.anim8-attention.anim8-attention--bounce.anim8-attention--active {
  animation: anim8-attention-bounce var(--anim8-attention-duration, 700ms) ease-out both;
}

.anim8-attention.anim8-attention--wiggle.anim8-attention--active {
  animation: anim8-attention-wiggle var(--anim8-attention-duration, 800ms) ease-in-out both;
}
`;

@Directive({
  selector: '[anim8Attention]',
  standalone: true,
  exportAs: 'anim8Attention',
  host: {
    class: 'anim8-attention',
    '[class.anim8-attention--shake]': 'anim8Attention() === "shake"',
    '[class.anim8-attention--pulse]': 'anim8Attention() === "pulse"',
    '[class.anim8-attention--bounce]': 'anim8Attention() === "bounce"',
    '[class.anim8-attention--wiggle]': 'anim8Attention() === "wiggle"',
    '[style.--anim8-attention-duration]': 'resolvedDuration()',
  },
})
export class Anim8AttentionDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = injectIsBrowser();
  private readonly cspNonce = inject(CSP_NONCE, { optional: true });

  anim8Attention = input.required<AttentionVariant>();
  anim8Trigger = input<unknown>(undefined);
  duration = input<number | undefined, string | number | undefined>(undefined, {
    transform: (value) => (value === undefined ? undefined : resolveDuration(value)),
  });

  protected readonly resolvedDuration = computed(() => {
    const duration = this.duration();
    return duration === undefined ? null : `${duration}ms`;
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
    if (event.target !== this.el.nativeElement) {
      return;
    }

    this.el.nativeElement.classList.remove('anim8-attention--active');
  };

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.installStyles();
    this.ensureTransformableHostDisplay();
    this.el.nativeElement.addEventListener('animationend', this.onAnimationEnd);
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) {
      return;
    }

    this.el.nativeElement.removeEventListener('animationend', this.onAnimationEnd);
  }

  trigger(): void {
    if (!this.isBrowser) {
      return;
    }

    const host = this.el.nativeElement;
    this.ensureTransformableHostDisplay();
    host.classList.remove('anim8-attention--active');
    void host.offsetWidth;
    host.classList.add('anim8-attention--active');
  }

  private ensureTransformableHostDisplay(): void {
    const host = this.el.nativeElement;
    const display =
      this.document.defaultView?.getComputedStyle(host).display || host.style.display;

    if (display === 'inline') {
      host.style.display = 'inline-block';
    }
  }

  private installStyles(): void {
    if (this.document.getElementById(ATTENTION_STYLE_ID)) {
      return;
    }

    const style = this.document.createElement('style');
    style.id = ATTENTION_STYLE_ID;
    if (this.cspNonce) {
      style.nonce = this.cspNonce;
    }
    style.textContent = ATTENTION_STYLES;
    this.document.head.appendChild(style);
  }
}

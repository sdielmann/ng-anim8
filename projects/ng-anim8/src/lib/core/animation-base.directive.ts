import {
  Directive,
  EmbeddedViewRef,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
  booleanAttribute,
  effect,
  input,
  output,
} from '@angular/core';
import { DEFAULT_EASING } from './easing';
import { Duration, resolveDuration } from './duration';
import { injectIsBrowser } from './platform';

@Directive()
export abstract class AnimationBase implements OnDestroy {
  // --- Inputs ---
  show        = input<boolean>(false);
  duration    = input<Duration>('normal');
  easing      = input<string>(DEFAULT_EASING);
  delay       = input<number>(0);
  keepMounted = input(false, { transform: booleanAttribute });

  // --- Outputs ---
  enterStart = output<void>();
  enterDone  = output<void>();
  leaveStart = output<void>();
  leaveDone  = output<void>();

  // Provided by each subclass: the CSS class name that triggers the visible state.
  protected abstract readonly visibleClass: string;

  protected readonly isBrowser = injectIsBrowser();

  private anchor!: ViewContainerRef;
  private tpl!: TemplateRef<unknown>;
  private view: EmbeddedViewRef<unknown> | null = null;
  private transitionCleanup: (() => void) | null = null;
  private ready = false;

  constructor() {
    // Tracks show() — fires on every change after initAnimation() sets ready=true.
    effect(() => {
      const visible = this.show();
      if (!this.ready) return;
      this.sync(visible);
    });
  }

  /**
   * Called by each subclass from ngAfterViewInit, passing the VCR anchor and
   * content TemplateRef obtained via viewChild.required().
   */
  protected initAnimation(anchor: ViewContainerRef, tpl: TemplateRef<unknown>): void {
    this.anchor = anchor;
    this.tpl    = tpl;
    this.ready  = true;

    // Special case: keepMounted=true + show=false on init → pre-mount hidden.
    if (!this.show() && this.keepMounted()) {
      this.view = this.anchor.createEmbeddedView(this.tpl);
      this.view.detectChanges();
      const el = this.getRootEl();
      if (el) el.style.display = 'none';
      return;
    }

    this.sync(this.show());
  }

  // ---- Private orchestration ------------------------------------------------

  private sync(visible: boolean): void {
    if (!this.isBrowser) {
      this.syncSsr(visible);
      return;
    }
    visible ? this.performEnter() : this.performLeave();
  }

  private syncSsr(visible: boolean): void {
    if (visible) {
      if (!this.view) {
        this.view = this.anchor.createEmbeddedView(this.tpl);
        this.view.detectChanges();
      }
    } else if (!this.keepMounted()) {
      this.anchor.clear();
      this.view = null;
    }
    // keepMounted=true + show=false SSR: already handled in initAnimation().
  }

  private performEnter(): void {
    this.clearTransition();

    if (!this.view) {
      this.view = this.anchor.createEmbeddedView(this.tpl);
      this.view.detectChanges();
    }

    const el = this.getRootEl();
    if (!el) return;

    // Remove any display:none left by a previous leave with keepMounted=true.
    el.style.removeProperty('display');
    this.setCssVars(el);
    this.enterStart.emit();

    // Force a reflow so removing the visible class and re-adding it
    // always triggers the CSS transition (avoids batching with mount).
    el.getBoundingClientRect();
    el.classList.add(this.visibleClass);

    this.awaitTransition(el, () => this.enterDone.emit());
  }

  private performLeave(): void {
    const el = this.getRootEl();
    if (!el || !this.view) return;

    this.clearTransition();
    this.setCssVars(el);
    this.leaveStart.emit();
    el.classList.remove(this.visibleClass);

    this.awaitTransition(el, () => {
      if (!this.keepMounted()) {
        this.anchor.clear();
        this.view = null;
      } else {
        el.style.display = 'none';
      }
      this.leaveDone.emit();
    });
  }

  // ---- Helpers ---------------------------------------------------------------

  private getRootEl(): HTMLElement | null {
    if (!this.view) return null;
    const node = this.view.rootNodes.find((n: Node) => n.nodeType === Node.ELEMENT_NODE);
    return node ? (node as HTMLElement) : null;
  }

  private setCssVars(el: HTMLElement): void {
    el.style.setProperty('--ng8-duration', `${resolveDuration(this.duration())}ms`);
    el.style.setProperty('--ng8-easing', this.easing());
    el.style.setProperty('--ng8-delay', `${this.delay()}ms`);
  }

  /**
   * Calls callback once after the CSS transition ends.
   * Uses transitionend (fires first) with a setTimeout fallback so the
   * callback always fires even when transitions are disabled (tests, SSR hydration).
   * Also cancels any previously pending transition callback to handle rapid
   * show/hide toggling correctly.
   */
  private awaitTransition(el: HTMLElement, callback: () => void): void {
    let fired = false;
    const done = () => {
      if (fired) return;
      fired = true;
      this.transitionCleanup = null;
      callback();
    };

    const handler = () => done();
    el.addEventListener('transitionend', handler);

    // Fallback: duration + delay + 50ms buffer.
    const ms = resolveDuration(this.duration()) + this.delay() + 50;
    const timer = setTimeout(done, ms);

    this.transitionCleanup = () => {
      el.removeEventListener('transitionend', handler);
      clearTimeout(timer);
    };
  }

  private clearTransition(): void {
    const fn = this.transitionCleanup;
    this.transitionCleanup = null;
    fn?.();
  }

  ngOnDestroy(): void {
    this.clearTransition();
    this.anchor?.clear();
  }
}

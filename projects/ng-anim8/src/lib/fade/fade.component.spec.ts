import { render, waitFor } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { PLATFORM_ID } from '@angular/core';
import { FadeComponent } from './fade.component';

function fireTransitionEnd(selector: string): void {
  document.querySelector(selector)
    ?.dispatchEvent(new TransitionEvent('transitionend', { bubbles: true }));
}

describe('FadeComponent (+ AnimationBase shared behaviour)', () => {

  // --- DOM mount/unmount (keepMounted: false) ---

  it('does not render content when show is false', async () => {
    await render(`<anim8-fade [show]="false"><span>hello</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    expect(document.querySelector('.anim8-fade')).not.toBeInTheDocument();
  });

  it('mounts the animation element when show is true', async () => {
    await render(`<anim8-fade [show]="true"><span>hello</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    expect(document.querySelector('.anim8-fade')).toBeInTheDocument();
  });

  it('adds the visible class after mounting', async () => {
    await render(`<anim8-fade [show]="true"><span>hello</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    expect(document.querySelector('.anim8-fade')).toHaveClass('anim8-fade--visible');
  });

  it('removes visible class immediately when show becomes false', async () => {
    const { fixture } = await render(
      `<anim8-fade [show]="isVisible"><span>hello</span></anim8-fade>`,
      { imports: [FadeComponent], componentProperties: { isVisible: true } },
    );
    fixture.componentInstance.isVisible = false;
    fixture.detectChanges();
    expect(document.querySelector('.anim8-fade')).not.toHaveClass('anim8-fade--visible');
  });

  it('removes animation element from DOM after leave transition completes', async () => {
    const { fixture } = await render(
      `<anim8-fade [show]="isVisible"><span>hello</span></anim8-fade>`,
      { imports: [FadeComponent], componentProperties: { isVisible: true } },
    );
    fixture.componentInstance.isVisible = false;
    fixture.detectChanges();
    fireTransitionEnd('.anim8-fade');
    await waitFor(() => expect(document.querySelector('.anim8-fade')).not.toBeInTheDocument());
  });

  // --- keepMounted: true ---

  it('keeps the element in the DOM after leave when keepMounted', async () => {
    const { fixture } = await render(
      `<anim8-fade [show]="isVisible" keepMounted><span>hello</span></anim8-fade>`,
      { imports: [FadeComponent], componentProperties: { isVisible: true } },
    );
    fixture.componentInstance.isVisible = false;
    fixture.detectChanges();
    fireTransitionEnd('.anim8-fade');
    await waitFor(() => {
      const el = document.querySelector('.anim8-fade') as HTMLElement;
      expect(el).toBeInTheDocument();
      expect(el.style.display).toBe('none');
    });
  });

  it('shows element again without re-mounting after toggle with keepMounted', async () => {
    const { fixture } = await render(
      `<anim8-fade [show]="isVisible" keepMounted><span>hello</span></anim8-fade>`,
      { imports: [FadeComponent], componentProperties: { isVisible: true } },
    );
    fixture.componentInstance.isVisible = false;
    fixture.detectChanges();
    fireTransitionEnd('.anim8-fade');
    await waitFor(() =>
      expect((document.querySelector('.anim8-fade') as HTMLElement).style.display).toBe('none'),
    );

    fixture.componentInstance.isVisible = true;
    fixture.detectChanges();
    const el = document.querySelector('.anim8-fade') as HTMLElement;
    expect(el.style.display).not.toBe('none');
    expect(el).toHaveClass('anim8-fade--visible');
  });

  it('pre-mounts content hidden when keepMounted is true and show starts false', async () => {
    await render(`<anim8-fade [show]="false" keepMounted><span>hello</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    const el = document.querySelector('.anim8-fade') as HTMLElement;
    expect(el).toBeInTheDocument();
    expect(el.style.display).toBe('none');
  });

  // --- CSS custom properties ---

  it('sets --anim8-duration from a preset', async () => {
    await render(`<anim8-fade [show]="true" duration="fast"><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    const el = document.querySelector('.anim8-fade') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-duration')).toBe('150ms');
  });

  it('sets --anim8-duration from a numeric value', async () => {
    await render(`<anim8-fade [show]="true" [duration]="250"><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    expect((document.querySelector('.anim8-fade') as HTMLElement)
      .style.getPropertyValue('--anim8-duration')).toBe('250ms');
  });

  it('sets --anim8-easing and --anim8-delay', async () => {
    await render(
      `<anim8-fade [show]="true" easing="linear" [delay]="100"><span>hi</span></anim8-fade>`,
      { imports: [FadeComponent] },
    );
    const el = document.querySelector('.anim8-fade') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-easing')).toBe('linear');
    expect(el.style.getPropertyValue('--anim8-delay')).toBe('100ms');
  });

  // --- Lifecycle outputs ---

  it('emits enterStart when entering', async () => {
    const onEnterStart = jest.fn();
    await render(
      `<anim8-fade [show]="true" (enterStart)="onEnterStart()"><span>hi</span></anim8-fade>`,
      { imports: [FadeComponent], componentProperties: { onEnterStart } },
    );
    expect(onEnterStart).toHaveBeenCalledTimes(1);
  });

  it('emits enterDone after transitionend', async () => {
    const onEnterDone = jest.fn();
    await render(
      `<anim8-fade [show]="true" (enterDone)="onEnterDone()"><span>hi</span></anim8-fade>`,
      { imports: [FadeComponent], componentProperties: { onEnterDone } },
    );
    expect(onEnterDone).not.toHaveBeenCalled();
    fireTransitionEnd('.anim8-fade');
    expect(onEnterDone).toHaveBeenCalledTimes(1);
  });

  it('emits leaveStart when leaving', async () => {
    const onLeaveStart = jest.fn();
    const { fixture } = await render(
      `<anim8-fade [show]="isVisible" (leaveStart)="onLeaveStart()"><span>hi</span></anim8-fade>`,
      { imports: [FadeComponent], componentProperties: { isVisible: true, onLeaveStart } },
    );
    fixture.componentInstance.isVisible = false;
    fixture.detectChanges();
    expect(onLeaveStart).toHaveBeenCalledTimes(1);
  });

  it('emits leaveDone after leave transitionend', async () => {
    const onLeaveDone = jest.fn();
    const { fixture } = await render(
      `<anim8-fade [show]="isVisible" (leaveDone)="onLeaveDone()"><span>hi</span></anim8-fade>`,
      { imports: [FadeComponent], componentProperties: { isVisible: true, onLeaveDone } },
    );
    fixture.componentInstance.isVisible = false;
    fixture.detectChanges();
    expect(onLeaveDone).not.toHaveBeenCalled();
    fireTransitionEnd('.anim8-fade');
    expect(onLeaveDone).toHaveBeenCalledTimes(1);
  });

  // --- SSR ---

  it('renders content immediately without animation classes on the server', async () => {
    await render(`<anim8-fade [show]="true"><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    const el = document.querySelector('.anim8-fade');
    expect(el).toBeInTheDocument();
    expect(el).not.toHaveClass('anim8-fade--visible');
  });

  it('does not render content on the server when show is false', async () => {
    await render(`<anim8-fade [show]="false"><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    expect(document.querySelector('.anim8-fade')).not.toBeInTheDocument();
  });
});

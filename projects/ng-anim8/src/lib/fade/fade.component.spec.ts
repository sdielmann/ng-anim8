import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { PLATFORM_ID } from '@angular/core';
import { FadeComponent } from './fade.component';

describe('FadeComponent (+ AnimationBase shared behaviour)', () => {

  // --- DOM mount/unmount ---

  it('does not render content when excluded by @if', async () => {
    await render(`@if (false) { <anim8-fade><span>hello</span></anim8-fade> }`, {
      imports: [FadeComponent],
    });
    expect(document.querySelector('.anim8-fade')).not.toBeInTheDocument();
  });

  it('mounts the animation element when in template', async () => {
    await render(`<anim8-fade><span>hello</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    expect(document.querySelector('.anim8-fade')).toBeInTheDocument();
  });

  it('removes element from DOM when @if condition becomes false', async () => {
    const { fixture } = await render(
      `@if (isVisible) { <anim8-fade><span>hello</span></anim8-fade> }`,
      { imports: [FadeComponent], componentProperties: { isVisible: true } },
    );
    fixture.changeDetectorRef.markForCheck();
    (fixture.componentInstance as any).isVisible = false;
    expect(document.querySelector('.anim8-fade')).not.toBeInTheDocument();
  });

  // --- CSS custom properties (set on host element, cascade to inner div) ---

  it('sets --anim8-duration from a preset', async () => {
    await render(`<anim8-fade duration="fast"><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('150ms');
  });

  it('sets --anim8-duration from a numeric value', async () => {
    await render(`<anim8-fade [duration]="250"><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
    });
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('250ms');
  });

  it('sets --anim8-easing and --anim8-delay', async () => {
    await render(
      `<anim8-fade easing="linear" [delay]="100"><span>hi</span></anim8-fade>`,
      { imports: [FadeComponent] },
    );
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-easing')).toBe('linear');
    expect(host.style.getPropertyValue('--anim8-delay')).toBe('100ms');
  });

  it('resolves a named easing key to its CSS value on --anim8-easing', async () => {
    await render(
      `<anim8-fade easing="spring"><span>hi</span></anim8-fade>`,
      { imports: [FadeComponent] },
    );
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-easing'))
      .toBe('cubic-bezier(0.175, 0.885, 0.32, 1.275)');
  });

  it('passes a raw CSS easing string through unchanged on --anim8-easing', async () => {
    await render(
      `<anim8-fade easing="cubic-bezier(0.1, 0.2, 0.3, 0.4)"><span>hi</span></anim8-fade>`,
      { imports: [FadeComponent] },
    );
    const host = document.querySelector('anim8-fade') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-easing'))
      .toBe('cubic-bezier(0.1, 0.2, 0.3, 0.4)');
  });

  // --- SSR ---

  it('renders content on the server', async () => {
    await render(`<anim8-fade><span>hi</span></anim8-fade>`, {
      imports: [FadeComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    expect(document.querySelector('.anim8-fade')).toBeInTheDocument();
  });

  it('does not render content on the server when excluded by @if', async () => {
    await render(`@if (false) { <anim8-fade><span>hi</span></anim8-fade> }`, {
      imports: [FadeComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    expect(document.querySelector('.anim8-fade')).not.toBeInTheDocument();
  });
});

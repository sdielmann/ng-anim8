import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { PLATFORM_ID } from '@angular/core';
import { FlyComponent } from './fly.component';

describe('FlyComponent', () => {

  // --- DOM mount/unmount ---

  it('does not render content when excluded by @if', async () => {
    await render(`@if (false) { <anim8-fly><span>hello</span></anim8-fly> }`, {
      imports: [FlyComponent],
    });
    expect(document.querySelector('.anim8-fly')).not.toBeInTheDocument();
  });

  it('mounts the animation element when in template', async () => {
    await render(`<anim8-fly><span>hello</span></anim8-fly>`, {
      imports: [FlyComponent],
    });
    expect(document.querySelector('.anim8-fly')).toBeInTheDocument();
  });

  // --- direction input ---

  it('defaults direction to "up"', async () => {
    await render(`<anim8-fly><span>content</span></anim8-fly>`, {
      imports: [FlyComponent],
    });
    expect(document.querySelector('.anim8-fly')).toHaveClass('anim8-fly--up');
  });

  it('applies the direction class when direction is "down"', async () => {
    await render(`<anim8-fly direction="down"><span>content</span></anim8-fly>`, {
      imports: [FlyComponent],
    });
    expect(document.querySelector('.anim8-fly')).toHaveClass('anim8-fly--down');
  });

  it('applies the direction class when direction is "left"', async () => {
    await render(`<anim8-fly direction="left"><span>content</span></anim8-fly>`, {
      imports: [FlyComponent],
    });
    expect(document.querySelector('.anim8-fly')).toHaveClass('anim8-fly--left');
  });

  it('applies the direction class when direction is "right"', async () => {
    await render(`<anim8-fly direction="right"><span>content</span></anim8-fly>`, {
      imports: [FlyComponent],
    });
    expect(document.querySelector('.anim8-fly')).toHaveClass('anim8-fly--right');
  });

  // --- distance input ---

  it('sets --anim8-fly-distance to "100%" by default', async () => {
    await render(`<anim8-fly><span>content</span></anim8-fly>`, {
      imports: [FlyComponent],
    });
    const el = document.querySelector('anim8-fly') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-fly-distance')).toBe('100%');
  });

  it('sets --anim8-fly-distance to a custom px value', async () => {
    await render(`<anim8-fly distance="300px"><span>content</span></anim8-fly>`, {
      imports: [FlyComponent],
    });
    const el = document.querySelector('anim8-fly') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-fly-distance')).toBe('300px');
  });

  it('sets --anim8-fly-distance to a percentage value', async () => {
    await render(`<anim8-fly distance="50%"><span>content</span></anim8-fly>`, {
      imports: [FlyComponent],
    });
    const el = document.querySelector('anim8-fly') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-fly-distance')).toBe('50%');
  });

  // --- shared AnimationBase inputs (inherited) ---

  it('sets --anim8-duration from a preset', async () => {
    await render(`<anim8-fly duration="fast"><span>hi</span></anim8-fly>`, {
      imports: [FlyComponent],
    });
    const host = document.querySelector('anim8-fly') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('150ms');
  });

  it('sets --anim8-easing and --anim8-delay', async () => {
    await render(
      `<anim8-fly easing="linear" [delay]="100"><span>hi</span></anim8-fly>`,
      { imports: [FlyComponent] },
    );
    const host = document.querySelector('anim8-fly') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-easing')).toBe('linear');
    expect(host.style.getPropertyValue('--anim8-delay')).toBe('100ms');
  });

  // --- SSR ---

  it('renders content on the server', async () => {
    await render(`<anim8-fly><span>hi</span></anim8-fly>`, {
      imports: [FlyComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    expect(document.querySelector('.anim8-fly')).toBeInTheDocument();
  });

  it('does not render content on the server when excluded by @if', async () => {
    await render(`@if (false) { <anim8-fly><span>hi</span></anim8-fly> }`, {
      imports: [FlyComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    expect(document.querySelector('.anim8-fly')).not.toBeInTheDocument();
  });
});

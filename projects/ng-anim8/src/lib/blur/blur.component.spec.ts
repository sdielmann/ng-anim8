import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { PLATFORM_ID } from '@angular/core';
import { BlurComponent } from './blur.component';

describe('BlurComponent', () => {

  // --- DOM mount/unmount ---

  it('does not render content when excluded by @if', async () => {
    await render(`@if (false) { <anim8-blur><span>hello</span></anim8-blur> }`, {
      imports: [BlurComponent],
    });
    expect(document.querySelector('.anim8-blur')).not.toBeInTheDocument();
  });

  it('mounts the animation element when in template', async () => {
    await render(`<anim8-blur><span>hello</span></anim8-blur>`, {
      imports: [BlurComponent],
    });
    expect(document.querySelector('.anim8-blur')).toBeInTheDocument();
  });

  // --- blurAmount input ---

  it('sets --anim8-blur to default 4px when blurAmount is not provided', async () => {
    await render(`<anim8-blur></anim8-blur>`, { imports: [BlurComponent] });
    const host = document.querySelector('anim8-blur') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-blur')).toBe('4px');
  });

  it('sets --anim8-blur to the provided blurAmount in px', async () => {
    await render(`<anim8-blur [blurAmount]="8"></anim8-blur>`, { imports: [BlurComponent] });
    const host = document.querySelector('anim8-blur') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-blur')).toBe('8px');
  });

  it('accepts blurAmount of 0 and sets --anim8-blur to 0px', async () => {
    await render(`<anim8-blur [blurAmount]="0"></anim8-blur>`, { imports: [BlurComponent] });
    const host = document.querySelector('anim8-blur') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-blur')).toBe('0px');
  });

  // --- shared AnimationBase inputs (inherited) ---

  it('sets --anim8-duration from a preset', async () => {
    await render(`<anim8-blur duration="fast"><span>hi</span></anim8-blur>`, {
      imports: [BlurComponent],
    });
    const host = document.querySelector('anim8-blur') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('150ms');
  });

  it('sets --anim8-duration from a numeric value', async () => {
    await render(`<anim8-blur [duration]="250"><span>hi</span></anim8-blur>`, {
      imports: [BlurComponent],
    });
    const host = document.querySelector('anim8-blur') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-duration')).toBe('250ms');
  });

  it('sets --anim8-easing and --anim8-delay', async () => {
    await render(
      `<anim8-blur easing="linear" [delay]="100"><span>hi</span></anim8-blur>`,
      { imports: [BlurComponent] },
    );
    const host = document.querySelector('anim8-blur') as HTMLElement;
    expect(host.style.getPropertyValue('--anim8-easing')).toBe('linear');
    expect(host.style.getPropertyValue('--anim8-delay')).toBe('100ms');
  });

  // --- SSR ---

  it('renders content on the server', async () => {
    await render(`<anim8-blur><span>hi</span></anim8-blur>`, {
      imports: [BlurComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    expect(document.querySelector('.anim8-blur')).toBeInTheDocument();
  });

  it('does not render content on the server when excluded by @if', async () => {
    await render(`@if (false) { <anim8-blur><span>hi</span></anim8-blur> }`, {
      imports: [BlurComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    expect(document.querySelector('.anim8-blur')).not.toBeInTheDocument();
  });
});

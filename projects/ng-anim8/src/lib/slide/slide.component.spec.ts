import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { SlideComponent } from './slide.component';

describe('SlideComponent', () => {
  it('does not render when excluded by @if', async () => {
    await render(`@if (false) { <anim8-slide><span>content</span></anim8-slide> }`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).not.toBeInTheDocument();
  });

  it('renders the slide element when in template', async () => {
    await render(`<anim8-slide><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).toBeInTheDocument();
  });

  it('defaults direction to "up"', async () => {
    await render(`<anim8-slide><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).toHaveClass('anim8-slide--up');
  });

  it('applies the direction class when direction is set', async () => {
    await render(`<anim8-slide direction="down"><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).toHaveClass('anim8-slide--down');
  });

  it('sets --anim8-slide-distance to 20px by default', async () => {
    await render(`<anim8-slide><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    const el = document.querySelector('.anim8-slide') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-slide-distance')).toBe('20px');
  });

  it('sets --anim8-slide-distance to the provided distance value', async () => {
    await render(`<anim8-slide [distance]="50"><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    const el = document.querySelector('.anim8-slide') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-slide-distance')).toBe('50px');
  });

  it('accepts a numeric string distance and converts to px', async () => {
    await render(`<anim8-slide distance="50"><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    const el = document.querySelector('.anim8-slide') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-slide-distance')).toBe('50px');
  });

  it('accepts a percentage string distance and uses it as-is', async () => {
    await render(`<anim8-slide distance="100%"><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    const el = document.querySelector('.anim8-slide') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-slide-distance')).toBe('100%');
  });

  it('accepts a px string distance and uses it as-is', async () => {
    await render(`<anim8-slide distance="200px"><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    const el = document.querySelector('.anim8-slide') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-slide-distance')).toBe('200px');
  });
});

import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { GrowComponent } from './grow.component';

describe('GrowComponent', () => {
  it('does not render when excluded by @if', async () => {
    await render(`@if (false) { <anim8-grow><span>content</span></anim8-grow> }`, {
      imports: [GrowComponent],
    });
    expect(document.querySelector('.anim8-grow')).not.toBeInTheDocument();
  });

  it('renders the grow element when in template', async () => {
    await render(`<anim8-grow><span>content</span></anim8-grow>`, {
      imports: [GrowComponent],
    });
    expect(document.querySelector('.anim8-grow')).toBeInTheDocument();
  });

  it('sets --anim8-scale to 0.75 by default', async () => {
    await render(`<anim8-grow><span>content</span></anim8-grow>`, {
      imports: [GrowComponent],
    });
    const el = document.querySelector('.anim8-grow') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-scale')).toBe('0.75');
  });

  it('sets --anim8-scale to the provided minScale value', async () => {
    await render(`<anim8-grow [minScale]="0.5"><span>content</span></anim8-grow>`, {
      imports: [GrowComponent],
    });
    const el = document.querySelector('.anim8-grow') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-scale')).toBe('0.5');
  });
});

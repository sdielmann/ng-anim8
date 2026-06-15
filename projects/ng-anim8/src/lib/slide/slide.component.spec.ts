import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { SlideComponent } from './slide.component';

describe('SlideComponent', () => {
  it('does not render when show is false', async () => {
    await render(`<ng8-slide [show]="false"><span>content</span></ng8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.ng8-slide')).not.toBeInTheDocument();
  });

  it('renders the slide element when show is true', async () => {
    await render(`<ng8-slide [show]="true"><span>content</span></ng8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.ng8-slide')).toBeInTheDocument();
  });

  it('adds the visible class when show is true', async () => {
    await render(`<ng8-slide [show]="true"><span>content</span></ng8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.ng8-slide')).toHaveClass('ng8-slide--visible');
  });

  it('defaults direction to "up"', async () => {
    await render(`<ng8-slide [show]="true"><span>content</span></ng8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.ng8-slide')).toHaveClass('ng8-slide--up');
  });

  it('applies the direction class when direction is set', async () => {
    await render(`<ng8-slide [show]="true" direction="down"><span>content</span></ng8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.ng8-slide')).toHaveClass('ng8-slide--down');
  });
});

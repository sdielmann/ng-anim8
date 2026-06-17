import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { SlideComponent } from './slide.component';

describe('SlideComponent', () => {
  it('does not render when show is false', async () => {
    await render(`<anim8-slide [show]="false"><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).not.toBeInTheDocument();
  });

  it('renders the slide element when show is true', async () => {
    await render(`<anim8-slide [show]="true"><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).toBeInTheDocument();
  });

  it('defaults direction to "up"', async () => {
    await render(`<anim8-slide [show]="true"><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).toHaveClass('anim8-slide--up');
  });

  it('applies the direction class when direction is set', async () => {
    await render(`<anim8-slide [show]="true" direction="down"><span>content</span></anim8-slide>`, {
      imports: [SlideComponent],
    });
    expect(document.querySelector('.anim8-slide')).toHaveClass('anim8-slide--down');
  });
});

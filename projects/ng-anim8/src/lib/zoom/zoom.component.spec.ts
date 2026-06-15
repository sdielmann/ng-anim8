import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { ZoomComponent } from './zoom.component';

describe('ZoomComponent', () => {
  it('does not render when show is false', async () => {
    await render(`<ng8-zoom [show]="false"><span>content</span></ng8-zoom>`, {
      imports: [ZoomComponent],
    });
    expect(document.querySelector('.ng8-zoom')).not.toBeInTheDocument();
  });

  it('renders and adds visible class when show is true', async () => {
    await render(`<ng8-zoom [show]="true"><span>content</span></ng8-zoom>`, {
      imports: [ZoomComponent],
    });
    expect(document.querySelector('.ng8-zoom')).toHaveClass('ng8-zoom--visible');
  });
});

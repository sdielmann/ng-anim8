import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { ZoomComponent } from './zoom.component';

describe('ZoomComponent', () => {
  it('does not render when show is false', async () => {
    await render(`<anim8-zoom [show]="false"><span>content</span></anim8-zoom>`, {
      imports: [ZoomComponent],
    });
    expect(document.querySelector('.anim8-zoom')).not.toBeInTheDocument();
  });

  it('renders the zoom element when show is true', async () => {
    await render(`<anim8-zoom [show]="true"><span>content</span></anim8-zoom>`, {
      imports: [ZoomComponent],
    });
    expect(document.querySelector('.anim8-zoom')).toBeInTheDocument();
  });
});

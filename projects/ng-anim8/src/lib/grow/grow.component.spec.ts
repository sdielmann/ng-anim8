import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { GrowComponent } from './grow.component';

describe('GrowComponent', () => {
  it('does not render when show is false', async () => {
    await render(`<ng8-grow [show]="false"><span>content</span></ng8-grow>`, {
      imports: [GrowComponent],
    });
    expect(document.querySelector('.ng8-grow')).not.toBeInTheDocument();
  });

  it('renders and adds visible class when show is true', async () => {
    await render(`<ng8-grow [show]="true"><span>content</span></ng8-grow>`, {
      imports: [GrowComponent],
    });
    expect(document.querySelector('.ng8-grow')).toHaveClass('ng8-grow--visible');
  });
});

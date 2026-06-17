import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { GrowComponent } from './grow.component';

describe('GrowComponent', () => {
  it('does not render when show is false', async () => {
    await render(`<anim8-grow [show]="false"><span>content</span></anim8-grow>`, {
      imports: [GrowComponent],
    });
    expect(document.querySelector('.anim8-grow')).not.toBeInTheDocument();
  });

  it('renders the grow element when show is true', async () => {
    await render(`<anim8-grow [show]="true"><span>content</span></anim8-grow>`, {
      imports: [GrowComponent],
    });
    expect(document.querySelector('.anim8-grow')).toBeInTheDocument();
  });
});

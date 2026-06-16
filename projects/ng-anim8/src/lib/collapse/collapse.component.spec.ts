import { render, waitFor } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { CollapseComponent } from './collapse.component';

describe('CollapseComponent', () => {
  it('does not render when show is false', async () => {
    await render(`<anim8-collapse [show]="false"><p>content</p></anim8-collapse>`, {
      imports: [CollapseComponent],
    });
    expect(document.querySelector('.anim8-collapse')).not.toBeInTheDocument();
  });

  it('renders outer grid container and inner div when show is true', async () => {
    await render(`<anim8-collapse [show]="true"><p>content</p></anim8-collapse>`, {
      imports: [CollapseComponent],
    });
    expect(document.querySelector('.anim8-collapse')).toBeInTheDocument();
    expect(document.querySelector('.anim8-collapse__inner')).toBeInTheDocument();
  });

  it('adds visible class to the outer container when show is true', async () => {
    await render(`<anim8-collapse [show]="true"><p>content</p></anim8-collapse>`, {
      imports: [CollapseComponent],
    });
    expect(document.querySelector('.anim8-collapse')).toHaveClass('anim8-collapse--visible');
  });

  it('removes from DOM after leave transition completes', async () => {
    const { fixture } = await render(
      `<anim8-collapse [show]="isVisible"><p>content</p></anim8-collapse>`,
      { imports: [CollapseComponent], componentProperties: { isVisible: true } },
    );
    fixture.componentInstance.isVisible = false;
    fixture.detectChanges();
    document.querySelector('.anim8-collapse')
      ?.dispatchEvent(new TransitionEvent('transitionend', { bubbles: true }));
    await waitFor(() =>
      expect(document.querySelector('.anim8-collapse')).not.toBeInTheDocument(),
    );
  });
});

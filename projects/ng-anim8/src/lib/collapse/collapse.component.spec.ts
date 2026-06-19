import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { CollapseComponent } from './collapse.component';

describe('CollapseComponent', () => {
  it('does not render when excluded by @if', async () => {
    await render(`@if (false) { <anim8-collapse><p>content</p></anim8-collapse> }`, {
      imports: [CollapseComponent],
    });
    expect(document.querySelector('.anim8-collapse')).not.toBeInTheDocument();
  });

  it('renders outer grid container and inner div when in template', async () => {
    await render(`<anim8-collapse><p>content</p></anim8-collapse>`, {
      imports: [CollapseComponent],
    });
    expect(document.querySelector('.anim8-collapse')).toBeInTheDocument();
    expect(document.querySelector('.anim8-collapse__inner')).toBeInTheDocument();
  });

  it('removes from DOM when @if condition becomes false', async () => {
    const { fixture } = await render(
      `@if (isVisible) { <anim8-collapse><p>content</p></anim8-collapse> }`,
      { imports: [CollapseComponent], componentProperties: { isVisible: true } },
    );
    fixture.changeDetectorRef.markForCheck();
    (fixture.componentInstance as any).isVisible = false;
    expect(document.querySelector('.anim8-collapse')).not.toBeInTheDocument();
  });

  it('applies anim8-collapse--fade class when fade attribute is present', async () => {
    await render(`<anim8-collapse fade><p>content</p></anim8-collapse>`, {
      imports: [CollapseComponent],
    });
    expect(document.querySelector('.anim8-collapse--fade')).toBeInTheDocument();
  });

  it('does not apply anim8-collapse--fade class when fade attribute is absent', async () => {
    await render(`<anim8-collapse><p>content</p></anim8-collapse>`, {
      imports: [CollapseComponent],
    });
    expect(document.querySelector('.anim8-collapse--fade')).not.toBeInTheDocument();
  });

  it('applies anim8-collapse--horizontal class when horizontal attribute is present', async () => {
    await render(`<anim8-collapse horizontal><p>content</p></anim8-collapse>`, {
      imports: [CollapseComponent],
    });
    expect(document.querySelector('.anim8-collapse--horizontal')).toBeInTheDocument();
  });

  it('does not apply anim8-collapse--horizontal class when horizontal attribute is absent', async () => {
    await render(`<anim8-collapse><p>content</p></anim8-collapse>`, {
      imports: [CollapseComponent],
    });
    expect(document.querySelector('.anim8-collapse--horizontal')).not.toBeInTheDocument();
  });
});

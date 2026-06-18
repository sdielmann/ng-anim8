import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { StaggerComponent } from './stagger.component';

describe('StaggerComponent', () => {
  it('adds the enter class to each child', async () => {
    await render(
      `<anim8-stagger>
        <div class="item">a</div>
        <div class="item">b</div>
        <div class="item">c</div>
      </anim8-stagger>`,
      { imports: [StaggerComponent] },
    );
    document.querySelectorAll('.item').forEach((el) => {
      expect(el).toHaveClass('anim8-stagger-enter');
    });
  });

  it('sets animation-delay on each child based on index and gap', async () => {
    await render(
      `<anim8-stagger [gap]="50">
        <div class="item">a</div>
        <div class="item">b</div>
        <div class="item">c</div>
      </anim8-stagger>`,
      { imports: [StaggerComponent] },
    );
    const items = document.querySelectorAll('.item') as NodeListOf<HTMLElement>;
    expect(items[0].style.animationDelay).toBe('0ms');
    expect(items[1].style.animationDelay).toBe('50ms');
    expect(items[2].style.animationDelay).toBe('100ms');
  });

  it('applies delays to dynamically added children via MutationObserver', async () => {
    const { fixture } = await render(
      `<anim8-stagger [gap]="50">
        @for (item of items; track item) {
          <div class="item">{{ item }}</div>
        }
      </anim8-stagger>`,
      {
        imports: [StaggerComponent],
        componentProperties: { items: ['a', 'b', 'c'] },
      },
    );

    fixture.changeDetectorRef.markForCheck();
    fixture.componentInstance.items = ['a', 'b', 'c', 'd'];
    // Allow MutationObserver callback to fire.
    await Promise.resolve();

    const items = document.querySelectorAll('.item') as NodeListOf<HTMLElement>;
    expect(items[3].style.animationDelay).toBe('150ms');
    expect(items[3]).toHaveClass('anim8-stagger-enter');
  });

  it('uses a custom enterClass', async () => {
    await render(
      `<anim8-stagger enterClass="my-enter">
        <div class="item">a</div>
      </anim8-stagger>`,
      { imports: [StaggerComponent] },
    );
    expect(document.querySelector('.item')).toHaveClass('my-enter');
  });
});

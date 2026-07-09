import { Component, PLATFORM_ID, ViewChild, signal } from '@angular/core';
import { render } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { Anim8AttentionDirective } from './attention.directive';

describe('Anim8AttentionDirective', () => {
  it('applies anim8-attention--shake class for shake variant', async () => {
    await render(`<span anim8Attention="shake"></span>`, {
      imports: [Anim8AttentionDirective],
    });
    expect(document.querySelector('span')).toHaveClass('anim8-attention--shake');
  });

  it('applies anim8-attention--pulse class for pulse variant', async () => {
    await render(`<span anim8Attention="pulse"></span>`, {
      imports: [Anim8AttentionDirective],
    });
    expect(document.querySelector('span')).toHaveClass('anim8-attention--pulse');
  });

  it('applies anim8-attention--bounce class for bounce variant', async () => {
    await render(`<span anim8Attention="bounce"></span>`, {
      imports: [Anim8AttentionDirective],
    });
    expect(document.querySelector('span')).toHaveClass('anim8-attention--bounce');
  });

  it('applies anim8-attention--wiggle class for wiggle variant', async () => {
    await render(`<span anim8Attention="wiggle"></span>`, {
      imports: [Anim8AttentionDirective],
    });
    expect(document.querySelector('span')).toHaveClass('anim8-attention--wiggle');
  });

  it('does not apply other variant classes when shake is set', async () => {
    await render(`<span anim8Attention="shake"></span>`, {
      imports: [Anim8AttentionDirective],
    });
    const el = document.querySelector('span')!;
    expect(el).not.toHaveClass('anim8-attention--pulse');
    expect(el).not.toHaveClass('anim8-attention--bounce');
    expect(el).not.toHaveClass('anim8-attention--wiggle');
  });
});

describe('Anim8AttentionDirective — trigger() method', () => {
  @Component({
    template: `<span #dir="anim8Attention" anim8Attention="shake"></span>`,
    standalone: true,
    imports: [Anim8AttentionDirective],
  })
  class TriggerHost {
    @ViewChild('dir') directive!: Anim8AttentionDirective;
  }

  it('adds anim8-attention--active class on trigger()', async () => {
    const { fixture } = await render(TriggerHost);
    fixture.componentInstance.directive.trigger();
    expect(document.querySelector('span')).toHaveClass('anim8-attention--active');
  });

  it('removes anim8-attention--active class when animationend fires', async () => {
    const { fixture } = await render(TriggerHost);
    fixture.componentInstance.directive.trigger();
    document.querySelector('span')!.dispatchEvent(new Event('animationend'));
    expect(document.querySelector('span')).not.toHaveClass('anim8-attention--active');
  });

  it('restarts animation when trigger() is called while already active', async () => {
    const { fixture } = await render(TriggerHost);
    fixture.componentInstance.directive.trigger();
    fixture.componentInstance.directive.trigger();
    expect(document.querySelector('span')).toHaveClass('anim8-attention--active');
  });

  it('keeps anim8-attention--active when animationend bubbles from projected content', async () => {
    @Component({
      template: `<span #dir="anim8Attention" anim8Attention="shake"><button class="child"></button></span>`,
      standalone: true,
      imports: [Anim8AttentionDirective],
    })
    class BubblingHost {
      @ViewChild('dir') directive!: Anim8AttentionDirective;
    }

    const { fixture } = await render(BubblingHost);
    fixture.componentInstance.directive.trigger();
    document.querySelector('.child')!.dispatchEvent(new Event('animationend', { bubbles: true }));
    expect(document.querySelector('span')).toHaveClass('anim8-attention--active');
  });
});

describe('Anim8AttentionDirective — SSR', () => {
  it('does not throw and adds no active class when trigger() is called on server', async () => {
    @Component({
      template: `<span #dir="anim8Attention" anim8Attention="shake"></span>`,
      standalone: true,
      imports: [Anim8AttentionDirective],
    })
    class SsrHost {
      @ViewChild('dir') directive!: Anim8AttentionDirective;
    }

    const { fixture } = await render(SsrHost, {
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });
    expect(() => fixture.componentInstance.directive.trigger()).not.toThrow();
    expect(document.querySelector('span')).not.toHaveClass('anim8-attention--active');
  });
});

describe('Anim8AttentionDirective — anim8Trigger input', () => {
  @Component({
    template: `<span [anim8Attention]="'shake'" [anim8Trigger]="count()"></span>`,
    standalone: true,
    imports: [Anim8AttentionDirective],
  })
  class SignalHost {
    count = signal(0);
  }

  it('does not play animation on initial render', async () => {
    await render(SignalHost);
    expect(document.querySelector('span')).not.toHaveClass('anim8-attention--active');
  });

  it('plays animation when anim8Trigger signal changes', async () => {
    const { fixture } = await render(SignalHost);
    fixture.componentInstance.count.set(1);
    fixture.detectChanges();
    expect(document.querySelector('span')).toHaveClass('anim8-attention--active');
  });

  it('plays animation again on second signal change', async () => {
    const { fixture } = await render(SignalHost);
    fixture.componentInstance.count.set(1);
    fixture.detectChanges();
    document.querySelector('span')!.dispatchEvent(new Event('animationend'));
    fixture.componentInstance.count.set(2);
    fixture.detectChanges();
    expect(document.querySelector('span')).toHaveClass('anim8-attention--active');
  });
});

describe('Anim8AttentionDirective — duration input', () => {
  it('does not set --anim8-attention-duration when duration is not provided', async () => {
    await render(`<span anim8Attention="shake"></span>`, {
      imports: [Anim8AttentionDirective],
    });
    const el = document.querySelector('span') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-attention-duration')).toBe('');
  });

  it('sets --anim8-attention-duration from a numeric value', async () => {
    await render(`<span [anim8Attention]="'shake'" [duration]="400"></span>`, {
      imports: [Anim8AttentionDirective],
    });
    const el = document.querySelector('span') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-attention-duration')).toBe('400ms');
  });

  it('sets --anim8-attention-duration from a preset string', async () => {
    await render(`<span anim8Attention="shake" duration="fast"></span>`, {
      imports: [Anim8AttentionDirective],
    });
    const el = document.querySelector('span') as HTMLElement;
    expect(el.style.getPropertyValue('--anim8-attention-duration')).toBe('150ms');
  });
});

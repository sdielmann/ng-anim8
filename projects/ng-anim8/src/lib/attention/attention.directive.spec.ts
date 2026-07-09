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

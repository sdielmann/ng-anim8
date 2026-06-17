import {Component, ElementRef, effect, inject, input, viewChild} from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  template: `<pre class="language-html"><code #codeEl class="language-html"></code></pre>`,
  styleUrl: './code-snippet.component.scss',
})
export class CodeSnippetComponent {

  code = input.required<string>();

  private codeElement = viewChild.required<ElementRef<HTMLElement>>('codeEl');

  constructor() {
    effect(() => {
      const text = this.code();
      const codeEl = this.codeElement();
      if (!codeEl.nativeElement) {
        return;
      }
      codeEl.nativeElement.textContent = text;
      Prism.highlightElement(codeEl.nativeElement);
    });
  }
}

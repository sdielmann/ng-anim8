import { Component, computed, signal } from '@angular/core';
import { CollapseComponent } from 'ng-anim8';
import type { Duration, EasingName } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-collapse-section',
  standalone: true,
  imports: [CollapseComponent, CodeSnippetComponent],
  templateUrl: './collapse-section.component.html',
})
export class CollapseSectionComponent {
  show       = signal(false);
  duration   = signal<Duration>('normal');
  easing     = signal<EasingName>('ease-in-out');
  fade       = signal(false);
  horizontal = signal(false);

  readonly durations: Duration[]  = ['fast', 'normal', 'slow'];
  readonly easings: EasingName[] = ['ease-in-out', 'spring', 'bounce', 'snappy'];

  readonly code = computed(() => {
    const lines = ['  <anim8-collapse'];
    lines.push(`    duration="${this.duration()}"`);
    lines.push(`    easing="${this.easing()}"`);
    if (this.fade())       lines.push('    fade');
    if (this.horizontal()) lines.push('    horizontal');
    lines.push('  >');
    lines.push('    <div>Your content</div>');
    lines.push('  </anim8-collapse>');
    return `@if (show()) {\n${lines.join('\n')}\n}`;
  });
}

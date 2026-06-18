import { Component, computed, signal } from '@angular/core';
import { GrowComponent } from 'ng-anim8';
import type { Duration } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-grow-section',
  standalone: true,
  imports: [GrowComponent, CodeSnippetComponent],
  templateUrl: './grow-section.component.html',
})
export class GrowSectionComponent {
  show     = signal(false);
  duration = signal<Duration>('normal');
  minScale = signal(0.75);

  readonly durations: Duration[] = ['fast', 'normal', 'slow'];
  readonly scales: number[] = [0.5, 0.75, 0.9];

  readonly code = computed(() => `@if (show()) {
  <anim8-grow duration="${this.duration()}" [minScale]="${this.minScale()}">
    <div>Your content</div>
  </anim8-grow>
}`);
}

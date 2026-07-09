import { Component, computed, signal } from '@angular/core';
import { GrowComponent } from 'ng-anim8';
import type { Duration, EasingName } from 'ng-anim8';
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
  easing   = signal<EasingName>('ease-in-out');
  minScale = signal(0.75);

  readonly durations: Duration[]  = ['fast', 'normal', 'slow'];
  readonly easings: EasingName[] = ['ease-in-out', 'spring', 'bounce', 'snappy'];
  readonly scales: number[]       = [0.5, 0.75, 0.9];

  readonly code = computed(() => `@if (show()) {
  <anim8-grow duration="${this.duration()}" easing="${this.easing()}" [minScale]="${this.minScale()}">
    <div>Your content</div>
  </anim8-grow>
}`);
}

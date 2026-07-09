import { Component, computed, signal } from '@angular/core';
import { FlyComponent } from 'ng-anim8';
import type { Duration, EasingName, FlyDirection } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-fly-section',
  standalone: true,
  imports: [FlyComponent, CodeSnippetComponent],
  templateUrl: './fly-section.component.html',
})
export class FlySectionComponent {
  show      = signal(false);
  direction = signal<FlyDirection>('up');
  distance  = signal('100%');
  duration  = signal<Duration>('normal');
  easing    = signal<EasingName>('ease-in-out');

  readonly directions: FlyDirection[] = ['up', 'down', 'left', 'right'];
  readonly distances: string[]        = ['50%', '100%', '200px', '500px'];
  readonly durations: Duration[]      = ['fast', 'normal', 'slow'];
  readonly easings: EasingName[]      = ['ease-in-out', 'spring', 'bounce', 'snappy'];

  readonly code = computed(() => `@if (show()) {
  <anim8-fly
    direction="${this.direction()}"
    distance="${this.distance()}"
    duration="${this.duration()}"
    easing="${this.easing()}"
  >
    <div>Your content</div>
  </anim8-fly>
}`);
}

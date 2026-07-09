import { Component, computed, signal } from '@angular/core';
import { SlideComponent } from 'ng-anim8';
import type { Duration, EasingName, SlideDirection } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-slide-section',
  standalone: true,
  imports: [SlideComponent, CodeSnippetComponent],
  templateUrl: './slide-section.component.html',
})
export class SlideSectionComponent {
  show      = signal(false);
  duration  = signal<Duration>('normal');
  easing    = signal<EasingName>('ease-in-out');
  direction = signal<SlideDirection>('up');
  distance  = signal<number | string>(20);

  readonly durations: Duration[]              = ['fast', 'normal', 'slow'];
  readonly easings: EasingName[]              = ['ease-in-out', 'spring', 'bounce', 'snappy'];
  readonly directions: SlideDirection[]       = ['up', 'down', 'left', 'right'];
  readonly distances: (number | string)[]     = [10, 20, 40, '100%', '200%'];
  readonly directionLabels: Record<SlideDirection, string> = {
    up: '↑ up',
    down: '↓ down',
    left: '← left',
    right: '→ right',
  };

  readonly isNumber = (v: number | string): v is number => typeof v === 'number';

  readonly code = computed(() => `@if (show()) {
  <anim8-slide
    direction="${this.direction()}"
    distance="${this.distance()}"
    duration="${this.duration()}"
    easing="${this.easing()}">
    <div>Your content</div>
  </anim8-slide>
}`);
}

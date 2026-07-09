import { Component, computed, signal } from '@angular/core';
import { ZoomComponent } from 'ng-anim8';
import type { Duration, EasingName } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-zoom-section',
  standalone: true,
  imports: [ZoomComponent, CodeSnippetComponent],
  templateUrl: './zoom-section.component.html',
})
export class ZoomSectionComponent {
  show     = signal(false);
  duration = signal<Duration>('normal');
  easing   = signal<EasingName>('ease-in-out');

  readonly durations: Duration[]  = ['fast', 'normal', 'slow'];
  readonly easings: EasingName[] = ['ease-in-out', 'spring', 'bounce', 'snappy'];

  readonly code = computed(() => `@if (show()) {
  <anim8-zoom duration="${this.duration()}" easing="${this.easing()}">
    <div>Your content</div>
  </anim8-zoom>
}`);
}

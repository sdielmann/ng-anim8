import { Component, computed, signal } from '@angular/core';
import { BlurComponent } from 'ng-anim8';
import type { Duration, EasingName } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-blur-section',
  standalone: true,
  imports: [BlurComponent, CodeSnippetComponent],
  templateUrl: './blur-section.component.html',
})
export class BlurSectionComponent {
  show       = signal(false);
  blurAmount = signal(4);
  duration   = signal<Duration>('normal');
  easing     = signal<EasingName>('ease-in-out');

  readonly durations: Duration[]  = ['fast', 'normal', 'slow'];
  readonly easings: EasingName[]  = ['ease-in-out', 'spring', 'bounce', 'snappy'];
  readonly blurAmounts: number[]  = [2, 4, 8, 16];

  readonly code = computed(() => `@if (show()) {
  <anim8-blur
    [blurAmount]="${this.blurAmount()}"
    duration="${this.duration()}"
    easing="${this.easing()}"
  >
    <div>Your content</div>
  </anim8-blur>
}`);
}

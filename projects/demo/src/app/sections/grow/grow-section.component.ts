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

  readonly durations: Duration[] = ['fast', 'normal', 'slow'];

  code = computed(() => `<anim8-grow
  [show]="visible()"
  duration="${this.duration()}">
  <div>Your content</div>
</anim8-grow>`);
}

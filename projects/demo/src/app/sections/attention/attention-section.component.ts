import { Component, ViewChild, computed, signal } from '@angular/core';
import { Anim8AttentionDirective } from 'ng-anim8';
import type { AttentionVariant, Duration } from 'ng-anim8';
import { CodeSnippetComponent } from '../../shared/code-snippet/code-snippet.component';

@Component({
  selector: 'app-attention-section',
  standalone: true,
  imports: [Anim8AttentionDirective, CodeSnippetComponent],
  templateUrl: './attention-section.component.html',
})
export class AttentionSectionComponent {
  @ViewChild('box') box!: Anim8AttentionDirective;

  variant  = signal<AttentionVariant>('shake');
  duration = signal<Duration>('normal');

  readonly variants: AttentionVariant[] = ['shake', 'pulse', 'bounce', 'wiggle'];
  readonly durations: Duration[]        = ['fast', 'normal', 'slow'];

  play(): void {
    this.box.trigger();
  }

  readonly code = computed(() => `<div [anim8Attention]="'${this.variant()}'"
     #el="anim8Attention"
     duration="${this.duration()}">
  Your element
</div>

<!-- trigger imperatively -->
<button (click)="el.trigger()">Play</button>`);
}

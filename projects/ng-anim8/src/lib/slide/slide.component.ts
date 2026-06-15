import { AfterViewInit, Component, TemplateRef, ViewContainerRef, computed, input, viewChild } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

export type SlideDirection = 'up' | 'down' | 'left' | 'right';

@Component({
  selector: 'ng8-slide',
  standalone: true,
  template: `
    <ng-container #anchor />
    <ng-template #tpl>
      <div [class]="elementClass()">
        <ng-content />
      </div>
    </ng-template>
  `,
  styleUrl: './slide.component.scss',
})
export class SlideComponent extends AnimationBase implements AfterViewInit {
  protected override readonly visibleClass = 'ng8-slide--visible';

  direction = input<SlideDirection>('up');

  // Computes both the base class and direction class together to avoid
  // [class] binding clobbering a static class= attribute.
  protected elementClass = computed(() => `ng8-slide ng8-slide--${this.direction()}`);

  private anchor = viewChild.required<ViewContainerRef>('anchor', { read: ViewContainerRef });
  private tpl    = viewChild.required<TemplateRef<unknown>>('tpl');

  ngAfterViewInit(): void {
    this.initAnimation(this.anchor(), this.tpl());
  }
}

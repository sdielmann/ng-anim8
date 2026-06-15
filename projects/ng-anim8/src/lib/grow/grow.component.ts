import { AfterViewInit, Component, TemplateRef, ViewContainerRef, viewChild } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

@Component({
  selector: 'ng8-grow',
  standalone: true,
  template: `
    <ng-container #anchor />
    <ng-template #tpl>
      <div class="ng8-grow">
        <ng-content />
      </div>
    </ng-template>
  `,
  styleUrl: './grow.component.scss',
})
export class GrowComponent extends AnimationBase implements AfterViewInit {
  protected override readonly visibleClass = 'ng8-grow--visible';

  private anchor = viewChild.required<ViewContainerRef>('anchor', { read: ViewContainerRef });
  private tpl    = viewChild.required<TemplateRef<unknown>>('tpl');

  ngAfterViewInit(): void {
    this.initAnimation(this.anchor(), this.tpl());
  }
}

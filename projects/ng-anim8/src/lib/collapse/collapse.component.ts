import { AfterViewInit, Component, TemplateRef, ViewContainerRef, viewChild } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

@Component({
  selector: 'ng8-collapse',
  standalone: true,
  template: `
    <ng-container #anchor />
    <ng-template #tpl>
      <div class="ng8-collapse">
        <div class="ng8-collapse__inner">
          <ng-content />
        </div>
      </div>
    </ng-template>
  `,
  styleUrl: './collapse.component.scss',
})
export class CollapseComponent extends AnimationBase implements AfterViewInit {
  protected override readonly visibleClass = 'ng8-collapse--visible';

  private anchor = viewChild.required<ViewContainerRef>('anchor', { read: ViewContainerRef });
  private tpl    = viewChild.required<TemplateRef<unknown>>('tpl');

  ngAfterViewInit(): void {
    this.initAnimation(this.anchor(), this.tpl());
  }
}

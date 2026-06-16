import { AfterViewInit, Component, TemplateRef, ViewContainerRef, viewChild } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

@Component({
  selector: 'anim8-grow',
  standalone: true,
  template: `
    <ng-container #anchor />
    <ng-template #tpl>
      <div class="anim8-grow">
        <ng-content />
      </div>
    </ng-template>
  `,
  styleUrl: './grow.component.scss',
})
export class GrowComponent extends AnimationBase implements AfterViewInit {
  protected override readonly visibleClass = 'anim8-grow--visible';

  private anchorRef = viewChild.required<string, ViewContainerRef>('anchor', { read: ViewContainerRef });
  private tplRef    = viewChild.required<TemplateRef<unknown>>('tpl');

  ngAfterViewInit(): void {
    this.initAnimation(this.anchorRef(), this.tplRef());
  }
}

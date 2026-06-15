import { AfterViewInit, Component, TemplateRef, ViewContainerRef, viewChild } from '@angular/core';
import { AnimationBase } from '../core/animation-base.directive';

@Component({
  selector: 'ng8-fade',
  standalone: true,
  template: `
    <ng-container #anchor />
    <ng-template #tpl>
      <div class="ng8-fade">
        <ng-content />
      </div>
    </ng-template>
  `,
  styleUrl: './fade.component.scss',
})
export class FadeComponent extends AnimationBase implements AfterViewInit {
  protected override readonly visibleClass = 'ng8-fade--visible';

  private anchor = viewChild.required<ViewContainerRef>('anchor', { read: ViewContainerRef });
  private tpl    = viewChild.required<TemplateRef<unknown>>('tpl');

  ngAfterViewInit(): void {
    this.initAnimation(this.anchor(), this.tpl());
  }
}

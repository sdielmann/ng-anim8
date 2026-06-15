import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  inject,
  input,
} from '@angular/core';
import { injectIsBrowser } from '../core/platform';

@Component({
  selector: 'ng8-stagger',
  standalone: true,
  template: `<ng-content />`,
  styleUrl: './stagger.component.scss',
  host: { class: 'ng8-stagger' },
})
export class StaggerComponent implements AfterViewInit, OnDestroy {
  gap        = input<number>(50);
  enterClass = input<string>('ng8-stagger-enter');

  private readonly el        = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly isBrowser = injectIsBrowser();
  private observer: MutationObserver | null = null;

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const host = this.el.nativeElement;
    this.applyDelays(Array.from(host.children) as HTMLElement[]);

    this.observer = new MutationObserver((mutations) => {
      const added: HTMLElement[] = [];
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (n.nodeType === Node.ELEMENT_NODE) added.push(n as HTMLElement);
        });
      }
      if (added.length) this.applyDelays(added);
    });

    this.observer.observe(host, { childList: true });
  }

  private applyDelays(newChildren: HTMLElement[]): void {
    const allChildren = Array.from(this.el.nativeElement.children) as HTMLElement[];
    const gap         = this.gap();
    const cls         = this.enterClass();

    for (const child of newChildren) {
      const index = allChildren.indexOf(child);
      child.style.animationDelay = `${index * gap}ms`;
      child.classList.add(cls);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

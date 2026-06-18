import { Component, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { FadeSectionComponent }     from '../sections/fade/fade-section.component';
import { SlideSectionComponent }    from '../sections/slide/slide-section.component';
import { CollapseSectionComponent } from '../sections/collapse/collapse-section.component';
import { GrowSectionComponent }     from '../sections/grow/grow-section.component';
import { ZoomSectionComponent }     from '../sections/zoom/zoom-section.component';
import { StaggerSectionComponent }  from '../sections/stagger/stagger-section.component';
import { EasingSectionComponent }   from '../sections/easing/easing-section.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    FadeSectionComponent,
    SlideSectionComponent,
    CollapseSectionComponent,
    GrowSectionComponent,
    ZoomSectionComponent,
    StaggerSectionComponent,
    EasingSectionComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements AfterViewInit, OnDestroy {
  activeSection = signal<string>('fade');
  copied        = signal(false);

  private observer: IntersectionObserver | null = null;

  readonly navItems = [
    { id: 'fade',     label: 'Fade' },
    { id: 'slide',    label: 'Slide' },
    { id: 'collapse', label: 'Collapse' },
    { id: 'grow',     label: 'Grow' },
    { id: 'zoom',     label: 'Zoom' },
    { id: 'stagger',  label: 'Stagger' },
    { id: 'easing',   label: 'Easing' },
  ];

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-10% 0px -80% 0px' },
    );

    document.querySelectorAll('section.anim-section[id]').forEach(el => {
      this.observer!.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  copyInstall(): void {
    navigator.clipboard?.writeText('npm install ng-anim8').then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }).catch(() => {});
  }
}

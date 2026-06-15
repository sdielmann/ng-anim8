import { Component, signal } from '@angular/core';
import {
  CollapseComponent,
  FadeComponent,
  GrowComponent,
  SlideComponent,
  StaggerComponent,
  ZoomComponent,
} from 'ng-anim8';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CollapseComponent,
    FadeComponent,
    GrowComponent,
    SlideComponent,
    StaggerComponent,
    ZoomComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  fadeSig     = signal(false);
  slideSig    = signal(false);
  collapseSig = signal(false);
  growSig     = signal(false);
  zoomSig     = signal(false);
  items       = signal<string[]>([]);

  addItem(): void {
    this.items.update((list) => [...list, `Item ${list.length + 1}`]);
  }
}

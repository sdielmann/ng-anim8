import { NgModule } from '@angular/core';
import { CollapseComponent } from './lib/collapse/collapse.component';
import { FadeComponent }     from './lib/fade/fade.component';
import { GrowComponent }     from './lib/grow/grow.component';
import { SlideComponent }    from './lib/slide/slide.component';
import { StaggerComponent }  from './lib/stagger/stagger.component';
import { ZoomComponent }     from './lib/zoom/zoom.component';

const COMPONENTS = [
  CollapseComponent,
  FadeComponent,
  GrowComponent,
  SlideComponent,
  StaggerComponent,
  ZoomComponent,
];

@NgModule({ imports: COMPONENTS, exports: COMPONENTS })
export class NgAnim8Module {}

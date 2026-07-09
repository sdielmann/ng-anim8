import { Anim8AttentionDirective } from './lib/attention/attention.component';
import { NgModule } from '@angular/core';
import { BlurComponent }     from './lib/blur/blur.component';
import { CollapseComponent } from './lib/collapse/collapse.component';
import { FadeComponent }     from './lib/fade/fade.component';
import { GrowComponent }     from './lib/grow/grow.component';
import { SlideComponent }    from './lib/slide/slide.component';
import { ZoomComponent }     from './lib/zoom/zoom.component';

const COMPONENTS = [
  Anim8AttentionDirective,
  BlurComponent,
  CollapseComponent,
  FadeComponent,
  GrowComponent,
  SlideComponent,
  ZoomComponent,
];

@NgModule({ imports: COMPONENTS, exports: COMPONENTS })
export class NgAnim8Module {}

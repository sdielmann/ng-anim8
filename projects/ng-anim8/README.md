# ng-anim8

Declarative animation components for Angular 20+. Wrap any content in an animation component, pass `[show]`, done.

## Installation

```bash
npm install ng-anim8
```

## Components

| Component | Effect |
|---|---|
| `<ng8-fade>` | Opacity 0 → 1 |
| `<ng8-slide>` | Translate + opacity (direction: up/down/left/right) |
| `<ng8-collapse>` | Height 0 → auto (CSS grid trick) |
| `<ng8-grow>` | Scale 0.75 → 1 + opacity |
| `<ng8-zoom>` | Scale 0 → 1 |
| `<ng8-stagger>` | Staggered animation-delay on list children |

## Usage

```typescript
import { FadeComponent } from 'ng-anim8';

@Component({
  imports: [FadeComponent],
  template: `
    <ng8-fade [show]="isVisible">
      <p>Hello world</p>
    </ng8-fade>
  `
})
export class MyComponent {
  isVisible = signal(false);
}
```

## Shared Inputs

All components (except `ng8-stagger`) accept:

```html
<ng8-fade
  [show]="isVisible"
  duration="fast"
  easing="ease-in-out"
  [delay]="100"
  keepMounted
  (enterStart)="onEnterStart()"
  (enterDone)="onEnterDone()"
  (leaveStart)="onLeaveStart()"
  (leaveDone)="onLeaveDone()"
>
  Content
</ng8-fade>
```

| Input | Type | Default | Description |
|---|---|---|---|
| `show` | `boolean` | `false` | Show/hide the content |
| `duration` | `'fast' \| 'normal' \| 'slow' \| number` | `'normal'` | Animation duration (ms) |
| `easing` | `string` | `'ease-in-out'` | CSS easing function |
| `delay` | `number` | `0` | Delay before animation starts (ms) |
| `keepMounted` | `boolean attribute` | `false` | Keep content in DOM when hidden (use for tabs, preserved state) |

## Slide Direction

```html
<ng8-slide [show]="isOpen" direction="down">...</ng8-slide>
```

Directions: `up` (default), `down`, `left`, `right`

## Stagger

```html
<ng8-stagger [gap]="75" enterClass="my-enter">
  @for (item of items; track item.id) {
    <div>{{ item.name }}</div>
  }
</ng8-stagger>
```

Applies incrementally increasing `animation-delay` to direct children. Children need their own CSS animation.

## Requirements

- Angular 20+
- No dependency on `@angular/animations`
- SSR safe

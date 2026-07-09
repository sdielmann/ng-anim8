# ng-anim8

[![npm version](https://img.shields.io/npm/v/ng-anim8.svg)](https://www.npmjs.com/package/ng-anim8)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/ng-anim8)
[![CI](https://github.com/DielmannConsulting/ng-anim8/actions/workflows/ci.yml/badge.svg)](https://github.com/sdielmann/ng-anim8/actions/workflows/ci.yml)
![Endpoint Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fgist.githubusercontent.com%2Fsdielmann%2F2a4ee24be03aecd858b7bdf8fee71cb1%2Fraw%2Fng-anim8-cobertura-coverage.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Declarative animation components for Angular 20+. Wrap any content in a component, control visibility with `@if` — no `@angular/animations` required, SSR-safe.

- No dependency on `@angular/animations`
- Zoneless-compatible
- Tree-shakable (import individual components or the whole module)
- SSR-safe

**[Live Demo](https://sdielmann.github.io/ng-anim8/)**

---

## Installation

```bash
npm install ng-anim8
```

Peer dependencies: `@angular/core ^20.3.0` and `@angular/common ^20.3.0`.

---

## Quick Start

```typescript
import { Component, signal } from '@angular/core';
import { FadeComponent } from 'ng-anim8';

@Component({
  imports: [FadeComponent],
  template: `
    <button (click)="visible.set(!visible())">Toggle</button>

    @if (visible()) {
      <anim8-fade>
        <p>Hello, world!</p>
      </anim8-fade>
    }
  `,
})
export class AppComponent {
  visible = signal(false);
}
```

NgModule users can import `NgAnim8Module` once to get all five components.

```typescript
import { NgAnim8Module } from 'ng-anim8';

@NgModule({imports: [NgAnim8Module]})
export class AppModule {
}
```

---

## Components

| Component           | Selector           | Effect                              |
|---------------------|--------------------|-------------------------------------|
| `FadeComponent`     | `<anim8-fade>`     | Opacity 0 → 1                       |
| `SlideComponent`    | `<anim8-slide>`    | Translate + opacity (4 directions)  |
| `CollapseComponent` | `<anim8-collapse>` | Height (or width) 0 → auto          |
| `GrowComponent`     | `<anim8-grow>`     | Scale (configurable) → 1 + opacity  |
| `ZoomComponent`     | `<anim8-zoom>`     | Scale 0 → 1                         |

### Fade

```html
@if (isOpen()) {
  <anim8-fade>
    <p>Fades in and out smoothly</p>
  </anim8-fade>
}
```

No component-specific inputs. Accepts [shared inputs](#shared-inputs) only.

### Slide

Translates from an offset in the given direction while fading. Default direction is `up`.

```html
@if (isOpen()) {
  <anim8-slide direction="down">
    <p>Slides in from above, leaves downward</p>
  </anim8-slide>
}
```

| Input       | Type                                   | Default | Description                  |
|-------------|----------------------------------------|---------|------------------------------|
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'`  | Slide direction              |
| `distance`  | `number`                               | `20`    | Translation offset in pixels |

### Collapse

Animates from height 0 to the content's natural height using the CSS grid trick — no JavaScript height measurement. Set `horizontal` to animate width instead.

```html
@if (isExpanded()) {
  <anim8-collapse>
    <p>Expands and collapses vertically</p>
  </anim8-collapse>
}
```

| Input        | Type      | Default | Description                                      |
|--------------|-----------|---------|--------------------------------------------------|
| `fade`       | `boolean` | `false` | Cross-fade opacity alongside the height animation |
| `horizontal` | `boolean` | `false` | Collapse width instead of height                 |

### Grow

```html
@if (isVisible()) {
  <anim8-grow>
    <p>Scales up from 75% while fading in</p>
  </anim8-grow>
}
```

| Input      | Type     | Default | Description                           |
|------------|----------|---------|---------------------------------------|
| `minScale` | `number` | `0.75`  | Starting scale for the grow animation |

### Zoom

```html
@if (isOpen()) {
  <anim8-zoom>
    <p>Scales from 0 to full size</p>
  </anim8-zoom>
}
```

No component-specific inputs. Accepts [shared inputs](#shared-inputs) only.

---

## Shared Inputs

All animation components accept:

| Input      | Type                                       | Default         | Description                                                                              |
|------------|--------------------------------------------|-----------------|------------------------------------------------------------------------------------------|
| `duration` | `'fast' \| 'normal' \| 'slow' \| number`  | `'normal'`      | Animation duration — `fast` = 150ms, `normal` = 300ms, `slow` = 500ms, or any ms value  |
| `easing`   | `EasingName \| string`                     | `'ease-in-out'` | Named preset (see table below) or any CSS easing / `cubic-bezier(…)` string             |
| `delay`    | `number`                                   | `0`             | Delay before the animation starts (ms)                                                   |

### Easing presets

| Name          | Value                                      |
|---------------|--------------------------------------------|
| `linear`      | `linear`                                   |
| `ease`        | `ease`                                     |
| `ease-in`     | `ease-in`                                  |
| `ease-out`    | `ease-out`                                 |
| `ease-in-out` | `ease-in-out`                              |
| `smooth`      | `cubic-bezier(0.25, 0.46, 0.45, 0.94)`    |
| `snappy`      | `cubic-bezier(0.4, 0, 0.2, 1)`            |
| `spring`      | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` |
| `elastic`     | `cubic-bezier(0.68, -0.55, 0.265, 1.55)`  |
| `bounce`      | `cubic-bezier(0.34, 1.56, 0.64, 1)`       |
| `decelerate`  | `cubic-bezier(0, 0, 0.2, 1)`              |
| `accelerate`  | `cubic-bezier(0.4, 0, 1, 1)`              |

```html
@if (isOpen()) {
  <anim8-slide
    direction="right"
    duration="fast"
    easing="spring"
    [delay]="150"
  >
    <nav>Sidebar</nav>
  </anim8-slide>
}
```

---

## Global Configuration

Use `provideAnim8` to set default values for all animation components across your application:

```typescript
import { provideAnim8 } from 'ng-anim8';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnim8({ duration: 'fast', easing: 'spring', delay: 0 }),
  ],
};
```

Per-component inputs always override global defaults.

---

## Requirements

- Angular 20+

---

## License

MIT © [Steffen Dielmann](https://github.com/sdielmann)

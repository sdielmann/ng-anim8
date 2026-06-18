# ng-anim8

[![npm version](https://img.shields.io/npm/v/ng-anim8.svg)](https://www.npmjs.com/package/ng-anim8)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/ng-anim8?cacheSeconds=86400&link=https%3A%2F%2Fbundlephobia.com%2Fpackage%2Fng-anim8)
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

NgModule users can import `NgAnim8Module` once to get all six components.

```typescript
import { NgAnim8Module } from 'ng-anim8';

@NgModule({imports: [NgAnim8Module]})
export class AppModule {
}
```

---

## Components

| Component           | Selector           | Effect                                 |
|---------------------|--------------------|----------------------------------------|
| `FadeComponent`     | `<anim8-fade>`     | Opacity 0 → 1                          |
| `SlideComponent`    | `<anim8-slide>`    | Translate + opacity (4 directions)     |
| `CollapseComponent` | `<anim8-collapse>` | Height 0 → auto                        |
| `GrowComponent`     | `<anim8-grow>`     | Scale (configurable) → 1 + opacity     |
| `ZoomComponent`     | `<anim8-zoom>`     | Scale 0 → 1                            |
| `StaggerComponent`  | `<anim8-stagger>`  | Staggered enter delay on list children |

### Fade

```html
@if (isOpen()) {
<anim8-fade>
  <p>Fades in and out smoothly</p>
</anim8-fade>
}
```

### Slide

Translates from a 20px offset in the given direction while fading. Default direction is `up`.

```html
@if (isOpen()) {
<anim8-slide direction="down">
  <p>Slides in from above, leaves downward</p>
</anim8-slide>
}
```

`direction`: `up` | `down` | `left` | `right`

### Collapse

Animates from height 0 to the content's natural height using the CSS grid trick — no JavaScript height measurement.

```html
@if (isExpanded()) {
<anim8-collapse>
  <p>Expands and collapses vertically</p>
</anim8-collapse>
}
```

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

### Stagger

Applies an incrementally increasing `animation-delay` to each direct child, then adds a CSS class to trigger their animation. Children define their own `@keyframes` — the built-in `anim8-stagger-enter` class provides a ready-made fade-up.

```html

<anim8-stagger [gap]="75" enterClass="anim8-stagger-enter">
  @for (item of items; track item.id) {
  <div>{{ item.name }}</div>
  }
</anim8-stagger>
```

| Input        | Type     | Default                 | Description                                            |
|--------------|----------|-------------------------|--------------------------------------------------------|
| `gap`        | `number` | `50`                    | Delay increment between children (ms)                  |
| `enterClass` | `string` | `'anim8-stagger-enter'` | CSS class added to each child to trigger its animation |

---

## Shared Inputs

All components except `<anim8-stagger>` accept:

| Input      | Type                                     | Default         | Description                                                                            |
|------------|------------------------------------------|-----------------|----------------------------------------------------------------------------------------|
| `duration` | `'fast' \| 'normal' \| 'slow' \| number` | `'normal'`      | Animation duration (`fast` = 150ms, `normal` = 300ms, `slow` = 500ms, or any ms value) |
| `easing`   | `string`                                 | `'ease-in-out'` | Any CSS easing function or `cubic-bezier(...)`                                         |
| `delay`    | `number`                                 | `0`             | Delay before the animation starts (ms)                                                 |

```html
@if (isOpen()) {
<anim8-slide
  direction="right"
  duration="fast"
  easing="cubic-bezier(0.4, 0, 0.2, 1)"
  [delay]="150"
>
  <nav>Sidebar</nav>
</anim8-slide>
}
```

---

## Requirements

- Angular 20+

---

## License

MIT © [Steffen Dielmann](https://github.com/sdielmann)

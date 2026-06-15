# ng-anim8 — Design Spec

**Date:** 2026-06-15
**Status:** Approved

---

## Overview

`ng-anim8` is an open-source Angular 20+ animation utility library. It provides a set of declarative, component-based animation wrappers modelled after MUI's transition components (`<Fade>`, `<Slide>`, etc.). The focus is on easy, ergonomic usage: wrap content in a component, pass a `[show]` binding, done.

**Goals:**
- Declarative, component-based API
- CSS-only animations; no runtime JS animation engine
- No dependency on `@angular/animations`
- SSR-safe
- Angular 20+ exclusively (signal inputs, standalone components)

---

## Technology Decisions

| Concern | Decision |
|---|---|
| Animation engine | CSS transitions/keyframes only (WAAPI reserved for future components if needed) |
| `@angular/animations` | Not used — deprecated |
| Angular version | 20+ peer dependency |
| Component style | Standalone components; convenience `NgModule` for bulk import |
| Reactivity | Angular `input()` — accepts both plain values and signals transparently |
| SSR | All DOM access guarded by `isPlatformBrowser()`; content renders without animation on the server |

---

## Project Structure

```
ng-anim8/
├── projects/
│   └── ng-anim8/                        # Library (built with ng-packagr)
│       ├── src/
│       │   ├── lib/
│       │   │   ├── core/                # Shared internals, not exported directly
│       │   │   │   ├── animation-base.component.ts
│       │   │   │   ├── duration.ts      # Preset resolution + type
│       │   │   │   ├── easing.ts        # Easing constants
│       │   │   │   └── platform.ts      # isPlatformBrowser helper
│       │   │   ├── fade/
│       │   │   │   ├── fade.component.ts
│       │   │   │   └── fade.component.css
│       │   │   ├── slide/
│       │   │   ├── collapse/
│       │   │   ├── grow/
│       │   │   ├── zoom/
│       │   │   └── stagger/
│       │   ├── index.ts                 # Public API barrel
│       │   └── ng-anim8.module.ts       # Convenience NgModule
│       └── ng-package.json
└── projects/
    └── demo/                            # Standalone Angular app for development and docs
```

Each animation folder contains exactly one standalone component and its co-located stylesheet. There are no cross-component dependencies. This structure is deliberately flat to allow each folder to become a secondary entry point (`ng-anim8/fade`, etc.) in a future release by adding a `ng-package.json` per folder.

---

## Core Abstractions

### `AnimationBaseComponent` (abstract)

All animation components extend this abstract base. It owns:
- Input declarations shared by every component
- DOM mount/unmount logic (`ViewContainerRef` + `<ng-template>`)
- `display: none` toggling for `keepMounted` mode
- SSR guard
- Lifecycle output emission

#### Shared Inputs

```ts
show        = input<boolean>(false)
duration    = input<Duration>('normal')         // 'fast' | 'normal' | 'slow' | number (ms)
easing      = input<string>('ease-in-out')      // any valid CSS easing or WAAPI easing string
delay       = input<number>(0)                  // ms delay before animation starts
keepMounted = input(false, { transform: booleanAttribute })
```

`keepMounted` uses Angular's `booleanAttribute` transform so it works as a plain HTML attribute:
```html
<ng8-fade keepMounted [show]="isVisible">...</ng8-fade>
<!-- equivalent to [keepMounted]="true" -->
```

#### Shared Outputs

```ts
enterStart = output<void>()
enterDone  = output<void>()
leaveStart = output<void>()
leaveDone  = output<void>()
```

#### Duration Presets

```ts
export type Duration = 'fast' | 'normal' | 'slow' | number;

export const DURATION_MAP: Record<string, number> = {
  fast:   150,
  normal: 300,
  slow:   500,
};

export function resolveDuration(d: Duration): number {
  return typeof d === 'number' ? d : DURATION_MAP[d];
}
```

#### DOM Strategy

The base component renders an `<ng-template>` for the projected content and manages visibility via one of two strategies, chosen per-instance at runtime based on `keepMounted`:

| `keepMounted` | Hidden behaviour | Implementation |
|---|---|---|
| `false` (default) | Removed from DOM | `ViewContainerRef.clear()` after leave animation |
| `true` | Stays in DOM | `display: none` applied to host wrapper |

On initial render when `show` is `false` and `keepMounted` is `false`, the content is never mounted — no layout cost at all.

#### SSR Behaviour

On the server (`isPlatformBrowser()` returns `false`):
- No CSS classes or WAAPI calls are applied
- If `show` is `true`, content renders immediately without animation
- If `show` is `false` and `keepMounted` is `false`, content is not rendered (consistent with browser behaviour)
- If `show` is `false` and `keepMounted` is `true`, content renders but is hidden via `display: none`

---

## Animation Components

### `<ng8-fade>`

Animates `opacity` between 0 and 1.

**Engine:** CSS transition on `opacity`

**Template structure:**
```html
<div class="ng8-fade" [class.ng8-fade--visible]="isVisible">
  <ng-content />
</div>
```

**No additional inputs.**

---

### `<ng8-slide>`

Animates `transform: translate` combined with `opacity`.

**Engine:** CSS transition on `transform` and `opacity`

**Additional input:**
```ts
direction = input<'up' | 'down' | 'left' | 'right'>('up')
```

The component maps direction to an initial `translateX`/`translateY` offset (e.g. `up` → `translateY(20px)` collapsed to `translateY(0)` on enter).

---

### `<ng8-collapse>`

Animates height from 0 to the content's natural height using the CSS grid trick. This avoids WAAPI and the need to read `scrollHeight` in JS.

**Engine:** CSS transition on `grid-template-rows`

**Template structure:**
```html
<!-- outer: grid container -->
<div class="ng8-collapse" [class.ng8-collapse--open]="isVisible">
  <!-- inner: content wrapper with min-height: 0 -->
  <div class="ng8-collapse__content">
    <ng-content />
  </div>
</div>
```

**CSS:**
```css
.ng8-collapse {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows var(--ng8-duration) var(--ng8-easing);
}
.ng8-collapse--open {
  grid-template-rows: 1fr;
}
.ng8-collapse__content {
  min-height: 0;
  overflow: hidden;
}
```

CSS custom properties (`--ng8-duration`, `--ng8-easing`) are set on the host element by the component from the resolved `duration` and `easing` inputs. This pattern is used by all components to pass timing values to CSS without inline styles on the content.

**No additional inputs.**

---

### `<ng8-grow>`

Animates `transform: scale` from a small value (e.g. `0.75`) to `1`, combined with `opacity`.

**Engine:** CSS transition on `transform` and `opacity`

**No additional inputs.**

---

### `<ng8-zoom>`

Animates `transform: scale` from `0` to `1`. Distinct from Grow in that it starts from nothing and has no opacity fade.

**Engine:** CSS transition on `transform`

**No additional inputs.**

---

### `<ng8-stagger>`

Wraps a dynamic list and applies incrementally increasing `animation-delay` to each direct child so they animate in one after another. Does not use `[show]`. Observes child additions/removals via `MutationObserver`.

**Engine:** CSS `animation-delay` per child (children are responsible for their own animation; `ng8-stagger` only sets the delay)

**Inputs:**
```ts
gap       = input<number>(50)               // ms between each child's animation start
entering  = input<string>('ng8-stagger-enter')  // CSS animation class applied on enter
```

**Usage:**
```html
<ng8-stagger [gap]="75">
  @for (item of items; track item.id) {
    <div class="my-item">{{ item.name }}</div>
  }
</ng8-stagger>
```

The component sets `animation-delay` as an inline style on each child (`child.style.animationDelay`). The consumer provides the CSS animation (or uses a utility class from the library).

**Does not extend `AnimationBaseComponent`** — it has a different role and no `show`/`keepMounted` concept.

---

## Public API

### Barrel (`index.ts`)

```ts
export { FadeComponent }     from './lib/fade/fade.component';
export { SlideComponent }    from './lib/slide/slide.component';
export { CollapseComponent } from './lib/collapse/collapse.component';
export { GrowComponent }     from './lib/grow/grow.component';
export { ZoomComponent }     from './lib/zoom/zoom.component';
export { StaggerComponent }  from './lib/stagger/stagger.component';
export { NgAnim8Module }     from './ng-anim8.module';
export type { Duration }     from './lib/core/duration';
```

### Convenience Module (`ng-anim8.module.ts`)

```ts
@NgModule({
  imports: [
    FadeComponent,
    SlideComponent,
    CollapseComponent,
    GrowComponent,
    ZoomComponent,
    StaggerComponent,
  ],
  exports: [
    FadeComponent,
    SlideComponent,
    CollapseComponent,
    GrowComponent,
    ZoomComponent,
    StaggerComponent,
  ],
})
export class NgAnim8Module {}
```

### Import Patterns

```ts
// Single component (tree-shakeable)
import { FadeComponent } from 'ng-anim8';

// All components at once
import { NgAnim8Module } from 'ng-anim8';
```

---

## Usage Examples

**Basic fade:**
```html
<ng8-fade [show]="isVisible">
  <p>Hello world</p>
</ng8-fade>
```

**Slide with direction and speed:**
```html
<ng8-slide [show]="menuOpen" direction="down" duration="fast">
  <nav>Menu</nav>
</ng8-slide>
```

**Collapse panel:**
```html
<ng8-collapse [show]="expanded" duration="normal">
  <p>Expanded content here</p>
</ng8-collapse>
```

**Keep content mounted (e.g. a tab panel to preserve state):**
```html
<ng8-fade [show]="activeTab === 'profile'" keepMounted>
  <app-profile />
</ng8-fade>
```

**With explicit duration in ms:**
```html
<ng8-zoom [show]="show" [duration]="450" easing="cubic-bezier(0.34, 1.56, 0.64, 1)">
  <app-modal />
</ng8-zoom>
```

**Listening to lifecycle events:**
```html
<ng8-grow
  [show]="show"
  (enterStart)="onEnterStart()"
  (enterDone)="onEnterDone()"
  (leaveDone)="cleanup()"
>
  <app-tooltip />
</ng8-grow>
```

**Staggered list:**
```html
<ng8-stagger [gap]="50">
  @for (item of items; track item.id) {
    <div class="card">{{ item.name }}</div>
  }
</ng8-stagger>
```

---

## Out of Scope (v1)

- Secondary entry points per component (structure supports it, not implemented)
- WAAPI-based components
- Keyframe animation helpers
- `*ng8If` structural directive
- Accessibility helpers (`prefers-reduced-motion` media query support) — planned for v1.1
- Angular CDK dependency

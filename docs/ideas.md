# Feature Ideas

## New Components

- **`<anim8-flip>`** — 3D card flip (rotateY/rotateX). Inputs: `direction: 'horizontal' | 'vertical'`, `perspective` (px, default `800`).
- **`<anim8-blur>`** — Fade + `filter: blur()` on enter/leave. Input: `blurAmount` (px, default `4`). Good for modals and overlays.
- **`<anim8-fly>`** — Like `<anim8-slide>` but with larger, configurable off-screen translation. Inputs: `direction`, `distance` (px or `%`). For dramatic panel transitions.

## Enhancements to Existing Components

- **`<anim8-slide>` — `distance` input** — Expose the hardcoded 20px translation as a CSS var (`--anim8-slide-distance`) and an input. Much more flexible.
- **`<anim8-slide>` — `fade: boolean`** — Opt-out of the opacity part of the slide animation (currently always on). Default `true`.
- **`<anim8-collapse>` — `horizontal: boolean`** — Animate `grid-template-columns: 0fr → 1fr` instead of rows. For side panels and expandable sidebars.
- **Separate enter/leave timing on `AnimationBase`** — `enterDuration`, `leaveDuration`, `enterEasing`, `leaveEasing` inputs, falling back to `duration`/`easing`. Leaves often benefit from being faster than enters.

## New Directives

- **`[anim8Fade]`, `[anim8Slide]`, etc.** — Attribute directive variants of each component. Applies the same CSS vars and `animate.enter`/leave classes to the host element directly — no extra DOM node. Fixes breakage in `<table>`, flexbox nth-child selectors, and list semantics.
- **`[anim8Attention]`** — Imperative attention-seeker directive not tied to `@if`. Variants: `shake`, `pulse`, `bounce`, `wiggle`. Triggered via a `trigger()` method or signal input. For form validation errors, notification badges, confirmation feedback.

## New Capabilities

- **`provideAnim8()` / `ANIM8_CONFIG` token** — Library-wide defaults for duration and easing set once at app level. Pairs well with design tokens.
- **`prefers-reduced-motion` support** — Auto-detect via `matchMedia` or an `ANIM8_REDUCED_MOTION` token. Sets all durations to `0ms` or skips animations. Accessibility-critical.
- **`(animationDone)` output** — Expose the CSS `animationend` event as an Angular output. Useful for chaining actions after enter animations (e.g. focus a form field after a panel slides in).
- **`<anim8-stagger>` (revisit)** — Previous attempt used `MutationObserver` and was removed. A simpler approach: a parent directive that writes incremental `animation-delay` inline styles on children using `@for` index. More predictable.

## Lower Priority / Niche

- **`[anim8Crossfade]`** — Animate between two sibling elements transitioning in/out together (before/after swap).
- **Route animation integration** — Pre-built `RouteAnimations` export wiring Angular Router transitions to the library's components.
- **`<anim8-number>`** — Count-up animation for numeric value changes. Requires JS — different paradigm from the rest of the library.

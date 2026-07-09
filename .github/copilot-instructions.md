# Copilot Instructions

Angular 20 workspace with two projects:
- `projects/ng-anim8/` — the published library (built with `ng-packagr`)
- `projects/demo/` — development demo app (imports library via workspace path alias)

## Commands

Use `pnpm` as the package manager (enforced via `packageManager` field).

```bash
pnpm start                                       # Serve demo app at http://localhost:4200
pnpm ng build ng-anim8                           # Build library → dist/ng-anim8
pnpm test                                        # Run library tests (Jest)
pnpm test --testPathPattern="fade"               # Run a single test file
pnpm test:ci                                     # Tests with coverage (used in CI)
```

CI order: `test:ci` → `build ng-anim8`.

## Architecture

### Animation components

All five components (`FadeComponent`, `SlideComponent`, `CollapseComponent`, `GrowComponent`, `ZoomComponent`) extend `AnimationBase` in `projects/ng-anim8/src/lib/core/animation-base.directive.ts`.

`AnimationBase` is a thin `@Directive` that:
1. Accepts `duration`, `easing`, and `delay` inputs (with `ANIM8_CONFIG` injection-token fallbacks).
2. Sets `--anim8-duration`, `--anim8-easing`, and `--anim8-delay` CSS custom properties on the host via host bindings.
3. Does **nothing else** — no DOM manipulation, no class toggling, no events.

**Trigger mechanism**: Components declare `animate.enter` and `animate.leave` in their `host` metadata (Angular 20 built-in). Angular applies the named CSS class when the element enters/leaves the DOM via `@if`. Each class plays a `@keyframes` animation that reads the three CSS vars set by the base.

### Adding a new animation component

1. Extend `AnimationBase`.
2. Declare `animate.enter` / `animate.leave` in `host` with the right class names.
3. Write an SCSS file with the `@keyframes` and `--enter` / `--leave` classes (leave uses `animation-direction: reverse` on the same keyframe).
4. Export from `public-api.ts` and add to `NgAnim8Module`.

### CSS pattern

Every component's SCSS follows the same shape:

```scss
@keyframes anim8-<name> { from { … } to { … } }

.<name>--enter {
  animation: anim8-<name> var(--anim8-duration, 300ms) var(--anim8-easing, ease-in-out) var(--anim8-delay, 0ms) both;
}
.<name>--leave {
  animation: anim8-<name> var(--anim8-duration, 300ms) var(--anim8-easing, ease-in-out) var(--anim8-delay, 0ms) both reverse;
}
```

`CollapseComponent` uses `grid-template-rows: 0fr → 1fr` (the CSS grid height trick) and requires an inner wrapper `div` with `min-height: 0`.

### StaggerComponent

Does **not** extend `AnimationBase`. Uses a `MutationObserver` to assign incremental `animation-delay` values to direct children (controlled by `gap` input, default 50ms) and adds `enterClass` (default `'anim8-stagger-enter'`) to each child. On SSR, `MutationObserver` setup is skipped via `injectIsBrowser()` from `platform.ts`.

### Global config

`provideAnim8(config)` provides an `ANIM8_CONFIG` injection token. `AnimationBase` reads it as a fallback when an input is `undefined`. Per-component inputs always win.

### Public API

`projects/ng-anim8/src/public-api.ts` is the single barrel. Exported symbols: all five components, `NgAnim8Module`, `provideAnim8`, `ANIM8_CONFIG`, `EASINGS`, and the types `Duration`, `EasingName`, `SlideDirection`, `Anim8Config`.

## Testing

Tests use `@testing-library/angular` with the `render()` helper — **not** `TestBed` directly. Test files (`*.spec.ts`) live alongside their source files inside `src/`.

## Commits & Releases

Commits must follow Angular commit convention (`type(scope): message`), enforced by Husky on `commit-msg` via `@commitlint/config-angular`.

Release locally:

```bash
node scripts/release.mjs <version> [--tag latest|next|beta] [--dry-run]
```

This bumps both `package.json` files, generates `CHANGELOG.md`, builds the library, commits, tags, pushes, and publishes to npm.

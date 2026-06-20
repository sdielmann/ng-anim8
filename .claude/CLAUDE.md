# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `pnpm` as the package manager (enforced via `packageManager` field).

```bash
# Serve the demo app (http://localhost:4200)
pnpm start

# Build the library (output: dist/ng-anim8)
pnpm ng build ng-anim8

# Run library tests (Jest)
pnpm test

# Run a single test file
pnpm test --testPathPattern="fade"

# Run tests with coverage (used in CI)
pnpm test:ci
```

CI runs `test:ci` then `build ng-anim8` in that order.

## Architecture

This is an Angular 20 workspace with two projects:

- `projects/ng-anim8/` — the published library (`ng-packagr`)
- `projects/demo/` — demo app used during development (imports the library via workspace path)

### Library design

All animation components (Fade, Slide, Collapse, Grow, Zoom) extend `AnimationBase` in `projects/ng-anim8/src/lib/core/animation-base.directive.ts`. The base class is a thin `@Directive` that:

1. Accepts three inputs: `duration` (preset name or ms number), `easing` (preset name or raw CSS string), `delay` (ms number).
2. Sets three CSS custom properties on the host element via host bindings: `--anim8-duration`, `--anim8-easing`, `--anim8-delay`.

That's all it does — no DOM mounting, no class toggling, no event emitting.

**Animation trigger mechanism**: Components declare `animate.enter` and `animate.leave` in their `host` metadata (Angular 20 built-in). Angular automatically applies the named CSS class when the element enters or leaves the DOM via `@if`. Each class runs a `@keyframes` animation that reads the three CSS vars.

Each subclass only needs to:
- Extend `AnimationBase`
- Declare `animate.enter` and `animate.leave` in `host` with the appropriate class names
- Add an SCSS file with the keyframe animation and the enter/leave classes

SSR: `injectIsBrowser()` in `platform.ts` wraps `isPlatformBrowser()`. `StaggerComponent` uses it to skip `MutationObserver` setup on the server.

### Component inputs

| Component | Extra inputs |
|-----------|-------------|
| All | `duration` (`'fast'`\|`'normal'`\|`'slow'`\|`number`, default `'normal'`), `easing` (preset or CSS string, default `'ease-in-out'`), `delay` (ms, default `0`) |
| `SlideComponent` | `direction: 'up'|'down'|'left'|'right'` (default `'up'`) |
| `GrowComponent` | `minScale: number` (default `0.75`) — sets `--anim8-scale` CSS var |
| `CollapseComponent` | `fade: boolean` (default `false`) — adds fade-in/out to the height animation |

**Duration presets**: `fast`=150ms, `normal`=300ms, `slow`=500ms

**Named easing presets** (resolved to cubic-bezier): `smooth`, `snappy`, `spring`, `elastic`, `bounce`, `decelerate`, `accelerate` — plus all standard CSS values. Raw `cubic-bezier(…)` strings are passed through unchanged.

### CSS pattern

Each component's SCSS defines a `@keyframes` animation and two classes: `--enter` (plays forward) and `--leave` (plays the same animation `reverse`). The `animation:` shorthand always reads `var(--anim8-duration)`, `var(--anim8-easing)`, and `var(--anim8-delay)` with fallback defaults.

`CollapseComponent` uses `grid-template-rows: 0fr → 1fr` (the CSS grid height trick) and requires an inner div with `min-height: 0`.

### StaggerComponent

`StaggerComponent` is independent — it does not extend `AnimationBase`. It uses a `MutationObserver` to assign incremental `animation-delay` values (controlled by the `gap` input, default 50ms) to direct children and adds a CSS class (`enterClass` input, default `'anim8-stagger-enter'`). Children supply their own animation via SCSS.

### Public API

`projects/ng-anim8/src/public-api.ts` is the barrel. `NgAnim8Module` re-exports all components for NgModule-based consumers; standalone users import components directly.

Exported types: `Duration`, `EasingName`, `SlideDirection`.  
Exported constant: `EASINGS` (the full named-easing map).

## Testing

Tests use `@testing-library/angular` with the `render()` helper — not Angular's `TestBed` directly. Test files live alongside source in `src/`.

## Commits & Releases

Commits must follow Angular commit convention (`@commitlint/config-angular`), enforced by Husky on `commit-msg`.

Releases are triggered via GitHub Actions `workflow_dispatch` or locally with:

```bash
node scripts/release.mjs <version> [--tag latest|next|beta] [--dry-run]
```

The script bumps both `package.json` files, generates `CHANGELOG.md` (via `changelogen`), builds the library, commits, tags, pushes, and publishes to npm.

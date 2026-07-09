# Changelog

All notable changes to this project will be documented in this file.

## v0.0.7

[compare changes](https://github.com/sdielmann/ng-anim8/compare/v0.0.6...v0.0.7)

### 🚀 Enhancements

- **attention:** Add directive skeleton ([ef7b543](https://github.com/sdielmann/ng-anim8/commit/ef7b543))
- **attention:** Add imperative replay behavior ([895314a](https://github.com/sdielmann/ng-anim8/commit/895314a))
- **attention:** Add anim8Trigger input ([d24629c](https://github.com/sdielmann/ng-anim8/commit/d24629c))
- **attention:** Add duration input ([39a5be9](https://github.com/sdielmann/ng-anim8/commit/39a5be9))
- **demo:** Add attention section ([8e75ffb](https://github.com/sdielmann/ng-anim8/commit/8e75ffb))

### 🩹 Fixes

- **attention:** Export directive from public api ([0de1e57](https://github.com/sdielmann/ng-anim8/commit/0de1e57))
- **attention:** Wire stylesheet into metadata ([966772c](https://github.com/sdielmann/ng-anim8/commit/966772c))
- **attention:** Ignore bubbled animationend events ([aa6d501](https://github.com/sdielmann/ng-anim8/commit/aa6d501))
- **attention:** Use directive-hosted styles ([6d2ad47](https://github.com/sdielmann/ng-anim8/commit/6d2ad47))
- **attention:** Support inline hosts ([ad479a4](https://github.com/sdielmann/ng-anim8/commit/ad479a4))
- **attention:** Forward csp nonce to styles ([d525546](https://github.com/sdielmann/ng-anim8/commit/d525546))
- Fix animations not working on host elements ([e23f2a9](https://github.com/sdielmann/ng-anim8/commit/e23f2a9))

### 💅 Refactors

- **attention:** Use component with SCSS instead of directive ([b585ae8](https://github.com/sdielmann/ng-anim8/commit/b585ae8))
- **attention:** Rename directive files to component ([37aa802](https://github.com/sdielmann/ng-anim8/commit/37aa802))

### 📖 Documentation

- Add ideas.md and agent file ([8faeaf6](https://github.com/sdielmann/ng-anim8/commit/8faeaf6))
- **task-1:** Append fix report ([89c8751](https://github.com/sdielmann/ng-anim8/commit/89c8751))
- **sdd:** Append task 2 fix report ([4d06d1e](https://github.com/sdielmann/ng-anim8/commit/4d06d1e))
- **sdd:** Add task 5 report ([9d0d49f](https://github.com/sdielmann/ng-anim8/commit/9d0d49f))
- Add demo for the configurable easings ([6dc5b85](https://github.com/sdielmann/ng-anim8/commit/6dc5b85))

### 📦 Build

- Fixed repository URL in package.json ([6522292](https://github.com/sdielmann/ng-anim8/commit/6522292))

### ❤️ Contributors

- Steffen Dielmann <steffen@dielmann.consulting>

## v0.0.6

[compare changes](https://github.com/sdielmann/ng-anim8/compare/v0.0.5...v0.0.6)

### 🚀 Enhancements

- Improve type safety of durations and easings ([6f5e3d8](https://github.com/sdielmann/ng-anim8/commit/6f5e3d8))
- **collapse:** Add fade boolean input for opacity animation ([4275e81](https://github.com/sdielmann/ng-anim8/commit/4275e81))
- Remove stagger component (wasn't working as expected anyway) ([4c6520c](https://github.com/sdielmann/ng-anim8/commit/4c6520c))
- **slide:** Add new [distance] input ([863ccb9](https://github.com/sdielmann/ng-anim8/commit/863ccb9))
- **fade:** Add new [blur] input ([8d8a796](https://github.com/sdielmann/ng-anim8/commit/8d8a796))
- **collapse:** Add new [horizontal] input ([b197ae0](https://github.com/sdielmann/ng-anim8/commit/b197ae0))
- **provider:** Add new provideAnim8 function to configure defaults ([13a54bf](https://github.com/sdielmann/ng-anim8/commit/13a54bf))

### 📖 Documentation

- Improve docs in demo page ([576cdca](https://github.com/sdielmann/ng-anim8/commit/576cdca))
- Add badge for bundle size ([e4bddb9](https://github.com/sdielmann/ng-anim8/commit/e4bddb9))
- Update peerDependencies ([83c2e06](https://github.com/sdielmann/ng-anim8/commit/83c2e06))
- Remove stagger component ([5450e32](https://github.com/sdielmann/ng-anim8/commit/5450e32))
- Add size badge ([ad30128](https://github.com/sdielmann/ng-anim8/commit/ad30128))

### ✅ Tests

- Migrate tests to plain jest instead of angular-builder solution ([f605f84](https://github.com/sdielmann/ng-anim8/commit/f605f84))

### ❤️ Contributors

- Steffen Dielmann <steffen@dielmann.consulting>

## v0.0.5

[compare changes](https://github.com/sdielmann/ng-anim8/compare/v0.0.4...v0.0.5)

### 🚀 Enhancements

- **grow:** Add minScale input ([ca3b45c](https://github.com/sdielmann/ng-anim8/commit/ca3b45c))
- **easing:** Add EASINGS map, EasingName type, resolveEasing ([9c1af34](https://github.com/sdielmann/ng-anim8/commit/9c1af34))
- **easing:** Wire resolveEasing transform and export types ([38343d0](https://github.com/sdielmann/ng-anim8/commit/38343d0))
- **demo:** Add easing showcase section with animated circle tracks ([1897ea0](https://github.com/sdielmann/ng-anim8/commit/1897ea0))

### 🩹 Fixes

- **collapse:** Remove redundant grid-template-rows from base class ([f6b9527](https://github.com/sdielmann/ng-anim8/commit/f6b9527))
- **demo:** Animate dot return on easing showcase reset ([45cd449](https://github.com/sdielmann/ng-anim8/commit/45cd449))

### 💅 Refactors

- **core:** Replace orchestration with animate.enter/leave ([7fe0db6](https://github.com/sdielmann/ng-anim8/commit/7fe0db6))
- **fade:** Switch to keyframe animations and update tests ([256f00e](https://github.com/sdielmann/ng-anim8/commit/256f00e))
- **collapse:** Switch to keyframe animations and update tests ([0db2b85](https://github.com/sdielmann/ng-anim8/commit/0db2b85))
- **slide:** Switch to direction-keyed keyframes and update tests ([9b6e1ec](https://github.com/sdielmann/ng-anim8/commit/9b6e1ec))
- **grow:** Switch to keyframe animations and update tests ([53efcd1](https://github.com/sdielmann/ng-anim8/commit/53efcd1))
- **zoom:** Switch to keyframe animations and update tests ([ac6c524](https://github.com/sdielmann/ng-anim8/commit/ac6c524))
- Reduce markup and add animation classes on the host element ([90f1e3e](https://github.com/sdielmann/ng-anim8/commit/90f1e3e))

### 📖 Documentation

- Improve styling of the demo app ([37156b8](https://github.com/sdielmann/ng-anim8/commit/37156b8))
- Document breaking changes from animate.enter/leave refactor ([f5ff43b](https://github.com/sdielmann/ng-anim8/commit/f5ff43b))
- Add code coverage badge to README.md ([47a8957](https://github.com/sdielmann/ng-anim8/commit/47a8957))
- Update documentation ([b0f6aca](https://github.com/sdielmann/ng-anim8/commit/b0f6aca))

### 📦 Build

- Include the correct README.md in the package ([f594a17](https://github.com/sdielmann/ng-anim8/commit/f594a17))

### ✅ Tests

- Fix all unit tests ([57160a8](https://github.com/sdielmann/ng-anim8/commit/57160a8))

### 🤖 CI

- Integrate code coverage ([921feb9](https://github.com/sdielmann/ng-anim8/commit/921feb9))

### ❤️ Contributors

- Steffen Dielmann <steffen@dielmann.consulting>

## v0.0.4

### ⚠️ Breaking Changes

- **`keepMounted` input removed** — the `keepMounted` attribute on all animation components (`anim8-fade`, `anim8-collapse`, `anim8-slide`, `anim8-grow`, `anim8-zoom`) has been removed. The new `animate.leave`-based approach always removes the element from the DOM when hidden. Consumers using `keepMounted` should remove the attribute.
- **Lifecycle outputs removed** — `(enterStart)`, `(enterDone)`, `(leaveStart)`, and `(leaveDone)` event bindings have been removed from all animation components. Remove these bindings from any consumer templates.

### 🚀 Enhancements

- Add core utilities — Duration type, resolveDuration, DEFAULT_EASING, injectIsBrowser ([68f96ec](https://github.com/sdielmann/ng-anim8/commit/68f96ec))
- Add AnimationBase abstract directive with shared DOM/animation logic ([21e5349](https://github.com/sdielmann/ng-anim8/commit/21e5349))
- Add FadeComponent with opacity CSS transition ([f47c4a4](https://github.com/sdielmann/ng-anim8/commit/f47c4a4))
- Add SlideComponent with directional translate + opacity CSS transition ([9db958b](https://github.com/sdielmann/ng-anim8/commit/9db958b))
- Add CollapseComponent with CSS grid-template-rows height animation ([9678109](https://github.com/sdielmann/ng-anim8/commit/9678109))
- Add GrowComponent with scale + opacity CSS transition ([b38ac0f](https://github.com/sdielmann/ng-anim8/commit/b38ac0f))
- Add ZoomComponent with scale CSS transition ([424bdac](https://github.com/sdielmann/ng-anim8/commit/424bdac))
- Add StaggerComponent with MutationObserver-based animation-delay injection ([787e409](https://github.com/sdielmann/ng-anim8/commit/787e409))
- Wire up NgAnim8Module and public API barrel; library builds clean ([4d4b990](https://github.com/sdielmann/ng-anim8/commit/4d4b990))
- Add demo application showcasing all six ng-anim8 components ([0ef1a4e](https://github.com/sdielmann/ng-anim8/commit/0ef1a4e))
- **demo:** Add global CSS variables and shared section styles ([b8869ae](https://github.com/sdielmann/ng-anim8/commit/b8869ae))
- **demo:** Add CodeSnippetComponent with Prism.js highlighting ([e2d1ec0](https://github.com/sdielmann/ng-anim8/commit/e2d1ec0))
- **demo:** Add FadeSectionComponent ([3bf800a](https://github.com/sdielmann/ng-anim8/commit/3bf800a))
- **demo:** Add SlideSectionComponent ([8a40ce5](https://github.com/sdielmann/ng-anim8/commit/8a40ce5))
- **demo:** Add CollapseSectionComponent ([1e4fdf2](https://github.com/sdielmann/ng-anim8/commit/1e4fdf2))
- **demo:** Add GrowSectionComponent ([6fe42f7](https://github.com/sdielmann/ng-anim8/commit/6fe42f7))
- **demo:** Add ZoomSectionComponent ([daeb504](https://github.com/sdielmann/ng-anim8/commit/daeb504))
- **demo:** Add StaggerSectionComponent ([05a40b5](https://github.com/sdielmann/ng-anim8/commit/05a40b5))
- **demo:** Add LayoutComponent with sidebar, hero, and section wiring ([5838a51](https://github.com/sdielmann/ng-anim8/commit/5838a51))
- **demo:** Wire LayoutComponent into app root ([9058dae](https://github.com/sdielmann/ng-anim8/commit/9058dae))

### 🩹 Fixes

- Add jest-dom types to tsconfig.spec.json and align @angular-builders/jest to Angular 20 ([a9a6a54](https://github.com/sdielmann/ng-anim8/commit/a9a6a54))
- Tighten DURATION_MAP type to Record<StringDuration, number> and improve map test ([acb8313](https://github.com/sdielmann/ng-anim8/commit/acb8313))
- Improve AnimationBase — remove once:true from transitionend, safe getRootEl, clearTransition null-before-call ([0f7202e](https://github.com/sdielmann/ng-anim8/commit/0f7202e))
- Delete scaffold placeholder, apply CSS vars on leave, update README ([be367fd](https://github.com/sdielmann/ng-anim8/commit/be367fd))
- **demo:** Address code review issues ([45c5973](https://github.com/sdielmann/ng-anim8/commit/45c5973))
- **ci:** Build library before demo in deploy job ([560a1f2](https://github.com/sdielmann/ng-anim8/commit/560a1f2))

### 💅 Refactors

- Rename component prefix from ng8 to anim8 ([4244ae9](https://github.com/sdielmann/ng-anim8/commit/4244ae9))

### 📖 Documentation

- Add ng-anim8 design spec ([1c8f7c3](https://github.com/sdielmann/ng-anim8/commit/1c8f7c3))
- Fix spec inconsistencies from self-review ([4823b2f](https://github.com/sdielmann/ng-anim8/commit/4823b2f))
- Add ng-anim8 implementation plan ([1cd1f7f](https://github.com/sdielmann/ng-anim8/commit/1cd1f7f))
- Update implementation plan for SCSS and Jest/@testing-library/angular ([5f99da7](https://github.com/sdielmann/ng-anim8/commit/5f99da7))
- Update README.md [ci skip] ([51b8113](https://github.com/sdielmann/ng-anim8/commit/51b8113))
- Add demo app redesign spec and update gitignore ([b4829e6](https://github.com/sdielmann/ng-anim8/commit/b4829e6))
- Add demo app implementation plan ([a9e926a](https://github.com/sdielmann/ng-anim8/commit/a9e926a))
- Add GitHub Pages live demo URL [ci skip] ([aab5a78](https://github.com/sdielmann/ng-anim8/commit/aab5a78))

### 📦 Build

- Replace semantic-release with commitlint + husky + changelogen ([a45e065](https://github.com/sdielmann/ng-anim8/commit/a45e065))
- Setup .gitignore ([18a2a03](https://github.com/sdielmann/ng-anim8/commit/18a2a03))
- Fix config files ([27eefa1](https://github.com/sdielmann/ng-anim8/commit/27eefa1))
- Update gitignore ([b1f962c](https://github.com/sdielmann/ng-anim8/commit/b1f962c))
- Update gitignore ([f2c49cc](https://github.com/sdielmann/ng-anim8/commit/f2c49cc))
- Uninstall some unused dependencies ([182f6a5](https://github.com/sdielmann/ng-anim8/commit/182f6a5))
- **demo:** Add prismjs dependency ([2fa6d5c](https://github.com/sdielmann/ng-anim8/commit/2fa6d5c))
- Add missing fields in package.json ([827c1dd](https://github.com/sdielmann/ng-anim8/commit/827c1dd))

### 🏡 Chore

- Scaffold Angular 20+ workspace with ng-anim8 library, demo app, and Jest setup ([7653c4a](https://github.com/sdielmann/ng-anim8/commit/7653c4a))
- Switch package manager from npm to pnpm ([0a64560](https://github.com/sdielmann/ng-anim8/commit/0a64560))
- Add semantic-release with Angular preset and standard branching flow ([fedcf5f](https://github.com/sdielmann/ng-anim8/commit/fedcf5f))
- **release:** 0.0.1 [skip ci] ([fd0655e](https://github.com/sdielmann/ng-anim8/commit/fd0655e))
- **release:** 0.0.1 [skip ci] ([f3a9725](https://github.com/sdielmann/ng-anim8/commit/f3a9725))
- **release:** 0.0.1 [skip ci] ([d315d21](https://github.com/sdielmann/ng-anim8/commit/d315d21))
- **release:** 0.0.1 [skip ci] ([b893387](https://github.com/sdielmann/ng-anim8/commit/b893387))
- **release:** 0.0.1 [skip ci] ([ec06ec8](https://github.com/sdielmann/ng-anim8/commit/ec06ec8))
- **release:** 0.0.1 [skip ci] ([f7baca4](https://github.com/sdielmann/ng-anim8/commit/f7baca4))
- **release:** 0.0.1 [skip ci] ([8699985](https://github.com/sdielmann/ng-anim8/commit/8699985))
- **release:** 0.0.2 [skip ci] ([c262c72](https://github.com/sdielmann/ng-anim8/commit/c262c72))
- **release:** 0.0.3 [skip ci] ([664dcdd](https://github.com/sdielmann/ng-anim8/commit/664dcdd))

### ✅ Tests

- Make enterDone/leaveDone tests immune to setTimeout fallback false positives ([ac6107c](https://github.com/sdielmann/ng-anim8/commit/ac6107c))

### 🤖 CI

- Add build and test workflow on every push and PR ([832fc6e](https://github.com/sdielmann/ng-anim8/commit/832fc6e))
- Fix yml files ([709c9e9](https://github.com/sdielmann/ng-anim8/commit/709c9e9))
- Add GitHub Pages deploy job for demo app ([7df515b](https://github.com/sdielmann/ng-anim8/commit/7df515b))
- Change release pipeline ([22868a4](https://github.com/sdielmann/ng-anim8/commit/22868a4))
- Change release steps ([fb3b978](https://github.com/sdielmann/ng-anim8/commit/fb3b978))
- Fix release script ([492e831](https://github.com/sdielmann/ng-anim8/commit/492e831))
- Fix release script ([f3334ed](https://github.com/sdielmann/ng-anim8/commit/f3334ed))
- Setup release script for npm Trusted Publishing ([8063fd6](https://github.com/sdielmann/ng-anim8/commit/8063fd6))
- Create also GitHub release, cleanup CHANGELOG.md ([84b6cf0](https://github.com/sdielmann/ng-anim8/commit/84b6cf0))

### ❤️ Contributors

- Steffen Dielmann <steffen@dielmann.consulting>

## v0.0.3


### 🚀 Enhancements

- Add core utilities — Duration type, resolveDuration, DEFAULT_EASING, injectIsBrowser ([68f96ec](https://github.com/sdielmann/ng-anim8/commit/68f96ec))
- Add AnimationBase abstract directive with shared DOM/animation logic ([21e5349](https://github.com/sdielmann/ng-anim8/commit/21e5349))
- Add FadeComponent with opacity CSS transition ([f47c4a4](https://github.com/sdielmann/ng-anim8/commit/f47c4a4))
- Add SlideComponent with directional translate + opacity CSS transition ([9db958b](https://github.com/sdielmann/ng-anim8/commit/9db958b))
- Add CollapseComponent with CSS grid-template-rows height animation ([9678109](https://github.com/sdielmann/ng-anim8/commit/9678109))
- Add GrowComponent with scale + opacity CSS transition ([b38ac0f](https://github.com/sdielmann/ng-anim8/commit/b38ac0f))
- Add ZoomComponent with scale CSS transition ([424bdac](https://github.com/sdielmann/ng-anim8/commit/424bdac))
- Add StaggerComponent with MutationObserver-based animation-delay injection ([787e409](https://github.com/sdielmann/ng-anim8/commit/787e409))
- Wire up NgAnim8Module and public API barrel; library builds clean ([4d4b990](https://github.com/sdielmann/ng-anim8/commit/4d4b990))
- Add demo application showcasing all six ng-anim8 components ([0ef1a4e](https://github.com/sdielmann/ng-anim8/commit/0ef1a4e))
- **demo:** Add global CSS variables and shared section styles ([b8869ae](https://github.com/sdielmann/ng-anim8/commit/b8869ae))
- **demo:** Add CodeSnippetComponent with Prism.js highlighting ([e2d1ec0](https://github.com/sdielmann/ng-anim8/commit/e2d1ec0))
- **demo:** Add FadeSectionComponent ([3bf800a](https://github.com/sdielmann/ng-anim8/commit/3bf800a))
- **demo:** Add SlideSectionComponent ([8a40ce5](https://github.com/sdielmann/ng-anim8/commit/8a40ce5))
- **demo:** Add CollapseSectionComponent ([1e4fdf2](https://github.com/sdielmann/ng-anim8/commit/1e4fdf2))
- **demo:** Add GrowSectionComponent ([6fe42f7](https://github.com/sdielmann/ng-anim8/commit/6fe42f7))
- **demo:** Add ZoomSectionComponent ([daeb504](https://github.com/sdielmann/ng-anim8/commit/daeb504))
- **demo:** Add StaggerSectionComponent ([05a40b5](https://github.com/sdielmann/ng-anim8/commit/05a40b5))
- **demo:** Add LayoutComponent with sidebar, hero, and section wiring ([5838a51](https://github.com/sdielmann/ng-anim8/commit/5838a51))
- **demo:** Wire LayoutComponent into app root ([9058dae](https://github.com/sdielmann/ng-anim8/commit/9058dae))

### 🩹 Fixes

- Add jest-dom types to tsconfig.spec.json and align @angular-builders/jest to Angular 20 ([a9a6a54](https://github.com/sdielmann/ng-anim8/commit/a9a6a54))
- Tighten DURATION_MAP type to Record<StringDuration, number> and improve map test ([acb8313](https://github.com/sdielmann/ng-anim8/commit/acb8313))
- Improve AnimationBase — remove once:true from transitionend, safe getRootEl, clearTransition null-before-call ([0f7202e](https://github.com/sdielmann/ng-anim8/commit/0f7202e))
- Delete scaffold placeholder, apply CSS vars on leave, update README ([be367fd](https://github.com/sdielmann/ng-anim8/commit/be367fd))
- **demo:** Address code review issues ([45c5973](https://github.com/sdielmann/ng-anim8/commit/45c5973))
- **ci:** Build library before demo in deploy job ([560a1f2](https://github.com/sdielmann/ng-anim8/commit/560a1f2))

### 💅 Refactors

- Rename component prefix from ng8 to anim8 ([4244ae9](https://github.com/sdielmann/ng-anim8/commit/4244ae9))

### 📖 Documentation

- Add ng-anim8 design spec ([1c8f7c3](https://github.com/sdielmann/ng-anim8/commit/1c8f7c3))
- Fix spec inconsistencies from self-review ([4823b2f](https://github.com/sdielmann/ng-anim8/commit/4823b2f))
- Add ng-anim8 implementation plan ([1cd1f7f](https://github.com/sdielmann/ng-anim8/commit/1cd1f7f))
- Update implementation plan for SCSS and Jest/@testing-library/angular ([5f99da7](https://github.com/sdielmann/ng-anim8/commit/5f99da7))
- Update README.md [ci skip] ([51b8113](https://github.com/sdielmann/ng-anim8/commit/51b8113))
- Add demo app redesign spec and update gitignore ([b4829e6](https://github.com/sdielmann/ng-anim8/commit/b4829e6))
- Add demo app implementation plan ([a9e926a](https://github.com/sdielmann/ng-anim8/commit/a9e926a))
- Add GitHub Pages live demo URL [ci skip] ([aab5a78](https://github.com/sdielmann/ng-anim8/commit/aab5a78))

### 📦 Build

- Replace semantic-release with commitlint + husky + changelogen ([a45e065](https://github.com/sdielmann/ng-anim8/commit/a45e065))
- Setup .gitignore ([18a2a03](https://github.com/sdielmann/ng-anim8/commit/18a2a03))
- Fix config files ([27eefa1](https://github.com/sdielmann/ng-anim8/commit/27eefa1))
- Update gitignore ([b1f962c](https://github.com/sdielmann/ng-anim8/commit/b1f962c))
- Update gitignore ([f2c49cc](https://github.com/sdielmann/ng-anim8/commit/f2c49cc))
- Uninstall some unused dependencies ([182f6a5](https://github.com/sdielmann/ng-anim8/commit/182f6a5))
- **demo:** Add prismjs dependency ([2fa6d5c](https://github.com/sdielmann/ng-anim8/commit/2fa6d5c))
- Add missing fields in package.json ([827c1dd](https://github.com/sdielmann/ng-anim8/commit/827c1dd))

### 🏡 Chore

- Scaffold Angular 20+ workspace with ng-anim8 library, demo app, and Jest setup ([7653c4a](https://github.com/sdielmann/ng-anim8/commit/7653c4a))
- Switch package manager from npm to pnpm ([0a64560](https://github.com/sdielmann/ng-anim8/commit/0a64560))
- Add semantic-release with Angular preset and standard branching flow ([fedcf5f](https://github.com/sdielmann/ng-anim8/commit/fedcf5f))
- **release:** 0.0.1 [skip ci] ([fd0655e](https://github.com/sdielmann/ng-anim8/commit/fd0655e))
- **release:** 0.0.1 [skip ci] ([f3a9725](https://github.com/sdielmann/ng-anim8/commit/f3a9725))
- **release:** 0.0.1 [skip ci] ([d315d21](https://github.com/sdielmann/ng-anim8/commit/d315d21))
- **release:** 0.0.1 [skip ci] ([b893387](https://github.com/sdielmann/ng-anim8/commit/b893387))
- **release:** 0.0.1 [skip ci] ([ec06ec8](https://github.com/sdielmann/ng-anim8/commit/ec06ec8))
- **release:** 0.0.1 [skip ci] ([f7baca4](https://github.com/sdielmann/ng-anim8/commit/f7baca4))
- **release:** 0.0.1 [skip ci] ([8699985](https://github.com/sdielmann/ng-anim8/commit/8699985))
- **release:** 0.0.2 [skip ci] ([c262c72](https://github.com/sdielmann/ng-anim8/commit/c262c72))

### ✅ Tests

- Make enterDone/leaveDone tests immune to setTimeout fallback false positives ([ac6107c](https://github.com/sdielmann/ng-anim8/commit/ac6107c))

### 🤖 CI

- Add build and test workflow on every push and PR ([832fc6e](https://github.com/sdielmann/ng-anim8/commit/832fc6e))
- Fix yml files ([709c9e9](https://github.com/sdielmann/ng-anim8/commit/709c9e9))
- Add GitHub Pages deploy job for demo app ([7df515b](https://github.com/sdielmann/ng-anim8/commit/7df515b))
- Change release pipeline ([22868a4](https://github.com/sdielmann/ng-anim8/commit/22868a4))
- Change release steps ([fb3b978](https://github.com/sdielmann/ng-anim8/commit/fb3b978))
- Fix release script ([492e831](https://github.com/sdielmann/ng-anim8/commit/492e831))
- Fix release script ([f3334ed](https://github.com/sdielmann/ng-anim8/commit/f3334ed))
- Setup release script for npm Trusted Publishing ([8063fd6](https://github.com/sdielmann/ng-anim8/commit/8063fd6))
- Create also GitHub release, cleanup CHANGELOG.md ([84b6cf0](https://github.com/sdielmann/ng-anim8/commit/84b6cf0))

### ❤️ Contributors

- Steffen Dielmann <steffen@dielmann.consulting>

## v0.0.1 - 2024-06-16


### 🚀 Enhancements

- Add core utilities — Duration type, resolveDuration, DEFAULT_EASING, injectIsBrowser ([68f96ec](https://github.com/sdielmann/ng-anim8/commit/68f96ec))
- Add AnimationBase abstract directive with sh∆ared DOM/animation logic ([21e5349](https://github.com/sdielmann/ng-anim8/commit/21e5349))
- Add FadeComponent with opacity CSS transition ([f47c4a4](https://github.com/sdielmann/ng-anim8/commit/f47c4a4))
- Add SlideComponent with directional translate + opacity CSS transition ([9db958b](https://github.com/sdielmann/ng-anim8/commit/9db958b))
- Add CollapseComponent with CSS grid-template-rows height animation ([9678109](https://github.com/sdielmann/ng-anim8/commit/9678109))
- Add GrowComponent with scale + opacity CSS transition ([b38ac0f](https://github.com/sdielmann/ng-anim8/commit/b38ac0f))
- Add ZoomComponent with scale CSS transition ([424bdac](https://github.com/sdielmann/ng-anim8/commit/424bdac))
- Add StaggerComponent with MutationObserver-based animation-delay injection ([787e409](https://github.com/sdielmann/ng-anim8/commit/787e409))
- Wire up NgAnim8Module and public API barrel; library builds clean ([4d4b990](https://github.com/sdielmann/ng-anim8/commit/4d4b990))
- Add demo application showcasing all six ng-anim8 components ([0ef1a4e](https://github.com/sdielmann/ng-anim8/commit/0ef1a4e))
- **demo:** Add global CSS variables and shared section styles ([b8869ae](https://github.com/sdielmann/ng-anim8/commit/b8869ae))
- **demo:** Add CodeSnippetComponent with Prism.js highlighting ([e2d1ec0](https://github.com/sdielmann/ng-anim8/commit/e2d1ec0))
- **demo:** Add FadeSectionComponent ([3bf800a](https://github.com/sdielmann/ng-anim8/commit/3bf800a))
- **demo:** Add SlideSectionComponent ([8a40ce5](https://github.com/sdielmann/ng-anim8/commit/8a40ce5))
- **demo:** Add CollapseSectionComponent ([1e4fdf2](https://github.com/sdielmann/ng-anim8/commit/1e4fdf2))
- **demo:** Add GrowSectionComponent ([6fe42f7](https://github.com/sdielmann/ng-anim8/commit/6fe42f7))
- **demo:** Add ZoomSectionComponent ([daeb504](https://github.com/sdielmann/ng-anim8/commit/daeb504))
- **demo:** Add StaggerSectionComponent ([05a40b5](https://github.com/sdielmann/ng-anim8/commit/05a40b5))
- **demo:** Add LayoutComponent with sidebar, hero, and section wiring ([5838a51](https://github.com/sdielmann/ng-anim8/commit/5838a51))
- **demo:** Wire LayoutComponent into app root ([9058dae](https://github.com/sdielmann/ng-anim8/commit/9058dae))

### 🩹 Fixes

- Add jest-dom types to tsconfig.spec.json and align @angular-builders/jest to Angular 20 ([a9a6a54](https://github.com/sdielmann/ng-anim8/commit/a9a6a54))
- Tighten DURATION_MAP type to Record<StringDuration, number> and improve map test ([acb8313](https://github.com/sdielmann/ng-anim8/commit/acb8313))
- Improve AnimationBase — remove once:true from transitionend, safe getRootEl, clearTransition null-before-call ([0f7202e](https://github.com/sdielmann/ng-anim8/commit/0f7202e))
- Delete scaffold placeholder, apply CSS vars on leave, update README ([be367fd](https://github.com/sdielmann/ng-anim8/commit/be367fd))
- **demo:** Address code review issues ([45c5973](https://github.com/sdielmann/ng-anim8/commit/45c5973))
- **ci:** Build library before demo in deploy job ([560a1f2](https://github.com/sdielmann/ng-anim8/commit/560a1f2))

### 💅 Refactors

- Rename component prefix from ng8 to anim8 ([4244ae9](https://github.com/sdielmann/ng-anim8/commit/4244ae9))

### 📖 Documentation

- Add ng-anim8 design spec ([1c8f7c3](https://github.com/sdielmann/ng-anim8/commit/1c8f7c3))
- Fix spec inconsistencies from self-review ([4823b2f](https://github.com/sdielmann/ng-anim8/commit/4823b2f))
- Add ng-anim8 implementation plan ([1cd1f7f](https://github.com/sdielmann/ng-anim8/commit/1cd1f7f))
- Update implementation plan for SCSS and Jest/@testing-library/angular ([5f99da7](https://github.com/sdielmann/ng-anim8/commit/5f99da7))
- Update README.md [ci skip] ([51b8113](https://github.com/sdielmann/ng-anim8/commit/51b8113))
- Add demo app redesign spec and update gitignore ([b4829e6](https://github.com/sdielmann/ng-anim8/commit/b4829e6))
- Add demo app implementation plan ([a9e926a](https://github.com/sdielmann/ng-anim8/commit/a9e926a))
- Add GitHub Pages live demo URL [ci skip] ([aab5a78](https://github.com/sdielmann/ng-anim8/commit/aab5a78))

### 📦 Build

- Replace semantic-release with commitlint + husky + changelogen ([a45e065](https://github.com/sdielmann/ng-anim8/commit/a45e065))
- Setup .gitignore ([18a2a03](https://github.com/sdielmann/ng-anim8/commit/18a2a03))
- Fix config files ([27eefa1](https://github.com/sdielmann/ng-anim8/commit/27eefa1))
- Update gitignore ([b1f962c](https://github.com/sdielmann/ng-anim8/commit/b1f962c))
- Update gitignore ([f2c49cc](https://github.com/sdielmann/ng-anim8/commit/f2c49cc))
- Uninstall some unused dependencies ([182f6a5](https://github.com/sdielmann/ng-anim8/commit/182f6a5))
- **demo:** Add prismjs dependency ([2fa6d5c](https://github.com/sdielmann/ng-anim8/commit/2fa6d5c))
- Add missing fields in package.json ([827c1dd](https://github.com/sdielmann/ng-anim8/commit/827c1dd))

### 🏡 Chore

- Scaffold Angular 20+ workspace with ng-anim8 library, demo app, and Jest setup ([7653c4a](https://github.com/sdielmann/ng-anim8/commit/7653c4a))
- Switch package manager from npm to pnpm ([0a64560](https://github.com/sdielmann/ng-anim8/commit/0a64560))
- Add semantic-release with Angular preset and standard branching flow ([fedcf5f](https://github.com/sdielmann/ng-anim8/commit/fedcf5f))
- **release:** 0.0.1 [skip ci] ([fd0655e](https://github.com/sdielmann/ng-anim8/commit/fd0655e))
- **release:** 0.0.1 [skip ci] ([f3a9725](https://github.com/sdielmann/ng-anim8/commit/f3a9725))
- **release:** 0.0.1 [skip ci] ([d315d21](https://github.com/sdielmann/ng-anim8/commit/d315d21))
- **release:** 0.0.1 [skip ci] ([b893387](https://github.com/sdielmann/ng-anim8/commit/b893387))
- **release:** 0.0.1 [skip ci] ([ec06ec8](https://github.com/sdielmann/ng-anim8/commit/ec06ec8))
- **release:** 0.0.1 [skip ci] ([f7baca4](https://github.com/sdielmann/ng-anim8/commit/f7baca4))
- **release:** 0.0.1 [skip ci] ([8699985](https://github.com/sdielmann/ng-anim8/commit/8699985))

### ✅ Tests

- Make enterDone/leaveDone tests immune to setTimeout fallback false positives ([ac6107c](https://github.com/sdielmann/ng-anim8/commit/ac6107c))

### 🤖 CI

- Add build and test workflow on every push and PR ([832fc6e](https://github.com/sdielmann/ng-anim8/commit/832fc6e))
- Fix yml files ([709c9e9](https://github.com/sdielmann/ng-anim8/commit/709c9e9))
- Add GitHub Pages deploy job for demo app ([7df515b](https://github.com/sdielmann/ng-anim8/commit/7df515b))
- Change release pipeline ([22868a4](https://github.com/sdielmann/ng-anim8/commit/22868a4))
- Change release steps ([fb3b978](https://github.com/sdielmann/ng-anim8/commit/fb3b978))
- Fix release script ([492e831](https://github.com/sdielmann/ng-anim8/commit/492e831))
- Fix release script ([f3334ed](https://github.com/sdielmann/ng-anim8/commit/f3334ed))
- Setup release script for npm Trusted Publishing ([8063fd6](https://github.com/sdielmann/ng-anim8/commit/8063fd6))

### ❤️ Contributors

- Steffen Dielmann <steffen@dielmann.consulting>

## ...main


### 🚀 Enhancements

- Add core utilities — Duration type, resolveDuration, DEFAULT_EASING, injectIsBrowser ([68f96ec](https://github.com/sdielmann/ng-anim8/commit/68f96ec))
- Add AnimationBase abstract directive with shared DOM/animation logic ([21e5349](https://github.com/sdielmann/ng-anim8/commit/21e5349))
- Add FadeComponent with opacity CSS transition ([f47c4a4](https://github.com/sdielmann/ng-anim8/commit/f47c4a4))
- Add SlideComponent with directional translate + opacity CSS transition ([9db958b](https://github.com/sdielmann/ng-anim8/commit/9db958b))
- Add CollapseComponent with CSS grid-template-rows height animation ([9678109](https://github.com/sdielmann/ng-anim8/commit/9678109))
- Add GrowComponent with scale + opacity CSS transition ([b38ac0f](https://github.com/sdielmann/ng-anim8/commit/b38ac0f))
- Add ZoomComponent with scale CSS transition ([424bdac](https://github.com/sdielmann/ng-anim8/commit/424bdac))
- Add StaggerComponent with MutationObserver-based animation-delay injection ([787e409](https://github.com/sdielmann/ng-anim8/commit/787e409))
- Wire up NgAnim8Module and public API barrel; library builds clean ([4d4b990](https://github.com/sdielmann/ng-anim8/commit/4d4b990))
- Add demo application showcasing all six ng-anim8 components ([0ef1a4e](https://github.com/sdielmann/ng-anim8/commit/0ef1a4e))
- **demo:** Add global CSS variables and shared section styles ([b8869ae](https://github.com/sdielmann/ng-anim8/commit/b8869ae))
- **demo:** Add CodeSnippetComponent with Prism.js highlighting ([e2d1ec0](https://github.com/sdielmann/ng-anim8/commit/e2d1ec0))
- **demo:** Add FadeSectionComponent ([3bf800a](https://github.com/sdielmann/ng-anim8/commit/3bf800a))
- **demo:** Add SlideSectionComponent ([8a40ce5](https://github.com/sdielmann/ng-anim8/commit/8a40ce5))
- **demo:** Add CollapseSectionComponent ([1e4fdf2](https://github.com/sdielmann/ng-anim8/commit/1e4fdf2))
- **demo:** Add GrowSectionComponent ([6fe42f7](https://github.com/sdielmann/ng-anim8/commit/6fe42f7))
- **demo:** Add ZoomSectionComponent ([daeb504](https://github.com/sdielmann/ng-anim8/commit/daeb504))
- **demo:** Add StaggerSectionComponent ([05a40b5](https://github.com/sdielmann/ng-anim8/commit/05a40b5))
- **demo:** Add LayoutComponent with sidebar, hero, and section wiring ([5838a51](https://github.com/sdielmann/ng-anim8/commit/5838a51))
- **demo:** Wire LayoutComponent into app root ([9058dae](https://github.com/sdielmann/ng-anim8/commit/9058dae))

### 🩹 Fixes

- Add jest-dom types to tsconfig.spec.json and align @angular-builders/jest to Angular 20 ([a9a6a54](https://github.com/sdielmann/ng-anim8/commit/a9a6a54))
- Tighten DURATION_MAP type to Record<StringDuration, number> and improve map test ([acb8313](https://github.com/sdielmann/ng-anim8/commit/acb8313))
- Improve AnimationBase — remove once:true from transitionend, safe getRootEl, clearTransition null-before-call ([0f7202e](https://github.com/sdielmann/ng-anim8/commit/0f7202e))
- Delete scaffold placeholder, apply CSS vars on leave, update README ([be367fd](https://github.com/sdielmann/ng-anim8/commit/be367fd))
- **demo:** Address code review issues ([45c5973](https://github.com/sdielmann/ng-anim8/commit/45c5973))
- **ci:** Build library before demo in deploy job ([560a1f2](https://github.com/sdielmann/ng-anim8/commit/560a1f2))

### 💅 Refactors

- Rename component prefix from ng8 to anim8 ([4244ae9](https://github.com/sdielmann/ng-anim8/commit/4244ae9))

### 📖 Documentation

- Add ng-anim8 design spec ([1c8f7c3](https://github.com/sdielmann/ng-anim8/commit/1c8f7c3))
- Fix spec inconsistencies from self-review ([4823b2f](https://github.com/sdielmann/ng-anim8/commit/4823b2f))
- Add ng-anim8 implementation plan ([1cd1f7f](https://github.com/sdielmann/ng-anim8/commit/1cd1f7f))
- Update implementation plan for SCSS and Jest/@testing-library/angular ([5f99da7](https://github.com/sdielmann/ng-anim8/commit/5f99da7))
- Update README.md [ci skip] ([51b8113](https://github.com/sdielmann/ng-anim8/commit/51b8113))
- Add demo app redesign spec and update gitignore ([b4829e6](https://github.com/sdielmann/ng-anim8/commit/b4829e6))
- Add demo app implementation plan ([a9e926a](https://github.com/sdielmann/ng-anim8/commit/a9e926a))
- Add GitHub Pages live demo URL [ci skip] ([aab5a78](https://github.com/sdielmann/ng-anim8/commit/aab5a78))

### 📦 Build

- Replace semantic-release with commitlint + husky + changelogen ([a45e065](https://github.com/sdielmann/ng-anim8/commit/a45e065))
- Setup .gitignore ([18a2a03](https://github.com/sdielmann/ng-anim8/commit/18a2a03))
- Fix config files ([27eefa1](https://github.com/sdielmann/ng-anim8/commit/27eefa1))
- Update gitignore ([b1f962c](https://github.com/sdielmann/ng-anim8/commit/b1f962c))
- Update gitignore ([f2c49cc](https://github.com/sdielmann/ng-anim8/commit/f2c49cc))
- Uninstall some unused dependencies ([182f6a5](https://github.com/sdielmann/ng-anim8/commit/182f6a5))
- **demo:** Add prismjs dependency ([2fa6d5c](https://github.com/sdielmann/ng-anim8/commit/2fa6d5c))

### 🏡 Chore

- Scaffold Angular 20+ workspace with ng-anim8 library, demo app, and Jest setup ([7653c4a](https://github.com/sdielmann/ng-anim8/commit/7653c4a))
- Switch package manager from npm to pnpm ([0a64560](https://github.com/sdielmann/ng-anim8/commit/0a64560))
- Add semantic-release with Angular preset and standard branching flow ([fedcf5f](https://github.com/sdielmann/ng-anim8/commit/fedcf5f))
- **release:** 0.0.1 [skip ci] ([fd0655e](https://github.com/sdielmann/ng-anim8/commit/fd0655e))
- **release:** 0.0.1 [skip ci] ([f3a9725](https://github.com/sdielmann/ng-anim8/commit/f3a9725))
- **release:** 0.0.1 [skip ci] ([d315d21](https://github.com/sdielmann/ng-anim8/commit/d315d21))
- **release:** 0.0.1 [skip ci] ([b893387](https://github.com/sdielmann/ng-anim8/commit/b893387))
- **release:** 0.0.1 [skip ci] ([ec06ec8](https://github.com/sdielmann/ng-anim8/commit/ec06ec8))
- **release:** 0.0.1 [skip ci] ([f7baca4](https://github.com/sdielmann/ng-anim8/commit/f7baca4))

### ✅ Tests

- Make enterDone/leaveDone tests immune to setTimeout fallback false positives ([ac6107c](https://github.com/sdielmann/ng-anim8/commit/ac6107c))

### 🤖 CI

- Add build and test workflow on every push and PR ([832fc6e](https://github.com/sdielmann/ng-anim8/commit/832fc6e))
- Fix yml files ([709c9e9](https://github.com/sdielmann/ng-anim8/commit/709c9e9))
- Add GitHub Pages deploy job for demo app ([7df515b](https://github.com/sdielmann/ng-anim8/commit/7df515b))
- Change release pipeline ([22868a4](https://github.com/sdielmann/ng-anim8/commit/22868a4))
- Change release steps ([fb3b978](https://github.com/sdielmann/ng-anim8/commit/fb3b978))
- Fix release script ([492e831](https://github.com/sdielmann/ng-anim8/commit/492e831))
- Fix release script ([f3334ed](https://github.com/sdielmann/ng-anim8/commit/f3334ed))

### ❤️ Contributors

- Steffen Dielmann <steffen@dielmann.consulting>

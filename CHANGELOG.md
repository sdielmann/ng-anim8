# Changelog

All notable changes to this project will be documented in this file.

## ...main


### 🚀 Enhancements

- Add core utilities — Duration type, resolveDuration, DEFAULT_EASING, injectIsBrowser ([68f96ec](https://github.com/DielmannConsulting/ng-anim8/commit/68f96ec))
- Add AnimationBase abstract directive with shared DOM/animation logic ([21e5349](https://github.com/DielmannConsulting/ng-anim8/commit/21e5349))
- Add FadeComponent with opacity CSS transition ([f47c4a4](https://github.com/DielmannConsulting/ng-anim8/commit/f47c4a4))
- Add SlideComponent with directional translate + opacity CSS transition ([9db958b](https://github.com/DielmannConsulting/ng-anim8/commit/9db958b))
- Add CollapseComponent with CSS grid-template-rows height animation ([9678109](https://github.com/DielmannConsulting/ng-anim8/commit/9678109))
- Add GrowComponent with scale + opacity CSS transition ([b38ac0f](https://github.com/DielmannConsulting/ng-anim8/commit/b38ac0f))
- Add ZoomComponent with scale CSS transition ([424bdac](https://github.com/DielmannConsulting/ng-anim8/commit/424bdac))
- Add StaggerComponent with MutationObserver-based animation-delay injection ([787e409](https://github.com/DielmannConsulting/ng-anim8/commit/787e409))
- Wire up NgAnim8Module and public API barrel; library builds clean ([4d4b990](https://github.com/DielmannConsulting/ng-anim8/commit/4d4b990))
- Add demo application showcasing all six ng-anim8 components ([0ef1a4e](https://github.com/DielmannConsulting/ng-anim8/commit/0ef1a4e))
- **demo:** Add global CSS variables and shared section styles ([b8869ae](https://github.com/DielmannConsulting/ng-anim8/commit/b8869ae))
- **demo:** Add CodeSnippetComponent with Prism.js highlighting ([e2d1ec0](https://github.com/DielmannConsulting/ng-anim8/commit/e2d1ec0))
- **demo:** Add FadeSectionComponent ([3bf800a](https://github.com/DielmannConsulting/ng-anim8/commit/3bf800a))
- **demo:** Add SlideSectionComponent ([8a40ce5](https://github.com/DielmannConsulting/ng-anim8/commit/8a40ce5))
- **demo:** Add CollapseSectionComponent ([1e4fdf2](https://github.com/DielmannConsulting/ng-anim8/commit/1e4fdf2))
- **demo:** Add GrowSectionComponent ([6fe42f7](https://github.com/DielmannConsulting/ng-anim8/commit/6fe42f7))
- **demo:** Add ZoomSectionComponent ([daeb504](https://github.com/DielmannConsulting/ng-anim8/commit/daeb504))
- **demo:** Add StaggerSectionComponent ([05a40b5](https://github.com/DielmannConsulting/ng-anim8/commit/05a40b5))
- **demo:** Add LayoutComponent with sidebar, hero, and section wiring ([5838a51](https://github.com/DielmannConsulting/ng-anim8/commit/5838a51))
- **demo:** Wire LayoutComponent into app root ([9058dae](https://github.com/DielmannConsulting/ng-anim8/commit/9058dae))

### 🩹 Fixes

- Add jest-dom types to tsconfig.spec.json and align @angular-builders/jest to Angular 20 ([a9a6a54](https://github.com/DielmannConsulting/ng-anim8/commit/a9a6a54))
- Tighten DURATION_MAP type to Record<StringDuration, number> and improve map test ([acb8313](https://github.com/DielmannConsulting/ng-anim8/commit/acb8313))
- Improve AnimationBase — remove once:true from transitionend, safe getRootEl, clearTransition null-before-call ([0f7202e](https://github.com/DielmannConsulting/ng-anim8/commit/0f7202e))
- Delete scaffold placeholder, apply CSS vars on leave, update README ([be367fd](https://github.com/DielmannConsulting/ng-anim8/commit/be367fd))
- **demo:** Address code review issues ([45c5973](https://github.com/DielmannConsulting/ng-anim8/commit/45c5973))
- **ci:** Build library before demo in deploy job ([560a1f2](https://github.com/DielmannConsulting/ng-anim8/commit/560a1f2))

### 💅 Refactors

- Rename component prefix from ng8 to anim8 ([4244ae9](https://github.com/DielmannConsulting/ng-anim8/commit/4244ae9))

### 📖 Documentation

- Add ng-anim8 design spec ([1c8f7c3](https://github.com/DielmannConsulting/ng-anim8/commit/1c8f7c3))
- Fix spec inconsistencies from self-review ([4823b2f](https://github.com/DielmannConsulting/ng-anim8/commit/4823b2f))
- Add ng-anim8 implementation plan ([1cd1f7f](https://github.com/DielmannConsulting/ng-anim8/commit/1cd1f7f))
- Update implementation plan for SCSS and Jest/@testing-library/angular ([5f99da7](https://github.com/DielmannConsulting/ng-anim8/commit/5f99da7))
- Update README.md [ci skip] ([51b8113](https://github.com/DielmannConsulting/ng-anim8/commit/51b8113))
- Add demo app redesign spec and update gitignore ([b4829e6](https://github.com/DielmannConsulting/ng-anim8/commit/b4829e6))
- Add demo app implementation plan ([a9e926a](https://github.com/DielmannConsulting/ng-anim8/commit/a9e926a))
- Add GitHub Pages live demo URL [ci skip] ([aab5a78](https://github.com/DielmannConsulting/ng-anim8/commit/aab5a78))

### 📦 Build

- Replace semantic-release with commitlint + husky + changelogen ([a45e065](https://github.com/DielmannConsulting/ng-anim8/commit/a45e065))
- Setup .gitignore ([18a2a03](https://github.com/DielmannConsulting/ng-anim8/commit/18a2a03))
- Fix config files ([27eefa1](https://github.com/DielmannConsulting/ng-anim8/commit/27eefa1))
- Update gitignore ([b1f962c](https://github.com/DielmannConsulting/ng-anim8/commit/b1f962c))
- Update gitignore ([f2c49cc](https://github.com/DielmannConsulting/ng-anim8/commit/f2c49cc))
- Uninstall some unused dependencies ([182f6a5](https://github.com/DielmannConsulting/ng-anim8/commit/182f6a5))
- **demo:** Add prismjs dependency ([2fa6d5c](https://github.com/DielmannConsulting/ng-anim8/commit/2fa6d5c))

### 🏡 Chore

- Scaffold Angular 20+ workspace with ng-anim8 library, demo app, and Jest setup ([7653c4a](https://github.com/DielmannConsulting/ng-anim8/commit/7653c4a))
- Switch package manager from npm to pnpm ([0a64560](https://github.com/DielmannConsulting/ng-anim8/commit/0a64560))
- Add semantic-release with Angular preset and standard branching flow ([fedcf5f](https://github.com/DielmannConsulting/ng-anim8/commit/fedcf5f))
- **release:** 0.0.1 [skip ci] ([fd0655e](https://github.com/DielmannConsulting/ng-anim8/commit/fd0655e))

### ✅ Tests

- Make enterDone/leaveDone tests immune to setTimeout fallback false positives ([ac6107c](https://github.com/DielmannConsulting/ng-anim8/commit/ac6107c))

### 🤖 CI

- Add build and test workflow on every push and PR ([832fc6e](https://github.com/DielmannConsulting/ng-anim8/commit/832fc6e))
- Fix yml files ([709c9e9](https://github.com/DielmannConsulting/ng-anim8/commit/709c9e9))
- Add GitHub Pages deploy job for demo app ([7df515b](https://github.com/DielmannConsulting/ng-anim8/commit/7df515b))

### ❤️ Contributors

- Steffen Dielmann <steffen@dielmann.consulting>

## ...main


### 🚀 Enhancements

- Add core utilities — Duration type, resolveDuration, DEFAULT_EASING, injectIsBrowser ([68f96ec](https://github.com/DielmannConsulting/ng-anim8/commit/68f96ec))
- Add AnimationBase abstract directive with shared DOM/animation logic ([21e5349](https://github.com/DielmannConsulting/ng-anim8/commit/21e5349))
- Add FadeComponent with opacity CSS transition ([f47c4a4](https://github.com/DielmannConsulting/ng-anim8/commit/f47c4a4))
- Add SlideComponent with directional translate + opacity CSS transition ([9db958b](https://github.com/DielmannConsulting/ng-anim8/commit/9db958b))
- Add CollapseComponent with CSS grid-template-rows height animation ([9678109](https://github.com/DielmannConsulting/ng-anim8/commit/9678109))
- Add GrowComponent with scale + opacity CSS transition ([b38ac0f](https://github.com/DielmannConsulting/ng-anim8/commit/b38ac0f))
- Add ZoomComponent with scale CSS transition ([424bdac](https://github.com/DielmannConsulting/ng-anim8/commit/424bdac))
- Add StaggerComponent with MutationObserver-based animation-delay injection ([787e409](https://github.com/DielmannConsulting/ng-anim8/commit/787e409))
- Wire up NgAnim8Module and public API barrel; library builds clean ([4d4b990](https://github.com/DielmannConsulting/ng-anim8/commit/4d4b990))
- Add demo application showcasing all six ng-anim8 components ([0ef1a4e](https://github.com/DielmannConsulting/ng-anim8/commit/0ef1a4e))
- **demo:** Add global CSS variables and shared section styles ([b8869ae](https://github.com/DielmannConsulting/ng-anim8/commit/b8869ae))
- **demo:** Add CodeSnippetComponent with Prism.js highlighting ([e2d1ec0](https://github.com/DielmannConsulting/ng-anim8/commit/e2d1ec0))
- **demo:** Add FadeSectionComponent ([3bf800a](https://github.com/DielmannConsulting/ng-anim8/commit/3bf800a))
- **demo:** Add SlideSectionComponent ([8a40ce5](https://github.com/DielmannConsulting/ng-anim8/commit/8a40ce5))
- **demo:** Add CollapseSectionComponent ([1e4fdf2](https://github.com/DielmannConsulting/ng-anim8/commit/1e4fdf2))
- **demo:** Add GrowSectionComponent ([6fe42f7](https://github.com/DielmannConsulting/ng-anim8/commit/6fe42f7))
- **demo:** Add ZoomSectionComponent ([daeb504](https://github.com/DielmannConsulting/ng-anim8/commit/daeb504))
- **demo:** Add StaggerSectionComponent ([05a40b5](https://github.com/DielmannConsulting/ng-anim8/commit/05a40b5))
- **demo:** Add LayoutComponent with sidebar, hero, and section wiring ([5838a51](https://github.com/DielmannConsulting/ng-anim8/commit/5838a51))
- **demo:** Wire LayoutComponent into app root ([9058dae](https://github.com/DielmannConsulting/ng-anim8/commit/9058dae))

### 🩹 Fixes

- Add jest-dom types to tsconfig.spec.json and align @angular-builders/jest to Angular 20 ([a9a6a54](https://github.com/DielmannConsulting/ng-anim8/commit/a9a6a54))
- Tighten DURATION_MAP type to Record<StringDuration, number> and improve map test ([acb8313](https://github.com/DielmannConsulting/ng-anim8/commit/acb8313))
- Improve AnimationBase — remove once:true from transitionend, safe getRootEl, clearTransition null-before-call ([0f7202e](https://github.com/DielmannConsulting/ng-anim8/commit/0f7202e))
- Delete scaffold placeholder, apply CSS vars on leave, update README ([be367fd](https://github.com/DielmannConsulting/ng-anim8/commit/be367fd))
- **demo:** Address code review issues ([45c5973](https://github.com/DielmannConsulting/ng-anim8/commit/45c5973))
- **ci:** Build library before demo in deploy job ([560a1f2](https://github.com/DielmannConsulting/ng-anim8/commit/560a1f2))

### 💅 Refactors

- Rename component prefix from ng8 to anim8 ([4244ae9](https://github.com/DielmannConsulting/ng-anim8/commit/4244ae9))

### 📖 Documentation

- Add ng-anim8 design spec ([1c8f7c3](https://github.com/DielmannConsulting/ng-anim8/commit/1c8f7c3))
- Fix spec inconsistencies from self-review ([4823b2f](https://github.com/DielmannConsulting/ng-anim8/commit/4823b2f))
- Add ng-anim8 implementation plan ([1cd1f7f](https://github.com/DielmannConsulting/ng-anim8/commit/1cd1f7f))
- Update implementation plan for SCSS and Jest/@testing-library/angular ([5f99da7](https://github.com/DielmannConsulting/ng-anim8/commit/5f99da7))
- Update README.md [ci skip] ([51b8113](https://github.com/DielmannConsulting/ng-anim8/commit/51b8113))
- Add demo app redesign spec and update gitignore ([b4829e6](https://github.com/DielmannConsulting/ng-anim8/commit/b4829e6))
- Add demo app implementation plan ([a9e926a](https://github.com/DielmannConsulting/ng-anim8/commit/a9e926a))
- Add GitHub Pages live demo URL [ci skip] ([aab5a78](https://github.com/DielmannConsulting/ng-anim8/commit/aab5a78))

### 📦 Build

- Replace semantic-release with commitlint + husky + changelogen ([a45e065](https://github.com/DielmannConsulting/ng-anim8/commit/a45e065))
- Setup .gitignore ([18a2a03](https://github.com/DielmannConsulting/ng-anim8/commit/18a2a03))
- Fix config files ([27eefa1](https://github.com/DielmannConsulting/ng-anim8/commit/27eefa1))
- Update gitignore ([b1f962c](https://github.com/DielmannConsulting/ng-anim8/commit/b1f962c))
- Update gitignore ([f2c49cc](https://github.com/DielmannConsulting/ng-anim8/commit/f2c49cc))
- Uninstall some unused dependencies ([182f6a5](https://github.com/DielmannConsulting/ng-anim8/commit/182f6a5))
- **demo:** Add prismjs dependency ([2fa6d5c](https://github.com/DielmannConsulting/ng-anim8/commit/2fa6d5c))

### 🏡 Chore

- Scaffold Angular 20+ workspace with ng-anim8 library, demo app, and Jest setup ([7653c4a](https://github.com/DielmannConsulting/ng-anim8/commit/7653c4a))
- Switch package manager from npm to pnpm ([0a64560](https://github.com/DielmannConsulting/ng-anim8/commit/0a64560))
- Add semantic-release with Angular preset and standard branching flow ([fedcf5f](https://github.com/DielmannConsulting/ng-anim8/commit/fedcf5f))

### ✅ Tests

- Make enterDone/leaveDone tests immune to setTimeout fallback false positives ([ac6107c](https://github.com/DielmannConsulting/ng-anim8/commit/ac6107c))

### 🤖 CI

- Add build and test workflow on every push and PR ([832fc6e](https://github.com/DielmannConsulting/ng-anim8/commit/832fc6e))
- Fix yml files ([709c9e9](https://github.com/DielmannConsulting/ng-anim8/commit/709c9e9))
- Add GitHub Pages deploy job for demo app ([7df515b](https://github.com/DielmannConsulting/ng-anim8/commit/7df515b))

### ❤️ Contributors

- Steffen Dielmann <steffen@dielmann.consulting>


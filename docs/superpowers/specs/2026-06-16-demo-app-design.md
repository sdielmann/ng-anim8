# Demo App Redesign & GitHub Pages Deployment

**Date:** 2026-06-16  
**Status:** Approved

## Goal

Replace the bare-bones `projects/demo/` app with a modern, polished showcase of all six ng-anim8 animation components, and deploy it to GitHub Pages at `https://dielmannconsulting.github.io/ng-anim8/`.

---

## Visual Design

**Aesthetic:** Gradient & Glass — deep space background, glassmorphism cards, cyan/purple accent palette.

**Color tokens:**
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0d1117` | Page background |
| `--glass-fill` | `rgba(255,255,255,.05)` | Card backgrounds |
| `--glass-border` | `rgba(255,255,255,.08)` | Card borders |
| `--cyan` | `#38bdf8` | Fade, Collapse, Zoom accent |
| `--purple` | `#c084fc` | Slide, Grow, Stagger accent |
| `--code-bg` | `#111827` | Code snippet backgrounds |
| `--muted` | `#64748b` | Secondary text |

Glass cards use `backdrop-filter: blur(12px)` and a `1px` border at `--glass-border`.

---

## Layout

**Two-pane layout — no Angular Router:**

- **Left pane (fixed, ~220px):** Sidebar with logo, install snippet, 6 nav links, GitHub link at bottom.
- **Right pane (scrollable):** Hero section at top, followed by one section per animation component.

**Active sidebar tracking:** An `IntersectionObserver` in the layout component fires as sections scroll into view. The active `sectionId` is stored in a signal; the sidebar renders the active link with a cyan left-border highlight.

**Anchor navigation:** Sidebar links are `<a href="#fade">` etc. The browser handles smooth scroll. No router, no fragment routing.

---

## File Structure

```
projects/demo/src/app/
  app.ts / app.html / app.scss          ← root shell
  layout/
    layout.component.ts / .html / .scss ← sidebar + content shell
  sections/
    fade/fade-section.component.*
    slide/slide-section.component.*
    collapse/collapse-section.component.*
    grow/grow-section.component.*
    zoom/zoom-section.component.*
    stagger/stagger-section.component.*
  shared/
    code-snippet/code-snippet.component.*
```

---

## Sidebar

Contents (top to bottom):
1. `ng-anim8` wordmark with a small cyan gradient dot
2. `npm install ng-anim8` chip — clicking copies to clipboard
3. Nav links: Fade · Slide · Collapse · Grow · Zoom · Stagger  
   - Active link: cyan left border + subtle glow background
4. GitHub icon link at the bottom

---

## Hero Section

Sits at the top of the right pane (above the first animation section).

- Gradient headline: *"Animations that feel alive"* (cyan → purple gradient text)
- Subline: *"Declarative animation components for Angular 20+. Bind [show], done."*
- `npm install ng-anim8` copy-to-clipboard chip
- npm version badge + CI status badge
- "View on GitHub →" CTA button

---

## Animation Sections

### Standard sections (Fade, Slide, Collapse, Grow, Zoom)

Each section contains:

1. **Section header** — component name + one-line description of the animation effect
2. **Controls row:**
   - Toggle button — sets the `show` signal
   - Duration picker — `fast · normal · slow` pill buttons (updates a `duration` signal; defaults to `normal`)
   - **Slide only:** Direction picker — `↑ up · ↓ down · ← left · → right` (updates a `direction` signal)
3. **Live preview** — glassmorphism card containing the actual `<anim8-*>` component wired to the signals. The real library runs; the animation plays in the browser.
4. **Code snippet** — syntax-highlighted `<pre><code>` block showing minimal usage. Reactive: re-renders (and re-highlights via Prism.js) whenever `duration` or `direction` changes.

### Stagger section

No `show` toggle. Instead:
- **"Add item"** button — pushes to an `items` signal array
- **"Reset"** button — clears the array
- Live preview shows `<anim8-stagger>` wrapping a `@for` over `items()`
- Code snippet shows the stagger usage with the `[gap]` input

---

## Code Snippet Component (`CodeSnippetComponent`)

**Input:** `code: string` (the raw code string to highlight)

**Behaviour:**
- Renders `<pre><code class="language-html">{{ code }}</code></pre>`
- Uses an Angular `effect()` to call `Prism.highlightElement(codeEl)` whenever the `code` input signal changes
- Prism.js theme: `prism-tomorrow` (dark, matches the glass aesthetic)

**Integration:**
- `prismjs` added as a production dependency (`pnpm add prismjs`)
- `@types/prismjs` added as a dev dependency
- Prism's tomorrow theme CSS imported in `styles.scss`
- Only the HTML language grammar is loaded (sufficient for all snippets)

---

## GitHub Pages Deployment

**Build command:** `pnpm ng build demo --base-href /ng-anim8/`  
**Output directory:** `dist/demo/browser/`  
**Live URL:** `https://dielmannconsulting.github.io/ng-anim8/`

**Workflow change** (`ci.yml`): A `deploy` job is added alongside the existing `build-and-test` job.

```yaml
deploy:
  name: Deploy to GitHub Pages
  needs: build-and-test
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main' && github.event_name == 'push'
  permissions:
    pages: write
    id-token: write
  environment:
    name: github-pages
    url: ${{ steps.deployment.outputs.page_url }}
  steps:
    - uses: actions/checkout@v5
    - uses: pnpm/action-setup@v5
    - uses: actions/setup-node@v6
      with:
        node-version-file: .nvmrc
        cache: pnpm
    - run: pnpm install --frozen-lockfile
    - run: pnpm ng build demo --base-href /ng-anim8/
    - uses: actions/configure-pages@v5
    - uses: actions/upload-pages-artifact@v3
      with:
        path: dist/demo/browser
    - id: deployment
      uses: actions/deploy-pages@v4
```

A `404.html` (copy of `index.html`) is placed in the output so direct URL access works.

**README update:** Replace `[Live Demo](#)` with `[Live Demo](https://dielmannconsulting.github.io/ng-anim8/)`.

---

## Out of Scope

- Angular Router / client-side routing
- Custom domain / DNS
- Dark/light mode toggle
- Mobile-specific layout (responsive but not a focus)
- Any animation components beyond the existing six

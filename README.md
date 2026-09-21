# AdaptrixAI website — Vite + React

Marketing site for AdaptrixAI: applied AI, ML and data engineering, concept to production.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Structure

    index.html        fonts + #root mount
    src/main.jsx      React entry
    src/App.jsx       the full page (inline-styled sections)
    src/motion.js     all animation/interaction logic (SiteMotion class)
    src/index.css     resets, link colours, @keyframes

## App props

`<App accentColor="oklch(0.74 0.13 195)" motion="full" showMascot />`

- `accentColor` — overrides every accent element (`data-ax-accent-*` hooks) after mount.
- `motion` — `"full"` or `"calm"`; calm pauses drifting gradients, the hero cursor glow, parallax and dampens the film burn.
- `showMascot` — `false` hides the waving robot.

## Motion (src/motion.js)

| Feature | Hook |
| --- | --- |
| Scroll reveals + counters | `[data-r]`, `[data-count]` |
| Scroll progress bar / condensing nav | `[data-ax-progress]`, `[data-ax-nav]` |
| Hero film-burn light leak | `[data-ax-burn]` |
| Hero cursor glow / video | `[data-ax-glow]`, `[data-ax-hero-video]` |
| Parallax layers | `[data-ax-parallax]`, `[data-ax-par]` |
| 3D coverflow carousel | `[data-ax-cf]`, `[data-ax-cf-card]` — tune `SPACING`, `DEPTH`, `MAX_TILT`, `SPEED` |
| Approach phase tracker | `[data-ax-step]`, `[data-ax-dot]` |
| FAQ accordion | `[data-ax-faq]` |
| Robot mascot | `[data-ax-bot]` |
| Card image hover | `[data-ax-card]`, `[data-ax-cardimg]` |

Hover styling is declared inline as `data-hover="prop: value; …"` and applied by a
small effect in `App.jsx` — replace with CSS classes or styled-components if preferred.

## Media

Photography and the hero video are hot-linked from Pexels (free licence, commercial use).
Replace with your own assets in production: search `images.pexels.com` / `videos.pexels.com`
in `src/App.jsx`.

## Content source

Copy, services and industries are taken from adaptrixai.com. Contact details:
customerservice@adaptrixai.com · (+61) 416 206 144 · Melbourne.

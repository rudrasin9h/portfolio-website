# Rudra — The Developer Chronicles

A responsive, single-page React portfolio with a classic comic-book visual style. Built with Vite, plain CSS, GSAP + ScrollTrigger, and Lucide React icons. The central character is an original SVG illustration, so there are no superhero character or logo assets.

## Requirements
- Node.js 18+ (Node 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Customize the portfolio
Most content is kept in **`src/data/portfolio.js`**:
- `profile`: name, intro, email, GitHub, LinkedIn
- `skills`: categories, tools, and short descriptions
- `projects`: title, status, problem, solution, stack, decisions, results, and optional links
- `experiments`: current experiments, progress, and next milestones

Replace all placeholder content before publishing. In particular:
1. Change `your.email@example.com`, GitHub, and LinkedIn links.
2. Replace project placeholders with real work and verified outcomes.
3. Remove any project or experiment you do not want to show.
4. Set a project `github` or `demo` URL to `''` (empty string) when there is no link. Missing project links are not rendered.
5. Update the origin-story copy in `src/App.jsx` with your real background.

## Structure
```text
src/
  App.jsx                     Page sections and layout
  main.jsx                    React entry point
  components/
    Navigation.jsx            Sticky navigation + active section state
    SectionHeading.jsx        Reusable chapter heading
    ProjectModal.jsx          Accessible project details dialog
  data/
    portfolio.js              Editable content data
  styles/
    global.css                Theme, responsive layouts, animations, accessibility
```

## Features
- Comic cover hero with original SVG character illustration
- Origin story panels, skills cards, mission/project cards, workshop logs, and contact splash panel
- Sticky navigation with active-section highlighting and a mobile menu
- Project details modal (close button, Escape key, click outside, focus-visible styling)
- GSAP reveal animations with a `prefers-reduced-motion` fallback
- Responsive layouts for desktop, tablet, and mobile
- Semantic sections, accessible labels, keyboard-operable buttons, and no forced/hijacked scrolling
- No external image assets required

## Notes
- Google Fonts are loaded from Google Fonts; system fallbacks are included.
- Placeholder project visuals are CSS illustrations. Replace them with optimized screenshots if you have them.
- This starter intentionally avoids fake metrics, fabricated achievements, and skill-level ratings.

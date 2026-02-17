# leandaryan.com — Implementation Plan

## Vision

A typographically-driven portfolio for UI and graphic designer Leanda Ryan. Minimal, airy, but with editorial boldness — inspired by Dieter Rams' restraint, Paula Scher's typographic energy, and Muller Design's clean precision. The site leads with the work, uses K-Type fonts as a defining visual element, and includes a micro-blog called **Missives** for short-form thoughts.

---

## Site Map

```
leandaryan.com
├── /                     Home — intro + featured work + latest missives
├── /portfolio/           Portfolio grid — all projects
├── /portfolio/<project>/ Project detail — images + short description
├── /missives/            Missives — micro-blog feed
└── /about/               Bio + social links
```

---

## File Structure

```
Website/
├── index.html                        # Home
├── portfolio/
│   ├── index.html                    # Portfolio grid
│   └── <project-name>/
│       └── index.html                # Project detail (one per project)
├── missives/
│   └── index.html                    # Micro-blog feed
├── about/
│   └── index.html                    # Bio + social links
├── css/
│   ├── reset.css                     # Minimal CSS reset
│   ├── tokens.css                    # Design tokens (custom properties)
│   ├── typography.css                # @font-face + type scale
│   ├── components.css                # Reusable component styles
│   └── style.css                     # Main stylesheet (imports all above)
├── fonts/
│   └── (Keep Calm + Transport New webfont files — added by Leanda)
├── images/
│   ├── portfolio/                    # Project images
│   └── missives/                     # Optional blog images
├── js/
│   └── main.js                       # Dark/light mode toggle only
├── favicon.ico
├── CLAUDE.md
├── PLAN.md                           # This file
└── README.md
```

---

## Design System

### Typography

| Role            | Font            | Usage                                    |
|-----------------|-----------------|------------------------------------------|
| **Headings**    | Keep Calm       | Page titles, project names, site title   |
| **Body**        | Transport New   | Body text, missives, descriptions        |
| **Fallbacks**   | system-ui, sans-serif | Before webfonts load              |

**Type Scale** (modular, ratio ~1.333 — perfect fourth):

| Step  | Size     | Usage                          |
|-------|----------|--------------------------------|
| -1    | 0.75rem  | Captions, dates, meta          |
| 0     | 1rem     | Body text (16px base)          |
| 1     | 1.333rem | Large body, intro text         |
| 2     | 1.777rem | Section headings (h3)          |
| 3     | 2.369rem | Page headings (h2)             |
| 4     | 3.157rem | Hero headings (h1)             |
| 5     | 4.209rem | Display / home hero            |

### Colour Palette

```
Light mode:
  --color-bg:          #FAFAF8       Near-white with warm undertone
  --color-bg-alt:      #F0EFEC       Subtle section contrast
  --color-text:        #1A1A1A       Near-black
  --color-text-muted:  #6B6B6B       Secondary text, dates, meta
  --color-accent:      #D6338A       Bougainvillea pink
  --color-accent-soft: #D6338A1A     Pink at 10% opacity (hover states)
  --color-border:      #E0DFDC       Subtle dividers

Dark mode:
  --color-bg:          #141413       Deep warm black
  --color-bg-alt:      #1E1E1C       Subtle section contrast
  --color-text:        #EAEAE8       Warm off-white
  --color-text-muted:  #8A8A88       Secondary text
  --color-accent:      #E85DA4       Bougainvillea pink (slightly lighter for contrast)
  --color-accent-soft: #E85DA41A     Pink at 10% opacity
  --color-border:      #2A2A28       Subtle dividers
```

### Spacing Scale

Based on 0.5rem (8px) increments:

```
  --space-xs:   0.25rem    (4px)
  --space-sm:   0.5rem     (8px)
  --space-md:   1rem       (16px)
  --space-lg:   2rem       (32px)
  --space-xl:   4rem       (64px)
  --space-2xl:  8rem       (128px)
```

### Layout

- **Max content width**: 72rem (1152px)
- **Portfolio grid**: CSS Grid, responsive columns — `repeat(auto-fill, minmax(320px, 1fr))`
- **Body text max-width**: 38rem (~65 characters per line for readability)
- **Mobile-first** using `min-width` breakpoints only: 640px, 1024px (never use `max-width`)
- **Generous whitespace** — let the content breathe

---

## Page Details

### Home (`/`)

```
┌──────────────────────────────────────────────────┐
│  Leanda Ryan              Portfolio  Missives  About  ☽  │
│                                                          │
│                                                          │
│  Designer focused on                                     │
│  UI and visual design.                                   │
│                                                          │
│                                                          │
│  SELECTED WORK ──────────────────────────────────        │
│                                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                  │
│  │         │  │         │  │         │                  │
│  │  img    │  │  img    │  │  img    │                  │
│  │         │  │         │  │         │                  │
│  └─────────┘  └─────────┘  └─────────┘                  │
│  Project One   Project Two   Project Three               │
│                                                          │
│                              View all work →             │
│                                                          │
│  MISSIVES ───────────────────────────────────────        │
│                                                          │
│  A short thought about design...         12 Feb 2026     │
│  Another observation here...             08 Feb 2026     │
│                                                          │
│                              All missives →              │
│                                                          │
│──────────────────────────────────────────────────        │
│  © 2026  ·  Twitter  ·  Instagram  ·  LinkedIn           │
└──────────────────────────────────────────────────┘
```

- Typographic hero — no hero image, let the fonts speak
- 3 featured portfolio items (subset of full grid)
- 2–3 latest missives as a text list
- Minimal navigation: Portfolio, Missives, About, dark mode toggle (☽/☀)

### Portfolio Grid (`/portfolio/`)

```
┌──────────────────────────────────────────────────┐
│  Navigation                                              │
│                                                          │
│  PORTFOLIO                                               │
│                                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                  │
│  │         │  │         │  │         │                  │
│  │  img    │  │  img    │  │  img    │                  │
│  │         │  │         │  │         │                  │
│  └─────────┘  └─────────┘  └─────────┘                  │
│  Project One   Project Two   Project Three               │
│  UI Design     UI Design     Graphic Design              │
│                                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                  │
│  │         │  │         │  │         │                  │
│  │  img    │  │  img    │  │  img    │                  │
│  │         │  │         │  │         │                  │
│  └─────────┘  └─────────┘  └─────────┘                  │
│  Project Four  Project Five  Project Six                 │
│  UI Design     Graphic       UI Design                   │
│                                                          │
│  Footer                                                  │
└──────────────────────────────────────────────────┘
```

- Clean grid, generous gaps
- Each card: thumbnail image, project title (Keep Calm), category label (Transport New, muted)
- Subtle hover state — slight lift or accent border
- Entire card is clickable → project detail page

### Project Detail (`/portfolio/<project>/`)

```
┌──────────────────────────────────────────────────┐
│  Navigation                                              │
│                                                          │
│  ← Back to portfolio                                     │
│                                                          │
│  PROJECT TITLE                                           │
│  UI Design · 2025                                        │
│                                                          │
│  Short 1–2 sentence description of the project          │
│  and what was involved.                                  │
│                                                          │
│  ┌──────────────────────────────────────────┐            │
│  │                                          │            │
│  │            Full-width image              │            │
│  │                                          │            │
│  └──────────────────────────────────────────┘            │
│                                                          │
│  ┌──────────────────┐  ┌──────────────────┐              │
│  │                  │  │                  │              │
│  │   Detail img     │  │   Detail img     │              │
│  │                  │  │                  │              │
│  └──────────────────┘  └──────────────────┘              │
│                                                          │
│  Footer                                                  │
└──────────────────────────────────────────────────┘
```

- Back link at top
- Title + metadata (category, year)
- Short description (2–3 sentences max — maintainable)
- Images: mix of full-width and two-column layouts
- No complex case study structure — just show the work

### Missives (`/missives/`)

```
┌──────────────────────────────────────────────────┐
│  Navigation                                              │
│                                                          │
│  MISSIVES                                                │
│  Short thoughts on design and the web.                   │
│                                                          │
│  ─────────────────────────────────────────────           │
│  A short thought about something I noticed in            │
│  a project recently. Just a few lines.                   │
│                                              12 Feb 2026 │
│  ─────────────────────────────────────────────           │
│  ┌──────────────────┐                                    │
│  │                  │                                    │
│  │   Optional img   │                                    │
│  │                  │                                    │
│  └──────────────────┘                                    │
│  Caption for the image above.                            │
│                                              08 Feb 2026 │
│  ─────────────────────────────────────────────           │
│  Another observation. Brief.                             │
│                                              01 Feb 2026 │
│  ─────────────────────────────────────────────           │
│                                                          │
│  Footer                                                  │
└──────────────────────────────────────────────────┘
```

- Reverse-chronological feed
- Each entry: text, optional image + caption, date
- Separated by horizontal rules — clean, simple
- No titles on entries (like tweets/posts — just content)
- Adding a new missive = adding an `<article>` block to the HTML

### About (`/about/`)

```
┌──────────────────────────────────────────────────┐
│  Navigation                                              │
│                                                          │
│  ABOUT                                                   │
│                                                          │
│  ┌──────────┐  Bio text placeholder. A few              │
│  │          │  paragraphs about Leanda, her             │
│  │  Photo   │  background, interests, and              │
│  │          │  design philosophy.                       │
│  └──────────┘                                           │
│                                                          │
│  GET IN TOUCH                                            │
│                                                          │
│  hello@leandaryan.com                                    │
│                                                          │
│  Twitter · Instagram · LinkedIn · Dribbble               │
│                                                          │
│  Footer                                                  │
└──────────────────────────────────────────────────┘
```

- Photo + bio side by side (stacks on mobile)
- Social links as a clear list
- Email address (or contact link)

---

## Dark Mode Implementation

- CSS custom properties for all colours (defined in `tokens.css`)
- Default: light mode
- Toggle button in navigation (☽/☀ icon, pure CSS + tiny JS)
- Preference saved to `localStorage`
- Respects `prefers-color-scheme` on first visit
- Transition: subtle 200ms on background and color

```css
:root { /* light mode tokens */ }

[data-theme="dark"] { /* dark mode overrides */ }
```

```js
// ~15 lines: check localStorage → check prefers-color-scheme → toggle on click → save
```

---

## Implementation Order

### Phase 1: Foundation
1. CSS reset + design tokens (custom properties)
2. Typography setup (@font-face declarations — placeholder system fonts until Leanda adds K-Type files)
3. Base layout (header, nav, main, footer)
4. Dark/light mode toggle
5. Responsive navigation

### Phase 2: Pages
6. Home page structure + content placeholders
7. Portfolio grid page
8. Single project detail template (1 placeholder project)
9. Missives feed page (2–3 placeholder entries)
10. About page with placeholder bio

### Phase 3: Polish
11. Hover states + micro-interactions (CSS only)
12. Image lazy loading (native `loading="lazy"`)
13. Favicon + meta tags + Open Graph tags
14. Print styles (optional)
15. Accessibility review (semantic HTML, focus states, skip links, ARIA where needed)

---

## Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| No build system | Static HTML/CSS/JS | Simplicity, zero dependencies, easy to host anywhere |
| No CSS framework | Custom CSS with tokens | Full control, matches design vision, no bloat |
| CSS custom properties | For theming + consistency | Native, no preprocessor needed, enables dark mode |
| Minimal JS | Dark mode toggle only | Progressive enhancement — site works without JS |
| Directory-based URLs | `/portfolio/index.html` → `/portfolio/` | Clean URLs without server config |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` | Accessibility, SEO, future-proof |
| `min-width` breakpoints only | `@media (min-width: 640px)`, `@media (min-width: 1024px)` | True mobile-first — base styles are mobile, layer up for larger screens. Never use `max-width` media queries |
| System font fallbacks | `system-ui, sans-serif` | Good experience before webfonts load |

---

## Future Considerations (Not in scope now)

- **Static site generator** (Eleventy/Astro) — when maintaining HTML gets tedious, the clean structure migrates easily
- **Markdown for Missives** — could use a build step to convert `.md` files to HTML
- **RSS feed** for Missives — simple to add later
- **Project filtering** on portfolio grid (by category)
- **Transition animations** between pages (View Transitions API)

---

## Open TODOs

- [ ] Leanda to provide K-Type webfont files (Keep Calm + Transport New)
- [ ] Leanda to write bio text
- [ ] Leanda to provide portfolio project images + titles
- [ ] Leanda to provide social media links/handles
- [ ] Leanda to confirm bougainvillea pink shade preference
- [ ] Decide on portrait photo for About page

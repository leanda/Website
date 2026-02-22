# CLAUDE.md

## Project Overview

Personal website built with [Eleventy (11ty)](https://www.11ty.dev/) using Nunjucks templates.

## Repository Structure

```
Website/
├── src/                          # Source files (Eleventy input)
│   ├── _includes/
│   │   ├── base.njk              # Base HTML layout
│   │   └── partials/
│   │       ├── header.njk        # Shared site header + nav
│   │       └── footer.njk        # Shared site footer
│   ├── css/                      # Stylesheets (passthrough copy)
│   ├── js/                       # JavaScript (passthrough copy)
│   ├── images/                   # Images (passthrough copy)
│   ├── index.njk                 # Homepage
│   ├── about/index.njk           # About page
│   ├── portfolio/index.njk       # Portfolio listing
│   ├── portfolio/project-one/    # Individual project pages
│   └── missives/index.njk        # Missives page
├── _site/                        # Built output (git-ignored)
├── eleventy.config.js            # Eleventy configuration
├── package.json
├── CLAUDE.md
└── README.md
```

## Git Workflow

- **Primary branch**: `main` (remote) / `master` (local)
- Feature branches use the `claude/<description>-<id>` naming convention
- Commits should have clear, descriptive messages
- Push with `git push -u origin <branch-name>`

## Development Setup

- **Install dependencies**: `npm install`
- **Dev server** (with live reload): `npm run dev`
- **Production build**: `npm run build` (outputs to `_site/`)

## Conventions

### Code Style

No linter or formatter is configured yet. When added, document:

- Linter tool and config file location
- Formatter tool and config file location
- Any pre-commit hooks

### Testing

No test framework is configured yet. When added, document:

- Test runner and config
- Test file naming convention (e.g., `*.test.ts`, `*.spec.ts`)
- Test location (colocated vs. `__tests__/` directories)
- How to run tests: full suite, single file, watch mode

## Key Guidelines for AI Assistants

1. **Read before editing** — Always read a file before proposing changes to it.
2. **Minimal changes** — Only make changes that are directly requested. Avoid unnecessary refactoring or additions.
3. **No secrets in commits** — Never commit `.env` files, API keys, or credentials.
4. **Update this file** — When adding frameworks, tooling, or significant architectural decisions, update the relevant sections of this document.

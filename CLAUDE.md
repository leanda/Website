# CLAUDE.md

## Project Overview

Personal website. This repository is in its initial scaffolding phase — no framework, build system, or source code has been set up yet.

## Repository Structure

```
Website/
├── CLAUDE.md        # This file — AI assistant guidelines
└── README.md        # Project description
```

## Git Workflow

- **Primary branch**: `main` (remote) / `master` (local)
- Feature branches use the `claude/<description>-<id>` naming convention
- Commits should have clear, descriptive messages
- Push with `git push -u origin <branch-name>`

## Development Setup

No build system or dependencies are configured yet. When the project is set up:

- Update this section with install commands (e.g., `npm install`)
- Document the dev server command (e.g., `npm run dev`)
- Document the build command (e.g., `npm run build`)
- Document the test command (e.g., `npm test`)
- Document the lint command (e.g., `npm run lint`)

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

# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

---

## Project overview

A personal portfolio website built with React + Vite, deployed as a static site to GitHub Pages. It showcases the owner's projects to recruiters — each project entry includes a description, tech stack, and links to the repo and/or live demo.

This is a presentation layer only — no backend, no database, no authentication. Content (projects, bio, skills) is stored as typed data in `src/data/` and rendered directly.

---

## Expected data flow

```
src/data/projects.ts  →  App.tsx  →  ProjectCard.tsx (one per project)
```

All content is static at build time. Adding a new project means adding an entry to `src/data/projects.ts` — no API calls, no runtime data fetching.

```ts
interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}
```

---

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | React 18 + Vite |
| Language | TypeScript |
| Styling | Bootstrap 5 + react-bootstrap |
| Routing | React Router (only if multiple pages are added — single page is fine for now) |
| Content | Static typed data in `src/data/` |
| Deploy | GitHub Pages via `gh-pages` npm package (`npm run deploy`) |
| Linting | ESLint |

No backend, no database, no auth — everything ships as static files.

---

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint      # run ESLint
npm run deploy    # build and push to gh-pages branch
```

---

## Conventions

### General
- Keep this site simple and fast — it's a presentation layer, not an app. Avoid adding state management, backends, or build complexity unless a specific page genuinely needs it.
- Prefer static data over runtime fetching. If a project needs live data (e.g. GitHub stars), fetch client-side with graceful fallback — never block rendering on it.

### Structure
- `src/data/` — typed content (projects, skills, bio). Edit these files to update site content; avoid hardcoding content directly in components.
- `src/components/` — presentational components, one concern per file (e.g. `ProjectCard.tsx`).
- `src/App.tsx` — top-level layout and section composition.

### Styling
- Use react-bootstrap components and Bootstrap utility classes first. Reach for custom CSS (`index.css` or component-level CSS modules) only when Bootstrap doesn't cover the need.
- Keep visual design intentional rather than relying on default Bootstrap look — see the `frontend-design` skill for guidance on typography, color, and layout choices when building out new sections.

### Deployment
- `vite.config.ts` sets `base: "/profile/"` to match the GitHub Pages project path (`https://<username>.github.io/profile/`). Update this if the repo is renamed.
- Run `npm run deploy` to build and publish to the `gh-pages` branch.

### TypeScript
- `strict` mode is on. All content types live alongside their data in `src/data/`.
- No `any` — define interfaces for all data shapes (projects, skills, etc.).

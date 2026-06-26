# Portfolio — Sherline Bertrand

A personal portfolio website built with React + Vite, deployed as a static site to GitHub Pages. It showcases projects to recruiters — each entry includes a description, tech stack, and links to the repo and/or live demo.

## Project Flow

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

## Tech Stack

| Layer | Choice |
|---|---|
| Frontend | React 18 + Vite |
| Language | TypeScript |
| Styling | Bootstrap 5 + react-bootstrap |
| Content | Static typed data in `src/data/` |
| Deploy | GitHub Pages via `gh-pages` npm package |
| Linting | ESLint |

No backend, no database, no auth — everything ships as static files.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint      # run ESLint
npm run deploy    # build and push to gh-pages branch
```

## Deployment

The site is deployed to `https://sherlinebertrand.github.io/profile/`. The `base` path in `vite.config.ts` is set to `/profile/` to match this URL.

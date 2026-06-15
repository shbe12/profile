# Portfolio Migration Design

**Date:** 2026-06-14
**Goal:** Migrate content from legacy `index.html`, `style.css`, and `images/image.jpg` into the React + Vite app. Replace the Vite boilerplate in `src/App.tsx` with a real portfolio.

---

## Content Inventory

### From legacy files
- **Profile photo:** `images/image.jpg` → `src/assets/profile.jpg`
- **Skills (old):** HTML, CSS, JS, PHP, Angular, Sketch — replaced entirely
- **Bio (old):** "future web developer" — replaced with updated bio below
- **Social:** LinkedIn `https://www.linkedin.com/in/sherline-bertrand-20b210197/`

### Updated content

**Bio**
- Name: Sherline Bertrand
- Title: Full-Stack Developer
- Tagline: Focused on building user-centered web applications and AI-powered features
- Description: Full bio text (Le Wagon graduate, Rails + AI stack, ChairHop project, WebSockets, LLM integration)
- Location: Montreal | Open to local & remote opportunities
- Education: Le Wagon AI Software Development Bootcamp
- Languages: French, English, Haitian Creole (fluent) · Italian, Spanish (understanding)

**Skills** (by category)
- Frontend: HTML, CSS, Bootstrap, JavaScript, React
- Backend: Ruby on Rails
- AI & LLMs: OpenAI API, Prompt Engineering, Context Engineering
- Tools & Platforms: Git, GitHub, Figma, Heroku, Cloudinary, Vite, Claude
- Realtime: WebSockets, Action Cable

**Projects**
- ChairHop — AI-powered salon booking platform. AI assistant helps users find available appointments conversationally, reducing manual search. Built with Rails, JS, Bootstrap, OpenAI API, WebSockets, Action Cable, Heroku, Cloudinary.
  - Repo: https://github.com/WanjiKay/ChairHop_App_2

**Social/Media links**
- LinkedIn: https://www.linkedin.com/in/sherline-bertrand-20b210197/
- Email: sherlinebertrand@gmail.com
- GitHub: (user to provide URL — placeholder for now)

---

## Page Layout (top → bottom)

1. **Hero** — profile photo, name, title, tagline, full bio description
2. **Projects** — ChairHop card (title, description, tech stack badges, repo link)
3. **Skills** — badges grouped under category labels
4. **Media** — LinkedIn, email, GitHub icons/links

---

## Data Layer

### `src/data/bio.ts`
```ts
export interface Bio {
  name: string;
  title: string;
  tagline: string;
  description: string;
  location: string;
  education: string;
  languages: string;
  email: string;
  linkedin: string;
  github: string;
}
```

### `src/data/skills.ts`
```ts
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ai" | "tools" | "realtime";
}
```
Category labels rendered: Frontend · Backend · AI & LLMs · Tools & Platforms · Realtime

### `src/data/projects.ts` (unchanged interface from CLAUDE.md)
```ts
export interface Project {
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

## Component Structure

| Component | Props | Responsibility |
|---|---|---|
| `HeroSection` | `bio: Bio` | Photo, name, title, tagline, full description |
| `ProjectCard` | `project: Project` | Card with title, description, tech badges, repo link |
| `SkillsSection` | `skills: Skill[]` | Badges grouped by category |
| `MediaSection` | `bio: Bio` | LinkedIn, email, GitHub links |
| `App` | — | Composes all sections in order |

---

## Migrations & Cleanup

- Copy `images/image.jpg` → `src/assets/profile.jpg`
- Delete `images/` folder
- Delete root `style.css`
- Update `index.html` `<title>` to "Sherline Bertrand"
- Add `base: "/profile/"` to `vite.config.ts`
- Add Bootstrap CSS import to `src/main.tsx`

---

## Styling Approach

- Bootstrap 5 + react-bootstrap components (Card, Badge, Container, Row, Col)
- CSS custom properties from `src/index.css` (accent: purple, light/dark mode)
- No styles ported from legacy `style.css` — it's replaced entirely by Bootstrap + `src/index.css`
- `src/App.css` holds only small overrides Bootstrap can't handle (card border, badge accent color, hero padding)

---

## Verification

1. `npm run lint` — no unused imports
2. `npm run build` — clean TypeScript + Vite build
3. `npm run preview` — site visible at `localhost:4173/profile/` with correct layout order: Hero → Projects → Skills → Media

# Portfolio Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Vite boilerplate `src/App.tsx` with Sherline Bertrand's real portfolio, migrating content from the legacy `index.html`, `style.css`, and `images/image.jpg` into typed React components.

**Architecture:** All content lives in typed data files under `src/data/`; components are purely presentational and receive data as props. Page order top-to-bottom: Hero → Projects → Skills → Media. Bootstrap 5 + react-bootstrap handle layout; `src/index.css` CSS custom properties handle theming (light/dark).

**Tech Stack:** React 19, TypeScript (strict), Vite, Bootstrap 5, react-bootstrap, ESLint

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Modify | `vite.config.ts` | Add `base: "/profile/"` for GitHub Pages |
| Modify | `src/main.tsx` | Add Bootstrap CSS import before `index.css` |
| Modify | `index.html` | Update `<title>` |
| Copy | `images/image.jpg` → `src/assets/profile.jpg` | Profile photo in React asset pipeline |
| Create | `src/data/bio.ts` | Bio content + `Bio` interface |
| Create | `src/data/skills.ts` | Skills array + `Skill` interface |
| Create | `src/data/projects.ts` | Projects array + `Project` interface |
| Create | `src/components/HeroSection.tsx` | Photo, name, title, tagline, full bio |
| Create | `src/components/ProjectCard.tsx` | Card: title, description, tech badges, repo link |
| Create | `src/components/SkillsSection.tsx` | Badges grouped by category |
| Create | `src/components/MediaSection.tsx` | LinkedIn, GitHub, email links |
| Replace | `src/App.tsx` | Compose all sections |
| Replace | `src/App.css` | Portfolio-specific style overrides |
| Delete | `style.css` | Legacy — fully replaced |
| Delete | `images/` | Legacy — photo moved to src/assets/ |

---

## Task 1: Config + Bootstrap setup

**Files:**
- Modify: `vite.config.ts`
- Modify: `src/main.tsx`
- Modify: `index.html`

- [ ] **Step 1: Update vite.config.ts**

Replace the file with:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/profile/",
})
```

- [ ] **Step 2: Update src/main.tsx**

Replace the file with:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 3: Update index.html title**

Replace only the `<title>` line in `index.html`:

```html
<title>Sherline Bertrand</title>
```

- [ ] **Step 4: Verify**

```bash
cd /home/sherline/code/shbe12/profile && npm run build
```

Expected: build completes, output in `dist/`. Asset URLs will include `/profile/` prefix.

- [ ] **Step 5: Commit**

```bash
git add vite.config.ts src/main.tsx index.html
git commit -m "config: add base path, bootstrap css import, update title"
```

---

## Task 2: Asset migration

**Files:**
- Copy: `images/image.jpg` → `src/assets/profile.jpg`

- [ ] **Step 1: Copy profile photo into React asset pipeline**

```bash
cp /home/sherline/code/shbe12/profile/images/image.jpg \
   /home/sherline/code/shbe12/profile/src/assets/profile.jpg
```

- [ ] **Step 2: Verify file exists**

```bash
ls /home/sherline/code/shbe12/profile/src/assets/
```

Expected output includes: `hero.png  profile.jpg  react.svg  vite.svg`

- [ ] **Step 3: Commit**

```bash
git add src/assets/profile.jpg
git commit -m "assets: add profile photo"
```

---

## Task 3: Bio data file

**Files:**
- Create: `src/data/bio.ts`

- [ ] **Step 1: Create src/data/bio.ts**

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

export const bio: Bio = {
  name: "Sherline Bertrand",
  title: "Full-Stack Developer",
  tagline: "Focused on building user-centered web applications and AI-powered features.",
  description:
    "Experienced in developing scalable applications using Ruby on Rails, with strong " +
    "foundations in front-end development and real-time systems. I design and build products " +
    "that simplify user workflows, improve decision-making, and integrate intelligent features " +
    "using Large Language Models (LLMs).\n\n" +
    "One of my key projects, ChairHop, is an AI-powered salon booking marketplace where I built " +
    "HOPPS — an AI assistant that helps clients find available appointments conversationally and " +
    "guides stylists through the platform. Through this project I worked with GPT-4o via the " +
    "OpenAI API, applied prompt and context engineering, managed tokens for efficiency, and " +
    "integrated AI with real application data. I also implemented real-time features using " +
    "WebSockets and Action Cable, and built payment flows with Square.\n\n" +
    "Interested in contributing to teams building impactful, user-focused products with modern " +
    "web and AI technologies.",
  location: "Montreal · Open to local & remote opportunities",
  education: "Le Wagon AI Software Development Bootcamp",
  languages: "French, English, Haitian Creole (fluent) · Italian, Spanish (understanding)",
  email: "sherlinebertrand@gmail.com",
  linkedin: "https://www.linkedin.com/in/sherline-bertrand-20b210197/",
  github: "https://github.com/shbe12",
};
```

- [ ] **Step 2: Verify**

```bash
cd /home/sherline/code/shbe12/profile && npm run build
```

Expected: clean build, no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/bio.ts
git commit -m "data: add bio content"
```

---

## Task 4: Skills data file

**Files:**
- Create: `src/data/skills.ts`

- [ ] **Step 1: Create src/data/skills.ts**

```ts
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ai" | "tools" | "realtime";
}

export const skills: Skill[] = [
  { name: "HTML",               category: "frontend"  },
  { name: "CSS",                category: "frontend"  },
  { name: "Bootstrap",          category: "frontend"  },
  { name: "JavaScript",         category: "frontend"  },
  { name: "React",              category: "frontend"  },
  { name: "Ruby on Rails",      category: "backend"   },
  { name: "OpenAI API",         category: "ai"        },
  { name: "Prompt Engineering", category: "ai"        },
  { name: "Context Engineering",category: "ai"        },
  { name: "Git",                category: "tools"     },
  { name: "GitHub",             category: "tools"     },
  { name: "Figma",              category: "tools"     },
  { name: "Heroku",             category: "tools"     },
  { name: "Cloudinary",         category: "tools"     },
  { name: "Vite",               category: "tools"     },
  { name: "Claude",             category: "tools"     },
  { name: "WebSockets",         category: "realtime"  },
  { name: "Action Cable",       category: "realtime"  },
];
```

- [ ] **Step 2: Verify**

```bash
cd /home/sherline/code/shbe12/profile && npm run build
```

Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add src/data/skills.ts
git commit -m "data: add skills"
```

---

## Task 5: Projects data file

**Files:**
- Create: `src/data/projects.ts`

- [ ] **Step 1: Create src/data/projects.ts**

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

export const projects: Project[] = [
  {
    id: "chairhop",
    title: "ChairHop",
    description:
      "Two-sided booking marketplace connecting clients with independent hair stylists. " +
      "Stylists manage services, locations, and availability; clients discover stylists, " +
      "book appointments, and pay a 50% deposit via Square at booking. Features HOPPS — " +
      "an AI assistant (GPT-4o via RubyLLM) that helps clients find local stylists " +
      "conversationally and guides stylists through the platform. Built with real-time " +
      "direct messaging, pgvector-powered appointment search, Square card vaulting, " +
      "portfolio photo uploads, analytics dashboard, and a review system.",
    techStack: [
      "Rails 7.1",
      "PostgreSQL",
      "pgvector",
      "OpenAI GPT-4o",
      "RubyLLM",
      "Square Payments",
      "Hotwire / Turbo / Stimulus",
      "Bootstrap 5.3",
      "Action Cable",
      "Solid Queue",
      "Cloudinary",
      "Devise",
      "Pundit",
      "Heroku",
    ],
    repoUrl: "https://github.com/WanjiKay/ChairHop_App_2",
  },
];
```

- [ ] **Step 2: Verify**

```bash
cd /home/sherline/code/shbe12/profile && npm run build
```

Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add src/data/projects.ts
git commit -m "data: add ChairHop project"
```

---

## Task 6: HeroSection component

**Files:**
- Create: `src/components/HeroSection.tsx`

- [ ] **Step 1: Create src/components/HeroSection.tsx**

```tsx
import type { Bio } from '../data/bio';
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from '../assets/profile.jpg';

interface Props {
  bio: Bio;
}

export function HeroSection({ bio }: Props) {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center g-4">
          <Col xs={12} md="auto" className="text-center">
            <img
              src={profileImg}
              alt={bio.name}
              className="profile-photo rounded-circle"
            />
          </Col>
          <Col className="text-center text-md-start">
            <h1>{bio.name}</h1>
            <p className="lead fw-semibold mb-1">{bio.title}</p>
            <p className="text-muted mb-3">{bio.tagline}</p>
            {bio.description.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className="small text-muted mb-1">📍 {bio.location}</p>
            <p className="small text-muted mb-1">🎓 {bio.education}</p>
            <p className="small text-muted">🌐 {bio.languages}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

```bash
cd /home/sherline/code/shbe12/profile && npm run build
```

Expected: clean build. TypeScript resolves `.jpg` imports because `vite/client` types are included via `src/vite-env.d.ts`.

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: add HeroSection component"
```

---

## Task 7: ProjectCard component

**Files:**
- Create: `src/components/ProjectCard.tsx`

- [ ] **Step 1: Create src/components/ProjectCard.tsx**

```tsx
import type { Project } from '../data/projects';
import { Card, Badge } from 'react-bootstrap';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <Card className="project-card h-100">
      {project.imageUrl && (
        <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <div className="d-flex flex-wrap gap-1 mb-3">
          {project.techStack.map(tech => (
            <Badge key={tech} className="skill-badge">{tech}</Badge>
          ))}
        </div>
        <div className="mt-auto d-flex gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              View Repo
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              Live Demo
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
```

- [ ] **Step 2: Verify**

```bash
cd /home/sherline/code/shbe12/profile && npm run build
```

Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectCard.tsx
git commit -m "feat: add ProjectCard component"
```

---

## Task 8: SkillsSection component

**Files:**
- Create: `src/components/SkillsSection.tsx`

- [ ] **Step 1: Create src/components/SkillsSection.tsx**

```tsx
import type { Skill } from '../data/skills';
import { Badge } from 'react-bootstrap';

interface Props {
  skills: Skill[];
}

const CATEGORY_LABELS: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  ai: 'AI & LLMs',
  tools: 'Tools & Platforms',
  realtime: 'Realtime',
};

const CATEGORY_ORDER: Skill['category'][] = [
  'frontend',
  'backend',
  'ai',
  'tools',
  'realtime',
];

export function SkillsSection({ skills }: Props) {
  return (
    <>
      {CATEGORY_ORDER.map(category => {
        const group = skills.filter(s => s.category === category);
        if (group.length === 0) return null;
        return (
          <div key={category} className="mb-4">
            <h6
              className="text-uppercase text-muted mb-2"
              style={{ letterSpacing: '0.06em', fontSize: '0.75rem' }}
            >
              {CATEGORY_LABELS[category]}
            </h6>
            <div className="d-flex flex-wrap gap-2">
              {group.map(skill => (
                <Badge key={skill.name} className="skill-badge">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
```

- [ ] **Step 2: Verify**

```bash
cd /home/sherline/code/shbe12/profile && npm run build
```

Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add src/components/SkillsSection.tsx
git commit -m "feat: add SkillsSection component"
```

---

## Task 9: MediaSection component

**Files:**
- Create: `src/components/MediaSection.tsx`

- [ ] **Step 1: Create src/components/MediaSection.tsx**

```tsx
import type { Bio } from '../data/bio';

interface Props {
  bio: Bio;
}

export function MediaSection({ bio }: Props) {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <h2 className="mb-4">Get in Touch</h2>
        <div className="d-flex flex-wrap gap-3">
          <a
            href={bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            LinkedIn
          </a>
          <a
            href={bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            GitHub
          </a>
          <a
            href={`mailto:${bio.email}`}
            className="btn btn-outline-secondary"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify**

```bash
cd /home/sherline/code/shbe12/profile && npm run build
```

Expected: clean build.

- [ ] **Step 3: Commit**

```bash
git add src/components/MediaSection.tsx
git commit -m "feat: add MediaSection component"
```

---

## Task 10: App.tsx + App.css rewrite

**Files:**
- Replace: `src/App.tsx`
- Replace: `src/App.css`

- [ ] **Step 1: Replace src/App.css**

```css
.hero-section {
  padding: 80px 0 60px;
}

.profile-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 3px solid var(--accent-border);
}

.project-card {
  background: var(--bg);
  border: 1px solid var(--border) !important;
  box-shadow: var(--shadow);
}

.skill-badge {
  background: var(--accent-bg) !important;
  color: var(--accent) !important;
  border: 1px solid var(--accent-border);
  font-weight: 500;
  font-size: 0.8rem;
}

#projects,
#skills {
  text-align: left;
}
```

- [ ] **Step 2: Replace src/App.tsx**

```tsx
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { bio } from './data/bio'
import { skills } from './data/skills'
import { projects } from './data/projects'
import { HeroSection } from './components/HeroSection'
import { ProjectCard } from './components/ProjectCard'
import { SkillsSection } from './components/SkillsSection'
import { MediaSection } from './components/MediaSection'

function App() {
  return (
    <main>
      <HeroSection bio={bio} />

      <Container>
        <section id="projects" className="py-5">
          <h2 className="mb-4">Projects</h2>
          <Row xs={1} md={2} className="g-4">
            {projects.map(project => (
              <Col key={project.id}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </section>

        <section id="skills" className="py-5 border-top">
          <h2 className="mb-4">Skills</h2>
          <SkillsSection skills={skills} />
        </section>
      </Container>

      <MediaSection bio={bio} />

      <footer className="text-center py-4 border-top">
        <small style={{ color: 'var(--text)' }}>
          &copy; {new Date().getFullYear()} {bio.name}
        </small>
      </footer>
    </main>
  )
}

export default App
```

- [ ] **Step 3: Verify**

```bash
cd /home/sherline/code/shbe12/profile && npm run lint && npm run build
```

Expected: lint passes with zero warnings; build completes cleanly.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx src/App.css
git commit -m "feat: wire up portfolio layout in App"
```

---

## Task 11: Delete legacy files

**Files:**
- Delete: `style.css`
- Delete: `images/` folder

- [ ] **Step 1: Delete legacy CSS and image folder**

```bash
rm /home/sherline/code/shbe12/profile/style.css
rm -rf /home/sherline/code/shbe12/profile/images
```

- [ ] **Step 2: Verify build still passes (nothing references deleted files)**

```bash
cd /home/sherline/code/shbe12/profile && npm run build
```

Expected: clean build. No references to `style.css` or `images/` exist in the React app.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove legacy style.css and images folder"
```

---

## Task 12: Final verification

- [ ] **Step 1: Run full check**

```bash
cd /home/sherline/code/shbe12/profile && npm run lint && npm run build
```

Expected: zero lint errors, clean build in `dist/`.

- [ ] **Step 2: Preview production build**

```bash
cd /home/sherline/code/shbe12/profile && npm run preview
```

Open `http://localhost:4173/profile/` and verify:
1. Hero: profile photo visible (circular), name "Sherline Bertrand", title, tagline, bio paragraphs, location/education/languages
2. Projects: ChairHop card with description, tech stack badges, "View Repo" link
3. Skills: badges grouped under Frontend / Backend / AI & LLMs / Tools & Platforms / Realtime headings
4. Media: LinkedIn, GitHub, Email buttons
5. Footer: copyright with name and current year
6. Toggle OS dark mode — colors switch (no hardcoded colors in new files)

- [ ] **Step 3: Done**

All legacy files removed. All content migrated. Site ready for `npm run deploy`.

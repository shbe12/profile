import presentImg from "../assets/Present.png";
import chairhopImg from "../assets/Chairhop.png";
import reviewImg from "../assets/Review.png";
import mockInterviewImg from "../assets/MockInterview.png";

export type ProjectStatus = "in-progress" | "on-hold" | "past-contributor";

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights?: string[];
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  demoNote?: string;
  imageUrl?: string;
  featured?: boolean;
  teamProject?: boolean;
  status?: ProjectStatus;
  dateRange?: string;
}

export const projects: Project[] = [
  {
    id: "present",
    title: "Present",
    description:
      "Full-stack attendance and financial management application for community " +
      "organizations — churches, social clubs, sports teams, and similar groups.",
    highlights: [
      "Implemented business rules that automatically generate charges for late and no-show attendance.",
      "Added validation logic to prevent duplicate charges and maintain accurate member balances.",
      "Wrote backend unit tests using Minitest to validate application behavior.",
      "Tested edge cases across attendance, billing, payment, and balance workflows.",
      "Debugged backend logic and verified expected behavior across application workflows.",
      "Deployed the application using Kamal and Docker to AWS EC2 with PostgreSQL.",
    ],
    featured: true,
    status: "in-progress",
    techStack: [
      "Rails 8.1",
      "PostgreSQL",
      "Minitest",
      "Devise",
      "Hotwire / Turbo / Stimulus",
      "Bootstrap 5.3",
      "Solid Queue",
      "Docker",
      "Kamal",
      "AWS EC2",
    ],
    repoUrl: "https://github.com/shbe12/Present",
    demoUrl: "https://presentapp.app",
    demoNote: "Demo credentials available upon request.",
    imageUrl: presentImg,
  },
  {
    id: "review",
    title: "Review",
    description:
      "Full-stack activity review web app where users share and rate experiences like " +
      "hiking and kayaking.",
    highlights: [
      "Built a REST API with FastAPI, including endpoints to create and retrieve users and reviews.",
      "Designed a relational database with SQLAlchemy and SQLite, modelling a one-to-many relationship between users and their reviews.",
      "Validated incoming data and shaped API responses with Pydantic schemas, including rating limits (1–5) and email validation.",
      "Rendered server-side pages with Jinja2 templates and Bootstrap, including a home feed, single-review pages and per-user review pages.",
      "Built custom error handling that returns JSON for API clients and friendly HTML error pages for website visitors.",
      "Debugged and tested API endpoints with FastAPI’s interactive docs (Swagger UI).",
    ],
    status: "in-progress",
    dateRange: "Oct 2026 – Present",
    techStack: [
      "Python",
      "FastAPI",
      "FastAPI CLI",
      "SQLAlchemy",
      "SQLite",
      "Pydantic",
      "Jinja2",
      "Bootstrap 5.3",
      "JavaScript",
      "Git",
    ],
    repoUrl: "https://github.com/shbe12/review-project",
    imageUrl: reviewImg,
  },
  {
    id: "chairhop",
    title: "ChairHop",
    description:
      "Two-sided salon booking marketplace developed collaboratively during the Le Wagon " +
      "AI Software Development bootcamp, connecting clients with independent hair stylists.",
    highlights: [
      "Developed backend functionality using Ruby on Rails and PostgreSQL.",
      "Built booking and appointment workflows involving multiple business rules and user roles.",
      "Implemented real-time functionality using Action Cable and WebSockets.",
      "Contributed to AI-powered appointment discovery and conversational functionality (GPT-4o via RubyLLM).",
      "Collaborated with teammates to develop, test, debug, and present the application.",
    ],
    teamProject: true,
    status: "past-contributor",
    dateRange: "Nov 2025 – May 2026",
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
    demoUrl: "https://chair-hop.com/",
    imageUrl: chairhopImg,
  },
  {
    id: "ai-mock-interview",
    title: "AI Mock Interview Agent",
    description:
      "Resume-aware AI interviewer that runs a five-phase adaptive mock interview over text " +
      "or voice, then scores each phase and generates a final report.",
    highlights: [
      "Built with Claude Code under my supervision: I defined the requirements, directed the work phase by phase, and tested the app both with Claude and manually by walking through each feature in the browser.",
      "Parsed uploaded PDF resumes with Claude to extract skills and projects and classify the candidate's field.",
      "Orchestrated a five-phase interview (background, two Socratic project drill-downs, technical ML questions, behavioral) that adapts to the candidate's answers and offers hints when they are stuck.",
      "Added voice mode with ElevenLabs speech-to-text and text-to-speech, plus a heuristic that detects anxious speech (speaking rate, filler words) and has the interviewer reassure the candidate.",
      "Retrieved technical questions from an ML question bank using MiniLM embeddings run through ONNX Runtime.",
      "Built a Claude-powered evaluation engine that scores each phase and stores sessions, messages, and reports in Supabase.",
      "Wrote pytest unit tests and a Playwright end-to-end suite, and fixed bugs found through live end-to-end testing.",
    ],
    status: "on-hold",
    dateRange: "Aug 2026",
    techStack: [
      "Python",
      "FastAPI",
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Claude API",
      "ElevenLabs",
      "Supabase",
      "ONNX Runtime",
      "pytest",
      "Playwright",
      "Vercel",
      "Claude Code",
    ],
    repoUrl: "https://github.com/shbe12/agentic-engineering-interview-system",
    demoUrl: "https://ai-mock-interview-frontend-50xbt7a52-personal-projects-25c7.vercel.app/",
    imageUrl: mockInterviewImg,
  },
  {
    id: "email-agent",
    title: "Email Agent",
    description:
      "AI-powered Gmail reply agent that drafts answers to course inquiries for a cinema " +
      "academy, grounded in a knowledge base of 150 courses. Replies are never sent " +
      "automatically — every draft is reviewed, edited, and approved by the user.",
    highlights: [
      "Built with Claude Code under my supervision: I defined the requirements, directed the work phase by phase, and tested the app both with Claude and manually by walking through each feature in the browser.",
      "Built a RAG pipeline that embeds a course catalogue into Supabase pgvector and retrieves the most relevant courses for each incoming email.",
      "Generated reply drafts with the Gemini API, with retry and backoff on rate-limit and availability errors.",
      "Integrated the Gmail API to read the primary inbox, display full email threads, and send threaded replies.",
      "Implemented a human-in-the-loop flow: editable drafts, regenerate/reset controls, and a single \"Approve & Send\" button.",
      "Secured the app with Google OAuth via Supabase Auth, verifying the session on every Gmail and database operation.",
      "Stored original emails, AI drafts, sent replies, and 1–5 star feedback in PostgreSQL, feeding past feedback back into new drafts.",
    ],
    status: "on-hold",
    dateRange: "Aug 2026",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Gemini API",
      "Gmail API",
      "Google OAuth",
      "Tailwind CSS",
      "Claude Code",
    ],
    repoUrl: "https://github.com/shbe12/Email-Agent",
    demoUrl: "https://email-agent-4vd9e9e7z-personal-projects-25c7.vercel.app/login",
    demoNote: "Sign-in is restricted to the account owner. Demo available upon request.",
  },
];

import presentImg from "../assets/Present.png";
import chairhopImg from "../assets/Chairhop.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  teamProject?: boolean;
  demoCredentials?: { email: string; password: string };
}

export const projects: Project[] = [
  {
    id: "present",
    title: "Present",
    description:
      "Admin-only attendance and finance tracker for groups — churches, social clubs, sports " +
      "teams, or community organizations. Admins record attendance per event, and the system " +
      "automatically charges members for lateness or no-shows. Charges and payments roll up " +
      "into per-member balances, while a treasury balance tracks group income against expenses. " +
      "Built with Hotwire for in-place attendance and payment updates, and deployed via Kamal " +
      "to a single AWS EC2 box running Postgres as a Docker accessory.",
    featured: true,
    techStack: [
      "Rails 8.1",
      "PostgreSQL",
      "Devise",
      "Hotwire / Turbo / Stimulus",
      "Bootstrap 5.3",
      "Solid Queue",
      "Kamal",
      "AWS EC2",
    ],
    repoUrl: "https://github.com/shbe12/Present",
    demoUrl: "http://3.99.87.200",
    imageUrl: presentImg,
    demoCredentials: { email: "you@example.com", password: "StrongPassword123!" },
  },
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
    teamProject: true,
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
];

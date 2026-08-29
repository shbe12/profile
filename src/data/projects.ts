import presentImg from "../assets/Present.png";
import chairhopImg from "../assets/Chairhop.png";

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
];

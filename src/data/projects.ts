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

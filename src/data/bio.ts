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
  languages: "French, English, Haitian Creole (fluent) · Spanish (understanding)",
  email: "sherlinebertrand@gmail.com",
  linkedin: "https://www.linkedin.com/in/sherline-bertrand-20b210197/",
  github: "https://github.com/shbe12",
};

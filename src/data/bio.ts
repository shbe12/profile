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
  title: "Full-Stack Developer | Python | Ruby on Rails",
  tagline: "Building and validating web applications with Ruby on Rails, Python, and PostgreSQL.",
  description:
    "Full-Stack Developer with a strong interest in full-stack development.\n\n" +
    "I build and validate web applications using Ruby on Rails, Python, JavaScript, PostgreSQL, " +
    "and modern development tools. My development experience has given me a strong understanding " +
    "of application architecture, backend logic, databases, and the importance of validating " +
    "software behavior.\n\n" +
    "I am currently working on two projects. My primary project, PRESENT, is an attendance and " +
    "financial management application where I implemented business rules for attendance-based " +
    "charges, member balances, payments, and expenses. I also wrote backend tests and validated " +
    "edge cases around billing and attendance workflows.\n\n" +
    "Review is a full-stack review web app where users share and rate any experience they have " +
    "tried, such as hiking or kayaking. I am building it with Python and FastAPI, using SQLAlchemy for the " +
    "database, Pydantic for data validation, and Jinja2 templates for server-rendered pages.\n\n" +
    "During my Le Wagon bootcamp, I contributed to ChairHop, a full-stack salon booking " +
    "marketplace, where I worked on backend functionality, real-time features, database-driven " +
    "workflows, and AI-powered functionality.\n\n" +
    "I also built two AI agents with Claude Code under my supervision: an AI mock interview " +
    "agent and a Gmail reply agent.\n\n" +
    "I am currently open to opportunities in backend and full-stack development.",
  location: "Montreal · Open to local & remote opportunities",
  education: "Le Wagon AI Software Development Bootcamp",
  languages: "French, English, Haitian Creole (fluent) · Spanish (understanding)",
  email: "sherlinebertrand@gmail.com",
  linkedin: "https://www.linkedin.com/in/sherline-bertrand-20b210197/",
  github: "https://github.com/shbe12",
};

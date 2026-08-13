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
  title: "Full-Stack Developer | QA & Software Testing | Python | Ruby on Rails",
  tagline: "Building and validating web applications with Ruby on Rails, Python, and PostgreSQL.",
  description:
    "Full-Stack Developer with a strong interest in software quality, testing, and backend " +
    "development.\n\n" +
    "I build and validate web applications using Ruby on Rails, Python, JavaScript, PostgreSQL, " +
    "and modern development tools. My development experience has given me a strong understanding " +
    "of application architecture, backend logic, databases, and the importance of validating " +
    "software behavior.\n\n" +
    "In my projects, I have worked with automated testing using Minitest, business-rule " +
    "validation, edge-case testing, debugging, and troubleshooting backend workflows. I am " +
    "currently strengthening my Python testing skills with pytest and developing my understanding " +
    "of software QA and test automation.\n\n" +
    "My primary project, PRESENT, is an attendance and financial management application where I " +
    "implemented business rules for attendance-based charges, member balances, payments, and " +
    "expenses. I also wrote backend tests and validated edge cases around billing and attendance " +
    "workflows.\n\n" +
    "I also developed ChairHop, a full-stack salon booking marketplace during my Le Wagon " +
    "bootcamp, where I worked on backend functionality, real-time features, database-driven " +
    "workflows, and AI-powered functionality.\n\n" +
    "I am currently open to opportunities in QA, software testing, test automation, and " +
    "backend/full-stack development, where I can combine my development background with a " +
    "strong focus on software quality.",
  location: "Montreal · Open to local & remote opportunities",
  education: "Le Wagon AI Software Development Bootcamp",
  languages: "French, English, Haitian Creole (fluent) · Spanish (understanding)",
  email: "sherlinebertrand@gmail.com",
  linkedin: "https://www.linkedin.com/in/sherline-bertrand-20b210197/",
  github: "https://github.com/shbe12",
};

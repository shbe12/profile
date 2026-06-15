export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ai" | "tools" | "realtime";
}

export const skills: Skill[] = [
  { name: "HTML",                category: "frontend"  },
  { name: "CSS",                 category: "frontend"  },
  { name: "Bootstrap",           category: "frontend"  },
  { name: "JavaScript",          category: "frontend"  },
  { name: "React",               category: "frontend"  },
  { name: "Ruby on Rails",       category: "backend"   },
  { name: "OpenAI API",          category: "ai"        },
  { name: "Prompt Engineering",  category: "ai"        },
  { name: "Context Engineering", category: "ai"        },
  { name: "Git",                 category: "tools"     },
  { name: "GitHub",              category: "tools"     },
  { name: "Figma",               category: "tools"     },
  { name: "Heroku",              category: "tools"     },
  { name: "Cloudinary",          category: "tools"     },
  { name: "Vite",                category: "tools"     },
  { name: "Claude",              category: "tools"     },
  { name: "WebSockets",          category: "realtime"  },
  { name: "Action Cable",        category: "realtime"  },
];

export interface Skill {
  name: string;
  category: "testing" | "programming" | "backend" | "tools" | "frontend" | "ai" | "realtime";
}

export const skills: Skill[] = [
  { name: "Software Testing",       category: "testing"     },
  { name: "Minitest",               category: "testing"     },
  { name: "pytest",                 category: "testing"     },
  { name: "Unit Testing",           category: "testing"     },
  { name: "Test Automation",        category: "testing"     },
  { name: "Debugging",              category: "testing"     },
  { name: "Business Rule Validation", category: "testing"   },

  { name: "Python",                 category: "programming" },
  { name: "Ruby",                   category: "programming" },
  { name: "JavaScript",             category: "programming" },

  { name: "Ruby on Rails",          category: "backend"     },
  { name: "PostgreSQL",             category: "backend"     },
  { name: "SQL",                    category: "backend"     },

  { name: "Git",                    category: "tools"       },
  { name: "GitHub",                 category: "tools"       },
  { name: "Docker",                 category: "tools"       },
  { name: "AWS",                    category: "tools"       },
  { name: "Heroku",                 category: "tools"       },
  { name: "Kamal",                  category: "tools"       },

  { name: "HTML",                   category: "frontend"    },
  { name: "CSS",                    category: "frontend"    },
  { name: "Bootstrap",              category: "frontend"    },
  { name: "JavaScript",             category: "frontend"    },
  { name: "Hotwire",                category: "frontend"    },
  { name: "Stimulus",               category: "frontend"    },

  { name: "LLM Integration",        category: "ai"          },
  { name: "Prompt Engineering",     category: "ai"          },
  { name: "Context Engineering",    category: "ai"          },

  { name: "WebSockets",             category: "realtime"    },
  { name: "Action Cable",           category: "realtime"    },
];

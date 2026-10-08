// Single source of truth for personal info used across the site.
// Update this file instead of editing components when your details change.

export const site = {
  name: "Wahyu Aditya Yudisthiro Arvel Braswito Sapardi",
  shortName: "Arvel",
  role: "Software Engineering Student · AI Enthusiast",
  university: "BINUS University",
  email: "arvelyudisthiro@gmail.com",
  linkedin: "https://www.linkedin.com/in/yudisthiro-arvel-46b5bb360/",
  availability: "Open to internships & full-time roles",
  intro:
    "I'm Arvel, a Software Engineering student at BINUS University who got hooked on Artificial Intelligence. I build backends and mobile apps, write research papers, and compete in competitive programming.",
  description:
    "Portfolio of Wahyu Aditya Yudisthiro Arvel Braswito Sapardi, a Software Engineering student at BINUS University with a passion for AI, building backends, mobile apps, and research.",
};

/** About section copy */
export const bio = {
  lead: "I like knowing why a system works, not just that it works.",
  paragraphs: [
    "I'm a fifth-semester Software Engineering student at BINUS University. Most of my work so far lives in the back end and in system design: modelling an order lifecycle as a state machine, splitting modules into clean layers, and choosing a stack I can defend to the team that builds on it.",
    "Outside coursework I write research and compete in algorithmic programming. ICPC taught me that a correct solution that is too slow is simply wrong; writing an IEEE paper taught me that a claim only counts if you can back it up.",
    "Lately I've been pulled toward Artificial Intelligence, from wiring the Gemini API into a counselling chatbot to wanting to understand the models behind it. That's where I'm heading next. And whatever I'm building, there's music playing.",
  ],
};

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export const socials: SocialLink[] = [
  { label: "Email", href: `mailto:${site.email}`, handle: site.email },
  { label: "LinkedIn", href: site.linkedin, handle: "in/yudisthiro-arvel" },
];

export interface NavLink {
  label: string;
  href: string;
}

// Links start with "/" so they also work from project detail pages.
export const navLinks: NavLink[] = [
  { label: "about", href: "/#about" },
  { label: "projects", href: "/#projects" },
  { label: "journey", href: "/#journey" },
  { label: "contact", href: "/#contact" },
];

/** Shown as a mini YAML file in the hero terminal window. */
export const profileFacts: { key: string; value: string | number | boolean }[] = [
  { key: "name", value: "Arvel" },
  { key: "major", value: "Software Engineering" },
  { key: "campus", value: "BINUS University" },
  { key: "semester", value: 5 },
  { key: "into", value: "Artificial Intelligence" },
  { key: "open_to_work", value: true },
];

export interface Highlight {
  value: string;
  label: string;
}

// The hero adds a third highlight with the live project count from src/content/projects.
export const heroHighlights: Highlight[] = [
  { value: "Top 40", label: "ICPC Asia Jakarta National Contest 2025 · Honorable Mention" },
  { value: "First Author", label: "IEEE-format paper on algorithmic task prioritisation" },
];

/** Scrolling ticker under the hero; tools taken from the projects so far. */
export const techTicker: string[] = [
  "NestJS",
  "Prisma",
  "MySQL",
  "Flutter",
  "Riverpod",
  "Node.js",
  "Express",
  "JWT Auth",
  "Gemini API",
  "Google OAuth",
  "Figma",
  "JavaScript",
  "System Architecture",
  "Competitive Programming",
];

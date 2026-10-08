// What I do and the tools I've actually shipped with.
// Only list tools used in a real project so every item can be backed up in an interview.

export interface FocusArea {
  title: string;
  description: string;
}

export const focusAreas: FocusArea[] = [
  {
    title: "Backend & Architecture",
    description: "Layered APIs, explicit state machines, and relational data models.",
  },
  {
    title: "Mobile Development",
    description: "Flutter apps with a clean service layer between the UI and the network.",
  },
  {
    title: "UI/UX & Front-end",
    description: "Figma first, then accessible HTML, CSS, and JavaScript.",
  },
  {
    title: "Research & Algorithms",
    description: "IEEE-format research and competitive programming at ICPC.",
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: "backend", items: ["NestJS", "Node.js", "Express", "Prisma", "MySQL", "JWT & bcrypt"] },
  { label: "mobile", items: ["Flutter", "Riverpod"] },
  { label: "frontend", items: ["HTML", "CSS", "JavaScript", "Figma"] },
  { label: "ai_and_apis", items: ["Gemini API", "Google OAuth"] },
  {
    label: "practices",
    items: ["System Architecture", "State Machines", "Use Case Modelling", "Algorithmic Problem Solving"],
  },
];

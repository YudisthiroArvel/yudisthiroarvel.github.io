// Milestones shown in the Journey timeline, newest first.
// Add a new entry at the top whenever something worth remembering happens.

export type MilestoneKind = "now" | "education" | "engineering" | "research" | "achievement";

export interface Milestone {
  date: string;
  title: string;
  description: string;
  kind: MilestoneKind;
  /** Optional link to a project page or external proof */
  href?: string;
}

export const education = {
  school: "BINUS University",
  program: "Software Engineering",
  status: "5th semester",
  focus: "Growing interest in Artificial Intelligence",
};

export const milestones: Milestone[] = [
  {
    date: "Now",
    title: "Exploring AI, open to work",
    description:
      "Fifth-semester Software Engineering student looking for internships and full-time roles.",
    kind: "now",
  },
  {
    date: "2026",
    title: "First-author research paper",
    description:
      "Proposed an algorithm that prioritises academic tasks by deadline proximity and urgency, written to IEEE format.",
    kind: "research",
    href: "/projects/task-reminder-research/",
  },
  {
    date: "2026",
    title: "System Architect for a team of six",
    description: "Designed the full stack and role model of RuangPulih, a mental-health app built around SDG 3.",
    kind: "engineering",
    href: "/projects/ruangpulih/",
  },
  {
    date: "2026",
    title: "Backend for a two-sided marketplace",
    description: "Built NestJS modules and an order state machine for Tolongin's escrow flow.",
    kind: "engineering",
    href: "/projects/tolongin/",
  },
  {
    date: "Oct 2025",
    title: "ICPC Honorable Mention · Top 40",
    description: "Qualified to represent BINUS University at the ICPC Asia Jakarta Regional.",
    kind: "achievement",
    href: "/projects/icpc-inc-2025/",
  },
  {
    date: "2025",
    title: "Shipped a full-stack app solo",
    description: "Built Wuthering Wares end to end: Flutter client, Express API, and Google sign-in.",
    kind: "engineering",
    href: "/projects/wuthering-wares/",
  },
  {
    date: "2024",
    title: "Started Software Engineering at BINUS University",
    description: "Where the journey began.",
    kind: "education",
  },
];

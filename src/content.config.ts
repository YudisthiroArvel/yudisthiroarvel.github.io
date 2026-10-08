// Content collections: each project is one Markdown file in src/content/projects/.
// The schema below validates every file at build time, so a typo or a missing
// field fails the build with a clear message instead of breaking the page.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number().int(),
      role: z.string(),
      /** Course, event, or client the work was done for */
      context: z.string(),
      team: z.string(),
      tags: z.array(z.string()),
      stack: z.array(z.string()).default([]),
      /** Featured projects get the large card at the top of the grid */
      featured: z.boolean().default(false),
      /** Lower numbers appear first */
      order: z.number().default(100),
      cover: image(),
      /** "contain" shows the whole image (documents, certificates) instead of cropping it */
      coverFit: z.enum(["cover", "contain"]).default("cover"),
      /** Phone screenshots; when present the card shows them side by side */
      screens: z.array(image()).default([]),
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    }),
});

export const collections = { projects };

# Arvel — personal website

Personal website of **Wahyu Aditya Yudisthiro Arvel Braswito Sapardi**, Software Engineering student at BINUS University with a passion for AI.

**Live:** https://yudisthiroarvel.github.io

Built with [Astro](https://astro.build), plain CSS, and a little TypeScript. Modern-retro design: dark purple CRT, pixel type, hard shadows.

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm install      # once: installs dependencies into node_modules/
npm run dev      # starts http://localhost:4321 with live reload
npm run build    # creates the production site in dist/
npm run preview  # serves dist/ to check the production build
```

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. No manual upload needed.

## Project structure

```
.github/workflows/      CI: automatic build + deploy to GitHub Pages
public/                 Static files copied as-is (favicon, resume PDF)
src/
  assets/projects/      Project screenshots, optimized to WebP at build time
  components/
    layout/             Site-wide pieces (Navbar, Footer)
    projects/           ProjectCard and ProjectMedia
    sections/           One component per homepage section
    ui/                 Reusable building blocks (Button, Window, Chip, ...)
  content/projects/     One Markdown file per project (the case studies)
  content.config.ts     Schema that validates every project file
  data/                 site.ts (profile, links), skills.ts, journey.ts
  layouts/              Page shell: <head>, fonts, global styles
  lib/projects.ts       Shared helpers for loading and sorting projects
  pages/                index.astro (home) and projects/[slug].astro (case studies)
  styles/
    tokens.css          Design tokens: colors, type scale, spacing, motion
    global.css          Reset, base styles, utilities, shared animations
```

## Updating content

| To change…                              | Edit                                   |
| --------------------------------------- | -------------------------------------- |
| Name, email, links, hero text           | `src/data/site.ts`                     |
| Skills and focus areas                  | `src/data/skills.ts`                   |
| Education and timeline milestones       | `src/data/journey.ts`                  |
| Colors, fonts, spacing                  | `src/styles/tokens.css`                |

### Adding a project

1. Put its images in `src/assets/projects/<slug>/`.
2. Copy any file in `src/content/projects/` to `<slug>.md` and edit the frontmatter and text.
3. Run `npm run dev`. The card, the case-study page at `/projects/<slug>/`, and the
   project count in the hero all update automatically. If a field is missing or
   misspelled, the build stops and tells you which file and field to fix.

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
  assets/               Images that Astro optimizes at build time
  components/
    layout/             Site-wide pieces (Navbar, Footer)
    sections/           One component per page section (Hero, About, ...)
    ui/                 Reusable building blocks (Button, Window, Marquee)
  data/site.ts          Personal info: name, links, highlights, tech ticker
  layouts/              Page shell: <head>, fonts, global styles
  pages/                Every file here becomes a URL
  styles/
    tokens.css          Design tokens: colors, type scale, spacing, motion
    global.css          Reset, base styles, utilities, shared animations
```

## Updating content

- Personal details, links, hero highlights, tech ticker: `src/data/site.ts`
- Colors, fonts, spacing: `src/styles/tokens.css`

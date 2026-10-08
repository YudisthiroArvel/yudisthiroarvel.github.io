// Generates /sitemap.xml at build time so search engines can find every page.
// New projects are included automatically.
import type { APIRoute } from "astro";
import { getSortedProjects, projectUrl } from "../lib/projects";

export const GET: APIRoute = async ({ site }) => {
  const projects = await getSortedProjects();
  const paths = ["/", ...projects.map(projectUrl)];
  const urls = paths.map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};

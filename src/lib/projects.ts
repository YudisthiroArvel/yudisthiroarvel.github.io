import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

/** All projects, ordered by `order` (then newest first) so every page lists them the same way. */
export async function getSortedProjects(): Promise<Project[]> {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export function projectUrl(project: Project): string {
  return `/projects/${project.id}/`;
}

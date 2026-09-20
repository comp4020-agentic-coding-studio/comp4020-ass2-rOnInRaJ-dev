// Shared readers for the spec suite. The build emits everything these tests
// need: a node index with frontmatter, a per-node JSON file carrying the raw
// markdown body, and llms-full.txt, which is every rendered page including the
// ones that are not content-collection entries (home, policies, field days).
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export interface Node {
  id: string;
  type: string;
  title: string;
  description: string;
  related?: string[];
  spec?: string[];
  meta?: Record<string, any>;
}

export interface Api {
  course: { code: string; title: string; startDate: string; endDate: string };
  nodes: Node[];
  edges: { from: string; to: string }[];
}

export const api: Api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8"));

/** The raw markdown body of a node, from its per-entry API file. */
export function body(id: string): string {
  const path = resolve("dist/api", `${id}.json`);
  if (!existsSync(path)) return "";
  return JSON.parse(readFileSync(path, "utf8")).body ?? "";
}

/** Every page's markdown, concatenated — the whole site as text. */
export const siteText: string = readFileSync(resolve("dist/llms-full.txt"), "utf8");

export const nodesOfType = (type: string): Node[] => api.nodes.filter((n) => n.type === type);

/** The node for a given week, or undefined. Weeks are unique per collection. */
export const weekNode = (type: string, week: number): Node | undefined =>
  nodesOfType(type).find((n) => n.meta?.week === week);

export const WEEKS = Array.from({ length: 12 }, (_, i) => i + 1);

/** The Mondays the course runs on, derived from the published start date. */
export const teachingMondays = (): string[] => {
  const start = new Date(`${api.course.startDate}T00:00:00Z`);
  return WEEKS.map((w) => {
    const d = new Date(start);
    d.setUTCDate(d.getUTCDate() + (w - 1) * 7);
    return d.toISOString().slice(0, 10);
  });
};

// Minimal local mdast typing. unist-util-visit and mdast-util-directive are
// both transitive deps of the theme, already installed, but not hoisted to
// this project's node_modules under pnpm's strict layout — not worth adding
// as direct deps just to walk a tree and type two directive fields. A plain
// depth-first walk is a few lines, and the plugin functions below are typed
// structurally (no `unified`/`mdast` import needed) against whatever shape
// astro.config.ts's `extraRemarkPlugins` array expects.
interface MdNode {
  type: string;
  children?: MdNode[];
  value?: string;
  data?: Record<string, unknown>;
  name?: string;
  attributes?: Record<string, string | null | undefined>;
}

const visit = (tree: MdNode, type: string, fn: (node: MdNode) => void): void => {
  if (tree.type === type) fn(tree);
  for (const child of tree.children ?? []) visit(child, type, fn);
};

const FIGURE_KINDS = new Set(["cad", "electronics", "structures", "aero", "drone", "general"]);

// `:::figure{kind="cad"}\n…description of the SVG that belongs here…\n:::`
// Renders as a figure with a small inline SVG (chosen by kind, see
// chips.css) plus the caption written in the markdown. Same
// container-directive mechanism the theme already uses for callouts
// (see astro-theme-university/remark-callout.ts) — no new dependency.
export const remarkFigureSlot = () => {
  // `tree` is typed `any` here only at the plugin boundary — the caller
  // (astro.config.ts, via @astrojs/markdown-remark's RemarkPlugin type) has
  // its own, more specific mdast types that aren't hoisted for import here;
  // everything past this line uses the local MdNode shape.
  return (tree: any) => {
    visit(tree as MdNode, "containerDirective", (node) => {
      if (node.name !== "figure") return;
      const kind = String(node.attributes?.kind ?? "general");
      const data = (node.data ??= {});
      data.hName = "figure";
      data.hProperties = {
        class: "figure-slot",
        "data-kind": FIGURE_KINDS.has(kind) ? kind : "general",
      };
      // The art itself is a small inline SVG selected by data-kind, painted
      // as a CSS background on this empty div. No image request, no
      // build-time asset pipeline, and it recolours for dark mode for free
      // via `currentColor`.
      node.children ??= [];
      node.children.unshift({
        type: "paragraph",
        children: [],
        data: { hName: "div", hProperties: { class: "figure-slot__art" } },
      });
    });
  };
};

// Renders `` `R-01` `` (and any other backticked `R-nn`) as a styled
// requirement chip instead of plain inline code.
export const remarkRequirementChip = () => {
  return (tree: any) => {
    visit(tree as MdNode, "inlineCode", (node) => {
      if (!node.value || !/^R-\d{2}$/.test(node.value)) return;
      const data = (node.data ??= {});
      data.hProperties = { ...(data.hProperties as object | undefined), class: "req-chip" };
    });
  };
};

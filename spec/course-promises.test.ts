// The promises this course makes that the build cannot see: that every week is
// a real week, that the field-day machinery is actually described, that the
// workload table adds up to what the site claims, and that twelve weeks of
// prose did not converge on one week written twelve times.
import { describe, expect, it } from "vitest";
import { body, nodesOfType, siteText, weekNode, WEEKS } from "./_api";

const FIELD_OBJECTIVE = /^\s*[-*]?\s*\*\*Field objective:\*\*\s*(.+)$/im;
const WEATHER_FALLBACK = /\*\*Weather fallback:\*\*/i;
const SAFETY_NOTE = /\*\*Safety:\*\*/i;
const PREDICTION = /\*\*Predict:\*\*/i;
const OWNER = /\*\*Owner:\*\*/i;

const studioText = (week: number): string => {
  const node = weekNode("sessions", week);
  return node ? `${body(node.id)}\n${(node.spec ?? []).join("\n")}` : "";
};

describe("every week is a real week", () => {
  for (const week of WEEKS) {
    it(`week ${week}'s studio carries its own objective, owner, prediction, fallback and safety note`, () => {
      const text = studioText(week);
      expect(text, `week ${week} has no studio body`).not.toBe("");
      expect(FIELD_OBJECTIVE.test(text), `week ${week}: no **Field objective:**`).toBe(true);
      expect(OWNER.test(text), `week ${week}: no **Owner:**`).toBe(true);
      expect(PREDICTION.test(text), `week ${week}: no **Predict:**`).toBe(true);
      expect(WEATHER_FALLBACK.test(text), `week ${week}: no **Weather fallback:**`).toBe(true);
      expect(SAFETY_NOTE.test(text), `week ${week}: no **Safety:**`).toBe(true);
    });
  }

  it("gives each lecture a stated capability the student leaves with", () => {
    for (const week of WEEKS) {
      const node = weekNode("lectures", week);
      expect(/\*\*By the end:\*\*/i.test(body(node?.id ?? "")), `week ${week} lecture: no **By the end:**`)
        .toBe(true);
    }
  });
});

describe("field days", () => {
  it("publishes the booking page the studios send students to", () => {
    expect(siteText).toMatch(/#\s*Field days/i);
    expect(siteText, "no booking lead time stated").toMatch(/48\s*h|48 hours/i);
  });

  it("gives all twelve weeks a distinct field objective", () => {
    const objectives = WEEKS.map((w) => studioText(w).match(FIELD_OBJECTIVE)?.[1]?.trim().toLowerCase() ?? `missing-${w}`);
    expect(new Set(objectives).size, `objectives repeat: ${objectives.join(" | ")}`).toBe(12);
  });
});

describe("workload", () => {
  it("adds the published hours table up to the declared weekly total", () => {
    // Scoped to the ## Workload section, so a table added anywhere else on the
    // site cannot silently join this sum.
    const section = siteText.match(/##\s*Workload\b([\s\S]*?)(?=\n##\s|\n---\n)/i)?.[1] ?? "";
    expect(section, "no ## Workload section on the site").not.toBe("");
    const rows = [...section.matchAll(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*$/gm)]
      .filter((m) => !/total/i.test(m[1]));
    expect(rows.length, "the workload table has no rows").toBeGreaterThan(2);
    const declared = section.match(/\*\*Total:\*\*\s*(\d+(?:\.\d+)?)\s*h/i)?.[1];
    expect(declared, "no **Total:** line for the workload table").toBeDefined();
    const sum = rows.reduce((a, m) => a + Number(m[2]), 0);
    expect(sum, `hours rows sum to ${sum}, declared ${declared}`).toBe(Number(declared));
  });
});

describe("voice", () => {
  const BANNED = [
    "delve", "tapestry", "journey", "unlock", "seamless", "dive into",
    "in today's", "robust solution", "game-changer", "cutting-edge",
    "leverage", "empower", "landscape of", "realm of",
  ];

  it("keeps the slop vocabulary off the site", () => {
    const hits = BANNED.filter((phrase) => new RegExp(`\\b${phrase}`, "i").test(siteText));
    expect(hits, "banned phrases found").toEqual([]);
  });
});

describe("distinctness", () => {
  // ponytail: trigram Jaccard with a hand-set threshold. Calibrated against the
  // real pages once they existed; raise it only with a reason written down.
  const THRESHOLD = 0.35;
  const trigrams = (text: string): Set<string> => {
    const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
    return new Set(words.slice(0, -2).map((_, i) => words.slice(i, i + 3).join(" ")));
  };
  const jaccard = (a: Set<string>, b: Set<string>): number => {
    const inter = [...a].filter((x) => b.has(x)).length;
    return inter / (a.size + b.size - inter || 1);
  };

  it("keeps any two studio pages from reading as the same page", () => {
    const grams = nodesOfType("sessions").map((n) => ({ id: n.id, g: trigrams(body(n.id)) }));
    const tooSimilar: string[] = [];
    for (let i = 0; i < grams.length; i++) {
      for (let j = i + 1; j < grams.length; j++) {
        const score = jaccard(grams[i].g, grams[j].g);
        if (score > THRESHOLD) {
          tooSimilar.push(`${grams[i].id} ~ ${grams[j].id} = ${score.toFixed(2)}`);
        }
      }
    }
    expect(tooSimilar, `pairs above ${THRESHOLD}`).toEqual([]);
  });
});

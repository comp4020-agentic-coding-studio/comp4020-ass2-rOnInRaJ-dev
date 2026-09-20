// The ledger and the requirement set are the course's two sources of truth.
// These tests hold the site to them: no requirement ID that does not exist, no
// requirement without a verifying week, and no unit-bearing number the ledger
// has never heard of.
import { describe, expect, it } from "vitest";
import { allowedByUnit } from "../src/data/ledger";
import { byId, requirements, reviewWeeks } from "../src/data/requirements";
import { body, siteText, weekNode } from "./_api";

const REQ_ID = /\bR-\d{2}\b/g;

describe("requirement set", () => {
  it("gives every requirement an owner and at least one verifying week", () => {
    for (const r of requirements) {
      expect(r.owner, `${r.id} has no owner`).toBeTruthy();
      expect(r.verifiedInWeeks.length, `${r.id} is never verified`).toBeGreaterThan(0);
    }
  });

  it("resolves every requirement ID the site mentions", () => {
    const mentioned = new Set(siteText.match(REQ_ID) ?? []);
    expect(mentioned.size, "the site never cites a requirement").toBeGreaterThan(0);
    for (const id of mentioned) {
      expect(byId.has(id as `R-${string}`), `the site cites ${id}, which does not exist`).toBe(true);
    }
  });

  it("mentions every requirement somewhere on the site", () => {
    const mentioned = new Set(siteText.match(REQ_ID) ?? []);
    const orphans = requirements.filter((r) => !mentioned.has(r.id)).map((r) => r.id);
    expect(orphans, "requirements nothing on the site refers to").toEqual([]);
  });
});

describe("review weeks", () => {
  for (const [week, review] of Object.entries(reviewWeeks)) {
    it(`week ${week} (${review.name}) names the requirements it reviews`, () => {
      const studio = weekNode("sessions", Number(week));
      expect(studio, `no studio for week ${week}`).toBeDefined();
      const text = `${body(studio!.id)} ${(studio!.spec ?? []).join(" ")}`;
      const cited = new Set(text.match(REQ_ID) ?? []);
      for (const id of review.covers) {
        expect(cited.has(id), `week ${week} reviews ${id} but never names it`).toBe(true);
      }
    });
  }
});

describe("ledger integrity", () => {
  // Longest unit first: "g/dm²" must win over "g", "Wh" over "W".
  const UNITS = ["Wh", "g/dm²", "m/s", "m²", "mm", "W", "g"];
  const SCAN = new RegExp(`(\\d[\\d,]*(?:\\.\\d+)?)\\s*(${UNITS.join("|")})(?![\\w\\u00b2])`, "g");

  // ponytail: a phrase allowlist, not a semantic model. "3.5 g" is a load
  // factor, not a mass; the scanner cannot tell and does not need to.
  const ALLOWED_PHRASES = ["3.5 g"];

  it("prints no unit-bearing number the ledger does not know", () => {
    const strays: string[] = [];
    for (const match of siteText.matchAll(SCAN)) {
      const [whole, raw, unit] = match;
      if (ALLOWED_PHRASES.some((p) => whole.replace(/\s+/g, " ").startsWith(p))) continue;
      const value = Number(raw.replace(/,/g, ""));
      const allowed = allowedByUnit[unit] ?? [];
      if (!allowed.includes(value)) {
        const at = siteText.slice(Math.max(0, match.index - 60), match.index + 40).replace(/\n/g, " ");
        strays.push(`${value} ${unit} — ...${at}...`);
      }
    }
    expect(strays, "numbers on the site that are in no ledger line").toEqual([]);
  });
});

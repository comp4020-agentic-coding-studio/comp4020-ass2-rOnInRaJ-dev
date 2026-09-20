// The published Assignment 2 spec, in the form a machine can check.
// Each test here maps to one line of the spec on the course website; the lines
// a machine cannot judge (is it a course someone would want to take) are left
// to the crit, on purpose.
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { api, nodesOfType, teachingMondays, weekNode, WEEKS } from "./_api";

describe("twelve dated teaching weeks", () => {
  it("gives every week from 1 to 12 exactly one lecture and one studio", () => {
    for (const week of WEEKS) {
      expect(nodesOfType("lectures").filter((n) => n.meta?.week === week), `week ${week} lectures`)
        .toHaveLength(1);
      expect(nodesOfType("sessions").filter((n) => n.meta?.week === week), `week ${week} studios`)
        .toHaveLength(1);
    }
  });

  it("dates the twelve weeks as consecutive Mondays from the published start", () => {
    const mondays = teachingMondays();
    for (const type of ["lectures", "sessions"]) {
      for (const week of WEEKS) {
        const node = weekNode(type, week);
        expect(String(node?.meta?.date).slice(0, 10), `${type} week ${week}`)
          .toBe(mondays[week - 1]);
      }
    }
  });

  it("keeps the last teaching week inside the published teaching period", () => {
    expect(teachingMondays().at(-1)! <= api.course.endDate).toBe(true);
  });
});

describe("assessment", () => {
  const assessments = () => nodesOfType("assessments");

  it("adds up to exactly 100%", () => {
    const total = assessments().reduce((sum, a) => sum + Number(a.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("gives every group assessment a systems-engineering criterion worth 30", () => {
    const group = assessments().filter((a) => a.meta?.cohort === "group");
    expect(group.length, "no group assessments found — check the cohort key").toBeGreaterThan(0);
    for (const a of group) {
      const criteria = a.meta?.marking?.criteria ?? [];
      const se = criteria.find((c: { name: string }) => /systems engineering/i.test(c.name));
      expect(se, `${a.id} has no systems-engineering criterion`).toBeDefined();
      expect(se.weight, `${a.id}'s SE criterion`).toBe(30);
    }
  });

  it("dates every assessment inside the teaching period", () => {
    for (const a of assessments()) {
      const due = String(a.meta?.due).slice(0, 10);
      expect(due >= api.course.startDate && due <= api.course.endDate, `${a.id} due ${due}`)
        .toBe(true);
    }
  });
});

describe("slides", () => {
  it("carries at least one real deck, linked from its lecture", () => {
    const withSlides = nodesOfType("lectures").filter((n) => n.meta?.slides);
    expect(withSlides.length, "no lecture declares slides:").toBeGreaterThan(0);
    for (const lecture of withSlides) {
      const built = resolve("dist", `${lecture.meta!.slides}`.replace(/^\//, ""), "index.html");
      expect(existsSync(built), `${lecture.id} points at ${lecture.meta!.slides}, which did not build`)
        .toBe(true);
    }
  });
});

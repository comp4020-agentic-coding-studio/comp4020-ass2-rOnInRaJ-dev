# Harness — SLOP2440 Grams and Watt-Hours

This course has one idea: **the aircraft is a budget**. Grams, watts and
watt-hours are finite, every subsystem spends from the same pot, and a student
who cannot say where a number came from has not designed anything. These rules
exist so the site says that consistently across forty-odd pages written by
several agents in one night.

## Rules

1. **Numbers come from the ledger.** Every mass, power, energy, area, span or
   speed figure on this site resolves to a value in `src/data/ledger.ts`. Do not
   type a figure into a page. Do not compute one in your head — arithmetic is
   the ledger script's job, and `spec/traceability.test.ts` fails the build on a
   unit-bearing number the ledger does not know.

2. **Every claim about what the aircraft must do names a requirement ID.**
   Requirements live in `src/data/requirements.ts` as `R-01`…`R-nn`, each with
   an owner subsystem and the week that verifies it. "The aircraft must take off
   within 30 m" is an assertion; "`R-04`: take-off ground roll ≤ 30 m, owned by
   Aero, verified in week 11" is a requirement. Write the second kind.

3. **Every week's page says what a student can do by the end of it that they
   could not do at the start.** Not "students will explore stability" — "you can
   compute a tail volume coefficient for your own wing and say whether it flies".
   A week that cannot answer this is not a week, it is filler.

4. **Voice: deadpan engineer.** Short sentences. Specific nouns. No enthusiasm,
   no metaphor about journeys or unlocking, no sentence that would survive
   having the subject swapped for another course. If a paragraph could appear in
   a marketing brochure, delete it and write what actually happens in the room.

5. **Every rule about flying is our rule.** The Mount Sludge Model Aircraft Club
   and Slop University are fictional, and so is every restriction on this site.
   Never cite CASA or any real regulator, never name a real club, field or
   person, and never imply a real-world legal claim. A mass cap is a course
   requirement, not a law.

6. **Stay in your lane.** Content agents append body prose below an existing
   frontmatter block, one file each. They do not create files, edit frontmatter,
   run `pnpm`, or run `git`. Only the orchestrator touches `src/*.ts`,
   `src/pages/`, `spec/`, `astro.config.ts`, the build or the history — fourteen
   agents sharing one `dist/` and one index is how a night's work is lost.

7. **Commit at every phase gate**, with a message naming the phase. The history
   is the process evidence; a single end-of-night commit says nothing about how
   the work went.

## Deliberately not encoded

These are judged by eye, on purpose, and the reason matters more than the rule:

- **Whether the course is one someone would want to take.** No test can read
  for that. It is checked by reading weeks 2, 6 and 10 end to end the way a
  marker will, at both viewports, and rewriting what reads thin.
- **Whether the twelve weeks build on each other** rather than merely differing.
  The distinctness check in `spec/` catches twelve pages that repeat; it cannot
  catch twelve pages that are distinct and go nowhere. That is a read-through.
- **Whether a requirement is a *good* requirement.** The harness checks that
  every `R-xx` has an owner and a verifying week. It does not check that the
  threshold is sensible, because a fictional aircraft has no ground truth to
  check it against — plausibility is mine to defend.
- **The exact wording of any assessment rubric.** Weights are tested; phrasing
  is not, because a rubric that satisfies a regex can still be unmarkable.

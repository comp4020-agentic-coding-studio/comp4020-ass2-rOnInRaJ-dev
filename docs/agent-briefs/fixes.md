# Issues found reading Haiku output (fix in Phase 4)

## Systemic — check every week for these

1. **Confusing the course repo with the team repo.** sessions/week-02 tells
   students their mission sentence "goes into `requirements.ts` with an owner".
   `src/data/requirements.ts` is THIS SITE's file — the course's own requirement
   set. A student's team requirements live in the team's own repository. Any
   page that tells a student to edit a file in this repo is wrong.

2. **Invented sources.** lectures/week-02 (via sessions/week-02) has
   "sourced from month 3 of a design report" — a citation to nothing. Estimates
   may name a *method* ("scaled from a published glider of similar span") but
   never a fabricated document.

3. **Unspaced em dashes.** "five subsystems—one person" — house style is a
   spaced em dash, matching every hand-written page.

4. **Bracketed placeholders in prose.** "[distance] metres while carrying a
   [payload] gram payload" reads like an unfilled template. Either make it a
   real worked example or phrase it without brackets.

## Per-week

- sessions/week-01: check the four team roles match policies/index.mdx exactly
  (chief engineer; aero and structures; avionics and electrical; test lead).
  The agent wrote "flight ops subsystem" in week 2, which is not a role name.

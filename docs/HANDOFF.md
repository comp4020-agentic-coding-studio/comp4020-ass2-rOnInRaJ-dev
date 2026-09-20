# Handoff — paused 2026-09-20, mid Phase 3

Written at the point where the running content agents were stopped so the build
could continue under a different account. Everything below is state, not plan;
the plan is `docs/plan.md` plus the execution table reproduced at the bottom.

## Where the build is

Phases 0, 1 and 2 are complete and committed. Phase 3 (bulk prose) is complete
for every week except **week 9**, which has frontmatter, a `**By the end:**`
line, an `## Outline` and an `## At the field` block but **no body prose** —
the lecture needs three paragraphs and the studio needs an `## In the studio`
section, matching weeks 8 and 10 in shape and length.

| Week | Lecture | Studio |
|------|---------|--------|
| 1–8  | done    | done   |
| 9    | **prose missing** | **`## In the studio` missing** |
| 10–12 | done   | done   |

`pnpm check` and `pnpm check:evidence` were green at the last commit.

## What is left, in order

1. **Week 9 prose.** Brief is `docs/agent-briefs/lectures-week-09.md` and
   `docs/agent-briefs/sessions-week-09.md`. Failure story 9 is in
   `docs/agent-briefs/failure-stories.md`.

2. **Phase 4 — the check pass.** Three things, all sized and none started:
   - **Mechanical:** unspaced em dashes in 11 files
     (`sessions/week-01,02,04,06,07`, `lectures/week-01,02,04,06,07,08`) —
     house style is spaced. Find them with
     `grep -rn '[^ ]—[^ ]' src/content/`.
   - **Mechanical:** ~20 bare `R-xx` occurrences that should be in backticks.
     Find them with `grep -rno '[^`]R-[0-9][0-9][^`]' src/content/ src/pages/`.
   - **Judgement:** the four systemic mistakes in
     `docs/agent-briefs/fixes.md`, found by reading the first batch of agent
     output. Weeks 9–12 were prompted against them by name; weeks 1–8 were
     not, so they are the files to re-read.
   - Then the Sonnet per-cluster checkers (weeks 1–4, 5–8, 9–12) plus one
     cross-cutting pass. Checkers **report, they do not rewrite**; failures go
     back to a Haiku writer for at most two rounds, then are fixed by hand.

3. **Phase 6 — read it as a marker would.** Weeks 2, 6 and 10, one assessment
   and the policies page, at 1920×1080 and 390×844. **Blocked:** the Chrome
   extension cannot load `http://localhost:4322/…` ("Frame with ID 0 is showing
   error page") while `curl` returns 200 — the extension needs localhost site
   permission, which is a user-side toggle in Chrome.

4. **Phase 7 — `PROCESS.md`.** Scaffolded with the spine, the factual bullets
   and three resolving commit citations, all inside HTML comments so
   `check:evidence` passes. **Every sentence is the user's to write** — the
   brief forbids ghost-writing, and this was an explicit decision.

5. **Phase 8 — ship.** Art swap if the photos land, then
   `/comp4020:preflight`, then `/comp4020:ship`. Never `gh repo create`.
   Confirm with the user before any push. The repo stays private until ship.

## Things a new session will not otherwise know

- **The 24 architect briefs and the twelve failure stories now live in
  `docs/agent-briefs/`.** They were written to a session scratchpad, which does
  not survive a session. They are also process evidence in their own right.
- **`scripts/generate-week-pages.py`** is the script that emitted all 24 week
  pages' frontmatter. It has already run; it is kept as evidence, not as a tool
  to re-run (re-running it would overwrite the prose).
- **Artwork is slot-and-swap.** The four sha256-pinned starter images are
  deleted, so `check:evidence` passes now. Pages are written image-free with
  named slots. People entries carry no `photo:` key, because the schema fails
  the build on a `photo` without a `photoAlt`; both keys go in together in the
  art commit, or neither does and the site ships image-free.
- **`check:evidence` only knows about fragments the template marked with
  `STARTER_CONTENT`.** Four index pages shipped template prose that the gate
  passed because it carried no marker; only reading the rendered `dist/` HTML
  caught it. Worth citing in `PROCESS.md`.
- **A detached `astro preview` daemon may still be on port 4322.** Stop it with
  `pnpm exec astro preview stop`.
- **Only the orchestrator runs `pnpm` or `git`.** Fourteen agents sharing one
  `dist/` and one index is how a night's work is lost; see rule 6 of
  `CLAUDE.md`. A commit taken while agents were mid-write (`e66b685`) picked up
  two half-written files — harmless here, but the reason the rule exists.

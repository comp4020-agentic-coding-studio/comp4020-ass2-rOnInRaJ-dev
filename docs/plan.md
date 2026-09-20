# plan.md — Assignment 2 handoff (read this first)

This file is a session summary + build plan for a fresh Claude Opus session.
Everything decided so far is here. **No content has been built yet; no agents
have been spawned.** The previous session only read, researched and planned.
The next step is **Phase 0** below, once the user approves the CLAUDE.md rules
and spec list (section 8).

Written 2026-09-20 (Sunday, ~18:30 Canberra). **Deadline: noon Monday
2026-09-21** (assessment `assignment-2`; retro crit 06-a2-retro is Mon 14:00,
presents from PROCESS.md). Extensions are easy *before* the deadline (see
course assessment page) if the user wants one.

---

## 1. Situation

- Repo: `comp4020-ass2-rOnInRaJ-dev` (this directory). Cloned, private, on
  `main`, 2 commits (`Initial commit`, `course code: SLOP1440`). No git remote
  work done. `mise install` and `pnpm check` are **green on the untouched
  baseline** (16 pages, no broken links, 1 test).
- Student: raj (adithriyer@gmail.com), crit group `shitao`, tutor Ushini
  Attanayake. Repo owner handle: `rOnInRaJ-dev`.
- Stack is **fixed**: Astro + `astro-theme-slop` (Slop University identity).
  No stack choice, no conversion. Do not change branding, palette, the four
  collections/keys, `astro.config.ts` build pipeline, or the generated API.
- User's global instructions: ponytail mode is active (lazy senior dev: least
  code that works, reuse before write, one runnable check for non-trivial
  logic). `/graphify` is a user-invocable skill only on request.
- Rules from the course skills: **never `gh repo create`**; **confirm before
  pushing**; keep repo **private until ship** (`/comp4020:ship` flips it public
  and enables Pages); commit as you go; don't invent a brief/dates the site
  doesn't state. Useful skills: `comp4020:preflight` (am I submittable),
  `comp4020:ship`, `comp4020:balance` (proxy budget), `comp4020:radar`.
- Scratchpad for temp files:
  `/private/tmp/claude-501/-Users-raj-programming-UNI-year4-sem2-comp4020/c45fafa3-941a-4d77-82ae-acb26c01c3b7/scratchpad`
  (holds downloaded ANU course HTML; not needed to continue).

## 2. The brief and spec (published, fixed)

Brief: *"Design the university course you wish existed, and build the website
that runs it."* A niche course for Slop University; every decision lands in the
site; ~twenty-odd pages that agree with each other; coherent curriculum (one
idea all semester); a real course someone would want to take; **not AI slop**,
compelling voice. Sincere / deadpan / satirical all fine. Markers read ~10
minutes: home, a few **non-adjacent weeks**, an assessment, the deck, the
policies page, at both viewports. Repetitive weeks or "starter with nouns
swapped" hurts *response to the brief* regardless of CI.

Spec (tutor verifies):
1. Deployed and live on public GitHub Pages by the deadline, working at both
   marking viewports.
2. One niche course under a `SLOPxxxx` code that **keeps the repo's three
   digits (`440`)**, running across **twelve dated teaching weeks**.
3. At least one lecture carries a real deck, linked from its page.
4. Assessment adds up to 100%.
5. Own checks in `spec/` protecting promises the build can't; `pnpm check` and
   `pnpm check:evidence` pass.
6. Process evidence: `PROCESS.md`, `CLAUDE.md`, commit history that grew with
   the work.

Marking (20% of course): **Legibility of process 45%**, Working deployed
artefact 20%, Response to the brief 35%. Process is read against commits and
`CLAUDE.md`. HD lift = *why a call beat the obvious one and how you knew the
result was right*. `spec/` checks are read as the record of what the student
decided must stay true about the course.

`PROCESS.md`: **400–600 words, the student's own account, one narrative**,
spine = *what I decided a good university course looks like, which decisions I
encoded in the harness (a CLAUDE.md rule or a `spec/` check), which I
deliberately left out*. **Cite commits** (`check:evidence` fails with none).
**Do not ghost-write it end to end**: draft structure/facts if asked, but it
must be the user's voice and their reasoning. The retro presents from it.

## 3. Platform facts (from README.md and source; verified)

- Content: Markdown under `src/content/{sessions,assessments,lectures,people}`,
  schemas in `src/content.config.ts`. Week is `1–12`. `sessions` has
  `week, date, teachers?` and is `.loose()` (extra frontmatter keys survive
  and land in `meta` in the API; reserved: `title, description, tags, related,
  links, spec, published`). `lectures` add `slides` (`/decks/<name>/`).
  `assessments` have `week, due, weight (<=100)` and optional
  `marking`: `weighted` (criteria weights must sum to 100 — **build-enforced**)
  or `holistic`. `people`: `title, description(>=40 chars), role`, optional
  `photo` (needs `photoAlt`).
- `related:` frontmatter makes edges (`<collection>/<slug>` or bare slug); the
  build **fails on a dangling ref**. Collection key = file path = page URL =
  API JSON path.
- `src/course-config.ts`: strict record: `code` (SLOP + level digit + 3), `title`
  (<=100), `session`, `year`, `level`, `startDate`, `endDate`, `description`
  (**80–300 chars**), `tags` (1–3, each 2–24 chars). Currently
  `SLOP1440` / placeholder; carries `STARTER_CONTENT` marker comment. Level
  must equal the code's first digit. **There is no "units" field** — the 12-unit
  workload must be stated in prose (home/policies/workload page).
- `src/site-config.ts`: `sessionLabels` (rename "Session(s)" to e.g. "Studio"
  — keep the collection key `sessions`), nav, licence, `socialImage`
  (`/src/assets/images/card.png`, 1200x630 placeholder) + `socialImageAlt`,
  `graphCollections`.
- Layout: `src/layouts/PageLayout.astro` (site-wide styles go here).
  Decks: `src/decks/*.deck.mdx` (astromotion, `---` between slides),
  `theme.css`. Link a deck from its lecture with a markdown link or the
  lecture's `slides:` field.
- Policies page: `src/pages/policies/index.mdx` (also copied to the API).
- **Base path**: never hand-write root-absolute links (`href="/x/"`) in
  `.astro` files; markdown links and theme components are rewritten. The build
  link checker catches the rest.
- `pnpm dev` at `http://localhost:4321/<repo>/`. `pnpm check` = types + build
  (axe over every page, link checks, deck compile, API emit) + `spec/` tests
  (tests assert what was *built*; `pnpm test` builds first).
  `pnpm check:evidence` = final gate: process citations in PROCESS.md, and for
  A2 **every tracked `STARTER_CONTENT` fragment removed** (remove the marker when
  you replace the fragment) and **placeholder key imagery replaced** (starter
  home/social art must go; a deliberate image-free treatment is allowed).
  Placeholder people images `idris-fenn.avif`, `marisol-quaye.avif` are starter
  content.
- `spec/data-integrity.test.ts` (shipped) checks dated material stays within the
  teaching period — **course dates must be consistent** with `startDate` /
  `endDate`. Own tests: any `spec/*.test.ts`.
- `.githooks/pre-commit` blocks API-key-shaped strings (installed by `pnpm
  install`). CLAUDE.md currently has *no rules* on purpose — writing them is
  part of what is marked.
- Existing placeholder content to replace: 2 assessments (`assignment-1.md`,
  `final-project.md`), 2 lectures (`week-01.md`, `week-02.md`), 2 sessions
  (`01-getting-started.md`, `02-first-review.md`), 2 people, `policies`, home.

## 4. The course (all decided by the user unless marked *proposed*)

**Title (working, *proposed*):** *Grams and Watt-Hours: Designing, Building and
Flying a Battery Drone*. **Code: `SLOP2440`** (2xxx = second-year; keep `440`).
Second-year engineering. Level `2`.

**Core idea (the coherence spine):** the aircraft is a **budget** of grams,
watts and watt-hours, and the whole course is **systems-engineering pilled**.
Every discipline (aero, structures, CAD, power, radio) is a line in one shared
**ledger**. Each week you spend from the ledger or discover a prior estimate was
wrong. "Predict, then measure" runs through everything. Aero → power → battery
mass → aero is a deliberate feedback loop students iterate (a core SE lesson).
Voice: **deadpan, plain, specific engineer; unimpressed by hype.**
Example register: "The grams do not negotiate."

**Fixed vs open:** battery-powered only. **Real airframe build, fixed-wing main
build**, by **groups of 4** (roles: chief engineer; aero & structures; avionics
& electrical; test lead). Week 1 flying lessons use **quads and other drone
types** (trainer, buddy-box) for learning. Group grades moderated by peer
review (borrowed from ANU ENGN4221).

**Workload: declared a 12-unit intensive**, ~17–18 h/week (~210 h): lecture 2,
workshop 2, lab 2, group field slot 3, group build/design/logbook 8+. (ANU's
ENGN8100 budgets ~130 h, ENGN2301 ~120 h per 6 units, i.e. ~10 h/week; this is
about double.) State this openly on the site with an hours table; spec check
that the table adds up.

**Fictional club: Mount Sludge Model Aircraft Club (MSMAC)**, modelled on the
real Belconnen Model Aircraft Club (BMAC, Canberra). Provides the airfield and
initial flight training. Volunteers (people collection): chief flying
instructor, safety officer, and **"lab people"** on duty at each field slot who
answer questions. Week 1 uses **buddy-box** training (instructor holds a linked
transmitter and can take over). Do not use real BMAC branding or real named
people.

**Weekly components:** lectures, workshops (help with the weekly goal), labs
(teach a skill), and a **group field slot**. **Scope B (chosen):** 12 lectures
+ 12 *studio* sessions (each studio page holds that week's workshop + lab +
that week's **unique field objective**). Field slots are **not** per-week
pages: they are **booked ahead by each team at its discretion, dependent on
availability**, on one `Field days` page with rules (book >=48 h ahead; slot
windows with capacity; one lab person on duty per slot; weather go/no-go;
minimum slots per group per week). Bookings are recorded in each team's
logbook (feeds the individual logbook mark). **No live booking system**
(static site) — add only a mock if the user asks.

### 12-week arc

| Wk | Topic | SE milestone |
|---|---|---|
| 1 | Fly first: buddy-box quad + trainer lessons at MSMAC | Drone as a system; stakeholders; life-cycle |
| 2 | Mission, requirements, KPIs | Requirements spec v1; ledger opens |
| 3 | Functional decomposition; configuration trade (fixed-wing vs quad vs VTOL) | **Requirements & concept review due** |
| 4 | Aerodynamics: lift, drag, small-scale Reynolds; wing sizing | Allocate performance |
| 5 | **Avionics, electrical, power specs, radio, flight controller, PID** (early on purpose: power sets battery mass; FC/radio are long-lead; bench "iron bird" rig; PID practice on club trainer/quads) | **PDR** |
| 6 | Stability, wing & tail design; CAD I | Mass & configuration control |
| 7 | Structures (load cases, spars, materials); CAD II | Load cases |
| 8 | Interfaces & risk (failure modes); manufacture starts | Interface control document |
| 9 | Build | **CDR** |
| 10 | Bench verification: thrust stand, CG, failsafes, ground checks | Test readiness review |
| 11 | Flight test + PID tuning on **own** airframe; predicted vs logged | Flight readiness review |
| 12 | Fly-off, showcase, disposal (LiPo), retrospective | Retrospective / case study |

Review weeks (3, 5, 9, 10, 11) must link to the requirement set they review.
Include a real-drone-failure **case study** (ANU ENGN8100 does case studies).

### Assessment (sums to 100)

| Item | % | Type |
|---|---|---|
| Predict-then-check quizzes | 10 | individual |
| Flight logbook & post-mortems (incl. field-slot booking log) | 10 | individual |
| Requirements & concept review | 15 | group |
| Design ledger & reviews (PDR/CDR) | 15 | group |
| Bench verification & interface pack | 10 | group |
| **Final project** | **40** | group: effectiveness (did it do the mission; predicted vs measured), **creativity of capabilities**, and SE |

**Underlying SE criterion:** every group item carries a fixed **SE row worth
30% of its marks** (use each assessment's `marking.criteria`; build enforces
sum=100). Final project: 40% effectiveness / 30% creativity / 30% SE. The SE row
asks four questions: (1) **Requirements** — numbered, testable (R-01…)?
(2) **Allocation & interfaces** — which subsystem owns it; what does it hand its
neighbours (mass, volts, watts, data)? (3) **Trade study** — a real alternative
considered and why the winner won? (4) **Verification** — predicted vs measured;
does every requirement have a check? Life-cycle thinking (concept→flight→LiPo
disposal) throughout. Final project also graded on creativity and effectiveness
of the drone's capabilities (a mission + scoring rubric plus a self-designed
"signature capability"; candidate missions: mass-fraction contest, slowest
stable flight, glide-range, precision drop).

## 5. ANU research (context, so it needn't be redone)

Fetched with curl (WebFetch hit a TLS error; do not disable cert checks).
ENGN2225/2226 pages 404 in every year (ENGN2301 says "cannot enrol if you have
completed ENGN2226", so it replaced it).
- **ENGN8100 Intro to Systems Engineering**: core activities = requirements
  analysis; functional analysis & allocation; design synthesis, test &
  evaluation; life-cycle, requirements types, trade-offs, SE management, case
  studies. Assessment: individual assignments 60 / quizzes 15 / group project
  25. ~130 h/semester (2 h lecture + 2 h tutorial per week).
  https://programsandcourses.anu.edu.au/course/engn8100
- **ENGN4221 Systems Engineering Project**: ill-defined problem; students write
  requirements & KPIs; conceptual design, sub-system requirements, quantitative
  trade-offs; 65% progress documents (initiation doc, project plan, systems
  requirement spec, conceptual design review, PM plan, preliminary design
  presentation), 35% final report; group grade moderated by peer review.
  https://programsandcourses.anu.edu.au/2024/course/engn4221
- **ENGN2301 Engineering Design 3: Systems Approaches for Analysis**: design
  and run tests; predict behaviour from models; evidence-based decisions.
  Quizzes 15+15, framing/plan report 20, stats assignment 20, presentation &
  interview 20, individual reflection & logbook 10. ~120 h.
  https://programsandcourses.anu.edu.au/2025/course/engn2301
Borrowed: SE lens on every item; PDR/CDR-style review gates; students write
their own requirements; predict-then-measure; graded logbook; peer-moderated
group grades; a case-study week.

## 6. Data model to build (Phase 0)

- `src/data/ledger.ts`: baseline design point (MTOW, wing area, span, battery
  Wh, cell count, thrust, etc.) and a small script computing derived values
  (wing loading, stall speed, endurance) so **no LLM does arithmetic**.
  Keep the design plausible (small foam/balsa/carbon fixed-wing trainer class).
- `src/data/requirements.ts`: `R-01…R-nn`, each with owner subsystem, review
  week, verifying session(s). A MTOW cap (e.g. under 2 kg) is a **course
  requirement, fictional** — agents must **not invent CASA/real regulatory
  claims**; label club/course rules as MSMAC/SlopU rules.
- A `<Ledger key="…"/>` (or equivalent) component so pages pull numbers rather
  than typing them.

## 7. Pipeline and agent roles (user's instruction)

- **Opus orchestrates**; **Sonnet architects** the pages/outline/plans for
  **Haiku**, which **generates the bulk of the content**; **Sonnet then only
  checks and tests** (reports, does not rewrite). Failed checks go back to
  Haiku with notes, **max 2 rounds**, then Opus rewrites by hand.
- Note: the previous session ran Sonnet 5, so Opus orchestration means this new
  session should be Opus. Check budget first (`/comp4020:balance`); fan-out costs.

| Phase | Who | Output | Gate |
|---|---|---|---|
| **0 Harness** | Opus | `CLAUDE.md`, `spec/` tests (start red), data files, course record | tests exist; **commit** |
| **1 Architect** | 4 x Sonnet: A1 spine (ledger design point, requirement set, club, people, policies, assessments); A2 weeks 1–4; A3 weeks 5–8; A4 weeks 9–12 + final project + deck outline | Per-page briefs: purpose, requirement IDs, ledger keys, **unique field objective, unique failure story**, voice notes, what NOT to repeat | Opus reviews briefs vs the spine |
| **2 Bulk** | ~14 x Haiku: one per week (lecture + studio), plus club / people / policies / assessments / field-days / home | The `.md` pages | `pnpm check` per batch |
| **3 Check** | Sonnet per cluster + one cross-cutting (traceability, voice, distinctness, ledger numbers) | pass/fail + notes | fails -> Haiku (max 2 rounds) |
| **4 Integrate** | Opus | Read-through of non-adjacent weeks (e.g. 2, 6, 10) as a marker would; deck; artwork; `check:evidence` fixes | green `pnpm check` + `pnpm check:evidence` |
| **5 Ship** | User + `/comp4020:ship` | live site | live URL 200 at both viewports |

Commit at every phase gate so the history grows with the work (process
evidence). Rough time budget to noon: Phase 0 1.5 h; architects 1 h; bulk 1 h;
check/fix 2 h; deck + artwork + integration 2 h; **PROCESS.md 1 h**; ship
0.5 h; rest buffer/sleep.

## 8. Harness proposals awaiting the user's approval

**`spec/` checks** (tests read the built API/dist and the data files):
1. Traceability: every R-xx has an owner and >=1 verifying session; every
   R-xx referenced in content resolves.
2. Ledger integrity: no page hard-codes a ledger quantity (pattern check on
   built HTML).
3. Weekly completeness: weeks 1–12 each have a lecture and a studio; each
   names a requirement, a subsystem owner and a predicted number.
4. Review weeks (3, 5, 9, 10, 11) link to the requirement set they review.
5. Assessment weights sum to 100; every group item has an SE criterion = 30.
6. Workload: the hours table sums to the declared ~17–18 h/week.
7. Field days: booking page exists; every studio states its field objective,
   weather fallback and a safety note.
8. Deck: >=1 lecture has `slides:` pointing to a deck that exists.
9. Voice: banned-phrase list ("delve", "tapestry", "journey", "unlock", etc.).
10. Distinctness: no two studio pages exceed a text-similarity threshold
    (directly tests the "twelve weeks repeat" marking risk).

**`CLAUDE.md` rules (student must own these; they are marked):**
numbers only from the ledger; every claim names a requirement ID; every week
states what a student can do by the end; deadpan engineer voice, no filler;
regulatory statements are fictional-club rules unless verified; commit at each
phase gate. Also record which decisions were **deliberately left out** of the
harness (needed for PROCESS.md's spine).

## 9. Anti-slop guardrails

- Haiku prompts = architect brief + three worked voice examples + banned list;
  never an open-ended "write a page".
- Every week gets a **unique field objective** and a **unique failure story**
  (real failure kinds: CG error, brownout, stall, prop strike, servo reversal…)
  so pages can't converge.
- Voice and distinctness tests run in `pnpm check`, so failures block progress.
- Opus reads weeks 2, 6, 10 as a marker would and rewrites weak pages by hand.
- Ledger numbers are script-computed, never LLM-computed.

## 10. Open items / risks

- **Semester dates**: template says 2027-02-22 to 2027-05-28 (`year 2027`,
  `session "Semester 1"`). Proposal: 12 consecutive weeks from Mon 2027-02-22,
  no mid-break. `spec/data-integrity` requires content dates inside the period;
  keep `startDate`/`endDate` in sync.
- Artwork must be real (hand-made SVG or a deliberate image-free treatment);
  replace `card.png`, home artwork and the two starter `people` avifs or unpublish.
- Never invent real regulations; never use real BMAC people/branding.
- Confirm before any push; do not create repos; flip public only via `ship`.
- Pending user approvals: the `CLAUDE.md` rule list and the `spec/` list above.
  The user said "start with spec outline and CLAUDE.md" — begin Phase 0 by
  showing/confirming those two, then proceed.
- `PROCESS.md` is the user's account in their words; leave a structured
  skeleton (what a good course is / encoded in harness / left out, with
  commit citations) and ask them to write it.
- Delete or ignore this `plan.md` before submission if you don't want it in the
  repo (it is harmless to `pnpm check`, but it is not part of the required
  evidence). Do not cite it as process evidence unless the user chooses to.

## 11. First actions for the new session

1. Read this file, `README.md`, `CLAUDE.md`, `PROCESS.md`,
   `src/content.config.ts`, `src/course-config.ts`, `src/site-config.ts`.
2. Run `pnpm check` to confirm the baseline is green.
3. Show the user the proposed `CLAUDE.md` rules and `spec/` list; get approval.
4. Execute Phase 0, commit, then run the pipeline in section 7.

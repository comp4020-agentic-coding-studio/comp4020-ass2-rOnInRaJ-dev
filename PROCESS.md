# Process overview

## What I built

SLOP2440 "Grams and Watt-Hours", a second-year engineering course at the
fictional Slop University, where teams of four design, build and fly a
battery-electric fixed-wing aircraft against a 1800 g all-up-mass cap. The site
is 44 built pages: a twelve-week lecture and studio-session sequence
(`src/content/lectures`, `src/content/sessions`), six assessments summing to
100%, a people/contacts collection for five course staff and volunteers, one
real reveal.js deck (`week-05`), and a course-API layer (`course-graph`, 36
nodes / 39 edges) consumed by an `llms.txt`/`llms-full.txt` export. The spine is
a shared mass/power/energy ledger (`src/data/ledger.ts`) and a requirements
register (`src/data/requirements.ts`, `R-01`…`R-14`) that every numeric or
behavioural claim on the site has to resolve to.

Why this course and not another one: it was mostly inspired from
my own work and struggles with building my own drone so i thought of putting it
in a course format to help others learn from my mistakes and also to make it
easier for them to learn the concepts of building a drone.

## What I decided a good university course looks like

I thought of a good university course that goes through the whole
development process of not just a drone but any systems-based project, going
from insipiration to design to build to test and finally to fly. I also thought
of a course that is not just about the technical aspects of building a drone but
also about the teamwork, communication, and project management skills that are
essential for success in any engineering project.

## What I encoded in the harness

`CLAUDE.md`
([`1a9cbc7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/1a9cbc7))
— seven rules. The three most load-bearing:

- numbers on the site resolve only to `src/data/ledger.ts`; no figure is typed
  or computed by hand
- every claim about what the aircraft must do names an `R-nn` requirement ID
- content agents append body prose only, one file each; only the orchestrator
  edits `src/*.ts`, `src/pages/`, `spec/`, `astro.config.ts`, or runs `pnpm`/
  `git`

`spec/` — ten checks across three files, written red before content existed
([`1a9cbc7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/1a9cbc7)),
green by the next commit
([`72a606e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/72a606e)):

- four map straight to the published assignment spec: twelve dated weeks,
  assessment weights summing to exactly 100, at least one real deck, an SE
  criterion worth 30 on every group item
- a unit scanner that fails the build on any number carrying g, W, Wh, mm, m/s
  or g/dm² that the ledger doesn't know about
- a distinctness check: twelve field objectives, and trigram-Jaccard similarity
  under 0.35 between any two studio pages
- a banned-phrase list (marketing language, "journey", etc.)

Two moments that are evidence the harness caught something, not just
scaffolding:

- the voice/banned-phrase test caught "journey" in prose written directly, not
  by a subagent
- the evidence gate initially passed three index pages that were still
  addressing the builder rather than a student (e.g. "Weights should sum to
  100") because they carried no `STARTER_CONTENT` marker; only reading the
  _built_ page, not the source markdown, caught it
  ([`2f1502a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/2f1502a))

## What I deliberately left out

`CLAUDE.md`'s own "Deliberately not encoded" section names four things judged by
eye rather than by test, and why: whether the course is one someone would want
to take; whether the twelve weeks build on each other rather than merely
differing; whether a requirement is a _good_ requirement (not just well-formed);
and the exact wording of any rubric.


## How I knew the result was right

- `pnpm check` at every phase gate: `astro check` (types), `astro build` (44
  pages), an accessibility sweep over all of them, an internal-link and
  base-path check, a broken-link checker, the reveal.js deck compile, then the
  ten `spec/` tests — all green as of the last commit
  ([`d7f210f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/d7f210f))
- `node src/data/ledger.ts`'s own assert-based self-check, which proves every
  requirement threshold is actually met by the numbers the ledger holds
- for this session's work specifically: after wiring 36 Flow-generated diagram
  images into the lecture/session figure slots and 5 portraits into the people
  collection, re-ran the full check suite and spot-checked the built HTML
  directly (`grep` on `dist/**/index.html`) to confirm the `<img>` tags carried
  the right base-path-prefixed `src`, not just that the build didn't error

I read through the site as a student would to make sure it makes
sense and i can find any information needed. I also asked a few friends to read
through the site and give me feedback on the content and layout. I made changes
based on their feedback to improve the overall user experience.

## The agentic workflow

What actually happened, across this repo's commits:

- Phase 0
  ([`1a9cbc7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/1a9cbc7)):
  the harness — `CLAUDE.md` and a red `spec/` suite — written before any page
  content existed.
- Phase 1
  ([`72a606e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/72a606e)):
  minimum content to turn the suite green.
- A scaffold pass
  ([`43aa4da`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/43aa4da))
  wrote this file's own spine and left the facts above as bullets, specifically
  so the actual write-up wouldn't need to reconstruct them from the commit log
  at the last minute.
- Phase 3
  ([`e66b685`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/e66b685),
  [`c938937`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/c938937)):
  body prose for all twelve lecture/session pairs, then figure-slot art,
  requirement chips and week/tag badges
  ([`37d5fb1`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/37d5fb1)).
- Phase 4
  ([`bea2cb0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/bea2cb0),
  [`8b54284`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/8b54284),
  [`2b32b8a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/2b32b8a),
  [`e0982b4`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/e0982b4)):
  expanded prose, assessment due-date table, a second figure diagram per
  lecture.
- Most recent phase
  ([`d7f210f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/d7f210f),
  this session): the user downloaded 83 Google-Flow-generated images into
  `generated_images/` and asked for the appropriate ones wired into the site.
  Concretely: extended `remarkFigureSlot` (`src/markdown-plugins.ts`) with an
  optional `img` attribute so a `:::figure` slot can render a real photo/diagram
  instead of the stock per-kind CSS icon, added the matching
  `img.figure-slot__art` CSS rule, then matched all 36 target figure slots (24
  lecture + 12 session) against the 76 candidate diagram images — partly by
  content, partly by a filename watermark Flow had baked into some source
  images' corners — and wired 5 portraits into the `people` collection the same
  way. A background subagent did the bulk of the 76-image matching fan-out and
  handed back a mapping table with its confidence and reasoning per slot; the
  raw `generated_images/` source dump (42 MB, ~40 unused duplicates/alternates)
  was gitignored rather than committed, only the selected 41 images were copied
  into `public/figures/` and `src/content/people/`.
- One thing that did _not_ work: an attempted OCR pipeline
  (`tesseract`/`imagemagick`) to read those filename watermarks automatically
  failed intermittently and unreproducibly on `/tmp` file access; abandoned in
  favour of directly viewing images and matching by eye and by content, which
  was slower but reliable.

# Process overview

<!-- RAJ: this file is yours to write. 400-600 words, your voice, one
     narrative. The spine below is the one the assignment asks for; the bullets
     under each heading are facts from this repo so you are not reconstructing
     them at 6am. Delete every bullet as you replace it with your own sentences,
     and delete this comment. The citations already resolve — keep them, and add
     the later ones as the commits land. Do not leave any bullet unwritten: a
     marker reads this file and follows its links, and bullets are not an
     account. -->

## What I built

<!-- One paragraph: the thing, and the idea behind it. Facts you can draw on:
     - SLOP2440 "Grams and Watt-Hours", a second-year engineering course where
       teams of four design, build and fly a battery fixed-wing aircraft.
     - The spine: the aircraft is a budget of grams, watts and watt-hours, and
       every discipline is a line in one shared ledger. Predict, then measure.
     - 44 pages, 36 API nodes, twelve dated teaching weeks, six assessments
       summing to 100, one real deck on the week 5 power lecture.
     - Why this course and not another one — that part is only yours. -->

## What I decided a good university course looks like

<!-- This is the first third of the spine, and it is the part no test can make
     for you. Some threads you actually pulled on, to pick from:
     - Weeks that are genuinely different from each other, because the marking
       risk named in the brief is twelve weeks that read as one week.
     - Every number on the site traceable to a source, because a course about
       engineering budgets that invents its own figures is not one.
     - Flying in week 1, before any design decision — the ordering argument.
     - Power taught in week 5, before structures, because the battery sets the
       mass and the mass sets the wing.
     - Declaring the real workload (18 h/week) openly rather than hiding it. -->

## What I encoded in the harness

<!-- The second third. Both halves of the harness are marked, so say what each
     rule or test protects and why you chose it over judging by eye.

     CLAUDE.md ([`1a9cbc7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/1a9cbc7)) — seven rules. The load-bearing ones:
     - numbers come only from src/data/ledger.ts
     - every claim about the aircraft names a requirement ID
     - content agents write body prose only; only the orchestrator runs pnpm,
       git, or touches src/*.ts and spec/

     spec/ — ten checks in three files, written red before any content existed
     ([`1a9cbc7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/1a9cbc7)), green by the end of the next commit
     ([`72a606e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/72a606e)):
     - four map to published spec lines: twelve dated weeks, assessment sums to
       exactly 100, at least one real deck, an SE criterion worth 30 on every
       group item
     - the unit scanner: any number carrying g, W, Wh, mm, m/s or g/dm2 that
       the ledger does not know fails the build
     - twelve distinct field objectives, plus trigram-Jaccard similarity under
       0.35 between any two studio pages
     - a banned-phrase list

     Two moments worth telling, because they are evidence the harness works
     rather than decoration:
     - the voice test caught "journey" in prose I had written myself
     - the evidence gate passed three index pages that were still addressing me
       rather than a student ("Weights should sum to 100"), because they carried
       no STARTER_CONTENT marker. Only reading the built page caught it
       ([`2f1502a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-rOnInRaJ-dev/commit/2f1502a)). Say what that taught you about what a gate can
       and cannot check. -->

## What I deliberately left out

<!-- The third third, and the one that separates a credit from an HD, because
     it is where you say why a call beat the obvious one. The four in
     CLAUDE.md's "Deliberately not encoded" section, with reasons:
     - whether the course is one somebody would want to take
     - whether the twelve weeks build on each other rather than merely differing
     - whether a requirement is a good requirement
     - the wording of any rubric
     Plus the ones you dropped on time grounds and should own as decisions. -->

## How I knew the result was right

<!-- Pick the ones you actually relied on:
     - pnpm check at every phase gate: types, build, axe over 44 pages, link
       and base-path checks, dangling-ref failure, deck compile, then the ten
       spec tests
     - node src/data/ledger.ts: the design point's own assert self-check, which
       proves every requirement threshold is met by the numbers on the site
     - reading weeks 2, 6 and 10 end to end as a marker would, at 1920x1080 and
       390x844
     - what the agents got wrong, and how you found out -->

## The agentic workflow

<!-- The course is about this, so it earns its own paragraph. What actually
     happened, including where it did not go to plan:
     - Opus orchestrated and wrote the harness, the structural claims and every
       assessment by hand
     - three Sonnet architects wrote per-page briefs
     - Haiku wrote body prose, one page each, under a rule forbidding them from
       creating files, editing frontmatter, or running pnpm or git
     - the reason for that rule: fourteen agents sharing one dist/ and one git
       index
     - quote one prompt verbatim, as a blockquote, next to the commit it
       produced -->

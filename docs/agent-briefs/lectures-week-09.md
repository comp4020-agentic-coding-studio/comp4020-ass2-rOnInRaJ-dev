## What this page must do
Explain what "critical design review" actually changes about how the team is allowed to work from this point on — the shift from a design that can move to one that needs a paper trail to move — and give the mechanics of change control precisely enough that studio 9 can run an actual CDR meeting against it. No other page owns the general theory of a design freeze.

## Where the prose goes
Two to three paragraphs inserted between the "**By the end:**" line and the "## Outline" heading. Both of those lines stay exactly as they are; the new prose sits between them. Target ~300 words: paragraph 1 (~100 words) on what CDR baselines and what "no longer reasonable to reopen" means concretely; paragraph 2 (~120 words) on the three-part change-control record (reason, re-check, record) and why R-09's reserve exists to give a post-CDR change somewhere to go; paragraph 3 (~80 words) on build sequencing and jobs that cannot be parallelised, one concrete example.

## Must say
- Requirement IDs: R-01, R-09, R-10 (the three `reviewWeeks[9].covers` entries).
- R-01: all-up mass at or under the 1800 g cap — cite 1800 g.
- R-09: at least a tenth of the mass cap unallocated at CDR. Do not compute or state a percentage figure; the existing site phrasing is "a tenth of the cap" — reuse that shape in words.
- May cite, to make the reserve concrete: the allocated mass 1560 g against the 1800 g cap, leaving a 240 g reserve — these are the course design-point ledger figures (`massBudget` sums to 1560 g; `MTOW_CAP_G` is 1800 g; the reserve is 240 g), not any one team's real numbers, so frame them as the design-point illustration, not "your aircraft."
- The shape of a baseline: after CDR, a change to structure, mass allocation, or subsystem architecture needs a written reason, a re-check of every requirement it touches, and a record — not a quiet edit.
- R-10 (spar limit load) may be named as one of the three things CDR baselines, but the bench test method for R-10 belongs to week 7 and its re-verification to week 10 — name it here only as "baselined," not tested.
- One concrete example of build sequencing / unparallelisable jobs (e.g. a wiring harness that has to be routed before a structural skin closes over it, or a battery bay that has to be sized before the fuselage shell is finished) — invent a plausible ordering constraint; no ledger number required.

## The failure story
None. Story 9 (mass creep) belongs to the paired studio page, not this lecture. Do not retell it, summarise it, or preview it here — not even as a one-clause aside.

## Must not
- Do not describe the act of weighing the aircraft, the scale, or any At the Field procedure — that is fixed content on the studio 9 page.
- Do not tell the mass-creep story — studio 9 owns it.
- Do not describe the R-10 bench test (sandbag/hanging-weight, tip deflection) — that belongs to week 7's page and week 10's re-verification.
- Do not restate or summarise `design-ledger-and-reviews.md`'s marking criteria, weights, or "what you submit" list. Point at it by name if useful but do not reproduce its content.
- Do not describe the verification matrix (requirement/method/predicted/measured) — that is week 10's framework, introduced there for the first time.
- Do not mention interface control documents — that is week 8's territory.
- Do not use a percentage number for R-09; use "a tenth of the cap."

## Voice notes
- CDR is a constraint being imposed on the team, not an achievement — write it as a cost, not a milestone.
- No sentence should sound like it's praising the review process. State what it forecloses.
- Avoid "milestone," "gate" used as a positive noun, or any phrase suggesting CDR is a formality to get through.

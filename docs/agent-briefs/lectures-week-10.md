## What this page must do
Introduce the verification matrix as a method (requirement, method, predicted, measured) and give the six requirements this course can close before anyone flies, so the reader can build their own matrix from this page alone. No other page defines the matrix.

## Where the prose goes
Two to three paragraphs between "**By the end:**" and "## Outline". Target ~300 words: paragraph 1 (~90 words) on what a verification matrix is and why it has exactly those four columns; paragraph 2 (~120 words) naming the six requirements and, for each, the one bench tool that closes it; paragraph 3 (~90 words) on the test readiness review as a go/no-go gate distinct from CDR.

## Must say
- Requirement IDs: R-01, R-04, R-10, R-11, R-12, R-13 (the six `reviewWeeks[10].covers` entries) — state plainly that these are six of the fourteen course requirements closeable on the ground.
- Pair each requirement with its bench tool, one clause each: R-01 (re-confirm all-up mass) → the scale; R-04 (static thrust ≥ 0.70 of weight) → the thrust stand; R-10 (spar limit load) → the sandbag/hanging-weight rig; R-11 (centre of gravity) → two knife edges; R-12 (radio range and failsafe) → a walked range check and a deliberate transmitter-off test; R-13 (control repeatability) → a protractor and fifty cycles.
- May cite `thresholds.cruisePowerCapW` (70 W) only if drawing a contrast with what cannot be closed on the ground (cruise power needs flight, so it is not one of the six) — optional, not required.
- May cite `thresholds.thrustToWeightMin` (0.7) as the R-04 threshold, since it is a bare ratio with no unit.
- State that the test readiness review is a go/no-go gate: the aircraft is not flown in week 11 without it, distinct from CDR's baseline-and-freeze function in week 9.

## The failure story
None. Story 10 (failsafe set to hold last stick position) belongs to the paired studio page. Do not retell or preview it here.

## Must not
- Do not describe the actual field range check or the transmitter-off test procedure at altitude — that's studio 10's fixed "At the field" content.
- Do not tell the failsafe failure story.
- Do not restate `bench-verification-and-interfaces.md`'s marking weights or "what you submit" list — point at it, don't reproduce it.
- Do not repeat CDR's change-control mechanics from week 9 — this page is about verification method, not baselining.
- Do not discuss flight testing, tuning, or logging in the air — that's week 11's.
- Do not write "3.5 g" for the R-10 limit load — spell it in words if named at all.
- Do not write a bare number with "V", "Ah", "m" (metres), "%", "minutes", or "degrees" — spell all of those in words (e.g. "four hundred metres", "one degree", "fifty cycles" as a count, not a unit).

## Voice notes
- The six-requirement list should read like an inventory, not a triumph — "these six, on the ground; the rest need the air."
- No sentence implying ground testing is a substitute for flying — it is a filter, not a proof.

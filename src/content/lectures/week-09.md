---
title: "Building the thing you drew"
description: >-
  The critical design review, and what a change costs once the aircraft is being built rather than drawn
week: 9
tags:
  - "build"
  - "manufacturing"
date: 2027-04-19
teachers:
  - halcyon-pree
related:
  - sessions/week-09
---

**By the end:** you can run a critical design review and state what any change after it costs in time, mass and re-verification.

CDR happens in a room with the aircraft itself on the bench, not a set of drawings on a screen. Every subsystem's mass ledger is printed and pinned to the wall behind it, and every reviewer walks in already having read the numbers, not learning them for the first time in the meeting. The wing exists. The fuselage shell exists. The battery bay is already cut to size, whether or not the battery fits it comfortably. That physical fact is what CDR is for: after this point, structure, mass allocation and subsystem architecture stop being things the team can quietly redraw between studio sessions. A change is still possible, but it now costs a re-check of everything downstream of it, and a written reason it happened at all. The spar is baselined here as well, though nothing at CDR tests it directly — the bench test to limit load ran in week 7, and week 10 runs it once more; this review only fixes the design so the layup and the joiner geometry cannot drift between the two tests.

`R-01` and `R-09` close at CDR with measured lines, not the estimated ones the ledger has carried since week 3. Every component either sits on the scale or carries a sourced figure from a datasheet; an "estimated" tag left against a part that is physically sitting on the bench in front of the reviewers is a finding against the team, not an administrative gap. The mass cap is 1800 g. The course design point allocates 1560 g of that across its named subsystem lines, leaving a 240 g reserve — a tenth of the cap, which is exactly what `R-09` asks the ledger to hold onto at this review. That reserve is not comfort margin for whoever owns it. It is where a change lands after CDR, because nothing gets heavier for free once the ledger is closed. A change-control record has three parts, in order: the reason a line moved, a re-check of every requirement that line touches, and a record of both filed against the ledger itself. A typical entry reads something like: servo mount reinforced after a bench test flagged flex under load; mass line moved to a heavier bracket; `R-01` and `R-11` re-checked against the new total; reserve reduced by the difference. A line that changes without an entry like that did not happen, as far as the review is concerned — it is simply wrong, later, when somebody notices the ledger and the aircraft disagree.

:::figure{kind="structures"}
A CDR ledger board: one row per subsystem mass line — wing, fuselage, tail, propulsion, battery, avionics, servos, payload, consumables — each row tagged estimated, sourced or measured, with a running total column and the 1800 g cap drawn as a line above the stack, the 240 g reserve shaded as the gap between the total and the cap.
:::

Build sequencing is fixed by CDR too, because some jobs cannot be reordered once an aircraft exists rather than a drawing. A wiring harness has to be routed, tied off and tested before the structural skin closes over it — a servo lead trapped inside a wing that is already skinned is not a five-minute fix, it is a skin panel that has to come back off. The same logic runs the other way: a battery bay has to be sized and fitted before the fuselage shell is closed around it, because a bay too small for the pack it was meant to hold is a fuselage rebuild, not an adjustment. Neither error shows up as a design defect on a drawing. Both show up as a studio session spent undoing two studio sessions of finished work.

## Outline

- what CDR baselines, and what it is no longer reasonable to reopen
- closing `R-01` and `R-09` with measured lines, not estimated ones
- change control: the reason, the re-check, and the record
- build sequencing, and the jobs that cannot be parallelised

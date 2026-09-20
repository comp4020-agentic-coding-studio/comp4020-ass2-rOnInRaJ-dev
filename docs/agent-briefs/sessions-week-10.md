## What this page must do
Run the actual bench closures for R-04, R-10, R-11 and R-13 in lab hours, and the failsafe *configuration* (not the field test — that's fixed content) in workshop hours, where the wrong-default warning belongs. This is the one page that works the "hold last stick position" failure story.

## Where the prose goes
A new `## In the studio` section between the "This week works on `R-01`, `R-04`, `R-10`, `R-11`, `R-12`, `R-13`." line and "## At the field". Target ~300 words: workshop hours (~150 words, failsafe configuration and the warning) and lab hours (~150 words, the four bench closures).

## Must say
- Requirement IDs: R-01, R-04, R-10, R-11, R-12, R-13.
- Workshop hours: the failsafe behaviour is a parameter the team sets deliberately, on the bench, with the propeller off, before it is ever tested in the air — name the two options in plain terms (hold the last stick position it received, or circle and descend) and state that R-12 requires the second.
- Lab hours: name the same four bench closures as the lecture but as this team's actual session — i.e. framed as "book the rig, run it, log predicted next to measured" rather than as a general inventory — R-04 on the thrust stand, R-10 on the sandbag rig, R-11 on the knife edges, R-13 on the protractor rig for fifty cycles.
- Lab hours: R-01 gets re-confirmed at flight-ready mass here, and state plainly that it will have crept since week 9 — this is already on the page's `spec`, so the new prose should give the reader the reason (batteries, finish, fasteners added since CDR), not just repeat the spec line.

## The failure story
Story 10 (failsafe set to hold last stick position; the deliberate transmitter-off test puts the aircraft into a spiral, exactly as configured). Land it in the workshop-hours half as a direct warning attached to the failsafe configuration step: a team that leaves the default in place finds out what it does at altitude, in front of the instructor, not on the bench.

## Must not
- Do not describe the actual field range check or the transmitter-off test at altitude, its safety arrangement, or who flies it — all fixed in "At the field" already.
- Do not repeat the lecture's six-requirement inventory or its "verification matrix has four columns" framing — build the matrix here, don't re-explain what one is.
- Do not restate `bench-verification-and-interfaces.md`'s criteria or "what you submit" list.
- Do not discuss CDR, role rotation, or the mass ledger tagging (estimated/sourced/measured) — that's week 9's studio.
- Do not write "3.5 g" for the limit load.
- Do not give a bare number with "m" (metres), "V", "Ah", "%", or "degrees" — spell those in words.

## Voice notes
- The failsafe warning should read as procedural, not dramatic — the point is that a parameter has a default, and the default is not automatically what R-12 requires.
- Bench-closure prose should sound like a checklist being worked, not a story about the checklist.

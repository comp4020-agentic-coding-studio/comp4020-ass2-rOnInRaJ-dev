## What this page must do

Teach the one distinction the whole week hangs on: a spar sized for shear and
a spar sized for bending are two different calculations, and getting this
wrong is how root failures happen. This page owns that distinction; no other
page explains the mechanism.

## Where the prose goes

Two insertion points, ~300 words total.

1. One paragraph (~130 words) between `**By the end:**` and `## Outline`:
   states the shear-versus-bending distinction plainly, before the outline
   bullets name load cases and materials.
2. A worked-example block (~170 words) after the `## Outline` list, carrying
   the failure story in full, and a one-line forward pointer to week 8 (the
   spar is now an interface — a handover between structure and everything
   bolted to it).

## Must say

- Name `R-10` (the wing spar carries a **3.5 g** limit load with no permanent
  set — this exact phrase, "3.5 g", is the only load-factor figure allowed on
  the site).
- The limit load is stated at all-up mass; give the allocated mass (**1560
  g**) as the mass the load is carried against, once.
- Materials priced in grams: the wing structure line in the ledger is
  **310 g** (`massBudget.wingStructure`), the tail structure **85 g**, the
  fuselage **240 g** — use these as the budget a material choice has to fit
  inside, not as a bill of materials.
- One sentence on tip deflection as the thing that gets measured, not the
  thing that gets designed to — the studio measures it, the lecture predicts
  it.
- One sentence connecting CAD II to the ledger: the structural mass line this
  week's model returns is what replaces the estimate used since week 2.

## The failure story

Story 7 (a joiner sized for shear, then loaded in bending, root failure) as a
full worked example, landing under the shear-versus-bending paragraph. Walk
it as the reason the two calculations are kept separate on this page: sizing
for one load case and assuming it covers the other is exactly this mistake.

## Must not

- Must not restate week 6's tail-volume or centre-of-gravity content.
- Must not restate week 5's power or mass-budget argument beyond the two mass
  figures needed for the load calculation.
- Must not describe the load-rig procedure or predicted-versus-measured
  deflection logging in field-day detail — that is the session page's "At the
  field" block.
- Must not introduce interface control or failure-mode mapping as a general
  framework — that is week 8's lecture; here the spar failure is a structural
  example, not a systems-engineering method.

## Voice notes

- The worked example should read like a stated fact pattern, not a story with
  suspense — deadpan, in the order shear was calculated, then bending was not,
  then the root failed.
- No adjectives on the materials list; grams and a name each, nothing more.

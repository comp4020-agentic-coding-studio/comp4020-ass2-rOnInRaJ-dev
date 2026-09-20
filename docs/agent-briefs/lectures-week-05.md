## What this page must do

Send the reader to the deck for the actual argument, and do the one job the
deck cannot: connect this week backward to week 4's wing and forward to week
6's tail, so the reader understands why power is taught before either of them.
The deck (`src/decks/week-05.deck.mdx`) already carries the full derivation of
cruise power, pack sizing, the radio/failsafe warning and the PID loop — this
page must not re-derive any of it, only point at it and add what it leaves out.

## Where the prose goes

Two insertion points, roughly 150 words each, total ~300 words.

1. One paragraph between the `**By the end:**` line and `## Outline`: names
   the deck by function (not by filename) — "this week's slides" or similar —
   and states in one sentence what it covers, then pivots to the mass-loop
   argument (wing sizing needs a mass, mass is a third battery, battery size
   needs cruise power) so the reader knows this page assumes the deck, not
   repeats it.
2. A short unheaded block (or one small heading, writer's choice) after the
   `## Outline` list: the failure-story aside and a one-sentence forward
   pointer to week 6, which needs the mass this week fixes.

## Must say

- The deck lives at `/decks/week-05/` (already in frontmatter as `slides`) —
  refer to it as the week's slides, do not restate its numbers.
- The loop: wing area (week 4) sets a mass target, mass sets cruise power
  (**60 W**, `derived.cruisePowerW`), cruise power sets pack size (**32.6 Wh**
  pack energy, **26 Wh** usable, both from the ledger), and the pack is a
  fifth of the aircraft's own mass budget (battery line: **230 g**, against an
  allocated mass of **1560 g**). Say plainly that this is why power is week 5
  and not week 9.
- Name `R-04` (static thrust at seven tenths of all-up weight — **1100 g**
  static thrust, `designPoint.staticThrustG`), `R-06` (usable energy, **26
  Wh**) and `R-07` (endurance, spelled as "twenty minutes" minimum — this is
  the threshold, not the design value) as the three requirements this week's
  preliminary design review closes evidence against.
- One sentence stating that this is the week's preliminary design review, and
  that the studio is where the estimate becomes a bench number.

## The failure story

Story 5 (brownout: the BEC sags when four servos move together, the flight
controller reboots, the aircraft flies itself into the ground unpowered).
Land it as a brief aside, one or two sentences, tied to the avionics draw line
(**8 W**, `designPoint.avionicsDrawW`) — the point being that a cruise-power
average hides a current spike, and the studio (not this page) is where they go
looking for it. Do not work the story in full here; that belongs to the
session page.

## Must not

- Must not restate the deck's cruise-power formula, the pack-sizing
  arithmetic, the radio/failsafe warning, or the PID explanation — all of that
  is the deck's job and repeating it is the one thing this page is explicitly
  told not to do.
- Must not describe the thrust stand procedure or the field slot in any detail
  — that is the session page's "At the field" block, already written.
- Must not touch tail sizing, static margin or centre of gravity — that is
  week 6's lecture.
- Must not resolve or fully narrate the brownout story — one aside only, the
  worked version lives in the session brief for this week.

## Voice notes

- This page is a pointer with an argument attached, not a summary — it should
  read like something said to a room that has already seen the slides once.
- No enthusiasm about the deck ("great slides ahead") — just say what it does
  and does not cover.
- Keep the mass-loop sentence short enough to say in one breath; it is the
  spine of the whole course and should read like one.

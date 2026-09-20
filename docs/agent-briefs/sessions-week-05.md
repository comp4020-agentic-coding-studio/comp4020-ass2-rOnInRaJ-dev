## What this page must do

Cover the four studio hours (workshop and lab) that happen before the team
ever goes to the field for its thrust-stand slot — the indoor bench check on
the power distribution and avionics wiring, which is a different exercise
from the field's thrust-and-current run on the prop. No other page owns this
indoor check.

## Where the prose goes

One new section, `## In the studio`, inserted between the
"This week works on `R-04`, `R-06`, `R-07`." line and the `## At the field`
heading. ~300 words, broken into two short paragraphs: one for workshop hours,
one for lab hours.

## Must say

- Workshop hours: the team wires up its power distribution — pack, BEC or
  regulator, flight controller, all five servos (`servos` line, **90 g**,
  from `massBudget`) — and builds the bench rig it will load-test.
- Lab hours: predict peak current draw with all servos moving together, then
  run it and log pack voltage under that load, before touching a propeller.
  This is where `R-06` (usable energy, **26 Wh**) gets its first bench number,
  ahead of the field's thrust-and-current run.
- Name `R-04` and `R-06` explicitly as what this indoor session produces
  evidence toward, distinct from the field slot's `R-04` thrust number.
- The avionics draw line (**8 W**, `designPoint.avionicsDrawW`) is a steady
  figure; the point of the lab check is that the transient draw under load is
  not steady, and cruise power (**60 W**) never shows it.

## The failure story

Story 5 (brownout under simultaneous servo load) as a full worked example —
this session's lab check is deliberately built to reproduce it safely on the
bench: predict the voltage sag before moving all servos at once, then watch
whether the flight controller resets. Use it as the reason the exercise exists,
not as a rare anecdote.

## Must not

- Must not restate the deck's or the lecture's cruise-power or pack-sizing
  numbers — this page applies them, it does not re-derive them.
- Must not describe the thrust-stand procedure — that is the fixed
  "At the field" block immediately below this new section, already written.
- Must not turn into a full interface control document — that is week 8's
  job; here, the servo/BEC relationship is one bench check, not a system.
- Must not touch centre of gravity, tail sizing or structural load — weeks 6
  and 7.

## Voice notes

- Write it as instructions a team follows in the room, not as a description of
  what a generic team might do — imperative, short sentences.
- No safety language here beyond what belongs to a bench check with a pack
  connected; the propeller-arc safety line already sits in the fixed block
  below and must not be duplicated.

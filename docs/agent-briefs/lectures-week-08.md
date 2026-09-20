## What this page must do

Define an interface concretely (in grams, volts, watts and data, as the
outline already says) and explain why the one-page interface control document
exists — because a failure at a handover between two subsystems is not owned
by either one. This page owns the definition and the design-freeze argument;
it does not own the incident-book exercise.

## Where the prose goes

Two insertion points, ~300 words total.

1. One paragraph (~150 words) between `**By the end:**` and `## Outline`:
   defines an interface with one concrete example drawn from this course's own
   aircraft (for instance, what the battery hands the motor, or what the
   flight controller hands a servo), then states why it is written down as one
   page and not as a specification for each subsystem separately.
2. A short block (~150 words) after the `## Outline` list: the failure-story
   aside, and the design-freeze statement — what "manufacture begins" costs a
   team that wants to change something after this week.

## Must say

- An interface example with a real ledger number attached: the pack hands the
  motor **14.8 V** worth mentioning only if the ledger exposes a pack-voltage
  figure — safer to use avionics draw (**8 W**, `designPoint.avionicsDrawW`)
  as what the avionics subsystem draws from the power subsystem, or peak draw
  (**320 W**, `designPoint.peakDrawW`) as the spike the power subsystem must
  survive.
- Name `R-12` (radio link holds to 400 m, failsafe circles and descends) and
  `R-13` (control surface deflection repeats within one degree after fifty
  cycles — spell "one degree" and "fifty cycles" in words, they are not
  ledger units) as the two requirements this week's studio works toward.
- One sentence stating why the interface document is one page: a document long
  enough to hide in is a document nobody reads before the failure, not after.
- One sentence on what design freeze means from this week: a change to a
  frozen interface now needs the same re-check CDR (week 9) will demand of any
  post-baseline change.

## The failure story

Story 8 (a reversed aileron servo, bench-tested with the wing off, discovered
on the take-off roll) as a short aside under the interface definition — one or
two sentences making the point that a component can be individually correct
and still fail at the handover, because the bench test did not reproduce the
configuration the aircraft actually flies in. The full version is the session
page's job.

## Must not

- Must not restate week 7's spar or materials content.
- Must not describe the incident-book exercise, or name the three failures a
  team will map — that is entirely the session page's field objective,
  already written.
- Must not introduce the verification matrix as a concept — that belongs to
  week 10's lecture; an interface control document and a verification matrix
  are different documents and this page must not blur them.
- Must not describe `R-14` or pack return — that is an Operations requirement
  closed in week 12.

## Voice notes

- The interface definition should read like a definition, not a metaphor —
  no "interfaces are like conversations between subsystems."
- The design-freeze sentence should land as a cost, stated flatly, not as a
  warning with an exclamation point's worth of energy behind it.

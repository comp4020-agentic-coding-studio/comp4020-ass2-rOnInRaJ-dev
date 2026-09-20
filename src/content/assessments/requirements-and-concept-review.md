---
title: Requirements and concept review
description: >-
  Your team's requirement set, the configuration you chose, and the alternative
  you rejected — reviewed in week 3 against the mission you say you are flying
week: 3
due: 2027-03-12T17:00:00+11:00
weight: 15
cohort: group
marking:
  mode: weighted
  criteria:
    - name: Requirements quality
      weight: 40
    - name: Trade study
      weight: 30
    - name: Systems engineering
      weight: 30
spec:
  - every requirement is numbered, has one owning subsystem, and names how it will be verified
  - the configuration you chose is compared against at least one alternative you did not choose
  - the mass ledger opens with every line item either estimated or sourced, and the estimate method stated
related:
  - sessions/week-03
  - design-ledger-and-reviews
---

## The brief

> Say what your aircraft is for, in numbers somebody else could check, before
> you have any idea how to build it.

The course requirement set (`R-01` to `R-14`) is the floor, not your
requirements. It tells you the mass cap, the power budget and the disposal
rule. It does not tell you what your aircraft does. That is the mission you
propose, and the requirements you write for it are the ones this review marks.

A requirement that cannot fail is not a requirement. "The aircraft shall be
robust" fails nothing. "The aircraft shall complete the survey leg and return
with the payload, verified at the week 12 fly-off" can be missed, and therefore
means something.

The trade study is the part teams skip. You chose a configuration. Something
else was on the table — a quad, a twin, a flying wing, a different wing area —
and you rejected it. Show the comparison and the number that decided it.

## What you submit

A requirements document, in the repository your team was issued:

- the numbered requirement set, each with an owner and a verification method
- the mass ledger at version one, with the estimate method for every line
- the configuration trade, with the criteria weighted before you scored them
- one page naming what you have not decided yet, and when you will

## How it is marked

The criterion table below applies. The systems-engineering row is the same
thirty marks on every group item in this course, and it asks four questions:
are the requirements numbered and testable; is it clear which subsystem owns
each one and what it hands its neighbours; was a real alternative considered;
and does every requirement have a check attached to it.

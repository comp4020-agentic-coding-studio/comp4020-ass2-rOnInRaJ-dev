---
title: "Moving the balance point"
description: >-
  Three centre-of-gravity positions on a club trainer, and the handling change at each one
week: 6
tags:
  - "balance"
  - "structures"
date: 2027-03-29
teachers:
  - glenys-arkwright
spec:
  - your tail is sized from your own wing, and the coefficient is in the ledger
  - R-02 and R-11 are checked against your current design, not against the course design point
  - your CAD model returns a mass that agrees with the ledger line it replaces
related:
  - lectures/week-06
---

This week works on `R-02`, `R-11`.

## In the studio

In the workshop hours, each team computes a tail volume coefficient from its own wing: span 1600 mm, chord 240 mm. You size a horizontal tail — fixed or moving — and a vertical tail against that coefficient, working through the moment arms and areas that the lecture covers. Start from the arm you actually have, not the arm you wish you had: measure from your wing's quarter-chord back to where the tail boom or tailplane mount actually sits on your fuselage, and use that number, not a value copied from another team's aircraft. Once you have sizes, you enter both into the CAD model started this week. The model sits in the shared repository and you iterate it as you work — one person owns the file at a time, and you commit a version before handing it to the next person, so nobody is sizing a tail against a fuselage another team member changed an hour ago. If the tail you need does not fit the fuselage you already drew, you have discovered a constraint. Record it and iterate: either the fuselage grows, the tail arm changes, or the coefficient target gets revisited, and which of the three you choose is a decision worth writing down, not just making.

In the lab hours, the CAD model returns a mass. You check that mass against the ledger's tail-structure line — 85 g — and record the gap. A gap either way means something changed in your design: heavier, and your material or section choice cost more than the budget assumed; lighter, and either you found a genuine saving or you under-modelled something, and the difference is worth chasing down before you trust the number. Then you predict where your own centre of gravity will sit, working from your wing's mass (fixed in week 4), your pack's mass (fixed in week 5), and the tail mass the model just returned.

:::figure{kind="cad"}
An exploded orthographic view of the CAD assembly at this stage: wing, fuselage and tail as separate labelled bodies pulled apart along a vertical axis, with a small mass callout beside each body and a highlighted outline around the tail body showing it is the part entered this week.
:::

Before your field slot, you check that prediction against `R-11`'s band: between twenty-eight and thirty-four per cent of mean aerodynamic chord. That check is yours to conduct, because the field exercise this week is on a club trainer, not your own aircraft. The three-position demonstration you run at the field is staged. A mis-loaded aircraft of yours would not announce itself the same way — the trainer is deliberately moved into an unstable position so the instructor can show you what it feels like before it departs; your own aircraft, mis-loaded by a modelling mistake nobody caught, gives you no such warning lap. This is the same aft-centre-of-gravity failure the lecture names: light and responsive for two circuits, gone on the third, and the only defence against it happening on your aircraft is the prediction you write down this week, before anyone straps a transmitter to it. The point of the studio work is to have a predicted balance point ready before you fly, checked against a stated band rather than against how the model handled on a previous team's aircraft.

Bring both numbers to the field slot on paper: the tail-structure mass gap from the lab hours, and the predicted centre-of-gravity percentage. Neither number changes what happens to the club trainer at the field — that demonstration runs the same three positions regardless of what your own aircraft's model says — but both numbers are what the following week's design conversation will ask for first, and a team that shows up with a memory of the CAD session instead of a written prediction is a team redoing the session instead of building on it.

## At the field

Your team books its own slot for this week — see [Field days](/field-days/) for
the rules and the windows. Every team's slot carries the same objective.

- **Field objective:** Shift the centre of gravity on a club trainer through three marked positions and log the handling change at each.
- **Owner:** Aero
- **Predict:** Predict which position will feel unstable, and at what percentage of chord, before the first of the three flights.
- **Weather fallback:** Gusty conditions mask the handling difference entirely. The exercise moves to the simulator with the same three positions dialled in.
- **Safety:** The aft-most position is flown by the instructor alone, at altitude, over the far field, with nobody else in the circuit.

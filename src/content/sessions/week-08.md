---
title: "Reading the incident book"
description: >-
  The club's own record of what has gone wrong at Mount Sludge, mapped onto your aircraft's interfaces
week: 8
tags:
  - "incident review"
  - "operations"
date: 2027-04-12
teachers:
  - nadia-strout
spec:
  - your interface control document exists and names what every subsystem hands its neighbours
  - three real failures from the club record are mapped onto your own interfaces
  - R-13 has a bench method written against it before the rig is booked
related:
  - lectures/week-08
---

This week works on `R-12`, `R-13`.

## In the studio

The first two hours are workshop time. Each team writes its one-page interface control document, naming what every subsystem hands its neighbours: the battery mass in grams, the power draw in watts, the voltage, the connectors and wiring that stay fixed. Write it against your own aircraft's actual handovers, not a template. The aero subsystem hands the structures subsystem a wing mass and a load case. The power subsystem hands the propulsion subsystem a voltage and a peak current it must survive. The flight controller hands the radio subsystem a data signal and the servos signal pulses and current draw. Your document gets everything.

The second two hours are in the lab. Your team writes a bench method for `R-13`: how you will test that a control surface deflection repeats to within one degree after fifty cycles. A protractor and a cycle counter are your tools. Here is where the failure story matters: a reversed aileron servo can bench-test perfectly with the wing off, then fly backwards on the take-off roll because the bench did not run it in the flying configuration. Test the servo-to-surface interface in the same configuration the aircraft actually flies in, not a convenient one. If your servo bolts to a wing that moves, rig the wing. The incident-book walk below maps three recorded club failures onto the interfaces you have just written, so that document must exist and be signed before you book the field slot.

## At the field

Your team books its own slot for this week — see [Field days](/field-days/) for
the rules and the windows. Every team's slot carries the same objective.

- **Field objective:** Walk the club's incident book and map three recorded failures onto your own aircraft's interfaces.
- **Owner:** Avionics & Control
- **Predict:** Predict, before you open the book, which of your interfaces is most likely to be the one that shows up in it.
- **Weather fallback:** This one runs in the clubhouse regardless. If the field closes entirely, the incident book comes to the workshop instead.
- **Safety:** The incident book names club members. Nothing leaves the clubhouse in a form that identifies anybody.

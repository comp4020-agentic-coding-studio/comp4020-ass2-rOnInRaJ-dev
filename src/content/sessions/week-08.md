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

Bring last week's structural numbers and week 5's power numbers to this session, not just your memory of them — the document you write today references both, and a mass or a current pulled from memory drifts by the time it is written down. The room for this session is the same workshop bench as previous weeks, but the exercise is different: nobody is sizing a part today, everybody is describing a boundary between parts other people already sized.

## In the studio

The first two hours are workshop time. Each team writes its one-page interface control document, naming what every subsystem hands its neighbours: the battery mass in grams, the power draw in watts, the voltage, the connectors and wiring that stay fixed. Write it against your own aircraft's actual handovers, not a template. The aero subsystem hands the structures subsystem a wing mass and a load case. The power subsystem hands the propulsion subsystem a voltage and a peak current it must survive. The flight controller hands the radio subsystem a data signal and the servos signal pulses and current draw. Your document gets everything. Sit the four subsystem owners around the same page while it is written, not four separate drafts stapled together afterwards — an interface that only one side described is exactly the gap this exercise exists to close, and the fastest way to find a mismatch is to have both sides write their half of the same row at the same time and watch for the moment their numbers disagree.

One page means one page: if a handover needs three paragraphs to explain, the interface itself is probably too vague, not the writing. A row that says "flight controller to servo: signal pulse, plus 5 V rail, plus a current limit" is usable at a glance during a rebuild at eleven at night; three paragraphs of prose describing the same handover is not, and a document nobody can use under time pressure is a document that gets skipped under time pressure.

The second two hours are in the lab. Your team writes a bench method for `R-13`: how you will test that a control surface deflection repeats to within one degree after fifty cycles. A protractor and a cycle counter are your tools. Here is where the failure story matters: a reversed aileron servo can bench-test perfectly with the wing off, then fly backwards on the take-off roll because the bench did not run it in the flying configuration. Test the servo-to-surface interface in the same configuration the aircraft actually flies in, not a convenient one. If your servo bolts to a wing that moves, rig the wing.

:::figure{kind="general"}
Two side-by-side sketches of the same aileron servo and control horn: the left labelled "bench-tested" showing the servo mounted on a flat jig with the wing skin absent and the linkage running freely in open air; the right labelled "flying configuration" showing the same servo mounted inside the assembled wing with the control horn, hinge line and skin all present, and a callout on the right sketch reading "test here, not there."
:::

The incident-book walk below maps three recorded club failures onto the interfaces you have just written, so that document must exist and be signed before you book the field slot. Bring a spare copy to the field: the walk works by holding a described failure up against a row in your document and asking whether that row would have caught it, and that only works if the document is in front of you, not remembered from the workshop hours.

## At the field

Your team books its own slot for this week — see [Field days](/field-days/) for
the rules and the windows. Every team's slot carries the same objective.

- **Field objective:** Walk the club's incident book and map three recorded failures onto your own aircraft's interfaces.
- **Owner:** Avionics & Control
- **Predict:** Predict, before you open the book, which of your interfaces is most likely to be the one that shows up in it.
- **Weather fallback:** This one runs in the clubhouse regardless. If the field closes entirely, the incident book comes to the workshop instead.
- **Safety:** The incident book names club members. Nothing leaves the clubhouse in a form that identifies anybody.

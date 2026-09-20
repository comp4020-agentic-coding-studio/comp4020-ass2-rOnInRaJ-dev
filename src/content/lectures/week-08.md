---
title: "Most failures are interface failures"
description: >-
  Interface control and failure modes, and the week manufacture starts: the handovers between subsystems are where aircraft are lost
week: 8
tags:
  - "interfaces"
  - "risk"
date: 2027-04-12
teachers:
  - bez-toomath
related:
  - sessions/week-08
---

**By the end:** you can write an interface control document for your own aircraft and run a failure-mode walk over it.

An interface is where one subsystem hands something to the next. The avionics subsystem draws 8 W from the power subsystem, and that handover has to be written down: the voltage the battery supplies, the current the avionics must not exceed, the connectors and wiring the electrical subsystem must guarantee. An aircraft fails at handovers, not inside subsystems. This week's studio closes `R-13`: control surface deflection repeats to within one degree after fifty cycles. A servo can be individually correct and still fail at the interface, because the bench test did not run it in the flying configuration. A reversed aileron servo bench-tested with the wing off flies backwards on the take-off roll. The week also works toward `R-12`: the radio link holds to 400 m, and failsafe circles and descends on loss. The interface control document is one page, not twenty, because a document long enough to hide in is a document nobody reads before the failure, not after. Every subsystem's engineer owns their own ledger line; one page of handovers belongs to nobody at all, and that is the failure that kills aircraft.

## Outline

- what an interface is, in grams, volts, watts and data
- the interface control document, and why it is one page and not twenty
- failure modes: how each interface fails, and what it takes down with it
- manufacture begins — and what you are no longer allowed to change

From this week, your interfaces are frozen. Manufacture begins, and changing a frozen interface now demands the same re-check a design-review correction will face in week 9. Every change downstream of an interface—a different connector, a rewired servo lead, a second battery cell—now needs a re-run of the failure-mode walk and a signed-off change notice from the subsystem that owns the downstream code.

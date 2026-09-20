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

Weeks 5 through 7 taught you to size a subsystem: a pack against a cruise-power figure, a tail against a wing, a spar against a limit load. Each of those weeks ends with a number that lives inside one subsystem's own budget line. This week is different on purpose — it does not add a new subsystem to size, it asks what happens at the join between the subsystems you have already sized, because a correct pack and a correct tail and a correct spar can still be assembled into an aircraft that fails on its first flight, at a boundary none of the three weeks individually owned.

An interface is where one subsystem hands something to the next. The avionics subsystem draws 8 W from the power subsystem, and that handover has to be written down: the voltage the battery supplies, the current the avionics must not exceed, the connectors and wiring the electrical subsystem must guarantee. An aircraft fails at handovers, not inside subsystems. This week's studio closes `R-13`: control surface deflection repeats to within one degree after fifty cycles. A servo can be individually correct and still fail at the interface, because the bench test did not run it in the flying configuration. A reversed aileron servo bench-tested with the wing off flies backwards on the take-off roll. The week also works toward `R-12`: the radio link holds to 400 m, and failsafe circles and descends on loss. The interface control document is one page, not twenty, because a document long enough to hide in is a document nobody reads before the failure, not after. Every subsystem's engineer owns their own ledger line; one page of handovers belongs to nobody at all, and that is the failure that kills aircraft.

Every subsystem on this aircraft is correct on its own bench. The pack meets its energy figure. The regulator holds its output voltage. The servo hits its commanded angle. None of that is in dispute, and none of it is what an interface failure looks like. An interface failure is two correct components meeting each other in a configuration nobody tested: a servo that was verified spinning freely in a jig, then bolted to a control horn that was never on the servo during that test. Neither component failed its own spec. The failure exists only in the handover between them, which is why it does not show up on either subsystem's own test log — it shows up on the aircraft, usually on the first flight where both halves of the interface are finally present at once.

## Outline

- what an interface is, in grams, volts, watts and data
- the interface control document, and why it is one page and not twenty
- failure modes: how each interface fails, and what it takes down with it
- manufacture begins — and what you are no longer allowed to change

:::figure{kind="general"}
A simple block diagram of four subsystem boxes — power, propulsion, avionics, structures — connected by labelled arrows, each arrow carrying a small tag naming what crosses it: grams, watts, volts, or a data line, with one arrow highlighted and annotated "interface: written down here, owned by neither box."
:::

From this week, your interfaces are frozen. Manufacture begins, and changing a frozen interface now demands the same re-check a design-review correction will face in week 9. Every change downstream of an interface — a different connector, a rewired servo lead, a second battery cell — now needs a re-run of the failure-mode walk and a signed-off change notice from the subsystem that owns the downstream code. This is a cost stated flatly, not a warning: a connector swap that would have taken ten minutes in week 3, before anything was built around it, now takes a re-check of every interface that connector touches, because the whole point of freezing the document this week is that nobody downstream should have to re-verify their own work every time somebody upstream has a better idea. The freeze is what lets four subsystems build in parallel for the next few weeks without four people constantly re-reading each other's changes.

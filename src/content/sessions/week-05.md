---
title: "Preliminary design review, and the thrust stand"
description: >-
  The power system gets baselined, and your motor and propeller go on the stand for real numbers
week: 5
tags:
  - "PDR"
  - "thrust stand"
  - "electronics"
date: 2027-03-22
teachers:
  - nadia-strout
spec:
  - your power system is baselined at PDR and the ledger's power lines are closed
  - R-04 and R-06 have measurements against them, not estimates
  - your predicted thrust and your measured thrust are both in the log, with the gap accounted for
related:
  - lectures/week-05
---

This week works on `R-04`, `R-06`, `R-07`.

## In the studio

Wire your power distribution: pack to regulator to flight controller to all five servos — 90 g total. Build the bench rig: pack through the regulator to the flight controller, flight controller wired to all five servos, current meter in series with the battery. Measure the static resistance of the servo bus when all five move together; you will need it for the lab prediction.

Predict the peak current draw with all five servos at full rate, then calculate the voltage sag that current will produce across your regulator's input impedance. Power the bench rig and command all five servos to their limits while logging pack voltage. This is where you watch for brownout: when the regulator sags below its dropout threshold and the flight controller resets — that is failure story 5, and catching it on the bench prevents it at altitude. The avionics draw is steady at 8 W, but the transient peak under full load is higher, and the 60 W cruise average never shows that peak. `R-06` (usable energy, 26 Wh) gets its first bench measurement from what the pack delivers under load. `R-04` gets preliminary evidence in power and current; the field's thrust stand provides the measurement. Week 6 sizes the tail and needs your aircraft's measured mass.

## At the field

Your team books its own slot for this week — see [Field days](/field-days/) for
the rules and the windows. Every team's slot carries the same objective.

- **Field objective:** Run your team's chosen motor and propeller on the field thrust stand, on a fresh pack, and log thrust against current all the way to full throttle.
- **Owner:** Propulsion & Power
- **Predict:** Predict static thrust and peak current before the stand is switched on. Both numbers go in the log before the first run.
- **Weather fallback:** The thrust stand sits under the club shelter, so rain does not stop it. Wind across the stand above its limit does, and the run moves to the lab rig.
- **Safety:** Nobody stands in the propeller arc. The stand is armed from behind the blast shield, by one person, who says so out loud first.

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

Wire your power distribution: pack to regulator to flight controller to all five servos — 90 g total. Build the bench rig: pack through the regulator to the flight controller, flight controller wired to all five servos, current meter in series with the battery. Measure the static resistance of the servo bus when all five move together; you will need it for the lab prediction. Lay the rig out flat on the bench, in the order current actually flows, so a bad connection is something you can see and point at rather than something buried under a wing skin. Label every lead before you power anything: pack positive, regulator input, regulator output, flight controller rail, and five servo feeds, each in its own colour. A rig you cannot read at a glance is a rig you will mis-wire once and not notice until the log looks wrong.

:::figure{kind="electronics" img="sessions/week-05.jpg"}
A top-down schematic of the bench rig: pack on the left feeding a regulator, the regulator's output feeding a flight controller, and the flight controller fanning out to five labelled servo blocks on the right, with a current meter drawn in series on the wire between pack and regulator and a voltage probe drawn across the regulator's output rail.
:::

Predict the peak current draw with all five servos at full rate, then calculate the voltage sag that current will produce across your regulator's input impedance. Write both numbers down before you power anything — a prediction made after the trace is already on the screen is not a prediction, it is a caption. Power the bench rig and command all five servos to their limits while logging pack voltage. This is where you watch for brownout: when the regulator sags below its dropout threshold and the flight controller resets — that is failure story 5, and catching it on the bench prevents it at altitude. Run it more than once. A rig that survives the first command sweep and resets on the third has found a marginal connection, not a fluke, and marginal on the bench is a rewire now rather than a diagnosis after a crash.

The avionics draw is steady at 8 W, but the transient peak under full load is higher, and the 60 W cruise average never shows that peak — a wattmeter reading averaged over a second hides a spike that lasts a tenth of that. `R-06` (usable energy, 26 Wh) gets its first bench measurement from what the pack delivers under load, not from the cell manufacturer's datasheet. `R-04` gets preliminary evidence in power and current here; the field's thrust stand provides the actual measurement, on the same pack, later this week. Note the gap between what the bench predicts and what the stand logs — that gap, not either number alone, is what the preliminary design review wants to see. Week 6 sizes the tail and needs your aircraft's measured mass, which is exactly the number this bench rig, not an estimate, now provides.

Keep a running log sheet on the bench, not in your head: predicted current, predicted sag, measured current, measured sag, one row per run. A team that reruns the sweep three times and remembers "it got better" has no evidence for the design review; a team with three rows and a trend line does. If the flight controller resets, write down which servo channel moved last before the reset, not just that a reset happened — the order the channels fire in during your sweep is not the same order they will move in flight, and knowing which combination triggered the sag on the bench tells you where to look first if it happens again.

## At the field

Your team books its own slot for this week — see [Field days](/field-days/) for
the rules and the windows. Every team's slot carries the same objective.

- **Field objective:** Run your team's chosen motor and propeller on the field thrust stand, on a fresh pack, and log thrust against current all the way to full throttle.
- **Owner:** Propulsion & Power
- **Predict:** Predict static thrust and peak current before the stand is switched on. Both numbers go in the log before the first run.
- **Weather fallback:** The thrust stand sits under the club shelter, so rain does not stop it. Wind across the stand above its limit does, and the run moves to the lab rig.
- **Safety:** Nobody stands in the propeller arc. The stand is armed from behind the blast shield, by one person, who says so out loud first.

---
title: "The glide test"
description: >-
  Measuring a real lift-to-drag ratio off a club trainer, and comparing it with the one you calculated
week: 4
tags:
  - "glide test"
  - "aero"
date: 2027-03-15
teachers:
  - nadia-strout
spec:
  - your wing area follows from your mass and your stall-speed target, and you can show the working
  - you have one measured lift-to-drag ratio and one calculated one, and an account of the gap
  - your ledger has an aero line with a method against it
related:
  - lectures/week-04
---

This week works on `R-02`, `R-03`.

## In the studio

Your wing's area follows from two numbers: your all-up mass and a stall-speed target of 8.5 m/s. In the workshop, you run the wing-sizing calculation on your team's own numbers, not a worked example off a slide. You start with the mass estimate currently sitting in your ledger; the calculation tells you the wing area you need to keep the stall speed at or below that target. Smaller mass means a smaller wing gets you there. If you add mass during assembly — and every team adds mass during assembly, a nut here, a hinge there, none of it individually worth arguing about — the wing has to grow to match, or the stall speed climbs past the target and you breach `R-03`. This is the loop the lecture names: the mass you have determines the wing you need, the wing you need determines the power you need at cruise, and the power determines the battery mass, which feeds back into the mass you have. You do not size all three once and stop; you size the wing this week against the best mass estimate you have, and you revisit it the moment that estimate changes. Requirements `R-02` (wing loading stays at or under 45 g/dm²) and `R-03` (stall speed stays at or under 8.5 m/s) are the Aero requirements that lock the wing to the mass, and both are checked against the same all-up mass figure, so a change to one line in the ledger can fail both at once.

Before the calculation means anything, the mass input has to be real rather than hopeful. In the lab, you weigh the current airframe stock and the components — everything you have built so far, everything still in the box waiting to be bolted on — against the estimate sitting in the ledger from week 2. Log every piece: a wing rib either is the mass the estimate said or it is not, and the ledger's method column is what changes when it isn't, not the estimate's number quietly edited to match without a note. The difference between estimate and reality feeds the wing-sizing calculation directly; once you know the real mass, you know the wing area you actually need, not the one the week-2 guess implied. The field work gives you a measured lift-to-drag ratio, backed out from a glide angle. Set it beside the one you calculated from the aerofoil polar. The gap between them is the account the spec asks for: what you predicted versus what the air actually delivered. A mismatched Reynolds number is one candidate reason for the difference — the polar you calculated against may simply not apply at your wing's scale — but it is not the only one, and the account is only honest if you check the others too: measurement error in the release height, a gust during the glide, a scale that was not quite level.

:::figure{kind="aero" img="sessions/week-04.jpg"}
A side-on glide diagram: a release height marked on a vertical scale, a straight glide path descending to a landing point, the glide angle marked between the path and the horizontal, and beside it a small formula box showing lift-to-drag as the inverse of the tangent of that angle — the "measured" glide path drawn as a solid line, the "calculated" glide path from the aerofoil polar drawn as a dashed line at a slightly shallower angle.
:::

## At the field

Your team books its own slot for this week — see [Field days](/field-days/) for
the rules and the windows. Every team's slot carries the same objective.

- **Field objective:** Measure a club trainer's glide angle from a fixed release height and back out its lift-to-drag ratio.
- **Owner:** Aero
- **Predict:** Predict the glide ratio from the trainer's published wing area and mass before the first release.
- **Weather fallback:** Thermal or sink over the strip makes a glide measurement meaningless. Repeat at the first still slot and record why the first attempt was discarded.
- **Safety:** Dead-stick glides are flown by the instructor. Students hold the stopwatch and the height reference, not the transmitter.

Whichever way the gap goes, it goes in the ledger next to the aero line, with the method that produced both numbers written beside it — the calculated ratio from the polar, the measured ratio from the glide, and one sentence on which candidate reason you checked and ruled in or out. A ledger line that gives only the ratio, without the account, has not done this week's work.

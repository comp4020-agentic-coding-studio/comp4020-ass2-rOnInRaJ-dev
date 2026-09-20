---
title: "Where the centre of gravity has to be"
description: >-
  Static stability, tail sizing and the first CAD session: making the aircraft want to fly straight without being asked
week: 6
tags:
  - "stability"
  - "centre of gravity"
date: 2027-03-29
teachers:
  - halcyon-pree
related:
  - sessions/week-06
---

**By the end:** you can compute a tail volume coefficient for your own wing and say whether the aircraft will fly hands-off.

Week 5 closed the power system and fixed your pack's mass at 1560 g against the 1800 g cap. That number was not available before then. Your wing's mass was fixed in week 4. Now the tail has to be sized against both. The centre of gravity must land between twenty-eight and thirty-four per cent of mean aerodynamic chord to close `R-11`, but you cannot size a tail to hit that band until you know what mass the tail is flying with. An aircraft with the balance point too far aft feels light and responsive for the first two circuits, then departs on the third. That is not a warning you get to act on. `R-11` is a checked band, not a preference, because an aft centre of gravity does not announce itself early. Static margin is how the balance feels in your hand; `R-11` is where it is allowed to be. The wing is checked separately against `R-02`: wing loading at or under 45 g/dm², and your design point sits at 40.6 g/dm².

Sizing a tail is arithmetic, not intuition. A tail volume coefficient is a ratio: tail area times tail arm, divided by wing area times wing chord. Move the tail forward on the same fuselage and the arm shrinks, so the area has to grow to hold the same coefficient — a shorter fuselage does not make a smaller tail cheaper, it makes it bigger. This is where the mass argument bites: every square centimetre you add to a tail to compensate for a short arm is mass you did not budget for in week 4, mass that then moves your all-up figure away from 1560 g, which moves your wing loading away from 40.6 g/dm², which is why `R-02` is checked again this week and not signed off once and forgotten. A tail sized in isolation, on a spreadsheet with no fuselage length in it, is a tail sized wrong.

:::figure{kind="aero"}
A side-view profile of the aircraft showing the wing's mean aerodynamic chord as a shaded band, a shaded vertical zone on the fuselage marking the twenty-eight to thirty-four per cent range, an arrow from the wing's quarter-chord point back to the tail's quarter-chord point labelled "tail arm," and a small marker showing the actual centre of gravity position for comparison against the shaded band.
:::

## Outline

- static margin, and why an aft centre of gravity feels quick right up until it does not
- tail volume coefficients, and sizing a tail from your own wing
- mean aerodynamic chord, and where `R-11` puts your balance point
- CAD I: the model that the ledger reads mass out of

CAD I is the three-dimensional model you build this week: it is the thing the ledger will read a mass line out of from now on, replacing an estimate with a measured value. Until this week, every mass on your aircraft has been a guess dressed up as a line item — a wing you have not built yet, a tail you had not sized yet. From this week on, the mass line comes from a model with dimensions, materials and densities assigned to it, and a change to the model is a change to the number, not a change to a feeling about the number. Static margin and `R-11` are related but not interchangeable, and the model is where the difference stops being academic: static margin is a distance between the centre of gravity and the neutral point, felt in the stick as more or less willingness to return to level flight; `R-11` is a stated band on the airframe, checked against a measured mass distribution, that does not care how the aircraft feels. An aircraft can have generous static margin and still sit outside `R-11` if the mass behind that margin is wrong, which is exactly the gap this week's CAD model exists to close before it becomes next week's flight-test surprise. Week 7 covers the structure that carries this same aircraft — the spar that the tail hangs from, and the joiner that feeds the loads into the wing root.

---
title: "Lift, drag, and a very small Reynolds number"
description: >-
  Why an aerofoil that works on an airliner does nothing useful at model scale, and how to size a wing for the mass you have
week: 4
tags:
  - "aerodynamics"
  - "low Reynolds number"
date: 2027-03-15
teachers:
  - halcyon-pree
related:
  - sessions/week-04
---

**By the end:** you can size a wing for your own all-up mass and say exactly what stall speed you have bought.

A published aerofoil polar is measured at a certain Reynolds number — which depends on the wing's chord, the speed, and the air's viscosity, multiplied together into one dimensionless figure that says how the air behaves against the surface. A polar measured on a full-size wing, or in a wind tunnel at airliner cruise, is taken at a Reynolds number ten times yours. At your scale the air behaves stickier, relatively speaking: it clings to the wing's surface longer before it separates, and it separates differently near the trailing edge than the same-shaped wing would at full size. A curve that promises the stall happens at a certain angle of attack will not, on your aircraft, because the curve was drawn for a different regime of air behaviour and the aerofoil does not know which one you meant it for. You size your wing from a prediction, and the stall speed matters because it sets the minimum wing area that gets you off the ground without climbing too slowly to stay controllable. Get the Reynolds number wrong and your wing is suddenly too small for the stall speed you thought you had bought, and you learn this by departing at altitude rather than on the bench, which is the expensive way to find out. The requirement `R-03` is that stall speed stays at or under 8.5 m/s, and the whole point of taking the Reynolds number seriously is that 8.5 m/s only means what you think it means if the polar you sized against actually applies at your scale.

Aerodynamics sets the power you need: at 12 m/s cruise, the drag and the speed tell you the watts, because power is force times velocity and drag is the force the wing and fuselage owe the air at that speed. Some of that drag is the price of producing lift at all, and some of it is just the shape of the fuselage pushing through the air; both show up in the same watts figure, and the ledger does not care which is which. Power sets the battery mass: more watts for the same flight time need a heavier pack, or endurance falls if the pack stays the same size. Battery mass sets the aerodynamics back: a heavier aircraft needs a bigger wing to stay below the wing-loading cap of 45 g/dm² and keep the stall speed under `R-03`'s 8.5 m/s. You do not size the wing once, then the battery once, then stop. Wing area follows from your all-up mass and your stall-speed target — but the all-up mass includes the battery, which depends on the power the wing's drag demands at 12 m/s, which depends on the wing area you were trying to size in the first place. In week 5, when you size the battery itself, this loop tightens further. That is why `R-02` and `R-03` are both Aero requirements: they close that corner of the loop for the mass that feeds the power that feeds the mass that feeds the wing, and Aero cannot answer either one without a number from Structures and a number from Propulsion & Power that do not exist until Aero has already guessed.

:::figure{kind="aero"}
Two aerofoil cross-sections side by side at the same angle of attack, each with airflow streamlines over the upper surface — the left one, labelled "full-size, high Reynolds number", shows the flow staying attached almost to the trailing edge; the right one, labelled "model scale, low Reynolds number", shows the flow separating early into a visible bubble partway along the chord, with the stall angle marked lower on the right-hand curve.
:::

:::figure{kind="aero"}
A four-node loop diagram: wing area, cruise power, battery mass and all-up mass arranged in a circle with arrows running one into the next and back around, `R-02` tagged on the wing-area node and `R-03` tagged on a stall-speed node beside it, and a spiral arrow drawn behind the loop labelled "tightens again in week 5, tightens again in week 11."
:::

None of this loop closes this week. What closes this week is smaller: a wing area, sized once, from a mass estimate that is still mostly guesswork this early in the course. The loop keeps tightening every week after this one, and by the time a battery has an actual measured mass in week 5, the wing you sized this week may already be the wrong size for it.

## Outline

- lift and drag as the ledger sees them: newtons that cost watts
- Reynolds number at our scale, and what it does to a published polar
- wing area from mass and a stall-speed target
- the loop this course lives in: aero sets power, power sets battery mass, battery mass sets aero

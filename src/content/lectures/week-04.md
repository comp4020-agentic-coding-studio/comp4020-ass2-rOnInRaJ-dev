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

A published aerofoil polar is measured at a certain Reynolds number—which depends on the wing's chord, the speed, and the air's viscosity. A polar measured on a full-size wing or in a wind tunnel at airliner cruise is taken at a Reynolds number ten times yours. At your scale, the air sticks to the wing differently. A curve that promises the stall happens at a certain angle of attack will not. You size your wing from a prediction; the stall speed matters because it sets the minimum wing area that gets you off the ground without climbing too slowly. Get the Reynolds number wrong and your wing is suddenly too small, and you learn this by departing at altitude. The requirement `R-03` is that stall speed stays at or under 8.5 m/s.

Aerodynamics sets the power you need: at 12 m/s cruise, the drag and the speed tell you the watts. Power sets the battery mass: more watts mean longer flight times need a heavier pack, or endurance falls. Battery mass sets the aerodynamics back: a heavier aircraft needs a bigger wing to stay below the wing-loading cap of 45 g/dm² and keep the stall speed down. You do not size the wing once, then the battery once, then done. Wing area follows from your all-up mass and your stall-speed target—but the all-up mass includes the battery, which depends on the power the wing's drag demands. In week 5, when you size the battery, this loop tightens. That is why `R-02` and `R-03` are both Aero requirements: they close that corner of the loop for the mass that feeds the power that feeds the mass that feeds the wing.

## Outline

- lift and drag as the ledger sees them: newtons that cost watts
- Reynolds number at our scale, and what it does to a published polar
- wing area from mass and a stall-speed target
- the loop this course lives in: aero sets power, power sets battery mass, battery mass sets aero

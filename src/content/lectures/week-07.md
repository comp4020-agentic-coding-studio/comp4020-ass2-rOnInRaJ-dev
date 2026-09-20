---
title: "The spar carries everything"
description: >-
  Load cases, spar sizing and materials: working out what the wing has to survive and what it costs in grams to survive it
week: 7
tags:
  - "structures"
  - "spar design"
date: 2027-04-05
teachers:
  - bez-toomath
related:
  - sessions/week-07
---

**By the end:** you can choose a spar for a stated limit load and defend the material against the two you rejected.

A spar has two load cases. In one, the wing is pulled down and the spar is in shear — the slice tries to slide up past the slice below. In the other, weight at the tip loads the spar in bending — it curves and the root is in tension and compression. The cross-section needed is different. A spar sized for shear does not resist bending. One sized for bending may slip in shear. You cannot cover both by accident. This week you size your spar, choose a material and section, and identify which load case governs. The wing-structure budget in the ledger is what you have to fit inside. The limit load is the 3.5 g in `R-10`, set at the 1560 g all-up mass.

## Outline

- load cases: where the 3.5 g limit load comes from and what it means
- beams, bending and tip deflection, at the sizes we actually build
- foam, balsa, carbon and epoxy, priced in grams
- CAD II: getting the structure out of the model and into the ledger

## Worked example

A team calculated shear stress in the spar joiner and found it adequate. They did not calculate bending stress. In flight, the wing loaded in bending and the root joint failed. The joiner was right for shear, wrong for bending. The aircraft came down. This is why the lecture names which load case you are sizing for, and the studio asks which case actually governs. A spar sized for the wrong case looks right until loaded in the case that matters. Tip deflection is what the rig measures, not what you design to. Your CAD model predicts deflection from your beam and section. The field measures deflection on a spare club wing—different wing, different number. What matters is whether your prediction came close and what that says about your calculation. In week 8, the spar becomes an interface: mass and stiffness handed over to what bolts on.

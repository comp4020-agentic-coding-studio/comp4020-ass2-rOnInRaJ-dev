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

Shear and bending are not two versions of the same sum done to different precision — they load different fibres in the spar in different directions, and a section that resists one can be nearly blind to the other. A thin-walled tube, for instance, carries shear well around its whole circumference but puts almost all of its bending resistance in the material furthest from the centre; a flat cap spar does the opposite. Choosing a section without first deciding which load case governs is choosing blind. This week's calculation asks you to do both sums, compare them, and only then pick a section — not to pick a section that looks strong and hope one of the two sums comes out in its favour.

## Outline

- load cases: where the 3.5 g limit load comes from and what it means
- beams, bending and tip deflection, at the sizes we actually build
- foam, balsa, carbon and epoxy, priced in grams
- CAD II: getting the structure out of the model and into the ledger

## Worked example

A team calculated shear stress in the spar joiner and found it adequate. They did not calculate bending stress. In flight, the wing loaded in bending and the root joint failed. The joiner was right for shear, wrong for bending. The aircraft came down. This is why the lecture names which load case you are sizing for, and the studio asks which case actually governs. A spar sized for the wrong case looks right until loaded in the case that matters — the joiner in this story sat on a bench, took a hand-load test in shear, and passed, because nobody applied a bending moment to it before it flew. Tip deflection is what the rig measures, not what you design to. Your CAD model predicts deflection from your beam and section. The field measures deflection on a spare club wing — different wing, different number. What matters is whether your prediction came close and what that says about your calculation, not whether the two numbers match to the millimetre; a wing built from different stock with a different span will not deflect by the same amount even under an identical load, and a large gap between prediction and measurement is a reason to check the beam model, not the club's wing.

:::figure{kind="structures" img="lectures/week-07-a.jpg"}
A cross-section cutaway of a spar at the wing root, drawn twice side by side: on the left, arrows showing shear flow running around the section's perimeter under a downward load; on the right, the same section shaded to show compression on the top surface and tension on the bottom surface under a tip-loaded bending moment, with the neutral axis marked as a dashed line through the centre.
:::

:::figure{kind="structures" img="lectures/week-07-b.jpg"}
A two-panel diagram of the joiner failure story: the left panel shows the joiner clamped in a bench vice passing a hand-load shear test, labelled "shear: pass"; the right panel shows the same joiner in flight failing at the wing root under a bending moment, labelled "bending: never tested," with a large cross drawn over the right panel.
:::

The wing-structure line in the ledger — the 310 g you have to fit a material and section inside — is still an estimate everywhere in the site except where a team's own CAD II model has replaced it. That is what this week's second CAD pass does: it takes the section you chose, applies real material densities, and returns a number that either confirms the estimate or corrects it, and from that point the ledger line reads as sourced from a model, not carried forward from a guess made in week 2. In week 8, the spar becomes an interface: mass and stiffness handed over to what bolts on.

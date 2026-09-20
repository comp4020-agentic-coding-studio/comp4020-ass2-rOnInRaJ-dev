---
title: "Loading the wing"
description: >-
  A spare club wing goes on the load rig, and the beam calculation you did meets the deflection you measure
week: 7
tags:
  - "load testing"
  - "structures"
date: 2027-04-05
teachers:
  - nadia-strout
spec:
  - your spar is sized for a stated load case, and R-10 names the number
  - predicted deflection and measured deflection are both logged
  - the structural mass in your ledger comes from the CAD model, not from a guess
related:
  - lectures/week-07
---

This week works on `R-10`.

## In the studio

**Workshop hours.** Each team sizes a spar for the 3.5 g limit load named in `R-10`. You have 310 g in the ledger's wing-structure budget — that is your spending limit. You choose a material (foam, balsa, carbon), run the shear and bending calculations against your own wing's geometry, pick a section that fits inside the mass budget, and defend it over the other candidates. This is the design decision of the week. Bring the two numbers to the bench, not just the section drawing: the shear stress at the root and the bending stress at the root, each against the material's rated strength, with the margin on each written down next to it. A section that clears both calculations with ten per cent to spare is a different decision from one that clears both by one per cent, even though both pass, and only the written margin tells the difference apart later.

Before you cut the spar, run the check every team runs: which load case did you size for, and which one actually governs on your wing? Shear or bending? Does your section resist both, or just one? A spar sized for shear when bending governs will fail at the root. The failure is sudden — this is the shape of failure story 7, a spar that passed its shear check and was never checked in bending, and the joint let go without warning in flight. Make sure you know which case matters for your design before the material goes to the saw, because a saw cut is not a step you get to reconsider afterward.

**Lab hours.** From your own beam calculation and the section you chose, predict the tip deflection at the 3.5 g limit load. Write the prediction in the ledger before the field slot — including the assumptions behind it: the span you modelled, the material stiffness you used, and whether you treated the spar as a simple cantilever or accounted for the taper in your own wing. An undocumented prediction is hard to learn from even when it turns out to be right.

:::figure{kind="structures" img="sessions/week-07.jpg"}
A side view of a tapered wing spar as a cantilever beam fixed at the root, with a downward load arrow at the tip, a dashed curve showing the beam deflecting under that load, and a labelled dimension line from the undeflected tip to the deflected tip marked "predicted tip deflection."
:::

The field's test runs on a spare club wing, not your wing — different mass, different geometry, different stiffness. The measured deflection will not match your prediction. That is not a failure in your calculation, it is the design of the week itself. What matters is whether your prediction came close and what that tells you about the method: a beam model that consistently over-predicts deflection on a wing it was never built for is a model worth trusting cautiously on your own wing too, and one that is wildly off in either direction is worth re-checking before you rely on it for anything else. The structural mass that your CAD model returns this week is what replaces the estimate in the ledger's wing-structure line: a measured or sourced value now, not a guess carried forward from week 2.

Keep the workshop-hours numbers and the lab-hours numbers on the same sheet: material, section, shear margin, bending margin, predicted deflection, and the structural mass from the model, one row per iteration if you change the design more than once. A team that revises its spar twice and only keeps the final row cannot say what the revision actually bought — a lighter spar with a smaller margin, or a heavier one with a larger one — and that comparison is exactly what the design review in the coming weeks will ask to see.

## At the field

Your team books its own slot for this week — see [Field days](/field-days/) for
the rules and the windows. Every team's slot carries the same objective.

- **Field objective:** Load a spare club wing on the clubhouse load rig to its limit and log tip deflection against applied weight.
- **Owner:** Structures
- **Predict:** Predict tip deflection at limit load from your beam calculation before anything is hung on the wing.
- **Weather fallback:** The load rig is indoors at the clubhouse. Nothing weather-related stops this one, which makes it the slot to book against a bad forecast.
- **Safety:** Nobody stands under a loaded wing. Deflection is read from the side against a scale, never from underneath.

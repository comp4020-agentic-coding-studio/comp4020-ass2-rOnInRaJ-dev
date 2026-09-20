---
title: "Proving it without flying it"
description: >-
  Test readiness: the verification matrix, and the six requirements you can close on the ground before you risk the aircraft
week: 10
tags:
  - "bench verification"
  - "avionics and control"
date: 2027-04-26
teachers:
  - bez-toomath
related:
  - sessions/week-10
---

**By the end:** you can build a verification matrix and say which of your requirements can be closed without ever leaving the ground.

A verification matrix has four columns: the requirement ID, the method you use to close it, the value you predicted beforehand, and the value you measured. The matrix is your evidence that the aircraft meets its specification without leaving the ground. A prediction that missed, with the reason worked out afterwards, scores better here than a measurement with no prediction beside it. Your prediction shows you understood the requirement before you built; a measurement alone shows only that you can turn a dial.

The matrix itself is not exotic — a spreadsheet with four columns, one row per requirement, printed and taped above the bench where the corresponding test runs. A blank predicted column next to a filled measured column is worse than no matrix at all, because it tells the marker the test happened after the design was already committed to whatever number came out. Fill the predicted column before you touch the rig, because a value written in after the fact is not a prediction, it is a guess dressed as one. The matrix is cumulative, too — it is the same document the team has kept since week 5's preliminary design review, with new rows and new measured columns added as each requirement closes.

This course closes six requirements on the bench: `R-01` — all-up mass — goes on a scale; `R-04` — static thrust at least 0.70 of weight — goes on a thrust stand; `R-10` — spar limit load — goes on a sandbag rig. `R-11` — centre of gravity — goes on two knife edges; `R-12` — radio range and failsafe — goes on a walked range check and a deliberate transmitter-off test; `R-13` — control repeatability — goes on a protractor and fifty cycles. The other eight requirements need the air.

:::figure{kind="general"}
A verification matrix schematic: a four-column table — requirement ID, method, predicted value, measured value — with six example rows, one for each of `R-01`, `R-04`, `R-10`, `R-11`, `R-12` and `R-13`, each row's method column naming its bench tool: scale, thrust stand, sandbag rig, knife edges, range check, protractor rig.
:::

:::figure{kind="electronics"}
A bench-rig lineup: a thrust stand with a motor and propeller mounted ahead of a load cell reading peak thrust, a cantilevered sandbag rig with a dial gauge at the tip, two knife edges with an aircraft balanced across them, and a protractor rig clamped to a control surface with a cycle counter — four stations side by side, each with a small predicted-value card taped beside it, filled in before the test ran.
:::

The six stations sit around the lab on a rotation, and a team rarely closes all six in one sitting. The thrust stand is a load cell bolted to a rail with the motor and propeller mounted ahead of it, wired to a meter that holds peak thrust on the display. The sandbag rig is a cantilevered arm clamped at the root with a bucket that fills by measured increments, a dial gauge reading tip deflection before the load goes on and again after it comes off. The knife edges are two hardened wedges set level on the bench; the aircraft balances across both, nose to tail, until it sits without tipping either way, and that point gets marked and measured against the datum. The protractor rig clamps to a control surface with a cycle counter wired to the servo, running it through fifty full-deflection cycles while the protractor reads the angle at each end of travel. None of these rigs is complicated. What makes the week long is that several requirements each need their own booked slot, their own predicted number written down first, and their own line filled in on the matrix afterwards — and a team that books every rig on the same afternoon usually finds it has time to run two of them properly.

The test readiness review is a go/no-go gate distinct from the baseline freeze in week 9. That freeze locks the mass, electrical diagram, and control gains for flight; the test readiness review locks something different — whether the aircraft can be flown safely. The aircraft does not leave the ground in week 11 without it. You will have closed six requirements on the bench by then, and the matrix is your evidence.

## Outline

- the verification matrix: requirement, method, predicted, measured
- what a thrust stand, a scale, two knife edges and a protractor can close
- range checks and failsafe behaviour, and testing them deliberately
- test readiness review: are we allowed to fly this yet

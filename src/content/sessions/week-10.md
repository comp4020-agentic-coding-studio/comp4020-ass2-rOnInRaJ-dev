---
title: "Range and failsafe"
description: >-
  Test readiness review, then the range check and a deliberate link-loss test on your own airframe
week: 10
tags:
  - "failsafe"
  - "radio range"
date: 2027-04-26
teachers:
  - glenys-arkwright
spec:
  - your verification matrix covers every one of your requirements
  - R-04, R-10, R-11, R-12 and R-13 are closed on the ground, with logs
  - R-01 is re-confirmed at flight-ready mass, because it will have crept
related:
  - lectures/week-10
---

This week works on `R-01`, `R-04`, `R-10`, `R-11`, `R-12`, `R-13`.

## In the studio

**Workshop hours:** The failsafe behaviour is a parameter your team sets deliberately on the bench, with the propeller off, before it is ever tested in the air. Your transmitter has two options: hold the last stick position it received, or circle and descend. `R-12` requires the second. Setting it means opening the radio's own menu, not the flight controller's — the timeout and the fallback behaviour live on the transmitter side, and a team that configures it only in the flight controller's software has configured half a system. Switch the transmitter off, watch what the control surfaces do without a signal, and switch it back on. If the ailerons freeze exactly where they were at the moment of loss, the failsafe is set to hold last stick position — the option `R-12` does not allow. Reset it, run the bench test again, and confirm the surfaces move toward the circle-and-descend configuration instead. A team that leaves the failsafe at its default discovers what it does at altitude, in front of the instructor, rather than beforehand — and that discovery is vastly more expensive than testing it here.

:::figure{kind="electronics"}
A failsafe bench test schematic: the transmitter and receiver shown with the radio link between them, a propeller-off aircraft on the bench, and two labelled outcomes at the point of signal loss — control surfaces frozen in place (not allowed) versus the flight controller routed into a pre-set circle-and-descend command (required by `R-12`).
:::

**Lab hours:** Book the thrust stand and log `R-04` — predict static thrust, measure it, compare. Book the sandbag rig and log `R-10` — spar limit load predicted, then measured under controlled loading. Book the knife edges and log `R-11` — place the aircraft on two edges, find the balance point, record the centre of gravity. Book the protractor rig and run fifty control cycles for `R-13` — move each surface full deflection back and forth, log the repeatability. Each rig gets booked in a slot, and each requirement gets logged the same way: predicted value written on the sheet before the test starts, rig run, measured value written beside it, sheet signed by whoever ran it. On the thrust stand, the motor spins up to full throttle on a fresh pack with the flight propeller fitted — not a spare prop of a similar size, the actual one — because a different propeller changes the number `R-04` is supposed to be closing. On the sandbag rig, the load goes on in stages, with the dial gauge read and recorded at each stage, not just at the top load and the release. On the knife edges, the aircraft goes on fully dressed, exactly as it will fly, because a lighter or incomplete aircraft balances at a different point than the one that takes off. On the protractor rig, the deflection gets read and logged at intervals through the fifty cycles, not only at the first and the last, so a surface that repeats badly partway through does not get missed because the two endpoints happened to agree. `R-01` is re-confirmed at flight-ready mass here; expect it to have crept since week 9 as batteries, finish, and fasteners accumulate — every pack, connector and finished surface goes back onto the scale, and the number is expected to be higher than week 9's, not the same.

## At the field

Your team books its own slot for this week — see [Field days](/field-days/) for
the rules and the windows. Every team's slot carries the same objective.

- **Field objective:** Run a full ground range check and a deliberate transmitter-off failsafe test on your own airframe, then repeat it at altitude with the instructor flying.
- **Owner:** Avionics & Control
- **Predict:** Predict the range at which the link starts to degrade, and predict exactly what your failsafe will do, before either test.
- **Weather fallback:** A range check needs a dry aircraft and a quiet frequency. If the field is busy the slot moves to the far paddock, with the club's permission.
- **Safety:** The failsafe test at altitude is flown by the chief flying instructor, over the far field, with the flight line cleared first.

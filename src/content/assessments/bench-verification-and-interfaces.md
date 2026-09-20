---
title: Bench verification and interface pack
description: >-
  Everything you can prove on a bench before you risk the aircraft: thrust,
  energy, centre of gravity, failsafe, and what each subsystem hands the next
week: 10
due: 2027-04-30T17:00:00+10:00
weight: 10
cohort: group
marking:
  mode: weighted
  criteria:
    - name: Verification evidence
      weight: 40
    - name: Interface control
      weight: 30
    - name: Systems engineering
      weight: 30
spec:
  - every bench-verifiable requirement has a measurement, a method and a predicted value beside it
  - the interface document states what each subsystem hands its neighbours in mass, volts, watts and data
  - a failsafe test is logged, with the aircraft's actual behaviour on link loss
related:
  - sessions/week-10
  - lectures/week-10
---

## The brief

> Find out on the bench, where it costs you an afternoon, rather than in the
> air, where it costs you the aircraft.

Six of the fourteen course requirements can be closed without flying. Thrust
against weight is a thrust stand and a scale. Usable energy is a logged
discharge. Centre of gravity is two knife edges. Link range and failsafe are a
walk across the field and a deliberate transmitter switch-off. Control
repeatability is a protractor and fifty cycles.

The interface pack is the other half. Every subsystem hands its neighbours
something — the battery hands the motor volts and the airframe grams, the
flight controller hands the servos a signal and the pack a current draw. Write
those handovers down. Most failures at the fly-off are interface failures, and
interface failures are the ones nobody owns.

## What you submit

- the verification matrix: requirement, method, predicted value, measured value
- raw logs for every measurement, not just the summary
- the interface control document
- the failsafe test record, including what the aircraft actually did

## How it is marked

The criterion table below applies, including the standing
systems-engineering row worth thirty. A prediction that missed, with the reason
worked out afterwards, scores better here than a measurement with no prediction
beside it.

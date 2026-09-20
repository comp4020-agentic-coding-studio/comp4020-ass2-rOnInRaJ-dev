---
title: "The mission leg"
description: >-
  Timing a club trainer around the circuit and turning the number into the mission your team commits to
week: 2
tags:
  - "mission profile"
  - "flight test"
date: 2027-03-01
teachers:
  - glenys-arkwright
spec:
  - your mission is one sentence, and it names a distance and a payload
  - your requirement set is numbered and every entry has an owner
  - your ledger exists, with R-01 and R-08 written into it as constraints
related:
  - lectures/week-02
---

This week works on `R-01`, `R-07`, `R-08`.

## In the studio

In your workshop hours, you turn the number from the field into one sentence. You bring the stopwatch data and the circuit length, and you write: "the aircraft shall complete a mission leg of [distance] metres while carrying a [payload] gram payload." That sentence goes into `requirements.ts` with an owner (your flight ops subsystem) before the field trip is over. You also write `R-01` into the ledger as the mass cap it names. No adjective stands in for a number you have not measured yet. Your team does not commit to a distance until the stopwatch says so.

In lab hours, you open the ledger file. Every line is an estimate with a method—the wing structure mass is estimated from a published glider design scaled to your wing area, sourced from month 3 of a design report. Every estimate sits on paper. You write them down. Ask the lab technician to weigh a shelf part—a servo, a battery connector, a sheet of carbon—and enter that weight as a sourced reference figure. The 250 g payload is already in the ledger as a constraint from `R-08`: that is the only payload mass your configuration allows. You do not pick the mass budget's line items; you estimate them, source them where you can, and live with what they add to.

## At the field

Your team books its own slot for this week — see [Field days](/field-days/) for
the rules and the windows. Every team's slot carries the same objective.

- **Field objective:** Time three circuits of a club trainer and turn the average into the length of mission leg your team will commit to.
- **Owner:** Operations
- **Predict:** Predict the circuit time from the trainer's cruise speed and the circuit dimensions before you start the stopwatch.
- **Weather fallback:** Rain: time the circuits off the club's logged videos instead, and write in the log that you are trusting somebody else's camera.
- **Safety:** Stand behind the flight line. Holding a stopwatch is not a reason to walk forward for a better view.

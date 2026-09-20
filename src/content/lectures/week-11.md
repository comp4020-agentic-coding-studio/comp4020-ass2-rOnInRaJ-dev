---
title: "Predicted against logged"
description: >-
  Flight testing as an experiment: planning a flight that answers one question, and reading the log afterwards
week: 11
tags:
  - "flight test"
  - "data logging"
date: 2027-05-03
teachers:
  - bez-toomath
related:
  - sessions/week-11
---

**By the end:** you can plan a flight test that answers exactly one question, and read the log it produces.

A flight with two objectives is a flight with no answers. Each slot answers one question — what is stall speed, what is cruise power, how long does the endurance run actually hold — and the prediction goes down in writing before the propeller turns, not after the log lands on the bench. Two questions asked in the same flight means noise on top of noise, because you cannot isolate which change caused which outcome.

Your log needs to show the numbers that answer the question. The course design point predicts a stall speed of 7.7 m/s against the `R-03` cap of 8.5 m/s, a cruise power of 60 W against the `R-05` cap of 70 W, and an endurance of around twenty-six minutes against the `R-07` floor of twenty minutes. These are design-point numbers, and your own airframe will differ — possibly a lot. Minimum logging is pack voltage and current, airspeed, and time. Log rate matters as much as what you log, because an under-sampled trace misses the transient that answers your one question — you need to see the current spike when the motor starts, and the step where the servo takes the elevator in a stall.

A controller tuned on a club trainer does not transfer to your own airframe. The trainer has different mass, different control surfaces, different behaviour. Tune on your own aircraft, on the bench if you can, or in the air over several shallow flights. The flight readiness review is the last formal gate. Nothing is flown at the fly-off in week 12 without it.

## Outline

- one question per flight, and why two questions give you neither answer
- instrumentation: what to log, at what rate, and what you will regret not logging
- tuning the controller on your own airframe, not on a club trainer
- flight readiness review: the last gate before the fly-off

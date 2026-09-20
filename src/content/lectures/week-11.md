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

A test card for one flight names exactly one thing: the manoeuvre, the one number expected, and the conditions it needs — wind under a stated limit, full charge, clean configuration. "Fly the plane and see how it goes" is not a test card; it is a flight with no card. If today's slot is stall speed, the flight profile is a slow, deliberate reduction in airspeed at height, hands ready on the stick, and nothing else asked of that flight — no cruise run stacked on top, no range check squeezed in before landing because the battery still has charge left. A control input made to answer a second question changes the trace that would have answered the first. The card gets filled in before the aircraft leaves the workshop, not on the flight line with the motor already idling.

Your log needs to show the numbers that answer the question. The course design point predicts a stall speed of 7.7 m/s against the `R-03` cap of 8.5 m/s, a cruise power of 60 W against the `R-05` cap of 70 W, and an endurance of around twenty-six minutes against the `R-07` floor of twenty minutes. These are design-point numbers, and your own airframe will differ — possibly a lot. Minimum logging is pack voltage and current, airspeed, and time. Log rate matters as much as what you log, because an under-sampled trace misses the transient that answers your one question — you need to see the current spike when the motor starts, and the step where the servo takes the elevator in a stall.

:::figure{kind="aero" img="lectures/week-11-a.jpg"}
A logged flight trace: airspeed, pack current and elevator deflection plotted against time on three stacked axes, with a callout marking the stall departure point where the airspeed curve flattens and the elevator trace shows the recovery input, and a second callout on the current trace marking the motor start-up spike.
:::

:::figure{kind="general" img="lectures/week-11-b.jpg"}
A test card clipped to a kneeboard: one manoeuvre named at the top, one predicted number written into a boxed field, and a short list of required conditions — wind under a stated limit, full charge, clean configuration — each with a tick box, all filled in above a propeller icon at the bottom that is greyed out and not yet turning.
:::

A log that only records a single number at the end of the flight throws away the part that answers the question. Stall speed is not one number; it is the airspeed trace in the seconds before departure, and the point where lift stops following the stick input is the departure, not the lowest airspeed reached afterward while the nose drops. Cruise power is not a single reading either — it is current and voltage sampled through the entire straight leg, because a single snapshot can land on a gust and get called representative.

A controller tuned on a club trainer does not transfer to your own airframe. The trainer flies with more elevator throw for its own stability margin and a lower wing loading than your own airframe carries, so a control gain that feels calm on the trainer can feel twitchy, or marginal, on an aircraft that is heavier and less forgiving. Tune on your own aircraft, on the bench if you can, or in the air over several shallow flights, not on the aircraft that happens to be convenient that afternoon. The flight readiness review is the last formal gate, and it checks the test card and the tuning history together, not either alone — a controller that has never been tuned in the air is not ready even if every bench number looks correct. Nothing is flown at the fly-off in week 12 without it.

## Outline

- one question per flight, and why two questions give you neither answer
- instrumentation: what to log, at what rate, and what you will regret not logging
- tuning the controller on your own airframe, not on a club trainer
- flight readiness review: the last gate before the fly-off

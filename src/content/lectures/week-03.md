---
title: "Decomposition, and choosing a configuration"
description: >-
  Breaking the mission into functions, allocating each to a subsystem, and running the configuration trade that decides what you build
week: 3
tags:
  - "configuration trade"
  - "systems engineering"
date: 2027-03-08
teachers:
  - halcyon-pree
related:
  - sessions/week-03
---

**By the end:** you can score a configuration trade against criteria you weighted before you knew the scores.

A team had already chosen a fixed-wing aircraft. When they ran their configuration trade study afterwards — setting up the criteria, weighting each one, and scoring the three options against the ledger — something remarkable happened: the weights agreed with what they had already built. Every criterion that favoured a fixed-wing scored high, every criterion that favoured a quad or a VTOL scored low, and nobody on the team noticed the coincidence until somebody outside the team asked why the weights matched the decision so neatly. The trade study is only trustworthy when the criteria go in first — before you know which configuration wins, before you have built a single mockup, before you have opinions about which one looks like it will fly better. Once you have named the winners and losers of what matters — endurance weighted above payload volume, say, or the reverse — the scoring afterwards is mechanical: you plug in numbers and read off a result you did not get to argue with. If the weights change after you see the scores, the score was never what decided it. The decision was made earlier, informally, by whoever argued loudest in the first team meeting, and the trade study was written afterwards to make that decision look like engineering.

Functional decomposition is the other half of this week, and it comes before the trade study, not after. Your mission is a list of things the aircraft must do: fly a distance, carry the payload, land safely, transmit sensor data if your own mission needs it. Each of those functions belongs to exactly one of the five subsystems. Aero handles flight physics. Structures handles loads and mass. Propulsion & Power handles engine, battery and fuel. Avionics & Control handles sensors, decisions and commands to the servos. Operations handles the field, the pilots and the rules they follow. Every function goes to exactly one owner, so every subsystem knows what it answers for and nothing falls into the gap between two subsystems who each assumed the other one had it — a transmit-sensor-data function that nobody claims is not a small problem later; it is the reason two subsystems each show up to the review holding half a working radio path and no one holding the other half. Once you have allocated the mission into those five subsystems, the trade study scores each of the three configurations — fixed-wing against quad against VTOL — against the same set of weighted criteria. The wing area, the power-to-weight ratio, the time aloft, the disc loading: all of them matter, and all of them matter differently depending on what your own mission actually asks the aircraft to do. The three configurations in the outline are exactly the kind of decision this catches, because a fixed-wing chosen because someone already had one in the shed looks, on paper, exactly like a fixed-wing chosen because the trade study said so. The one number that is the same for all three configurations, regardless of which one wins, is the 1800 g cap — that is the constraint you cannot trade away no matter how the weights fall.

:::figure{kind="drone"}
Three side-by-side silhouettes — a fixed-wing, a quadcopter and a tilt-rotor VTOL — each with the same four criteria listed beside it (endurance, payload volume, disc loading, power-to-weight) and an identical weight percentage next to each criterion across all three silhouettes, with a score box under each criterion that differs between them.
:::

:::figure{kind="general"}
A functional decomposition diagram: five subsystem boxes — Aero, Structures, Propulsion & Power, Avionics & Control, Operations — each with a short list of functions posted to it from a floating mission list above, one function ("transmit sensor data") shown drifting unclaimed between two boxes with a red circle drawn around the gap between them.
:::

Decomposition and the trade study are bookkeeping, not philosophy, and the review at the end of this week checks exactly that: that every function has one owner, and that the weights were dated before the scores were. Neither check tells you whether fixed-wing was the right answer for your mission. Both checks tell you whether you can prove you decided it the way you are claiming you did.

## Outline

- functional decomposition: what the aircraft must do, before what it is
- allocating each function to exactly one subsystem
- the trade study, and why the weights go in first
- fixed-wing against quad against VTOL, on your own mission's numbers

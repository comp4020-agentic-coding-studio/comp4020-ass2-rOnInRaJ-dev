---
title: "Decomposition, and choosing a configuration"
description: >-
  Breaking the mission into functions, allocating each to a subsystem, and running the configuration trade that decides what you build
week: 3
date: 2027-03-08
teachers:
  - halcyon-pree
related:
  - sessions/week-03
---

**By the end:** you can score a configuration trade against criteria you weighted before you knew the scores.

A team had already chosen a fixed-wing aircraft. When they ran their configuration trade study, setting up the criteria, weighting each one, and scoring the three options against the ledger, something remarkable happened: the weights agreed with what they had already built. The outcome was predetermined. The trade study is only trustworthy when the criteria go in first — before you know which configuration wins, before you have built a single mockup, before you have opinions. Once you have named the winners and losers of what matters, the scoring is mechanical. If the weights change after you see the scores, the score was not what decided it.

Functional decomposition is the other half. Your mission is a list of things the aircraft must do: fly distance, carry the payload, land safely, transmit sensor data. Each of those functions belongs to exactly one of the five subsystems. Aero handles flight physics. Structures handles loads and mass. Propulsion & Power handles engine, battery and fuel. Avionics & Control handles sensors, decisions and commands to the servos. Operations handles the field, the pilots and the rules they follow. Every function goes to exactly one owner, so every subsystem knows what it answers for. Once you have allocated the mission into those five subsystems, the trade study scores each of the three configurations — fixed-wing against quad against VTOL — against the same set of weighted criteria. The wing area, the power-to-weight ratio, the time aloft, the disc loading: all of them matter. The only number that is the same for all three is the 1800 g cap, and that is the one constraint you cannot trade away.

## Outline

- functional decomposition: what the aircraft must do, before what it is
- allocating each function to exactly one subsystem
- the trade study, and why the weights go in first
- fixed-wing against quad against VTOL, on your own mission's numbers

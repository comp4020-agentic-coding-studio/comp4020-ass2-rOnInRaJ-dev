---
title: "What the aircraft is for"
description: >-
  Turning a vague mission into numbered requirements that can actually fail, and opening the mass ledger
week: 2
tags:
  - "requirements"
  - "mission definition"
date: 2027-03-01
teachers:
  - halcyon-pree
related:
  - sessions/week-02
---

**By the end:** you can turn a sentence about what your aircraft is for into requirements somebody else could fail you against.

A mission statement can sound solid in a room and vanish under questioning. "The aircraft will fly a decent distance" — everyone nodded at that in week 2 until someone asked for the number in metres and three teammates gave three different answers. One meant the length of the strip, one meant as far as the trainer could get on one battery, one meant far enough to be interesting. None of the three is wrong exactly — they are just not the same sentence, and a team that has not noticed that is not one sentence away from flying, it is three sentences away from arguing about whose aircraft to build. That is the exact moment a wish becomes a requirement. A requirement is the sentence with a threshold in it: "the mission leg is 240 m measured as the distance from launch point to furthest point of the circuit." That number came from your team's stopwatch on the trainer, not from optimism, and once it is written down nobody on the team gets to have a different opinion about how far "decent" was. Wishes fail silently, usually months later, when the finished aircraft does something nobody agreed it would. Requirements fail loudly, on the day someone checks them, which is a day the team chose.

A requirement has three parts: a threshold (the actual number), an owner (the subsystem that makes it true), and a verification method (how you prove it works). `R-01`, the aircraft shall weigh no more than 1800 g, has all three: the threshold is 1800 g, the owner is Structures, and you verify it by weighing the aircraft flight-ready on the lab scale — not the wing alone, not the airframe without a battery, the whole aircraft, ready to fly, on the scale, on the day a review asks for it. Leave any of the three parts out and the sentence stops being testable. "The aircraft should be light" has no threshold, so nobody can say when it has failed. A number with no owner attached has nobody who has to answer for it when it doesn't hold. This mirrors the shape of every entry in the mass ledger, where you open this week. Every line is an estimate with a method behind it — not yet a measurement, but not a guess either: "estimated from a comparable design, scaled to our wing area" is a method; "about a kilogram, probably" is not. The ledger does not tell you how much the wing weighs; it tells you how you will find out, and it makes you write the method down before anyone weighs anything.

:::figure{kind="general"}
An annotated sentence diagram: the words "the aircraft shall weigh no more than 1800 g" broken into three labelled callouts — threshold pointing at "1800 g", owner pointing at "Structures", verification pointing at "weighed flight-ready on the lab scale" — beside a crossed-out speech bubble reading "the aircraft should be light" with no callouts attached to it at all.
:::

:::figure{kind="general"}
A ledger row close-up: a single line item reading "wing structure," with three tags lined up beside it — estimated, sourced, measured — only the estimated tag filled in and the other two shown as empty outlines waiting their turn, and a small magnifying glass hovering over the method column reading "estimated from a comparable design, scaled to our wing area."
:::

None of this is bookkeeping for its own sake. A requirement without a verification method is a promise nobody has to keep, and a mass ledger without a method per line is a spreadsheet of hopes with numbers attached. The three parts exist so a requirement can fail in public, at a review, in front of the whole team, rather than fail quietly in March when the finished aircraft is over a cap nobody wrote down properly. The course requirement set, `R-01` to `R-14`, is a floor: it sets the mass cap, the power budget and the disposal rule. It is not your aircraft, and it is not your mission — nobody on the course requirement set has flown your configuration or timed your circuit. Your requirements are built on top of that floor, numbered by your own team, and verified in the weeks that follow, starting with the review at the end of week 3. The floor does not move for you, and it does not do your work for you either; it only tells you the lowest height your own work has to clear.

## Outline

- the difference between a wish and a requirement, which is whether it can fail
- writing a requirement: the threshold, the owner, and how it gets verified
- the course requirement set `R-01` to `R-14`, and why it is a floor and not your requirements
- opening the ledger: every line an estimate, every estimate with a method

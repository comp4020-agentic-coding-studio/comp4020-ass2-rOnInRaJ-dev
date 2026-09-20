---
title: "The battery sets the mass"
description: >-
  Power, packs, radio and the flight controller — taught in week 5 on purpose, because everything downstream is waiting on these numbers
week: 5
date: 2027-03-22
teachers:
  - bez-toomath
slides: /decks/week-05/
related:
  - sessions/week-05
---

**By the end:** you can size a pack from a cruise power estimate and say how many minutes it buys you.

This week's slides take you through cruise power, pack sizing, radio links and flight control — things usually taught in week 9, taught here in week 5 because your wing is already waiting on them. The deck covers the full derivation: 60 W cruise power, a 32.6 Wh pack with 26 Wh usable, the BEC warning. This page does not repeat that. Instead: why this week exists. Your wing area demands a mass target of 1560 g all-up. The pack is roughly a fifth of that — 230 g. You cannot size a pack without cruise power, cannot know cruise power without that mass, cannot finish your wing without knowing what the aircraft weighs. So the loop runs twice more: once here with bench numbers, and again in week 11 with a flight log. This is why power is week 5, not week 9. The preliminary design review closes `R-04` (1100 g static thrust), `R-06` (26 Wh usable) and `R-07` (twenty minutes), and the studio is where estimates become bench numbers.

## Outline

- cruise power from drag, speed and a drive efficiency you can defend
- pack sizing: cells, capacity, usable energy above the cut-off
- radio links, failsafes, and what the flight controller is actually doing
- why this lecture is in week 5 and not week 9

The avionics draw is steady at 8 W, but the transient peak when all four servos move together is higher — enough to sag the regulator below dropout and reboot the flight controller. The studio's bench discharge logs that voltage trace, so the spike is visible before the aircraft flies unpowered. Week 6 sizes the tail and will need to know what your aircraft weighs.

---
title: "The battery sets the mass"
description: >-
  Power, packs, radio and the flight controller — taught in week 5 on purpose, because everything downstream is waiting on these numbers
week: 5
tags:
  - "propulsion and power"
  - "battery sizing"
date: 2027-03-22
teachers:
  - bez-toomath
slides: /decks/week-05/
related:
  - sessions/week-05
---

**By the end:** you can size a pack from a cruise power estimate and say how many minutes it buys you.

This week's slides take you through cruise power, pack sizing, radio links and flight control — things usually taught in week 9, taught here in week 5 because your wing is already waiting on them. The deck covers the full derivation: 60 W cruise power, a 32.6 Wh pack with 26 Wh usable, the BEC warning. This page does not repeat that. Instead: why this week exists. Your wing area demands a mass target of 1560 g all-up. The pack is roughly a fifth of that — 230 g. You cannot size a pack without cruise power, cannot know cruise power without that mass, cannot finish your wing without knowing what the aircraft weighs. So the loop runs twice more: once here with bench numbers, and again in week 11 with a flight log. This is why power is week 5, not week 9. The preliminary design review closes `R-04` (1100 g static thrust), `R-06` (26 Wh usable) and `R-07` (twenty minutes), and the studio is where estimates become bench numbers.

A preliminary design review is not a presentation. It is one page per subsystem, each with a number, a method, and a sign-off column left blank until a bench or a field slot fills it in. Propulsion & Power brings 1100 g of predicted static thrust and 26 Wh of predicted usable energy to this review, and neither has a measurement behind it yet — that gap is not a defect in the review, it is the reason the review sits in week 5 and not week 11. What the review does check is whether a number has a method attached to it: a static thrust figure with no test plan behind it does not pass on the promise that testing will happen eventually. The pack-energy line is checked against the mass line before it is checked against anything else, because a heavier pack raises the mass the wing has to loft, which raises the wing area, which raises the number every other subsystem was designed around. Move the pack-energy line after this week and the loop above it does not get patched, it gets re-run.

:::figure{kind="general" img="lectures/week-05-a.jpg"}
A preliminary design review sheet mock-up: one row per subsystem, Propulsion & Power's row showing 1100 g predicted static thrust and 26 Wh predicted usable energy in the number column, a short method note beside each, and a sign-off column ruled but left blank.
:::

## Outline

- cruise power from drag, speed and a drive efficiency you can defend
- pack sizing: cells, capacity, usable energy above the cut-off
- radio links, failsafes, and what the flight controller is actually doing
- why this lecture is in week 5 and not week 9

The avionics draw is steady at 8 W, but the transient peak when four servos move together is higher — enough to sag the regulator below dropout and reboot the flight controller. That is failure story 5, and it is worth being precise about what "reboots" means here: the flight controller does not fail gently, it stops commanding surfaces mid-command and the aircraft carries on doing whatever the surfaces were last told to do, unpowered and uncorrected. An 8 W average tells you nothing about a spike lasting a fraction of a second, and neither does the 60 W cruise figure the deck derives — both numbers are averages, and the failure lives in exactly the part an average erases.

:::figure{kind="electronics" img="lectures/week-05-b.jpg"}
A line graph of pack voltage against time during a bench discharge: a flat trace at rest, a sharp downward spike the instant four servo channels move together, a dashed horizontal line marking the regulator's dropout threshold sitting just above the spike's trough, and a callout at the trough reading "flight controller resets here."
:::

The studio's bench discharge logs that voltage trace against time, so the spike is visible on a screen before it is invisible in the air — a dropout on a bench rig gets written down and fixed with a bigger regulator or a fatter wire; the same dropout at altitude gets written down as wreckage. Week 6 sizes the tail and will need to know what your aircraft weighs — a number this week's bench rig fixes, not this week's slides.

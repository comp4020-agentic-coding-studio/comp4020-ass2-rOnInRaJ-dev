---
title: "The aircraft as a system"
description: >-
  What a drone is once you stop looking at it as an object: five subsystems, one mass budget, and a set of handovers between them
week: 1
tags:
  - "systems thinking"
  - "team roles"
date: 2027-02-22
teachers:
  - halcyon-pree
related:
  - sessions/week-01
---

**By the end:** you can draw your own aircraft as five subsystems and say what each one hands the others.

A system is something that hands numbers to something else. On the week 1 flight, you are part of that system: your hand moves the stick, the transmitter sends a signal to the aircraft, the aircraft responds, your eye sees the change and your hand moves again. That loop has a lag in it. Over-correct and the aircraft oscillates — a small waggle becomes a bigger one within two or three corrections, because your correction lands after the aircraft has already moved on to something else. The instructor on the buddy box sees the second waggle coming before it happens and takes the stick back. Nothing broke. The aircraft, the engine, the radio link, the servos all did exactly what they were built to do. What failed was the loop between your eye, your hand and the aircraft's response, and it failed because the loop was too slow to correct itself. This is what "system" means here, before it means anything about wings or batteries: the thing between the eye and the hand is not just the aircraft, it is a system that includes you, and a system can fail even when every part of it is working.

That distinction matters because the rest of this course asks you to design a system, not an object. A wing on a bench is an object. A wing that has to carry a stated mass at a stated speed without exceeding a stated span is part of a system, because its dimensions are answers to numbers some other part of the aircraft handed it. Your aircraft is five subsystems, and each one both asks for numbers and hands numbers on. Aero designs the wing and tail, and whatever wing area it settles on hands Propulsion & Power a drag figure at cruise. Structures sizes the frame and payload bay, and whatever it weighs hands every other subsystem the all-up mass they all have to fit their own numbers inside. Propulsion & Power chooses the motor and battery, and whatever current they draw hands Avionics & Control a load the wiring and the receiver's power circuit have to survive. Avionics & Control writes the firmware and tunes the mixer, and whatever response time it achieves hands Operations an aircraft that either answers the stick the way a pilot expects or does not. Operations makes sure the aircraft flies the mission inside the time window, and hands every other subsystem back the one number that started the whole chain: how long the aircraft has to be in the air. Four people on your team own five subsystems — one person necessarily covers two, and this course does not fix which two; that gets settled inside your own team. The whole course runs against `R-01`: a fixed mass budget of 1800 g, and every subsystem trades against the same 1800 g whether it spends it on a spar, a battery or a servo — a gram Structures saves is a gram Propulsion & Power can spend on a bigger pack. This is why you fly in week 1 before any subsystem has done anything. You need to know what a flying aircraft feels like, and what a control loop with a lag in it feels like, before you get to decide what any of the five subsystems should do about it.

:::figure{kind="general"}
A top-down aircraft silhouette split into five labelled zones — Aero (wing and tail), Structures (fuselage and payload bay), Propulsion & Power (motor and battery bay), Avionics & Control (receiver and servos), Operations (a clipboard beside the airframe) — joined by arrows carrying one labelled figure each: a drag number, an all-up mass, a current draw, a response time, a flight-time window, looping back around to Aero.
:::

:::figure{kind="general"}
A four-stage loop diagram — concept, build, flight, disposal — arranged in a circle and joined by arrows: the concept stage marked with a pencil and a question mark, the build stage marked with a scale, the flight stage marked with a logged trace, the disposal stage marked with a battery being checked back in, and a dashed arrow curving from disposal back to concept for the next design pass.
:::

The same five subsystems run through the same stages, in order, every week of the course: concept, build, flight, disposal. What changes between stages is not the subsystem, it is how confident its number is. A concept-stage number is an estimate nobody has checked yet. A build-stage number is something you can put on a scale. A flight-stage number is something you measured with the aircraft actually in the air. A disposal-stage number is the last one anyone records, because it closes the loop on a pack that started the course fully charged and finishes it flat, checked back in by somebody who was not the person who checked it out. None of that starts this week. This week the aircraft is a club trainer you did not design, and the only subsystem doing anything at all is Operations, making sure you get in the air in the first place.

## Outline

- what this course means by a system, and why the ledger is the centre of it
- the five subsystems, and who on a team of four owns which
- the life cycle this course runs end to end: concept, build, flight, disposal
- what happens in week 1, which is that you fly before you design anything

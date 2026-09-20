# Google Flow prompts for the 24 figure slots

One prompt per `:::figure{kind="..."}` block in `src/content/{lectures,sessions}`.
Paste the **style prefix** in front of every prompt so the set reads as one
shoot rather than 24 unrelated images. Aspect ratio 16:9, since every figure
slot on the site is a wide inline illustration.

Everything is written generic and unbranded on purpose: no real company
names, model numbers or logos in the prompt, because (a) `CLAUDE.md` rule 5
makes this course's whole world fictional — Slop University, Mount Sludge —
and a real branded flight controller in the imagery breaks that, and (b) a
prompt that doesn't name a real product won't get Flow trying to reproduce
one, which keeps the output clean of anyone else's IP.

**Style prefix** (prepend to each prompt below):

> Photorealistic engineering concept photograph, shallow depth of field,
> soft overhead studio lighting, muted blue-grey and safety-orange palette,
> no text, no logos, no brand names, no watermark, 16:9.

Output filenames are a suggestion only — nothing in the repo reads these yet;
wiring generated images into the figure slots is a separate step once you
have files in hand.

---

## Week 1

**Lecture** — `src/content/lectures/week-01.md` — suggested: `week-01-lecture.png`
> An engineering whiteboard photographed head-on: a top-down aircraft
> silhouette chalked in the centre, split into five zones with hand-drawn
> dividing lines, small hand-lettered labels at each zone, and arrows in a
> different colour marker looping between them carrying small handwritten
> numbers — a drag figure, a mass, a current draw, a response time, a
> flight-time window. Coffee cup and a marker pen resting on the ledge below.

**Session** — `src/content/sessions/week-01.md` — suggested: `week-01-session.png`
> A model aircraft on a workbench with two identical radio transmitters
> side by side in front of it, both connected by thin cables running to a
> single receiver visible through an open hatch on the fuselage. A faint
> dashed light-trail overlay showing a control loop: stick, control surface,
> flight path, pilot's eye, back to the stick, with a small clock icon
> hovering over the return arrow.

## Week 2

**Lecture** — `src/content/lectures/week-02.md` — suggested: `week-02-lecture.png`
> A close-up of an engineer's annotated printout on a clipboard: the
> typed sentence "the aircraft shall weigh no more than 1800 g" with three
> colour-coded highlighter callouts pointing to different words, and beside
> it a second sentence crossed out in red pen with no callouts at all,
> photographed at an angle under a desk lamp.

**Session** — `src/content/sessions/week-02.md` — suggested: `week-02-session.png`
> A stopwatch resting on a lab notebook page showing three handwritten lap
> times and their average circled, next to a small scale bearing a 250 g
> calibration weight, both objects connected in the photo composition by a
> loosely drawn pencil arrow toward a boxed mission sentence at the page's
> edge.

## Week 3

**Lecture** — `src/content/lectures/week-03.md` — suggested: `week-03-lecture.png`
> Three small scale models on a workbench in a row under even light: a
> fixed-wing aircraft, a quadcopter, and a tilt-rotor VTOL, each sitting on
> its own labelled index card listing the same four criteria, with a
> handwritten score circled at the bottom of each card.

**Session** — `src/content/sessions/week-03.md` — suggested: `week-03-session.png`
> A desk photographed from above: a printed requirements table, a ledger
> spreadsheet printout stamped "v1" with a date in the corner, and a
> trade-study scorecard with a weights column filled in pen but the scores
> column still blank, all three sheets fanned out and overlapping slightly.

## Week 4

**Lecture** — `src/content/lectures/week-04.md` — suggested: `week-04-lecture.png`
> A wind-tunnel smoke visualisation photograph, two aerofoil models
> mounted side by side at the same angle of attack: smoke streamlines
> hugging the upper surface almost to the trailing edge on the left model,
> and visibly separating into a turbulent bubble partway along the chord on
> the right model.

**Session** — `src/content/sessions/week-04.md` — suggested: `week-04-session.png`
> A model glider mid-descent photographed against an overcast sky from the
> side, with a faint overlaid flight-path line from a marked release height
> down to a landing point, the glide angle sketched as a thin overlay line
> against the horizon.

## Week 5

**Lecture** — `src/content/lectures/week-05.md` — suggested: `week-05-lecture.png`
> An oscilloscope screen on a workbench showing a voltage trace: mostly
> flat, then a sharp downward spike, with a dashed horizontal cursor line
> just above the spike's lowest point and the scope's own on-screen text
> reading only numbers, no logos, reflected faintly in the bench surface.

**Session** — `src/content/sessions/week-05.md` — suggested: `week-05-session.png`
> A bench test rig photographed from above: an unbranded battery pack
> wired to a small voltage regulator module, its output feeding a small
> unbranded flight-controller board, which fans out into five servo leads
> laid out neatly to the right, with an inline current meter and a pair of
> multimeter probes clipped across the regulator's output wires.

## Week 6

**Lecture** — `src/content/lectures/week-06.md` — suggested: `week-06-lecture.png`
> A side-view scale model of a fixed-wing aircraft on a bench, with a
> translucent shaded band overlaid along the fuselage marking a percentage
> range, a thin string stretched from the wing's quarter-chord point back to
> the tail's quarter-chord point, and a small pin marker showing the actual
> balance point against the shaded band.

**Session** — `src/content/sessions/week-06.md` — suggested: `week-06-session.png`
> A 3D-printed or CNC-cut model assembly exploded on a workbench: wing,
> fuselage and tail sitting apart from each other along one axis as if
> lifted mid-assembly, a small handwritten mass tag propped beside each
> part, and the tail piece ringed with a chalk circle.

## Week 7

**Lecture** — `src/content/lectures/week-07.md` — suggested: `week-07-lecture.png`
> A cut-away physical cross-section of a wing spar at the root, resin-cast
> or sliced to show its internal structure, photographed twice side by side
> under raking light so the top surface and underside read differently —
> one lit to emphasise the top skin, one lit to emphasise the underside —
> with a thin dashed wire laid through the centre marking the neutral axis.

**Session** — `src/content/sessions/week-07.md` — suggested: `week-07-session.png`
> A tapered wing spar clamped horizontally in a bench vice at the root,
> a weighted hook hanging from the free tip pulling it into a visible
> downward curve, and a dial indicator mounted on a stand touching the tip
> to read the deflection, photographed close-up under workshop lighting.

## Week 8

**Lecture** — `src/content/lectures/week-08.md` — suggested: `week-08-lecture.png`
> Four labelled index cards arranged in a square on a pinboard — power,
> propulsion, avionics, structures — connected by pieces of coloured string
> pinned between them, each string carrying a small paper tag reading grams,
> watts, volts or a data icon, with one string circled in red marker.

**Session** — `src/content/sessions/week-08.md` — suggested: `week-08-session.png`
> Two photographs composited side by side of the same aileron servo and
> control horn: on the left, the servo mounted bare on a flat test jig with
> no wing skin and the linkage moving in open air; on the right, the same
> servo installed inside a finished wing section with the skin closed over
> it and only the control horn exposed through a slot.

## Week 9

**Lecture** — `src/content/lectures/week-09.md` — suggested: `week-09-lecture.png`
> A workshop wall covered in printed mass-ledger sheets, one per subsystem,
> each sheet stamped in coloured ink as estimated, sourced or measured, with
> a printed running-total strip along the bottom and a red line drawn across
> the whole wall marking the mass cap, the gap beneath it shaded in.

**Session** — `src/content/sessions/week-09.md` — suggested: `week-09-session.png`
> Two identical bar-chart printouts pinned side by side on a review-room
> wall, dated a few weeks apart, each with the same nine labelled segments
> stacked in a column, the second printout's segments each very slightly
> taller than the first's, and the gap between the stack top and a marked
> cap line visibly smaller in the second.

## Week 10

**Lecture** — `src/content/lectures/week-10.md` — suggested: `week-10-lecture.png`
> A clipboard photographed flat on a workbench holding a printed
> four-column verification matrix — requirement ID, method, predicted,
> measured — six rows filled in by hand, with the actual bench tools it
> names sitting just out of focus behind it: a scale, a thrust stand, a
> sandbag rig, a small protractor jig.

**Session** — `src/content/sessions/week-10.md` — suggested: `week-10-session.png`
> A bench setup with a radio transmitter and receiver a short distance
> apart, a propeller-off aircraft resting between them, and a small display
> screen showing two labelled outcomes side by side at the instant of signal
> loss: control surfaces frozen in place, and a flight path curving into a
> descending circle.

## Week 11

**Lecture** — `src/content/lectures/week-11.md` — suggested: `week-11-lecture.png`
> Three stacked strip-chart traces on a data logger's screen photographed
> close up: airspeed, current and elevator deflection over time, with a
> small paper flag taped to the screen's edge marking where the airspeed
> trace flattens and the elevator trace kicks upward, and a second flag on
> the current trace marking a start-up spike.

**Session** — `src/content/sessions/week-11.md` — suggested: `week-11-session.png`
> An aircraft balanced wingtip to wingtip across two wooden dowels resting
> on stands, fuselage hanging level between them, with a strip of masking
> tape on the wing root marked with two pen lines showing the acceptable
> balance band and a third mark showing where it actually rests.

## Week 12

**Lecture** — `src/content/lectures/week-12.md` — suggested: `week-12-lecture.png`
> A printed flight-line schedule taped to a fence post at a grass airfield,
> a single timeline row showing sequential team slots — mission flight,
> signature flight, pack discharge — with a handwritten note in the margin
> underlining that only one aircraft is live on the line at a time.

**Session** — `src/content/sessions/week-12.md` — suggested: `week-12-session.png`
> A bench discharge rig: an unbranded battery pack wired through a
> programmable electronic load unit into a small data logger, its screen
> showing a voltage trace sloping down toward a marked cut-off line, with a
> row of numbered pack tags lined up on a tray beside the rig waiting their
> turn.

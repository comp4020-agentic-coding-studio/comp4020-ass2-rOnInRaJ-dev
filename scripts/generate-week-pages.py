import datetime, pathlib, textwrap

START = datetime.date(2027, 2, 22)
LEC = pathlib.Path("src/content/lectures"); LEC.mkdir(parents=True, exist_ok=True)
SES = pathlib.Path("src/content/sessions"); SES.mkdir(parents=True, exist_ok=True)

W = [
 dict(n=1, teacher="halcyon-pree", field_teacher="glenys-arkwright",
  lt="The aircraft as a system",
  ld="What a drone is once you stop looking at it as an object: five subsystems, one mass budget, and a set of handovers between them",
  lend="you can draw your own aircraft as five subsystems and say what each one hands the others.",
  lout=["what this course means by a system, and why the ledger is the centre of it",
        "the five subsystems, and who on a team of four owns which",
        "the life cycle this course runs end to end: concept, build, flight, disposal",
        "what happens in week 1, which is that you fly before you design anything"],
  st="Studio 1 — fly it before you design it",
  sd="Your first flights, on a club trainer, on a buddy box, before you have made a single design decision",
  goal="Hold level flight on the buddy box for thirty seconds without the instructor taking the aircraft back.",
  owner="Operations",
  predict="Before you touch the transmitter, write down how many seconds you think you will hold it. Bring both numbers to the debrief.",
  weather="Over fifteen knots across the strip the lesson moves to the simulator bay, and the buddy box runs against the sim instead.",
  safety="You do not hold a transmitter until the chief flying instructor has written your name on the day's flight line.",
  spec=["you have flown, on a buddy box, and logged what happened",
        "you can name the five subsystems and say which one you own on your team",
        "your team exists, has four people in it, and has a repository"],
  reqs=[]),

 dict(n=2, teacher="halcyon-pree", field_teacher="glenys-arkwright",
  lt="What the aircraft is for",
  ld="Turning a vague mission into numbered requirements that can actually fail, and opening the mass ledger",
  lend="you can turn a sentence about what your aircraft is for into requirements somebody else could fail you against.",
  lout=["the difference between a wish and a requirement, which is whether it can fail",
        "writing a requirement: the threshold, the owner, and how it gets verified",
        "the course requirement set R-01 to R-14, and why it is a floor and not your requirements",
        "opening the ledger: every line an estimate, every estimate with a method"],
  st="Studio 2 — the mission leg",
  sd="Timing a club trainer around the circuit and turning the number into the mission your team commits to",
  goal="Time three circuits of a club trainer and turn the average into the length of mission leg your team will commit to.",
  owner="Operations",
  predict="Predict the circuit time from the trainer's cruise speed and the circuit dimensions before you start the stopwatch.",
  weather="Rain: time the circuits off the club's logged videos instead, and write in the log that you are trusting somebody else's camera.",
  safety="Stand behind the flight line. Holding a stopwatch is not a reason to walk forward for a better view.",
  spec=["your mission is one sentence, and it names a distance and a payload",
        "your requirement set is numbered and every entry has an owner",
        "your ledger exists, with R-01 and R-08 written into it as constraints"],
  reqs=["R-01", "R-07", "R-08"]),

 dict(n=3, teacher="halcyon-pree", field_teacher="glenys-arkwright",
  lt="Decomposition, and choosing a configuration",
  ld="Breaking the mission into functions, allocating each to a subsystem, and running the configuration trade that decides what you build",
  lend="you can score a configuration trade against criteria you weighted before you knew the scores.",
  lout=["functional decomposition: what the aircraft must do, before what it is",
        "allocating each function to exactly one subsystem",
        "the trade study, and why the weights go in first",
        "fixed-wing against quad against VTOL, on your own mission's numbers"],
  st="Studio 3 — requirements and concept review",
  sd="The first formal review: your requirement set, your chosen configuration, and the one you rejected",
  goal="Fly a club quad and a club fixed-wing trainer back to back on comparable packs, and log the difference in flight time.",
  owner="Aero",
  predict="Predict the ratio between the two endurances from disc loading alone, before either aircraft leaves the ground.",
  weather="Wind above the quad's limit: fly the fixed-wing only, take the quad figure from the club log, and flag it in your review as second-hand.",
  safety="The quad and the fixed-wing do not share the circuit. One is on the ground before the other launches.",
  spec=["your requirement set is reviewed against R-01, R-02, R-07 and R-08",
        "a configuration you did not choose is compared against the one you did",
        "the ledger's version one is baselined and dated"],
  reqs=["R-01", "R-02", "R-07", "R-08"]),

 dict(n=4, teacher="halcyon-pree", field_teacher="nadia-strout",
  lt="Lift, drag, and a very small Reynolds number",
  ld="Why an aerofoil that works on an airliner does nothing useful at model scale, and how to size a wing for the mass you have",
  lend="you can size a wing for your own all-up mass and say exactly what stall speed you have bought.",
  lout=["lift and drag as the ledger sees them: newtons that cost watts",
        "Reynolds number at our scale, and what it does to a published polar",
        "wing area from mass and a stall-speed target",
        "the loop this course lives in: aero sets power, power sets battery mass, battery mass sets aero"],
  st="Studio 4 — the glide test",
  sd="Measuring a real lift-to-drag ratio off a club trainer, and comparing it with the one you calculated",
  goal="Measure a club trainer's glide angle from a fixed release height and back out its lift-to-drag ratio.",
  owner="Aero",
  predict="Predict the glide ratio from the trainer's published wing area and mass before the first release.",
  weather="Thermal or sink over the strip makes a glide measurement meaningless. Repeat at the first still slot and record why the first attempt was discarded.",
  safety="Dead-stick glides are flown by the instructor. Students hold the stopwatch and the height reference, not the transmitter.",
  spec=["your wing area follows from your mass and your stall-speed target, and you can show the working",
        "you have one measured lift-to-drag ratio and one calculated one, and an account of the gap",
        "your ledger has an aero line with a method against it"],
  reqs=["R-02", "R-03"]),

 dict(n=5, teacher="bez-toomath", field_teacher="nadia-strout",
  lt="The battery sets the mass",
  ld="Power, packs, radio and the flight controller — taught in week 5 on purpose, because everything downstream is waiting on these numbers",
  lend="you can size a pack from a cruise power estimate and say how many minutes it buys you.",
  lout=["cruise power from drag, speed and a drive efficiency you can defend",
        "pack sizing: cells, capacity, usable energy above the cut-off",
        "radio links, failsafes, and what the flight controller is actually doing",
        "why this lecture is in week 5 and not week 9"],
  st="Studio 5 — preliminary design review, and the thrust stand",
  sd="The power system gets baselined, and your motor and propeller go on the stand for real numbers",
  goal="Run your team's chosen motor and propeller on the field thrust stand, on a fresh pack, and log thrust against current all the way to full throttle.",
  owner="Propulsion & Power",
  predict="Predict static thrust and peak current before the stand is switched on. Both numbers go in the log before the first run.",
  weather="The thrust stand sits under the club shelter, so rain does not stop it. Wind across the stand above its limit does, and the run moves to the lab rig.",
  safety="Nobody stands in the propeller arc. The stand is armed from behind the blast shield, by one person, who says so out loud first.",
  spec=["your power system is baselined at PDR and the ledger's power lines are closed",
        "R-04 and R-06 have measurements against them, not estimates",
        "your predicted thrust and your measured thrust are both in the log, with the gap accounted for"],
  reqs=["R-04", "R-06", "R-07"]),

 dict(n=6, teacher="halcyon-pree", field_teacher="glenys-arkwright",
  lt="Where the centre of gravity has to be",
  ld="Static stability, tail sizing and the first CAD session: making the aircraft want to fly straight without being asked",
  lend="you can compute a tail volume coefficient for your own wing and say whether the aircraft will fly hands-off.",
  lout=["static margin, and why an aft centre of gravity feels quick right up until it does not",
        "tail volume coefficients, and sizing a tail from your own wing",
        "mean aerodynamic chord, and where R-11 puts your balance point",
        "CAD I: the model that the ledger reads mass out of"],
  st="Studio 6 — moving the balance point",
  sd="Three centre-of-gravity positions on a club trainer, and the handling change at each one",
  goal="Shift the centre of gravity on a club trainer through three marked positions and log the handling change at each.",
  owner="Aero",
  predict="Predict which position will feel unstable, and at what percentage of chord, before the first of the three flights.",
  weather="Gusty conditions mask the handling difference entirely. The exercise moves to the simulator with the same three positions dialled in.",
  safety="The aft-most position is flown by the instructor alone, at altitude, over the far field, with nobody else in the circuit.",
  spec=["your tail is sized from your own wing, and the coefficient is in the ledger",
        "R-02 and R-11 are checked against your current design, not against the course design point",
        "your CAD model returns a mass that agrees with the ledger line it replaces"],
  reqs=["R-02", "R-11"]),

 dict(n=7, teacher="bez-toomath", field_teacher="nadia-strout",
  lt="The spar carries everything",
  ld="Load cases, spar sizing and materials: working out what the wing has to survive and what it costs in grams to survive it",
  lend="you can choose a spar for a stated limit load and defend the material against the two you rejected.",
  lout=["load cases: where the 3.5 g limit load comes from and what it means",
        "beams, bending and tip deflection, at the sizes we actually build",
        "foam, balsa, carbon and epoxy, priced in grams",
        "CAD II: getting the structure out of the model and into the ledger"],
  st="Studio 7 — loading the wing",
  sd="A spare club wing goes on the load rig, and the beam calculation you did meets the deflection you measure",
  goal="Load a spare club wing on the clubhouse load rig to its limit and log tip deflection against applied weight.",
  owner="Structures",
  predict="Predict tip deflection at limit load from your beam calculation before anything is hung on the wing.",
  weather="The load rig is indoors at the clubhouse. Nothing weather-related stops this one, which makes it the slot to book against a bad forecast.",
  safety="Nobody stands under a loaded wing. Deflection is read from the side against a scale, never from underneath.",
  spec=["your spar is sized for a stated load case, and R-10 names the number",
        "predicted deflection and measured deflection are both logged",
        "the structural mass in your ledger comes from the CAD model, not from a guess"],
  reqs=["R-10"]),

 dict(n=8, teacher="bez-toomath", field_teacher="nadia-strout",
  lt="Most failures are interface failures",
  ld="Interface control and failure modes, and the week manufacture starts: the handovers between subsystems are where aircraft are lost",
  lend="you can write an interface control document for your own aircraft and run a failure-mode walk over it.",
  lout=["what an interface is, in grams, volts, watts and data",
        "the interface control document, and why it is one page and not twenty",
        "failure modes: how each interface fails, and what it takes down with it",
        "manufacture begins — and what you are no longer allowed to change"],
  st="Studio 8 — reading the incident book",
  sd="The club's own record of what has gone wrong at Mount Sludge, mapped onto your aircraft's interfaces",
  goal="Walk the club's incident book and map three recorded failures onto your own aircraft's interfaces.",
  owner="Avionics & Control",
  predict="Predict, before you open the book, which of your interfaces is most likely to be the one that shows up in it.",
  weather="This one runs in the clubhouse regardless. If the field closes entirely, the incident book comes to the workshop instead.",
  safety="The incident book names club members. Nothing leaves the clubhouse in a form that identifies anybody.",
  spec=["your interface control document exists and names what every subsystem hands its neighbours",
        "three real failures from the club record are mapped onto your own interfaces",
        "R-13 has a bench method written against it before the rig is booked"],
  reqs=["R-12", "R-13"]),

 dict(n=9, teacher="halcyon-pree", field_teacher="nadia-strout",
  lt="Building the thing you drew",
  ld="The critical design review, and what a change costs once the aircraft is being built rather than drawn",
  lend="you can run a critical design review and state what any change after it costs in time, mass and re-verification.",
  lout=["what CDR baselines, and what it is no longer reasonable to reopen",
        "closing R-01 and R-09 with measured lines, not estimated ones",
        "change control: the reason, the re-check, and the record",
        "build sequencing, and the jobs that cannot be parallelised"],
  st="Studio 9 — weighing it",
  sd="Critical design review at the field, with the aircraft on the scale in front of you",
  goal="Weigh every finished component on the club scale and close the mass ledger against R-01 and R-09 with the aircraft in front of you.",
  owner="Structures",
  predict="Predict the assembled mass from your ledger before anything goes on the scale. The gap is the mark.",
  weather="Weighing happens indoors, so the field slot converts to a workshop slot and the scale comes with it.",
  safety="Nothing with a battery connected goes on the scale. Packs are weighed separately, disconnected, and logged out.",
  spec=["R-01 is closed with a measured all-up mass",
        "R-09 is closed with at least a tenth of the cap still unallocated",
        "every ledger line is now measured or sourced, and none is still an estimate"],
  reqs=["R-01", "R-09", "R-10"]),

 dict(n=10, teacher="bez-toomath", field_teacher="glenys-arkwright",
  lt="Proving it without flying it",
  ld="Test readiness: the verification matrix, and the six requirements you can close on the ground before you risk the aircraft",
  lend="you can build a verification matrix and say which of your requirements can be closed without ever leaving the ground.",
  lout=["the verification matrix: requirement, method, predicted, measured",
        "what a thrust stand, a scale, two knife edges and a protractor can close",
        "range checks and failsafe behaviour, and testing them deliberately",
        "test readiness review: are we allowed to fly this yet"],
  st="Studio 10 — range and failsafe",
  sd="Test readiness review, then the range check and a deliberate link-loss test on your own airframe",
  goal="Run a full ground range check and a deliberate transmitter-off failsafe test on your own airframe, then repeat it at altitude with the instructor flying.",
  owner="Avionics & Control",
  predict="Predict the range at which the link starts to degrade, and predict exactly what your failsafe will do, before either test.",
  weather="A range check needs a dry aircraft and a quiet frequency. If the field is busy the slot moves to the far paddock, with the club's permission.",
  safety="The failsafe test at altitude is flown by the chief flying instructor, over the far field, with the flight line cleared first.",
  spec=["your verification matrix covers every one of your requirements",
        "R-04, R-10, R-11, R-12 and R-13 are closed on the ground, with logs",
        "R-01 is re-confirmed at flight-ready mass, because it will have crept"],
  reqs=["R-01", "R-04", "R-10", "R-11", "R-12", "R-13"]),

 dict(n=11, teacher="bez-toomath", field_teacher="glenys-arkwright",
  lt="Predicted against logged",
  ld="Flight testing as an experiment: planning a flight that answers one question, and reading the log afterwards",
  lend="you can plan a flight test that answers exactly one question, and read the log it produces.",
  lout=["one question per flight, and why two questions give you neither answer",
        "instrumentation: what to log, at what rate, and what you will regret not logging",
        "tuning the controller on your own airframe, not on a club trainer",
        "flight readiness review: the last gate before the fly-off"],
  st="Studio 11 — the timed leg",
  sd="Flight readiness review, then your own aircraft flies a timed cruise leg against the number you predicted",
  goal="Fly a timed straight leg at cruise on your own airframe and log pack current and voltage against your predicted cruise power.",
  owner="Propulsion & Power",
  predict="Predict cruise power and stall speed from your own ledger, not from the course design point of 60 W.",
  weather="A crosswind ruins a timed leg. Fly the leg into wind and back out, average the two, and say in the log that you did.",
  safety="The first flight of any airframe is flown by the instructor. Your team's test pilot takes it on the second flight, never the first.",
  spec=["R-03, R-05 and R-07 have measured values beside their predicted ones",
        "every gap between predicted and measured has a reason written against it",
        "the aircraft is signed off at flight readiness review, or it is not flying in week 12"],
  reqs=["R-03", "R-05", "R-07"]),

 dict(n=12, teacher="halcyon-pree", field_teacher="ivo-machin",
  lt="What the wreckage tells you",
  ld="A real drone failure taken back to its cause, the fly-off, and the part of the life cycle nobody photographs: disposal",
  lend="you can take a documented drone failure back to its cause and name the requirement that would have caught it.",
  lout=["one real, documented failure, worked back from the outcome to the cause",
        "which requirement would have caught it, and why nobody wrote that requirement",
        "the fly-off: mission, signature capability, scoring",
        "disposal: what R-14 is for, and why it has no engineering content at all"],
  st="Studio 12 — the fly-off",
  sd="The mission, the signature capability, the scoring, and every pack back in the club bin before anybody goes home",
  goal="Fly the mission with the payload fitted, demonstrate your signature capability, and return every pack discharged to the club bin.",
  owner="Operations",
  predict="Predict your mission time and the state of your pack at the end of it, then hold both up against the fly-off log.",
  weather="The fly-off has a reserve day the following week. If both days are lost, teams are scored on their week 11 logs and their bench evidence.",
  safety="Scoring runs one aircraft at a time. The flight line is closed while a scoring flight is in the air.",
  spec=["R-08 is closed: the payload went to the waypoint and the aircraft came back",
        "R-07 is closed against a logged flight, not a bench estimate",
        "R-14 is closed: every pack is discharged and back in the club bin, signed off"],
  reqs=["R-07", "R-08", "R-14"]),
]

assert len(W) == 12

def block(lines): return "\n".join(f"- {l}" for l in lines)

for w in W:
    n = w["n"]
    date = (START + datetime.timedelta(weeks=n - 1)).isoformat()
    slug = f"week-{n:02d}"

    (LEC / f"{slug}.md").write_text(f"""---
title: "Week {n} — {w['lt']}"
description: >-
  {w['ld']}
week: {n}
date: {date}
teachers:
  - {w['teacher']}
related:
  - sessions/{slug}
---

**By the end:** {w['lend']}

## Outline

{block(w['lout'])}
""")

    reqline = ""
    if w["reqs"]:
        reqline = "\nThis week works on " + ", ".join(f"`{r}`" for r in w["reqs"]) + ".\n"

    (SES / f"{slug}.md").write_text(f"""---
title: "Week {n} — {w['st']}"
description: >-
  {w['sd']}
week: {n}
date: {date}
teachers:
  - {w['field_teacher']}
spec:
{chr(10).join(f'  - {s}' for s in w['spec'])}
related:
  - lectures/{slug}
---
{reqline}
## At the field

Your team books its own slot for this week — see [Field days](/field-days/) for
the rules and the windows. Every team's slot carries the same objective.

- **Field objective:** {w['goal']}
- **Owner:** {w['owner']}
- **Predict:** {w['predict']}
- **Weather fallback:** {w['weather']}
- **Safety:** {w['safety']}
""")

print("wrote 24 week pages")

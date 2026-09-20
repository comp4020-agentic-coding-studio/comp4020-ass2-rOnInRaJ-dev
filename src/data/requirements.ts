// The requirement set. Every claim on this site about what the aircraft must
// do names one of these IDs. Each requirement has exactly one owning subsystem
// and at least one week where it is verified — an unverifiable requirement is
// a wish, and the self-check below refuses it.
//
// Run directly (`node src/data/requirements.ts`) to check the set.

export type Subsystem =
  | "Aero"
  | "Structures"
  | "Propulsion & Power"
  | "Avionics & Control"
  | "Operations";

export interface Requirement {
  id: `R-${string}`;
  statement: string;
  owner: Subsystem;
  /** Weeks whose work produces the evidence that closes this requirement. */
  verifiedInWeeks: number[];
  /** How it is closed: what is measured, and against what. */
  verification: string;
}

export const requirements: Requirement[] = [
  {
    id: "R-01",
    statement: "All-up mass at launch stays at or under the 1800 g cap.",
    owner: "Structures",
    verifiedInWeeks: [9, 10],
    verification: "Weigh the assembled aircraft, flight-ready, on the lab scale.",
  },
  {
    id: "R-02",
    statement: "Wing loading stays at or under 45 g/dm² at all-up mass.",
    owner: "Aero",
    verifiedInWeeks: [6],
    verification: "Measured wing area and measured mass, computed against the ledger.",
  },
  {
    id: "R-03",
    statement: "Stall speed stays at or under 8.5 m/s in clean configuration.",
    owner: "Aero",
    verifiedInWeeks: [11],
    verification: "Logged airspeed at the onset of departure, compared with the predicted figure.",
  },
  {
    id: "R-04",
    statement: "Static thrust reaches at least 0.70 of all-up weight.",
    owner: "Propulsion & Power",
    verifiedInWeeks: [5, 10],
    verification: "Thrust stand, full throttle, fresh pack, with the flight propeller fitted.",
  },
  {
    id: "R-05",
    statement: "Electrical power in level cruise at 12 m/s stays at or under 70 W.",
    owner: "Propulsion & Power",
    verifiedInWeeks: [11],
    verification: "Logged pack current and voltage over a timed straight leg.",
  },
  {
    id: "R-06",
    statement: "The pack delivers at least 26 Wh of usable energy above the cut-off voltage.",
    owner: "Propulsion & Power",
    verifiedInWeeks: [5],
    verification: "Bench discharge at the cruise current, to the cut-off, on the logging load.",
  },
  {
    id: "R-07",
    statement: "Endurance in cruise reaches at least 20 minutes on one pack.",
    owner: "Propulsion & Power",
    verifiedInWeeks: [11, 12],
    verification: "Timed flight to the cut-off, with the logged energy compared to the prediction.",
  },
  {
    id: "R-08",
    statement: "The aircraft carries its 250 g payload to the mission waypoint and back.",
    owner: "Operations",
    verifiedInWeeks: [12],
    verification: "Fly-off scoring: payload fitted, waypoint reached, aircraft recovered intact.",
  },
  {
    id: "R-09",
    statement: "At least 10% of the mass cap remains unallocated at the critical design review.",
    owner: "Structures",
    verifiedInWeeks: [9],
    verification: "The mass ledger at CDR, with every line item either measured or sourced.",
  },
  {
    id: "R-10",
    statement: "The wing spar carries a 3.5 g limit load with no permanent set.",
    owner: "Structures",
    verifiedInWeeks: [7, 10],
    verification: "Sandbag or hanging-weight test to limit load; measure tip deflection before and after.",
  },
  {
    id: "R-11",
    statement: "Centre of gravity sits between 28% and 34% of mean aerodynamic chord.",
    owner: "Aero",
    verifiedInWeeks: [6, 10],
    verification: "Balance the flight-ready aircraft on knife edges and measure against the datum.",
  },
  {
    id: "R-12",
    statement: "The radio link holds to 400 m, and failsafe circles and descends on loss.",
    owner: "Avionics & Control",
    verifiedInWeeks: [10],
    verification: "Range check on the ground, then a deliberate transmitter-off test at altitude.",
  },
  {
    id: "R-13",
    statement: "Control surface deflections repeat to within 1 degree after 50 cycles.",
    owner: "Avionics & Control",
    verifiedInWeeks: [8, 10],
    verification: "Protractor and cycle counter on the bench rig, before and after.",
  },
  {
    id: "R-14",
    statement: "Every pack issued to the team is returned, discharged, to the club battery bin.",
    owner: "Operations",
    verifiedInWeeks: [12],
    verification: "Pack register signed off at the end of the fly-off.",
  },
];

/** The five weeks that hold a formal review, and the requirements each one
 *  closes or re-baselines. Studios in these weeks must link the set. */
export const reviewWeeks: Record<number, { name: string; covers: string[] }> = {
  3: {
    name: "Requirements & concept review",
    covers: ["R-01", "R-02", "R-07", "R-08"],
  },
  5: {
    name: "Preliminary design review",
    covers: ["R-04", "R-06", "R-07"],
  },
  9: {
    name: "Critical design review",
    covers: ["R-01", "R-09", "R-10"],
  },
  10: {
    name: "Test readiness review",
    covers: ["R-01", "R-04", "R-10", "R-11", "R-12", "R-13"],
  },
  11: {
    name: "Flight readiness review",
    covers: ["R-03", "R-05", "R-07"],
  },
};

export const byId = new Map(requirements.map((r) => [r.id, r]));

function selfCheck(): void {
  const assert = (ok: boolean, msg: string): void => {
    if (!ok) throw new Error(`requirements self-check failed: ${msg}`);
  };
  assert(byId.size === requirements.length, "duplicate requirement ID");
  requirements.forEach((r, i) => {
    assert(r.id === `R-${String(i + 1).padStart(2, "0")}`, `${r.id} is out of sequence`);
    assert(r.verifiedInWeeks.length > 0, `${r.id} has no verifying week`);
    assert(
      r.verifiedInWeeks.every((w) => w >= 1 && w <= 12),
      `${r.id} verifies outside the teaching period`,
    );
    assert(r.statement.trim().endsWith("."), `${r.id} is not a sentence`);
  });
  for (const [week, review] of Object.entries(reviewWeeks)) {
    for (const id of review.covers) {
      assert(byId.has(id), `${review.name} (week ${week}) covers unknown ${id}`);
    }
  }
  const owners = new Set(requirements.map((r) => r.owner));
  assert(owners.size === 5, "a subsystem owns nothing — it is not a subsystem");
  console.log(
    `requirements self-check passed: ${requirements.length} requirements, ${owners.size} owners, ${Object.keys(reviewWeeks).length} review weeks`,
  );
}

if (process.argv[1]?.endsWith("requirements.ts")) selfCheck();

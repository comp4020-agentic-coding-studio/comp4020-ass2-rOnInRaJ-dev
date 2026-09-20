// The ledger. Every mass, power and energy figure on this site resolves to a
// value here, and every derived quantity is computed, never typed. Run this
// file directly (`node src/data/ledger.ts`) to check it against itself.
//
// The design point is a small electric fixed-wing trainer: foam-and-carbon
// wing, 4S LiPo, hand-launched. The numbers are plausible for that class and
// are ours to defend, not measurements of a real aircraft.

/** Mass budget, in grams. The whole course is an argument about this table. */
export const massBudget = {
  wingStructure: 310,
  fuselageStructure: 240,
  tailStructure: 85,
  propulsion: 185, // motor, ESC, prop, mount
  battery: 230, // 4S 2200 mAh LiPo
  avionics: 120, // flight controller, GPS, receiver, wiring
  servos: 90, // five servos and linkages
  payload: 250, // camera and mount
  consumables: 50, // fasteners, adhesive, finish
} as const;

/** The cap is a course requirement (R-01), not a law of any kind. */
export const MTOW_CAP_G = 1800;

/** Geometry. Span and chord in millimetres, because that is how it is cut. */
export const geometry = {
  spanMm: 1600,
  chordMm: 240,
  fuselageLengthMm: 1050,
} as const;

/** Electrical and aerodynamic constants for the cruise design point. */
export const designPoint = {
  cruiseSpeedMs: 12,
  clMax: 1.1,
  liftToDragCruise: 7,
  driveEfficiency: 0.5, // ESC x motor x propeller, combined
  avionicsDrawW: 8,
  batteryCells: 4,
  cellNominalV: 3.7,
  batteryCapacityAh: 2.2,
  usableFraction: 0.8,
  staticThrustG: 1100,
  peakDrawW: 320,
} as const;

const AIR_DENSITY = 1.225; // kg/m^3, sea level, standard day
const AIR_VISCOSITY = 1.81e-5; // Pa s
const G = 9.81;

const round = (value: number, places: number): number =>
  Number(value.toFixed(places));

function compute() {
  const allocatedG = Object.values(massBudget).reduce((a, b) => a + b, 0);
  const reserveG = MTOW_CAP_G - allocatedG;
  const massKg = allocatedG / 1000;
  const weightN = massKg * G;

  const spanM = geometry.spanMm / 1000;
  const chordM = geometry.chordMm / 1000;
  const wingAreaM2 = spanM * chordM;
  const aspectRatio = (spanM * spanM) / wingAreaM2;
  const wingLoadingGdm2 = allocatedG / (wingAreaM2 * 100);

  const stallSpeedMs = Math.sqrt(
    (2 * weightN) / (AIR_DENSITY * wingAreaM2 * designPoint.clMax),
  );
  const cruiseReynolds =
    (AIR_DENSITY * designPoint.cruiseSpeedMs * chordM) / AIR_VISCOSITY;

  const dragN = weightN / designPoint.liftToDragCruise;
  const aeroPowerW = dragN * designPoint.cruiseSpeedMs;
  const shaftPowerW = aeroPowerW / designPoint.driveEfficiency;
  const cruisePowerW = shaftPowerW + designPoint.avionicsDrawW;

  const packVoltage = designPoint.batteryCells * designPoint.cellNominalV;
  const packEnergyWh = packVoltage * designPoint.batteryCapacityAh;
  const usableEnergyWh = packEnergyWh * designPoint.usableFraction;
  const enduranceMin = (usableEnergyWh / cruisePowerW) * 60;

  const thrustToWeight = designPoint.staticThrustG / allocatedG;

  return {
    allocatedG,
    reserveG,
    reservePercent: round((reserveG / MTOW_CAP_G) * 100, 1),
    wingAreaM2: round(wingAreaM2, 3),
    aspectRatio: round(aspectRatio, 1),
    wingLoadingGdm2: round(wingLoadingGdm2, 1),
    stallSpeedMs: round(stallSpeedMs, 1),
    cruiseReynolds: Math.round(cruiseReynolds / 1000) * 1000,
    dragN: round(dragN, 2),
    cruisePowerW: round(cruisePowerW, 0),
    packVoltageV: round(packVoltage, 1),
    packEnergyWh: round(packEnergyWh, 1),
    usableEnergyWh: round(usableEnergyWh, 1),
    enduranceMin: round(enduranceMin, 0),
    thrustToWeight: round(thrustToWeight, 2),
  };
}

export const derived = compute();

/** The caps the design is judged against. These are the numbers the
 *  requirements in `requirements.ts` quote, kept here so a threshold and a
 *  design value can never drift apart. */
export const thresholds = {
  mtowCapG: MTOW_CAP_G,
  wingLoadingCapGdm2: 45,
  stallSpeedCapMs: 8.5,
  cruisePowerCapW: 70,
  usableEnergyMinWh: 26,
  enduranceMinMinutes: 20,
  thrustToWeightMin: 0.7,
  limitLoadFactor: 3.5,
  cgRangePercentMac: [28, 34] as const,
  radioRangeM: 400,
} as const;

/** Every unit-bearing figure the site is allowed to print, by unit.
 *  `spec/traceability.test.ts` reads this: a number with one of these units
 *  that is not in the matching set is an invented number. */
export const allowedByUnit: Record<string, number[]> = {
  g: [
    ...Object.values(massBudget),
    MTOW_CAP_G,
    derived.allocatedG,
    derived.reserveG,
    designPoint.staticThrustG,
  ],
  "g/dm\u00b2": [derived.wingLoadingGdm2, thresholds.wingLoadingCapGdm2],
  mm: [geometry.spanMm, geometry.chordMm, geometry.fuselageLengthMm],
  "m/s": [designPoint.cruiseSpeedMs, derived.stallSpeedMs, thresholds.stallSpeedCapMs],
  W: [derived.cruisePowerW, designPoint.avionicsDrawW, designPoint.peakDrawW, thresholds.cruisePowerCapW],
  Wh: [derived.packEnergyWh, derived.usableEnergyWh, thresholds.usableEnergyMinWh],
  "m\u00b2": [derived.wingAreaM2],
};

function selfCheck(): void {
  const assert = (ok: boolean, msg: string): void => {
    if (!ok) throw new Error(`ledger self-check failed: ${msg}`);
  };
  assert(derived.allocatedG < MTOW_CAP_G, "allocated mass exceeds the MTOW cap");
  assert(derived.reserveG >= MTOW_CAP_G * 0.1, "mass reserve is under 10% (R-09)");
  assert(derived.stallSpeedMs < designPoint.cruiseSpeedMs, "cruise is below stall");
  assert(derived.thrustToWeight >= thresholds.thrustToWeightMin, "static thrust cannot hand-launch this (R-04)");
  assert(derived.enduranceMin >= thresholds.enduranceMinMinutes, "endurance misses R-07");
  assert(derived.stallSpeedMs <= thresholds.stallSpeedCapMs, "stall speed misses R-03");
  assert(derived.cruisePowerW <= thresholds.cruisePowerCapW, "cruise power misses R-05");
  assert(derived.wingLoadingGdm2 <= thresholds.wingLoadingCapGdm2, "wing loading misses R-02");
  assert(derived.usableEnergyWh >= thresholds.usableEnergyMinWh, "usable energy misses R-06");
  assert(
    derived.cruiseReynolds > 1e5 && derived.cruiseReynolds < 5e5,
    "cruise Reynolds left the low-Reynolds regime the course is about",
  );
  console.log("ledger self-check passed");
  console.table(derived);
}

if (process.argv[1]?.endsWith("ledger.ts")) selfCheck();

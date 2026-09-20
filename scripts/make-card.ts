#!/usr/bin/env node
// Renders the link-preview card from a hand-written SVG, using the `sharp`
// that ships with the template. The bars are the mass ledger, at the same
// proportions the home page draws them — one source of truth, two renderers.
//
//   node scripts/make-card.ts
import sharp from "sharp";
import { courseMeta } from "../src/course-config.ts";
import { massBudget, MTOW_CAP_G, derived } from "../src/data/ledger.ts";

const W = 1200;
const H = 630;
const INK = "#0b0b0b";
const PAPER = "#f4f1ea";
const ACCENT = "#c8452d";

const lines = [
  ...Object.entries(massBudget).map(([, g]) => ({ g, reserve: false })),
  { g: derived.reserveG, reserve: true },
];

const barTop = 300;
const barH = 150;
const gutter = 80;
const usable = W - gutter * 2;

let x = gutter;
const bars = lines
  .map(({ g, reserve }) => {
    const w = (g / MTOW_CAP_G) * usable;
    const rect = reserve
      ? `<rect x="${x.toFixed(1)}" y="${barTop}" width="${w.toFixed(1)}" height="${barH}" fill="url(#hatch)" stroke="${INK}" stroke-width="2"/>`
      : `<rect x="${x.toFixed(1)}" y="${barTop}" width="${(w - 3).toFixed(1)}" height="${barH}" fill="${INK}"/>`;
    x += w;
    return rect;
  })
  .join("\n    ");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <pattern id="hatch" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="${INK}" stroke-width="2"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  <text x="${gutter}" y="140" font-family="Georgia, serif" font-size="46" fill="${ACCENT}" letter-spacing="6">${courseMeta.code}</text>
  <text x="${gutter}" y="225" font-family="Georgia, serif" font-size="66" fill="${INK}">Grams and Watt-Hours</text>
  <text x="${gutter}" y="275" font-family="Georgia, serif" font-size="30" fill="${INK}" opacity="0.7">Designing, building and flying a battery drone</text>
  ${bars}
  <text x="${gutter}" y="${barTop + barH + 46}" font-family="Georgia, serif" font-size="26" fill="${INK}" opacity="0.7">${derived.allocatedG} g allocated</text>
  <text x="${W - gutter}" y="${barTop + barH + 46}" text-anchor="end" font-family="Georgia, serif" font-size="26" fill="${INK}" opacity="0.7">${MTOW_CAP_G} g cap</text>
  <text x="${gutter}" y="${H - 60}" font-family="Georgia, serif" font-size="28" fill="${INK}">Slop University · Semester 1, ${courseMeta.year}</text>
</svg>`;

const out = "src/assets/images/card.png";
await sharp(Buffer.from(svg)).png().toFile(out);
console.log(`wrote ${out} (${W}x${H})`);

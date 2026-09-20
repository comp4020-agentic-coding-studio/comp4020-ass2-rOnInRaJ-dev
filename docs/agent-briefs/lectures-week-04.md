## What this page must do
Teach why a Reynolds number this low breaks a published aerofoil polar, and how to size a wing from mass and a stall-speed target. This is the only page that states the aero-power-battery-mass loop the whole course lives inside.

## Where the prose goes
New prose between the `**By the end:**` line and `## Outline`. About 300 words in two paragraphs: the first uses the failure story as the worked example for the outline's Reynolds-number bullet; the second closes the loop — aero sets power, power sets battery mass, battery mass sets aero — in concrete terms.

## Must say
- Cite exactly, from the ledger: cruise speed 12 m/s (`designPoint.cruiseSpeedMs`), the stall-speed cap 8.5 m/s (`thresholds.stallSpeedCapMs`), and the wing-loading cap 45 g/dm² (`thresholds.wingLoadingCapGdm2`).
- Name the requirement IDs this content verifies: `R-02` (wing loading, owned by Aero) and `R-03` (stall speed, owned by Aero).
- State the relationship "wing area follows from mass and a stall-speed target" in words — do not compute a number. The only thresholds it may cite are the stall-speed cap (8.5 m/s) and the wing-loading cap (45 g/dm²) already listed above.
- Explain the outline's closing loop (aero sets power, power sets battery mass, battery mass sets aero) as the reason these three are not sized once, in order — connect forward to week 5 (the battery) by name only, not content.

## The failure story
Story 4 (the wrong Reynolds number). Use it as the central worked example for "Reynolds number at our scale": a published aerofoil polar taken at a Reynolds number ten times the course's own, and a wing that stalls well before the graph promised. Land it as the reason a published polar cannot be trusted at face value here.

## Must not
- Must not describe the glide test itself, its release height, or how a measured lift-to-drag ratio is backed out — that is the week 4 studio's field objective.
- Must not discuss battery sizing, pack voltage, or any Wh figure — those belong to week 5's lecture.
- Must not restate the configuration trade or decomposition — week 3.
- Must not name any mass-budget line item (wing structure grams, and so on) — this page is about aerodynamic sizing relationships, not the mass ledger's line items.

## Voice notes
- Treat the polar as a document from somewhere else that misled by omission, not by intent — it was measured honestly, just not at this scale.
- The loop (aero, power, battery, aero) should read as an engineering constraint, not a metaphor about circles.

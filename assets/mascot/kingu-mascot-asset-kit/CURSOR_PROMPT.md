# Kingu eats the interactive A — implementation prompt

Implement the mascot sequence in the existing hero. Inspect the actual title markup, font, letter wrappers, hover handlers and animation code first. Preserve the website layout, typography, copy, buttons and existing cursor interaction.

## Preserve the live title

The user's screenshots show letters changing position/angle near the cursor. Keep that effect. Screenshots alone do not establish whether the renderer uses HTML text, SVG or canvas: inspect the implementation and preserve its native representation.

Do not replace KINGU RAMEN with a PNG or use a different font. Reuse the original A in RAMEN, including its shape, colour, shadow and base rotation. Target its existing span, SVG group or rendering object. If it is not independently addressable, isolate its visual object without changing the other letters or their spacing.

Reserve A's original layout width, height, baseline and letter advance throughout. Hide only its visual glyph after eating; never collapse the space between R and M.

Separate transform ownership: a stable layout slot contains a hover-transform wrapper, which contains the current visual (A or mascot). Reuse a suitable existing structure and preserve selectors/event behaviour. Local chewing/breathing uses another wrapper so it cannot overwrite hover transforms.

## Assets

Use `letter-a-sequence/mascot-neutral.png`, `mascot-open.png` and `mascot-chew.png`. Each has an identical 1017 × 1078 canvas and differs only in the mouth rectangle recorded in `sprite-layout.json`. Keep the frames registered. Alternatively place their matching mouth patches on the neutral sprite at the supplied coordinates.

Use the same compact mascot throughout rolling, eating and the final slot. Arms stay tucked. Preserve facial proportions and the compact daruma body. There is no neck or separate head/torso junction. No legs, feet, hopping or waving. Do not mix old rig coordinates with the new compact expressions.

## Sequence — approximately 8–9 seconds

1. The mascot notices A and makes a small curious tilt.
2. Roll from the right toward A while shrinking smoothly toward letter-scale size. Rotate the entire character with the horizontal travel. Derive rotation/travel from the actual distance rather than forcing one revolution across any arbitrary distance. Finish upright. Keep the shadow outside the rotating group.
3. Settle next to A with a small wobble. Smoothly settle and temporarily lock ONLY A's hover transform before biting. The other letters remain interactive.
4. Take two small bites. Animate the original glyph, or a visually identical native clone of it, toward the mouth and progressively mask its bitten regions. Alternate open/chew expressions. The disappearance must follow the bites rather than an unrelated fade. Optional tiny cream crumbs can reinforce the action.
5. Hide A's visual content while retaining its slot. Move the mascot into that slot, chew briefly, then return to its neutral smile.
6. Resume the A-slot hover behaviour with the mascot as its visual content. Apply the original hover response to the shared wrapper. Other letters continue behaving exactly as before. Idle movement stays restrained.

## Dynamic placement

Wait for the real font and sprites to be ready. Measure A's stable layout slot and current visual bounds in the hero overlay's coordinate system. Convert viewport positions correctly. Do not use screenshot pixel positions.

The visible mascot is 985 × 1046 inside a 1017 × 1078 frame, offset 16 px on both axes. Contain its visible bounds within A's width/height with about 5% padding, retain aspect ratio, account for the transparent margins and align the visible bottom with A's baseline/bottom. Hands must not cover R or M, including under normal maximum hover rotation/scale.

Re-evaluate the target before biting and lock A so it cannot move away during the bite. Recompute on font, viewport or layout changes. Retarget or settle safely if resizing happens mid-sequence. After the mascot enters the native slot, let document layout position it instead of maintaining stale absolute page coordinates.

## Behaviour and validation

Play once on first hero visibility, without restarting on scrolling back or resizing. Preserve the accessible heading text KINGU RAMEN when its visual A is hidden. Keep decorative clones and sprites out of the reading order. Touch layouts work without hover. For reduced motion, show a static final state without rolling/chewing.

Test normal and hovered lettering before/after the sequence, cursor movement during approach, both bites, final placement, responsive resizing and reduced motion. Check for layout shifts, missing letters, detached pieces, expression jumps, overlapping hands and console errors.

Complete the implementation, run relevant project build checks and provide a working desktop/mobile preview. Report the actual changes and any remaining limitations.

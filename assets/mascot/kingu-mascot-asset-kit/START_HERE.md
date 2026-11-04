# Kingu mascot — animation asset kit

Version 6 includes the latest corrected full sprite sheet, `Kingu_Daruma_Sprite_Sheet.png`, plus **three compact full-body expression sprites** for the rolling / eating-A sequence, with matching mouth patches. The 13 separate transparent PNG parts remain available; the body base now uses the corrected daruma silhouette. The mascot is **one compact daruma shape with its face directly on the front, no neck, legs or feet**.

## Current sequence

Use the new sprites in `letter-a-sequence/`: `mascot-neutral.png`, `mascot-open.png` and `mascot-chew.png`. All have the same 1017 × 1078 canvas, tucked arms and identical non-mouth pixels. `sprite-layout.json` provides their visible bounds and mouth-patch coordinates.

**Keep the website's live lettering, including its existing cursor/hover effect. Do not replace KINGU RAMEN or its A with a PNG.** Isolate the original A visual object in the website code, retain its layout space, animate it being eaten and place the mascot in the same hover wrapper. Exact production sizing must be measured from the live A slot after fonts load.

Read `CURSOR_PROMPT.md` for the latest brief. The daruma update corrects the body to a compact daruma silhouette with a broad domed crown and shallow curved base, without a neck; discard previous circular, tall or oval expression sprites. The older modular parts below are optional rigging resources; their crop coordinates are not interchangeable with the new compact sprites. Wave assets are retained only as optional artwork. The current animation has no waving.

## Files

| File in `parts/` | Purpose |
| --- | --- |
| `head-base.png` | Yellow crown, white face, brows and muzzle; eye whites intentionally have no irises. |
| `body.png` | Complete yellow daruma body base with a smoothly closed top; no neck opening or collar. |
| `arm-left-rest.png`, `arm-right-rest.png` | Relaxed hanging arms with hands. |
| `arm-left-wave.png`, `arm-right-wave.png` | Alternate raised arms for waving. |
| `eye-left-open.png`, `eye-right-open.png` | Optional open-eye white patches, without irises. |
| `iris-left.png`, `iris-right.png` | Movable gold irises, black pupils and highlights. |
| `eye-left-closed.png`, `eye-right-closed.png` | Opaque white closed-eye replacements for blinks. |
| `ground-shadow.png` | Separate soft oval ground shadow. |

`left` and `right` always mean **screen/viewer left and right**.

## Using the parts

1. Place the ground shadow beneath the mascot.
2. Align the daruma body base to the ground shadow. Do not add legs, feet or a crotch notch. Remove any foot layers from the older rig.
3. Treat the face artwork as an overlay on the upper front of the single daruma body. Do not stack a separate head above a torso, introduce a neck or make the silhouette tall. For the current eating sequence, use the supplied full-body expression sprites.
4. Position the arms at the shoulders. Set each arm's rotation origin at its shoulder, not at the centre of the image.
5. Keep the facial features registered on the daruma body. Tilt or roll the whole mascot; do not create a neck pivot.
6. Scale and position the irises inside the existing eye whites. Clip their motion to the eye openings; do not allow them to move across the black eye outlines.
7. For blinking, hide the irises and replace/cover the open eyes with the closed-eye patches. Align the patches to the eye openings first.
8. The wave arms are replacement poses. Switch from the resting pose at a suitable transition, then animate a small rotation around the shoulder.

## Important format notes

- These are raster PNG cutouts with real RGBA transparency, not vector SVG paths or a finished animation.
- Parts are tightly cropped individually. They do not share a common registration canvas or a fixed assembly scale. Position, scale, draw order and pivots need to be set in the website's rig.
- The larger eye and iris sprites are intentional: scale them down when placing them on the head.
- `reference/assembled-reference.png` is a visual design guide, not a rendered or validated assembly of these separate layers.
- `asset-manifest.json` records the exact exported image sizes, source-atlas crop rectangles and atlas placements.
- These are raster images. Exact native sizes are recorded in the manifests; they are not vector artwork. The new full-body expression frames are 1017 × 1078 px.
- The supplied character sheet guided generated artwork; pixel-for-pixel identity with the source is not guaranteed. Review the assembled face before launch.

## Proposed hero behaviour

The latest sequence is approximately 8–9 seconds: notice A, roll toward it while reducing to letter-scale size, settle upright, take two small bites, chew, and occupy the reserved A slot between R and M. Preserve all surrounding letter hover effects. Temporarily lock only A during eating; afterwards let the mascot share A's hover transform. No walking, hopping, waving or feet. The website animation is not implemented in this artwork package.

## Nota ringkas

Pose neutral, mulut terbuka dan mengunyah sudah disediakan dengan tangan rapat serta bentuk daruma tanpa leher atau kaki. Mata, hidung dan bahagian lain kekal sama antara tiga pose. Kekalkan huruf A asal dalam website bersama hover-nya. Code perlu mengukur slot A sebenar supaya mascot muat pada desktop dan phone. Animation website belum dipasang.

# Compact mascot expressions for the interactive A

The latest user reference shows interactive lettering. Keep the title and A rendered by the existing website code; a PNG would lose that behaviour.

## Included files

- `mascot-neutral.png`: compact smiling mascot with tucked arms.
- `mascot-open.png`: same character with an open biting mouth.
- `mascot-chew.png`: same character with a closed chewing expression.
- `mouth-patch-neutral.png`, `mouth-patch-open.png`, `mouth-patch-chew.png`: optional registered mouth patches.
- `sprite-layout.json`: dimensions, bounds, patch positions and dynamic-fit instructions.
- `mouth-pose-preview.png`: three-expression contact sheet.

Each full-body PNG is 1017 × 1078 with true transparency. Visible bounds: x=16, y=16, width=985, height=1046. Mouth patch in the full frame: x=316, y=495, width=380, height=145. All pixels outside that mouth rectangle are identical across the three full-body sprites. Do not independently trim the frames.

The small mouth patches intentionally contain the opaque white muzzle background needed to cover the previous mouth. They are not transparent mouth-line-only graphics. Use the complete full-body sprites if patch compositing is inconvenient.

## Size and position

Measure the actual A slot after the font loads. Preserve the original letter advance, baseline and layout space while hiding only A's visual glyph. Fit the visible mascot within that space with a small margin, retaining its aspect ratio.

For slot width W and glyph height H, a starting scale is `min(W * 0.90 / 985, H * 0.94 / 1046)`. Scale the full 1017 × 1078 frame by that amount, account for its 16-px margins and align its visible bottom with A's baseline/bottom. Verify that the hands do not cover R or M under normal maximum hover motion. Recompute on font/layout changes and resizing.

Exact production dimensions cannot be established from screenshots alone. The package supplies a compact sprite and measurement rules, not hard-coded page coordinates.

## Keep hover

Use the existing A glyph for the eating effect. Temporarily lock only A during the bite, then swap its visual content to the mascot inside the same hover-transform wrapper. All other letters retain their original appearance and cursor behaviour.

See `../CURSOR_PROMPT.md` for the complete integration brief. This is an artwork and handoff kit, not a tested integration with the website.

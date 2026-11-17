#!/usr/bin/env python3
"""Regenerate the wordmark SDF after changing its licensed outline.

Requires CairoSVG, NumPy, Pillow and SciPy in the developer's Python environment.
The distance encoding is shared with GlassWordmark.astro: 128 is the edge,
with an 80-pixel signed range at 1024×654.
"""
from pathlib import Path
import io
import re

import cairosvg
import numpy as np
from PIL import Image
from scipy.ndimage import distance_transform_edt

root = Path(__file__).resolve().parents[1]
component = (root / 'src/components/home/GlassWordmark.astro').read_text()
match = re.search(r'<path id="rift-line" class="wordmark-line" d="([^"]+)', component)
if not match:
    raise SystemExit('Could not find the wordmark outline.')
svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-250 -2400 5800 3700"><path d="{match.group(1)}" fill="white"/></svg>'
png = cairosvg.svg2png(bytestring=svg.encode(), output_width=1024, output_height=654)
mask = np.asarray(Image.open(io.BytesIO(png)).convert('RGBA'))[:, :, 3] > 127
distance = np.where(mask, distance_transform_edt(mask), -distance_transform_edt(~mask))
encoded = np.clip(np.rint(128 + distance * 255 / 80), 0, 255).astype(np.uint8)
# Alpha is numerical data and must not undergo image color-space conversion.
rgba = np.full((*encoded.shape, 4), 255, dtype=np.uint8)
rgba[:, :, 3] = encoded
Image.fromarray(rgba).save(root / 'src/assets/glass/rift-distance.png', optimize=True)

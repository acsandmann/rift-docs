---
title: Scrolling layout
description: "Settings for the scrolling-column layout and its optional trackpad gestures."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.6-1-g9b4f133-dirty.
-->

Settings for the scrolling-column layout and its optional trackpad gestures.

See [Scrolling](/rift-docs/layouts/scrolling/) for column navigation and multiple-display limitations.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

```toml
[settings.layout]
mode = "scrolling"

[settings.layout.scrolling]
column_width_ratio = 0.7
alignment = "center"
```

## [settings.layout.scrolling]

Options specific to the Scrolling layout.

### `window_insertion_point`

Override the layout-wide insertion point for Scrolling. Leave it unset to inherit `[settings.layout].window_insertion_point`.

**Type:** `next_to_selection` or `end_of_tree` (optional) · **Default:** Not set

### `animate`

Override animation only for Scrolling workspaces. Leave it unset to inherit `settings.animate`.

**Type:** boolean (optional) · **Default:** Not set

### `column_width_ratio`

Normal width of a column as a fraction of the tiling area. It must stay between `min_column_width_ratio` and `max_column_width_ratio`.

**Type:** number · **Default:** `0.7`

### `min_column_width_ratio`

Smallest column width allowed by resize commands, from `0.0` through `1.0`.

**Type:** number · **Default:** `0.3`

### `max_column_width_ratio`

Largest column width allowed by resize commands, from `0.0` through `1.0`.

**Type:** number · **Default:** `0.9`

### `alignment`

Position used when aligning the focused column: left edge, center, or right edge. `focus_navigation_style` determines when that alignment is applied.

**Type:** `left` or `center` or `right` · **Default:** `"center"`

### `focus_navigation_style`

Choose how horizontal focus reveals a column. `niri` scrolls only as needed in the navigation direction; `anchored` always places the focused column at the chosen `alignment`.

**Type:** `niri` or `anchored` · **Default:** `"niri"`

## [settings.layout.scrolling.gestures]

Optional horizontal gestures for moving between columns in a Scrolling workspace. The finger count is configurable.

### `enabled`

Enable horizontal swipes for moving between columns in a Scrolling workspace.

**Type:** boolean · **Default:** `false`

### `invert_horizontal`

Reverse the meaning of left and right column swipes.

**Type:** boolean · **Default:** `false`

### `vertical_tolerance`

Allowed vertical finger movement while recognizing the start of a column scroll. Measured in trackpad coordinates: `0.4` and `40` both mean 40% of the trackpad height.

**Type:** number · **Default:** `0.4`

### `fingers`

Number of fingers required for a column swipe.

**Type:** whole number · **Default:** `3`

### `distance_pct`

Accumulated horizontal finger travel before Rift sends a scroll update, measured in trackpad coordinates. Smaller values send updates more often. Rift clamps the value to `0.01`–`1.0`.

**Type:** number · **Default:** `0.08`

### `propagate_to_workspace_swipe`

After reaching the end of the column strip, continue the gesture into the adjacent virtual workspace.

**Type:** boolean · **Default:** `false`

### `workspace_switch_threshold`

Overscroll, in normalized steps, required before the gesture switches workspaces.

**Type:** number · **Default:** `0.15`

---
title: Scrolling layout
description: "Settings for the scrolling-column layout and its optional trackpad gestures."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.5-12-gbeeac0e-dirty.
-->

Settings for the scrolling-column layout and its optional trackpad gestures.

The [Scrolling layout guide](/rift-docs/layouts/scrolling/) explains how the ratios feel on screen.

:::note[Examples are config fragments]
Merge these examples into your config. If a table already exists, add or change its fields there; do not repeat its header. A complete custom file requires both `[settings]` and `[keys]`, and its `[keys]` table must contain every shortcut you want Rift to register.
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

```toml
[settings.layout.scrolling]
column_width_ratio = 0.7
```

### `min_column_width_ratio`

Smallest column width allowed by resize commands, from `0.0` through `1.0`.

**Type:** number · **Default:** `0.3`

```toml
[settings.layout.scrolling]
min_column_width_ratio = 0.3
```

### `max_column_width_ratio`

Largest column width allowed by resize commands, from `0.0` through `1.0`.

**Type:** number · **Default:** `0.9`

```toml
[settings.layout.scrolling]
max_column_width_ratio = 0.9
```

### `alignment`

Position used when aligning the focused column: left edge, center, or right edge. `focus_navigation_style` determines when that alignment is applied.

**Type:** `left` or `center` or `right` · **Default:** `"center"`

```toml
[settings.layout.scrolling]
alignment = "center"
```

### `focus_navigation_style`

Choose how horizontal focus reveals a column. `niri` scrolls only as needed in the navigation direction; `anchored` always places the focused column at the chosen `alignment`.

**Type:** `niri` or `anchored` · **Default:** `"niri"`

```toml
[settings.layout.scrolling]
focus_navigation_style = "niri"
```

## [settings.layout.scrolling.gestures]

Optional horizontal gestures for moving between columns in a Scrolling workspace. The finger count is configurable.

### `enabled`

Enable horizontal swipes for moving between columns in a Scrolling workspace.

**Type:** boolean · **Default:** `false`

```toml
[settings.layout.scrolling.gestures]
enabled = false
```

### `invert_horizontal`

Reverse the meaning of left and right column swipes.

**Type:** boolean · **Default:** `false`

```toml
[settings.layout.scrolling.gestures]
invert_horizontal = false
```

### `vertical_tolerance`

Maximum vertical movement allowed for a horizontal column swipe. Use a normalized fraction from `0.0` to `1.0`, or a percentage from `0` to `100`.

**Type:** number · **Default:** `0.4`

```toml
[settings.layout.scrolling.gestures]
vertical_tolerance = 0.4
```

### `fingers`

Number of fingers required for a column swipe.

**Type:** whole number · **Default:** `3`

```toml
[settings.layout.scrolling.gestures]
fingers = 3
```

### `distance_pct`

Normalized horizontal distance required before a column change commits.

**Type:** number · **Default:** `0.08`

```toml
[settings.layout.scrolling.gestures]
distance_pct = 0.08
```

### `propagate_to_workspace_swipe`

After reaching the end of the column strip, continue the gesture into the adjacent virtual workspace.

**Type:** boolean · **Default:** `false`

```toml
[settings.layout.scrolling.gestures]
propagate_to_workspace_swipe = false
```

### `workspace_switch_threshold`

Overscroll, in normalized steps, required before the gesture switches workspaces.

**Type:** number · **Default:** `0.15`

```toml
[settings.layout.scrolling.gestures]
workspace_switch_threshold = 0.15
```

---
title: Layouts
description: "Choose a default layout and tune spacing, insertion, and layout-specific behavior."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.6-8-gb3e916e-dirty.
-->

Choose a default layout and tune spacing, insertion, and layout-specific behavior.

Compare [layouts](/rift-docs/layouts/) before choosing a mode.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

```toml
[settings.layout]
mode = "master_stack"

[settings.layout.gaps.inner]
horizontal = 8.0
vertical = 8.0
```

## [settings.layout]

Choose the default layout and set options shared by every layout. A layout-specific table can override a shared option.

### `window_insertion_point`

Where Rift inserts a newly managed window. A layout-specific value wins; if neither value is set, Rift uses `next_to_selection`.

**Type:** `next_to_selection` or `end_of_tree` (optional) · **Default:** Not set

### `mode`

Layout used for a workspace that does not match a `virtual_workspaces.workspace_rules` entry.

**Type:** `traditional` or `bsp` or `stack` or `master_stack` or `scrolling` · **Default:** `"traditional"`

## [settings.layout.traditional]

Options specific to the Traditional tree layout.

### `window_insertion_point`

Override the layout-wide insertion point for Traditional. Leave it unset to inherit `[settings.layout].window_insertion_point`.

**Type:** `next_to_selection` or `end_of_tree` (optional) · **Default:** Not set

### `equalize_nodes`

Give a new window the average share of its siblings when inserting it. When false, split the selected window’s share instead. Manual resizing remains available.

**Type:** boolean · **Default:** `true`

## [settings.layout.bsp]

Options specific to the BSP layout. Shared layout settings can still be set here.

### `window_insertion_point`

Override the layout-wide insertion point for BSP. Leave it unset to inherit `[settings.layout].window_insertion_point`.

**Type:** `next_to_selection` or `end_of_tree` (optional) · **Default:** Not set

## [settings.layout.stack]

Options specific to the Stack layout.

### `window_insertion_point`

Override the layout-wide insertion point for Stack. Leave it unset to inherit `[settings.layout].window_insertion_point`.

**Type:** `next_to_selection` or `end_of_tree` (optional) · **Default:** Not set

### `stack_offset`

Number of pixels by which each window is offset from the previous window in a stack. Must not be negative.

**Type:** number · **Default:** `40`

### `default_orientation`

Direction of a new stack. `perpendicular` uses the axis across its parent, `same` uses the parent's axis, and `horizontal` or `vertical` forces an axis.

**Type:** `perpendicular` or `same` or `horizontal` or `vertical` · **Default:** `"perpendicular"`

## [settings.layout.master_stack]

Options specific to the Master-stack layout.

### `window_insertion_point`

Override the layout-wide insertion point for Master-stack. Leave it unset to inherit `[settings.layout].window_insertion_point`.

**Type:** `next_to_selection` or `end_of_tree` (optional) · **Default:** Not set

### `master_ratio`

Fraction of the tiling area reserved for the master side. Valid range: `0.05` through `0.95`.

**Type:** number · **Default:** `0.6`

### `master_count`

Number of windows kept on the master side. Must be at least `1`.

**Type:** whole number · **Default:** `1`

### `master_side`

Edge occupied by the master side: `left`, `right`, `top`, or `bottom`.

**Type:** `left` or `right` or `top` or `bottom` · **Default:** `"left"`

### `new_window_placement`

Where to insert a new window after the master area is full. `master` puts it in the main area and moves an existing window to the stack; `stack` keeps it in the supporting area; `focused` uses the focused area. Rift maintains `master_count`.

**Type:** `master` or `stack` or `focused` · **Default:** `"master"`

### `master_arrangement`

Optional direction used to divide multiple windows inside the master side. When omitted, Rift uses the direction perpendicular to the master/stack split.

**Type:** `horizontal` or `vertical` (optional) · **Default:** Not set

### `stack_arrangement`

Optional direction used to divide windows inside the stack side. When omitted, Rift uses the direction perpendicular to the master/stack split.

**Type:** `horizontal` or `vertical` (optional) · **Default:** Not set

## [settings.layout.gaps]

Space between tiled windows and the screen edges, plus space between neighboring windows.

### `per_display`

Optional display-specific gap overrides keyed by display UUID. An override replaces the complete outer or inner gap group for that display.

**Type:** map of text to gap override tables · **Default:** Empty table

Run `rift-cli query displays` and replace `YOUR-DISPLAY-UUID` with the display UUID. Set any of `top`, `bottom`, `left`, and `right` in an `outer` table, or `horizontal` and `vertical` in an `inner` table. Omitted values within an overridden group become `0`; omitting the entire group inherits the global group.

```toml
[settings.layout.gaps.per_display."YOUR-DISPLAY-UUID".outer]
top = 8.0
bottom = 8.0
left = 16.0
right = 16.0
```

## [settings.layout.gaps.outer]

Insets between the tiled area and each edge of the display. Gap values must not be negative.

### `top`

Gap at the top of the screen

**Type:** number · **Default:** `0`

### `left`

Gap at the left of the screen

**Type:** number · **Default:** `0`

### `bottom`

Gap at the bottom of the screen

**Type:** number · **Default:** `0`

### `right`

Gap at the right of the screen

**Type:** number · **Default:** `0`

## [settings.layout.gaps.inner]

Space between neighboring tiled windows. Gap values must not be negative.

### `horizontal`

Horizontal gap between windows

**Type:** number · **Default:** `0`

### `vertical`

Vertical gap between windows

**Type:** number · **Default:** `0`

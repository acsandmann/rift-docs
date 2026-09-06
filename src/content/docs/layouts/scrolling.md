---
title: Scrolling layout
description: A horizontal strip of windows inspired by niri.
---

Scrolling layout arranges windows as a horizontal strip of columns. Rift keeps the focused column in view, so you can work with many windows without shrinking every window until it becomes difficult to use.

The TOML below is a fragment to add to an existing config; it is not a complete config file.

## How it works

Imagine a long row of columns that can extend past both sides of your display. A column may contain one window or several windows stacked vertically. Moving focus left or right scrolls the row until the selected column is visible; moving up or down changes the selected window within a column.

:::caution[Multiple displays]
With Scrolling, arrange multiple displays in a vertical stack in macOS. Because macOS places all display coordinates in one shared space, side-by-side displays can allow off-screen columns to leak onto another display.
:::

## Set it up

```toml
[settings.layout]
mode = "scrolling"

[settings.layout.scrolling]
column_width_ratio = 0.7
alignment = "center"
focus_navigation_style = "niri"
```

`column_width_ratio = 0.7` gives a column 70% of the tiling area’s width. `min_column_width_ratio` and `max_column_width_ratio` bound resizing.

The default `niri` navigation scrolls only enough to reveal the focused column. Use `anchored` to place it consistently at `alignment`: `left`, `center`, or `right`.

## Gestures

Scrolling has its own optional horizontal gesture settings. You can enable them under `[settings.layout.scrolling.gestures]`. With `propagate_to_workspace_swipe = true`, swiping beyond the end of the strip can continue into the next or previous virtual workspace.

See the [Scrolling reference](/rift-docs/reference/configuration/scrolling/) for defaults, resizing limits, and gesture thresholds.

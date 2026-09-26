---
title: Scrolling layout
description: A horizontal strip of windows inspired by niri.
---

Scrolling layout arranges windows as a horizontal strip of columns. Rift keeps the focused column in view, so many windows can remain open without shrinking every window.

The TOML below is a fragment to add to an existing config; it is not a complete config file.

## Behavior

Imagine a long row of columns that can extend past both sides of your display. A column may contain one window or several windows stacked vertically. Moving focus left or right scrolls the row until the selected column is visible; moving up or down changes the selected window within a column.

:::caution[Multiple displays]
With Scrolling, arrange multiple displays in a vertical stack in macOS. Because macOS places all display coordinates in one shared space, side-by-side displays can allow off-screen columns to leak onto another display.
:::

## Horizontal mouse warp

If your displays are physically side-by-side, horizontal mouse warp lets the pointer cross between them horizontally while keeping the vertical macOS arrangement recommended above.

```text
macOS arrangement:    Physical arrangement:
┌─────┐              ┌─────┐ ┌─────┐
│  A  │              │  A  │ │  B  │
└─────┘              └─────┘ └─────┘
┌─────┐
│  B  │
└─────┘
```

Add this under `[settings]` (not `[settings.layout.scrolling]`):

```toml
[settings]
horizontal_mouse_warp = "top-to-bottom"
```

With `top-to-bottom`, higher displays behave as being farther left: moving right through A’s edge enters B, and moving left through B’s edge returns to A. Use `bottom-to-top` to reverse that order. With more displays, the pointer crosses to the next logical neighbor; it does not wrap from the last display to the first.

Crossing also works while dragging. The pointer keeps its distance from the source display’s top edge, so crossing into a shorter display only works where the corresponding vertical position exists. This changes pointer crossing only; it does not change the macOS display arrangement.

The feature is disabled by default. Remove the setting to disable it again. See [`horizontal_mouse_warp`](/rift-docs/reference/configuration/general/#horizontal_mouse_warp) for the configuration reference.

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

`preserve_window_sizes = true` (the default) keeps each window's existing width when it enters a scrolling workspace, including at startup and after a workspace move. Widths outside the minimum and maximum column ratios are clamped. Set it to `false` to use the configured column width instead.

The default `niri` navigation scrolls only enough to reveal the focused column. Use `anchored` to place it consistently at `alignment`: `left`, `center`, or `right`.

## Gestures

Scrolling has its own optional horizontal gesture settings. You can enable them under `[settings.layout.scrolling.gestures]`. With `propagate_to_workspace_swipe = true`, swiping beyond the end of the strip can continue into the next or previous virtual workspace.

See the [Scrolling reference](/rift-docs/reference/configuration/scrolling/) for defaults, resizing limits, and gesture thresholds.

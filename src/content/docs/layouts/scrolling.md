---
title: Scrolling layout
description: A horizontal strip of windows inspired by niri.
---

Scrolling layout arranges windows as a horizontal strip of columns. Rift keeps the focused column in view, so you can work with many windows without shrinking every window until it becomes difficult to use.

The TOML below is a fragment to add to an existing config; it is not a complete config file.

## How it works

Imagine a long row of columns that can extend past both sides of your display. A column may contain one window or several windows stacked vertically. Moving focus left or right scrolls the row until the selected column is visible; moving up or down changes the selected window within a column.

`column_width_ratio` controls the normal width of the focused column. `alignment` controls where it sits on screen. With `focus_navigation_style = "niri"`, Rift reveals only as much of the row as needed; `anchored` keeps the focused column aligned consistently.

:::caution[Multiple displays]
With Scrolling, arrange multiple displays in a vertical stack in macOS. Because macOS places all display coordinates in one shared space, side-by-side displays can allow off-screen columns to leak onto another display.
:::

## Adjusting the strip

- `column_width_ratio` sets the usual width of the focused column as a fraction of the screen.
- `alignment` chooses whether the focused column sits at the `left`, `center`, or `right`.
- `focus_navigation_style` can reveal only what is needed (`niri`) or keep the focused column anchored to the chosen alignment (`anchored`).
- `min_column_width_ratio` and `max_column_width_ratio` limit resizing.

```toml
[settings.layout]
mode = "scrolling"

[settings.layout.scrolling]
column_width_ratio = 0.7
alignment = "center"
focus_navigation_style = "niri"
```

## Gestures

Scrolling has its own optional horizontal gesture settings. You can enable them under `[settings.layout.scrolling.gestures]`. With `propagate_to_workspace_swipe = true`, swiping beyond the end of the strip can continue into the next or previous virtual workspace.

## When to choose it

Use Scrolling when you work with many windows but want the active one to stay large and comfortable. It works especially well for reading, design, research, and workflows where you move through windows one at a time. It can feel less natural if you need to compare many windows side by side.

See the [Scrolling reference](/rift-docs/reference/configuration/scrolling/) for defaults, resizing limits, and gesture thresholds.

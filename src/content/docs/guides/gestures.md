---
title: Gestures
description: Using trackpad gestures with Rift.
---

Rift supports horizontal trackpad gestures for workspace switching and Scrolling-layout navigation. Both are disabled by default. The layout under the pointer determines which gesture Rift uses.

Add these settings to your config. If a table already exists, edit it instead of repeating its header.

## Swipe between workspaces

For layouts other than Scrolling:

```toml
[settings.gestures]
enabled = true
fingers = 3
skip_empty = false
```

Swipe left for the next workspace and right for the previous one. `skip_empty = false` lets you reach workspaces before moving windows into them; set it to `true` to skip workspaces with no windows.

## Scroll through columns

On a Scrolling workspace, enable column scrolling:

```toml
[settings.layout.scrolling.gestures]
enabled = true
fingers = 3
```

Add `propagate_to_workspace_swipe = true` in this table to switch workspaces when you scroll past the end of the column strip.

## Change gesture behavior

- Reverse workspace swipes with `invert_horizontal_swipe` in `[settings.gestures]`, or column scrolling with `invert_horizontal` in the Scrolling gesture table.
- `distance_pct` measures finger travel on the trackpad, not movement across the display. Smaller values need less travel.
- Keep `[settings.gestures].consume_dock_swipe = true` to prevent macOS or the foreground app from also handling a gesture Rift consumes. This applies to both kinds of gesture.

See the [workspace gesture reference](/rift-docs/reference/configuration/gestures/) or [Scrolling reference](/rift-docs/reference/configuration/scrolling/) for thresholds and defaults.

## When a gesture does not work

Check that the Space is activated, the gesture settings for its layout are enabled, and the configured finger count matches your gesture. On multiple displays, place the pointer over the workspace you want to use.

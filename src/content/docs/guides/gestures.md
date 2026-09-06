---
title: Gestures
description: Using trackpad gestures with Rift.
---
Rift has two separate horizontal trackpad gestures: one switches virtual workspaces, and one moves between columns in the Scrolling layout. Both are off by default.

The examples below are fragments to add to an existing config. Keep the required `[settings]` and `[keys]` tables in the complete file.

## Enable workspace swipes

Add this to your config:

```toml
[settings.gestures]
enabled = true
fingers = 3
skip_empty = false
```

Rift uses the swipe direction to choose the previous or next workspace. `skip_empty = true` skips workspaces with no windows.

Set `skip_empty = false` while testing so you can reach workspaces before moving windows into them. For the complete list of controls, see the [gesture reference](/rift-docs/reference/configuration/gestures/).

## Useful options

- `invert_horizontal_swipe = true` reverses left and right.
- `consume_dock_swipe = true` prevents the same gesture from also being handled by macOS or the foreground app.
- `distance_pct` is the horizontal distance needed to commit, as a fraction of the display width. The default `0.08` is about eight percent.
- `swipe_vertical_tolerance` controls how much vertical movement is allowed. It accepts a fraction such as `0.4` or a percentage such as `40`.
- `haptics_enabled` enables feedback when the swipe commits.

## Scrolling-layout gestures

The scrolling layout has a separate gesture setting. It moves between columns instead of workspaces:

```toml
[settings.layout.scrolling.gestures]
enabled = true
fingers = 3
```

You can set `propagate_to_workspace_swipe = true` if swiping past the end of the column strip should continue into the next or previous workspace.

## If gestures do not work

Check that the correct section is enabled, the configured finger count matches, and the current macOS Space is activated. If macOS or the foreground app also responds, keep `consume_dock_swipe = true` in `[settings.gestures]`.

---
title: Gestures
description: "Trackpad swipes between virtual workspaces. Disabled by default."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.6-1-g9b4f133-dirty.
-->

Trackpad swipes between virtual workspaces. Disabled by default.

On Scrolling workspaces, Rift uses the separate [column gesture settings](/rift-docs/reference/configuration/scrolling/).

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

```toml
[settings.gestures]
enabled = true
fingers = 3
```

## [settings.gestures]

Optional horizontal gestures for switching virtual workspaces. The finger count is configurable.

### `enabled`

Enable horizontal trackpad swipes for switching virtual workspaces.

**Type:** boolean · **Default:** `false`

### `consume_dock_swipe`

Prevent macOS or the foreground app from also handling a swipe Rift consumed.

**Type:** boolean · **Default:** `true`

### `invert_horizontal_swipe`

Reverse the meaning of left and right swipes.

**Type:** boolean · **Default:** `false`

### `swipe_vertical_tolerance`

Allowed vertical finger travel, measured in trackpad coordinates. `0.4` and `40` both mean 40% of the trackpad height; smaller values require a straighter swipe.

**Type:** number · **Default:** `0.4`

### `skip_empty`

Skip workspaces with no windows when swiping.

**Type:** boolean · **Default:** `false`

Omitting the entire `[settings.gestures]` table gives `true`; including the table but omitting this field gives `false`.

### `fingers`

Number of fingers required for a workspace swipe.

**Type:** whole number · **Default:** `3`

### `distance_pct`

Horizontal finger travel needed to switch workspaces, measured in trackpad coordinates. `0.08` is roughly 8% of the trackpad width. Rift clamps the value to `0.01`–`1.0`.

**Type:** number · **Default:** `0.08`

### `haptics_enabled`

Provide a tactile pulse when a workspace swipe is recognized.

**Type:** boolean · **Default:** `true`

### `haptic_pattern`

Pattern of tactile feedback used for workspace swipes.

**Type:** `generic` or `alignment` or `level_change` · **Default:** `"level_change"`

---
title: Gestures
description: "Horizontal trackpad swipes between virtual workspaces. The default finger count is three and can be changed."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.5-12-gbeeac0e-dirty.
-->

Horizontal trackpad swipes between virtual workspaces. The default finger count is three and can be changed.

Gestures are off by default; enable them only after keyboard navigation is working.

:::note[Examples are config fragments]
Merge these examples into your config. If a table already exists, add or change its fields there; do not repeat its header. A complete custom file requires both `[settings]` and `[keys]`, and its `[keys]` table must contain every shortcut you want Rift to register.
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

```toml
[settings.gestures]
enabled = false
```

### `consume_dock_swipe`

Prevent macOS or the foreground app from also handling a swipe Rift consumed.

**Type:** boolean · **Default:** `true`

```toml
[settings.gestures]
consume_dock_swipe = true
```

### `invert_horizontal_swipe`

Reverse the meaning of left and right swipes.

**Type:** boolean · **Default:** `false`

```toml
[settings.gestures]
invert_horizontal_swipe = false
```

### `swipe_vertical_tolerance`

Maximum vertical movement allowed for a horizontal swipe. Use a normalized fraction from `0.0` to `1.0`, or a percentage from `0` to `100`; smaller values require a straighter swipe.

**Type:** number · **Default:** `0.4`

```toml
[settings.gestures]
swipe_vertical_tolerance = 0.4
```

### `skip_empty`

Skip workspaces with no windows when swiping.

**Type:** boolean · **Default:** `false`

If the entire `[settings.gestures]` table is omitted, this is `true`. With the table present and this field omitted, it is `false`. Set it explicitly when enabling gestures.

```toml
[settings.gestures]
skip_empty = false
```

### `fingers`

Number of fingers required for a workspace swipe.

**Type:** whole number · **Default:** `3`

```toml
[settings.gestures]
fingers = 3
```

### `distance_pct`

Normalized horizontal distance required before a swipe commits. `0.08` means roughly eight percent of the display width.

**Type:** number · **Default:** `0.08`

```toml
[settings.gestures]
distance_pct = 0.08
```

### `haptics_enabled`

Provide haptic feedback when a swipe commits.

**Type:** boolean · **Default:** `true`

```toml
[settings.gestures]
haptics_enabled = true
```

### `haptic_pattern`

Haptic pattern used when a swipe commits.

**Type:** `generic` or `alignment` or `level_change` · **Default:** `"level_change"`

```toml
[settings.gestures]
haptic_pattern = "level_change"
```

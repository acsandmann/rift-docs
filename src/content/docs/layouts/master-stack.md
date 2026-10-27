---
title: Master-stack layout
description: Keep a primary window beside a supporting group.
---

Master-stack divides the tiled area into two parts. With multiple windows and the default settings, one occupies the left 60% and the others share the right side. The supporting “stack” is tiled; it does not overlap like the separate Stack layout.

For example, keep an editor in the main area and terminals beside it. If you do not need a fixed main area, try [BSP](/rift-docs/layouts/bsp/).

## Set it up

Merge this fragment into your existing config:

```toml
[settings.layout]
mode = "master_stack"

[settings.layout.master_stack]
master_ratio = 0.6
master_count = 1
master_side = "left"
new_window_placement = "stack"
```

With this configuration, new windows go into the supporting area once the main area is full. The default is different: new windows enter the main area.

## Decide where new windows go

The default `new_window_placement` is `master`. A new window enters the master area, and an existing window moves to the stack to maintain `master_count`.

| Value | When the master area is full |
| --- | --- |
| `master` | Put the new window in the master area and move an existing one to the stack |
| `stack` | Put the new window in the supporting area |
| `focused` | Insert into the area containing the focused window, then maintain the master count |

## Adjust the proportions

`master_ratio` accepts `0.05` through `0.95`. With the master on the left or right, it controls width; with the master on the top or bottom, it controls height. `master_count` must be at least `1`.

For the full set of controls, including how windows are divided inside each area, see the [layout reference](/rift-docs/reference/configuration/layouts/).

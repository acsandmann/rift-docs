---
title: Stack layout
description: Keep a group of overlapping windows large.
---

Stack overlaps windows, leaving an edge of each visible. Focus a window to bring it forward. Unlike tiled panes, each window can use most of the available space.

It is useful for a few related documents or terminals when you only need to read one at a time.

## Set it up

Merge this fragment into your existing config:

```toml
[settings.layout]
mode = "stack"

[settings.layout.stack]
stack_offset = 40.0
default_orientation = "perpendicular"
```

`stack_offset` is the spacing between successive windows along the stack’s axis, in logical pixels. A larger offset exposes more of each background window but leaves less room for its contents. `0` makes the windows overlap completely.

## Choose a stack direction

| Value | Stack direction |
| --- | --- |
| `perpendicular` | Across the parent layout’s axis; the default |
| `same` | Along the parent layout’s axis |
| `horizontal` | Force a horizontal stack |
| `vertical` | Force a vertical stack |

Rift shows tabs beside stacked windows by default. To adjust or turn off the tabs, see the [UI reference](/rift-docs/reference/configuration/ui/).

The supporting area in [Master-stack](/rift-docs/layouts/master-stack/) is a different arrangement: its windows are tiled rather than overlapped.

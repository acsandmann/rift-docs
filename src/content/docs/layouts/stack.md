---
title: Stack layout
description: Keep a group of overlapping windows large.
---

Stack overlaps windows and offsets them along one axis, leaving an edge of each window visible. Changing focus raises another window in the group without dividing the group into separate panes.

Use it for a few related documents or terminal windows when you want a large working area and quick access to the others. It is less useful when you need to read every window at once.

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

## Choose the direction

| Value | Stack direction |
| --- | --- |
| `perpendicular` | Across the parent layout’s axis; the default |
| `same` | Along the parent layout’s axis |
| `horizontal` | Force a horizontal stack |
| `vertical` | Force a vertical stack |

You can also enable an edge indicator under `[settings.ui.stack_line]`; see the [UI reference](/rift-docs/reference/configuration/ui/).

The supporting area in [Master-stack](/rift-docs/layouts/master-stack/) is a different arrangement: its windows are tiled rather than overlapped.

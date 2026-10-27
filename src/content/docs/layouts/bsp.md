---
title: BSP layout
description: Divide the screen into a tree of two-way splits.
---

BSP divides the screen into two regions, then divides those regions again as you add windows. Each region holds either a window or another split. There is no fixed primary window.

It works well when several windows should share the screen. They will not necessarily be the same size: their place in the split tree and any resizing both matter. BSP stands for binary space partitioning.

## Set it up

Merge this fragment into your existing config:

```toml
[settings.layout]
mode = "bsp"
```

Use directional focus and movement bindings to navigate the layout. The [window management guide](/rift-docs/guides/window-management/) explains those controls.

## Control new windows and spacing

New windows are inserted next to the selection by default. To append them at the end of the tree instead:

```toml
[settings.layout.bsp]
window_insertion_point = "end_of_tree"
```

BSP uses the shared inner and outer [gap settings](/rift-docs/reference/configuration/layouts/). Its insertion setting overrides the layout-wide setting.

If you want one window to consistently receive more space, try [Master-stack](/rift-docs/layouts/master-stack/). For groups with more than two children, use [Traditional](/rift-docs/layouts/traditional/).

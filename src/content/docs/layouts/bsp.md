---
title: BSP layout
description: Divide the screen into a tree of two-way splits.
---

BSP stands for **binary space partitioning**. Each split divides a region into two children, which can be windows or further splits. This creates a tiled layout without a permanent primary window.

Choose BSP when you want several terminals, a browser, and other windows to share the screen. Recursive splitting does not guarantee that every window has the same size; their positions in the tree and any resizing affect the result.

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

---
title: Traditional layout
description: Arrange windows in horizontal and vertical groups.
---

Traditional is Rift’s default layout. It arranges windows in horizontal and vertical groups. For example, you can keep an editor on the left and a terminal above a browser on the right.

Groups can contain other groups, giving you control over how the screen is divided. This structure will feel familiar if you have used i3 or Sway.

## Set it up

Merge this fragment into your existing config:

```toml
[settings.layout]
mode = "traditional"

[settings.layout.traditional]
equalize_nodes = true
```

New windows appear next to the current selection by default. `equalize_nodes = true` gives a newly inserted node the average sibling weight instead of splitting the selected node’s share. It affects insertion; it does not prevent you from resizing windows afterward.

## Work with groups

A group can contain windows and other groups. Use `ascend` to select the group containing the current window; moving or resizing the selection then affects the whole group. See [Window management](/rift-docs/guides/window-management/) and [Keybindings](/rift-docs/guides/window-management/#customize-keyboard-shortcuts) for controls.

To append new windows at the end of the tree:

```toml
[settings.layout.traditional]
window_insertion_point = "end_of_tree"
```

This overrides the layout-wide insertion setting only for Traditional. See the [layout reference](/rift-docs/reference/configuration/layouts/) for gaps and other shared options.

For a fixed primary area with supporting windows, try [Master-stack](/rift-docs/layouts/master-stack/).

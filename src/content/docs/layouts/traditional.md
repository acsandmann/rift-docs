---
title: Traditional layout
description: Arrange windows in horizontal and vertical groups.
---

Traditional is Rift’s default layout. It organizes windows into a tree of horizontal and vertical groups, so one side of your desktop can hold an editor while the other contains a terminal above a browser.

Choose it when you want to control how windows are grouped. Its tree structure will be familiar if you have used i3 or Sway.

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

A group can contain windows and other groups. Moving or resizing a selected group affects its contents together. Start with directional focus and movement, then add group commands as you need them; see [Keybindings](/rift-docs/guides/keybindings/).

To append new windows at the end of the tree:

```toml
[settings.layout.traditional]
window_insertion_point = "end_of_tree"
```

This overrides the layout-wide insertion setting only for Traditional. See the [layout reference](/rift-docs/reference/configuration/layouts/) for gaps and other shared options.

For a fixed primary area with supporting windows, try [Master-stack](/rift-docs/layouts/master-stack/).

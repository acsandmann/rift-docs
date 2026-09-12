---
title: Window management
description: How Rift manages, focuses, moves, and resizes windows.
---

Once a Space is activated, Rift arranges its tiled windows. Floating windows stay outside the layout and can be positioned freely.

## Focus, move, and resize

Focus is the window receiving keyboard input. Changing focus leaves windows in place; moving a window changes the arrangement.

With the [Quick start keymap](/rift-docs/quick-start/):

| Shortcut | Action |
| --- | --- |
| Option + H / J / K / L | Focus left / down / up / right |
| Option + Shift + H / J / K / L | Move in that direction |
| Option + Shift + Space | Toggle floating |

For resizing, add a shortcut from the [keybindings guide](/rift-docs/guides/keybindings/), or run this in Terminal:

```sh
rift-cli execute window resize-by --amount 0.05
```

Rift also tracks a selection in its layout tree: the hierarchy of windows and groups. The selection is usually a window. Commands such as `ascend` select its containing group, so movement and resizing can affect several windows together.

## Float a utility window

Floating is useful for calculators, dialogs, and small tools. To make Calculator float whenever Rift discovers it, add this rule to your config:

```toml
[[virtual_workspaces.app_rules]]
app_id = "com.apple.Calculator"
floating = true
```

See [App rules](/rift-docs/guides/app-rules/) for initial size and position settings.

## Drag to swap

Drag a tiled window over another to swap their positions. If swaps trigger too easily, increase `settings.window_snapping.drag_swap_fraction`; decrease it to require less overlap. See the [general reference](/rift-docs/reference/configuration/general/) for the threshold details.

To move windows between workspaces, see [Virtual workspaces](/rift-docs/guides/workspaces/).

---
title: Window management
description: How Rift manages, focuses, moves, and resizes windows.
---
Rift manages windows for you after the current macOS Space has been activated. It keeps tiled windows arranged, remembers which window is focused, and lets you move around without dragging everything by hand.

TOML examples on this page are fragments to add to an existing config, not complete config files.

## The basic idea

Focus is the window receiving keyboard input. Rift also tracks a selection in the layout tree. It is usually a window, but commands such as `ascend` can select a whole group; movement and resizing can then affect that group.

By default, newly encountered Spaces start inactive so Rift does not unexpectedly rearrange them. Activate the Space with the key bound to `toggle_space_activated`; this is `Alt + Z` in the bundled config. A custom config has no activation shortcut unless you define one.

## Focus and movement

Use your configured keybindings to focus a direction, then move a window or resize it. You can also try the CLI:

```sh
rift-cli execute window focus left
rift-cli execute window resize-by --amount 0.05
```

The exact key combinations are defined in `[keys]`; the command is more important than the shortcut because you can bind it to whatever feels natural.

In a keybinding, use `move_focus` to change the selection and `move_node` to move the selected window or group. The CLI names the same operations by subcommand, so copy examples from the keybinding guide when editing TOML rather than pasting a CLI command into `[keys]`.

## Tiled and floating windows

Tiled windows participate in the current layout. Floating windows can be moved and resized freely, which is useful for calculators, dialogs, palettes, and small utility windows.

You can toggle the focused window between tiled and floating mode with `toggle_window_floating`. App rules can also make a window float automatically when it opens.

```toml
[[virtual_workspaces.app_rules]]
app_id = "com.apple.Calculator"
floating = true
size = { w = 420.0, h = 680.0 }
```

## Dragging to swap

Rift can swap tiled windows when you drag one over another. `settings.window_snapping.drag_swap_fraction` controls how much overlap is needed before the swap happens. Lower it for easier swaps; raise it if accidental swaps are common. The threshold compares the overlapping area with the combined area of both windows, rather than a percentage of just one window.

## Useful commands

```sh
rift-cli query windows
rift-cli query workspaces
rift-cli execute window focus left
rift-cli execute workspace move-window 1
```

For automatic placement, see the [App rules guide](/rift-docs/guides/app-rules/). For keyboard syntax, see [Keybindings](/rift-docs/guides/keybindings/); for terminal commands, see the [CLI reference](https://github.com/acsandmann/rift/wiki/CLI).

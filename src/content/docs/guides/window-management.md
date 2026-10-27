---
title: Windows and controls
description: Move and resize windows, customize shortcuts, and set up gestures.
---

When you activate a Space, Rift arranges its windows according to the current layout. You can also make a window float, which lets you position it freely.

## Focus, move, and resize

The focused window receives keyboard input. Change focus to work in another window; move a window to change the arrangement.

The [Quick start keymap](/rift-docs/quick-start/) includes these shortcuts:

| Shortcut | Action |
| --- | --- |
| Option + H / J / K / L | Focus left / down / up / right |
| Option + Shift + H / J / K / L | Move in that direction |
| Option + Shift + Space | Toggle floating |

For resizing, add a shortcut using the keybindings section below, or run this in Terminal:

```sh
rift-cli execute window resize-by --amount 0.05
```

Rift also tracks a selection in the layout. Usually it is a single window, but `ascend` selects the group containing it. You can then move or resize the group together.

## Float a utility window

Floating is useful for calculators, dialogs, and small tools. To make Calculator float whenever Rift discovers it, add this rule to your config:

```toml
[[virtual_workspaces.app_rules]]
app_id = "com.apple.Calculator"
floating = true
```

See [App rules](/rift-docs/guides/app-rules/) for initial size and position settings.

## Drag tiled windows

Drag a tiled window by its title bar and move it over another window. A preview shows where the window will go. By default, dropping it in the center swaps the two windows; dropping it near an edge moves it to that side.

You can also hold Fn and drag with the primary mouse button. To change the modifier or drop behavior, see the [drag-and-drop reference](/rift-docs/reference/configuration/drag-drop/).

To move windows between workspaces, see [Workspaces and displays](/rift-docs/guides/workspaces/).

## Customize keyboard shortcuts

Keybindings let you control Rift from the keyboard. In your config’s `[keys]` table, put the shortcut on the left and the command on the right.

:::caution[Your keymap is not merged]
A custom `[keys]` table replaces the bundled keymap. Keep an activation binding such as `"Alt + Z" = "toggle_space_activated"`. An empty table disables keyboard controls; you can still activate a Space from Terminal with `rift-cli execute space toggle-activated`.
:::

### Add a shortcut

Add these shortcuts to your existing `[keys]` table. Keep the other shortcuts you still need.

Put each shortcut in quotes. Commands without arguments are quoted too; commands with arguments use braces:

```toml
[keys]
"Alt + Z" = "toggle_space_activated"
"Alt + H" = { move_focus = "left" }
"Alt + Shift + H" = { move_node = "left" }
"Alt + R" = { resize_window_grow = "horizontal" }
```

`Alt` is Option on macOS and `Meta` is Command. Rift also accepts `Ctrl` or `Control`, `Shift`, and arrow names such as `Left` or `ArrowLeft`. Spacing around `+` is optional for ordinary shortcuts. Named modifier combinations require the form `main + H`, with spaces around `+`.

### Everyday commands

| Goal | Command value |
| --- | --- |
| Focus a neighboring window | `{ move_focus = "left" }` |
| Move the selected window or group | `{ move_node = "left" }` |
| Switch virtual workspace | `{ switch_to_workspace = 0 }` |
| Move a window to a workspace | `{ move_window_to_workspace = 0 }` |
| Toggle floating | `"toggle_window_floating"` |
| Fill the screen with the selection | `"toggle_fullscreen"` |
| Grow along the nearest useful split | `{ resize_window_grow = "smart" }` |
| Change the active workspace's layout | `{ set_workspace_layout = { mode = "scrolling" } }` |

Directions are `left`, `right`, `up`, or `down`. Workspace indexes are zero-based, so `0` is the first workspace.

### Reusable modifiers

If you use the same modifiers in several shortcuts, give the combination a name:

```toml
[modifier_combinations]
main = "Alt + Shift"

[keys]
"main + H" = { move_focus = "left" }
"main + L" = { move_focus = "right" }
```

### Apply and diagnose changes

With hot reload enabled, saving a valid config updates the keymap. You can also reload it explicitly:

```sh
rift-cli execute config reload
```

If reload fails, check the reported command or shortcut. Rift keeps the previous configuration until the new one passes validation.

### More commands

The [bundled config](https://github.com/acsandmann/rift/blob/main/rift.default.toml) lists the starter shortcuts and includes more command examples. The [CLI reference](/rift-docs/reference/cli/) covers terminal commands; CLI syntax and TOML keybinding syntax are related, but they are not interchangeable.

## Trackpad gestures

You can swipe on your trackpad to switch workspaces or move through columns in the Scrolling layout. Both gestures are off by default. Rift uses the layout under your pointer to decide which gesture to handle.

Add the settings you want to your config. If a table already exists, add the fields to that table instead of repeating its header.

### Swipe between workspaces

To switch workspaces in layouts other than Scrolling, add:

```toml
[settings.gestures]
enabled = true
fingers = 3
skip_empty = false
```

Swipe left for the next workspace and right for the previous one. `skip_empty = false` lets you reach workspaces before moving windows into them; set it to `true` to skip workspaces with no windows.

### Scroll through columns

To move through columns in a Scrolling workspace, add:

```toml
[settings.layout.scrolling.gestures]
enabled = true
fingers = 3
```

Add `propagate_to_workspace_swipe = true` in this table to switch workspaces when you scroll past the end of the column strip.

### Change gesture behavior

- Reverse workspace swipes with `invert_horizontal_swipe` in `[settings.gestures]`, or column scrolling with `invert_horizontal` in the Scrolling gesture table.
- `distance_pct` measures finger travel on the trackpad, not movement across the display. Smaller values need less travel.
- Keep `[settings.gestures].consume_dock_swipe = true` to prevent macOS or the foreground app from also handling a gesture Rift consumes. This applies to both kinds of gesture.

See the [workspace gesture reference](/rift-docs/reference/configuration/gestures/) or [Scrolling reference](/rift-docs/reference/configuration/scrolling/) for thresholds and defaults.

### When a gesture does not work

Check that the Space is activated, the gesture settings for its layout are enabled, and the configured finger count matches your gesture. On multiple displays, place the pointer over the workspace you want to use.

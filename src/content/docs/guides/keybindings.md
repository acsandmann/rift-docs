---
title: Keybindings
description: Configure Rift keyboard shortcuts.
---
A keybinding assigns a keyboard shortcut to a command. In `[keys]`, the shortcut goes on the left and the command on the right.

:::caution[Your keymap is not merged]
A custom `[keys]` table replaces the bundled keymap. Keep an activation binding such as `"Alt + Z" = "toggle_space_activated"`. An empty table disables keyboard controls; you can still activate a Space from Terminal with `rift-cli execute space toggle-activated`.
:::

## Defining keys

Merge these examples into an existing config; keep its `[settings]` table and all shortcuts you still need.

Quote each shortcut. A command with no options is also quoted; a command with options uses braces:

```toml
[keys]
"Alt + Z" = "toggle_space_activated"
"Alt + H" = { move_focus = "left" }
"Alt + Shift + H" = { move_node = "left" }
"Alt + R" = { resize_window_grow = "horizontal" }
```

`Alt` is Option on macOS and `Meta` is Command. Rift also accepts `Ctrl` or `Control`, `Shift`, arrow names such as `Left` or `ArrowLeft`. Spacing around `+` is optional for ordinary shortcuts. Named modifier combinations require the form `main + H`, with spaces around `+`.

## Everyday commands

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

## Reusable modifiers

Modifiers are keys such as Option, Shift, and Control held with another key. Give a repeated combination a name:

```toml
[modifier_combinations]
main = "Alt + Shift"

[keys]
"main + H" = { move_focus = "left" }
"main + L" = { move_focus = "right" }
```

## Apply and diagnose changes

With hot reload enabled, saving a valid config updates the keymap. You can also reload it explicitly:

```sh
rift-cli execute config reload
```

If reload fails, read the reported command name or hotkey. Rift rejects the new config instead of partially installing its bindings.

## More commands

The checked-in [bundled config](https://github.com/acsandmann/rift/blob/main/rift.default.toml) lists Rift's starter keymap and documents additional command shapes in its comments. The [CLI reference](/rift-docs/reference/cli/) covers terminal commands; CLI syntax and TOML keybinding syntax are related, but they are not interchangeable.

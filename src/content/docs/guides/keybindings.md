---
title: Keybindings
description: Configure Rift keyboard shortcuts.
---
Keybindings are the main way to control Rift. They live in the `[keys]` table, where the key on the left is the shortcut and the value on the right is the Rift command.

:::caution[Your keymap is not merged]
Rift uses the bundled keymap only when no custom config file exists. As soon as `~/.config/rift/config.toml` exists, only the bindings in that file are registered. `[keys]` is required, and an empty `[keys]` table gives you no keyboard controls. The CLI remains available; for example, `rift-cli execute space toggle-activated` can activate the current Space while you repair the keymap.
:::

## Start with the bundled keymap

Copy the bindings you want from `rift.default.toml`, or start with a small set you understand. Include `toggle_space_activated` when `default_disable = true`, otherwise you will not be able to activate a Space from the keyboard.

## Defining keys

Merge these examples into an existing config; keep its `[settings]` table and all shortcuts you still need.

Keys are quoted strings. Commands can be simple strings or command objects with options:

```toml
[keys]
"Alt + Z" = "toggle_space_activated"
"Alt + H" = { move_focus = "left" }
"Alt + Shift + H" = { move_node = "left" }
"Alt + R" = { resize_window_grow = "horizontal" }
```

`Alt` is Option on macOS and `Meta` is Command. Rift also accepts `Ctrl` or `Control`, `Shift`, arrow names such as `Left` or `ArrowLeft`, and side-specific modifier variants. Spacing around `+` is optional for ordinary shortcuts. Named modifier combinations require the form `main + H`, with spaces around `+`.

## Everyday commands

| Goal | Command value |
| --- | --- |
| Focus a neighboring window | `{ move_focus = "left" }` |
| Move the selected window or group | `{ move_node = "left" }` |
| Switch virtual workspace | `{ switch_to_workspace = 0 }` |
| Move a window to a workspace | `{ move_window_to_workspace = 0 }` |
| Toggle floating | `"toggle_window_floating"` |
| Toggle Rift fullscreen | `"toggle_fullscreen"` |
| Grow along the nearest useful split | `{ resize_window_grow = "smart" }` |
| Change the active workspace's layout | `{ set_workspace_layout = { mode = "scrolling" } }` |

Directions are `left`, `right`, `up`, or `down`. Workspace indexes are zero-based, so `0` is the first workspace.

## Test a shortcut

Change one shortcut, reload, and try it before changing the next one. Keep related actions together in the file so it stays readable. If a key stops working, check that the command name and its options match the current default config.

## Reusable modifiers

If you repeat the same modifiers, give the combination a name:

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

## Complete command list

The checked-in [bundled config](https://github.com/acsandmann/rift/blob/main/rift.default.toml) lists Rift's starter keymap and documents additional command shapes in its comments. The [CLI reference](https://github.com/acsandmann/rift/wiki/CLI) covers terminal commands; CLI syntax and TOML keybinding syntax are related, but they are not interchangeable.

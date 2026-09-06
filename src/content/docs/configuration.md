---
title: Configuration
description: Learn the shape of Rift's TOML configuration before tuning it.
---

Rift reads `~/.config/rift/config.toml`. A custom file must contain `[settings]` and `[keys]`. Settings and sections you leave out use their defaults, but keybindings are different: your `[keys]` table replaces the bundled keymap instead of extending it. An empty table means no keyboard shortcuts are registered.

## Where settings belong

| Section | What it controls |
| --- | --- |
| `[settings]` | Animation, focus, mouse behavior, startup commands, and nested layout, gesture, and UI tables |
| `[settings.layout]` | The active layout and settings shared by layouts |
| `[keys]` | Hotkey strings mapped to Rift commands |
| `[virtual_workspaces]` | Workspace names, counts, app rules, and per-workspace layouts |
| `[modifier_combinations]` | Reusable modifier strings for keybindings |

The [configuration reference](/rift-docs/reference/configuration/) is generated from Rift’s configuration source. It is best for looking up field names, accepted values, and defaults. The guides explain when to use them.

## Add examples to an existing file

A TOML header applies to every setting below it until the next header. For example, `mode` belongs under `[settings.layout]`; it is not a top-level setting.

If an example uses a table you already have, edit that table instead of pasting a second copy of its header. Repeating `[settings.layout]` is a TOML error. Headers with double brackets, such as `[[virtual_workspaces.app_rules]]`, are different: each one adds an entry to a list.

`[settings.layout]` also creates its parent `[settings]` table, so the complete example below does not need a separate empty `[settings]` header. Optional fields are left out when you do not need them; TOML does not support `null`.

## A small, complete config

Start with activation, focus, and movement bindings before adding layout preferences:

```toml
[keys]
"Alt + Z" = "toggle_space_activated"
"Alt + H" = { move_focus = "left" }
"Alt + J" = { move_focus = "down" }
"Alt + K" = { move_focus = "up" }
"Alt + L" = { move_focus = "right" }
"Alt + Shift + H" = { move_node = "left" }
"Alt + Shift + J" = { move_node = "down" }
"Alt + Shift + K" = { move_node = "up" }
"Alt + Shift + L" = { move_node = "right" }

[settings.layout]
mode = "master_stack"

[settings.layout.gaps.outer]
top = 8.0
left = 8.0
bottom = 8.0
right = 8.0

[settings.layout.gaps.inner]
horizontal = 8.0
vertical = 8.0
```

`master_stack` gives one important window a larger area and keeps supporting windows beside it. If you prefer equal recursive splits, try `bsp`; if you want a horizontal sequence of large windows, try `scrolling`.

## Defaults worth knowing

- The default layout is `traditional`.
- With the default settings, new Spaces start inactive. The bundled config uses `Alt + Z` for activation; a custom config uses whichever key you bind to `toggle_space_activated`.
- Hot reload is enabled, so a valid saved file normally applies without a restart.
- Four virtual workspaces are created when `default_workspace_count` is omitted. Workspace names can be set explicitly.
- Gestures, menu bar indicators, stack-line indicators, and Mission Control helpers are disabled until you enable them.

The [bundled config](https://github.com/acsandmann/rift/blob/main/rift.default.toml) is useful when you want to browse Rift's starter bindings. You do not have to copy the whole file, but every shortcut you want must appear in your own `[keys]` table.

An omitted table can have different defaults from an explicitly supplied table. For example, omitting `[settings.gestures]` gives `skip_empty = true`, while including that table without `skip_empty` gives `false`. The reference calls out these exceptions.

## Reload and troubleshoot

If a saved change does not apply, ask Rift to reload the file and report any validation error:

```sh
rift-cli execute config reload
```

Unknown fields are rejected. If reload fails, fix the first reported field or value and try again; the running configuration stays unchanged. Compare the table name, type, and accepted values with the [reference](/rift-docs/reference/configuration/). The [troubleshooting guide](/rift-docs/guides/troubleshooting/) covers permission, activation, and workspace problems.

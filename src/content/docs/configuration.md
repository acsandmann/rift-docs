---
title: Configuration
description: Learn the shape of Rift's TOML configuration before tuning it.
---

Rift reads `~/.config/rift/config.toml`, a plain-text file in TOML format. A TOML table groups settings under a header such as `[settings]`. A custom file must contain `[settings]` and `[keys]`. Settings and sections you leave out use their defaults, but keybindings are different: your `[keys]` table replaces the bundled keymap instead of extending it. An empty table means no keyboard shortcuts are registered.

## Where settings belong

| Section | What it controls |
| --- | --- |
| `[settings]` | Animation, focus, startup commands, and nested drag-and-drop, layout, gesture, and UI tables |
| `[settings.drag_drop]` | Modifier-assisted window movement and tiled-window drops with previews |
| `[settings.layout]` | The active layout and settings shared by layouts |
| `[keys]` | Keyboard shortcuts and their commands |
| `[virtual_workspaces]` | Workspace names, counts, app rules, and per-workspace layouts |
| `[modifier_combinations]` | Names for combinations of keys such as Option + Shift |

Look up field names, accepted values, and defaults in the [configuration reference](/rift-docs/reference/configuration/).

## Add examples to an existing file

A TOML header applies to every setting below it until the next header. For example, `mode` belongs under `[settings.layout]`; it is not a top-level setting.

If an example uses a table you already have, edit that table instead of pasting a second copy of its header. Repeating `[settings.layout]` is a TOML error. Headers with double brackets, such as `[[virtual_workspaces.app_rules]]`, are different: each one adds an entry to a list.

`[settings.layout]` also creates its parent `[settings]` table, so files using it do not need a separate empty `[settings]` header. Optional fields are left out when you do not need them; TOML does not support `null`.

## Start from a working file

Use the complete [Quick start config](/rift-docs/quick-start/) for a small keymap, or copy the [bundled config](https://github.com/acsandmann/rift/blob/main/rift.default.toml) to retain all starter shortcuts.

## Defaults worth knowing

- The default layout is `traditional`.
- With the default settings, new Spaces start inactive. The bundled config uses `Alt + Z` for activation; a custom config uses whichever key you bind to `toggle_space_activated`.
- Hot reload is enabled, so a valid saved file normally applies without a restart.
- Four virtual workspaces are created when `default_workspace_count` is omitted. Workspace names can be set explicitly.
- Gestures, menu bar indicators, stack-line indicators, and Mission Control helpers are disabled until you enable them.

An omitted table can have different defaults from an explicitly supplied table. For example, omitting `[settings.gestures]` gives `skip_empty = true`, while including that table without `skip_empty` gives `false`. The reference calls out these exceptions.

## Change settings from the CLI

Configuration commands apply to the running instance. Save explicitly to keep a change after restarting:

```sh
rift-cli execute config set-animate true
rift-cli execute config save
```

`save` writes to the active config path, including a path selected with `--config`. It preserves unrelated comments, formatting, table order, and source keybindings such as `comb1 + H`. New files start from the bundled config template. Writes replace the file atomically, so hot reload does not read a partially written config.

`rift-cli execute config get` shows the normalized runtime config. Modifier aliases and key names may be expanded there; the displayed JSON is not a replacement for your source TOML.

## Reload and troubleshoot

If a saved change does not apply, ask Rift to reload the file and report any validation error:

```sh
rift-cli execute config reload
```

If reload fails, fix the reported field or value and try again. Rift keeps the running configuration until a replacement passes validation. See [Troubleshooting](/rift-docs/guides/troubleshooting/) if a valid change still has no effect.

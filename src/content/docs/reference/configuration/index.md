---
title: Configuration reference
description: Find Rift settings, accepted values, defaults, and examples.
editUrl: false
---

<!-- GENERATED FILE. Do not edit directly. -->

Look up a setting, check its accepted values, and copy an example into your config. This reference is generated from Rift’s configuration source; the guides explain how to combine settings for a particular task.

Source version: `v0.5.5-12-gbeeac0e-dirty`. Match the reference to the Rift version you run; newer settings may not exist in older releases.

:::caution[Keybindings are different]
A custom config must contain `[settings]` and `[keys]`. Omitted settings use defaults, but `[keys]` replaces the bundled keymap. An empty table registers no keyboard shortcuts.
:::

## Find a setting

| Category | What you can change |
| --- | --- |
| [General](/rift-docs/reference/configuration/general/) | Animation, focus, pointer behavior, activation, dragging |
| [Layouts](/rift-docs/reference/configuration/layouts/) | Mode, gaps, Traditional, BSP, Stack, Master-stack |
| [Scrolling](/rift-docs/reference/configuration/scrolling/) | Column widths, focus navigation, column gestures |
| [Gestures](/rift-docs/reference/configuration/gestures/) | Trackpad workspace navigation |
| [User interface](/rift-docs/reference/configuration/ui/) | Menu bar, stack indicators, Mission Control |
| [Virtual workspaces](/rift-docs/reference/configuration/virtual-workspaces/) | Names, count, navigation, per-workspace layouts |
| [App rules](/rift-docs/reference/configuration/app-rules/) | Match windows and control placement |
| [Keybindings](/rift-docs/reference/configuration/keybindings/) | Keyboard shortcuts and command syntax |
| [Modifiers](/rift-docs/reference/configuration/modifiers/) | Reusable shortcut combinations |
| [Startup commands](/rift-docs/reference/configuration/commands/) | Launch helpers and event subscriptions |

## How to use this reference

1. Open the category that matches what you want to change.
2. Merge the example into the matching table in your config. Do not repeat an existing table header.
3. Change the value, save, and run `rift-cli execute config reload` if hot reload is disabled or the change does not appear.

The defaults shown here apply when the containing table is present and the field is omitted. Omitting a whole table can produce different defaults; affected fields include a note. The bundled `rift.default.toml` may explicitly choose a different value. **Not set** means an optional field has no value of its own. Its description explains when Rift inherits or derives an effective value. Omit optional fields to leave them unset: TOML has no `null` value. Required fields inside an optional table are required only when that table is supplied.

The [JSON Schema](/rift-docs/schema/rift-config.schema.json) describes setting names, types, and selected bounds for editor autocomplete. It does not check hotkey syntax, command payloads, or every relationship between settings. Reload Rift to run its own validation. The `[keys]` command values are documented in the [keybindings guide](/rift-docs/guides/keybindings/). For a working starting point, use the [Quick start](/rift-docs/quick-start/) or the [bundled config](https://github.com/acsandmann/rift/blob/main/rift.default.toml).

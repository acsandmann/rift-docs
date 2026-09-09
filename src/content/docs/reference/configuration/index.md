---
title: Configuration reference
description: Find Rift settings, accepted values, defaults, and examples.
editUrl: false
---

<!-- GENERATED FILE. Do not edit directly. -->

Look up setting names, accepted values, and defaults. For your first file, use [Quick start](/rift-docs/quick-start/).

Source version: `v0.5.6-10-g48e2f1e`. Newer settings may not exist in older releases.

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

## Read defaults and types

- **Default** applies when the containing table exists but the field is omitted. Notes explain exceptions when a whole table is omitted. The bundled config may set a different value.
- **Not set** means an optional field is omitted. Its description explains any inherited value. TOML has no `null`.
- **Required** means you must supply the field when using its containing table.
- **Boolean** means `true` or `false`, without quotes. Text values need quotes; lists use square brackets.

The [JSON Schema](/rift-docs/schema/rift-config.schema.json) supports editor autocomplete and checks names, types, and some bounds. Use config reload to also check shortcuts, commands, and relationships between settings.

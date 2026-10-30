---
title: Configuration reference
description: Find Rift settings, accepted values, defaults, and examples.
editUrl: false
---

<!-- GENERATED FILE. Do not edit directly. -->

Look up setting names, accepted values, and defaults. For your first file, use [Quick start](/rift-docs/quick-start/).

Source version: `v0.7.1-19-g572b9425-dirty`. Newer settings may not exist in older releases.

:::caution[Keybindings are different]
A custom config must contain `[settings]` and `[keys]`. Omitted settings use defaults, but `[keys]` replaces the bundled keymap. An empty table registers no keyboard shortcuts.
:::

## Find a setting

<ul class="apple-topics">
<li><a href="/rift-docs/reference/configuration/general/">General</a><p>Animation, focus behavior, activation, hot reload</p></li>
<li><a href="/rift-docs/reference/configuration/drag-drop/">Drag and drop</a><p>Modifier-assisted movement and tiled-window drops</p></li>
<li><a href="/rift-docs/reference/configuration/layouts/">Layouts</a><p>Mode, gaps, Traditional, BSP, Stack, Master-stack</p></li>
<li><a href="/rift-docs/reference/configuration/scrolling/">Scrolling</a><p>Column widths, focus navigation, column gestures</p></li>
<li><a href="/rift-docs/reference/configuration/gestures/">Gestures</a><p>Trackpad workspace navigation</p></li>
<li><a href="/rift-docs/reference/configuration/ui/">User interface</a><p>Menu bar, stack indicators, Mission Control</p></li>
<li><a href="/rift-docs/reference/configuration/virtual-workspaces/">Virtual workspaces</a><p>Names, count, navigation, per-workspace layouts</p></li>
<li><a href="/rift-docs/reference/configuration/app-rules/">App rules</a><p>Match windows and control placement</p></li>
<li><a href="/rift-docs/reference/configuration/keybindings/">Keybindings</a><p>Keyboard shortcuts and command syntax</p></li>
<li><a href="/rift-docs/reference/configuration/binding-modes/">Binding modes</a><p>Named keymaps and mode transitions</p></li>
<li><a href="/rift-docs/reference/configuration/modifiers/">Modifiers</a><p>Reusable shortcut combinations</p></li>
<li><a href="/rift-docs/reference/configuration/commands/">Startup commands</a><p>Launch helpers and event subscriptions</p></li>
</ul>

## How to use this reference

1. Open the category that matches what you want to change.
2. Merge the example into the matching table in your config. Do not repeat an existing table header.
3. Change the value, save, and run `rift-cli execute config reload` if hot reload is disabled or the change does not appear.

## Read defaults and types

- Default applies when the containing table exists but the field is omitted. Notes explain exceptions when a whole table is omitted. The bundled config may set a different value.
- Not set means an optional field is omitted. Its description explains any inherited value. TOML has no `null`.
- Required means you must supply the field when using its containing table.
- Boolean means `true` or `false`, without quotes. Text values need quotes; lists use square brackets.

The [JSON Schema](/rift-docs/schema/rift-config.schema.json) supports editor autocomplete and checks names, types, and some bounds. Use config reload to also check shortcuts, commands, and relationships between settings.

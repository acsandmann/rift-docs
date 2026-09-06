---
title: Keybindings
description: "Assign keyboard shortcuts to Rift commands in the `[keys]` table."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.5-12-gbeeac0e-dirty.
-->

Assign keyboard shortcuts to Rift commands in the `[keys]` table.

A custom `[keys]` table replaces the bundled keymap. Use the [keybindings guide](/rift-docs/guides/keybindings/) before creating one.

:::note[Examples are config fragments]
Merge these examples into your config. If a table already exists, add or change its fields there; do not repeat its header. A complete custom file requires both `[settings]` and `[keys]`, and its `[keys]` table must contain every shortcut you want Rift to register.
:::

```toml
[keys]
"Alt + Z" = "toggle_space_activated"
"Alt + H" = { move_focus = "left" }
"Alt + Shift + H" = { move_node = "left" }
"Alt + 1" = { switch_to_workspace = 0 }
"Alt + Shift + Space" = "toggle_window_floating"
```

Simple commands are quoted strings. Commands that need a direction, workspace, amount, or other option use an inline table. A custom `[keys]` table is the entire active keymap, not an addition to the bundled bindings. The [keybindings guide](/rift-docs/guides/keybindings/) lists practical command shapes.

## [keys]

A map whose keys are hotkey strings and whose values are Rift commands. This table replaces the bundled keymap; it is not merged. An empty map registers no keyboard shortcuts.

**Value:** map of text to Rift command

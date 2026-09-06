---
title: Keybindings
description: "Assign keyboard shortcuts to Rift commands in the `[keys]` table."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.6-1-g9b4f133-dirty.
-->

Assign keyboard shortcuts to Rift commands in the `[keys]` table.

Your `[keys]` table replaces the bundled keymap; an empty table registers no shortcuts.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

```toml
[keys]
"Alt + Z" = "toggle_space_activated"
"Alt + H" = { move_focus = "left" }
"Alt + Shift + H" = { move_node = "left" }
"Alt + 1" = { switch_to_workspace = 0 }
"Alt + Shift + Space" = "toggle_window_floating"
```

Simple commands are quoted strings. Commands that need a direction, workspace, amount, or other option use an inline table. See [Keybindings](/rift-docs/guides/keybindings/) for more commands.

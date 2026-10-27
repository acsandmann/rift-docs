---
title: Keybindings
description: "Assign keyboard shortcuts to Rift commands in the `[keys]` table."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.7.0-27-g0a6ceb7f-dirty.
-->

Assign keyboard shortcuts to Rift commands in the `[keys]` table.

Your `[keys]` table replaces the bundled keymap; an empty table registers no shortcuts. Add named keymaps with [binding modes](/rift-docs/reference/configuration/binding-modes/).

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<p class="apple-label">Example</p>

```toml
[keys]
"Alt + Z" = "toggle_space_activated"
"Alt + H" = { move_focus = "left" }
"Alt + Shift + H" = { move_node = "left" }
"Alt + 1" = { switch_to_workspace = 0 }
"Alt + Shift + Space" = "toggle_window_floating"
```

Simple commands are quoted strings. Commands that need a direction, workspace, amount, or other option use an inline table. See [Keybindings](/rift-docs/guides/window-management/#customize-keyboard-shortcuts) for more commands.

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/guides/window-management/#customize-keyboard-shortcuts">Keybindings guide</a></li>
<li><a href="/rift-docs/reference/configuration/binding-modes/">Binding modes</a></li>
<li><a href="/rift-docs/reference/configuration/modifiers/">Modifier combinations</a></li>
<li><a href="/rift-docs/reference/configuration/commands/">Commands and startup</a></li>
</ul>

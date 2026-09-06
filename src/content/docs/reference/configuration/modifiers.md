---
title: Modifier combinations
description: "Reusable names for modifier strings such as `Alt + Shift`. Use them at the beginning of a keybinding to keep a large keymap consistent."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.5-12-gbeeac0e-dirty.
-->

Reusable names for modifier strings such as `Alt + Shift`. Use them at the beginning of a keybinding to keep a large keymap consistent.

This section is optional; ordinary key strings work without it.

:::note[Examples are config fragments]
Merge these examples into your config. If a table already exists, add or change its fields there; do not repeat its header. A complete custom file requires both `[settings]` and `[keys]`, and its `[keys]` table must contain every shortcut you want Rift to register.
:::

```toml
[modifier_combinations]
main = "Alt + Shift"

[keys]
"main + H" = { move_focus = "left" }
```

## [modifier_combinations]

A map from a short name to a modifier string. For example, `main = "Alt + Shift"` lets you write `main + H` in the `[keys]` table.

**Value:** map of text to String

---
title: Modifier combinations
description: "Name a combination of modifier keys, such as Option + Shift, and reuse it in shortcuts."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.6-8-gb3e916e-dirty.
-->

Name a combination of modifier keys, such as Option + Shift, and reuse it in shortcuts.

Use spaces around `+` when referencing a name: `main + H`.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

```toml
[modifier_combinations]
main = "Alt + Shift"

[keys]
"main + H" = { move_focus = "left" }
```

---
title: Modifier combinations
description: "Name a combination of modifier keys, such as Option + Shift, and reuse it in shortcuts."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.6-9-gbe3bbea.
-->

Name a combination of modifier keys, such as Option + Shift, and reuse it in shortcuts.

Use spaces around `+` when referencing a name: `main + H`.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<div class="config-intro-example-label">Example</div>

```toml
[modifier_combinations]
main = "Alt + Shift"

[keys]
"main + H" = { move_focus = "left" }
```

## See also

- [Keybindings guide](/rift-docs/guides/keybindings/)
- [Keybinding reference](/rift-docs/reference/configuration/keybindings/)

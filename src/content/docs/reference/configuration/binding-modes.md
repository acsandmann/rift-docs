---
title: Binding modes
description: "Create named keymaps for workflows such as resizing windows."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.7.0-27-g0a6ceb7f-dirty.
-->

Create named keymaps for workflows such as resizing windows.

`[keys]` is the default mode. A custom mode replaces it until a binding switches back to `default`; unbound keys pass through to the foreground app.

:::caution[Place binding modes after keys]
TOML table headers set the scope for following entries. After `[binding_modes.resize]`, later key/value entries belong to that mode. Finish all `[keys]` entries before the first `[binding_modes.*]` table.
:::

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<p class="apple-label">Example</p>

```toml
[keys]
"Alt + R" = { binding_mode = "resize" }

[binding_modes.resize]
"H" = { resize_window_shrink = "horizontal" }
"L" = { resize_window_grow = "horizontal" }
"Escape" = { binding_mode = "default" }
```

Mode names can be any TOML key. The default mode is reserved and is defined by `[keys]`.

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/reference/configuration/keybindings/">Keybindings</a></li>
<li><a href="/rift-docs/reference/configuration/modifiers/">Modifier combinations</a></li>
</ul>

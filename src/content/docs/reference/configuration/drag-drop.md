---
title: Drag and drop
description: "Configure modifier-assisted window movement and tiled-window drop behavior."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.7.1-19-g572b9425-dirty.
-->

Configure modifier-assisted window movement and tiled-window drop behavior.

Native title-bar dragging and modifier-assisted dragging use the same tiled-window drop targets.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<p class="apple-label">Example</p>

```toml
[settings.drag_drop]
enabled = true
modifier = "fn"
action1 = "move"
action2 = "none"
drop_action = "swap"
preview = true
```

<p class="apple-label">Table</p>

## `[settings.drag_drop]`

Modifier-assisted window movement and tiled-window drops with previews.

<section class="apple-entry" id="setting-settings-drag_drop-haptics_enabled">

### `haptics_enabled`

<p>Enable trackpad feedback after a successful window drop.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-drag_drop-enabled">

### `enabled`

<p>Enables native drag targeting and modifier mouse actions.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-drag_drop-modifier">

### `modifier`

<p>Modifier held with <a href="/rift-docs/reference/configuration/drag-drop/#setting-settings-drag_drop-action1"><code>action1</code></a> or <a href="/rift-docs/reference/configuration/drag-drop/#setting-settings-drag_drop-action2"><code>action2</code></a>: <code>cmd</code>, <code>alt</code>, <code>shift</code>, <code>ctrl</code>, <code>fn</code>, or a combination such as <code>Ctrl + Alt + Shift + Meta</code> (<code>fn</code> can't be combined). Left/right spellings such as <code>AltRight</code> match either side. A single modifier works while held; a combination must be held exactly.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>string</dd></div><div><dt>Default</dt><dd><code>&quot;fn&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-drag_drop-action1">

### `action1`

<p>Left-button action while the configured modifier is held.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>none</code> or <code>move</code></dd></div><div><dt>Default</dt><dd><code>&quot;move&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-drag_drop-action2">

### `action2`

<p>Right-button action while the configured modifier is held.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>none</code> or <code>move</code></dd></div><div><dt>Default</dt><dd><code>&quot;none&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-drag_drop-drop_action">

### `drop_action`

<p>Center-zone action for tiled move drops.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>swap</code> or <code>stack</code></dd></div><div><dt>Default</dt><dd><code>&quot;swap&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-drag_drop-drop_zone_fraction">

### `drop_zone_fraction`

<p>Depth of each edge zone as a fraction of the destination window's size. Valid values are <code>0.10..=0.45</code>; the default is <code>0.25</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.25</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-drag_drop-preview">

### `preview`

<p>Shows a translucent, rounded WindowServer overlay for the pending drop. The overlay is updated only when the target tile or drop zone changes.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/guides/window-management/">Window management</a></li>
<li><a href="/rift-docs/reference/configuration/layouts/">Layout settings</a></li>
<li><a href="/rift-docs/configuration/">Configuration guide</a></li>
</ul>

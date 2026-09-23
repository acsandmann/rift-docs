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
Generated from Rift v0.5.10-7-g3eceac1-dirty.
-->

Configure modifier-assisted window movement and tiled-window drop behavior.

Native title-bar dragging and modifier-assisted dragging use the same tiled-window drop targets.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<div class="config-intro-example-label">Example</div>

```toml
[settings.drag_drop]
enabled = true
modifier = "fn"
action1 = "move"
action2 = "none"
drop_action = "swap"
preview = true
```

## <span class="config-table-heading">[settings.drag_drop]</span>

Modifier-assisted window movement and tiled-window drops with previews.

### `enabled`

<section class="config-option config-option--simple">
<p class="config-description">Enables native drag targeting and modifier mouse actions.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

### `modifier`

<section class="config-option config-option--expanded">
<p class="config-description">Modifier held with <a class="config-setting-link" href="/rift-docs/reference/configuration/drag-drop/#action1"><code>action1</code></a> or <a class="config-setting-link" href="/rift-docs/reference/configuration/drag-drop/#action2"><code>action2</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>text</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;fn&quot;</code></dd></div></dl>
<div class="config-values"><strong>Possible values</strong><div><code>cmd</code> <code>alt</code> <code>shift</code> <code>ctrl</code> <code>fn</code></div></div>
</section>

### `action1`

<section class="config-option config-option--simple">
<p class="config-description">Left-button action while the configured modifier is held.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>none</code> or <code>move</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;move&quot;</code></dd></div></dl>

</section>

### `action2`

<section class="config-option config-option--simple">
<p class="config-description">Right-button action while the configured modifier is held.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>none</code> or <code>move</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;none&quot;</code></dd></div></dl>

</section>

### `drop_action`

<section class="config-option config-option--simple">
<p class="config-description">Center-zone action for tiled move drops.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>swap</code> or <code>stack</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;swap&quot;</code></dd></div></dl>

</section>

### `drop_zone_fraction`

<section class="config-option config-option--simple">
<p class="config-description">Depth of each edge zone as a fraction of the destination window's size. Valid values are <code>0.10..=0.45</code>; the default is <code>0.25</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.25</code></dd></div></dl>

</section>

### `preview`

<section class="config-option config-option--simple">
<p class="config-description">Shows a translucent, rounded WindowServer overlay for the pending drop. The overlay is updated only when the target tile or drop zone changes.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

## See also

- [Window management](/rift-docs/guides/window-management/)
- [Layout settings](/rift-docs/reference/configuration/layouts/)
- [Configuration guide](/rift-docs/configuration/)

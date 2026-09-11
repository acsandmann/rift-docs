---
title: User interface
description: "Optional indicators for the menu bar, stack line, and Mission Control."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.7-1-g7a59369-dirty.
-->

Optional indicators for the menu bar, stack line, and Mission Control.

All three features are disabled by default.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<div class="config-intro-example-label">Example</div>

```toml
[settings.ui.menu_bar]
enabled = true
display_style = "label"
active_label = "name"
```

## <span class="config-table-heading">[settings.ui]</span>

Optional visual indicators. All UI helpers are disabled by default.

## <span class="config-table-heading">[settings.ui.menu_bar]</span>

Show workspace status in the macOS menu bar.

### `enabled`

<section class="config-option config-option--simple">
<p class="config-description">Enable the menu bar workspace indicator.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `show_empty`

<section class="config-option config-option--simple">
<p class="config-description">Include workspaces that currently have no windows.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `mode`

<section class="config-option config-option--simple">
<p class="config-description">Show every workspace or only the active one.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>all</code> or <code>active</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;all&quot;</code></dd></div></dl>

</section>

### `active_label`

<section class="config-option config-option--simple">
<p class="config-description">Label a workspace with its one-based workspace number or its configured name.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>index</code> or <code>name</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;index&quot;</code></dd></div></dl>

</section>

### `display_style`

<section class="config-option config-option--simple">
<p class="config-description">Draw a miniature representation of each workspace’s windows (<code>layout</code>) or show a number or name (<code>label</code>).</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>layout</code> or <code>label</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;layout&quot;</code></dd></div></dl>

</section>

### `layout_folder`

<section class="config-option config-option--simple">
<p class="config-description">Folder containing saved <code>.ron</code> layouts shown in the menu bar’s restore menus. <code>~</code> expands to your home directory.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>path</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;~/.config/rift/layouts&quot;</code></dd></div></dl>

</section>

## <span class="config-table-heading">[settings.ui.stack_line]</span>

Show a small edge indicator for stacked windows.

### `enabled`

<section class="config-option config-option--expanded">
<p class="config-description">Enable the stack-line indicator.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>
<div class="config-example"><div class="config-example__label">Example</div><pre><code class="language-toml">[settings.ui.stack_line]
enabled = true
hover = &quot;click&quot;
</code></pre></div>
</section>

### `hover`

<section class="config-option config-option--simple">
<p class="config-description">Choose whether the indicator responds to a click or pointer hover.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>click</code> or <code>hover</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;hover&quot;</code></dd></div></dl>

</section>

### `thickness`

<section class="config-option config-option--expanded">
<p class="config-description">Thickness of the stack-line indicator in points.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>20</code></dd></div></dl>
<aside class="config-note"><strong>Note</strong><span>Omitting the entire containing table gives <code>0</code> instead.</span></aside>
</section>

### `horiz_placement`

<section class="config-option config-option--simple">
<p class="config-description">Place the stack line at the top or bottom edge of the window.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>top</code> or <code>bottom</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;top&quot;</code></dd></div></dl>

</section>

### `vert_placement`

<section class="config-option config-option--simple">
<p class="config-description">Place the stack line at the left or right edge of the window.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>left</code> or <code>right</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;left&quot;</code></dd></div></dl>

</section>

### `spacing`

<section class="config-option config-option--expanded">
<p class="config-description">Distance from the window edge to the indicator, in macOS points.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>1</code></dd></div></dl>
<aside class="config-note"><strong>Note</strong><span>Omitting the entire containing table gives <code>0</code> instead.</span></aside>
</section>

## <span class="config-table-heading">[settings.ui.mission_control]</span>

Rift’s own Mission Control-style workspace overview.

### `enabled`

<section class="config-option config-option--expanded">
<p class="config-description">Enable Rift’s Mission Control helper.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>
<div class="config-example"><div class="config-example__label">Example</div><pre><code class="language-toml">[settings.ui.mission_control]
enabled = true
</code></pre></div>
</section>

### `fade_enabled`

<section class="config-option config-option--simple">
<p class="config-description">Fade managed windows during Mission Control transitions.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `fade_duration_ms`

<section class="config-option config-option--expanded">
<p class="config-description">Fade duration in milliseconds.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>180</code></dd></div></dl>
<aside class="config-note"><strong>Note</strong><span>Omitting the entire containing table gives <code>0</code> instead.</span></aside>
</section>

## See also

- [Configuration guide](/rift-docs/configuration/)
- [Window management](/rift-docs/guides/window-management/)

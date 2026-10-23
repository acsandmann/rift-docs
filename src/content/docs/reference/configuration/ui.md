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
Generated from Rift v0.7.0-28-g6c63b50c.
-->

Optional indicators for the menu bar, stack line, and Mission Control.

All three features are disabled by default.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<p class="apple-label">Example</p>

```toml
[settings.ui.menu_bar]
enabled = true
display_style = "label"
active_label = "name"
```

<p class="apple-label">Table</p>

## `[settings.ui]`

Optional visual indicators. All UI helpers are disabled by default.

<p class="apple-label">Table</p>

## `[settings.ui.menu_bar]`

Show workspace status in the macOS menu bar.

<section class="apple-entry" id="setting-settings-ui-menu_bar-enabled">

### `enabled`

<p>Enable the menu bar workspace indicator.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-menu_bar-show_empty">

### `show_empty`

<p>Include workspaces that currently have no windows.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-menu_bar-show_binding_mode">

### `show_binding_mode`

<p>Show the active binding mode beside workspaces, except in default mode.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-menu_bar-mode">

### `mode`

<p>Show every workspace or only the active one.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>all</code> or <code>active</code></dd></div><div><dt>Default</dt><dd><code>&quot;all&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-menu_bar-active_label">

### `active_label`

<p>Label a workspace with its one-based workspace number or its configured name.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>index</code> or <code>name</code></dd></div><div><dt>Default</dt><dd><code>&quot;index&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-menu_bar-display_style">

### `display_style`

<p>Draw a miniature representation of each workspace’s windows (<code>layout</code>) or show a number or name (<code>label</code>).</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>layout</code> or <code>label</code></dd></div><div><dt>Default</dt><dd><code>&quot;layout&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-menu_bar-layout_folder">

### `layout_folder`

<p>Folder containing saved <code>.ron</code> layouts shown in the menu bar’s restore menus. <code>~</code> expands to your home directory.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>path</dd></div><div><dt>Default</dt><dd><code>&quot;~/.config/rift/layouts&quot;</code></dd></div></dl>

</section>

<p class="apple-label">Table</p>

## `[settings.ui.stack_line]`

Show a small edge indicator for stacked windows.

<section class="apple-entry" id="setting-settings-ui-stack_line-enabled">

### `enabled`

<p>Enable the stack-line indicator.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

<p class="apple-label">Example</p>

```toml
[settings.ui.stack_line]
enabled = true
hover = "click"
```

</section>

<section class="apple-entry" id="setting-settings-ui-stack_line-hover">

### `hover`

<p>Choose whether the indicator responds to a click or pointer hover.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>click</code> or <code>hover</code></dd></div><div><dt>Default</dt><dd><code>&quot;hover&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-stack_line-horiz_placement">

### `horiz_placement`

<p>Place the stack line at the top or bottom edge of the window.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>top</code> or <code>bottom</code></dd></div><div><dt>Default</dt><dd><code>&quot;top&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-stack_line-vert_placement">

### `vert_placement`

<p>Place the stack line at the left or right edge of the window.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>left</code> or <code>right</code></dd></div><div><dt>Default</dt><dd><code>&quot;left&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-stack_line-thickness">

### `thickness`

<p>Thickness of the stack-line indicator in points.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>28</code></dd></div></dl>

:::note
Omitting the entire containing table gives <code>0</code> instead.
:::

</section>

<section class="apple-entry" id="setting-settings-ui-stack_line-spacing">

### `spacing`

<p>Distance from the window edge to the indicator, in macOS points.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0</code></dd></div></dl>

:::note
Omitting the entire containing table gives <code>0</code> instead.
:::

</section>

<p class="apple-label">Table</p>

## `[settings.ui.mission_control]`

Rift’s own Mission Control-style workspace overview.

<section class="apple-entry" id="setting-settings-ui-mission_control-show_empty_workspaces">

### `show_empty_workspaces`

<p>Include workspaces without windows in Overview.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-mission_control-window_previews">

### `window_previews`

<p>Show window previews in Rift’s Mission Control overview.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

:::note
Omitting the entire containing table gives <code>false</code> instead.
:::

</section>

<section class="apple-entry" id="setting-settings-ui-mission_control-enabled">

### `enabled`

<p>Enable Rift’s Mission Control helper.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

<p class="apple-label">Example</p>

```toml
[settings.ui.mission_control]
enabled = true
```

</section>

<section class="apple-entry" id="setting-settings-ui-mission_control-fade_enabled">

### `fade_enabled`

<p>Fade managed windows during Mission Control transitions.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-ui-mission_control-fade_duration_ms">

### `fade_duration_ms`

<p>Fade duration in milliseconds.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>180</code></dd></div></dl>

:::note
Omitting the entire containing table gives <code>0</code> instead.
:::

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/configuration/">Configuration guide</a></li>
<li><a href="/rift-docs/guides/window-management/">Window management</a></li>
</ul>

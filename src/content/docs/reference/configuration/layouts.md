---
title: Layouts
description: "Choose a default layout and tune spacing, insertion, and layout-specific behavior."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.7.0-28-g6c63b50c.
-->

Choose a default layout and tune spacing, insertion, and layout-specific behavior.

Compare [layouts](/rift-docs/layouts/) before choosing a mode.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<p class="apple-label">Example</p>

```toml
[settings.layout]
mode = "master_stack"

[settings.layout.gaps.inner]
horizontal = 8.0
vertical = 8.0
```

<p class="apple-label">Table</p>

## `[settings.layout]`

Choose the default layout and set options shared by every layout. A layout-specific table can override a shared option.

<section class="apple-entry" id="setting-settings-layout-window_insertion_point">

### `window_insertion_point`

<p>Where Rift inserts a newly managed window. A layout-specific value wins; if neither value is set, Rift uses <code>next_to_selection</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-mode">

### `mode`

<p>Layout used for a workspace that does not match a <a href="/rift-docs/reference/configuration/virtual-workspaces/#virtual_workspacesworkspace_rules"><code>virtual_workspaces.workspace_rules</code></a> entry.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>text</dd></div><div><dt>Default</dt><dd><code>&quot;traditional&quot;</code></dd></div></dl>
<p class="apple-label">Possible values</p>
<ul class="apple-values"><li><code>traditional</code></li><li><code>bsp</code></li><li><code>stack</code></li><li><code>master_stack</code></li><li><code>scrolling</code></li><li><code>floating</code></li></ul>

</section>

<p class="apple-label">Table</p>

## `[settings.layout.traditional]`

Options specific to the Traditional tree layout.

<section class="apple-entry" id="setting-settings-layout-traditional-window_insertion_point">

### `window_insertion_point`

<p>Override the layout-wide insertion point for Traditional. Leave it unset to inherit <a href="/rift-docs/reference/configuration/layouts/#setting-settings-layout-window_insertion_point"><code>[settings.layout].window_insertion_point</code></a>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-traditional-equalize_nodes">

### `equalize_nodes`

<p>Give a new window the average share of its siblings when inserting it. When false, split the selected window’s share instead. Manual resizing remains available.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<p class="apple-label">Table</p>

## `[settings.layout.bsp]`

Options specific to the BSP layout. Shared layout settings can still be set here.

<section class="apple-entry" id="setting-settings-layout-bsp-window_insertion_point">

### `window_insertion_point`

<p>Override the layout-wide insertion point for BSP. Leave it unset to inherit <a href="/rift-docs/reference/configuration/layouts/#setting-settings-layout-window_insertion_point"><code>[settings.layout].window_insertion_point</code></a>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-bsp-single_window_aspect_ratio">

### `single_window_aspect_ratio`

<p>Center a lone window at this width-to-height ratio.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<p class="apple-label">Table</p>

## `[settings.layout.stack]`

Options specific to the Stack layout.

<section class="apple-entry" id="setting-settings-layout-stack-window_insertion_point">

### `window_insertion_point`

<p>Override the layout-wide insertion point for Stack. Leave it unset to inherit <a href="/rift-docs/reference/configuration/layouts/#setting-settings-layout-window_insertion_point"><code>[settings.layout].window_insertion_point</code></a>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-stack-stack_offset">

### `stack_offset`

<p>Number of pixels by which each window is offset from the previous window in a stack. Must not be negative.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>40</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-stack-default_orientation">

### `default_orientation`

<p>Direction of a new stack. <code>perpendicular</code> uses the axis across its parent, <code>same</code> uses the parent's axis, and <code>horizontal</code> or <code>vertical</code> forces an axis.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>perpendicular</code> or <code>same</code> or <code>horizontal</code> or <code>vertical</code></dd></div><div><dt>Default</dt><dd><code>&quot;perpendicular&quot;</code></dd></div></dl>

</section>

<p class="apple-label">Table</p>

## `[settings.layout.master_stack]`

Options specific to the Master-stack layout.

<section class="apple-entry" id="setting-settings-layout-master_stack-window_insertion_point">

### `window_insertion_point`

<p>Override the layout-wide insertion point for Master-stack. Leave it unset to inherit <a href="/rift-docs/reference/configuration/layouts/#setting-settings-layout-window_insertion_point"><code>[settings.layout].window_insertion_point</code></a>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-master_stack-master_ratio">

### `master_ratio`

<p>Fraction of the tiling area reserved for the master side. Valid range: <code>0.05</code> through <code>0.95</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.6</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-master_stack-master_count">

### `master_count`

<p>Number of windows kept on the master side. Must be at least <code>1</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>whole number</dd></div><div><dt>Default</dt><dd><code>1</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-master_stack-master_side">

### `master_side`

<p>Edge occupied by the master side: <code>left</code>, <code>right</code>, <code>top</code>, or <code>bottom</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>left</code> or <code>right</code> or <code>top</code> or <code>bottom</code></dd></div><div><dt>Default</dt><dd><code>&quot;left&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-master_stack-new_window_placement">

### `new_window_placement`

<p>Where to insert a new window after the master area is full. <code>master</code> puts it in the main area and moves an existing window to the stack; <code>stack</code> keeps it in the supporting area; <code>focused</code> uses the focused area. Rift maintains <a href="/rift-docs/reference/configuration/layouts/#setting-settings-layout-master_stack-master_count"><code>master_count</code></a>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>master</code> or <code>stack</code> or <code>focused</code></dd></div><div><dt>Default</dt><dd><code>&quot;master&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-master_stack-master_arrangement">

### `master_arrangement`

<p>Optional direction used to divide multiple windows inside the master side. When omitted, Rift uses the direction perpendicular to the master/stack split.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>horizontal</code> or <code>vertical</code> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-master_stack-stack_arrangement">

### `stack_arrangement`

<p>Optional direction used to divide windows inside the stack side. When omitted, Rift uses the direction perpendicular to the master/stack split.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>horizontal</code> or <code>vertical</code> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<p class="apple-label">Table</p>

## `[settings.layout.gaps]`

Space between tiled windows and the screen edges, plus space between neighboring windows.

<section class="apple-entry" id="setting-settings-layout-gaps-per_display">

### `per_display`

<p>Optional display-specific gap overrides keyed by display UUID. An override replaces the complete outer or inner gap group for that display.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>map of text to gap override tables</dd></div><div><dt>Default</dt><dd>Empty table</dd></div></dl>

:::note
Run <code>rift-cli query displays</code> and replace <code>YOUR-DISPLAY-UUID</code> with the display UUID. Set any of <code>top</code>, <code>bottom</code>, <code>left</code>, and <code>right</code> in an <a href="/rift-docs/reference/configuration/layouts/#settingslayoutgapsouter"><code>outer</code></a> table, or <code>horizontal</code> and <code>vertical</code> in an <a href="/rift-docs/reference/configuration/layouts/#settingslayoutgapsinner"><code>inner</code></a> table. Omitted values within an overridden group become <code>0</code>; omitting the entire group inherits the global group.
:::

<p class="apple-label">Example</p>

```toml
[settings.layout.gaps.per_display."YOUR-DISPLAY-UUID".outer]
top = 8.0
bottom = 8.0
left = 16.0
right = 16.0
```

</section>

<p class="apple-label">Table</p>

## `[settings.layout.gaps.outer]`

Insets between the tiled area and each edge of the display. Gap values must not be negative.

<section class="apple-entry" id="setting-settings-layout-gaps-outer-top">

### `top`

<p>Gap at the top of the screen</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-gaps-outer-left">

### `left`

<p>Gap at the left of the screen</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-gaps-outer-bottom">

### `bottom`

<p>Gap at the bottom of the screen</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-gaps-outer-right">

### `right`

<p>Gap at the right of the screen</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

<p class="apple-label">Table</p>

## `[settings.layout.gaps.inner]`

Space between neighboring tiled windows. Gap values must not be negative.

<section class="apple-entry" id="setting-settings-layout-gaps-inner-horizontal">

### `horizontal`

<p>Horizontal gap between windows</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-gaps-inner-vertical">

### `vertical`

<p>Vertical gap between windows</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/layouts/">Compare layouts</a></li>
<li><a href="/rift-docs/guides/layouts/">Adjust layouts</a></li>
<li><a href="/rift-docs/reference/configuration/scrolling/">Scrolling settings</a></li>
</ul>

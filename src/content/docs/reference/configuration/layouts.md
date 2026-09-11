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
Generated from Rift v0.5.7-1-g7a59369-dirty.
-->

Choose a default layout and tune spacing, insertion, and layout-specific behavior.

Compare [layouts](/rift-docs/layouts/) before choosing a mode.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<div class="config-intro-example-label">Example</div>

```toml
[settings.layout]
mode = "master_stack"

[settings.layout.gaps.inner]
horizontal = 8.0
vertical = 8.0
```

## <span class="config-table-heading">[settings.layout]</span>

Choose the default layout and set options shared by every layout. A layout-specific table can override a shared option.

### `window_insertion_point`

<section class="config-option config-option--simple">
<p class="config-description">Where Rift inserts a newly managed window. A layout-specific value wins; if neither value is set, Rift uses <code>next_to_selection</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `mode`

<section class="config-option config-option--expanded">
<p class="config-description">Layout used for a workspace that does not match a <a class="config-setting-link" href="/rift-docs/reference/configuration/virtual-workspaces/#virtual_workspacesworkspace_rules"><code>virtual_workspaces.workspace_rules</code></a> entry.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>text</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;traditional&quot;</code></dd></div></dl>
<div class="config-values"><strong>Possible values</strong><div><code>traditional</code> <code>bsp</code> <code>stack</code> <code>master_stack</code> <code>scrolling</code></div></div>
</section>

## <span class="config-table-heading">[settings.layout.traditional]</span>

Options specific to the Traditional tree layout.

### `window_insertion_point`

<section class="config-option config-option--simple">
<p class="config-description">Override the layout-wide insertion point for Traditional. Leave it unset to inherit <a class="config-setting-link" href="/rift-docs/reference/configuration/layouts/#window_insertion_point"><code>[settings.layout].window_insertion_point</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `equalize_nodes`

<section class="config-option config-option--simple">
<p class="config-description">Give a new window the average share of its siblings when inserting it. When false, split the selected window’s share instead. Manual resizing remains available.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

## <span class="config-table-heading">[settings.layout.bsp]</span>

Options specific to the BSP layout. Shared layout settings can still be set here.

### `window_insertion_point`

<section class="config-option config-option--simple">
<p class="config-description">Override the layout-wide insertion point for BSP. Leave it unset to inherit <a class="config-setting-link" href="/rift-docs/reference/configuration/layouts/#window_insertion_point"><code>[settings.layout].window_insertion_point</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

## <span class="config-table-heading">[settings.layout.stack]</span>

Options specific to the Stack layout.

### `window_insertion_point`

<section class="config-option config-option--simple">
<p class="config-description">Override the layout-wide insertion point for Stack. Leave it unset to inherit <a class="config-setting-link" href="/rift-docs/reference/configuration/layouts/#window_insertion_point"><code>[settings.layout].window_insertion_point</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `stack_offset`

<section class="config-option config-option--simple">
<p class="config-description">Number of pixels by which each window is offset from the previous window in a stack. Must not be negative.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>40</code></dd></div></dl>

</section>

### `default_orientation`

<section class="config-option config-option--simple">
<p class="config-description">Direction of a new stack. <code>perpendicular</code> uses the axis across its parent, <code>same</code> uses the parent's axis, and <code>horizontal</code> or <code>vertical</code> forces an axis.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>perpendicular</code> or <code>same</code> or <code>horizontal</code> or <code>vertical</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;perpendicular&quot;</code></dd></div></dl>

</section>

## <span class="config-table-heading">[settings.layout.master_stack]</span>

Options specific to the Master-stack layout.

### `window_insertion_point`

<section class="config-option config-option--simple">
<p class="config-description">Override the layout-wide insertion point for Master-stack. Leave it unset to inherit <a class="config-setting-link" href="/rift-docs/reference/configuration/layouts/#window_insertion_point"><code>[settings.layout].window_insertion_point</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `master_ratio`

<section class="config-option config-option--simple">
<p class="config-description">Fraction of the tiling area reserved for the master side. Valid range: <code>0.05</code> through <code>0.95</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.6</code></dd></div></dl>

</section>

### `master_count`

<section class="config-option config-option--simple">
<p class="config-description">Number of windows kept on the master side. Must be at least <code>1</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>whole number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>1</code></dd></div></dl>

</section>

### `master_side`

<section class="config-option config-option--simple">
<p class="config-description">Edge occupied by the master side: <code>left</code>, <code>right</code>, <code>top</code>, or <code>bottom</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>left</code> or <code>right</code> or <code>top</code> or <code>bottom</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;left&quot;</code></dd></div></dl>

</section>

### `new_window_placement`

<section class="config-option config-option--simple">
<p class="config-description">Where to insert a new window after the master area is full. <code>master</code> puts it in the main area and moves an existing window to the stack; <code>stack</code> keeps it in the supporting area; <code>focused</code> uses the focused area. Rift maintains <a class="config-setting-link" href="/rift-docs/reference/configuration/layouts/#master_count"><code>master_count</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>master</code> or <code>stack</code> or <code>focused</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;master&quot;</code></dd></div></dl>

</section>

### `master_arrangement`

<section class="config-option config-option--simple">
<p class="config-description">Optional direction used to divide multiple windows inside the master side. When omitted, Rift uses the direction perpendicular to the master/stack split.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>horizontal</code> or <code>vertical</code> (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `stack_arrangement`

<section class="config-option config-option--simple">
<p class="config-description">Optional direction used to divide windows inside the stack side. When omitted, Rift uses the direction perpendicular to the master/stack split.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>horizontal</code> or <code>vertical</code> (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

## <span class="config-table-heading">[settings.layout.gaps]</span>

Space between tiled windows and the screen edges, plus space between neighboring windows.

### `per_display`

<section class="config-option config-option--expanded">
<p class="config-description">Optional display-specific gap overrides keyed by display UUID. An override replaces the complete outer or inner gap group for that display.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>map of text to gap override tables</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Empty table</dd></div></dl>
<aside class="config-note"><strong>Note</strong><span>Run <code>rift-cli query displays</code> and replace <code>YOUR-DISPLAY-UUID</code> with the display UUID. Set any of <code>top</code>, <code>bottom</code>, <code>left</code>, and <code>right</code> in an <a class="config-setting-link" href="/rift-docs/reference/configuration/layouts/#settingslayoutgapsouter"><code>outer</code></a> table, or <code>horizontal</code> and <code>vertical</code> in an <a class="config-setting-link" href="/rift-docs/reference/configuration/layouts/#settingslayoutgapsinner"><code>inner</code></a> table. Omitted values within an overridden group become <code>0</code>; omitting the entire group inherits the global group.</span></aside><div class="config-example"><div class="config-example__label">Example</div><pre><code class="language-toml">[settings.layout.gaps.per_display.&quot;YOUR-DISPLAY-UUID&quot;.outer]
top = 8.0
bottom = 8.0
left = 16.0
right = 16.0
</code></pre></div>
</section>

## <span class="config-table-heading">[settings.layout.gaps.outer]</span>

Insets between the tiled area and each edge of the display. Gap values must not be negative.

### `top`

<section class="config-option config-option--simple">
<p class="config-description">Gap at the top of the screen</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

### `left`

<section class="config-option config-option--simple">
<p class="config-description">Gap at the left of the screen</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

### `bottom`

<section class="config-option config-option--simple">
<p class="config-description">Gap at the bottom of the screen</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

### `right`

<section class="config-option config-option--simple">
<p class="config-description">Gap at the right of the screen</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

## <span class="config-table-heading">[settings.layout.gaps.inner]</span>

Space between neighboring tiled windows. Gap values must not be negative.

### `horizontal`

<section class="config-option config-option--simple">
<p class="config-description">Horizontal gap between windows</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

### `vertical`

<section class="config-option config-option--simple">
<p class="config-description">Vertical gap between windows</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

## See also

- [Compare layouts](/rift-docs/layouts/)
- [Adjust layouts](/rift-docs/guides/layouts/)
- [Scrolling settings](/rift-docs/reference/configuration/scrolling/)

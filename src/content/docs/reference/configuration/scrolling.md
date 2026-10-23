---
title: Scrolling layout
description: "Settings for the scrolling-column layout and its optional trackpad gestures."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.7.0-28-g6c63b50c.
-->

Settings for the scrolling-column layout and its optional trackpad gestures.

See [Scrolling](/rift-docs/layouts/scrolling/) for column navigation and multiple-display limitations.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<p class="apple-label">Example</p>

```toml
[settings.layout]
mode = "scrolling"

[settings.layout.scrolling]
column_width_ratio = 0.7
alignment = "center"
```

<p class="apple-label">Table</p>

## `[settings.layout.scrolling]`

Options specific to the Scrolling layout.

<section class="apple-entry" id="setting-settings-layout-scrolling-window_insertion_point">

### `window_insertion_point`

<p>Override the layout-wide insertion point for Scrolling. Leave it unset to inherit <a href="/rift-docs/reference/configuration/layouts/#setting-settings-layout-window_insertion_point"><code>[settings.layout].window_insertion_point</code></a>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-animate">

### `animate`

<p>Animate transitions in Scrolling workspaces independently of <a href="/rift-docs/reference/configuration/general/#setting-settings-animate"><code>settings.animate</code></a> and Low Power Mode. Set to <code>false</code> to disable scrolling animations. Leave unset to enable them.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean (optional)</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-column_width_ratio">

### `column_width_ratio`

<p>Normal width of a column as a fraction of the tiling area. It must stay between <a href="/rift-docs/reference/configuration/scrolling/#setting-settings-layout-scrolling-min_column_width_ratio"><code>min_column_width_ratio</code></a> and <a href="/rift-docs/reference/configuration/scrolling/#setting-settings-layout-scrolling-max_column_width_ratio"><code>max_column_width_ratio</code></a>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.7</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-preset_column_widths">

### `preset_column_widths`

<p>Proportional column widths cycled in configured order.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>list of numbers</dd></div><div><dt>Default</dt><dd><code>[0.3333333333333333, 0.5, 0.6666666666666666]</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-preserve_window_sizes">

### `preserve_window_sizes`

<p>Keep a window's existing column width when it enters scrolling layout.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-expand_single_column">

### `expand_single_column`

<p>Fill the usable width when a workspace has only one scrolling column. The column's stored width is restored when another column is added.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-min_column_width_ratio">

### `min_column_width_ratio`

<p>Smallest column width allowed by resize commands, from <code>0.0</code> through <code>1.0</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.3</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-max_column_width_ratio">

### `max_column_width_ratio`

<p>Largest column width allowed by resize commands, from <code>0.0</code> through <code>1.0</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.9</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-per_display">

### `per_display`

<p>Sparse width overrides keyed by display UUID.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>map of text to ScrollingWidthOverride</dd></div><div><dt>Default</dt><dd>Empty table</dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-alignment">

### `alignment`

<p>Position used when aligning the focused column: left edge, center, or right edge. <a href="/rift-docs/reference/configuration/scrolling/#setting-settings-layout-scrolling-focus_navigation_style"><code>focus_navigation_style</code></a> determines when that alignment is applied.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>left</code> or <code>center</code> or <code>right</code></dd></div><div><dt>Default</dt><dd><code>&quot;center&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-focus_navigation_style">

### `focus_navigation_style`

<p>Choose how horizontal focus reveals a column. <code>niri</code> scrolls only as needed in the navigation direction; <code>anchored</code> always places the focused column at the chosen <a href="/rift-docs/reference/configuration/scrolling/#setting-settings-layout-scrolling-alignment"><code>alignment</code></a>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>niri</code> or <code>anchored</code></dd></div><div><dt>Default</dt><dd><code>&quot;niri&quot;</code></dd></div></dl>

</section>

<p class="apple-label">Table</p>

## `[settings.layout.scrolling.gestures]`

Optional horizontal gestures for moving between columns in a Scrolling workspace. The finger count is configurable.

<section class="apple-entry" id="setting-settings-layout-scrolling-gestures-enabled">

### `enabled`

<p>Enable horizontal swipes for moving between columns in a Scrolling workspace.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-gestures-animate">

### `animate`

<p>Animate gesture release independently of structural layout animations. When omitted, inherit the scrolling layout/global animation setting.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-gestures-invert_horizontal">

### `invert_horizontal`

<p>Reverse the meaning of left and right column swipes.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-gestures-vertical_tolerance">

### `vertical_tolerance`

<p>Allowed vertical finger movement while recognizing the start of a column scroll. Measured in trackpad coordinates: <code>0.4</code> and <code>40</code> both mean 40% of the trackpad height.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.4</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-gestures-fingers">

### `fingers`

<p>Number of fingers required for a column swipe.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>whole number</dd></div><div><dt>Default</dt><dd><code>3</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-gestures-distance_pct">

### `distance_pct`

<p>Accumulated horizontal finger travel before Rift sends a scroll update, measured in trackpad coordinates. Smaller values send updates more often. Rift clamps the value from <code>0.01</code> to <code>1.0</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.08</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-gestures-propagate_to_workspace_swipe">

### `propagate_to_workspace_swipe`

<p>After reaching the end of the column strip, continue the gesture into the adjacent virtual workspace.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-layout-scrolling-gestures-workspace_switch_threshold">

### `workspace_switch_threshold`

<p>Overscroll, in normalized steps, required before the gesture switches workspaces.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.55</code></dd></div></dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/layouts/scrolling/">Scrolling layout guide</a></li>
<li><a href="/rift-docs/reference/configuration/layouts/">Layout settings</a></li>
<li><a href="/rift-docs/reference/configuration/gestures/">Gesture settings</a></li>
</ul>

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
Generated from Rift v0.5.7-4-g04defb3.
-->

Settings for the scrolling-column layout and its optional trackpad gestures.

See [Scrolling](/rift-docs/layouts/scrolling/) for column navigation and multiple-display limitations.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<div class="config-intro-example-label">Example</div>

```toml
[settings.layout]
mode = "scrolling"

[settings.layout.scrolling]
column_width_ratio = 0.7
alignment = "center"
```

## <span class="config-table-heading">[settings.layout.scrolling]</span>

Options specific to the Scrolling layout.

### `window_insertion_point`

<section class="config-option config-option--simple">
<p class="config-description">Override the layout-wide insertion point for Scrolling. Leave it unset to inherit <a class="config-setting-link" href="/rift-docs/reference/configuration/layouts/#window_insertion_point"><code>[settings.layout].window_insertion_point</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>next_to_selection</code> or <code>end_of_tree</code> (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `animate`

<section class="config-option config-option--simple">
<p class="config-description">Override animation only for Scrolling workspaces. Leave it unset to inherit <a class="config-setting-link" href="/rift-docs/reference/configuration/general/#animate"><code>settings.animate</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `column_width_ratio`

<section class="config-option config-option--simple">
<p class="config-description">Normal width of a column as a fraction of the tiling area. It must stay between <a class="config-setting-link" href="/rift-docs/reference/configuration/scrolling/#min_column_width_ratio"><code>min_column_width_ratio</code></a> and <a class="config-setting-link" href="/rift-docs/reference/configuration/scrolling/#max_column_width_ratio"><code>max_column_width_ratio</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.7</code></dd></div></dl>

</section>

### `min_column_width_ratio`

<section class="config-option config-option--simple">
<p class="config-description">Smallest column width allowed by resize commands, from <code>0.0</code> through <code>1.0</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.3</code></dd></div></dl>

</section>

### `max_column_width_ratio`

<section class="config-option config-option--simple">
<p class="config-description">Largest column width allowed by resize commands, from <code>0.0</code> through <code>1.0</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.9</code></dd></div></dl>

</section>

### `alignment`

<section class="config-option config-option--simple">
<p class="config-description">Position used when aligning the focused column: left edge, center, or right edge. <a class="config-setting-link" href="/rift-docs/reference/configuration/scrolling/#focus_navigation_style"><code>focus_navigation_style</code></a> determines when that alignment is applied.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>left</code> or <code>center</code> or <code>right</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;center&quot;</code></dd></div></dl>

</section>

### `focus_navigation_style`

<section class="config-option config-option--simple">
<p class="config-description">Choose how horizontal focus reveals a column. <code>niri</code> scrolls only as needed in the navigation direction; <code>anchored</code> always places the focused column at the chosen <a class="config-setting-link" href="/rift-docs/reference/configuration/scrolling/#alignment"><code>alignment</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>niri</code> or <code>anchored</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;niri&quot;</code></dd></div></dl>

</section>

## <span class="config-table-heading">[settings.layout.scrolling.gestures]</span>

Optional horizontal gestures for moving between columns in a Scrolling workspace. The finger count is configurable.

### `enabled`

<section class="config-option config-option--simple">
<p class="config-description">Enable horizontal swipes for moving between columns in a Scrolling workspace.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `invert_horizontal`

<section class="config-option config-option--simple">
<p class="config-description">Reverse the meaning of left and right column swipes.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `vertical_tolerance`

<section class="config-option config-option--simple">
<p class="config-description">Allowed vertical finger movement while recognizing the start of a column scroll. Measured in trackpad coordinates: <code>0.4</code> and <code>40</code> both mean 40% of the trackpad height.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.4</code></dd></div></dl>

</section>

### `fingers`

<section class="config-option config-option--simple">
<p class="config-description">Number of fingers required for a column swipe.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>whole number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>3</code></dd></div></dl>

</section>

### `distance_pct`

<section class="config-option config-option--simple">
<p class="config-description">Accumulated horizontal finger travel before Rift sends a scroll update, measured in trackpad coordinates. Smaller values send updates more often. Rift clamps the value to <code>0.01</code>–<code>1.0</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.08</code></dd></div></dl>

</section>

### `propagate_to_workspace_swipe`

<section class="config-option config-option--simple">
<p class="config-description">After reaching the end of the column strip, continue the gesture into the adjacent virtual workspace.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `workspace_switch_threshold`

<section class="config-option config-option--simple">
<p class="config-description">Overscroll, in normalized steps, required before the gesture switches workspaces.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.15</code></dd></div></dl>

</section>

## See also

- [Scrolling layout guide](/rift-docs/layouts/scrolling/)
- [Layout settings](/rift-docs/reference/configuration/layouts/)
- [Gesture settings](/rift-docs/reference/configuration/gestures/)

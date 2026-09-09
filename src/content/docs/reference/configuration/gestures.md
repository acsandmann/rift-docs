---
title: Gestures
description: "Trackpad swipes between virtual workspaces. Disabled by default."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.6-10-g48e2f1e.
-->

Trackpad swipes between virtual workspaces. Disabled by default.

On Scrolling workspaces, Rift uses the separate [column gesture settings](/rift-docs/reference/configuration/scrolling/).

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<div class="config-intro-example-label">Example</div>

```toml
[settings.gestures]
enabled = true
fingers = 3
```

## <span class="config-table-heading">[settings.gestures]</span>

Optional horizontal gestures for switching virtual workspaces. The finger count is configurable.

### `enabled`

<section class="config-option config-option--simple">
<p class="config-description">Enable horizontal trackpad swipes for switching virtual workspaces.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `consume_dock_swipe`

<section class="config-option config-option--simple">
<p class="config-description">Prevent macOS or the foreground app from also handling a swipe Rift consumed.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

### `invert_horizontal_swipe`

<section class="config-option config-option--simple">
<p class="config-description">Reverse the meaning of left and right swipes.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `swipe_vertical_tolerance`

<section class="config-option config-option--simple">
<p class="config-description">Allowed vertical finger travel, measured in trackpad coordinates. <code>0.4</code> and <code>40</code> both mean 40% of the trackpad height; smaller values require a straighter swipe.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.4</code></dd></div></dl>

</section>

### `skip_empty`

<section class="config-option config-option--expanded">
<p class="config-description">Skip workspaces with no windows when swiping.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>
<aside class="config-note"><strong>Note</strong><span>Omitting the entire <a class="config-setting-link" href="/rift-docs/reference/configuration/gestures/#settingsgestures"><code>[settings.gestures]</code></a> table gives <code>true</code>; including the table but omitting this field gives <code>false</code>.</span></aside>
</section>

### `fingers`

<section class="config-option config-option--simple">
<p class="config-description">Number of fingers required for a workspace swipe.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>whole number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>3</code></dd></div></dl>

</section>

### `distance_pct`

<section class="config-option config-option--simple">
<p class="config-description">Horizontal finger travel needed to switch workspaces, measured in trackpad coordinates. <code>0.08</code> is roughly 8% of the trackpad width. Rift clamps the value to <code>0.01</code>–<code>1.0</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.08</code></dd></div></dl>

</section>

### `haptics_enabled`

<section class="config-option config-option--simple">
<p class="config-description">Provide a tactile pulse when a workspace swipe is recognized.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

### `haptic_pattern`

<section class="config-option config-option--simple">
<p class="config-description">Pattern of tactile feedback used for workspace swipes.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><code>generic</code> or <code>alignment</code> or <code>level_change</code></dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;level_change&quot;</code></dd></div></dl>

</section>

## See also

- [Gestures guide](/rift-docs/guides/gestures/)
- [Virtual workspaces](/rift-docs/guides/workspaces/)

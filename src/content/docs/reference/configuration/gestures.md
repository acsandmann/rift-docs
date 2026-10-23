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
Generated from Rift v0.7.0-28-g6c63b50c.
-->

Trackpad swipes between virtual workspaces. Disabled by default.

On Scrolling workspaces, Rift uses the separate [column gesture settings](/rift-docs/reference/configuration/scrolling/).

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<p class="apple-label">Example</p>

```toml
[settings.gestures]
enabled = true
fingers = 3
```

<p class="apple-label">Table</p>

## `[settings.gestures]`

Optional horizontal gestures for switching virtual workspaces. The finger count is configurable.

<section class="apple-entry" id="setting-settings-gestures-enabled">

### `enabled`

<p>Enable horizontal trackpad swipes for switching virtual workspaces.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-gestures-consume_dock_swipe">

### `consume_dock_swipe`

<p>Prevent macOS or the foreground app from also handling a swipe Rift consumed.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-gestures-invert_horizontal_swipe">

### `invert_horizontal_swipe`

<p>Reverse the meaning of left and right swipes.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-gestures-swipe_vertical_tolerance">

### `swipe_vertical_tolerance`

<p>Allowed vertical finger travel, measured in trackpad coordinates. <code>0.4</code> and <code>40</code> both mean 40% of the trackpad height; smaller values require a straighter swipe.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.4</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-gestures-skip_empty">

### `skip_empty`

<p>Skip workspaces with no windows when swiping.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

:::note
Omitting the entire <a href="/rift-docs/reference/configuration/gestures/#settingsgestures"><code>[settings.gestures]</code></a> table gives <code>true</code>; including the table but omitting this field gives <code>false</code>.
:::

</section>

<section class="apple-entry" id="setting-settings-gestures-fingers">

### `fingers`

<p>Number of fingers required for a workspace swipe.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>whole number</dd></div><div><dt>Default</dt><dd><code>3</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-gestures-distance_pct">

### `distance_pct`

<p>Horizontal finger travel needed to switch workspaces, measured in trackpad coordinates. <code>0.08</code> is roughly 8% of the trackpad width. Rift clamps the value from <code>0.01</code> to <code>1.0</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.08</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-gestures-haptics_enabled">

### `haptics_enabled`

<p>Provide a tactile pulse when a workspace swipe is recognized.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-gestures-haptic_pattern">

### `haptic_pattern`

<p>Pattern of tactile feedback used for workspace swipes.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>generic</code> or <code>alignment</code> or <code>level_change</code></dd></div><div><dt>Default</dt><dd><code>&quot;level_change&quot;</code></dd></div></dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/guides/gestures/">Gestures guide</a></li>
<li><a href="/rift-docs/guides/workspaces/">Virtual workspaces</a></li>
</ul>

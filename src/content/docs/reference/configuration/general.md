---
title: General
description: "Animation, focus behavior, Space activation, and hot reload."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.7.0-27-g0a6ceb7f-dirty.
-->

Animation, focus behavior, Space activation, and hot reload.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<p class="apple-label">Example</p>

```toml
[settings]
animate = true
animation_duration = 0.2
```

<p class="apple-label">Table</p>

## `[settings]`

Global behavior shared by the active layout and the rest of Rift.

<section class="apple-entry" id="setting-settings-animate">

### `animate`

<p>Animate layout changes and focus transitions. Keep this off while troubleshooting layout behavior.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-animation_duration">

### `animation_duration`

<p>Animation duration in seconds when <a href="/rift-docs/reference/configuration/general/#setting-settings-animate"><code>animate</code></a> is enabled. Must not be negative.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>0.3</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-animation_fps">

### `animation_fps`

<p>Target animation frame rate. Higher values look smoother but use more CPU. Must be greater than zero.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Default</dt><dd><code>100</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-animation_easing">

### `animation_easing`

<p>Curve used to accelerate and decelerate animations.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>text</dd></div><div><dt>Default</dt><dd><code>&quot;ease_in_out&quot;</code></dd></div></dl>
<p class="apple-label">Possible values</p>
<ul class="apple-values"><li><code>ease_in_out</code></li><li><code>linear</code></li><li><code>ease_in_sine</code></li><li><code>ease_out_sine</code></li><li><code>ease_in_out_sine</code></li><li><code>ease_in_quad</code></li><li><code>ease_out_quad</code></li><li><code>ease_in_out_quad</code></li><li><code>ease_in_cubic</code></li><li><code>ease_out_cubic</code></li><li><code>ease_in_out_cubic</code></li><li><code>ease_in_quart</code></li><li><code>ease_out_quart</code></li><li><code>ease_in_out_quart</code></li><li><code>ease_in_quint</code></li><li><code>ease_out_quint</code></li><li><code>ease_in_out_quint</code></li><li><code>ease_in_expo</code></li><li><code>ease_out_expo</code></li><li><code>ease_in_out_expo</code></li><li><code>ease_in_circ</code></li><li><code>ease_out_circ</code></li><li><code>ease_in_out_circ</code></li></ul>

</section>

<section class="apple-entry" id="setting-settings-default_disable">

### `default_disable`

<p>Start each newly encountered macOS Space inactive. Press your activation key before Rift manages it.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-mouse_follows_focus">

### `mouse_follows_focus`

<p>Allow Rift to move the pointer with keyboard-driven focus and workspace changes.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-mouse_hides_on_focus">

### `mouse_hides_on_focus`

<p>Hide the pointer after Rift changes the focused window. Rift also hides it after a pointer warp when <a href="/rift-docs/reference/configuration/general/#setting-settings-mouse_follows_focus"><code>mouse_follows_focus</code></a> is enabled.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-focus_follows_mouse">

### `focus_follows_mouse`

<p>Ask Rift to focus a managed window when the pointer moves over it.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-horizontal_mouse_warp">

### `horizontal_mouse_warp`

<p>Treat displays stacked in macOS as a horizontal mouse chain when they are physically side-by-side. <code>top-to-bottom</code> puts the upper display logically left; <code>bottom-to-top</code> reverses that order. Crossing a left/right edge enters the neighboring display at the same vertical offset only if that position exists. This does not change macOS display arrangement.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>top-to-bottom</code> or <code>bottom-to-top</code> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

<p class="apple-label">Example</p>

```toml
[settings]
horizontal_mouse_warp = "top-to-bottom"
```

</section>

<section class="apple-entry" id="setting-settings-focus_follows_mouse_disable_hotkey">

### `focus_follows_mouse_disable_hotkey`

<p>Optional hotkey held to temporarily suspend focus-follows-mouse. Use a full hotkey such as <code>Ctrl + A</code> or a modifier such as <code>Ctrl</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>hotkey (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

<p class="apple-label">Example</p>

```toml
[settings]
focus_follows_mouse_disable_hotkey = "Ctrl"
```

</section>

<section class="apple-entry" id="setting-settings-auto_focus_blacklist">

### `auto_focus_blacklist`

<p>Bundle identifiers that should not cause Rift to switch workspaces when those applications become active, such as Spotlight.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>list of text values</dd></div><div><dt>Default</dt><dd>Empty list</dd></div></dl>

</section>

<section class="apple-entry" id="setting-settings-hot_reload">

### `hot_reload`

<p>Reload the config file when it changes. Even when this is false, Rift watches for keymap changes and reloads when the parsed bindings differ.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/quick-start/">Quick start</a></li>
<li><a href="/rift-docs/configuration/">Configuration guide</a></li>
<li><a href="/rift-docs/guides/window-management/#customize-keyboard-shortcuts">Keybindings</a></li>
</ul>

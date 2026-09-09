---
title: General
description: "Animation, pointer behavior, Space activation, hot reload, and dragging tiled windows."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.6-9-gbe3bbea.
-->

Animation, pointer behavior, Space activation, hot reload, and dragging tiled windows.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<div class="config-intro-example-label">Example</div>

```toml
[settings]
animate = true
animation_duration = 0.2
```

## <span class="config-table-heading">[settings]</span>

Global behavior shared by the active layout and the rest of Rift.

### `animate`

<section class="config-option config-option--simple">
<p class="config-description">Animate layout changes and focus transitions. Keep this off while troubleshooting layout behavior.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `animation_duration`

<section class="config-option config-option--simple">
<p class="config-description">Animation duration in seconds when <a class="config-setting-link" href="/rift-docs/reference/configuration/general/#animate"><code>animate</code></a> is enabled. Must not be negative.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.3</code></dd></div></dl>

</section>

### `animation_fps`

<section class="config-option config-option--simple">
<p class="config-description">Target animation frame rate. Higher values look smoother but use more CPU. Must be greater than zero.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>100</code></dd></div></dl>

</section>

### `animation_easing`

<section class="config-option config-option--expanded">
<p class="config-description">Curve used to accelerate and decelerate animations.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>text</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>&quot;ease_in_out&quot;</code></dd></div></dl>
<div class="config-values"><strong>Possible values</strong><div><code>ease_in_out</code> <code>linear</code> <code>ease_in_sine</code> <code>ease_out_sine</code> <code>ease_in_out_sine</code> <code>ease_in_quad</code> <code>ease_out_quad</code> <code>ease_in_out_quad</code> <code>ease_in_cubic</code> <code>ease_out_cubic</code> <code>ease_in_out_cubic</code> <code>ease_in_quart</code> <code>ease_out_quart</code> <code>ease_in_out_quart</code> <code>ease_in_quint</code> <code>ease_out_quint</code> <code>ease_in_out_quint</code> <code>ease_in_expo</code> <code>ease_out_expo</code> <code>ease_in_out_expo</code> <code>ease_in_circ</code> <code>ease_out_circ</code> <code>ease_in_out_circ</code></div></div>
</section>

### `default_disable`

<section class="config-option config-option--simple">
<p class="config-description">Start each newly encountered macOS Space inactive. Press your activation key before Rift manages it.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

### `mouse_follows_focus`

<section class="config-option config-option--simple">
<p class="config-description">Allow Rift to move the pointer with keyboard-driven focus and workspace changes.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

### `mouse_hides_on_focus`

<section class="config-option config-option--simple">
<p class="config-description">Hide the pointer after Rift changes the focused window. Rift also hides it after a pointer warp when <a class="config-setting-link" href="/rift-docs/reference/configuration/general/#mouse_follows_focus"><code>mouse_follows_focus</code></a> is enabled.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

### `focus_follows_mouse`

<section class="config-option config-option--simple">
<p class="config-description">Ask Rift to focus a managed window when the pointer moves over it.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

### `focus_follows_mouse_disable_hotkey`

<section class="config-option config-option--expanded">
<p class="config-description">Optional hotkey held to temporarily suspend focus-follows-mouse. Use a full hotkey such as <code>Ctrl + A</code> or a modifier such as <code>Ctrl</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>hotkey (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>
<div class="config-example"><div class="config-example__label">Example</div><pre><code class="language-toml">[settings]
focus_follows_mouse_disable_hotkey = &quot;Ctrl&quot;
</code></pre></div>
</section>

### `auto_focus_blacklist`

<section class="config-option config-option--simple">
<p class="config-description">Bundle identifiers that should not cause Rift to switch workspaces when those applications become active, such as Spotlight.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>list of text values</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Empty list</dd></div></dl>

</section>

### `hot_reload`

<section class="config-option config-option--simple">
<p class="config-description">Reload the config file when it changes. Even when this is false, Rift watches for keymap changes and reloads when the parsed bindings differ.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

## <span class="config-table-heading">[settings.window_snapping]</span>

Mouse-drag behavior for swapping tiled windows.

### `drag_swap_fraction`

<section class="config-option config-option--expanded">
<p class="config-description">Overlap needed to select a drag-swap target. Rift divides the intersection area by the union area of the two windows. Lower values make swaps easier to trigger.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0.3</code></dd></div></dl>
<aside class="config-note"><strong>Note</strong><span>If <a class="config-setting-link" href="/rift-docs/reference/configuration/general/#settingswindow_snapping"><code>[settings.window_snapping]</code></a> is omitted entirely, this starts at <code>0.0</code>. Set it explicitly for predictable behavior.</span></aside><div class="config-example"><div class="config-example__label">Example</div><pre><code class="language-toml">[settings.window_snapping]
drag_swap_fraction = 0.3
</code></pre></div>
</section>

## See also

- [Quick start](/rift-docs/quick-start/)
- [Configuration guide](/rift-docs/configuration/)
- [Keybindings](/rift-docs/guides/keybindings/)

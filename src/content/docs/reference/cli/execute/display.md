---
title: "Display commands"
description: "Display/mouse commands"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: `v0.5.7-4-g04defb3`.

Display/mouse commands. All commands act on the running Rift instance.

## <span class="cli-command-heading">focus</span>

<article class="cli-command">
<p class="cli-command__description">Focus a display by direction, index, or UUID.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute display focus [OPTIONS]</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--direction &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd>Direction relative to the current display (left, right, up, down).</dd></div>
<div class="cli-parameter"><dt><code>--index &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;</code></dt><dd>Display index (0-based).</dd></div>
<div class="cli-parameter"><dt><code>--uuid &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd>Display UUID.</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">move-mouse-to-index</span>

<article class="cli-command">
<p class="cli-command__description">Move mouse cursor to a display by index (0-based).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute display move-mouse-to-index &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;</code></dt><dd>Display index (0-based).</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">move-mouse-to-uuid</span>

<article class="cli-command">
<p class="cli-command__description">Move mouse cursor to a display by UUID.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute display move-mouse-to-uuid &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd>Display UUID.</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">move-window</span>

<article class="cli-command">
<p class="cli-command__description">Move a window to a display by direction, index, or UUID.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute display move-window [OPTIONS]</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--direction &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd>Direction relative to the window's current display (left, right, up, down).</dd></div>
<div class="cli-parameter"><dt><code>--index &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;</code></dt><dd>Display index (0-based).</dd></div>
<div class="cli-parameter"><dt><code>--uuid &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd>Display UUID.</dd></div>
<div class="cli-parameter"><dt><code>--window-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>&gt;</code></dt><dd>Optional window id (window idx); defaults to the focused window if omitted.</dd></div>
</dl></section>
</article>

## See also

- [Execute overview](/rift-docs/reference/cli/execute/)
- [CLI overview](/rift-docs/reference/cli/)

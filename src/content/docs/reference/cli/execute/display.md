---
title: "Display commands"
description: "Display/mouse commands"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Display/mouse commands. All commands act on the running Rift instance.

Generated from `rift-cli` at `v0.7.0-28-g6c63b50c`.

<section class="apple-entry">

## `focus`

<p>Focus a display by direction, index, or UUID.</p>
<pre class="apple-declaration"><code>rift-cli execute display focus &lt;--direction &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;|--index &lt;<a href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;|--uuid &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;&gt;</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--direction &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd><p>Direction relative to the current display (left, right, up, down).</p></dd></div>
<div><dt><code>--index &lt;<a href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;</code></dt><dd><p>Display index (0-based).</p></dd></div>
<div><dt><code>--uuid &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd><p>Display UUID.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `move-mouse`

<p>Move the mouse cursor to a display by direction, index, or UUID.</p>
<pre class="apple-declaration"><code>rift-cli execute display move-mouse &lt;--direction &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;|--index &lt;<a href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;|--uuid &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;&gt;</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--direction &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd><p>Direction relative to the current display (left, right, up, down).</p></dd></div>
<div><dt><code>--index &lt;<a href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;</code></dt><dd><p>Display index (0-based).</p></dd></div>
<div><dt><code>--uuid &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd><p>Display UUID.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `move-mouse-to-index`

<p>Move mouse cursor to a display by index (0-based).</p>
<pre class="apple-declaration"><code>rift-cli execute display move-mouse-to-index &lt;<a href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;</code></dt><dd><p>Display index (0-based).</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `move-mouse-to-uuid`

<p>Move mouse cursor to a display by UUID.</p>
<pre class="apple-declaration"><code>rift-cli execute display move-mouse-to-uuid &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd><p>Display UUID.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `move-window`

<p>Move a window to a display by direction, index, or UUID.</p>
<pre class="apple-declaration"><code>rift-cli execute display move-window [OPTIONS] &lt;--direction &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;|--index &lt;<a href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;|--uuid &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;&gt;</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--direction &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd><p>Direction relative to the current display (left, right, up, down).</p></dd></div>
<div><dt><code>--index &lt;<a href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;</code></dt><dd><p>Display index (0-based).</p></dd></div>
<div><dt><code>--uuid &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd><p>Display UUID.</p></dd></div>
<div><dt><code>--window-id &lt;<a href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>&gt;</code></dt><dd><p>Optional window id (window idx); defaults to the focused window if omitted.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `move-workspace`

<p>Move the active workspace to a display by direction, index, or UUID.</p>
<pre class="apple-declaration"><code>rift-cli execute display move-workspace [OPTIONS] &lt;--direction &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;|--index &lt;<a href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;|--uuid &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;&gt;</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--direction &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd><p>Direction relative to the current display (left, right, up, down).</p></dd></div>
<div><dt><code>--index &lt;<a href="/rift-docs/reference/cli/#value-index">INDEX</a>&gt;</code></dt><dd><p>Display index (0-based).</p></dd></div>
<div><dt><code>--uuid &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd><p>Display UUID.</p></dd></div>
<div><dt><code>--wrap-around</code></dt><dd><p>Continue from the opposite edge for directional selectors.</p></dd></div>
</dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/reference/cli/execute/">Execute overview</a></li>
<li><a href="/rift-docs/reference/cli/">CLI overview</a></li>
</ul>

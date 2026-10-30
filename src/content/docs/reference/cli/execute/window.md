---
title: "Window commands"
description: "Window management commands"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Window management commands. All commands act on the running Rift instance.

Generated from `rift-cli` at `v0.7.1-19-g572b9425-dirty`.

<section class="apple-entry">

## `next`

<p>Focus the next window.</p>
<pre class="apple-declaration"><code>rift-cli execute window next</code></pre>

</section>

<section class="apple-entry">

## `prev`

<p>Focus the previous window.</p>
<pre class="apple-declaration"><code>rift-cli execute window prev</code></pre>

</section>

<section class="apple-entry">

## `focus`

<p>Focus a window by direction or by a specific window ID.</p>
<pre class="apple-declaration"><code>rift-cli execute window focus [OPTIONS] [<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>]</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>[<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>]</code></dt><dd><p>Direction to focus (left, right, up, down).</p></dd></div>
</dl>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--window-id &lt;<a href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>&gt;</code></dt><dd><p>Rift window ID as JSON (<code>{&quot;pid&quot;:123,&quot;idx&quot;:456}</code>) or debug text.</p></dd></div>
<div><dt><code>--window-server-id &lt;<a href="/rift-docs/reference/cli/#value-window-server-id">WINDOW_SERVER_ID</a>&gt;</code></dt><dd><p>Optional macOS window server ID for the target window.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `toggle-float`

<p>Toggle window floating state.</p>
<pre class="apple-declaration"><code>rift-cli execute window toggle-float</code></pre>

</section>

<section class="apple-entry">

## `toggle-fullscreen`

<p>Toggle fullscreen mode (fills the whole screen, ignores outer gaps).</p>
<pre class="apple-declaration"><code>rift-cli execute window toggle-fullscreen</code></pre>

</section>

<section class="apple-entry">

## `toggle-fullscreen-within-gaps`

<p>Toggle fullscreen within configured outer gaps (respects outer gaps / fills tiling area).</p>
<pre class="apple-declaration"><code>rift-cli execute window toggle-fullscreen-within-gaps</code></pre>

</section>

<section class="apple-entry">

## `resize-grow`

<p>Grow the current window size (increments by ~5%).</p>
<pre class="apple-declaration"><code>rift-cli execute window resize-grow [OPTIONS]</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--orientation &lt;<a href="/rift-docs/reference/cli/#value-orientation">ORIENTATION</a>&gt;</code></dt><dd><p>Axis to resize; smart chooses the nearest applicable split.</p><dl class="apple-meta"><div><dt>Default</dt><dd><code>horizontal</code></dd></div><div><dt>Values</dt><dd><code>horizontal</code>, <code>vertical</code>, <code>smart</code></dd></div></dl></dd></div>
</dl>

</section>

<section class="apple-entry">

## `resize-shrink`

<p>Shrink the current window size (decrements by ~5%).</p>
<pre class="apple-declaration"><code>rift-cli execute window resize-shrink [OPTIONS]</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--orientation &lt;<a href="/rift-docs/reference/cli/#value-orientation">ORIENTATION</a>&gt;</code></dt><dd><p>Axis to resize; smart chooses the nearest applicable split.</p><dl class="apple-meta"><div><dt>Default</dt><dd><code>horizontal</code></dd></div><div><dt>Values</dt><dd><code>horizontal</code>, <code>vertical</code>, <code>smart</code></dd></div></dl></dd></div>
</dl>

</section>

<section class="apple-entry">

## `resize-by`

<p>Resize the selected window by a fractional amount. Pass a signed floating value: positive to grow, negative to shrink. The value is a fraction of the current size (e.g. <code>0.05</code> = 5%).</p>
<pre class="apple-declaration"><code>rift-cli execute window resize-by --amount &lt;AMOUNT&gt;</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--amount &lt;AMOUNT&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `close`

<p>Close a window as if Command-W was pressed.</p>
<pre class="apple-declaration"><code>rift-cli execute window close [OPTIONS]</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--window-id &lt;<a href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>&gt;</code></dt><dd><p>Optional window server ID; defaults to the focused window [aliases: --window-server-id].</p></dd></div>
</dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/reference/cli/execute/">Execute overview</a></li>
<li><a href="/rift-docs/reference/cli/">CLI overview</a></li>
</ul>

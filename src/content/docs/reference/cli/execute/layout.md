---
title: "Layout commands"
description: "Layout commands"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Layout commands. All commands act on the running Rift instance.

Generated from `rift-cli` at `v0.7.1-19-g572b9425-dirty`.

<section class="apple-entry">

## `ascend`

<p>Move selection up the tree.</p>
<pre class="apple-declaration"><code>rift-cli execute layout ascend</code></pre>

</section>

<section class="apple-entry">

## `descend`

<p>Move selection down the tree.</p>
<pre class="apple-declaration"><code>rift-cli execute layout descend</code></pre>

</section>

<section class="apple-entry">

## `move-node`

<p>Move the selected node in a direction.</p>
<pre class="apple-declaration"><code>rift-cli execute layout move-node &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `join-window`

<p>Join the selected window with neighbor in a direction.</p>
<pre class="apple-declaration"><code>rift-cli execute layout join-window &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `consume-or-expel-window`

<p>Join with a neighbor, or unjoin when the selected window is already joined.</p>
<pre class="apple-declaration"><code>rift-cli execute layout consume-or-expel-window &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `toggle-stack`

<p>Toggle stacked state for the selected container.</p>
<pre class="apple-declaration"><code>rift-cli execute layout toggle-stack</code></pre>

</section>

<section class="apple-entry">

## `toggle-orientation`

<p>Global orientation toggle that works consistently across layout modes (and between splits/stacks).</p>
<pre class="apple-declaration"><code>rift-cli execute layout toggle-orientation</code></pre>

</section>

<section class="apple-entry">

## `balance`

<p>Even out split sizes along each axis (bsp and traditional layouts only).</p>
<pre class="apple-declaration"><code>rift-cli execute layout balance</code></pre>

</section>

<section class="apple-entry">

## `unjoin`

<p>Unjoin previously joined windows.</p>
<pre class="apple-declaration"><code>rift-cli execute layout unjoin</code></pre>

</section>

<section class="apple-entry">

## `toggle-focus-float`

<p>Toggle floating on the focused selection (tree focus).</p>
<pre class="apple-declaration"><code>rift-cli execute layout toggle-focus-float</code></pre>

</section>

<section class="apple-entry">

## `adjust-master-ratio`

<p>Adjust master ratio by a delta (master/stack layout only).</p>
<pre class="apple-declaration"><code>rift-cli execute layout adjust-master-ratio &lt;DELTA&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;DELTA&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `adjust-master-count`

<p>Adjust master count by a delta (master/stack layout only).</p>
<pre class="apple-declaration"><code>rift-cli execute layout adjust-master-count &lt;DELTA&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;DELTA&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `promote-to-master`

<p>Promote the selected window into the master area (master/stack layout only).</p>
<pre class="apple-declaration"><code>rift-cli execute layout promote-to-master</code></pre>

</section>

<section class="apple-entry">

## `swap-master-stack`

<p>Swap the first master with the first stack window (master/stack layout only).</p>
<pre class="apple-declaration"><code>rift-cli execute layout swap-master-stack</code></pre>

</section>

<section class="apple-entry">

## `swap-windows`

<p>Swap two windows by window id (<code>WindowId { pid: ..., idx: ... }</code>).</p>
<pre class="apple-declaration"><code>rift-cli execute layout swap-windows &lt;A&gt; &lt;B&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;A&gt;</code></dt><dd></dd></div>
<div><dt><code>&lt;B&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `scroll-strip`

<p>Scroll the strip by a normalized delta (scrolling layout only).</p>
<pre class="apple-declaration"><code>rift-cli execute layout scroll-strip &lt;DELTA&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;DELTA&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `snap-strip`

<p>Snap the strip to the nearest column boundary (scrolling layout only).</p>
<pre class="apple-declaration"><code>rift-cli execute layout snap-strip</code></pre>

</section>

<section class="apple-entry">

## `switch-preset-column-width`

<p>Switch to the next preset column width (scrolling layout only).</p>
<pre class="apple-declaration"><code>rift-cli execute layout switch-preset-column-width [OPTIONS]</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--backwards</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `center-selection`

<p>Toggle centering of the selected column in scrolling layout. If invoked again on the same selection, centering is removed.</p>
<pre class="apple-declaration"><code>rift-cli execute layout center-selection</code></pre>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/reference/cli/execute/">Execute overview</a></li>
<li><a href="/rift-docs/reference/cli/">CLI overview</a></li>
</ul>

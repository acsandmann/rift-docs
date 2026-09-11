---
title: "Layout commands"
description: "Layout commands"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: `v0.5.7-4-g04defb3`.

Layout commands. All commands act on the running Rift instance.

## <span class="cli-command-heading">ascend</span>

<article class="cli-command">
<p class="cli-command__description">Move selection up the tree.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout ascend</code></div></div>
</article>

## <span class="cli-command-heading">descend</span>

<article class="cli-command">
<p class="cli-command__description">Move selection down the tree.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout descend</code></div></div>
</article>

## <span class="cli-command-heading">move-node</span>

<article class="cli-command">
<p class="cli-command__description">Move the selected node in a direction.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout move-node &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">join-window</span>

<article class="cli-command">
<p class="cli-command__description">Join the selected window with neighbor in a direction.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout join-window &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">consume-or-expel-window</span>

<article class="cli-command">
<p class="cli-command__description">Join with a neighbor, or unjoin when the selected window is already joined.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout consume-or-expel-window &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">toggle-stack</span>

<article class="cli-command">
<p class="cli-command__description">Toggle stacked state for the selected container.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout toggle-stack</code></div></div>
</article>

## <span class="cli-command-heading">toggle-orientation</span>

<article class="cli-command">
<p class="cli-command__description">Global orientation toggle that works consistently across layout modes (and between splits/stacks).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout toggle-orientation</code></div></div>
</article>

## <span class="cli-command-heading">unjoin</span>

<article class="cli-command">
<p class="cli-command__description">Unjoin previously joined windows.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout unjoin</code></div></div>
</article>

## <span class="cli-command-heading">toggle-focus-float</span>

<article class="cli-command">
<p class="cli-command__description">Toggle floating on the focused selection (tree focus).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout toggle-focus-float</code></div></div>
</article>

## <span class="cli-command-heading">adjust-master-ratio</span>

<article class="cli-command">
<p class="cli-command__description">Adjust master ratio by a delta (master/stack layout only).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout adjust-master-ratio &lt;DELTA&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;DELTA&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">adjust-master-count</span>

<article class="cli-command">
<p class="cli-command__description">Adjust master count by a delta (master/stack layout only).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout adjust-master-count &lt;DELTA&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;DELTA&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">promote-to-master</span>

<article class="cli-command">
<p class="cli-command__description">Promote the selected window into the master area (master/stack layout only).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout promote-to-master</code></div></div>
</article>

## <span class="cli-command-heading">swap-master-stack</span>

<article class="cli-command">
<p class="cli-command__description">Swap the first master with the first stack window (master/stack layout only).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout swap-master-stack</code></div></div>
</article>

## <span class="cli-command-heading">swap-windows</span>

<article class="cli-command">
<p class="cli-command__description">Swap two windows by window id (<code>WindowId { pid: ..., idx: ... }</code>).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout swap-windows &lt;A&gt; &lt;B&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;A&gt;</code></dt><dd></dd></div>
<div class="cli-parameter"><dt><code>&lt;B&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">scroll-strip</span>

<article class="cli-command">
<p class="cli-command__description">Scroll the strip by a normalized delta (scrolling layout only).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout scroll-strip &lt;DELTA&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;DELTA&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">snap-strip</span>

<article class="cli-command">
<p class="cli-command__description">Snap the strip to the nearest column boundary (scrolling layout only).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout snap-strip</code></div></div>
</article>

## <span class="cli-command-heading">center-selection</span>

<article class="cli-command">
<p class="cli-command__description">Toggle centering of the selected column in scrolling layout. If invoked again on the same selection, centering is removed.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute layout center-selection</code></div></div>
</article>

## See also

- [Execute overview](/rift-docs/reference/cli/execute/)
- [CLI overview](/rift-docs/reference/cli/)

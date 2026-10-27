---
title: "Workspace commands"
description: "Virtual workspace commands"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Virtual workspace commands. All commands act on the running Rift instance.

Generated from `rift-cli` at `v0.7.0-27-g0a6ceb7f-dirty`.

<section class="apple-entry">

## `next`

<p>Switch to next workspace.</p>
<pre class="apple-declaration"><code>rift-cli execute workspace next [SKIP_EMPTY]</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>[SKIP_EMPTY]</code></dt><dd><dl class="apple-meta"><div><dt>Values</dt><dd><code>true</code>, <code>false</code></dd></div></dl></dd></div>
</dl>

</section>

<section class="apple-entry">

## `prev`

<p>Switch to previous workspace.</p>
<pre class="apple-declaration"><code>rift-cli execute workspace prev [SKIP_EMPTY]</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>[SKIP_EMPTY]</code></dt><dd><dl class="apple-meta"><div><dt>Values</dt><dd><code>true</code>, <code>false</code></dd></div></dl></dd></div>
</dl>

</section>

<section class="apple-entry">

## `switch`

<p>Switch to specific workspace.</p>
<pre class="apple-declaration"><code>rift-cli execute workspace switch &lt;<a href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `move-window`

<p>Move current window to workspace.</p>
<pre class="apple-declaration"><code>rift-cli execute workspace move-window [OPTIONS] &lt;<a href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt; [<a href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>]</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></dt><dd></dd></div>
<div><dt><code>[<a href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>]</code></dt><dd></dd></div>
</dl>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--follow</code></dt><dd><p>Switch to the destination workspace after moving the window.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `create`

<p>Create a new workspace.</p>
<pre class="apple-declaration"><code>rift-cli execute workspace create</code></pre>

</section>

<section class="apple-entry">

## `last`

<p>Switch to the last workspace.</p>
<pre class="apple-declaration"><code>rift-cli execute workspace last</code></pre>

</section>

<section class="apple-entry">

## `set-layout`

<p>Set layout mode for a workspace (or active workspace when omitted).</p>
<pre class="apple-declaration"><code>rift-cli execute workspace set-layout [OPTIONS] &lt;<a href="/rift-docs/reference/cli/#value-mode">MODE</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-mode">MODE</a>&gt;</code></dt><dd><p>Layout mode: traditional, bsp, stack, master_stack, scrolling, floating.</p></dd></div>
</dl>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--workspace-id &lt;<a href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></dt><dd><p>Workspace index (0-based). Defaults to active workspace if omitted.</p></dd></div>
</dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/reference/cli/execute/">Execute overview</a></li>
<li><a href="/rift-docs/reference/cli/">CLI overview</a></li>
</ul>

---
title: "Other actions"
description: "Save layouts, inspect Rift, or exit."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

These commands work with Rift’s complete runtime or saved layout state rather than one command group.

Generated from `rift-cli` at `v0.7.2-32-gcd791977-dirty`.

<section class="apple-entry">

## `binding-mode`

<p>Switch to a configured binding mode (use default to reset).</p>
<pre class="apple-declaration"><code>rift-cli execute binding-mode &lt;<a href="/rift-docs/reference/cli/#value-mode">MODE</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-mode">MODE</a>&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `save-and-exit`

<p>Save the master file and exit Rift.</p>
<pre class="apple-declaration"><code>rift-cli execute save-and-exit</code></pre>

</section>

<section class="apple-entry">

## `save-layout`

<p>Save Rift's current layout state without exiting.</p>
<pre class="apple-declaration"><code>rift-cli execute save-layout &lt;PATH|--master&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>[PATH]</code></dt><dd><p>Layout file path.</p></dd></div>
</dl>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--master</code></dt><dd><p>Use Rift's master file (~/.rift/layout.ron).</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `load-layout`

<p>Restore a layout file to the current workspace, macOS Space, or every display.</p>
<pre class="apple-declaration"><code>rift-cli execute load-layout [OPTIONS] &lt;PATH|--master&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>[PATH]</code></dt><dd><p>Layout file path.</p></dd></div>
</dl>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--master</code></dt><dd><p>Use Rift's master file (~/.rift/layout.ron).</p></dd></div>
<div><dt><code>--scope &lt;<a href="/rift-docs/reference/cli/#value-scope">SCOPE</a>&gt;</code></dt><dd><p>Restore one workspace, the current macOS Space, or the current Space of every display.</p><dl class="apple-meta"><div><dt>Default</dt><dd><code>workspace</code></dd></div><div><dt>Values</dt><dd><code>workspace</code>, <code>space</code>, <code>displays</code></dd></div></dl></dd></div>
</dl>

</section>

<section class="apple-entry">

## `debug`

<p>Print layout tree debugging output in the running rift instance.</p>
<pre class="apple-declaration"><code>rift-cli execute debug</code></pre>

</section>

<section class="apple-entry">

## `serialize`

<p>Serialize and print runtime state.</p>
<pre class="apple-declaration"><code>rift-cli execute serialize</code></pre>

</section>

<section class="apple-entry">

## `toggle-space-activated`

<p>this command is deprecated, use <code>rift-cli execute space toggle-activated</code>.</p>
<pre class="apple-declaration"><code>rift-cli execute toggle-space-activated</code></pre>

</section>

<section class="apple-entry">

## `show-timing`

<p>Show timing metrics.</p>
<pre class="apple-declaration"><code>rift-cli execute show-timing</code></pre>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/reference/cli/execute/">Execute overview</a></li>
<li><a href="/rift-docs/reference/cli/execute/config/">Configuration commands</a></li>
</ul>

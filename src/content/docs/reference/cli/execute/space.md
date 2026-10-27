---
title: "macOS Space commands"
description: "macOS space commands (Mission Control spaces, not virtual workspaces)"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

macOS space commands (Mission Control spaces, not virtual workspaces). All commands act on the running Rift instance.

Generated from `rift-cli` at `v0.7.0-27-g0a6ceb7f-dirty`.

<section class="apple-entry">

## `toggle-activated`

<p>Toggle whether rift manages the current macOS space.</p>
<pre class="apple-declaration"><code>rift-cli execute space toggle-activated</code></pre>

</section>

<section class="apple-entry">

## `switch`

<p>Switch to an adjacent macOS space (Mission Control spaces, not virtual workspaces).</p>
<pre class="apple-declaration"><code>rift-cli execute space switch &lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd><p>Direction to switch (left, right, up, down).</p></dd></div>
</dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/reference/cli/execute/">Execute overview</a></li>
<li><a href="/rift-docs/reference/cli/">CLI overview</a></li>
</ul>

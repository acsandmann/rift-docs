---
title: "Query commands"
description: "Inspect Rift state as JSON."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: `v0.5.7-4-g04defb3`.

Queries read state without changing it. Set `RIFT_CLI_PRETTY=1` to format returned JSON for reading.

## <span class="cli-command-heading">workspaces</span>

<article class="cli-command">
<p class="cli-command__description">List virtual workspaces (optionally for a specific macOS space).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli query workspaces [OPTIONS]</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--space-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-space-id">SPACE_ID</a>&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">windows</span>

<article class="cli-command">
<p class="cli-command__description">List windows (optionally filtered by space).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli query windows [OPTIONS]</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--space-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-space-id">SPACE_ID</a>&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">displays</span>

<article class="cli-command">
<p class="cli-command__description">List connected displays.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli query displays</code></div></div>
</article>

## <span class="cli-command-heading">window</span>

<article class="cli-command">
<p class="cli-command__description">Get information about a specific window.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli query window &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">applications</span>

<article class="cli-command">
<p class="cli-command__description">List running applications.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli query applications</code></div></div>
</article>

## <span class="cli-command-heading">layout</span>

<article class="cli-command">
<p class="cli-command__description">Get layout state and normalized container tree for a space.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli query layout [OPTIONS]</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--space-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-space-id">SPACE_ID</a>&gt;</code></dt><dd>macOS space ID; defaults to the active display space.</dd></div>
<div class="cli-parameter"><dt><code>--workspace-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></dt><dd>Virtual workspace index; defaults to the active workspace.</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">workspace-layout</span>

<article class="cli-command">
<p class="cli-command__description">Get workspace layout-engine mode(s).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli query workspace-layout [OPTIONS]</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--space-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-space-id">SPACE_ID</a>&gt;</code></dt><dd></dd></div>
<div class="cli-parameter"><dt><code>--workspace-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">metrics</span>

<article class="cli-command">
<p class="cli-command__description">Get performance metrics.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli query metrics</code></div></div>
</article>

## See also

- [Execute commands](/rift-docs/reference/cli/execute/)
- [Subscriptions](/rift-docs/reference/cli/subscribe/)

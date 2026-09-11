---
title: "Other actions"
description: "Save layouts, inspect Rift, or exit."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: `v0.5.7-4-g04defb3`.

These commands work with Rift’s complete runtime or saved layout state rather than one command group.

## <span class="cli-command-heading">save-and-exit</span>

<article class="cli-command">
<p class="cli-command__description">Save the master file and exit Rift.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute save-and-exit</code></div></div>
</article>

## <span class="cli-command-heading">save-layout</span>

<article class="cli-command">
<p class="cli-command__description">Save Rift's current layout state without exiting.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute save-layout &lt;PATH|--master&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>[PATH]</code></dt><dd>Layout file path.</dd></div>
</dl></section>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--master</code></dt><dd>Use Rift's master file (~/.rift/layout.ron).</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">load-layout</span>

<article class="cli-command">
<p class="cli-command__description">Restore a layout file to the current workspace or macOS Space.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute load-layout [OPTIONS] &lt;PATH|--master&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>[PATH]</code></dt><dd>Layout file path.</dd></div>
</dl></section>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--master</code></dt><dd>Use Rift's master file (~/.rift/layout.ron).</dd></div>
<div class="cli-parameter"><dt><code>--scope &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-scope">SCOPE</a>&gt;</code></dt><dd>Restore one workspace or all saved workspaces for the current macOS Space. <span class="cli-command__constraint">Default: <code>workspace</code>.</span> <span class="cli-command__constraint">Accepted values: <code>workspace</code>, <code>space</code>.</span></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">debug</span>

<article class="cli-command">
<p class="cli-command__description">Print layout tree debugging output in the running rift instance.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute debug</code></div></div>
</article>

## <span class="cli-command-heading">serialize</span>

<article class="cli-command">
<p class="cli-command__description">Serialize and print runtime state.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute serialize</code></div></div>
</article>

## <span class="cli-command-heading">toggle-space-activated</span>

<article class="cli-command">
<p class="cli-command__description">this command is deprecated, use <code>rift-cli execute space toggle-activated</code>.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute toggle-space-activated</code></div></div>
</article>

## <span class="cli-command-heading">show-timing</span>

<article class="cli-command">
<p class="cli-command__description">Show timing metrics.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute show-timing</code></div></div>
</article>

## See also

- [Execute overview](/rift-docs/reference/cli/execute/)
- [Configuration commands](/rift-docs/reference/cli/execute/config/)

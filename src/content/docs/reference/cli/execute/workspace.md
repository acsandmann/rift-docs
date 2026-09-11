---
title: "Workspace commands"
description: "Virtual workspace commands"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: `v0.5.7-4-g04defb3`.

Virtual workspace commands. All commands act on the running Rift instance.

## <span class="cli-command-heading">next</span>

<article class="cli-command">
<p class="cli-command__description">Switch to next workspace.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute workspace next [SKIP_EMPTY]</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>[SKIP_EMPTY]</code></dt><dd><span class="cli-command__constraint">Accepted values: <code>true</code>, <code>false</code>.</span></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">prev</span>

<article class="cli-command">
<p class="cli-command__description">Switch to previous workspace.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute workspace prev [SKIP_EMPTY]</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>[SKIP_EMPTY]</code></dt><dd><span class="cli-command__constraint">Accepted values: <code>true</code>, <code>false</code>.</span></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">switch</span>

<article class="cli-command">
<p class="cli-command__description">Switch to specific workspace.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute workspace switch &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">move-window</span>

<article class="cli-command">
<p class="cli-command__description">Move current window to workspace.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute workspace move-window [OPTIONS] &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt; [<a class="cli-value-link" href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>]</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></dt><dd></dd></div>
<div class="cli-parameter"><dt><code>[<a class="cli-value-link" href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>]</code></dt><dd></dd></div>
</dl></section>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--follow</code></dt><dd>Switch to the destination workspace after moving the window.</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">create</span>

<article class="cli-command">
<p class="cli-command__description">Create a new workspace.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute workspace create</code></div></div>
</article>

## <span class="cli-command-heading">last</span>

<article class="cli-command">
<p class="cli-command__description">Switch to the last workspace.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute workspace last</code></div></div>
</article>

## <span class="cli-command-heading">set-layout</span>

<article class="cli-command">
<p class="cli-command__description">Set layout mode for a workspace (or active workspace when omitted).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute workspace set-layout [OPTIONS] &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-mode">MODE</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-mode">MODE</a>&gt;</code></dt><dd>Layout mode: traditional, bsp, stack, master_stack, scrolling.</dd></div>
</dl></section>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--workspace-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></dt><dd>Workspace index (0-based). Defaults to active workspace if omitted.</dd></div>
</dl></section>
</article>

## See also

- [Execute overview](/rift-docs/reference/cli/execute/)
- [CLI overview](/rift-docs/reference/cli/)

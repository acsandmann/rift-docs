---
title: "macOS Space commands"
description: "macOS space commands (Mission Control spaces, not virtual workspaces)"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: `v0.5.7-4-g04defb3`.

macOS space commands (Mission Control spaces, not virtual workspaces). All commands act on the running Rift instance.

## <span class="cli-command-heading">toggle-activated</span>

<article class="cli-command">
<p class="cli-command__description">Toggle whether rift manages the current macOS space.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute space toggle-activated</code></div></div>
</article>

## <span class="cli-command-heading">switch</span>

<article class="cli-command">
<p class="cli-command__description">Switch to an adjacent macOS space (Mission Control spaces, not virtual workspaces).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute space switch &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>&gt;</code></dt><dd>Direction to switch (left, right, up, down).</dd></div>
</dl></section>
</article>

## See also

- [Execute overview](/rift-docs/reference/cli/execute/)
- [CLI overview](/rift-docs/reference/cli/)

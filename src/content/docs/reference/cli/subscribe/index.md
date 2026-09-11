---
title: "Subscriptions"
description: "Stream Rift events or run commands when state changes."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: `v0.5.7-4-g04defb3`.

Subscribe to events over Mach IPC, or ask Rift to run another command when an event occurs.

## <span class="cli-command-heading">mach</span>

<article class="cli-command">
<p class="cli-command__description">Subscribe to Mach IPC events.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli subscribe mach &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></dt><dd>Event to subscribe to (workspace_changed, windows_changed, window_title_changed, focused_window_changed, stacks_changed, *).</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">cli</span>

<article class="cli-command">
<p class="cli-command__description">Subscribe to events via CLI command execution.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli subscribe cli [OPTIONS] --event &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt; --command &lt;COMMAND&gt;</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--event &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></dt><dd>Event to subscribe to (workspace_changed, windows_changed, window_title_changed, focused_window_changed, stacks_changed, *).</dd></div>
<div class="cli-parameter"><dt><code>--command &lt;COMMAND&gt;</code></dt><dd>Command to execute when event occurs.</dd></div>
<div class="cli-parameter"><dt><code>--args &lt;ARGS&gt;</code></dt><dd>Arguments to pass to command (event data will be appended as JSON).</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">unsub-mach</span>

<article class="cli-command">
<p class="cli-command__description">Unsubscribe from Mach IPC events.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli subscribe unsub-mach &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></dt><dd>Event to unsubscribe from.</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">unsub-cli</span>

<article class="cli-command">
<p class="cli-command__description">Unsubscribe from CLI events.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli subscribe unsub-cli &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></dt><dd>Event to unsubscribe from.</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">list-cli</span>

<article class="cli-command">
<p class="cli-command__description">List current CLI subscriptions.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli subscribe list-cli</code></div></div>
</article>

## See also

- [Queries](/rift-docs/reference/cli/query/)
- [Integrations](/rift-docs/ecosystem/integrations/)

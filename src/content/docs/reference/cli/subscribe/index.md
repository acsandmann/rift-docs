---
title: "Subscriptions"
description: "Stream Rift events or run commands when state changes."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Subscribe to events over Mach IPC, or ask Rift to run another command when an event occurs.

Generated from `rift-cli` at `v0.7.0-28-g6c63b50c`.

<section class="apple-entry">

## `mach`

<p>Subscribe to Mach IPC events.</p>
<pre class="apple-declaration"><code>rift-cli subscribe mach &lt;<a href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></dt><dd><p>Event to subscribe to (workspace_changed, windows_changed, window_title_changed, focused_window_changed, stacks_changed, layout_changed, selection_changed, binding_mode_changed, config_changed, *).</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `cli`

<p>Subscribe to events via CLI command execution.</p>
<pre class="apple-declaration"><code>rift-cli subscribe cli [OPTIONS] --event &lt;<a href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt; --command &lt;COMMAND&gt;</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--event &lt;<a href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></dt><dd><p>Event to subscribe to (workspace_changed, windows_changed, window_title_changed, focused_window_changed, stacks_changed, layout_changed, selection_changed, binding_mode_changed, config_changed, *).</p></dd></div>
<div><dt><code>--command &lt;COMMAND&gt;</code></dt><dd><p>Command to execute when event occurs.</p></dd></div>
<div><dt><code>--args &lt;ARGS&gt;</code></dt><dd><p>Arguments to pass to command (event data will be appended as JSON).</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `unsub-mach`

<p>Unsubscribe from Mach IPC events.</p>
<pre class="apple-declaration"><code>rift-cli subscribe unsub-mach &lt;<a href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></dt><dd><p>Event to unsubscribe from.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `unsub-cli`

<p>Unsubscribe from CLI events.</p>
<pre class="apple-declaration"><code>rift-cli subscribe unsub-cli &lt;<a href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-event">EVENT</a>&gt;</code></dt><dd><p>Event to unsubscribe from.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `list-cli`

<p>List current CLI subscriptions.</p>
<pre class="apple-declaration"><code>rift-cli subscribe list-cli</code></pre>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/reference/cli/query/">Queries</a></li>
<li><a href="/rift-docs/ecosystem/integrations/">Integrations</a></li>
</ul>

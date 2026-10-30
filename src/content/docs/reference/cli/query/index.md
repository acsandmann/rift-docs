---
title: "Query commands"
description: "Inspect Rift state as JSON."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Queries read state without changing it. Set `RIFT_CLI_PRETTY=1` to format returned JSON for reading.

Generated from `rift-cli` at `v0.7.1-19-g572b9425-dirty`.

<section class="apple-entry">

## `workspaces`

<p>List virtual workspaces (optionally for a specific macOS space).</p>
<pre class="apple-declaration"><code>rift-cli query workspaces [OPTIONS]</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--space-id &lt;<a href="/rift-docs/reference/cli/#value-space-id">SPACE_ID</a>&gt;</code></dt><dd><p>macOS space ID; defaults to the active display space.</p></dd></div>
<div><dt><code>--display &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd><p>Display UUID; uses the display's current macOS space.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `windows`

<p>List windows (optionally filtered by space).</p>
<pre class="apple-declaration"><code>rift-cli query windows [OPTIONS]</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--space-id &lt;<a href="/rift-docs/reference/cli/#value-space-id">SPACE_ID</a>&gt;</code></dt><dd><p>macOS space ID; defaults to the active display space.</p></dd></div>
<div><dt><code>--display &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd><p>Display UUID; uses the display's current macOS space.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `displays`

<p>List connected displays.</p>
<pre class="apple-declaration"><code>rift-cli query displays</code></pre>

</section>

<section class="apple-entry">

## `window`

<p>Get information about a specific window.</p>
<pre class="apple-declaration"><code>rift-cli query window &lt;<a href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;<a href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `applications`

<p>List running applications.</p>
<pre class="apple-declaration"><code>rift-cli query applications</code></pre>

</section>

<section class="apple-entry">

## `layout`

<p>Get layout state and normalized container tree for a space.</p>
<pre class="apple-declaration"><code>rift-cli query layout [OPTIONS]</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--space-id &lt;<a href="/rift-docs/reference/cli/#value-space-id">SPACE_ID</a>&gt;</code></dt><dd><p>macOS space ID; defaults to the active display space.</p></dd></div>
<div><dt><code>--display &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd><p>Display UUID; uses the display's current macOS space.</p></dd></div>
<div><dt><code>--workspace-id &lt;<a href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></dt><dd><p>Virtual workspace index; defaults to the active workspace.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `workspace-layout`

<p>Get workspace layout-engine mode(s).</p>
<pre class="apple-declaration"><code>rift-cli query workspace-layout [OPTIONS]</code></pre>
<p class="apple-label">Options</p>
<dl class="apple-parameters">
<div><dt><code>--space-id &lt;<a href="/rift-docs/reference/cli/#value-space-id">SPACE_ID</a>&gt;</code></dt><dd><p>macOS space ID; defaults to the active display space.</p></dd></div>
<div><dt><code>--display &lt;<a href="/rift-docs/reference/cli/#value-uuid">UUID</a>&gt;</code></dt><dd><p>Display UUID; uses the display's current macOS space.</p></dd></div>
<div><dt><code>--workspace-id &lt;<a href="/rift-docs/reference/cli/#value-workspace-id">WORKSPACE_ID</a>&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `binding-mode`

<p>Get the active binding mode name.</p>
<pre class="apple-declaration"><code>rift-cli query binding-mode</code></pre>

</section>

<section class="apple-entry">

## `metrics`

<p>Get performance metrics.</p>
<pre class="apple-declaration"><code>rift-cli query metrics</code></pre>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/reference/cli/execute/">Execute commands</a></li>
<li><a href="/rift-docs/reference/cli/subscribe/">Subscriptions</a></li>
</ul>

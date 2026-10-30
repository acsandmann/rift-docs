---
title: "Service commands"
description: "Manage Rift’s per-user launchd service."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

:::note[Use the `rift` binary]
These legacy `rift-cli service` names redirect you to the `rift` binary. Use `rift service install`, `start`, `restart`, `stop`, or `uninstall`.
:::

Generated from `rift-cli` at `v0.7.1-19-g572b9425-dirty`.

<section class="apple-entry">

## `install`

<p>Install the per-user launchd service.</p>
<pre class="apple-declaration"><code>rift-cli service install</code></pre>

</section>

<section class="apple-entry">

## `uninstall`

<p>Uninstall the per-user launchd service.</p>
<pre class="apple-declaration"><code>rift-cli service uninstall</code></pre>

</section>

<section class="apple-entry">

## `start`

<p>Start (or bootstrap) the service.</p>
<pre class="apple-declaration"><code>rift-cli service start</code></pre>

</section>

<section class="apple-entry">

## `stop`

<p>Stop (or bootout/kill) the service.</p>
<pre class="apple-declaration"><code>rift-cli service stop</code></pre>

</section>

<section class="apple-entry">

## `restart`

<p>Restart the service (kickstart -k).</p>
<pre class="apple-declaration"><code>rift-cli service restart</code></pre>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/installation/">Installation</a></li>
<li><a href="/rift-docs/reference/cli/">CLI overview</a></li>
</ul>

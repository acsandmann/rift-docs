---
title: "Window commands"
description: "Window management commands"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: `v0.5.7-4-g04defb3`.

Window management commands. All commands act on the running Rift instance.

## <span class="cli-command-heading">next</span>

<article class="cli-command">
<p class="cli-command__description">Focus the next window.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute window next</code></div></div>
</article>

## <span class="cli-command-heading">prev</span>

<article class="cli-command">
<p class="cli-command__description">Focus the previous window.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute window prev</code></div></div>
</article>

## <span class="cli-command-heading">focus</span>

<article class="cli-command">
<p class="cli-command__description">Focus a window by direction or by a specific window ID.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute window focus [OPTIONS] [<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>]</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>[<a class="cli-value-link" href="/rift-docs/reference/cli/#value-direction">DIRECTION</a>]</code></dt><dd>Direction to focus (left, right, up, down).</dd></div>
</dl></section>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--window-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>&gt;</code></dt><dd>Rift window ID as JSON (<code>{&quot;pid&quot;:123,&quot;idx&quot;:456}</code>) or debug text.</dd></div>
<div class="cli-parameter"><dt><code>--window-server-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-window-server-id">WINDOW_SERVER_ID</a>&gt;</code></dt><dd>Optional macOS window server ID for the target window.</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">toggle-float</span>

<article class="cli-command">
<p class="cli-command__description">Toggle window floating state.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute window toggle-float</code></div></div>
</article>

## <span class="cli-command-heading">toggle-fullscreen</span>

<article class="cli-command">
<p class="cli-command__description">Toggle fullscreen mode (fills the whole screen, ignores outer gaps).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute window toggle-fullscreen</code></div></div>
</article>

## <span class="cli-command-heading">toggle-fullscreen-within-gaps</span>

<article class="cli-command">
<p class="cli-command__description">Toggle fullscreen within configured outer gaps (respects outer gaps / fills tiling area).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute window toggle-fullscreen-within-gaps</code></div></div>
</article>

## <span class="cli-command-heading">resize-grow</span>

<article class="cli-command">
<p class="cli-command__description">Grow the current window size (increments by ~5%).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute window resize-grow [OPTIONS]</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--orientation &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-orientation">ORIENTATION</a>&gt;</code></dt><dd>Axis to resize; smart chooses the nearest applicable split. <span class="cli-command__constraint">Default: <code>horizontal</code>.</span> <span class="cli-command__constraint">Accepted values: <code>horizontal</code>, <code>vertical</code>, <code>smart</code>.</span></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">resize-shrink</span>

<article class="cli-command">
<p class="cli-command__description">Shrink the current window size (decrements by ~5%).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute window resize-shrink [OPTIONS]</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--orientation &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-orientation">ORIENTATION</a>&gt;</code></dt><dd>Axis to resize; smart chooses the nearest applicable split. <span class="cli-command__constraint">Default: <code>horizontal</code>.</span> <span class="cli-command__constraint">Accepted values: <code>horizontal</code>, <code>vertical</code>, <code>smart</code>.</span></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">resize-by</span>

<article class="cli-command">
<p class="cli-command__description">Resize the selected window by a fractional amount. Pass a signed floating value: positive to grow, negative to shrink. The value is a fraction of the current size (e.g. <code>0.05</code> = 5%).</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute window resize-by --amount &lt;AMOUNT&gt;</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--amount &lt;AMOUNT&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">close</span>

<article class="cli-command">
<p class="cli-command__description">Close a window as if Command-W was pressed.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute window close [OPTIONS]</code></div></div>
<section class="cli-parameters"><h3>Options</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>--window-id &lt;<a class="cli-value-link" href="/rift-docs/reference/cli/#value-window-id">WINDOW_ID</a>&gt;</code></dt><dd>Optional window server ID; defaults to the focused window [aliases: --window-server-id].</dd></div>
</dl></section>
</article>

## See also

- [Execute overview](/rift-docs/reference/cli/execute/)
- [CLI overview](/rift-docs/reference/cli/)

---
title: "Configuration commands"
description: "Configuration management commands"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: `v0.5.7-4-g04defb3`.

Configuration management commands. All commands act on the running Rift instance.

## <span class="cli-command-heading">set-animate</span>

<article class="cli-command">
<p class="cli-command__description">Update animation settings.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-animate &lt;VALUE&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-animation-duration</span>

<article class="cli-command">
<p class="cli-command__description">Set the animation duration in seconds.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-animation-duration &lt;VALUE&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-animation-fps</span>

<article class="cli-command">
<p class="cli-command__description">Set the animation frame rate.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-animation-fps &lt;VALUE&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-animation-easing</span>

<article class="cli-command">
<p class="cli-command__description">Set the animation easing curve.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-animation-easing &lt;VALUE&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-mouse-follows-focus</span>

<article class="cli-command">
<p class="cli-command__description">Update mouse settings.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-mouse-follows-focus &lt;VALUE&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;VALUE&gt;</code></dt><dd><span class="cli-command__constraint">Accepted values: <code>true</code>, <code>false</code>.</span></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-mouse-hides-on-focus</span>

<article class="cli-command">
<p class="cli-command__description">Show or hide the pointer after focus changes.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-mouse-hides-on-focus &lt;VALUE&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;VALUE&gt;</code></dt><dd><span class="cli-command__constraint">Accepted values: <code>true</code>, <code>false</code>.</span></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-focus-follows-mouse</span>

<article class="cli-command">
<p class="cli-command__description">Enable or disable focusing windows under the pointer.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-focus-follows-mouse &lt;VALUE&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;VALUE&gt;</code></dt><dd><span class="cli-command__constraint">Accepted values: <code>true</code>, <code>false</code>.</span></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-stack-offset</span>

<article class="cli-command">
<p class="cli-command__description">Update layout settings.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-stack-offset &lt;VALUE&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-stack-default-orientation</span>

<article class="cli-command">
<p class="cli-command__description">Set the default stack orientation behavior. Value should be one of: &quot;perpendicular&quot;, &quot;same&quot;, &quot;horizontal&quot;, or &quot;vertical&quot;.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-stack-default-orientation &lt;VALUE&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-outer-gaps</span>

<article class="cli-command">
<p class="cli-command__description">Set the outer gap on each screen edge.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-outer-gaps &lt;TOP&gt; &lt;LEFT&gt; &lt;BOTTOM&gt; &lt;RIGHT&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;TOP&gt;</code></dt><dd></dd></div>
<div class="cli-parameter"><dt><code>&lt;LEFT&gt;</code></dt><dd></dd></div>
<div class="cli-parameter"><dt><code>&lt;BOTTOM&gt;</code></dt><dd></dd></div>
<div class="cli-parameter"><dt><code>&lt;RIGHT&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-inner-gaps</span>

<article class="cli-command">
<p class="cli-command__description">Set the horizontal and vertical gaps between windows.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-inner-gaps &lt;HORIZONTAL&gt; &lt;VERTICAL&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;HORIZONTAL&gt;</code></dt><dd></dd></div>
<div class="cli-parameter"><dt><code>&lt;VERTICAL&gt;</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set-workspace-names</span>

<article class="cli-command">
<p class="cli-command__description">Update workspace settings.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set-workspace-names [NAMES]...</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>[NAMES]...</code></dt><dd></dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">set</span>

<article class="cli-command">
<p class="cli-command__description">Generic set: set an arbitrary config key (dot-separated path) to a JSON value.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config set &lt;KEY&gt; &lt;VALUE&gt;</code></div></div>
<section class="cli-parameters"><h3>Arguments</h3><dl class="cli-command__details">
<div class="cli-parameter"><dt><code>&lt;KEY&gt;</code></dt><dd>Dot-separated key path (e.g. settings.animate or settings.layout.gaps.outer.top).</dd></div>
<div class="cli-parameter"><dt><code>&lt;VALUE&gt;</code></dt><dd>Value should be valid JSON (true, 1, &quot;string&quot;, {&quot;a&quot;:1}), but if it's not valid JSON it will be treated as a string.</dd></div>
</dl></section>
</article>

## <span class="cli-command-heading">get</span>

<article class="cli-command">
<p class="cli-command__description">Get current config.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config get</code></div></div>
</article>

## <span class="cli-command-heading">save</span>

<article class="cli-command">
<p class="cli-command__description">Save current config to file.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config save</code></div></div>
</article>

## <span class="cli-command-heading">reload</span>

<article class="cli-command">
<p class="cli-command__description">Reload config from file.</p>
<div class="cli-command__synopsis"><span>Synopsis</span><div class="cli-command__usage"><span aria-hidden="true">$</span><code>rift-cli execute config reload</code></div></div>
</article>

## See also

- [Execute overview](/rift-docs/reference/cli/execute/)
- [CLI overview](/rift-docs/reference/cli/)

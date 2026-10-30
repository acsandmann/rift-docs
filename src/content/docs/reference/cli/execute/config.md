---
title: "Configuration commands"
description: "Configuration management commands"
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Configuration management commands. All commands act on the running Rift instance.

Changes apply immediately. Run `rift-cli execute config save` to persist them to the active config path. Saving preserves unrelated TOML comments, formatting, ordering, and source keybindings, and replaces the file atomically. `get` displays normalized runtime values; `reload` reads the file again. See [Configuration](/rift-docs/configuration/) for the save and reload workflow.

Generated from `rift-cli` at `v0.7.1-19-g572b9425-dirty`.

<section class="apple-entry">

## `set-animate`

<p>Update animation settings.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-animate &lt;VALUE&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-animation-duration`

<p>Set the animation duration in seconds.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-animation-duration &lt;VALUE&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-animation-fps`

<p>Set the animation frame rate.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-animation-fps &lt;VALUE&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-animation-easing`

<p>Set the animation easing curve.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-animation-easing &lt;VALUE&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-mouse-follows-focus`

<p>Update mouse settings.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-mouse-follows-focus &lt;VALUE&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;VALUE&gt;</code></dt><dd><dl class="apple-meta"><div><dt>Values</dt><dd><code>true</code>, <code>false</code></dd></div></dl></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-mouse-hides-on-focus`

<p>Show or hide the pointer after focus changes.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-mouse-hides-on-focus &lt;VALUE&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;VALUE&gt;</code></dt><dd><dl class="apple-meta"><div><dt>Values</dt><dd><code>true</code>, <code>false</code></dd></div></dl></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-focus-follows-mouse`

<p>Enable or disable focusing windows under the pointer.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-focus-follows-mouse &lt;VALUE&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;VALUE&gt;</code></dt><dd><dl class="apple-meta"><div><dt>Values</dt><dd><code>true</code>, <code>false</code></dd></div></dl></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-stack-offset`

<p>Update layout settings.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-stack-offset &lt;VALUE&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-stack-default-orientation`

<p>Set the default stack orientation behavior. Value should be one of: &quot;perpendicular&quot;, &quot;same&quot;, &quot;horizontal&quot;, or &quot;vertical&quot;.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-stack-default-orientation &lt;VALUE&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;VALUE&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-outer-gaps`

<p>Set the outer gap on each screen edge.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-outer-gaps &lt;TOP&gt; &lt;LEFT&gt; &lt;BOTTOM&gt; &lt;RIGHT&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;TOP&gt;</code></dt><dd></dd></div>
<div><dt><code>&lt;LEFT&gt;</code></dt><dd></dd></div>
<div><dt><code>&lt;BOTTOM&gt;</code></dt><dd></dd></div>
<div><dt><code>&lt;RIGHT&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-inner-gaps`

<p>Set the horizontal and vertical gaps between windows.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-inner-gaps &lt;HORIZONTAL&gt; &lt;VERTICAL&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;HORIZONTAL&gt;</code></dt><dd></dd></div>
<div><dt><code>&lt;VERTICAL&gt;</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set-workspace-names`

<p>Update workspace settings.</p>
<pre class="apple-declaration"><code>rift-cli execute config set-workspace-names [NAMES]...</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>[NAMES]...</code></dt><dd></dd></div>
</dl>

</section>

<section class="apple-entry">

## `set`

<p>Generic set: set an arbitrary config key (dot-separated path) to a JSON value.</p>
<pre class="apple-declaration"><code>rift-cli execute config set &lt;KEY&gt; &lt;VALUE&gt;</code></pre>
<p class="apple-label">Arguments</p>
<dl class="apple-parameters">
<div><dt><code>&lt;KEY&gt;</code></dt><dd><p>Dot-separated key path (e.g. settings.animate or settings.layout.gaps.outer.top).</p></dd></div>
<div><dt><code>&lt;VALUE&gt;</code></dt><dd><p>Value should be valid JSON (true, 1, &quot;string&quot;, {&quot;a&quot;:1}), but if it's not valid JSON it will be treated as a string.</p></dd></div>
</dl>

</section>

<section class="apple-entry">

## `get`

<p>Get current config.</p>
<pre class="apple-declaration"><code>rift-cli execute config get</code></pre>

</section>

<section class="apple-entry">

## `save`

<p>Save current config to file.</p>
<pre class="apple-declaration"><code>rift-cli execute config save</code></pre>

</section>

<section class="apple-entry">

## `reload`

<p>Reload config from file.</p>
<pre class="apple-declaration"><code>rift-cli execute config reload</code></pre>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/reference/cli/execute/">Execute overview</a></li>
<li><a href="/rift-docs/reference/cli/">CLI overview</a></li>
</ul>

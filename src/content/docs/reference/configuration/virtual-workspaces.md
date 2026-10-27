---
title: Virtual workspaces
description: "Workspace count, names, focus behavior, and rules for assigning windows to workspaces."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.7.0-27-g0a6ceb7f-dirty.
-->

Workspace count, names, focus behavior, and rules for assigning windows to workspaces.

See [Virtual workspaces](/rift-docs/guides/workspaces/) for the difference from macOS Spaces and how to navigate them.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<p class="apple-label">Example</p>

```toml
[virtual_workspaces]
default_workspace_count = 3
workspace_names = ["Main", "Code", "Chat"]
default_workspace = 0
```

<p class="apple-label">Table</p>

## `[virtual_workspaces]`

Rift’s named or numbered work areas. A workspace is a logical layer on top of a macOS Space.

<section class="apple-entry" id="setting-virtual_workspaces-mode">

### `mode`

<p><code>per_display</code>: each display has its own workspaces, numbered from 1. Like macOS Spaces, each desktop on a display has its own set. <code>global</code>: workspaces are numbered across all displays. Each one stays on a single display and is never mirrored; selecting it focuses that display.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><code>per_display</code> or <code>global</code></dd></div><div><dt>Default</dt><dd><code>&quot;per_display&quot;</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-enabled">

### `enabled`

<ul class="apple-availability"><li data-variant="caution">Unavailable</li></ul>
<p>Reserved for future use.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-default_workspace_count">

### `default_workspace_count`

<p>Number of virtual workspaces to create by default. Must be at least 1 and no more than 128.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>whole number</dd></div><div><dt>Default</dt><dd><code>4</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-auto_assign_windows">

### `auto_assign_windows`

<ul class="apple-availability"><li data-variant="caution">Unavailable</li></ul>
<p>Reserved for future use.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-preserve_focus_per_workspace">

### `preserve_focus_per_workspace`

<ul class="apple-availability"><li data-variant="caution">Unavailable</li></ul>
<p>Reserved for future use.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-workspace_auto_back_and_forth">

### `workspace_auto_back_and_forth`

<p>Switching to the workspace you are already on returns to the previously active workspace.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-prevent_wrapping">

### `prevent_wrapping`

<p>Stop at the first and last workspace instead of wrapping around.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-workspace_names">

### `workspace_names`

<p>Names for workspaces in index order. Names make app and workspace rules easier to read; the list cannot be longer than <a href="/rift-docs/reference/configuration/virtual-workspaces/#setting-virtual_workspaces-default_workspace_count"><code>default_workspace_count</code></a>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>list of text values</dd></div><div><dt>Default</dt><dd><code>[&quot;Main&quot;, &quot;Development&quot;, &quot;Communication&quot;, &quot;Utilities&quot;]</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-default_workspace">

### `default_workspace`

<p>Zero-based workspace selected when a new macOS Space is first managed. It must be less than <a href="/rift-docs/reference/configuration/virtual-workspaces/#setting-virtual_workspaces-default_workspace_count"><code>default_workspace_count</code></a>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>whole number</dd></div><div><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-reapply_app_rules_on_title_change">

### `reapply_app_rules_on_title_change`

<p>Re-check title-based app rules when a window title changes. Useful for apps that finish naming a window after launch, but it can move a window again later.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<p class="apple-label">Array of tables</p>

## `[[virtual_workspaces.workspace_rules]]`

Rules that select a layout for a workspace by name or zero-based index.

<p class="apple-label">Example</p>

```toml
[[virtual_workspaces.workspace_rules]]
workspace = 1
layout = "traditional"
```

<section class="apple-entry" id="setting-virtual_workspaces-workspace_rules-workspace">

### `workspace`

<p>Workspace name or zero-based index to match.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>workspace name or zero-based index</dd></div><div><dt>Requirement</dt><dd>Required</dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-workspace_rules-layout">

### `layout`

<p>Layout to use in the matching workspace.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>text</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>
<p class="apple-label">Possible values</p>
<ul class="apple-values"><li><code>traditional</code></li><li><code>bsp</code></li><li><code>stack</code></li><li><code>master_stack</code></li><li><code>scrolling</code></li><li><code>floating</code></li></ul>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-workspace_rules-display">

### `display`

<p>Ordered display UUIDs, names, or builtin/left/right/top/bottom selectors. The first eligible preference wins. Only applies when <code>mode = &quot;global&quot;</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>table (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/guides/workspaces/">Virtual workspaces guide</a></li>
<li><a href="/rift-docs/reference/configuration/app-rules/">App rules</a></li>
<li><a href="/rift-docs/reference/configuration/layouts/">Layout settings</a></li>
</ul>

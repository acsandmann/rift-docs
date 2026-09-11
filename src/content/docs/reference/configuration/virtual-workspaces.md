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
Generated from Rift v0.5.7-4-g04defb3.
-->

Workspace count, names, focus behavior, and rules for assigning windows to workspaces.

See [Virtual workspaces](/rift-docs/guides/workspaces/) for the difference from macOS Spaces and how to navigate them.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

<div class="config-intro-example-label">Example</div>

```toml
[virtual_workspaces]
default_workspace_count = 3
workspace_names = ["Main", "Code", "Chat"]
default_workspace = 0
```

## <span class="config-table-heading">[virtual_workspaces]</span>

Rift’s named or numbered work areas. A workspace is a logical layer on top of a macOS Space.

### `enabled`

<section class="config-option config-option--expanded">
<div class="config-availability">Unavailable</div><p class="config-description">Reserved for future use.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

### `default_workspace_count`

<section class="config-option config-option--simple">
<p class="config-description">Number of virtual workspaces to create by default. Must be at least 1 and no more than 128.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>whole number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>4</code></dd></div></dl>

</section>

### `auto_assign_windows`

<section class="config-option config-option--expanded">
<div class="config-availability">Unavailable</div><p class="config-description">Reserved for future use.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

### `preserve_focus_per_workspace`

<section class="config-option config-option--expanded">
<div class="config-availability">Unavailable</div><p class="config-description">Reserved for future use.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>true</code></dd></div></dl>

</section>

### `workspace_auto_back_and_forth`

<section class="config-option config-option--simple">
<p class="config-description">Switching to the workspace you are already on returns to the previously active workspace.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `prevent_wrapping`

<section class="config-option config-option--simple">
<p class="config-description">Stop at the first and last workspace instead of wrapping around.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `workspace_names`

<section class="config-option config-option--simple">
<p class="config-description">Names for workspaces in index order. Names make app and workspace rules easier to read; the list cannot be longer than <a class="config-setting-link" href="/rift-docs/reference/configuration/virtual-workspaces/#default_workspace_count"><code>default_workspace_count</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>list of text values</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>[&quot;Main&quot;, &quot;Development&quot;, &quot;Communication&quot;, &quot;Utilities&quot;]</code></dd></div></dl>

</section>

### `default_workspace`

<section class="config-option config-option--simple">
<p class="config-description">Zero-based workspace selected when a new macOS Space is first managed. It must be less than <a class="config-setting-link" href="/rift-docs/reference/configuration/virtual-workspaces/#default_workspace_count"><code>default_workspace_count</code></a>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>whole number</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>0</code></dd></div></dl>

</section>

### `reapply_app_rules_on_title_change`

<section class="config-option config-option--simple">
<p class="config-description">Re-check title-based app rules when a window title changes. Useful for apps that finish naming a window after launch, but it can move a window again later.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

## <span class="config-table-heading config-array-table-heading">[[virtual_workspaces.workspace_rules]]</span>

Rules that select a layout for a workspace by name or zero-based index.

<div class="config-intro-example-label">Example</div>

```toml
[[virtual_workspaces.workspace_rules]]
workspace = 1
layout = "traditional"
```

### `workspace`

<section class="config-option config-option--simple">
<p class="config-description">Workspace name or zero-based index to match.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>workspace name or zero-based index</dd></div><div class="config-meta__item config-meta__item--required"><dt>Requirement</dt><dd>Required</dd></div></dl>

</section>

### `layout`

<section class="config-option config-option--expanded">
<p class="config-description">Layout to use in the matching workspace.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>text</dd></div><div class="config-meta__item config-meta__item--required"><dt>Requirement</dt><dd>Required</dd></div></dl>
<div class="config-values"><strong>Possible values</strong><div><code>traditional</code> <code>bsp</code> <code>stack</code> <code>master_stack</code> <code>scrolling</code></div></div>
</section>

## See also

- [Virtual workspaces guide](/rift-docs/guides/workspaces/)
- [App rules](/rift-docs/reference/configuration/app-rules/)
- [Layout settings](/rift-docs/reference/configuration/layouts/)

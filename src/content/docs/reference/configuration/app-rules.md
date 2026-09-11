---
title: App rules
description: "Match windows and control their placement, size, focus, or management."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.7-1-g7a59369-dirty.
-->

Match windows and control their placement, size, focus, or management.

The [App rules guide](/rift-docs/guides/app-rules/) explains matching and which rule wins.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

This example uses the default workspace name `Development`. Replace it if you renamed that workspace:

<div class="config-intro-example-label">Example</div>

```toml
[[virtual_workspaces.app_rules]]
app_id = "com.apple.Terminal"
workspace = "Development"

[[virtual_workspaces.app_rules]]
app_id = "com.apple.Calculator"
floating = true
```

## <span class="config-table-heading config-array-table-heading">[[virtual_workspaces.app_rules]]</span>

One rule per `[[virtual_workspaces.app_rules]]` entry. Match fields are combined with AND; the most specific matching rule wins.

### `app_id`

<section class="config-option config-option--simple">
<p class="config-description">Application bundle ID, matched without regard to letter case. For example, <code>com.apple.Terminal</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>text (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `workspace`

<section class="config-option config-option--simple">
<p class="config-description">Destination workspace name or zero-based index. Omit it to use the active workspace. Use a name from <code>workspace_names</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>workspace name or zero-based index (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `floating`

<section class="config-option config-option--simple">
<p class="config-description">Keep matching windows outside the tiled layout. A winning rule with this field omitted uses <code>false</code>; actions are not inherited from other rules.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `position`

<section class="config-option config-option--expanded">
<p class="config-description">Initial normalized position for a floating window. Both <code>x</code> and <code>y</code> are between <code>0.0</code> and <code>1.0</code>; position is only valid when <code>floating = true</code>.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><a href="/rift-docs/reference/configuration/app-rules/#virtual_workspacesapp_rulesposition">table</a> (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>
<div class="config-example"><div class="config-example__label">Example</div><pre><code class="language-toml">[[virtual_workspaces.app_rules]]
app_id = &quot;com.apple.Calculator&quot;
floating = true
position = { x = 0.5, y = 0.5 }
</code></pre></div>
</section>

### `size`

<section class="config-option config-option--expanded">
<p class="config-description">Initial size in logical pixels. Set <code>w</code>, <code>h</code>, or both; this is applied once when the rule matches.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd><a href="/rift-docs/reference/configuration/app-rules/#virtual_workspacesapp_rulessize">table</a> (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>
<div class="config-example"><div class="config-example__label">Example</div><pre><code class="language-toml">[[virtual_workspaces.app_rules]]
app_id = &quot;com.apple.Calculator&quot;
floating = true
size = { w = 420.0, h = 680.0 }
</code></pre></div>
</section>

### `focus`

<section class="config-option config-option--simple">
<p class="config-description">Focus the window after applying this rule, switching virtual workspaces if needed.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

### `manage`

<section class="config-option config-option--simple">
<p class="config-description">Set <code>false</code> to exclude matching windows from Rift. Set <code>true</code> to override the normal manageability checks for visible windows. Omit it to keep the normal checks. With <code>false</code>, omit placement and focus actions because they are ignored.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>boolean (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `app_name`

<section class="config-option config-option--simple">
<p class="config-description">Case-insensitive containment match against the app name. Rift matches when the rule contains the app name or the app name contains the rule. Prefer <a class="config-setting-link" href="/rift-docs/reference/configuration/app-rules/#app_id"><code>app_id</code></a> for an exact application match.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>text (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `title_regex`

<section class="config-option config-option--simple">
<p class="config-description">Case-insensitive regular expression matched against the window title. Use <a class="config-setting-link" href="/rift-docs/reference/configuration/app-rules/#title_substring"><code>title_substring</code></a> when you do not need a pattern.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>text (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `title_substring`

<section class="config-option config-option--simple">
<p class="config-description">Case-insensitive text matched anywhere in the window title.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>text (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `ax_role`

<section class="config-option config-option--simple">
<p class="config-description">Exact macOS Accessibility role, such as <code>AXWindow</code>. Useful when an app creates several kinds of windows.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>text (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `ax_subrole`

<section class="config-option config-option--simple">
<p class="config-description">Exact macOS Accessibility subrole, such as <code>AXDialog</code>, to distinguish dialogs from normal windows.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>text (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

## <span class="config-table-heading">[virtual_workspaces.app_rules.position]</span>

### `x`

<section class="config-option config-option--simple">
<p class="config-description">Horizontal position: <code>0.0</code> is the left edge and <code>1.0</code> is the right edge.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--required"><dt>Requirement</dt><dd>Required</dd></div></dl>

</section>

### `y`

<section class="config-option config-option--simple">
<p class="config-description">Vertical position: <code>0.0</code> is the top edge and <code>1.0</code> is the bottom edge.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number</dd></div><div class="config-meta__item config-meta__item--required"><dt>Requirement</dt><dd>Required</dd></div></dl>

</section>

## <span class="config-table-heading">[virtual_workspaces.app_rules.size]</span>

### `w`

<section class="config-option config-option--simple">
<p class="config-description">Initial width in logical pixels. Must be positive when provided.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

### `h`

<section class="config-option config-option--simple">
<p class="config-description">Initial height in logical pixels. Must be positive when provided.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>number (optional)</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

## See also

- [App rules guide](/rift-docs/guides/app-rules/)
- [Virtual workspaces](/rift-docs/guides/workspaces/)

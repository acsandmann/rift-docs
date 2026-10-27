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
Generated from Rift v0.7.0-27-g0a6ceb7f-dirty.
-->

Match windows and control their placement, size, focus, or management.

The [App rules guide](/rift-docs/guides/app-rules/) explains matching and which rule wins.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

This example uses the default workspace name `Development`. Replace it if you renamed that workspace:

<p class="apple-label">Example</p>

```toml
[[virtual_workspaces.app_rules]]
app_id = "com.apple.Terminal"
workspace = "Development"

[[virtual_workspaces.app_rules]]
app_id = "com.apple.Calculator"
floating = true
```

<p class="apple-label">Array of tables</p>

## `[[virtual_workspaces.app_rules]]`

One rule per `[[virtual_workspaces.app_rules]]` entry. Match fields are combined with AND; the most specific matching rule wins.

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-app_id">

### `app_id`

<p>Application bundle ID, matched without regard to letter case. For example, <code>com.apple.Terminal</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>text (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-workspace">

### `workspace`

<p>Destination workspace name or zero-based index. Omit it to use the active workspace. Use a name from <code>workspace_names</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>workspace name or zero-based index (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-floating">

### `floating`

<p>Keep matching windows outside the tiled layout. A winning rule with this field omitted uses <code>false</code>; actions are not inherited from other rules.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-position">

### `position`

<p>Initial normalized position for a floating window. Both <code>x</code> and <code>y</code> are between <code>0.0</code> and <code>1.0</code>; position is only valid when <code>floating = true</code>.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><a href="/rift-docs/reference/configuration/app-rules/#virtual_workspacesapp_rulesposition">table</a> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

<p class="apple-label">Example</p>

```toml
[[virtual_workspaces.app_rules]]
app_id = "com.apple.Calculator"
floating = true
position = { x = 0.5, y = 0.5 }
```

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-size">

### `size`

<p>Initial size in logical pixels. Set <code>w</code>, <code>h</code>, or both; this is applied once when the rule matches.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd><a href="/rift-docs/reference/configuration/app-rules/#virtual_workspacesapp_rulessize">table</a> (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

<p class="apple-label">Example</p>

```toml
[[virtual_workspaces.app_rules]]
app_id = "com.apple.Calculator"
floating = true
size = { w = 420.0, h = 680.0 }
```

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-focus">

### `focus`

<p>Focus the window after applying this rule, switching virtual workspaces if needed.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean</dd></div><div><dt>Default</dt><dd><code>false</code></dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-manage">

### `manage`

<p>Set <code>false</code> to exclude matching windows from Rift. Set <code>true</code> to override the normal manageability checks for visible windows. Omit it to keep the normal checks. With <code>false</code>, omit placement and focus actions because they are ignored.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>boolean (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-app_name">

### `app_name`

<p>Case-insensitive containment match against the app name. Rift matches when the rule contains the app name or the app name contains the rule. Prefer <a href="/rift-docs/reference/configuration/app-rules/#setting-virtual_workspaces-app_rules-app_id"><code>app_id</code></a> for an exact application match.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>text (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-title_regex">

### `title_regex`

<p>Case-insensitive regular expression matched against the window title. Use <a href="/rift-docs/reference/configuration/app-rules/#setting-virtual_workspaces-app_rules-title_substring"><code>title_substring</code></a> when you do not need a pattern.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>text (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-title_substring">

### `title_substring`

<p>Case-insensitive text matched anywhere in the window title.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>text (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-ax_role">

### `ax_role`

<p>Exact macOS Accessibility role, such as <code>AXWindow</code>. Useful when an app creates several kinds of windows.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>text (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-ax_subrole">

### `ax_subrole`

<p>Exact macOS Accessibility subrole, such as <code>AXDialog</code>, to distinguish dialogs from normal windows.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>text (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<p class="apple-label">Table</p>

## `[virtual_workspaces.app_rules.position]`

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-position-x">

### `x`

<p>Horizontal position: <code>0.0</code> is the left edge and <code>1.0</code> is the right edge.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Requirement</dt><dd>Required</dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-position-y">

### `y`

<p>Vertical position: <code>0.0</code> is the top edge and <code>1.0</code> is the bottom edge.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number</dd></div><div><dt>Requirement</dt><dd>Required</dd></div></dl>

</section>

<p class="apple-label">Table</p>

## `[virtual_workspaces.app_rules.size]`

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-size-w">

### `w`

<p>Initial width in logical pixels. Must be positive when provided.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

<section class="apple-entry" id="setting-virtual_workspaces-app_rules-size-h">

### `h`

<p>Initial height in logical pixels. Must be positive when provided.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>number (optional)</dd></div><div><dt>Default</dt><dd>Not set</dd></div></dl>

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/guides/app-rules/">App rules guide</a></li>
<li><a href="/rift-docs/guides/workspaces/">Virtual workspaces</a></li>
</ul>

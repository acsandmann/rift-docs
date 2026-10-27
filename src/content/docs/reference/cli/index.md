---
title: "CLI reference"
description: "Inspect and control Rift from Terminal or a script."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Use `rift-cli` to inspect Rift, control windows and workspaces, change runtime settings, and subscribe to events. Every command, description, argument, and option in this reference comes directly from the checked-out CLI.

Generated from `rift-cli` at `v0.7.0-27-g0a6ceb7f-dirty`.

:::tip[Explore from Terminal]
Add `--help` at any level to see what comes next. For example, `rift-cli execute window --help` lists every window action.
:::

## Choose an area

<ul class="apple-topics">
<li><a href="/rift-docs/reference/cli/query/">Queries</a><p>Inspect workspaces, windows, displays, layouts, and metrics</p></li>
<li><a href="/rift-docs/reference/cli/execute/">Execute</a><p>Control windows, workspaces, layouts, configuration, displays, and macOS Spaces</p></li>
<li><a href="/rift-docs/reference/cli/subscribe/">Subscriptions</a><p>Stream events or run a command when Rift changes</p></li>
<li><a href="/rift-docs/reference/cli/service/">Service</a><p>Find the corresponding <code>rift service</code> commands</p></li>
</ul>

## Quick examples

```sh
# See the windows Rift is managing
rift-cli query windows

# Focus the window to the left
rift-cli execute window focus left

# Move to the next virtual workspace
rift-cli execute workspace next

# Reload the configuration file
rift-cli execute config reload
```

Queries print JSON; set `RIFT_CLI_PRETTY=1` for readable output. Commands under `execute` act on the running Rift instance. Virtual workspace indexes are zero-based, so `0` means the first workspace.

## Reading command values

Command synopses use angle brackets for required values and square brackets for optional values:

<dl class="apple-meta"><div><dt>Required</dt><dd><code>&lt;VALUE&gt;</code></dd></div><div><dt>Optional</dt><dd><code>[VALUE]</code></dd></div><div><dt>Linked to its definition</dt><dd><a href="#value-direction"><code>&lt;DIRECTION&gt;</code></a></dd></div></dl>

Placeholders shown as links, such as <a href="#value-direction"><code>&lt;DIRECTION&gt;</code></a>, lead to their accepted values or identifier format.

## Accepted values

These placeholders have a fixed set of accepted values.

<dl class="apple-parameters">
<div id="value-direction"><dt><code>&lt;DIRECTION&gt;</code></dt><dd>One of <code>left</code>, <code>right</code>, <code>up</code>, or <code>down</code>, relative to the current window, selection, display, or macOS Space.</dd></div>
<div id="value-orientation"><dt><code>&lt;ORIENTATION&gt;</code></dt><dd>The resize axis: <code>horizontal</code>, <code>vertical</code>, or <code>smart</code>. Smart chooses the nearest applicable split.</dd></div>
<div id="value-mode"><dt><code>&lt;MODE&gt;</code></dt><dd>A layout mode: <code>traditional</code>, <code>bsp</code>, <code>stack</code>, <code>master_stack</code>, or <code>scrolling</code>.</dd></div>
<div id="value-event"><dt><code>&lt;EVENT&gt;</code></dt><dd>One of <code>workspace_changed</code>, <code>windows_changed</code>, <code>window_title_changed</code>, <code>focused_window_changed</code>, <code>stacks_changed</code>, or <code>*</code> for every event.</dd></div>
<div id="value-scope"><dt><code>&lt;SCOPE&gt;</code></dt><dd>The restore scope: <code>workspace</code> for one workspace or <code>space</code> for all saved workspaces in the current macOS Space.</dd></div>
</dl>

## Identifiers

These placeholders identify Rift or macOS objects rather than choosing from a fixed set.

<dl class="apple-parameters">
<div id="value-window-id"><dt><code>&lt;WINDOW_ID&gt;</code></dt><dd>A Rift window identifier. Commands accept the JSON form, such as <code>{&quot;pid&quot;:123,&quot;idx&quot;:456}</code>, or the debug-text form where noted.</dd></div>
<div id="value-window-server-id"><dt><code>&lt;WINDOW_SERVER_ID&gt;</code></dt><dd>The numeric window ID assigned by the macOS WindowServer.</dd></div>
<div id="value-workspace-id"><dt><code>&lt;WORKSPACE_ID&gt;</code></dt><dd>A zero-based Rift virtual-workspace index. <code>0</code> identifies the first workspace.</dd></div>
<div id="value-space-id"><dt><code>&lt;SPACE_ID&gt;</code></dt><dd>The numeric macOS Space identifier returned by Rift query output. This is distinct from a virtual workspace index.</dd></div>
<div id="value-uuid"><dt><code>&lt;UUID&gt;</code></dt><dd>A display UUID. Use <code>rift-cli query displays</code> to find the UUIDs of connected displays.</dd></div>
<div id="value-index"><dt><code>&lt;INDEX&gt;</code></dt><dd>A zero-based display index. Use <code>rift-cli query displays</code> to inspect connected displays.</dd></div>
</dl>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/guides/window-management/">Window management</a></li>
<li><a href="/rift-docs/guides/workspaces/">Virtual workspaces</a></li>
<li><a href="/rift-docs/guides/window-management/#customize-keyboard-shortcuts">Keybindings</a></li>
<li><a href="/rift-docs/reference/configuration/">Configuration reference</a></li>
</ul>


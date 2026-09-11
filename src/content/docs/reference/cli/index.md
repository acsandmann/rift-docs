---
title: "CLI reference"
description: "Inspect and control Rift from Terminal or a script."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<!-- GENERATED FILE. Do not edit directly. -->

Source version: `v0.5.7-4-g04defb3`.

Use `rift-cli` to inspect Rift, control windows and workspaces, change runtime settings, and subscribe to events. Every command, description, argument, and option in this reference comes directly from the checked-out CLI.

:::tip[Explore from Terminal]
Add `--help` at any level to see what comes next. For example, `rift-cli execute window --help` lists every window action.
:::

## Choose an area

| Area | Use it to |
| --- | --- |
| [Queries](/rift-docs/reference/cli/query/) | Inspect workspaces, windows, displays, layouts, and metrics |
| [Execute](/rift-docs/reference/cli/execute/) | Control windows, workspaces, layouts, configuration, displays, and macOS Spaces |
| [Subscriptions](/rift-docs/reference/cli/subscribe/) | Stream events or run a command when Rift changes |
| [Service](/rift-docs/reference/cli/service/) | Find the corresponding `rift service` commands |

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

<div class="cli-value-legend"><span><code>&lt;VALUE&gt;</code> Required</span><span><code>[VALUE]</code> Optional</span><span><a class="cli-value-link" href="#value-direction"><code>&lt;DIRECTION&gt;</code></a> Linked to its definition</span></div>

**Underlined placeholders are links.** Select one in any synopsis or parameter list—such as <a class="cli-value-link" href="#value-direction"><code>&lt;DIRECTION&gt;</code></a>—to see its accepted values or identifier format.

<section class="cli-value-group">
<h2>Accepted values</h2>
<p>These placeholders have a fixed set of accepted values.</p>
<dl class="cli-value-reference">
<div id="value-direction" class="cli-value-reference__item"><dt><code>&lt;DIRECTION&gt;</code></dt><dd>One of <code>left</code>, <code>right</code>, <code>up</code>, or <code>down</code>, relative to the current window, selection, display, or macOS Space.</dd></div>
<div id="value-orientation" class="cli-value-reference__item"><dt><code>&lt;ORIENTATION&gt;</code></dt><dd>The resize axis: <code>horizontal</code>, <code>vertical</code>, or <code>smart</code>. Smart chooses the nearest applicable split.</dd></div>
<div id="value-mode" class="cli-value-reference__item"><dt><code>&lt;MODE&gt;</code></dt><dd>A layout mode: <code>traditional</code>, <code>bsp</code>, <code>stack</code>, <code>master_stack</code>, or <code>scrolling</code>.</dd></div>
<div id="value-event" class="cli-value-reference__item"><dt><code>&lt;EVENT&gt;</code></dt><dd>One of <code>workspace_changed</code>, <code>windows_changed</code>, <code>window_title_changed</code>, <code>focused_window_changed</code>, <code>stacks_changed</code>, or <code>*</code> for every event.</dd></div>
<div id="value-scope" class="cli-value-reference__item"><dt><code>&lt;SCOPE&gt;</code></dt><dd>The restore scope: <code>workspace</code> for one workspace or <code>space</code> for all saved workspaces in the current macOS Space.</dd></div>
</dl>
</section>
<section class="cli-value-group">
<h2>Identifiers</h2>
<p>These placeholders identify Rift or macOS objects rather than choosing from a fixed set.</p>
<dl class="cli-value-reference">
<div id="value-window-id" class="cli-value-reference__item"><dt><code>&lt;WINDOW_ID&gt;</code></dt><dd>A Rift window identifier. Commands accept the JSON form, such as <code>{&quot;pid&quot;:123,&quot;idx&quot;:456}</code>, or the debug-text form where noted.</dd></div>
<div id="value-window-server-id" class="cli-value-reference__item"><dt><code>&lt;WINDOW_SERVER_ID&gt;</code></dt><dd>The numeric window ID assigned by the macOS WindowServer.</dd></div>
<div id="value-workspace-id" class="cli-value-reference__item"><dt><code>&lt;WORKSPACE_ID&gt;</code></dt><dd>A zero-based Rift virtual-workspace index. <code>0</code> identifies the first workspace.</dd></div>
<div id="value-space-id" class="cli-value-reference__item"><dt><code>&lt;SPACE_ID&gt;</code></dt><dd>The numeric macOS Space identifier returned by Rift query output. This is distinct from a virtual workspace index.</dd></div>
<div id="value-uuid" class="cli-value-reference__item"><dt><code>&lt;UUID&gt;</code></dt><dd>A display UUID. Use <code>rift-cli query displays</code> to find the UUIDs of connected displays.</dd></div>
<div id="value-index" class="cli-value-reference__item"><dt><code>&lt;INDEX&gt;</code></dt><dd>A zero-based display index. Use <code>rift-cli query displays</code> to inspect connected displays.</dd></div>
</dl>
</section>

## See also

- [Window management](/rift-docs/guides/window-management/)
- [Virtual workspaces](/rift-docs/guides/workspaces/)
- [Keybindings](/rift-docs/guides/keybindings/)
- [Configuration reference](/rift-docs/reference/configuration/)


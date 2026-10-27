---
title: Commands and startup
description: "Launch helper programs when Rift starts."
editUrl: false
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.7.0-27-g0a6ceb7f-dirty.
-->

Launch helper programs when Rift starts.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

To open Terminal when Rift starts:

<p class="apple-label">Example</p>

```toml
[settings]
run_on_start = ["open -a Terminal"]
```

For a helper that must restart after failure, use a macOS LaunchAgent (a background service). CLI subscriptions accept `workspace_changed`, `windows_changed`, `window_title_changed`, `focused_window_changed`, `stacks_changed`, `layout_changed`, `selection_changed`, or `*`. Each event’s JSON data is passed as the command’s final argument and in `RIFT_EVENT_JSON`. `RIFT_EVENT_TYPE` identifies the event; other variables depend on its contents. See [Integrations](/rift-docs/ecosystem/integrations/) for a working subscription.

<p class="apple-label">Table</p>

## `[settings]`

<section class="apple-entry" id="setting-settings-run_on_start">

### `run_on_start`

<p>Command lines to run once Rift starts. Rift splits quoted arguments and launches the executable directly; use <code>sh -c</code> explicitly when shell syntax is required.</p>
<dl class="apple-meta"><div><dt>Type</dt><dd>list of text values</dd></div><div><dt>Default</dt><dd>Empty list</dd></div></dl>

:::note
Reloading does not run these entries again. Restart Rift after changing startup commands. Commands launch independently, so do not rely on list order to wait for another helper.
:::

</section>

## See also

<ul class="apple-topics">
<li><a href="/rift-docs/ecosystem/integrations/">Integrations</a></li>
<li><a href="/rift-docs/guides/keybindings/">Keybindings</a></li>
</ul>

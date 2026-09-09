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
Generated from Rift v0.5.6-9-gbe3bbea-dirty.
-->

Launch helper programs when Rift starts.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

To open Terminal when Rift starts:

<div class="config-intro-example-label">Example</div>

```toml
[settings]
run_on_start = ["open -a Terminal"]
```

For a helper that must restart after failure, use a macOS LaunchAgent (a background service). CLI subscriptions accept `workspace_changed`, `windows_changed`, `window_title_changed`, `focused_window_changed`, `stacks_changed`, `layout_changed`, `selection_changed`, or `*`. Each event’s JSON data is passed as the command’s final argument and in `RIFT_EVENT_JSON`. `RIFT_EVENT_TYPE` identifies the event; other variables depend on its contents. See [Integrations](/rift-docs/ecosystem/integrations/) for a working subscription.

## <span class="config-table-heading">[settings]</span>

### `run_on_start`

<section class="config-option config-option--expanded">
<p class="config-description">Command lines to run once Rift starts. Rift splits quoted arguments and launches the executable directly; use <code>sh -c</code> explicitly when shell syntax is required.</p>
<dl class="config-meta"><div class="config-meta__item config-meta__item--type"><dt>Type</dt><dd>list of text values</dd></div><div class="config-meta__item config-meta__item--default"><dt>Default</dt><dd>Empty list</dd></div></dl>
<aside class="config-note"><strong>Note</strong><span>Reloading does not run these entries again. Restart Rift after changing startup commands. Commands launch independently, so do not rely on list order to wait for another helper.</span></aside>
</section>

## See also

- [Integrations](/rift-docs/ecosystem/integrations/)
- [Keybindings](/rift-docs/guides/keybindings/)

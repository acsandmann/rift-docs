---
title: Commands and startup
description: "Commands Rift runs after startup. This is useful for subscriptions and small integrations."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.5-12-gbeeac0e-dirty.
-->

Commands Rift runs after startup. This is useful for subscriptions and small integrations.

For interactive commands, use the [CLI reference](https://github.com/acsandmann/rift/wiki/CLI).

:::note[Examples are config fragments]
Merge these examples into your config. If a table already exists, add or change its fields there; do not repeat its header. A complete custom file requires both `[settings]` and `[keys]`, and its `[keys]` table must contain every shortcut you want Rift to register.
:::

```toml
[settings]
run_on_start = [
  "rift-cli subscribe cli --event workspace_changed --command sh --args -c --args 'echo $RIFT_WORKSPACE_NAME'",
]
```

Each entry is launched once after Rift starts. Rift does not restart a command that exits, so use a launch agent for a helper that needs supervision. A CLI subscription can listen for `workspace_changed`, `windows_changed`, `window_title_changed`, `focused_window_changed`, `stacks_changed`, `layout_changed`, `selection_changed`, or `*`. Rift appends the event JSON as the command’s final argument. It also sets `RIFT_EVENT_TYPE` and whichever workspace, window, Space, or display variables apply to that event; `RIFT_EVENT_JSON` always contains the complete payload.

## [settings]

### `run_on_start`

Command lines to run once Rift starts. Rift splits quoted arguments and launches the executable directly; use `sh -c` explicitly when shell syntax is required.

**Type:** list of text values · **Default:** Empty list

Reloading does not run these entries again. Restart Rift after changing startup commands. Commands launch independently, so do not rely on list order to wait for another helper.

```toml
[settings]
run_on_start = []
```

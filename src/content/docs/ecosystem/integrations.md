---
title: Integrations
description: Connect Rift to status bars, scripts, and other macOS tools.
---

Rift exposes two integration points: `rift-cli` for one-off commands and event subscriptions for tools that should react when the workspace or windows change. Rust and Lua clients are available when you need a longer-lived connection.

The `run_on_start` example below is a fragment to add to a complete config that already contains `[settings]` and `[keys]`.

## Query and control Rift

These are useful building blocks for scripts:

```sh
rift-cli query workspaces
rift-cli query windows
rift-cli query displays
rift-cli execute workspace switch 2
rift-cli execute window focus left
```

The [CLI reference](https://github.com/acsandmann/rift/wiki/CLI) provides more query and execute examples. For the exact commands accepted by an installed release, run `rift-cli --help` and the nested `--help` command for the area you are using.

## Subscribe to events

`rift-cli subscribe cli` runs a command whenever an event occurs. The event JSON is appended as the command’s final argument, and useful values are also available as environment variables.

For example, refresh SketchyBar when the active workspace changes:

```sh
rift-cli subscribe cli \
  --event workspace_changed \
  --command sh \
  --args -c \
  --args 'sketchybar --trigger rift_workspace_changed RIFT_WORKSPACE_NAME="$RIFT_WORKSPACE_NAME" RIFT_WORKSPACE_ID="$RIFT_WORKSPACE_ID"'
```

Repeat `--args` for each argument passed to the command. Rift then appends the event JSON after those arguments.

Supported event names include `workspace_changed`, `windows_changed`, `window_title_changed`, `focused_window_changed`, `stacks_changed`, `layout_changed`, `selection_changed`, and `*` for all events.

To keep a subscription across service restarts, add the command to `[settings].run_on_start`:

```toml
[settings]
run_on_start = [
  "rift-cli subscribe cli --event workspace_changed --command sh --args -c --args 'sketchybar --trigger rift_workspace_changed RIFT_WORKSPACE_NAME=\"$RIFT_WORKSPACE_NAME\"'",
]
```

Use `RIFT_EVENT_JSON` for the complete payload; other variables depend on the event. For startup behavior and available events, see the [Commands and startup reference](/rift-docs/reference/configuration/commands/).

Startup entries run when Rift starts; reloading the config does not launch new entries. Restart the service after changing `run_on_start`. Rift launches these command lines directly, so use `sh -c` when you need shell expansion or pipelines. If a helper cannot be found, use its absolute executable path.

## Client libraries

- [rift-client](https://github.com/acsandmann/rift/tree/main/crates/rift-client) is the typed Rust client.
- [rift.lua](https://github.com/acsandmann/rift.lua) is the low-level Lua client.
- [riftapi](https://github.com/pyrorhythm/riftapi) provides higher-level Lua helpers for workspaces, windows, layouts, displays, and events.

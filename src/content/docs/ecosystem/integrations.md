---
title: Integrations
description: Connect Rift to status bars, scripts, and other macOS tools.
---

Use `rift-cli` to query or control Rift from Terminal and scripts. Event subscriptions run a command when something changes, such as the active workspace.

## Query and control Rift

Queries return JSON (structured text). The switch command below selects workspace index `2`, the third workspace:

```sh
rift-cli query workspaces
rift-cli query windows
rift-cli query displays
rift-cli execute workspace switch 2
rift-cli execute window focus left
```

The [generated CLI reference](/rift-docs/reference/cli/) provides query and execute examples plus every command and option in the checked-out release.

## Subscribe to events

`rift-cli subscribe cli` runs a command whenever an event occurs. The event JSON is appended as the command’s final argument, and useful values are also available as environment variables.

If your SketchyBar configuration handles an event named `rift_workspace_changed`, send it workspace updates with:

```sh
rift-cli subscribe cli \
  --event workspace_changed \
  --command sh \
  --args -c \
  --args 'sketchybar --trigger rift_workspace_changed RIFT_WORKSPACE_NAME="$RIFT_WORKSPACE_NAME" RIFT_WORKSPACE_ID="$RIFT_WORKSPACE_ID"'
```

Repeat `--args` for each command argument.

To keep a subscription across service restarts, merge the command into `run_on_start` in your existing `[settings]` table:

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

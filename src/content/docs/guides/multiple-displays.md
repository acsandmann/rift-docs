---
title: Multiple displays
description: Configure workspaces and move windows between displays.
---

Rift can manage windows on multiple displays. Enable **Displays have separate Spaces** in macOS System Settings → Desktop & Dock → Mission Control before starting Rift. This macOS setting is separate from Rift's workspace mode.

## Choose a workspace mode

By default, `per_display` gives each macOS desktop its own independently numbered set of Rift workspaces. Switching workspaces affects the current display.

In `global` mode, Rift uses one numbered list of workspaces across displays. Each workspace belongs to one display at a time; a single workspace does not span or mirror its windows across displays. Selecting a workspace on another display focuses that display. Next and previous workspace navigation can also cross displays.

To use global mode, merge this into your config:

```toml
[virtual_workspaces]
mode = "global"
```

You can also turn off **Displays have separate workspaces** in Rift's settings. This is different from the macOS **Displays have separate Spaces** setting, which must remain enabled. See [Virtual workspaces](/rift-docs/guides/workspaces/) for naming workspaces and configuring shortcuts.

## Choose displays for workspaces

In global mode, workspace rules can specify an ordered list of display preferences. The first available eligible display is used. Merge this example into your config, adjusting the workspace name to match your own:

```toml
[virtual_workspaces]
mode = "global"
default_workspace_count = 4
workspace_names = ["Main", "Code", "Web", "Chat"]

[[virtual_workspaces.workspace_rules]]
workspace = "Code"
display = ["right", "builtin"]
```

This prefers the rightmost display for `Code`, falling back to the built-in display. Preferences can use display UUIDs, display names, `builtin`, `left`, `right`, `top`, or `bottom`. Directional preferences refer to the display arrangement. Use a UUID when displays have the same name; find display information with `rift-cli query displays`. Display preferences in workspace rules apply only in global mode. A rule may also set a workspace's layout.

If a display disconnects, Rift can move its workspaces to an available display and restore their placement when the display returns. A display rule can provide a preferred fallback.

## Move between displays

Use the CLI to focus a display, move the focused window, or move the active workspace:

```sh
rift-cli execute display focus --direction right
rift-cli execute display move-window --direction right
rift-cli execute display move-workspace --direction right
```

In per-display mode, moving a workspace moves its windows into the destination display's workspace at the same position and activates it. In global mode, the workspace itself moves to the destination display. Display commands also accept an index or UUID; see the [display command reference](/rift-docs/reference/cli/execute/display/).

For trackpad gestures, place the pointer over the workspace you want to use. See [Gestures](/rift-docs/guides/gestures/) for setup. The [configuration reference](/rift-docs/reference/configuration/virtual-workspaces/) covers workspace settings and rules.

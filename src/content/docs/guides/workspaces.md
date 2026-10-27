---
title: Workspaces and displays
description: Organize windows into workspaces and use Rift across displays.
---

Rift workspaces let you keep groups of windows separate. For example, you might put an editor and terminal in one workspace and a browser in another. Switching workspaces shows the group you want to work with.

A Rift workspace is different from a macOS Space: it exists within a managed macOS desktop and does not create another Mission Control desktop.

If the current Space is inactive, press Option + Z with the bundled keymap, or run `rift-cli execute space toggle-activated` in Terminal.

## Name your workspaces

You can name workspaces in Rift’s [Settings window](/rift-docs/configuration/#open-settings), or add these settings to your config:

```toml
[virtual_workspaces]
default_workspace_count = 4
workspace_names = ["Main", "Code", "Web", "Chat"]
default_workspace = 0
```

The names follow the order of the workspaces. Configuration indexes start at `0`, so `Main` is workspace `0` and `Code` is workspace `1`. The name list cannot be longer than the workspace count, and `default_workspace` must be less than that count.

## Switch and move windows

Add these bindings to your existing `[keys]` table:

```toml
[keys]
"Alt + 1" = { switch_to_workspace = 0 }
"Alt + 2" = { switch_to_workspace = 1 }
"Alt + Shift + 1" = { move_window_to_workspace = 0 }
"Alt + Shift + 2" = { move_window_to_workspace = 1 }
```

`Alt` means Option. Option + 1 selects the first workspace, whose config index is `0`. The menu bar labels start at 1. The move shortcuts leave you on the current workspace.

To move the focused window to the second workspace and follow it from the terminal:

```sh
rift-cli execute workspace move-window 1 --follow
```

To see the current workspaces, run:

```sh
rift-cli query workspaces
```

## Give a workspace its own layout

With the names above, add:

```toml
[[virtual_workspaces.workspace_rules]]
workspace = "Code"
layout = "master_stack"

[[virtual_workspaces.workspace_rules]]
workspace = "Web"
layout = "scrolling"
```

Workspaces without a rule use the default layout in `[settings.layout].mode`. To send new app windows to a workspace, add an [app rule](/rift-docs/guides/app-rules/).

## Adjust navigation

In `[virtual_workspaces]`, `prevent_wrapping = true` stops next/previous navigation at the ends of the workspace list. `workspace_auto_back_and_forth = true` makes selecting the current workspace return to the previous one.

For trackpad navigation, see [Trackpad gestures](/rift-docs/guides/window-management/#trackpad-gestures). The [workspace reference](/rift-docs/reference/configuration/virtual-workspaces/) explains every setting.

## Multiple displays

Rift can manage windows on each connected display. Before starting Rift, turn on **Displays have separate Spaces** in macOS System Settings → Desktop & Dock → Mission Control. This macOS setting is separate from Rift’s workspace mode.

### Choose a workspace mode

By default, each macOS desktop has its own set of Rift workspaces, numbered independently. This is called `per_display` mode. Switching workspaces changes the current display.

With `global` mode, there is one numbered list across your displays. For example, workspaces 1 and 2 might be on your laptop while 3 and 4 are on an external monitor. Each workspace lives on one display at a time. Selecting one on another display moves focus there; next and previous navigation can cross displays too.

To use global mode, merge this into your config:

```toml
[virtual_workspaces]
mode = "global"
```

You can also turn off **Displays have separate workspaces** in Rift's settings. This is different from the macOS **Displays have separate Spaces** setting, which must remain enabled.

### Choose displays for workspaces

In global mode, you can give a workspace an ordered list of preferred displays. Rift uses the first available display that can host it. Add this example to your config, changing the workspace name to match your own:

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

### Move between displays

Use these commands to focus the display to the right, move the focused window there, or move the active workspace there:

```sh
rift-cli execute display focus --direction right
rift-cli execute display move-window --direction right
rift-cli execute display move-workspace --direction right
```

In per-display mode, moving a workspace moves its windows into the destination display's workspace at the same position and activates it. In global mode, the workspace itself moves to the destination display. Display commands also accept an index or UUID; see the [display command reference](/rift-docs/reference/cli/execute/display/).

For trackpad gestures, place the pointer over the workspace you want to use. See [Trackpad gestures](/rift-docs/guides/window-management/#trackpad-gestures) for setup.

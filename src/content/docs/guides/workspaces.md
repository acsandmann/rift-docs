---
title: Virtual workspaces
description: Organize windows into named workspaces within a macOS Space.
---

A macOS Space is a desktop you switch to through Mission Control. A Rift virtual workspace is a group of windows within a managed Space. Switching Rift workspaces changes which group you work with; it does not create another macOS desktop.

If the Space is inactive, enable it with the bundled Option + Z shortcut or `rift-cli execute space toggle-activated` in Terminal.

## Name your workspaces

Merge this fragment into your config:

```toml
[virtual_workspaces]
default_workspace_count = 4
workspace_names = ["Main", "Code", "Web", "Chat"]
default_workspace = 0
```

Names follow index order. The first workspace is index `0`, the second is `1`, and so on. The name list must not be longer than the workspace count, and `default_workspace` must be smaller than the count. Set count and names together when changing the number of workspaces.

## Switch and move windows

Add these bindings to your existing `[keys]` table:

```toml
[keys]
"Alt + 1" = { switch_to_workspace = 0 }
"Alt + 2" = { switch_to_workspace = 1 }
"Alt + Shift + 1" = { move_window_to_workspace = 0 }
"Alt + Shift + 2" = { move_window_to_workspace = 1 }
```

`Alt` means Option. Here, Option + 1 selects workspace index `0`; menu bar labels also count from 1. Moving a window without following it leaves you on the current workspace.

To move the focused window to the second workspace and follow it from the terminal:

```sh
rift-cli execute workspace move-window 1 --follow
```

Inspect the current workspaces with:

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

Workspaces without a matching rule use `[settings.layout].mode`. To route new app windows to one of these workspaces, add an [app rule](/rift-docs/guides/app-rules/).

## Adjust navigation

In `[virtual_workspaces]`, `prevent_wrapping = true` stops next/previous navigation at the ends of the workspace list. `workspace_auto_back_and_forth = true` makes selecting the current workspace return to the previous one.

For trackpad navigation, see [Gestures](/rift-docs/guides/gestures/). The [workspace reference](/rift-docs/reference/configuration/virtual-workspaces/) explains every setting, including fields currently accepted by the config parser that have no runtime effect.

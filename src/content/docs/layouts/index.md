---
title: Layouts
description: See how Rift arranges windows and choose a starting point.
---

A layout is the rule Rift uses to decide where tiled windows go. You can choose one default layout, then give a coding, reading, or chat workspace its own layout later.

The TOML on this page is meant to be added to an existing config. A complete custom file still needs `[settings]` and `[keys]`, including every shortcut you want to use.

## Compare the layouts

| Layout | Windows share the screen like this | Try it if… |
| --- | --- | --- |
| [Traditional](/rift-docs/layouts/traditional/) | A flexible tree of horizontal and vertical splits | you want the most control over individual relationships |
| [BSP](/rift-docs/layouts/bsp/) | Repeated two-way rectangular splits | you want balanced divisions and no special “main” window |
| [Master-stack](/rift-docs/layouts/master-stack/) | One main area plus a supporting stack | one app is usually more important than the others |
| [Stack](/rift-docs/layouts/stack/) | Overlapping windows offset along one axis | you want every window large while keeping the rest of the group visible |
| [Scrolling](/rift-docs/layouts/scrolling/) | A horizontal strip of columns, including columns beyond the display | you keep many windows open but want each active column to stay readable |

## Change the default

```toml
[settings.layout]
mode = "master_stack"
```

Save the file and reload Rift:

```sh
rift-cli execute config reload
```

The available values are `traditional`, `bsp`, `stack`, `master_stack`, and `scrolling`.

## Use different layouts by workspace

```toml
[virtual_workspaces]
default_workspace_count = 3
workspace_names = ["Main", "Code", "Reading"]
workspace_rules = [
  { workspace = "Code", layout = "traditional" },
  { workspace = "Reading", layout = "scrolling" },
]
```

Workspace indexes are zero-based when you use numbers. Names are usually easier to read and less error-prone.

## Start with one layout

If you are unsure, start with Traditional. It is the most general-purpose option and the one Rift uses by default. Switch to Master-stack when you want one clear primary app, or Scrolling when you keep many windows open and want the active one to stay large.

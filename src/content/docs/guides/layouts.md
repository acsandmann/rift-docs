---
title: Layout guide
description: Choose and tune the layout that matches the way you work.
---

The [layout overview](/rift-docs/layouts/) is the quickest way to compare the shapes. This guide helps you decide what to try first and shows how to change layouts, gaps, and workspace overrides.

## Choose by workflow

| If you usually… | Start with… | Why |
| --- | --- | --- |
| keep an editor, terminal, and browser in a deliberate arrangement | [Traditional](/rift-docs/layouts/traditional/) | each split can have its own relationship |
| give several windows equal importance | [BSP](/rift-docs/layouts/bsp/) | the screen is divided recursively without a permanent main window |
| have one app that deserves most of the space | [Master-stack](/rift-docs/layouts/master-stack/) | the main area and supporting area are easy to reason about |
| switch among a small group of related windows | [Stack](/rift-docs/layouts/stack/) | one window stays large while the others remain visible at the edge |
| work through many windows one at a time | [Scrolling](/rift-docs/layouts/scrolling/) | the focused column stays readable instead of shrinking into a grid |

Traditional is the default and a good first choice when you are unsure.

## Change one setting at a time

The examples below are fragments to add to an existing config. Do not replace your `[keys]` table with them.

Choose the layout in `[settings.layout]`, then reload:

```toml
[settings.layout]
mode = "master_stack"
```

```sh
rift-cli execute config reload
```

Add gaps if window boundaries are hard to see:

```toml
[settings.layout.gaps.outer]
top = 8.0
left = 8.0
bottom = 8.0
right = 8.0

[settings.layout.gaps.inner]
horizontal = 8.0
vertical = 8.0
```

## Set a layout per workspace

```toml
[virtual_workspaces]
default_workspace_count = 3
workspace_names = ["Main", "Code", "Reading"]
workspace_rules = [
  { workspace = "Code", layout = "traditional" },
  { workspace = "Reading", layout = "scrolling" },
]
```

Use a workspace name or a zero-based index. If a workspace rule does not match, Rift uses the normal layout setting.

## When a layout feels wrong

- Windows too small: try Master-stack or Scrolling, or increase the active area ratio.
- Windows too tightly packed: add inner and outer gaps.
- New windows appear in an unexpected place: check `window_insertion_point` and the layout-specific insertion setting.
- You want one app to stay large: use Master-stack rather than trying to force Traditional into a fixed template.

The [configuration reference](/rift-docs/reference/configuration/layouts/) lists layout settings, defaults, and accepted values.

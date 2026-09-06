---
title: Adjust layouts
description: Set a default layout, add gaps, and choose layouts by workspace.
---

Choose a layout in the [comparison](/rift-docs/layouts/), then use this guide to adjust it. Merge examples into your existing config; if a table already exists, edit it instead of repeating its header.

## Set the default layout

Choose the layout in `[settings.layout]`, then reload:

```toml
[settings.layout]
mode = "master_stack"
```

```sh
rift-cli execute config reload
```

## Add space between windows

**Outer gaps** separate windows from display edges. **Inner gaps** separate neighboring windows. Values use macOS logical pixels, so they follow the display’s scaling rather than its physical pixel count:

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

- Windows too small: try Master-stack or Scrolling, or adjust `master_ratio` or `column_width_ratio` for those layouts.
- Windows too tightly packed: add inner and outer gaps.
- New windows appear in an unexpected place: check `window_insertion_point` and the layout-specific insertion setting.

The [configuration reference](/rift-docs/reference/configuration/layouts/) lists layout settings, defaults, and accepted values.

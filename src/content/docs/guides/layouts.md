---
title: Adjust layouts
description: Set a default layout, add gaps, and choose layouts by workspace.
---

Rift can use one layout everywhere or a different layout for each workspace. You can change layouts in Rift’s Settings window, or edit the config as shown below. See [Configuration](/rift-docs/configuration/#open-settings) to open Settings, and the [layout overview](/rift-docs/layouts/) to compare layouts.

Add the examples below to your config. If a table already exists, add the fields to it rather than repeating its header.

## Set the default layout

To use Master-stack by default, add:

```toml
[settings.layout]
mode = "master_stack"
```

Save your config, then reload it if the change has not already applied:

```sh
rift-cli execute config reload
```

## Add space between windows

Outer gaps separate windows from display edges. Inner gaps separate neighboring windows. Values use macOS logical pixels, so they follow the display’s scaling rather than its physical pixel count:

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

For example, use Traditional for `Code` and Scrolling for `Reading`:

```toml
[virtual_workspaces]
default_workspace_count = 3
workspace_names = ["Main", "Code", "Reading"]
workspace_rules = [
  { workspace = "Code", layout = "traditional" },
  { workspace = "Reading", layout = "scrolling" },
]
```

Use a workspace name or a zero-based index. A workspace without a matching rule uses the default layout.

## Make the layout comfortable

- Windows too small: try Master-stack or Scrolling, or adjust `master_ratio` or `column_width_ratio` for those layouts.
- Windows too tightly packed: add inner and outer gaps.
- New windows appear in an unexpected place: check `window_insertion_point` and the layout-specific insertion setting.

The [configuration reference](/rift-docs/reference/configuration/layouts/) lists layout settings, defaults, and accepted values.

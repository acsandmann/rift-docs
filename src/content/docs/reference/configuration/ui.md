---
title: User interface
description: "Optional indicators for the menu bar, stack line, and Mission Control."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.5-12-gbeeac0e-dirty.
-->

Optional indicators for the menu bar, stack line, and Mission Control.

These features are independent, so enable one section at a time.

:::note[Examples are config fragments]
Merge these examples into your config. If a table already exists, add or change its fields there; do not repeat its header. A complete custom file requires both `[settings]` and `[keys]`, and its `[keys]` table must contain every shortcut you want Rift to register.
:::

```toml
[settings.ui.menu_bar]
enabled = true
display_style = "label"
active_label = "name"
```

## [settings.ui]

Optional visual indicators. All UI helpers are disabled by default.

## [settings.ui.menu_bar]

Show workspace status in the macOS menu bar.

### `enabled`

Enable the menu bar workspace indicator.

**Type:** boolean · **Default:** `false`

```toml
[settings.ui.menu_bar]
enabled = false
```

### `show_empty`

Include workspaces that currently have no windows.

**Type:** boolean · **Default:** `false`

```toml
[settings.ui.menu_bar]
show_empty = false
```

### `mode`

Show every workspace or only the active one.

**Type:** `all` or `active` · **Default:** `"all"`

```toml
[settings.ui.menu_bar]
mode = "all"
```

### `active_label`

Label a workspace with its one-based workspace number or its configured name.

**Type:** `index` or `name` · **Default:** `"index"`

```toml
[settings.ui.menu_bar]
active_label = "index"
```

### `display_style`

Draw a miniature representation of each workspace’s windows (`layout`) or show a number or name (`label`).

**Type:** `layout` or `label` · **Default:** `"layout"`

```toml
[settings.ui.menu_bar]
display_style = "layout"
```

### `layout_folder`

Folder containing saved `.ron` layouts shown in the menu bar’s restore menus. `~` expands to your home directory.

**Type:** path · **Default:** `"~/.config/rift/layouts"`

```toml
[settings.ui.menu_bar]
layout_folder = "~/.config/rift/layouts"
```

## [settings.ui.stack_line]

Show a small edge indicator for stacked windows.

### `enabled`

Enable the stack-line indicator.

**Type:** boolean · **Default:** `false`

```toml
[settings.ui.stack_line]
enabled = false
```

### `hover`

Choose whether the indicator responds to a click or pointer hover.

**Type:** `click` or `hover` · **Default:** `"hover"`

```toml
[settings.ui.stack_line]
hover = "hover"
```

### `thickness`

Thickness of the stack-line indicator in points.

**Type:** number · **Default:** `20`

If the containing table is omitted, this field is initialized to `0`. The default above applies when the table is present.

```toml
[settings.ui.stack_line]
thickness = 20
```

### `horiz_placement`

Place the stack line at the top or bottom edge of the window.

**Type:** `top` or `bottom` · **Default:** `"top"`

```toml
[settings.ui.stack_line]
horiz_placement = "top"
```

### `vert_placement`

Place the stack line at the left or right edge of the window.

**Type:** `left` or `right` · **Default:** `"left"`

```toml
[settings.ui.stack_line]
vert_placement = "left"
```

### `spacing`

Distance to position the stack line away from the window edge (in points) This creates spacing between the window and the stack line

**Type:** number · **Default:** `1`

If the containing table is omitted, this field is initialized to `0`. The default above applies when the table is present.

```toml
[settings.ui.stack_line]
spacing = 1
```

## [settings.ui.mission_control]

Rift’s own Mission Control-style workspace overview.

### `enabled`

Enable Rift’s Mission Control helper.

**Type:** boolean · **Default:** `false`

```toml
[settings.ui.mission_control]
enabled = false
```

### `fade_enabled`

Fade managed windows during Mission Control transitions.

**Type:** boolean · **Default:** `false`

```toml
[settings.ui.mission_control]
fade_enabled = false
```

### `fade_duration_ms`

Fade duration in milliseconds.

**Type:** number · **Default:** `180`

If the containing table is omitted, this field is initialized to `0`. The default above applies when the table is present.

```toml
[settings.ui.mission_control]
fade_duration_ms = 180
```

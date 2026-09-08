---
title: User interface
description: "Optional indicators for the menu bar, stack line, and Mission Control."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.6-7-g52a5425-dirty.
-->

Optional indicators for the menu bar, stack line, and Mission Control.

All three features are disabled by default.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
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

### `show_empty`

Include workspaces that currently have no windows.

**Type:** boolean · **Default:** `false`

### `mode`

Show every workspace or only the active one.

**Type:** `all` or `active` · **Default:** `"all"`

### `active_label`

Label a workspace with its one-based workspace number or its configured name.

**Type:** `index` or `name` · **Default:** `"index"`

### `display_style`

Draw a miniature representation of each workspace’s windows (`layout`) or show a number or name (`label`).

**Type:** `layout` or `label` · **Default:** `"layout"`

### `layout_folder`

Folder containing saved `.ron` layouts shown in the menu bar’s restore menus. `~` expands to your home directory.

**Type:** path · **Default:** `"~/.config/rift/layouts"`

## [settings.ui.stack_line]

Show a small edge indicator for stacked windows.

### `enabled`

Enable the stack-line indicator.

**Type:** boolean · **Default:** `false`

```toml
[settings.ui.stack_line]
enabled = true
hover = "click"
```

### `hover`

Choose whether the indicator responds to a click or pointer hover.

**Type:** `click` or `hover` · **Default:** `"hover"`

### `thickness`

Thickness of the stack-line indicator in points.

**Type:** number · **Default:** `20`

Omitting the entire containing table gives `0` instead.

### `horiz_placement`

Place the stack line at the top or bottom edge of the window.

**Type:** `top` or `bottom` · **Default:** `"top"`

### `vert_placement`

Place the stack line at the left or right edge of the window.

**Type:** `left` or `right` · **Default:** `"left"`

### `spacing`

Distance from the window edge to the indicator, in macOS points.

**Type:** number · **Default:** `1`

Omitting the entire containing table gives `0` instead.

## [settings.ui.mission_control]

Rift’s own Mission Control-style workspace overview.

### `enabled`

Enable Rift’s Mission Control helper.

**Type:** boolean · **Default:** `false`

```toml
[settings.ui.mission_control]
enabled = true
```

### `fade_enabled`

Fade managed windows during Mission Control transitions.

**Type:** boolean · **Default:** `false`

### `fade_duration_ms`

Fade duration in milliseconds.

**Type:** number · **Default:** `180`

Omitting the entire containing table gives `0` instead.

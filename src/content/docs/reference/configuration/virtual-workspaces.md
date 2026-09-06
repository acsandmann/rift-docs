---
title: Virtual workspaces
description: "Workspace count, names, focus behavior, and rules for assigning windows to workspaces."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.5-14-g6baa565-dirty.
-->

Workspace count, names, focus behavior, and rules for assigning windows to workspaces.

See [Virtual workspaces](/rift-docs/guides/workspaces/) for the difference from macOS Spaces and how to navigate them.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

```toml
[virtual_workspaces]
default_workspace_count = 3
workspace_names = ["Main", "Code", "Chat"]
default_workspace = 0
```

## [virtual_workspaces]

Rift’s named or numbered work areas. A workspace is a logical layer on top of a macOS Space.

### `enabled`

Currently has no effect.

**Type:** boolean · **Default:** `true`

### `default_workspace_count`

Number of virtual workspaces to create by default. Must be at least 1 and no more than 128.

**Type:** whole number · **Default:** `4`

### `auto_assign_windows`

Currently has no effect.

**Type:** boolean · **Default:** `true`

### `preserve_focus_per_workspace`

Currently has no effect.

**Type:** boolean · **Default:** `true`

### `workspace_auto_back_and_forth`

Switching to the workspace you are already on returns to the previously active workspace.

**Type:** boolean · **Default:** `false`

### `prevent_wrapping`

Stop at the first and last workspace instead of wrapping around.

**Type:** boolean · **Default:** `false`

### `workspace_names`

Names for workspaces in index order. Names make app and workspace rules easier to read; the list cannot be longer than `default_workspace_count`.

**Type:** list of text values · **Default:** `["Main","Development","Communication","Utilities"]`

### `default_workspace`

Zero-based workspace selected when a new macOS Space is first managed. It must be less than `default_workspace_count`.

**Type:** whole number · **Default:** `0`

### `reapply_app_rules_on_title_change`

Re-check title-based app rules when a window title changes. Useful for apps that finish naming a window after launch, but it can move a window again later.

**Type:** boolean · **Default:** `false`

## [[virtual_workspaces.workspace_rules]]

Rules that select a layout for a workspace by name or zero-based index.

```toml
[[virtual_workspaces.workspace_rules]]
workspace = 1
layout = "traditional"
```

### `workspace`

Workspace name or zero-based index to match.

**Type:** workspace name or zero-based index · **Default:** Required

### `layout`

Layout to use in the matching workspace.

**Type:** `traditional` or `bsp` or `stack` or `master_stack` or `scrolling` · **Default:** Required

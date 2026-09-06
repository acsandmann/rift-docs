---
title: App rules
description: "Rules that run when Rift discovers a window. Each array entry can match a window and then place, float, focus, resize, or ignore it."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.5-12-gbeeac0e-dirty.
-->

Rules that run when Rift discovers a window. Each array entry can match a window and then place, float, focus, resize, or ignore it.

Read the [App rules guide](/rift-docs/guides/app-rules/) for matching and precedence before adding several rules.

:::note[Examples are config fragments]
Merge these examples into your config. If a table already exists, add or change its fields there; do not repeat its header. A complete custom file requires both `[settings]` and `[keys]`, and its `[keys]` table must contain every shortcut you want Rift to register.
:::

Here is a minimal pair of rules. Add match fields only when you need to distinguish one window from another:

```toml
[[virtual_workspaces.app_rules]]
app_id = "com.apple.Terminal"
workspace = "Development"

[[virtual_workspaces.app_rules]]
app_id = "com.apple.Calculator"
floating = true
```

## [[virtual_workspaces.app_rules]]

One rule per `[[virtual_workspaces.app_rules]]` entry. Match fields are combined with AND; the most specific matching rule wins.

### `app_id`

Application bundle ID, matched without regard to letter case. For example, `com.apple.Terminal`.

**Type:** text (optional) · **Default:** Not set

### `workspace`

Destination workspace name or zero-based index. Omit it to use the active workspace. Use a name from `workspace_names`.

**Type:** workspace name or zero-based index (optional) · **Default:** Not set

### `floating`

Keep matching windows outside the tiled layout. A winning rule with this field omitted uses `false`; actions are not inherited from other rules.

**Type:** boolean · **Default:** `false`

### `position`

Initial normalized position for a floating window. Both `x` and `y` are between `0.0` and `1.0`; position is only valid when `floating = true`.

**Type:** table (optional) · **Default:** Not set

```toml
[[virtual_workspaces.app_rules]]
app_id = "com.apple.Calculator"
floating = true
position = { x = 0.5, y = 0.5 }
```

### `size`

Initial size in logical pixels. Set `w`, `h`, or both; this is applied once when the rule matches.

**Type:** table (optional) · **Default:** Not set

```toml
[[virtual_workspaces.app_rules]]
app_id = "com.apple.Calculator"
floating = true
size = { w = 420.0, h = 680.0 }
```

### `focus`

Focus the window after applying this rule, switching virtual workspaces if needed.

**Type:** boolean · **Default:** `false`

### `manage`

Set `false` to exclude matching windows from Rift. Set `true` to override the normal manageability checks for visible windows. Omit it to keep the normal checks. With `false`, omit placement and focus actions because they are ignored.

**Type:** boolean (optional) · **Default:** Not set

### `app_name`

Case-insensitive containment match against the app name. Rift matches when the rule contains the app name or the app name contains the rule. Prefer `app_id` for an exact application match.

**Type:** text (optional) · **Default:** Not set

### `title_regex`

Case-insensitive regular expression matched against the window title. Use `title_substring` when you do not need a pattern.

**Type:** text (optional) · **Default:** Not set

### `title_substring`

Case-insensitive text matched anywhere in the window title.

**Type:** text (optional) · **Default:** Not set

### `ax_role`

Exact macOS Accessibility role, such as `AXWindow`. Useful when an app creates several kinds of windows.

**Type:** text (optional) · **Default:** Not set

### `ax_subrole`

Exact macOS Accessibility subrole, such as `AXDialog`, to distinguish dialogs from normal windows.

**Type:** text (optional) · **Default:** Not set

## [virtual_workspaces.app_rules.position]

### `x`

Horizontal position: `0.0` is the left edge and `1.0` is the right edge.

**Type:** number · **Default:** Required

### `y`

Vertical position: `0.0` is the top edge and `1.0` is the bottom edge.

**Type:** number · **Default:** Required

## [virtual_workspaces.app_rules.size]

### `w`

Initial width in logical pixels. Must be positive when provided.

**Type:** number (optional) · **Default:** Not set

### `h`

Initial height in logical pixels. Must be positive when provided.

**Type:** number (optional) · **Default:** Not set

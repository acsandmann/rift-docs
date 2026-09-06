---
title: General
description: "Animation, pointer behavior, Space activation, hot reload, and dragging tiled windows."
editUrl: false
---

<!--
GENERATED FILE. Do not edit directly.
Generated from Rift v0.5.5-14-g6baa565-dirty.
-->

Animation, pointer behavior, Space activation, hot reload, and dragging tiled windows.

:::note[Examples are config fragments]
Edit matching tables in your existing config; do not repeat their headers. Keep your `[keys]` shortcuts. For a complete file, start with [Quick start](/rift-docs/quick-start/).
:::

```toml
[settings]
animate = true
animation_duration = 0.2
```

## [settings]

Global behavior shared by the active layout and the rest of Rift.

### `animate`

Animate layout changes and focus transitions. Keep this off while troubleshooting layout behavior.

**Type:** boolean · **Default:** `false`

### `animation_duration`

Animation duration in seconds when `animate` is enabled. Must not be negative.

**Type:** number · **Default:** `0.3`

### `animation_fps`

Target animation frame rate. Higher values look smoother but use more CPU. Must be greater than zero.

**Type:** number · **Default:** `100`

### `animation_easing`

Curve used to accelerate and decelerate animations.

**Type:** text; see accepted values below · **Default:** `"ease_in_out"`

**Accepted values:** `ease_in_out`, `linear`, `ease_in_sine`, `ease_out_sine`, `ease_in_out_sine`, `ease_in_quad`, `ease_out_quad`, `ease_in_out_quad`, `ease_in_cubic`, `ease_out_cubic`, `ease_in_out_cubic`, `ease_in_quart`, `ease_out_quart`, `ease_in_out_quart`, `ease_in_quint`, `ease_out_quint`, `ease_in_out_quint`, `ease_in_expo`, `ease_out_expo`, `ease_in_out_expo`, `ease_in_circ`, `ease_out_circ`, `ease_in_out_circ`.

### `default_disable`

Start each newly encountered macOS Space inactive. Press your activation key before Rift manages it.

**Type:** boolean · **Default:** `true`

### `mouse_follows_focus`

Allow Rift to move the pointer with keyboard-driven focus and workspace changes.

**Type:** boolean · **Default:** `true`

### `mouse_hides_on_focus`

Hide the pointer after Rift changes the focused window. Rift also hides it after a pointer warp when `mouse_follows_focus` is enabled.

**Type:** boolean · **Default:** `true`

### `focus_follows_mouse`

Ask Rift to focus a managed window when the pointer moves over it.

**Type:** boolean · **Default:** `true`

### `focus_follows_mouse_disable_hotkey`

Optional hotkey held to temporarily suspend focus-follows-mouse. Use a full hotkey such as `Ctrl + A` or a modifier such as `Ctrl`.

**Type:** hotkey (optional) · **Default:** Not set

```toml
[settings]
focus_follows_mouse_disable_hotkey = "Ctrl"
```

### `auto_focus_blacklist`

Bundle identifiers that should not cause Rift to switch workspaces when those applications become active, such as Spotlight.

**Type:** list of text values · **Default:** Empty list

### `hot_reload`

Reload the config file when it changes. Even when this is false, Rift watches for keymap changes and reloads when the parsed bindings differ.

**Type:** boolean · **Default:** `true`

## [settings.window_snapping]

Mouse-drag behavior for swapping tiled windows.

### `drag_swap_fraction`

Overlap needed to select a drag-swap target. Rift divides the intersection area by the union area of the two windows. Lower values make swaps easier to trigger.

**Type:** number · **Default:** `0.3`

If `[settings.window_snapping]` is omitted entirely, this starts at `0.0`. Set it explicitly for predictable behavior.

```toml
[settings.window_snapping]
drag_swap_fraction = 0.3
```

---
title: App rules
description: Automatically place, float, focus, or ignore windows.
---

App rules tell Rift what to do when it finds a window. For example, you can send Terminal to a workspace and let Calculator float:

Add these examples to your existing `[virtual_workspaces]` table and `app_rules` list. `Development` is a default workspace name; replace it if you use your own names.

```toml
[virtual_workspaces]
app_rules = [
  { app_id = "com.apple.Terminal", workspace = "Development" },
  { app_id = "com.apple.Calculator", floating = true },
]
```

Reload your config, then open the app to try the rule. Start with one app and add conditions as you need them.

## Rule matching

A rule has two parts: fields that identify a window, and fields that tell Rift what to do with it.

All match fields in one rule must match the same window. This only matches Terminal windows whose title contains `ssh`:

```toml
[virtual_workspaces]
app_rules = [
  { app_id = "com.apple.Terminal", title_substring = "ssh", workspace = "Development" },
]
```

## Finding the app ID

A bundle ID identifies an application, for example `com.apple.Terminal`. Run this in Terminal, replacing the path with the app you want:

```sh
mdls -name kMDItemCFBundleIdentifier -r /Applications/Safari.app
```

You can use `app_name` when you do not want to look up an ID, but `app_id` is less likely to change with renaming or localization.

## Match fields

- `app_id` matches the application bundle ID without regard to letter case.
- `app_name` performs a case-insensitive containment match in either direction: the rule can contain the app name, or the app name can contain the rule. Use `app_id` when you need an exact app match.
- `title_substring` looks for text in the window title.
- `title_regex` matches a regular expression against the title.
- `ax_role` and `ax_subrole` match macOS Accessibility values, which can distinguish normal windows from dialogs and sheets.

Use `title_substring` for simple cases. Use `title_regex` when the title follows a pattern:

```toml
[virtual_workspaces]
app_rules = [
  { app_id = "com.example.Editor", title_regex = "^project-[0-9]+$", workspace = "Development" },
]
```

Regular expressions are case-insensitive. A config reload rejects an invalid expression and reports the error. If an invalid rule reaches startup configuration, Rift skips that rule and writes a warning to its log.

## Action fields

```toml
[virtual_workspaces]
app_rules = [
  { app_id = "com.apple.Calculator", floating = true, position = { x = 0.5, y = 0.5 }, size = { w = 420.0, h = 680.0 } },
]
```

- `workspace` sends the window to a workspace by name or by zero-based index. `0` is the first workspace.
- `floating = true` keeps the window out of the tiled layout.
- `position` uses normalized coordinates: `0.0, 0.0` is top-left and `1.0, 1.0` is bottom-right.
- `size` sets the initial width (`w`), height (`h`), or both, in macOS logical pixels. These follow display scaling, not the physical pixel count.
- `focus = true` focuses the window after applying the rule, switching workspaces if needed.
- `manage = false` tells Rift not to manage the window at all. `manage = true` overrides Rift's normal manageability checks for a visible window.

Position and size apply when the rule is applied; they do not lock the window in place. `position` requires `floating = true`. A size can also be applied once to a tiled window after it is inserted, but it does not turn that window into a floating window. When `manage = false`, Rift ignores the rule's workspace, floating, position, size, and focus actions.

## When more than one rule matches

Rift uses the matching rule with the most non-empty match fields. If two rules are equally specific, the first one wins.

Only the winning rule supplies the actions; Rift does not combine matching rules. This example floats Terminal windows with titles beginning `ssh ` while keeping other Terminal windows tiled:

```toml
[virtual_workspaces]
app_rules = [
  # Two match fields: this wins for Terminal windows titled "ssh ...".
  { app_id = "com.apple.Terminal", title_regex = "^ssh ", workspace = "Development", floating = true },

  # One match field: other Terminal windows also go to Development.
  { app_id = "com.apple.Terminal", workspace = "Development" },
]
```

## Examples

### Send apps to named workspaces

For example, send Safari to `web` and VS Code to `coding`:

```toml
[virtual_workspaces]
workspace_names = ["main", "web", "coding", "chat"]

app_rules = [
  { app_id = "com.apple.Safari", workspace = "web" },
  { app_id = "com.microsoft.VSCode", workspace = "coding" },
]
```

### Float dialogs but tile the rest

macOS reports window types through Accessibility roles and subroles. Replace `com.example.Editor` with the app’s bundle ID:

```toml
[virtual_workspaces]
app_rules = [
  { app_id = "com.example.Editor", ax_subrole = "AXDialog", floating = true },
  { app_id = "com.example.Editor", floating = false },
]
```

### Ignore an overlay

Replace `com.example.Overlay` with the overlay app’s bundle ID:

```toml
[virtual_workspaces]
app_rules = [
  { app_id = "com.example.Overlay", manage = false },
]
```

An unmanaged window is left out of Rift's tiling, floating, and workspace logic.

## When titles change

Some apps create a window before its final title is ready. If a title-based rule needs to react later, enable this:

```toml
[virtual_workspaces]
reapply_app_rules_on_title_change = true
```

This is off by default so ordinary title changes do not repeatedly move or focus windows.

## Test a rule

After editing, run `rift-cli execute config reload` and open a matching window. If it does not match, start with just `app_id`, then add conditions one at a time. Run `rift-cli query windows` to see the windows Rift knows about.

See the [app-rule reference](/rift-docs/reference/configuration/app-rules/) for all fields and accepted values.

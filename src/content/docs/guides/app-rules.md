---
title: App rules
description: Automatically place, float, focus, or ignore windows.
---

App rules let Rift make a decision when a window opens. You can send an app to a workspace, make it float, give it an initial size, focus it, or tell Rift to leave it alone.

The examples below are fragments to add to an existing config. Keep the required `[settings]` and `[keys]` tables in the complete file. Merge each example into your existing `[virtual_workspaces]` table and `app_rules` list. `Development` is one of the default workspace names; replace it if you use your own names.

Rules live inside `[virtual_workspaces]`:

```toml
[virtual_workspaces]
app_rules = [
  { app_id = "com.apple.Terminal", workspace = "Development" },
  { app_id = "com.apple.Calculator", floating = true },
]
```

If you are new to app rules, start with one rule using only `app_id`. Add the other fields after that works.

## How a rule works

Each rule has match fields and action fields. Match fields answer “which windows does this apply to?” Action fields answer “what should Rift do with them?”

All match fields in one rule must match the same window. They work like **and**, not **or**. This only matches Terminal windows whose title contains `ssh`:

```toml
[virtual_workspaces]
app_rules = [
  { app_id = "com.apple.Terminal", title_substring = "ssh", workspace = "Development" },
]
```

Position and size are initial hints. They do not keep forcing a window back after you move or resize it yourself.

## Finding the app ID

Bundle IDs are usually the most reliable way to identify an app. Run this in Terminal, replacing the path with the app you want:

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
- `size` uses logical pixels. You can provide `w`, `h`, or both.
- `focus = true` focuses the window after applying the rule, switching workspaces if needed.
- `manage = false` tells Rift not to manage the window at all. `manage = true` overrides Rift's normal manageability checks for a visible window.

`position` is valid only with `floating = true`. A size can also be applied once to a tiled window after it is inserted, but it does not turn that window into a floating window. When `manage = false`, Rift ignores the rule's workspace, floating, position, size, and focus actions.

## Which rule wins?

More specific rules win. Rift counts the non-empty match fields, and the rule with the most match fields wins. If two matching rules are equally specific, the one that appears first wins.

Only the winning rule supplies the actions; Rift does not combine matching rules. This example floats SSH windows while keeping other Terminal windows tiled:

```toml
[virtual_workspaces]
app_rules = [
  # Two match fields: this wins for Terminal windows titled "ssh ...".
  { app_id = "com.apple.Terminal", title_regex = "^ssh ", workspace = "Development", floating = true },

  # One match field: other Terminal windows also go to Development.
  { app_id = "com.apple.Terminal", workspace = "Development" },
]
```

Try to make exceptions more specific instead of relying on order alone.

## Common recipes

### Send apps to named workspaces

Names are easier to remember than numbers:

```toml
[virtual_workspaces]
workspace_names = ["main", "web", "coding", "chat"]

app_rules = [
  { app_id = "com.apple.Safari", workspace = "web" },
  { app_id = "com.microsoft.VSCode", workspace = "coding" },
]
```

### Float utility windows

```toml
[virtual_workspaces]
app_rules = [
  { app_id = "com.apple.Calculator", floating = true },
  { app_id = "com.raycast.macos", floating = true },
]
```

### Float dialogs but tile the rest

Accessibility subroles can separate dialogs from normal app windows:

```toml
[virtual_workspaces]
app_rules = [
  { app_id = "com.example.Editor", ax_subrole = "AXDialog", floating = true },
  { app_id = "com.example.Editor", floating = false },
]
```

### Ignore an overlay

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

## Troubleshooting

- Start with only `app_id`, then add one match field at a time.
- Remember that all fields in one rule are combined with **and**.
- Check that workspace indexes are zero-based.
- Use `rift-cli query windows` to inspect the windows Rift currently knows about.
- If a rule does not reload, confirm `~/.config/rift/config.toml` is the file you edited and run `rift-cli execute config reload`.

For every available field and its current type, see the [generated app-rules reference](/rift-docs/reference/configuration/app-rules/).

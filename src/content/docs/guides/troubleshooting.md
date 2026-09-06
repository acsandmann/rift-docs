---
title: Troubleshooting
description: Diagnose common Rift setup and configuration issues.
---
Start with three common causes: the current Space is not activated, macOS has not granted Accessibility permission, or the config file contains a setting Rift cannot load.

## Before you begin

First check that Rift is running. If you know the current Space is inactive, activate it with the key bound to `toggle_space_activated`. The bundled config uses `Alt + Z`, but a custom config must define this binding itself. Then ask Rift what it can see:

```sh
rift-cli query workspaces
rift-cli query windows
rift-cli query displays
```

If these commands cannot connect, restart the service:

```sh
rift service restart
```

If Rift exits immediately, also confirm **Displays have separate Spaces** is enabled in **System Settings → Desktop & Dock → Mission Control**.

## Windows are not being managed

Make sure Rift has Accessibility permission in **System Settings → Privacy & Security → Accessibility**. Also check whether the Space is inactive; `default_disable = true` means Spaces start disabled until you activate them.

## A config change fails to reload

Rift reads `~/.config/rift/config.toml`. If you launched Rift with `--config`, edit that file instead. TOML is sensitive to spelling, quotes, and table names. Check for a repeated table header after copying an example. When troubleshooting, temporarily remove the setting you just added and confirm that Rift starts again.

Use the generated [configuration reference](/rift-docs/reference/configuration/) and keep the default config nearby for working examples. After fixing the file, reload it:

```sh
rift-cli execute config reload
```

Unknown fields and invalid values are rejected. Rift reports the problem and keeps the last running configuration when a reload fails.

## Keyboard shortcuts do nothing

Check the `[keys]` table in `~/.config/rift/config.toml`. A custom keymap replaces the bundled keymap completely; it is not merged. If `[keys]` is empty, Rift registers no keyboard shortcuts. Add the commands you need, including `toggle_space_activated` while `default_disable = true`, and reload the config. You can activate the current Space without a keybinding while you fix the file:

```sh
rift-cli execute space toggle-activated
```

## Find the logs

The background service writes standard output to `/tmp/rift_$USER.out.log` and errors to `/tmp/rift_$USER.err.log`. Start with the error log:

```sh
tail -n 100 "/tmp/rift_$USER.err.log"
```

## A window goes to the wrong workspace

App rules use zero-based workspace indexes, so `workspace = 0` means the first workspace. When several rules match, the rule with more match fields wins; if they are equally specific, the earlier rule wins.

Start with only `app_id`, then add one matching condition at a time. See the [app rules reference](/rift-docs/reference/configuration/app-rules/).

## Layout looks too cramped

Add this fragment to the existing config to increase the outer and inner gaps:

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

`rift --validate` checks the saved layout snapshot, not your TOML configuration. Use config reload to check a running setup.

## Getting more help

Use the [Rift issues](https://github.com/acsandmann/rift/issues) for bugs and the [Matrix room](https://matrix.to/#/#rift:matrix.org) for discussion and setup help. Include your macOS version, Rift version, layout, and the smallest config that reproduces the problem.

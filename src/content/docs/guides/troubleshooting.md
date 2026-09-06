---
title: Troubleshooting
description: Diagnose common Rift setup and configuration issues.
---
Start with the symptom below. Most setup problems involve the service, Accessibility permission, Space activation, or the config file.

## The terminal tool cannot connect

Run `rift-cli query displays`. A successful response lists displays as JSON, a structured text format. If it cannot connect, restart the background service:

```sh
rift service restart
```

If Rift exits immediately, check the logs below and confirm **Displays have separate Spaces** is enabled in **System Settings → Desktop & Dock → Mission Control**.

## Windows are not being managed

Make sure Rift has Accessibility permission in **System Settings → Privacy & Security → Accessibility**. Also check whether the Space is inactive; `default_disable = true` means Spaces start disabled until you activate them.

## A config change fails to reload

Rift reads `~/.config/rift/config.toml`. If you launched Rift with `--config`, edit that file instead. TOML is sensitive to spelling, quotes, and table names. Check for a repeated table header after copying an example. If needed, undo the last edit and reload.

Compare the reported field with the [configuration reference](/rift-docs/reference/configuration/), then reload:

```sh
rift-cli execute config reload
```

Unknown fields and invalid values are rejected. Rift reports the problem and keeps the running configuration when a reload fails. `rift --validate` checks a saved layout snapshot; it does not validate this config file.

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

## Windows are too small or crowded

[Adjust the gaps](/rift-docs/guides/layouts/) if window edges are hard to distinguish. If windows need more room, try [Master-stack](/rift-docs/layouts/master-stack/) or [Scrolling](/rift-docs/layouts/scrolling/).

## Getting more help

Use the [Rift issues](https://github.com/acsandmann/rift/issues) for bugs and the [Matrix room](https://matrix.to/#/#rift:matrix.org) for discussion and setup help. Include your macOS version, Rift version, layout, and the smallest config that reproduces the problem.

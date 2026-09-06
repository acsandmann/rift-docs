---
title: Quick start
description: Install Rift, activate a Space, and make your first small config.
---

Start with the bundled shortcuts, confirm tiling works, then create a small configuration you can build on. Rift uses its bundled configuration only while `~/.config/rift/config.toml` does not exist. Once you create that file, it becomes the complete configuration rather than an overlay on the bundled one.

## 1. Install Rift

Enable **Displays have separate Spaces** in **System Settings → Desktop & Dock → Mission Control**. Then install the Homebrew formula:

```sh
brew install acsandmann/tap/rift
```

For a release archive or permission details, see [Installation](/rift-docs/installation/).

## 2. Start the service

Install and start Rift as a per-user background service:

```sh
rift service install
rift service start
```

The first launch may stop after asking for Accessibility access. Allow Rift in **System Settings → Privacy & Security → Accessibility**, then run:

```sh
rift service restart
```

## 3. Activate the current Space

Rift starts with each newly encountered macOS Space inactive. Open two ordinary app windows, such as a browser and Terminal. Press `Alt + Z` once to activate the Space you are looking at. The windows should arrange themselves into tiles. Press the same shortcut again to stop managing this Space. `Alt` means the **Option (⌥)** key on macOS.

If you do not have a config file yet, the bundled keymap binds this command to `Alt + Z`. A custom config must define its own activation binding. If the correct binding does nothing, confirm the service is running and Rift has Accessibility permission.

## 4. Check the connection

```sh
rift-cli query displays
rift-cli query workspaces
rift-cli query windows
```

Each command returns JSON. You should see the current display, Rift's virtual workspaces, and any windows it is managing. If the CLI cannot connect, run `rift service restart` and see the [troubleshooting guide](/rift-docs/guides/troubleshooting/).

## 5. Create a working config

Rift reads `~/.config/rift/config.toml`. Create the parent directory, then save the following as `~/.config/rift/config.toml`. If that file already exists, back it up before replacing it. It includes activation, focus, movement, and floating controls as well as a layout and gaps:

```sh
mkdir -p ~/.config/rift
```

```toml
[keys]
"Alt + Z" = "toggle_space_activated"
"Alt + H" = { move_focus = "left" }
"Alt + J" = { move_focus = "down" }
"Alt + K" = { move_focus = "up" }
"Alt + L" = { move_focus = "right" }
"Alt + Shift + H" = { move_node = "left" }
"Alt + Shift + J" = { move_node = "down" }
"Alt + Shift + K" = { move_node = "up" }
"Alt + Shift + L" = { move_node = "right" }
"Alt + Shift + Space" = "toggle_window_floating"

[settings.layout]
mode = "master_stack"

[settings.layout.gaps.outer]
top = 8.0
left = 8.0
bottom = 8.0
right = 8.0

[settings.layout.gaps.inner]
horizontal = 8.0
vertical = 8.0
```

Only the shortcuts listed in this `[keys]` table are registered. Rift does not merge them with the bundled keymap. An empty `[keys]` table leaves Rift with no keyboard shortcuts, although automatic tiling and `rift-cli` can still operate.

Hot reload is enabled by default. After creating your first file, reload explicitly to make sure Rift picks it up:

```sh
rift-cli execute config reload
```

You can copy the [bundled config](https://github.com/acsandmann/rift/blob/main/rift.default.toml) if you want all of its starter bindings. If you build your own file, copy every binding you still want to use.

## Where to go next

- Compare the [five layouts](/rift-docs/layouts/) and choose one for your work.
- Learn the [basic window controls](/rift-docs/guides/window-management/).
- Customize [keybindings](/rift-docs/guides/keybindings/) one command at a time.
- Organize apps into [virtual workspaces](/rift-docs/guides/workspaces/).
- Use [app rules](/rift-docs/guides/app-rules/) when a particular app should always float or go to a named workspace.

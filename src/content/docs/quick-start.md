---
title: Quick start
description: Install Rift, activate a Space, and make your first small config.
---

Install Rift, arrange your first windows, and try the keyboard controls. The commands on this page run in Terminal. The final step shows how to customize Rift.

## 1. Install Rift

Turn on **Displays have separate Spaces** in System Settings → Desktop & Dock → Mission Control. Then install Rift with Homebrew:

```sh
brew install acsandmann/tap/rift
```

For a release archive or permission details, see [Installation](/rift-docs/installation/).

## 2. Start the service

Install the background service so Rift can run without an open Terminal window:

```sh
rift service install
rift service start
```

The first launch may stop after asking for Accessibility access. Allow Rift in System Settings → Privacy & Security → Accessibility, then run:

```sh
rift service restart
```

## 3. Activate the current Space

A Space is a macOS desktop, shown in Mission Control. By default, Rift waits for you to enable tiling on each Space.

Open two app windows, such as a browser and Terminal. Press Option (⌥) + Z. Rift should arrange them into tiles. Press the shortcut again to stop tiling this Space. Rift calls the Option key `Alt` in its configuration.

If the windows do not move, check [service, permission, and shortcut problems](/rift-docs/guides/troubleshooting/).

## 4. Use keyboard navigation

Press Option + H to focus the window on the left, or Option + L to focus the window on the right. Use Option + J and Option + K to focus windows below and above. The focused window receives your keyboard input.

These shortcuts are included with Rift. Continue if you want to make a configuration of your own.

## 5. Customize Rift

With Rift running, click its menu bar icon and choose **Settings…** to adjust layouts, workspaces, shortcuts, and other options. You can also open Settings from Terminal:

```sh
rift --settings
```

If you prefer to edit a file, follow the steps below. See [Configuration](/rift-docs/configuration/) for more about both approaches.

### Create a config file

Create the configuration folder:

```sh
mkdir -p ~/.config/rift
```

Save the following as `~/.config/rift/config.toml` in a plain-text editor. Back up that file first if it already exists.

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

Your `[keys]` table replaces the bundled keymap, so include every shortcut you want to keep.

The example adds Shift to the direction keys to move a window. Option + Shift + Space toggles floating, which lets you position that window freely. Master-stack gives one window a larger area; the gaps leave space between windows.

Apply the file with `rift-cli`:

```sh
rift-cli execute config reload
```

Later edits normally apply automatically when you save. To retain all starter shortcuts, use the [bundled config](https://github.com/acsandmann/rift/blob/main/rift.default.toml) as your starting point instead.

## Next steps

- Compare the [five layouts](/rift-docs/layouts/) and choose one for your work.
- Learn the [basic window controls](/rift-docs/guides/window-management/).
- Customize [keybindings](/rift-docs/guides/window-management/#customize-keyboard-shortcuts) one command at a time.
- Organize apps into [virtual workspaces](/rift-docs/guides/workspaces/).
- Use [app rules](/rift-docs/guides/app-rules/) when a particular app should always float or go to a named workspace.

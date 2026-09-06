---
title: Plugins
description: Companion tools that extend Rift through its CLI and IPC interfaces.
---

Rift does not load third-party plugins inside the window manager. Instead, companion tools run as separate processes and connect through the CLI or Mach IPC interface.

These projects are maintained separately from Rift. Check each repository's requirements and Rift version notes before installing it, because the IPC interface can change between Rift releases.

## Window and workspace tools

### rift-container-highlighter

[rift-container-highlighter](https://github.com/ubuntudroid/rift-container-highlighter) briefly draws the container tree for the active workspace. It is especially useful with Traditional and BSP layouts, where nested containers are otherwise invisible. The highlighted container shows what a structural command such as `move_node`, `join_window`, `ascend`, or `descend` will act on.

It is a Rust command-line tool for macOS and uses the private SkyLight framework to draw its overlays. Its Rift dependencies are pinned to a specific release, so follow the repository's versioning instructions when Rift is upgraded.

### Rift App Indicator

[Rift App Indicator](https://github.com/Chandraprakash-Darji/rift-companian) is a macOS menu-bar companion. It groups running application icons by Rift workspace and updates them from Rift's Mach IPC events. The repository is named `rift-companian`; the executable and service commands use `rift-app-indicator`.

You can run it from a terminal or install it as a user LaunchAgent so it starts in the background at login.

### rift-ergo

[rift-ergo](https://github.com/abhirup-dev/rift-ergo) is a Rust helper for one user's display and workspace workflow. It adds commands for moving a window and following it, moving windows or whole workspaces between displays, and returning policy-matched windows to configured workspace and display homes.

This is a personalized orchestration layer rather than a general Rift configuration utility. Its [README](https://github.com/abhirup-dev/rift-ergo#routing-policy) describes an external routing-policy file and a dependency pinned to Rift v0.5.3. Expect to adapt it to your setup.

### rift-pip

[rift-pip](https://github.com/acsandmann/rift-pip) mirrors the focused window into a picture-in-picture window. It can be launched from a Rift keybinding and accepts flags for placing the mirror in a screen corner.

The project builds from source with Rust. Its README contains the current installation, keybinding, and command examples.

## IPC libraries

### rift.lua

[rift.lua](https://github.com/acsandmann/rift.lua) is a Lua client for Rift’s Mach IPC interface. It is useful for status bars, scripts, and small automation written in Lua.

### riftapi

[riftapi](https://github.com/pyrorhythm/riftapi) is a higher-level Lua wrapper built on `rift.lua`. It provides helpers for workspaces, windows, layouts, displays, and events.

## Add a companion project

If you maintain a companion tool, open an issue or pull request with its public URL, a short description, supported Rift version, and the language or runtime it uses. Tools listed here should be installable, documented, and clear about the permissions they need.

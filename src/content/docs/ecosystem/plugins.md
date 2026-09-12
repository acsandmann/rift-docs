---
title: Plugins
description: Companion tools that extend Rift through its CLI and IPC interfaces.
---

Companion tools run alongside Rift and communicate through its terminal tool or IPC (inter-process communication). They are installed separately. Check each project’s supported Rift version before installing or upgrading it.

## Window and workspace tools

| Project | What it does |
| --- | --- |
| [rift-container-highlighter](https://github.com/ubuntudroid/rift-container-highlighter) | Outlines nested window groups so you can see what a group command will affect |
| [Rift App Indicator](https://github.com/Chandraprakash-Darji/rift-companian) | Shows application icons grouped by workspace in the macOS menu bar |
| [rift-pip](https://github.com/acsandmann/rift-pip) | Mirrors the focused window in a picture-in-picture window |
| [stackline](https://github.com/acsandmann/stackline) | Shows an alternative style of indicator for window stacks |

The highlighter is useful with Traditional and BSP, where the grouping is otherwise hard to see. Rift App Indicator’s repository is named `rift-companian`; its executable is `rift-app-indicator`.

## Libraries for scripts

- [rift.lua](https://github.com/acsandmann/rift.lua): Lua client for Rift’s IPC interface.
- [riftapi](https://github.com/pyrorhythm/riftapi): Lua helpers for workspaces, windows, layouts, displays, and events, built on `rift.lua`.

See [Integrations](/rift-docs/ecosystem/integrations/) to write your own scripts.

## Suggest a project

Open an [issue](https://github.com/acsandmann/rift-docs/issues) with the project URL, its purpose, supported Rift version, and installation requirements.

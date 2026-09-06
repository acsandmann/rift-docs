---
title: Installation
description: Install Rift on macOS and grant the permission it needs.
---

Rift is distributed as a universal macOS binary for Apple silicon and Intel Macs. The [Homebrew formula](https://github.com/acsandmann/homebrew-tap/blob/main/Formula/rift.rb) installs both `rift` and `rift-cli`. Keep the two binaries from the same release.

Before starting, turn on **Displays have separate Spaces** in **System Settings → Desktop & Dock → Mission Control**. Rift checks this setting at launch and exits with an explanation when it is disabled.

## Homebrew

```sh
brew install acsandmann/tap/rift
```

Then install and start the per-user service:

```sh
rift service install
rift service start
```

The first launch may stop after asking for Accessibility access. Grant the permission, then run `rift service restart`.

To upgrade later:

```sh
brew upgrade rift
rift service restart
```

## Release archive

If you prefer not to use Homebrew, download the latest archive from the [Rift releases page](https://github.com/acsandmann/rift/releases). Extract it, put the `rift` and `rift-cli` binaries somewhere on your `PATH`, and make sure they are executable:

```sh
tar -xzf rift-universal-macos-VERSION.tar.gz
sudo install -m 755 rift rift-cli /usr/local/bin/
```

Replace `VERSION` with the version in the downloaded filename. Then run `rift service install` and `rift service start`, as shown above.

Release archives are named `rift-universal-macos-VERSION.tar.gz` and contain the two binaries at the archive root.

## Give Rift Accessibility access

Rift uses macOS Accessibility APIs to discover, focus, move, resize, and arrange windows. Open **System Settings → Privacy & Security → Accessibility**, approve Rift when prompted, and then restart it:

```sh
rift service restart
```

When you run `rift` directly from a terminal instead of as a service, the terminal app may also need Accessibility access.

## Stop Rift

To stop the background service:

```sh
rift service stop
```

Run `rift service start` when you want to use it again.

## Verify the install

```sh
command -v rift rift-cli
rift --help
rift-cli query displays
```

The first command should print paths for both binaries, and `rift --help` should show Rift's options. After the service is running, `rift-cli query displays` should return JSON describing your displays.

If you have no custom config, press the bundled `Alt + Z` shortcut to activate the current Space. With a custom config, use the key you assigned to `toggle_space_activated`. Then run `rift-cli query workspaces`. If the query cannot connect, use the [troubleshooting guide](/rift-docs/guides/troubleshooting/).

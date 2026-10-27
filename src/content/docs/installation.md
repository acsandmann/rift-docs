---
title: Installation
description: Install Rift on macOS and grant the permission it needs.
---

Rift supports Apple silicon and Intel Macs. The <a href="https://github.com/acsandmann/homebrew-tap/blob/main/Formula/rift.rb" data-umami-event="homebrew_formula">Homebrew formula</a> installs both `rift` and `rift-cli`. Keep the two binaries from the same release.

Before starting Rift, turn on **Displays have separate Spaces** in System Settings → Desktop & Dock → Mission Control. Rift needs this setting to manage windows.

## Homebrew

```sh
brew install acsandmann/tap/rift
```

Install and start the background service:

```sh
rift service install
rift service start
```

The first launch may stop after asking for Accessibility access. Allow Rift in System Settings → Privacy & Security → Accessibility, then run `rift service restart`.

To upgrade later:

```sh
brew upgrade rift
rift service restart
```

## Release archive

To install without Homebrew, download the latest archive from the <a href="https://github.com/acsandmann/rift/releases" data-umami-event="release_download">Rift releases page</a>. Extract it, put the `rift` and `rift-cli` binaries somewhere on your `PATH`, and make sure they are executable:

```sh
tar -xzf rift-universal-macos-VERSION.tar.gz
sudo install -m 755 rift rift-cli /usr/local/bin/
```

Replace `VERSION` with the version in the downloaded filename. Then run `rift service install` and `rift service start`, as shown above.

## Give Rift Accessibility access

Rift uses macOS Accessibility APIs to discover, focus, move, resize, and arrange windows. Open System Settings → Privacy & Security → Accessibility, approve Rift when prompted, and then restart it:

```sh
rift service restart
```

When you run `rift` directly from a terminal instead of as a service, the terminal app may also need Accessibility access.

## Stop Rift

To stop the background service:

```sh
rift service stop
```

To start it again, run `rift service start`.

## Verify the install

```sh
command -v rift rift-cli
rift --help
rift-cli query displays
```

The first command should print paths for both binaries, and `rift --help` should show Rift's options. After the service is running, `rift-cli query displays` should return JSON describing your displays.

Continue with [Quick start](/rift-docs/quick-start/) to activate tiling. If the query cannot connect, see [Troubleshooting](/rift-docs/guides/troubleshooting/).

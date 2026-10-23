---
title: Changelog
description: Release history and notable changes for Rift.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

Rift's release notes, newest first. Each entry links back to its original [GitHub release](https://github.com/acsandmann/rift/releases).

<section class="apple-entry">

## v0.7.0

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-10-15T23:12:29Z">October 15, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">586</dd></div></dl>

### Changes
* native tab support! rift now handles native macos tabs in apps like finder and ghostty with no problem
* settings ui! rift now has a built in ui for configuring every aspect of rift. it is 100% native and should feel like configuring any other app
* rewritten stackline! rift's stackline now looks like a native tab bar and feels like an extension of the operating system as opposed to its previous appearance
* lots of performance improvements that should make rift more pleasing to use

now, for the regularly scheduled programing:

* feat: show non default binding modes in menu icon (<a href="https://github.com/acsandmann/rift/issues/583">#583</a>) <a href="https://github.com/acsandmann/rift/commit/85845868"><code>85845868</code></a>
* fix: focus nearest window in stack after one closes <a href="https://github.com/acsandmann/rift/commit/cc38c0e3"><code>cc38c0e3</code></a>
* fix: give newly created workspaces a layout for the space's current size (<a href="https://github.com/acsandmann/rift/issues/577">#577</a>) <a href="https://github.com/acsandmann/rift/commit/42f1a622"><code>42f1a622</code></a>
* fix: remove global window index and use layout-scoped traversal in bsp (<a href="https://github.com/acsandmann/rift/issues/581">#581</a>) <a href="https://github.com/acsandmann/rift/commit/fdb1179b"><code>fdb1179b</code></a>
* feat: stack lines now look like a native tab bar (<a href="https://github.com/acsandmann/rift/issues/576">#576</a>) <a href="https://github.com/acsandmann/rift/commit/952fc178"><code>952fc178</code></a>
* fix(gestures): don't double-invert scroll overscroll workspace switch (<a href="https://github.com/acsandmann/rift/issues/575">#575</a>) <a href="https://github.com/acsandmann/rift/commit/d5f32455"><code>d5f32455</code></a>
* fix(bsp): focus adjacent windows across perpendicular splits <a href="https://github.com/acsandmann/rift/commit/002fcae5"><code>002fcae5</code></a>
* fix: move_node not splitting in bsp (<a href="https://github.com/acsandmann/rift/issues/568">#568</a>) <a href="https://github.com/acsandmann/rift/commit/dec4f3e9"><code>dec4f3e9</code></a>
* feat: settings in separate process that communicates with rift via mach (<a href="https://github.com/acsandmann/rift/issues/572">#572</a>) <a href="https://github.com/acsandmann/rift/commit/b2ded637"><code>b2ded637</code></a>
* fix: contain scrolling windows to their owning display <a href="https://github.com/acsandmann/rift/commit/2a73a800"><code>2a73a800</code></a>
* fix: allow saving workspaces that were never shown (<a href="https://github.com/acsandmann/rift/issues/570">#570</a>) <a href="https://github.com/acsandmann/rift/commit/fd9ec80e"><code>fd9ec80e</code></a>
* feat: settings ui (<a href="https://github.com/acsandmann/rift/issues/552">#552</a>)
* fix(native-tabs): preserve focus and layout during tab transitions (<a href="https://github.com/acsandmann/rift/issues/560">#560</a>) <a href="https://github.com/acsandmann/rift/commit/659eaa56"><code>659eaa56</code></a>

### Contributors
* <a href="https://github.com/lukasesch">@lukasesch</a> made their first contribution in https://github.com/acsandmann/rift/pull/575

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.7.0">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.7.0/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.6.9...v0.7.0">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.6.9

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-10-07T03:52:22Z">October 7, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">591</dd></div></dl>

### Changes
* fix: dont focus inactivate workspaces (<a href="https://github.com/acsandmann/rift/issues/567">#567</a>) <a href="https://github.com/acsandmann/rift/commit/8bf3f53"><code>8bf3f53</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.6.9">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.6.9/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.6.8...v0.6.9">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.6.8

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-10-06T22:20:18Z">October 6, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">40</dd></div></dl>

### Changes
* fix: preserve focus after toggle_stack <a href="https://github.com/acsandmann/rift/commit/49d2f6c"><code>49d2f6c</code></a>
* feat: preserve workspace after display change (<a href="https://github.com/acsandmann/rift/issues/566">#566</a>) <a href="https://github.com/acsandmann/rift/commit/23d62fa"><code>23d62fa</code></a>
* fix: crash when changing keyboard layout (<a href="https://github.com/acsandmann/rift/issues/564">#564</a>) <a href="https://github.com/acsandmann/rift/commit/9fe25c7"><code>9fe25c7</code></a>
* fix: cancel animation when moving across spaces (<a href="https://github.com/acsandmann/rift/issues/566">#566</a>) <a href="https://github.com/acsandmann/rift/commit/83f4180"><code>83f4180</code></a>
* fix: preserve workspaces layout after config reload <a href="https://github.com/acsandmann/rift/commit/2fc20c2"><code>2fc20c2</code></a>
* fix: crash when promoting to master (<a href="https://github.com/acsandmann/rift/issues/561">#561</a>) <a href="https://github.com/acsandmann/rift/commit/3a99afa"><code>3a99afa</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.6.8">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.6.8/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.6.7...v0.6.8">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.6.7

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-10-05T01:35:43Z">October 5, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">312</dd></div></dl>

### Changes
* feat: animate window moves in scrolling layout <a href="https://github.com/acsandmann/rift/commit/f405968"><code>f405968</code></a>
* feat: animate windows closes in scrolling layout <a href="https://github.com/acsandmann/rift/commit/95728f7"><code>95728f7</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.6.7">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.6.7/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.6.6...v0.6.7">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.6.6

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-10-04T20:46:02Z">October 4, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">37</dd></div></dl>

### Changes
* feat: expand_single_column (<a href="https://github.com/acsandmann/rift/issues/550">#550</a>) <a href="https://github.com/acsandmann/rift/commit/2710c1b"><code>2710c1b</code></a>
* fix: directional focus/move display selection (<a href="https://github.com/acsandmann/rift/issues/554">#554</a>) <a href="https://github.com/acsandmann/rift/commit/30e812a"><code>30e812a</code></a>
* fix: cross display move_node behavior (<a href="https://github.com/acsandmann/rift/issues/555">#555</a>) <a href="https://github.com/acsandmann/rift/commit/84c6dbe"><code>84c6dbe</code></a>
* fix: reconcile geometry after layout commands <a href="https://github.com/acsandmann/rift/commit/113214f"><code>113214f</code></a>
* fix: preserve scrolling offset after native frame clamping <a href="https://github.com/acsandmann/rift/commit/cfa5347"><code>cfa5347</code></a>
* fix: focus a stack's selected window when entering it across displays <a href="https://github.com/acsandmann/rift/commit/2cc6668"><code>2cc6668</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.6.6">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.6.6/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.6.5...v0.6.6">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.6.5

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-10-04T03:28:43Z">October 4, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">100</dd></div></dl>

### Changes
* fix: give animations a txid (<a href="https://github.com/acsandmann/rift/issues/553">#553</a>) <a href="https://github.com/acsandmann/rift/commit/6f78ad3"><code>6f78ad3</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.6.5">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.6.5/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.6.4...v0.6.5">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.6.4

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-10-03T00:21:57Z">October 3, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">122</dd></div></dl>

### Changes
* feat: sort windows by layout in query <a href="https://github.com/acsandmann/rift/commit/3ef20d43"><code>3ef20d43</code></a>
* feat: haptics on drop <a href="https://github.com/acsandmann/rift/commit/e8d5811b"><code>e8d5811b</code></a>
* feat: change binding mode via client/cli (<a href="https://github.com/acsandmann/rift/issues/540">#540</a>) <a href="https://github.com/acsandmann/rift/commit/254925ed"><code>254925ed</code></a>
* fix: don't allow churn to stop while asleep <a href="https://github.com/acsandmann/rift/commit/af1eb9f7"><code>af1eb9f7</code></a>
* perf: smoother animations (<a href="https://github.com/acsandmann/rift/issues/551">#551</a>) <a href="https://github.com/acsandmann/rift/commit/d0bf93ff"><code>d0bf93ff</code></a>
* fix: dont focus closed window on refocus after close (<a href="https://github.com/acsandmann/rift/issues/548">#548</a>) <a href="https://github.com/acsandmann/rift/commit/5f07eccc"><code>5f07eccc</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.6.4">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.6.4/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.6.3...v0.6.4">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.6.3

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-10-02T02:13:18Z">October 2, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">161</dd></div></dl>

### Changes
* feat: rewrite scrolling layout & gestures (<a href="https://github.com/acsandmann/rift/issues/544">#544</a>) <a href="https://github.com/acsandmann/rift/commit/95cd9bad"><code>95cd9bad</code></a>
* chore: cleanup ownership of state (<a href="https://github.com/acsandmann/rift/issues/542">#542</a>) <a href="https://github.com/acsandmann/rift/commit/b02bb337"><code>b02bb337</code></a>
* feat: enable menubar by default <a href="https://github.com/acsandmann/rift/commit/52288f5c"><code>52288f5c</code></a>
* chore: layout engine holds no virtual workspace state <a href="https://github.com/acsandmann/rift/commit/671ab23f"><code>671ab23f</code></a>
* feat: mission control rewrite to align with niri (<a href="https://github.com/acsandmann/rift/issues/538">#538</a>) <a href="https://github.com/acsandmann/rift/commit/dcaaaa8d"><code>dcaaaa8d</code></a>
* fix: ignore AX windows without a WindowServer id (<a href="https://github.com/acsandmann/rift/issues/539">#539</a>) <a href="https://github.com/acsandmann/rift/commit/e21dae08"><code>e21dae08</code></a>

### Notes
This update releases a completely new Mission Control and scrolling layout. They have both been rewritten (in addition to the gesture system) to be much more resource efficient, fast, and better representations of their niri counterparts.

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.6.3">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.6.3/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.6.2...v0.6.3">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.6.2

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-09-27T23:19:44Z">September 27, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">419</dd></div></dl>

### Changes
* fix: rift not handling some java windows, compute_window_manageabilit… (<a href="https://github.com/acsandmann/rift/issues/537">#537</a>) <a href="https://github.com/acsandmann/rift/commit/6bb3b7c"><code>6bb3b7c</code></a>
* fix: focus_display then getting stuck on a display (<a href="https://github.com/acsandmann/rift/issues/533">#533</a>) <a href="https://github.com/acsandmann/rift/commit/088fe44"><code>088fe44</code></a>
* perf: query skylight instead of ax for window titles <a href="https://github.com/acsandmann/rift/commit/1453e77"><code>1453e77</code></a>
* fix: drag preview showing in floating layout <a href="https://github.com/acsandmann/rift/commit/8171b51"><code>8171b51</code></a>
* feat: binding_mode_changed + binding mode query (<a href="https://github.com/acsandmann/rift/issues/534">#534</a>) <a href="https://github.com/acsandmann/rift/commit/b8fe58e"><code>b8fe58e</code></a>
* fix: exclude rejected source-tile drag targets (<a href="https://github.com/acsandmann/rift/issues/536">#536</a>) <a href="https://github.com/acsandmann/rift/commit/b9f1aec"><code>b9f1aec</code></a>
* feat: show all displays on menubar (<a href="https://github.com/acsandmann/rift/issues/529">#529</a>) <a href="https://github.com/acsandmann/rift/commit/e3a5159"><code>e3a5159</code></a>
* fix: app activations not running workspace switches <a href="https://github.com/acsandmann/rift/commit/9646c99"><code>9646c99</code></a>
* feat: mouse warp (make stacked displays behave horizontal) <a href="https://github.com/acsandmann/rift/commit/951eef0"><code>951eef0</code></a>
* feat: per display overrides for scrolling layout geometry (<a href="https://github.com/acsandmann/rift/issues/505">#505</a>) <a href="https://github.com/acsandmann/rift/commit/1631fb2"><code>1631fb2</code></a>
* fix: new window loses focus race to the app's existing window on another workspace (<a href="https://github.com/acsandmann/rift/issues/527">#527</a>) <a href="https://github.com/acsandmann/rift/commit/8c69c2c"><code>8c69c2c</code></a>
* fix: listen for WindowServerHidden for windows that order out (<a href="https://github.com/acsandmann/rift/issues/530">#530</a>) <a href="https://github.com/acsandmann/rift/commit/3bf1cde"><code>3bf1cde</code></a>
* fix: run_on_start only after ready (<a href="https://github.com/acsandmann/rift/issues/515">#515</a>) <a href="https://github.com/acsandmann/rift/commit/ae900cd"><code>ae900cd</code></a>

### Contributors
* <a href="https://github.com/tingkai-c">@tingkai-c</a> made their first contribution in https://github.com/acsandmann/rift/pull/536

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.6.2">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.6.2/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.6.1...v0.6.2">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.6.1

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-09-25T01:55:20Z">September 25, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">333</dd></div></dl>

### Changes
* fix: preserve_window_sizes all times a window enters layout <a href="https://github.com/acsandmann/rift/commit/9b87edc"><code>9b87edc</code></a>
* fix: master window resize in master stack (<a href="https://github.com/acsandmann/rift/issues/288">#288</a>) <a href="https://github.com/acsandmann/rift/commit/8d32603"><code>8d32603</code></a>
* feat: single_window_aspect_ratio in bsp (<a href="https://github.com/acsandmann/rift/issues/458">#458</a>) <a href="https://github.com/acsandmann/rift/commit/1833b98"><code>1833b98</code></a>
* feat: binding modes (<a href="https://github.com/acsandmann/rift/issues/482">#482</a>) <a href="https://github.com/acsandmann/rift/commit/7117abf"><code>7117abf</code></a>
* fix: allow non regular activation policy windows (<a href="https://github.com/acsandmann/rift/issues/341">#341</a>) <a href="https://github.com/acsandmann/rift/commit/0ddcf73"><code>0ddcf73</code></a>
* fix: directions across vert displays (<a href="https://github.com/acsandmann/rift/issues/523">#523</a>) <a href="https://github.com/acsandmann/rift/commit/9ff2230"><code>9ff2230</code></a>
* fix: keep the drop highlight on the source until the pointer enters a window (<a href="https://github.com/acsandmann/rift/issues/526">#526</a>) <a href="https://github.com/acsandmann/rift/commit/7936260"><code>7936260</code></a>
* fix: let the input tap end modifier drags (<a href="https://github.com/acsandmann/rift/issues/524">#524</a>) <a href="https://github.com/acsandmann/rift/commit/4402c99"><code>4402c99</code></a>
* feat: expose stackline colors in config (<a href="https://github.com/acsandmann/rift/issues/522">#522</a>) <a href="https://github.com/acsandmann/rift/commit/c1612f6"><code>c1612f6</code></a>
* fix: keep a captured modifier drag across focus-follows-mouse resets (<a href="https://github.com/acsandmann/rift/issues/525">#525</a>) <a href="https://github.com/acsandmann/rift/commit/d796756"><code>d796756</code></a>
* fix: no focused window after closing window (<a href="https://github.com/acsandmann/rift/issues/521">#521</a>) <a href="https://github.com/acsandmann/rift/commit/3440f8b"><code>3440f8b</code></a>

### Contributors
* <a href="https://github.com/rojnwa">@rojnwa</a> made their first contribution in https://github.com/acsandmann/rift/pull/525

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.6.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.6.1/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.6.0...v0.6.1">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.6.0

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-09-23T19:37:57Z">September 23, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">235</dd></div></dl>

### Changes
* fix: make focus_display focus_desktop_if_active_workspace_empty (<a href="https://github.com/acsandmann/rift/issues/516">#516</a>) <a href="https://github.com/acsandmann/rift/commit/3eceac1"><code>3eceac1</code></a>
* feat: in scrolling preserve_window_sizes (<a href="https://github.com/acsandmann/rift/issues/514">#514</a>) <a href="https://github.com/acsandmann/rift/commit/6d3be63"><code>6d3be63</code></a>
* fix: bsp duplicate leafs (<a href="https://github.com/acsandmann/rift/issues/489">#489</a>) <a href="https://github.com/acsandmann/rift/commit/b5f198c"><code>b5f198c</code></a>
* feat: drag/drop actions (<a href="https://github.com/acsandmann/rift/issues/513">#513</a>) <a href="https://github.com/acsandmann/rift/commit/dd4f3d9"><code>dd4f3d9</code></a>
* fix: add default config to distribution (<a href="https://github.com/acsandmann/rift/issues/300">#300</a>) <a href="https://github.com/acsandmann/rift/commit/c345d6a"><code>c345d6a</code></a>
* fix: allow duplicate app_name when a rule has another matcher (<a href="https://github.com/acsandmann/rift/issues/510">#510</a>) <a href="https://github.com/acsandmann/rift/commit/bff0dfd"><code>bff0dfd</code></a>

### Contributors
* <a href="https://github.com/azuwis">@azuwis</a> made their first contribution in https://github.com/acsandmann/rift/pull/510

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.6.0">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.6.0/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.10...v0.6.0">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.10

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-09-19T00:13:54Z">September 19, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">567</dd></div></dl>

### Changes
* fix: apply a rule's focus only when the window is placed (<a href="https://github.com/acsandmann/rift/issues/507">#507</a>) <a href="https://github.com/acsandmann/rift/commit/445f31d"><code>445f31d</code></a>
* fix: add another window close event (<a href="https://github.com/acsandmann/rift/issues/486">#486</a>) <a href="https://github.com/acsandmann/rift/commit/5ab67c2"><code>5ab67c2</code></a>
* fix: apps reporting wrong pid during startup (<a href="https://github.com/acsandmann/rift/issues/491">#491</a>) <a href="https://github.com/acsandmann/rift/commit/c4ad9b5"><code>c4ad9b5</code></a>
* fix: pause mouse focus while menu open <a href="https://github.com/acsandmann/rift/commit/e9eafba"><code>e9eafba</code></a>
* fix: handle slow launching apps (<a href="https://github.com/acsandmann/rift/issues/491">#491</a>) <a href="https://github.com/acsandmann/rift/commit/311d57e"><code>311d57e</code></a>
* feat: more display/space scoping
* fix: release the display-churn gate on an edge, not on every snapshot (<a href="https://github.com/acsandmann/rift/issues/503">#503</a>) <a href="https://github.com/acsandmann/rift/commit/05fbe10"><code>05fbe10</code></a>
* feat: query windows/workspace by display id <a href="https://github.com/acsandmann/rift/commit/44d7fa1"><code>44d7fa1</code></a> <a href="https://github.com/acsandmann/rift/commit/634be2b"><code>634be2b</code></a>

### Contributors
* <a href="https://github.com/afladmark">@afladmark</a> made their first contribution in https://github.com/acsandmann/rift/pull/503

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.10">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.10/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.9...v0.5.10">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.9

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-09-16T13:44:18Z">September 16, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">222</dd></div></dl>

### Changes
* feat: move-workspace-to-display (<a href="https://github.com/acsandmann/rift/issues/314">#314</a>) <a href="https://github.com/acsandmann/rift/commit/52b2846"><code>52b2846</code></a>
* fix: hide off-screen scrolling columns and stop boundary focus jumps (<a href="https://github.com/acsandmann/rift/issues/320">#320</a>) <a href="https://github.com/acsandmann/rift/commit/cf102d4"><code>cf102d4</code></a>
* fix: keep self-initiated focus raises quiet (<a href="https://github.com/acsandmann/rift/issues/485">#485</a>) <a href="https://github.com/acsandmann/rift/commit/0121cf2"><code>0121cf2</code></a>
* perf: bulk window attributes (2-4x faster) <a href="https://github.com/acsandmann/rift/commit/d3be1bc"><code>d3be1bc</code></a>
* perf: reuse native id resolutions <a href="https://github.com/acsandmann/rift/commit/d7c7734"><code>d7c7734</code></a>
* perf: only request stale observations when needed <a href="https://github.com/acsandmann/rift/commit/a8a1079"><code>a8a1079</code></a>
* perf: gate window_spaces query <a href="https://github.com/acsandmann/rift/commit/6d66b90"><code>6d66b90</code></a>

### Contributors
* <a href="https://github.com/lmk02">@lmk02</a> made their first contribution in https://github.com/acsandmann/rift/pull/485

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.9">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.9/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.8.1...v0.5.9">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.8.1

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-09-11T00:55:10Z">September 11, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">320</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.8.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.8.1/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.8...v0.5.8.1">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.8

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-09-11T00:28:53Z">September 11, 2026</time></dd></div></dl>

### Changes
* Revert "fix: avoid redundant layout [asses" <a href="https://github.com/acsandmann/rift/commit/7a59369"><code>7a59369</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.8">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.8/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.7...v0.5.8">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.7

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-09-09T22:00:35Z">September 9, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">115</dd></div></dl>

### Changes
* fix: memory leaks in ipc <a href="https://github.com/acsandmann/rift/commit/be3bbea"><code>be3bbea</code></a>
* fix: make persistence matching more permissive (<a href="https://github.com/acsandmann/rift/issues/481">#481</a>) <a href="https://github.com/acsandmann/rift/commit/563d54a"><code>563d54a</code></a>
* fix(traditional): avoid panic when join collapses the shared parent (<a href="https://github.com/acsandmann/rift/issues/470">#470</a>) <a href="https://github.com/acsandmann/rift/commit/9b4f133"><code>9b4f133</code></a>

### News
After over a year of being out in the open, rift now has a docs site! Check it out at https://acsandmann.github.io/rift-docs/ and provide any and all feedback in rifts [matrix room](https://matrix.to/#/%23rift:matrix.org).

### Contributors
* <a href="https://github.com/Trigus42">@Trigus42</a> made their first contribution in https://github.com/acsandmann/rift/pull/470

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.7">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.7/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.6...v0.5.7">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.6

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-09-06T20:35:40Z">September 6, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">237</dd></div></dl>

### Changes
* fix: only rerun title rule <a href="https://github.com/acsandmann/rift/commit/556b7ad"><code>556b7ad</code></a>
* fix: avoid redundant layout [asses <a href="https://github.com/acsandmann/rift/commit/6baa565"><code>6baa565</code></a>
* fix(bsp): raise only the focus target on move_focus (<a href="https://github.com/acsandmann/rift/issues/478">#478</a>) <a href="https://github.com/acsandmann/rift/commit/b9e6d6c"><code>b9e6d6c</code></a>
* fix: keep tracking the dragged frame while a drag swap is pending (<a href="https://github.com/acsandmann/rift/issues/475">#475</a>) <a href="https://github.com/acsandmann/rift/commit/beeac0e"><code>beeac0e</code></a>
* fix: windowtitlechanged not firing (<a href="https://github.com/acsandmann/rift/issues/471">#471</a>) <a href="https://github.com/acsandmann/rift/commit/1714f90"><code>1714f90</code></a>
* perf: menu bar <a href="https://github.com/acsandmann/rift/commit/dd9ad8f"><code>dd9ad8f</code></a>
* fix: dont destroy on invaliduielement (<a href="https://github.com/acsandmann/rift/issues/456">#456</a>) <a href="https://github.com/acsandmann/rift/commit/251fe8b"><code>251fe8b</code></a>
* fix: make loginwindow activation authoritative (<a href="https://github.com/acsandmann/rift/issues/456">#456</a>) <a href="https://github.com/acsandmann/rift/commit/e7eb854"><code>e7eb854</code></a>
* fix: don't reset layout when moving between display sizes (<a href="https://github.com/acsandmann/rift/issues/440">#440</a>) <a href="https://github.com/acsandmann/rift/commit/d8214ba"><code>d8214ba</code></a>
* fix: refresh stale AX inventories after display wake <a href="https://github.com/acsandmann/rift/commit/d095bb6"><code>d095bb6</code></a>
* feat: selection changed event (<a href="https://github.com/acsandmann/rift/issues/466">#466</a>) <a href="https://github.com/acsandmann/rift/commit/7821dd3"><code>7821dd3</code></a>
* feat: stable node_id in layoutchanged (<a href="https://github.com/acsandmann/rift/issues/466">#466</a>) <a href="https://github.com/acsandmann/rift/commit/7e76bdb"><code>7e76bdb</code></a>
* feat: frame in container_tree in layoutchanged (<a href="https://github.com/acsandmann/rift/issues/466">#466</a>) <a href="https://github.com/acsandmann/rift/commit/487168d"><code>487168d</code></a>
* fix(master-stack): preserve membership when removing windows (<a href="https://github.com/acsandmann/rift/issues/469">#469</a>) <a href="https://github.com/acsandmann/rift/commit/ed3b6c5"><code>ed3b6c5</code></a>
* fix: reap the child when NOTE_EXIT beats the zombie transition (<a href="https://github.com/acsandmann/rift/issues/465">#465</a>) <a href="https://github.com/acsandmann/rift/commit/372fcd2"><code>372fcd2</code></a>

### Contributors
* <a href="https://github.com/deancureton">@deancureton</a> made their first contribution in https://github.com/acsandmann/rift/pull/465
* <a href="https://github.com/zuozh11">@zuozh11</a> made their first contribution in https://github.com/acsandmann/rift/pull/469
* <a href="https://github.com/ChrisAmora">@ChrisAmora</a> made their first contribution in https://github.com/acsandmann/rift/pull/475
* <a href="https://github.com/ae-bii">@ae-bii</a> made their first contribution in https://github.com/acsandmann/rift/pull/478

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.6">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.6/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.5...v0.5.6">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.5-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-09-01T01:02:31Z">September 1, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">328</dd></div></dl>

### Changes
* fix: warp cursor to the focused window on focus_display <a href="https://github.com/acsandmann/rift/commit/b67cf2e"><code>b67cf2e</code></a>
* fix: move real window focus on focus_display and move_mouse_to_display (<a href="https://github.com/acsandmann/rift/issues/332">#332</a>) <a href="https://github.com/acsandmann/rift/commit/afa767f"><code>afa767f</code></a>
* fix: warp cursor after move_node <a href="https://github.com/acsandmann/rift/commit/8a1cad0"><code>8a1cad0</code></a>
* fix: reject snapshots with space: None <a href="https://github.com/acsandmann/rift/commit/21efa52"><code>21efa52</code></a>
* fix: handle window_spaces returning >1 spaces <a href="https://github.com/acsandmann/rift/commit/b1060de"><code>b1060de</code></a>
* fix: hotkey parsing/key list <a href="https://github.com/acsandmann/rift/commit/0f70787"><code>0f70787</code></a>
* fix: dock orientation values <a href="https://github.com/acsandmann/rift/commit/9deb843"><code>9deb843</code></a>
* fix: refresh stale ax identifies <a href="https://github.com/acsandmann/rift/commit/6d7b21c"><code>6d7b21c</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.5">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.5/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.3...v0.5.4">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.4-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-08-31T20:39:20Z">August 31, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">24</dd></div></dl>

### Changes
* fix: duplication of child windows (<a href="https://github.com/acsandmann/rift/issues/462">#462</a>) <a href="https://github.com/acsandmann/rift/commit/f9b152d"><code>f9b152d</code></a>
* fix: axwindows update resetting layouts/workspaces (<a href="https://github.com/acsandmann/rift/issues/440">#440</a>) <a href="https://github.com/acsandmann/rift/commit/e4aa60d"><code>e4aa60d</code></a>
* fix: layout/workspace resets (<a href="https://github.com/acsandmann/rift/issues/456">#456</a>) (<a href="https://github.com/acsandmann/rift/issues/440">#440</a>) <a href="https://github.com/acsandmann/rift/commit/59b9033"><code>59b9033</code></a>
* fix: reject ordered-out windows during app discovery (<a href="https://github.com/acsandmann/rift/issues/460">#460</a>) <a href="https://github.com/acsandmann/rift/commit/46f5ba0"><code>46f5ba0</code></a>
* perf: menu bar <a href="https://github.com/acsandmann/rift/commit/73a475f"><code>73a475f</code></a>
* fix: honor double-quote grouping in parse_command (<a href="https://github.com/acsandmann/rift/issues/445">#445</a>) <a href="https://github.com/acsandmann/rift/commit/74ce00d"><code>74ce00d</code></a>
* fix: app activation away from loginwindow messing up wake cycle <a href="https://github.com/acsandmann/rift/commit/fad6498"><code>fad6498</code></a>
* fix: allow ffm to target only layer=0 windows <a href="https://github.com/acsandmann/rift/commit/a99c898"><code>a99c898</code></a>
* feat: center/size window on float (<a href="https://github.com/acsandmann/rift/issues/448">#448</a>) <a href="https://github.com/acsandmann/rift/commit/54ac143"><code>54ac143</code></a>
* fix: master_stack insertion point handling (<a href="https://github.com/acsandmann/rift/issues/452">#452</a>) <a href="https://github.com/acsandmann/rift/commit/7b8a0a4"><code>7b8a0a4</code></a>
* feat: layout_changed ipc event (<a href="https://github.com/acsandmann/rift/issues/453">#453</a>) <a href="https://github.com/acsandmann/rift/commit/7d026c4"><code>7d026c4</code></a>
* feat: col/row ordering in query api (<a href="https://github.com/acsandmann/rift/issues/454">#454</a>) <a href="https://github.com/acsandmann/rift/commit/38eacff"><code>38eacff</code></a>
* fix: col width calculation (<a href="https://github.com/acsandmann/rift/issues/449">#449</a>) <a href="https://github.com/acsandmann/rift/commit/be8afef"><code>be8afef</code></a>
* feat: explicit manage=true lets nominally unmanageable windows into layout <a href="https://github.com/acsandmann/rift/commit/cce710a"><code>cce710a</code></a>
* feat: improved gestures (<a href="https://github.com/acsandmann/rift/issues/446">#446</a>) <a href="https://github.com/acsandmann/rift/commit/9215d53"><code>9215d53</code></a>
* fix: retry failed position requests <a href="https://github.com/acsandmann/rift/commit/5e10972"><code>5e10972</code></a>
* fix: ghost windows + layout reset (<a href="https://github.com/acsandmann/rift/issues/440">#440</a>) <a href="https://github.com/acsandmann/rift/commit/f2a9349"><code>f2a9349</code></a>
* fix: use after free panic (<a href="https://github.com/acsandmann/rift/issues/447">#447</a>) <a href="https://github.com/acsandmann/rift/commit/b84dda4"><code>b84dda4</code></a>
* feat: !BREAKING! reveal layout state to ipc/cli (<a href="https://github.com/acsandmann/rift/issues/439">#439</a>) <a href="https://github.com/acsandmann/rift/commit/3a52122"><code>3a52122</code></a>
* fix: ghost windows after minimization <a href="https://github.com/acsandmann/rift/commit/7783d52"><code>7783d52</code></a> <a href="https://github.com/acsandmann/rift/commit/792370e"><code>792370e</code></a>
* perf: only rebuild menu bar once <a href="https://github.com/acsandmann/rift/commit/abdbcc8"><code>abdbcc8</code></a>
* perf: fast path for frame ack <a href="https://github.com/acsandmann/rift/commit/02f16c3"><code>02f16c3</code></a>
* perf: optimized enhancedui handling <a href="https://github.com/acsandmann/rift/commit/6eff0b8"><code>6eff0b8</code></a>
* fix: make ax destroy not be authoritative (<a href="https://github.com/acsandmann/rift/issues/440">#440</a>) <a href="https://github.com/acsandmann/rift/commit/1e3a898"><code>1e3a898</code></a>
* fix: move_node hiding col in scroll layout (<a href="https://github.com/acsandmann/rift/issues/437">#437</a>) <a href="https://github.com/acsandmann/rift/commit/1de4d09"><code>1de4d09</code></a>

### Contributors
* <a href="https://github.com/YuriNachos">@YuriNachos</a> made their first contribution in https://github.com/acsandmann/rift/pull/445
* <a href="https://github.com/CoolJosh0221">@CoolJosh0221</a> made their first contribution in https://github.com/acsandmann/rift/pull/460

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.4">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.4/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.3...v0.5.4">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.3-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-08-04T01:27:41Z">August 4, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">802</dd></div></dl>

### Changes
* feat: more app rule fields (<a href="https://github.com/acsandmann/rift/issues/375">#375</a>) <a href="https://github.com/acsandmann/rift/commit/6c64d8b"><code>6c64d8b</code></a>
* fix: hot reload main settings that arent keybindings <a href="https://github.com/acsandmann/rift/commit/b619ce5"><code>b619ce5</code></a>
* fix: mouse_hides_on_focus (<a href="https://github.com/acsandmann/rift/issues/374">#374</a>) <a href="https://github.com/acsandmann/rift/commit/155d522"><code>155d522</code></a>
* fix: roll strip automatically when focus changes (<a href="https://github.com/acsandmann/rift/issues/434">#434</a>) <a href="https://github.com/acsandmann/rift/commit/12e8efc"><code>12e8efc</code></a>
* feat: rift-protocol <a href="https://github.com/acsandmann/rift/commit/a39581e"><code>a39581e</code></a> <a href="https://github.com/acsandmann/rift/commit/103af15"><code>103af15</code></a> <a href="https://github.com/acsandmann/rift/commit/e546861"><code>e546861</code></a>
* feat: dimmer example <a href="https://github.com/acsandmann/rift/commit/8f0d925"><code>8f0d925</code></a>
* feat: rift-client library <a href="https://github.com/acsandmann/rift/commit/25d5923"><code>25d5923</code></a>
* fix: insertion point in scrolling layout <a href="https://github.com/acsandmann/rift/commit/6e5ed78"><code>6e5ed78</code></a>
* fix: improvements to mission control 1/n <a href="https://github.com/acsandmann/rift/commit/0bf5549"><code>0bf5549</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.3">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.3/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.2...v0.5.3">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.2-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-08-03T14:28:21Z">August 3, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">56</dd></div></dl>

### Changes
* fix: make animations respect config (<a href="https://github.com/acsandmann/rift/issues/432">#432</a>) <a href="https://github.com/acsandmann/rift/commit/3185d1c"><code>3185d1c</code></a>
* feat: focused window changed broadcast event <a href="https://github.com/acsandmann/rift/commit/5c0b38d"><code>5c0b38d</code></a>
* perf: position only workspace switch <a href="https://github.com/acsandmann/rift/commit/a5c429d"><code>a5c429d</code></a>
* perf: remove duplicate menu update <a href="https://github.com/acsandmann/rift/commit/fe8a687"><code>fe8a687</code></a>
* perf: recognize layout noops <a href="https://github.com/acsandmann/rift/commit/b9b79be"><code>b9b79be</code></a>
* chore: default equalize_nodes to true <a href="https://github.com/acsandmann/rift/commit/a369cf2"><code>a369cf2</code></a>
* perf: scope workspace switch to active display <a href="https://github.com/acsandmann/rift/commit/fe97ae2"><code>fe97ae2</code></a>
* fix: app activation handling <a href="https://github.com/acsandmann/rift/commit/652a53f"><code>652a53f</code></a>
* feat: layout normalizations (<a href="https://github.com/acsandmann/rift/issues/430">#430</a>) <a href="https://github.com/acsandmann/rift/commit/e95944e"><code>e95944e</code></a>
* feat: configurable window insertion point (<a href="https://github.com/acsandmann/rift/issues/427">#427</a>) <a href="https://github.com/acsandmann/rift/commit/95bc739"><code>95bc739</code></a>
* fix: slow workspace switch following app activation <a href="https://github.com/acsandmann/rift/commit/7f26efe"><code>7f26efe</code></a>
* fix: consume gesture events that count towards a swipe <a href="https://github.com/acsandmann/rift/commit/fa4ca62"><code>fa4ca62</code></a>
* fix: event_taps going offline (<a href="https://github.com/acsandmann/rift/issues/431">#431</a>) <a href="https://github.com/acsandmann/rift/commit/38572a0"><code>38572a0</code></a>
* fix: restore space logic <a href="https://github.com/acsandmann/rift/commit/eb05b70"><code>eb05b70</code></a>
* fix: ghost windows from layout restore <a href="https://github.com/acsandmann/rift/commit/c160d6c"><code>c160d6c</code></a>
* perf: correct EventOutcome semantics <a href="https://github.com/acsandmann/rift/commit/c6ebf61"><code>c6ebf61</code></a>
* perf: less redundant layout arrangements <a href="https://github.com/acsandmann/rift/commit/6a2b3ad"><code>6a2b3ad</code></a>
* fix: dont add gap for menubar on non notched displays (<a href="https://github.com/acsandmann/rift/issues/425">#425</a>) <a href="https://github.com/acsandmann/rift/commit/93a1fd3"><code>93a1fd3</code></a>
* fix: StackLineHoverMode being reversed <a href="https://github.com/acsandmann/rift/commit/ef39a1b"><code>ef39a1b</code></a>
* feat: follow window to workspace <a href="https://github.com/acsandmann/rift/commit/af9fff7"><code>af9fff7</code></a>
* feat: track role window (<a href="https://github.com/acsandmann/rift/issues/242">#242</a>) (<a href="https://github.com/acsandmann/rift/issues/308">#308</a>) <a href="https://github.com/acsandmann/rift/commit/a5fa216"><code>a5fa216</code></a>
* fix: smarter restoration <a href="https://github.com/acsandmann/rift/commit/dd1e2be"><code>dd1e2be</code></a>
* feat: prevent_wrapping virtual workspace option (<a href="https://github.com/acsandmann/rift/issues/205">#205</a>) <a href="https://github.com/acsandmann/rift/commit/ad6288b"><code>ad6288b</code></a>
* feat: movewindowtoworkspace = "next" (<a href="https://github.com/acsandmann/rift/issues/198">#198</a>) <a href="https://github.com/acsandmann/rift/commit/0991ca5"><code>0991ca5</code></a>
* feat: optional on hover stackline actions (<a href="https://github.com/acsandmann/rift/issues/417">#417</a>) <a href="https://github.com/acsandmann/rift/commit/80edaee"><code>80edaee</code></a>
* feat: resize_window_grow/shrink optional orientation (<a href="https://github.com/acsandmann/rift/issues/421">#421</a>) <a href="https://github.com/acsandmann/rift/commit/2fe38b8"><code>2fe38b8</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.2">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.2/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.1...v0.5.2">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.1-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-07-23T16:01:55Z">July 23, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">348</dd></div></dl>

### Changes
* fix: smarter restoration <a href="https://github.com/acsandmann/rift/commit/f2a2e56"><code>f2a2e56</code></a>  <a href="https://github.com/acsandmann/rift/commit/b47bb75"><code>b47bb75</code></a>
* feat: prevent_wrapping virtual workspace option (<a href="https://github.com/acsandmann/rift/issues/205">#205</a>) <a href="https://github.com/acsandmann/rift/commit/0991ca5"><code>0991ca5</code></a>
* feat: movewindowtoworkspace = "next" (<a href="https://github.com/acsandmann/rift/issues/198">#198</a>) <a href="https://github.com/acsandmann/rift/commit/80edaee"><code>80edaee</code></a>
* feat: optional on hover stackline actions (<a href="https://github.com/acsandmann/rift/issues/417">#417</a>) <a href="https://github.com/acsandmann/rift/commit/2fe38b8"><code>2fe38b8</code></a>
* feat: resize_window_grow/shrink optional orientation (<a href="https://github.com/acsandmann/rift/issues/421">#421</a>) <a href="https://github.com/acsandmann/rift/commit/3866b7e"><code>3866b7e</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.1/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.5.0...v0.5.1">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.5.0-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-07-22T22:02:04Z">July 22, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">73</dd></div></dl>

### Changes
* fix: app kvo observers <a href="https://github.com/acsandmann/rift/commit/023cd33"><code>023cd33</code></a>
* feat: sls based focus state <a href="https://github.com/acsandmann/rift/commit/f008fee"><code>f008fee</code></a>
* fix: noop single window raises when already front <a href="https://github.com/acsandmann/rift/commit/aa31d7e"><code>aa31d7e</code></a>
* fix: get rid of watchdog polling in event_tap <a href="https://github.com/acsandmann/rift/commit/2c350f7"><code>2c350f7</code></a>
* fix: dont wait to app to be active to raise <a href="https://github.com/acsandmann/rift/commit/ad77133"><code>ad77133</code></a>
* feat: Allow fullscreen toggling of floating windows (<a href="https://github.com/acsandmann/rift/issues/420">#420</a>) <a href="https://github.com/acsandmann/rift/commit/0ba4f68"><code>0ba4f68</code></a>
* fix: early return if display is same after display changed event <a href="https://github.com/acsandmann/rift/commit/7b67c36"><code>7b67c36</code></a>
* feat: experimental restoreable state/layouts <a href="https://github.com/acsandmann/rift/commit/de0f346"><code>de0f346</code></a> <a href="https://github.com/acsandmann/rift/commit/d710931"><code>d710931</code></a>
* chore: add missing "scrolling" layout in default config (<a href="https://github.com/acsandmann/rift/issues/419">#419</a>) <a href="https://github.com/acsandmann/rift/commit/e4b4e4c"><code>e4b4e4c</code></a>
* feat: focus window by id in cli (<a href="https://github.com/acsandmann/rift/issues/338">#338</a>) <a href="https://github.com/acsandmann/rift/commit/4b2882d"><code>4b2882d</code></a>

### Contributors
* <a href="https://github.com/nuugen">@nuugen</a> made their first contribution in https://github.com/acsandmann/rift/pull/419

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.5.0">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.5.0/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.4...v0.5.0">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.4-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-07-13T19:18:08Z">July 13, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">348</dd></div></dl>

### Changes
* feat: consume_and_expel (<a href="https://github.com/acsandmann/rift/issues/373">#373</a>) <a href="https://github.com/acsandmann/rift/commit/2933c3e"><code>2933c3e</code></a>
* feat: reload_config keybind command (<a href="https://github.com/acsandmann/rift/issues/348">#348</a>) <a href="https://github.com/acsandmann/rift/commit/d292448"><code>d292448</code></a>
* feat: raise max workspaces (<a href="https://github.com/acsandmann/rift/issues/394">#394</a>) <a href="https://github.com/acsandmann/rift/commit/cdbbed8"><code>cdbbed8</code></a>
* fix: windows resetting after sleep/churn <a href="https://github.com/acsandmann/rift/commit/f22b84e"><code>f22b84e</code></a>
* fix: adjust_master_ratio (<a href="https://github.com/acsandmann/rift/issues/326">#326</a>) <a href="https://github.com/acsandmann/rift/commit/a47abd9"><code>a47abd9</code></a>
* fix: direction specific hotkeys (<a href="https://github.com/acsandmann/rift/issues/346">#346</a>) <a href="https://github.com/acsandmann/rift/commit/80f6d35"><code>80f6d35</code></a>
* fix: close_window (<a href="https://github.com/acsandmann/rift/issues/411">#411</a>) <a href="https://github.com/acsandmann/rift/commit/9e3f60c"><code>9e3f60c</code></a>
* fix: handle constraints better in bsp (<a href="https://github.com/acsandmann/rift/issues/409">#409</a>) <a href="https://github.com/acsandmann/rift/commit/8713867"><code>8713867</code></a>
* feat: space actor (<a href="https://github.com/acsandmann/rift/issues/392">#392</a>) <a href="https://github.com/acsandmann/rift/commit/223c3dc"><code>223c3dc</code></a>
* fix: Master Stack Layout Reordering and Arrangement (<a href="https://github.com/acsandmann/rift/issues/397">#397</a>) (<a href="https://github.com/acsandmann/rift/issues/398">#398</a>) <a href="https://github.com/acsandmann/rift/commit/23a4c9d"><code>23a4c9d</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.4">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.4/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.3...v0.5.0">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.3-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-06-15T17:00:47Z">June 15, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">657</dd></div></dl>

**Whats Changed**
* feat: async animations <a href="https://github.com/acsandmann/rift/commit/1852328"><code>1852328</code></a>
* fix: mouse getting hidden and not unhidden <a href="https://github.com/acsandmann/rift/commit/d482adb"><code>d482adb</code></a>
* feat: retry app notifications for apps slow to respond <a href="https://github.com/acsandmann/rift/commit/d9a36aa"><code>d9a36aa</code></a>
* feat: optimize app actor <a href="https://github.com/acsandmann/rift/commit/b039b32"><code>b039b32</code></a>
* chore: clean up handling of minimized windows <a href="https://github.com/acsandmann/rift/commit/78371aa"><code>78371aa</code></a>
* fix: focus correct window on activation (<a href="https://github.com/acsandmann/rift/issues/389">#389</a>) <a href="https://github.com/acsandmann/rift/commit/77501ab"><code>77501ab</code></a>
* fix: keep track of windows after native unfullscreened <a href="https://github.com/acsandmann/rift/commit/a7b4908"><code>a7b4908</code></a>
* chore: condense all window state into window_registry <a href="https://github.com/acsandmann/rift/commit/05ea842"><code>05ea842</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.3">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.3/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.2...v0.4.3">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.2-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-06-14T20:36:10Z">June 14, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">78</dd></div></dl>

### Changes
* fix: stop floating window ping-pong across displays <a href="https://github.com/acsandmann/rift/commit/2f0b55d"><code>2f0b55d</code></a>
* feat: add event hints in observers refcons to reduce lookups <a href="https://github.com/acsandmann/rift/commit/5c20512"><code>5c20512</code></a>
* feat: update window skylight tag filtering <a href="https://github.com/acsandmann/rift/commit/26f28d3"><code>26f28d3</code></a>
* feat: ignore windows with near zero alphas <a href="https://github.com/acsandmann/rift/commit/8f91244"><code>8f91244</code></a>
* fix: scrolling alignment (<a href="https://github.com/acsandmann/rift/issues/387">#387</a>) <a href="https://github.com/acsandmann/rift/commit/432c83d"><code>432c83d</code></a>
* fix(scrolling): preserve vertical window sizes when resizing within columns (<a href="https://github.com/acsandmann/rift/issues/386">#386</a>) <a href="https://github.com/acsandmann/rift/commit/2aaeeac"><code>2aaeeac</code></a>
* fix(hotkey): handle device-dependent modifiers for remapped hyper keys (<a href="https://github.com/acsandmann/rift/issues/383">#383</a>) <a href="https://github.com/acsandmann/rift/commit/86bc4f4"><code>86bc4f4</code></a>
* feat: Decouple Master/Stack Side Placement from Window Arrangement Direction (<a href="https://github.com/acsandmann/rift/issues/367">#367</a>) <a href="https://github.com/acsandmann/rift/commit/f5693f0"><code>f5693f0</code></a>
* fix: space_switch on macos27 (<a href="https://github.com/acsandmann/rift/issues/381">#381</a>) <a href="https://github.com/acsandmann/rift/commit/0d5eb42"><code>0d5eb42</code></a>
* fix: stop freeze after a raise times out <a href="https://github.com/acsandmann/rift/commit/c0b2755"><code>c0b2755</code></a>
* fixes <a href="https://github.com/acsandmann/rift/commit/98681e2"><code>98681e2</code></a>
* fix: focus follows mouse <a href="https://github.com/acsandmann/rift/commit/9d1f080"><code>9d1f080</code></a>
* fix: preserve other display spaces when fullscreen space exists <a href="https://github.com/acsandmann/rift/commit/db08871"><code>db08871</code></a>
* fix: keyboard becomes unresponsive after prolonged use (<a href="https://github.com/acsandmann/rift/issues/368">#368</a>) <a href="https://github.com/acsandmann/rift/commit/955ac8a"><code>955ac8a</code></a>

### Contributors
* <a href="https://github.com/sj-cstar">@sj-cstar</a> made their first contribution in https://github.com/acsandmann/rift/pull/368
* <a href="https://github.com/hajiboy95">@hajiboy95</a> made their first contribution in https://github.com/acsandmann/rift/pull/367

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.2">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.2/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.1...v0.4.2">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.1-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-05-15T19:20:04Z">May 15, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">959</dd></div></dl>

### Changes
* fix: stabilize cross-display drag snapback by <a href="https://github.com/leokeba">@leokeba</a> in https://github.com/acsandmann/rift/pull/310
* fix: restore main-window selection after startup discovery by <a href="https://github.com/corpooo">@corpooo</a> in https://github.com/acsandmann/rift/pull/321
* fix: prevent fullscreen spaces from wiping workspace assignments on wake by <a href="https://github.com/strayer">@strayer</a> in https://github.com/acsandmann/rift/pull/334
* fix: broadcast windows_changed on all MoveWindowToWorkspace paths by <a href="https://github.com/yuukidach">@yuukidach</a> in https://github.com/acsandmann/rift/pull/336
* fix: stackline appears behind floating window (<a href="https://github.com/acsandmann/rift/issues/279">#279</a>) by <a href="https://github.com/Swoorup">@Swoorup</a> in https://github.com/acsandmann/rift/pull/325
* fix: prevent window oscillation after display topology change by <a href="https://github.com/strayer">@strayer</a> in https://github.com/acsandmann/rift/pull/342
* fix: handle zero window server ids by <a href="https://github.com/adamjhf">@adamjhf</a> in https://github.com/acsandmann/rift/pull/362
* fix: stop handling full screen windows in tile layout by <a href="https://github.com/alextorma">@alextorma</a> in https://github.com/acsandmann/rift/pull/358
* fix: don't drop tiled windows when app has a fullscreen space by <a href="https://github.com/alextorma">@alextorma</a> in https://github.com/acsandmann/rift/pull/359
* fix(engine): mitigate focus corruption from boundary raise races by <a href="https://github.com/qeude">@qeude</a> in https://github.com/acsandmann/rift/pull/355

### Contributors
* <a href="https://github.com/leokeba">@leokeba</a> made their first contribution in https://github.com/acsandmann/rift/pull/310
* <a href="https://github.com/corpooo">@corpooo</a> made their first contribution in https://github.com/acsandmann/rift/pull/321
* <a href="https://github.com/strayer">@strayer</a> made their first contribution in https://github.com/acsandmann/rift/pull/334
* <a href="https://github.com/yuukidach">@yuukidach</a> made their first contribution in https://github.com/acsandmann/rift/pull/336
* <a href="https://github.com/Swoorup">@Swoorup</a> made their first contribution in https://github.com/acsandmann/rift/pull/325
* <a href="https://github.com/alextorma">@alextorma</a> made their first contribution in https://github.com/acsandmann/rift/pull/358
* <a href="https://github.com/qeude">@qeude</a> made their first contribution in https://github.com/acsandmann/rift/pull/355

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.1/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.0...v0.4.1">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.0

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-03-03T13:44:57Z">March 3, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">1,486</dd></div></dl>

### Changes
* feat: stack layout <a href="https://github.com/acsandmann/rift/commit/50b50b3"><code>50b50b3</code></a>
* feat: sublevels for ffm <a href="https://github.com/acsandmann/rift/commit/3aaf6f4"><code>3aaf6f4</code></a>
* fix: constrained windows <a href="https://github.com/acsandmann/rift/commit/a46c4bc"><code>a46c4bc</code></a>
* fix: adjust maximum column width ratio to 1.0 by <a href="https://github.com/BennyDeeDev">@BennyDeeDev</a> in https://github.com/acsandmann/rift/pull/292
* feat: handle unresizeable windows <a href="https://github.com/acsandmann/rift/commit/1c94cc8"><code>1c94cc8</code></a>
* fix: prevent stale txid (<a href="https://github.com/acsandmann/rift/issues/268">#268</a>) <a href="https://github.com/acsandmann/rift/commit/b491525"><code>b491525</code></a>
* feat: menu bar menu <a href="https://github.com/acsandmann/rift/commit/3460769"><code>3460769</code></a>
* fix: ffm not working <a href="https://github.com/acsandmann/rift/commit/d9af21c"><code>d9af21c</code></a>
* perf: lock free main loop <a href="https://github.com/acsandmann/rift/commit/056224c"><code>056224c</code></a>
* feat: properly determine hide corner <a href="https://github.com/acsandmann/rift/commit/d8ff72e"><code>d8ff72e</code></a>
* fix: improve display handling <a href="https://github.com/acsandmann/rift/commit/45d77a2"><code>45d77a2</code></a>
* fix: display churn after sleep <a href="https://github.com/acsandmann/rift/commit/04283dc"><code>04283dc</code></a>
* fix: multi display handling <a href="https://github.com/acsandmann/rift/commit/1bf16a9"><code>1bf16a9</code></a>
* perf: reduce allocations <a href="https://github.com/acsandmann/rift/commit/0599eff"><code>0599eff</code></a> + <a href="https://github.com/acsandmann/rift/commit/9522797"><code>9522797</code></a>
* perf: reduce cpu <a href="https://github.com/acsandmann/rift/commit/f3159ae"><code>f3159ae</code></a>
* feat: event streaming via mach server <a href="https://github.com/acsandmann/rift/commit/b5e8114"><code>b5e8114</code></a>
* chore: only send stackschanged if there are stacks <a href="https://github.com/acsandmann/rift/commit/56d9c0e"><code>56d9c0e</code></a>
* chore: animations disabled by default <a href="https://github.com/acsandmann/rift/commit/80e27e3"><code>80e27e3</code></a>
* fix: dup app thread launches leading to window oscillation <a href="https://github.com/acsandmann/rift/commit/0be579d"><code>0be579d</code></a>
* fix: window oscillation <a href="https://github.com/acsandmann/rift/commit/cbd70b2"><code>cbd70b2</code></a>
* perf: event_tap <a href="https://github.com/acsandmann/rift/commit/783d7b8"><code>783d7b8</code></a> + <a href="https://github.com/acsandmann/rift/commit/6a8957f"><code>6a8957f</code></a> + <a href="https://github.com/acsandmann/rift/commit/c7cc120"><code>c7cc120</code></a>
* perf: don't fully refresh window info on title change <a href="https://github.com/acsandmann/rift/commit/8b0b3b2"><code>8b0b3b2</code></a>
* chore: cleanup layout engine <a href="https://github.com/acsandmann/rift/commit/8427aa2"><code>8427aa2</code></a>
* fix: focus follows mouse breaking intermittently <a href="https://github.com/acsandmann/rift/commit/cb3f75b"><code>cb3f75b</code></a>
* fix: bundle_id is now correct !BREAKING <a href="https://github.com/acsandmann/rift/commit/50c2bab"><code>50c2bab</code></a>
* chore: demote MainWindowChanged logs from warn <a href="https://github.com/acsandmann/rift/commit/a6b072f"><code>a6b072f</code></a>
* feat: stacks_changed broadcast event <a href="https://github.com/acsandmann/rift/commit/bac1194"><code>bac1194</code></a>
* chore: update stack line defaults <a href="https://github.com/acsandmann/rift/commit/86044b5"><code>86044b5</code></a>
* feat: cycle windows sequentially instead of using directional focus (<a href="https://github.com/acsandmann/rift/issues/268">#268</a>) <a href="https://github.com/acsandmann/rift/commit/7cc8aca"><code>7cc8aca</code></a>
* fix: dismiss misson control cli command <a href="https://github.com/acsandmann/rift/commit/6c6943a"><code>6c6943a</code></a>
* fix: crash when moving btwn spaces (<a href="https://github.com/acsandmann/rift/issues/272">#272</a>) <a href="https://github.com/acsandmann/rift/commit/6bc2ee6"><code>6bc2ee6</code></a>
*  fix: scrolling with multi monitor (<a href="https://github.com/acsandmann/rift/issues/266">#266</a>) <a href="https://github.com/acsandmann/rift/commit/e71a6fd"><code>e71a6fd</code></a>
* perf: optimize animations <a href="https://github.com/acsandmann/rift/commit/fc00c51"><code>fc00c51</code></a>
* fix: respect invert_horizontal_swipe <a href="https://github.com/acsandmann/rift/commit/7a124c6"><code>7a124c6</code></a>
* feat: per workspace layouts (<a href="https://github.com/acsandmann/rift/issues/258">#258</a>) <a href="https://github.com/acsandmann/rift/commit/9852561"><code>9852561</code></a>
* fix: not assigning keycodes properly (<a href="https://github.com/acsandmann/rift/issues/263">#263</a>) <a href="https://github.com/acsandmann/rift/commit/d4c5b28"><code>d4c5b28</code></a>
* chore: ensure ffm state is proper <a href="https://github.com/acsandmann/rift/commit/99af084"><code>99af084</code></a>
* fix: scrolling layout using wrong defaults <a href="https://github.com/acsandmann/rift/commit/d87787d"><code>d87787d</code></a>
* feat: scrolling layout (<a href="https://github.com/acsandmann/rift/issues/251">#251</a>) <a href="https://github.com/acsandmann/rift/commit/550256d"><code>550256d</code></a>
* fix: disable eui on app <a href="https://github.com/acsandmann/rift/commit/867ca99"><code>867ca99</code></a>
* fix: window animations (<a href="https://github.com/acsandmann/rift/issues/255">#255</a>) <a href="https://github.com/acsandmann/rift/commit/7346b64"><code>7346b64</code></a>
* chore: hide notice when default_disable=false (<a href="https://github.com/acsandmann/rift/issues/254">#254</a>) <a href="https://github.com/acsandmann/rift/commit/efc4d53"><code>efc4d53</code></a>
* fix: hide stackline when node is zoomed (<a href="https://github.com/acsandmann/rift/issues/96">#96</a>) <a href="https://github.com/acsandmann/rift/commit/b3be792"><code>b3be792</code></a>
* fix: preserve master stack <a href="https://github.com/acsandmann/rift/commit/84bcca5"><code>84bcca5</code></a>

### Contributors
* <a href="https://github.com/BennyDeeDev">@BennyDeeDev</a> made their first contribution in https://github.com/acsandmann/rift/pull/292


### Changes
* fix: hide notice when default_disable=false by <a href="https://github.com/adamjhf">@adamjhf</a> in https://github.com/acsandmann/rift/pull/254
* feat: scrolling layout by <a href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/251
* feat: per workspace layouts by <a href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/258
* chore: fix failing test by <a href="https://github.com/adamjhf">@adamjhf</a> in https://github.com/acsandmann/rift/pull/270
* feat: cycle windows sequentially instead of using directional focus by <a href="https://github.com/bnjjo">@bnjjo</a> in https://github.com/acsandmann/rift/pull/268
* fix: adjust maximum column width ratio to 1.0 by <a href="https://github.com/BennyDeeDev">@BennyDeeDev</a> in https://github.com/acsandmann/rift/pull/292

### Contributors
* <a href="https://github.com/adamjhf">@adamjhf</a> made their first contribution in https://github.com/acsandmann/rift/pull/254
* <a href="https://github.com/bnjjo">@bnjjo</a> made their first contribution in https://github.com/acsandmann/rift/pull/268
* <a href="https://github.com/BennyDeeDev">@BennyDeeDev</a> made their first contribution in https://github.com/acsandmann/rift/pull/292

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.0/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.7...v0.4.0-alpha.8">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.0-alpha.7

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-02-28T22:14:13Z">February 28, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">134</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.7">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.7/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.6...v0.4.0-alpha.7">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.0-alpha.6

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-02-27T04:17:54Z">February 27, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">122</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.6">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.6/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.5...v0.4.0-alpha.6">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.0-alpha.5

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-02-26T18:49:37Z">February 26, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">33</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.5">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.5/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.4...v0.4.0-alpha.5">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.0-alpha.4

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-02-25T16:14:38Z">February 25, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">82</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.4">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.4/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.3...v0.4.0-alpha.4">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.0-alpha.3

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-02-20T14:21:50Z">February 20, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">216</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.3">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.3/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.2...v0.4.0-alpha.3">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.0-alpha.2

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-02-20T02:49:11Z">February 20, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">49</dd></div></dl>

### Changes
* fix: multi display handling <a href="https://github.com/acsandmann/rift/commit/1bf16a9"><code>1bf16a9</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.2">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.2/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha...v0.4.0-alpha.2">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.4.0-alpha

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-02-20T02:36:34Z">February 20, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">7</dd></div></dl>

### Changes
* feat: event streaming via mach server <a href="https://github.com/acsandmann/rift/commit/b5e8114"><code>b5e8114</code></a>
* chore: animations disabled by default <a href="https://github.com/acsandmann/rift/commit/80e27e3"><code>80e27e3</code></a>
* fix: dup app thread launches leading to window oscillation <a href="https://github.com/acsandmann/rift/commit/0be579d"><code>0be579d</code></a>
* fix: window oscillation <a href="https://github.com/acsandmann/rift/commit/cbd70b2"><code>cbd70b2</code></a>
* perf: event_tap <a href="https://github.com/acsandmann/rift/commit/783d7b8"><code>783d7b8</code></a>
* perf: adaptive event_mask to avoid extra processing <a href="https://github.com/acsandmann/rift/commit/6a8957f"><code>6a8957f</code></a>
* perf: event_tap <a href="https://github.com/acsandmann/rift/commit/c7cc120"><code>c7cc120</code></a>
* perf: don't fully refresh window info on title change <a href="https://github.com/acsandmann/rift/commit/8b0b3b2"><code>8b0b3b2</code></a>
* chore: cleanup layout engine <a href="https://github.com/acsandmann/rift/commit/8427aa2"><code>8427aa2</code></a>
* fix: focus follows mouse breaking intermittently <a href="https://github.com/acsandmann/rift/commit/cb3f75b"><code>cb3f75b</code></a>
* fix: bundle_id is now correct !BREAKING <a href="https://github.com/acsandmann/rift/commit/50c2bab"><code>50c2bab</code></a>
* chore: demote MainWindowChanged logs from warn <a href="https://github.com/acsandmann/rift/commit/a6b072f"><code>a6b072f</code></a>
* feat: stacks_changed broadcast event <a href="https://github.com/acsandmann/rift/commit/bac1194"><code>bac1194</code></a>
* chore: update stack line defaults <a href="https://github.com/acsandmann/rift/commit/86044b5"><code>86044b5</code></a>
* feat: cycle windows sequentially instead of using directional focus (<a href="https://github.com/acsandmann/rift/issues/268">#268</a>) <a href="https://github.com/acsandmann/rift/commit/7cc8aca"><code>7cc8aca</code></a>
* fix: crash when moving btwn spaces (<a href="https://github.com/acsandmann/rift/issues/272">#272</a>) <a href="https://github.com/acsandmann/rift/commit/6bc2ee6"><code>6bc2ee6</code></a>
* fix: scrolling with multi monitor (<a href="https://github.com/acsandmann/rift/issues/266">#266</a>) <a href="https://github.com/acsandmann/rift/commit/e71a6fd"><code>e71a6fd</code></a>
* feat: per workspace layouts (<a href="https://github.com/acsandmann/rift/issues/258">#258</a>) <a href="https://github.com/acsandmann/rift/commit/9852561"><code>9852561</code></a>
* fix: not assigning keycodes properly (<a href="https://github.com/acsandmann/rift/issues/263">#263</a>) <a href="https://github.com/acsandmann/rift/commit/d4c5b28"><code>d4c5b28</code></a>
* chore: ensure ffm state is proper <a href="https://github.com/acsandmann/rift/commit/99af084"><code>99af084</code></a>
* fix: scrolling layout using wrong defaults <a href="https://github.com/acsandmann/rift/commit/d87787d"><code>d87787d</code></a>
* feat: scrolling layout (<a href="https://github.com/acsandmann/rift/issues/251">#251</a>) <a href="https://github.com/acsandmann/rift/commit/550256d"><code>550256d</code></a>
* fix: window animations (<a href="https://github.com/acsandmann/rift/issues/255">#255</a>) <a href="https://github.com/acsandmann/rift/commit/7346b64"><code>7346b64</code></a>
* chore: update default config <a href="https://github.com/acsandmann/rift/commit/14d2a22"><code>14d2a22</code></a>
* chore: hide notice when default_disable=false (<a href="https://github.com/acsandmann/rift/issues/254">#254</a>) <a href="https://github.com/acsandmann/rift/commit/efc4d53"><code>efc4d53</code></a>
* fix: hide stackline when node is zoomed (<a href="https://github.com/acsandmann/rift/issues/96">#96</a>) <a href="https://github.com/acsandmann/rift/commit/b3be792"><code>b3be792</code></a>
* fix: preserve master stack <a href="https://github.com/acsandmann/rift/commit/84bcca5"><code>84bcca5</code></a>


### Contributors
* <a href="https://github.com/adamjhf">@adamjhf</a> made their first contribution in https://github.com/acsandmann/rift/pull/254
* <a href="https://github.com/bnjjo">@bnjjo</a> made their first contribution in https://github.com/acsandmann/rift/pull/268

### "Breaking" Changes
Window's in IPC payloads now have the proper bundle_id and the value that it used to be is now app_name.

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.3.9...v0.4.0-alpha">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.3.9-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-01-30T22:47:57Z">January 30, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">524</dd></div></dl>

### Changes
* feat: master/stack layout engine (<a href="https://github.com/acsandmann/rift/issues/249">#249</a>) <a href="https://github.com/acsandmann/rift/commit/c0f63ec"><code>c0f63ec</code></a>
* feat: show stack lines for all active stacks on all active spaces (<a href="https://github.com/acsandmann/rift/issues/246">#246</a>) <a href="https://github.com/acsandmann/rift/commit/19b3214"><code>19b3214</code></a>
* fix: losing windows after mission control <a href="https://github.com/acsandmann/rift/commit/6bf710e"><code>6bf710e</code></a>
* fix: handle generic mods <a href="https://github.com/acsandmann/rift/commit/43a5493"><code>43a5493</code></a>
* fix: autoraise intermittently breaking <a href="https://github.com/acsandmann/rift/commit/1c8882b"><code>1c8882b</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.3.9">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.3.9/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.3.8...v0.4.0">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.3.8-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-01-23T17:48:22Z">January 23, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">197</dd></div></dl>

### Changes
- fix: autoraise intermittently not working (<a href="https://github.com/acsandmann/rift/issues/133">#133</a>) <a href="https://github.com/acsandmann/rift/commit/98c3b87"><code>98c3b87</code></a>
- chore: harden focus changing (<a href="https://github.com/acsandmann/rift/issues/133">#133</a>) <a href="https://github.com/acsandmann/rift/commit/622b955"><code>622b955</code></a>
- fix: mission control should take up full screen <a href="https://github.com/acsandmann/rift/commit/034d99f"><code>034d99f</code></a>
- fix: dont manage minized windows <a href="https://github.com/acsandmann/rift/commit/652dc8b"><code>652dc8b</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.3.8">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.3.8/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.3.7...v0.3.8">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.3.7-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-01-20T14:06:42Z">January 20, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">137</dd></div></dl>

### Whats New
- fix: crash when mission control is disabled

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.3.7">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.3.7/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.3.6...v0.3.7">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.3.6-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-01-20T00:57:11Z">January 20, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">53</dd></div></dl>

### Changes
- feat: improve pattern of querying state from reactor <a href="https://github.com/acsandmann/rift/commit/b262166"><code>b262166</code></a>
- fix: layout engine should stay aware of display size changes after churn <a href="https://github.com/acsandmann/rift/commit/e5f5160"><code>e5f5160</code></a>
- fix: clear login window state properly <a href="https://github.com/acsandmann/rift/commit/816f93a"><code>816f93a</code></a>
- perf: remove mutex in runloop <a href="https://github.com/acsandmann/rift/commit/fd9b579"><code>fd9b579</code></a>
- feat: by default fibonacci spiral layout for BSP mode (<a href="https://github.com/acsandmann/rift/issues/232">#232</a>) <a href="https://github.com/acsandmann/rift/commit/c09528c"><code>c09528c</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.3.6">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.3.6/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.3.5...v0.3.6">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.3.5-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-01-17T22:29:15Z">January 17, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">117</dd></div></dl>

### Changes
- fix: windows tiling in middle of tree instead of end <a href="https://github.com/acsandmann/rift/commit/0e6f6e8"><code>0e6f6e8</code></a>
-  fix: window spaz when >1 windows of same app open (<a href="https://github.com/acsandmann/rift/issues/231">#231</a>) <a href="https://github.com/acsandmann/rift/commit/d2ac491"><code>d2ac491</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.3.5">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.3.5/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.3.4...v0.3.5">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.3.4-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-01-16T21:50:35Z">January 16, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">55</dd></div></dl>

### Changes
- fix: space activation tracking

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.3.4">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.3.4/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.3.3...v0.3.4">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.3.3

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-01-16T05:24:11Z">January 16, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">69</dd></div></dl>

### Changes
- fix: slow window destroys <a href="https://github.com/acsandmann/rift/commit/12b91ca"><code>12b91ca</code></a>
- chore: harden animation event blocking <a href="https://github.com/acsandmann/rift/commit/981ded4"><code>981ded4</code></a>
- fix: potential race <a href="https://github.com/acsandmann/rift/commit/5b1c15d"><code>5b1c15d</code></a>
- fix: disable eui on app not window <a href="https://github.com/acsandmann/rift/commit/134198c"><code>134198c</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.3.3">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.3.3/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.3.2...v0.3.3">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.3.2-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-01-16T03:11:00Z">January 16, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">8</dd></div></dl>

### Changes
- fix: browsers sometime jitter when multiple windows of same app are opened
- fix: disable eui on app not window

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.3.2">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.3.2/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.3.1...v0.3.2">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.3.1-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-01-15T22:53:48Z">January 15, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">15</dd></div></dl>

### Changes
- fix: needing to uninstall/reinstall between updates <a href="https://github.com/acsandmann/rift/commit/e482b8d"><code>e482b8d</code></a>
- fix: fullscreening window in space 1 makes it a ghost window in space 0 <a href="https://github.com/acsandmann/rift/commit/82e4e50"><code>82e4e50</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.3.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.3.1/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.3.0...v0.3.1">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.3.0-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2026-01-15T21:14:29Z">January 15, 2026</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">16</dd></div></dl>

### Changes
- fix: properly disable move/resize events during animation <a href="https://github.com/acsandmann/rift/commit/25f858f"><code>25f858f</code></a>
- fix: handle apps that dont send windowclosed events(firefox) (<a href="https://github.com/acsandmann/rift/issues/201">#201</a>) (<a href="https://github.com/acsandmann/rift/issues/121">#121</a>) <a href="https://github.com/acsandmann/rift/commit/e70fc04"><code>e70fc04</code></a>
- feat: stack lines are now clickable <a href="https://github.com/acsandmann/rift/commit/8f3b0ed"><code>8f3b0ed</code></a>
- feat: drag window to resize <a href="https://github.com/acsandmann/rift/commit/099c3ce"><code>099c3ce</code></a>
- fix: respecting space activation status <a href="https://github.com/acsandmann/rift/commit/0b563f6"><code>0b563f6</code></a> <a href="https://github.com/acsandmann/rift/commit/4f25cfd"><code>4f25cfd</code></a>
- feat: allow all keyboard layouts natively (<a href="https://github.com/acsandmann/rift/issues/195">#195</a>) (<a href="https://github.com/acsandmann/rift/issues/182">#182</a>) <a href="https://github.com/acsandmann/rift/commit/d460480"><code>d460480</code></a>
- chore: add exec example to default config (<a href="https://github.com/acsandmann/rift/issues/221">#221</a>) <a href="https://github.com/acsandmann/rift/commit/e74ec3e"><code>e74ec3e</code></a>
- feat: move space activation into its own manager <a href="https://github.com/acsandmann/rift/commit/c3a90ec"><code>c3a90ec</code></a>
- fix: track stack line space id for proper cleanup <a href="https://github.com/acsandmann/rift/commit/96ed81f"><code>96ed81f</code></a>
- fix: determine actual layout mode <a href="https://github.com/acsandmann/rift/commit/7b76dd5"><code>7b76dd5</code></a>
- fix: pass quiet flag through raise manager to prevent workspace switch loops <a href="https://github.com/acsandmann/rift/commit/bf76af6"><code>bf76af6</code></a>
- fix: prevent similar crashes (<a href="https://github.com/acsandmann/rift/issues/211">#211</a>) <a href="https://github.com/acsandmann/rift/commit/95f7b56"><code>95f7b56</code></a>
- fix: panic on slow activation change (<a href="https://github.com/acsandmann/rift/issues/211">#211</a>) <a href="https://github.com/acsandmann/rift/commit/0a8c1c7"><code>0a8c1c7</code></a>
- feat: let certain windows be insivible to rift <a href="https://github.com/acsandmann/rift/commit/468c2ac"><code>468c2ac</code></a>
- fix: multi display behavior <a href="https://github.com/acsandmann/rift/commit/93fdc5b"><code>93fdc5b</code></a> + <a href="https://github.com/acsandmann/rift/commit/99bf93e"><code>99bf93e</code></a>
- fix: next/prev window being inverted (<a href="https://github.com/acsandmann/rift/issues/208">#208</a>) <a href="https://github.com/acsandmann/rift/commit/cb5ddb3"><code>cb5ddb3</code></a>
- fix: joining 2 windows with another (<a href="https://github.com/acsandmann/rift/issues/206">#206</a>) <a href="https://github.com/acsandmann/rift/commit/ce7b918"><code>ce7b918</code></a>
- fix: stack_line not hot reloading <a href="https://github.com/acsandmann/rift/commit/55c9d92"><code>55c9d92</code></a>
- fix: reapply_app_rules_on_title_change (<a href="https://github.com/acsandmann/rift/issues/197">#197</a>) <a href="https://github.com/acsandmann/rift/commit/2780e9c"><code>2780e9c</code></a>
- fix: refreshing correct window (<a href="https://github.com/acsandmann/rift/issues/203">#203</a>) <a href="https://github.com/acsandmann/rift/commit/72061a0"><code>72061a0</code></a>
- fix: should_raise_on_mouse_over (<a href="https://github.com/acsandmann/rift/issues/197">#197</a>) <a href="https://github.com/acsandmann/rift/commit/f5d6589"><code>f5d6589</code></a>
- fix: if directional focus finds no target refocus the active window (<a href="https://github.com/acsandmann/rift/issues/197">#197</a>) <a href="https://github.com/acsandmann/rift/commit/839344a"><code>839344a</code></a>
- fix: reset hover tracking after a warp so the next mouse move always generates a focus-follows-mouse update for the window now under the cursor. <a href="https://github.com/acsandmann/rift/commit/f30ae6e"><code>f30ae6e</code></a>
- fix: ensure layoutengine has the correct info about floating focused windows (<a href="https://github.com/acsandmann/rift/issues/197">#197</a>) <a href="https://github.com/acsandmann/rift/commit/62b1145"><code>62b1145</code></a>
- feat: show active workspace in menubar even if empty (<a href="https://github.com/acsandmann/rift/issues/204">#204</a>) <a href="https://github.com/acsandmann/rift/commit/c13397f"><code>c13397f</code></a>
- fix: display reconfig and be less optimistic to clear display cache <a href="https://github.com/acsandmann/rift/commit/7e22fac"><code>7e22fac</code></a>
- fix: add brackets to keymap (<a href="https://github.com/acsandmann/rift/issues/195">#195</a>) <a href="https://github.com/acsandmann/rift/commit/b25bc7c"><code>b25bc7c</code></a>
- fix: upstream activation block <a href="https://github.com/acsandmann/rift/commit/bbd6b1a"><code>bbd6b1a</code></a>
- fix: locked into a workspace <a href="https://github.com/acsandmann/rift/commit/c112786"><code>c112786</code></a>

### Contributors
* <a href="https://github.com/axm2">@axm2</a> made their first contribution in https://github.com/acsandmann/rift/pull/221

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.3.0">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.3.0/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.2.8...v0.3.0">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.2.8-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-12-05T15:48:41Z">December 5, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">709</dd></div></dl>

### Changes
* fix: display getting disabled (<a href="https://github.com/acsandmann/rift/issues/180">#180</a>) <a href="https://github.com/acsandmann/rift/commit/0915d2b"><code>0915d2b</code></a> + <a href="https://github.com/acsandmann/rift/commit/ce9a32a"><code>ce9a32a</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.2.8">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.2.8/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.2.7...v0.2.8">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.2.7-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-12-05T04:20:19Z">December 5, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">38</dd></div></dl>

### Changes
* feat: side specific modifier keys (<a href="https://github.com/acsandmann/rift/issues/160">#160</a>) <a href="https://github.com/acsandmann/rift/commit/9c28bc0"><code>9c28bc0</code></a>
* feat: more macos native looking currentworkspace view in mission control <a href="https://github.com/acsandmann/rift/commit/f274992"><code>f274992</code></a>
* fix: move focus not working with recently joined nodes (<a href="https://github.com/acsandmann/rift/issues/183">#183</a>) <a href="https://github.com/acsandmann/rift/commit/8360961"><code>8360961</code></a>
* fix: non primary display deactivating after sleep (<a href="https://github.com/acsandmann/rift/issues/180">#180</a>) <a href="https://github.com/acsandmann/rift/commit/f897349"><code>f897349</code></a>
* fix: protect against improper autoswitches (<a href="https://github.com/acsandmann/rift/issues/159">#159</a>) <a href="https://github.com/acsandmann/rift/commit/8bff8fe"><code>8bff8fe</code></a>
* fix: windows being stolen from other displays/spaces v2 (<a href="https://github.com/acsandmann/rift/issues/138">#138</a>) <a href="https://github.com/acsandmann/rift/commit/3a5250d"><code>3a5250d</code></a> + <a href="https://github.com/acsandmann/rift/commit/d1f5b0a"><code>d1f5b0a</code></a>
* feat: move window to display (<a href="https://github.com/acsandmann/rift/issues/137">#137</a>) <a href="https://github.com/acsandmann/rift/commit/35fd4a0"><code>35fd4a0</code></a>
* feat: update current workspace view when workspace changes in mission control (<a href="https://github.com/acsandmann/rift/issues/164">#164</a>) <a href="https://github.com/acsandmann/rift/commit/ee4afc9"><code>ee4afc9</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.2.7">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.2.7/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.2.6...v0.2.7">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.2.6-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-12-01T20:46:24Z">December 1, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">130</dd></div></dl>

### Changes
* feat: optimize ipc; median latency down to ~5ms from ~15ms (<a href="https://github.com/acsandmann/rift/issues/184">#184</a>) <a href="https://github.com/acsandmann/rift/commit/0ff6212"><code>0ff6212</code></a> + <a href="https://github.com/acsandmann/rift/commit/7f316da"><code>7f316da</code></a>
* fix: toggle_space_activated not toggling to off (<a href="https://github.com/acsandmann/rift/issues/174">#174</a>) <a href="https://github.com/acsandmann/rift/commit/2c8c883"><code>2c8c883</code></a>
* fix: focus goes to windows in the hidden corner (<a href="https://github.com/acsandmann/rift/issues/145">#145</a>) <a href="https://github.com/acsandmann/rift/commit/a89ee4f"><code>a89ee4f</code></a>
* fix: resize-grow/shrink being reversed in bsp layout engine (<a href="https://github.com/acsandmann/rift/issues/178">#178</a>) <a href="https://github.com/acsandmann/rift/commit/eef98dd"><code>eef98dd</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.2.6">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.2.6/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.2.5...v0.2.6">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.2.5-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-11-24T06:04:08Z">November 24, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">179</dd></div></dl>

### Changes
* fix: not triggering layout refresh aggressively enough (<a href="https://github.com/acsandmann/rift/issues/156">#156</a>) <a href="https://github.com/acsandmann/rift/commit/cfedd22"><code>cfedd22</code></a>
* fix: windows not being retiled after a drag (<a href="https://github.com/acsandmann/rift/issues/156">#156</a>) <a href="https://github.com/acsandmann/rift/commit/bf536f0"><code>bf536f0</code></a>
* fix: dragging windows between displays (<a href="https://github.com/acsandmann/rift/issues/138">#138</a>) <a href="https://github.com/acsandmann/rift/commit/a3dd211"><code>a3dd211</code></a>
* fix: make mouse up/down tracking much more reliable (<a href="https://github.com/acsandmann/rift/issues/156">#156</a>) <a href="https://github.com/acsandmann/rift/commit/2732a42"><code>2732a42</code></a>
* fix: handling of sheet/child/pip windows in PIP (<a href="https://github.com/acsandmann/rift/issues/149">#149</a>) <a href="https://github.com/acsandmann/rift/commit/5f8ab35"><code>5f8ab35</code></a>
* fix: erroneously auto switching on activation when leaving fullscreen <a href="https://github.com/acsandmann/rift/commit/8ffe90b"><code>8ffe90b</code></a>
* fix: ensure stacks dont get erroneously broken (<a href="https://github.com/acsandmann/rift/issues/150">#150</a>) <a href="https://github.com/acsandmann/rift/commit/e001cb7"><code>e001cb7</code></a>
* fix: layout issues (<a href="https://github.com/acsandmann/rift/issues/148">#148</a>) <a href="https://github.com/acsandmann/rift/commit/7d95272"><code>7d95272</code></a>
* fix: use mach port as a way to only let one rift instance run at a time (<a href="https://github.com/acsandmann/rift/issues/147">#147</a>) <a href="https://github.com/acsandmann/rift/commit/67bb7d5"><code>67bb7d5</code></a>
* fix: service can only be uninstalled if its stopped (<a href="https://github.com/acsandmann/rift/issues/147">#147</a>) <a href="https://github.com/acsandmann/rift/commit/2d4d4b6"><code>2d4d4b6</code></a>
* fix: make it autoraise a window on display switch so no mouse input is needed (<a href="https://github.com/acsandmann/rift/issues/137">#137</a>) <a href="https://github.com/acsandmann/rift/commit/8742d69"><code>8742d69</code></a>
* fix: isolate virtual workspaces better (<a href="https://github.com/acsandmann/rift/issues/145">#145</a>) <a href="https://github.com/acsandmann/rift/commit/656a56a"><code>656a56a</code></a>
* fix: app rules (<a href="https://github.com/acsandmann/rift/issues/144">#144</a>) <a href="https://github.com/acsandmann/rift/commit/25555e4"><code>25555e4</code></a>
* feat: focus a display (chooses last focused window or warps cursor to midpoint) <a href="https://github.com/acsandmann/rift/commit/0aedbb1"><code>0aedbb1</code></a>
* feat: title changed broadcast event <a href="https://github.com/acsandmann/rift/commit/8debd00"><code>8debd00</code></a>
* fix: mouse warping when no windows (<a href="https://github.com/acsandmann/rift/issues/136">#136</a>) <a href="https://github.com/acsandmann/rift/commit/1193fe2"><code>1193fe2</code></a>
* fix: add a retry for certain windows that don't accept setbatchwindowframe (<a href="https://github.com/acsandmann/rift/issues/140">#140</a>) <a href="https://github.com/acsandmann/rift/commit/fd20b44"><code>fd20b44</code></a>
* fix: don't crash on touchbar movements (<a href="https://github.com/acsandmann/rift/issues/116">#116</a>) <a href="https://github.com/acsandmann/rift/commit/eba053b"><code>eba053b</code></a>
* fix: better flow from focusing between displays <a href="https://github.com/acsandmann/rift/commit/8ce9be4"><code>8ce9be4</code></a>
* fix: windows not being retiled <a href="https://github.com/acsandmann/rift/commit/acc9075"><code>acc9075</code></a>
* feat: use ax frame change events + merge tx stores <a href="https://github.com/acsandmann/rift/commit/93e35fe"><code>93e35fe</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.2.5">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.2.5/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.2.4...v0.2.5">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.2.4-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-11-13T22:05:57Z">November 13, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">196</dd></div></dl>

### Changes
* feat: close windows via cli <a href="https://github.com/acsandmann/rift/commit/583d5e6"><code>583d5e6</code></a>
* fix: default_workspace <a href="https://github.com/acsandmann/rift/commit/371d980"><code>371d980</code></a>
* fix: stop throwing mouse (<a href="https://github.com/acsandmann/rift/issues/136">#136</a>) <a href="https://github.com/acsandmann/rift/commit/361d9e2"><code>361d9e2</code></a>
* perf: optimize menu bar actor <a href="https://github.com/acsandmann/rift/commit/4010a93"><code>4010a93</code></a>
* fix: make toggle_active_space actually toggle <a href="https://github.com/acsandmann/rift/commit/1a2de75"><code>1a2de75</code></a>
* feat: move mouse to display (<a href="https://github.com/acsandmann/rift/issues/137">#137</a>) <a href="https://github.com/acsandmann/rift/commit/db8ad22"><code>db8ad22</code></a>
* feat: menubar now supports showing workspace indexes/names instead of layouts <a href="https://github.com/acsandmann/rift/commit/2b9bf8f"><code>2b9bf8f</code></a>
* feat: query workspaces by space + incl active space/display uuid in broadcast (<a href="https://github.com/acsandmann/rift/issues/132">#132</a>) 3a32ef


<img width="173" height="39" alt="image" src="https://github.com/user-attachments/assets/6eab59c9-9b5f-4089-9072-<a href="https://github.com/acsandmann/rift/commit/d5a44747d51f"><code>d5a44747d51f</code></a>" />

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.2.4">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.2.4/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.2.3...v0.2.4">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.2.3-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-11-12T16:29:34Z">November 12, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">48</dd></div></dl>

### Changes
* fix: handle mouse warp better when there are no windows present <a href="https://github.com/acsandmann/rift/commit/10e41b0"><code>10e41b0</code></a>
* fix: focus/switching with no windows + multiple spaces (<a href="https://github.com/acsandmann/rift/issues/125">#125</a>) <a href="https://github.com/acsandmann/rift/commit/85214b0"><code>85214b0</code></a>
* fix: request refocus on the right space <a href="https://github.com/acsandmann/rift/commit/937cb3f"><code>937cb3f</code></a>
* fix: prefer screen/space under cursor over main window space (<a href="https://github.com/acsandmann/rift/issues/125">#125</a>) <a href="https://github.com/acsandmann/rift/commit/ae98a1c"><code>ae98a1c</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.2.3">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.2.3/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.2.2...v0.2.3">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.2.2-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-11-12T15:21:27Z">November 12, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">8</dd></div></dl>

### Changes
* fix: menu bar cpu usage (<a href="https://github.com/acsandmann/rift/issues/129">#129</a>) <a href="https://github.com/acsandmann/rift/commit/3b921bb"><code>3b921bb</code></a>
* fix: ignore space change with no active screens <a href="https://github.com/acsandmann/rift/commit/3de151b"><code>3de151b</code></a>
* fix: proper screen2space mappings (<a href="https://github.com/acsandmann/rift/issues/125">#125</a>) <a href="https://github.com/acsandmann/rift/commit/adba64f"><code>adba64f</code></a>
* fix: properly detect screen under cursor (<a href="https://github.com/acsandmann/rift/issues/120">#120</a>) <a href="https://github.com/acsandmann/rift/commit/8e3ee62"><code>8e3ee62</code></a>
* fix: correctly select window in direction (<a href="https://github.com/acsandmann/rift/issues/97">#97</a>) <a href="https://github.com/acsandmann/rift/commit/dc3e339"><code>dc3e339</code></a>
* fix: set cgwindow shape properly (<a href="https://github.com/acsandmann/rift/issues/120">#120</a>) <a href="https://github.com/acsandmann/rift/commit/b00c56d"><code>b00c56d</code></a>
* fix: focusing between displays now respects orientation (<a href="https://github.com/acsandmann/rift/issues/97">#97</a>) <a href="https://github.com/acsandmann/rift/commit/0818fbf"><code>0818fbf</code></a>
* fix: mission control on extended displays (<a href="https://github.com/acsandmann/rift/issues/120">#120</a>) <a href="https://github.com/acsandmann/rift/commit/b36f15b"><code>b36f15b</code></a>
* fix: it is possible to have a spaceid of 0 <a href="https://github.com/acsandmann/rift/commit/6f2fb80"><code>6f2fb80</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.2.2">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.2.2/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.2.1...v0.2.2">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.2.1-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-11-10T20:10:22Z">November 10, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">52</dd></div></dl>

### Changes
* fix: app activation race (<a href="https://github.com/acsandmann/rift/issues/108">#108</a>) <a href="https://github.com/acsandmann/rift/commit/4b742f3"><code>4b742f3</code></a>
* chore: remove autofix from config <a href="https://github.com/acsandmann/rift/commit/47a029c"><code>47a029c</code></a>
* fix: update menubar on window frame changes too <a href="https://github.com/acsandmann/rift/commit/e8b2192"><code>e8b2192</code></a>
* feat: even faster menubar drawing

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.2.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.2.1/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.2.0...v0.2.1">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.2.0-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-11-09T21:04:24Z">November 9, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">46</dd></div></dl>

### Changes
* fix: crashes with normalizedPosition (<a href="https://github.com/acsandmann/rift/issues/117">#117</a>) <a href="https://github.com/acsandmann/rift/commit/cdb1f35"><code>cdb1f35</code></a>
* feat: ResizeWindowBy for specific window resizing <a href="https://github.com/acsandmann/rift/commit/35a0d7b"><code>35a0d7b</code></a>
* feat: use carbon for process events (<a href="https://github.com/acsandmann/rift/issues/111">#111</a>) <a href="https://github.com/acsandmann/rift/commit/3a4c87d"><code>3a4c87d</code></a>
* feat: per display gaps + space/display uuid mapping (<a href="https://github.com/acsandmann/rift/issues/113">#113</a>) <a href="https://github.com/acsandmann/rift/commit/e2f0ca9"><code>e2f0ca9</code></a>
* fix: dont erroneously float windows <a href="https://github.com/acsandmann/rift/commit/907d2d4"><code>907d2d4</code></a>
* feat: hotload app rules <a href="https://github.com/acsandmann/rift/commit/19fa4f6"><code>19fa4f6</code></a>
* fix: app rules (<a href="https://github.com/acsandmann/rift/issues/71">#71</a>) <a href="https://github.com/acsandmann/rift/commit/b10ba24"><code>b10ba24</code></a> + <a href="https://github.com/acsandmann/rift/commit/cf7210c"><code>cf7210c</code></a> + <a href="https://github.com/acsandmann/rift/commit/d7ad836"><code>d7ad836</code></a> + <a href="https://github.com/acsandmann/rift/commit/39f566b"><code>39f566b</code></a> + <a href="https://github.com/acsandmann/rift/commit/af57651"><code>af57651</code></a>
* fix: nsapp:run for tahoe <a href="https://github.com/acsandmann/rift/commit/9e2413f"><code>9e2413f</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.2.0">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.2.0/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.1.1...v0.2.0">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.1.1-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-11-06T03:14:01Z">November 6, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">68</dd></div></dl>

**Whats Changed:**
* fix: handle native macos app hides <a href="https://github.com/acsandmann/rift/commit/8344394"><code>8344394</code></a>
* feat: move window to workspace by window id (<a href="https://github.com/acsandmann/rift/issues/105">#105</a>) <a href="https://github.com/acsandmann/rift/commit/f7486d7"><code>f7486d7</code></a>

**New Features:**
* you can now move any window (instead of only the focused) a workspace of your choosing: `cargo run --bin rift-cli execute workspace move-window <workspace_index> <window_id>`. this should open up a lot of possibilities for scripting rift._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.1.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.1.1/rift.default.toml">Default config</a></p>

</section>

<section class="apple-entry">

## v0.1.0-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-30T02:24:38Z">October 30, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">133</dd></div></dl>

**Whats Changed**
* fix: mission control invocation via cli (<a href="https://github.com/acsandmann/rift/issues/100">#100</a>) <a href="https://github.com/acsandmann/rift/commit/8372a0d"><code>8372a0d</code></a>
* feat: toggle-stack + toggle-orientation !BREAKING! <a href="https://github.com/acsandmann/rift/commit/0a7fb07"><code>0a7fb07</code></a>
* fix: unjoin_windows <a href="https://github.com/acsandmann/rift/commit/955a913"><code>955a913</code></a>
* feat: fast space switches no longer block <a href="https://github.com/acsandmann/rift/commit/099ee1d"><code>099ee1d</code></a>
* fix: stackline being above all + showing when window toggled as fullscreen (<a href="https://github.com/acsandmann/rift/issues/96">#96</a>) <a href="https://github.com/acsandmann/rift/commit/5b1c1f4"><code>5b1c1f4</code></a>
* fix: ability to set the window focus lost randomly (<a href="https://github.com/acsandmann/rift/issues/82">#82</a>) <a href="https://github.com/acsandmann/rift/commit/c45b4b4"><code>c45b4b4</code></a>
* fix: insert windows after selection not root (<a href="https://github.com/acsandmann/rift/issues/86">#86</a>) <a href="https://github.com/acsandmann/rift/commit/1bcbfcd"><code>1bcbfcd</code></a>
* fix: float windows when specified (<a href="https://github.com/acsandmann/rift/issues/71">#71</a>) <a href="https://github.com/acsandmann/rift/commit/0bdd0f5"><code>0bdd0f5</code></a>

**Breaking Changes**
* `stack_windows` and `unstack_windows` are not `toggle_stack`
* `toggle_tile_orientation` is now `toggle_orientation`
* `toggle_orientation` is a catch all: it will change the orientation of both stacks and splits(normal tiles)

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.1.0">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.1.0/rift.default.toml">Default config</a></p>

</section>

<section class="apple-entry">

## v0.0.10.1-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-27T21:12:52Z">October 27, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">51</dd></div></dl>

**Whats Changed**
* chore: workspace_auto_back_and_forth default to off <a href="https://github.com/acsandmann/rift/commit/1d534a3"><code>1d534a3</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.10.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.10.1/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.10...v0.0.10.1">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.10-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-27T20:30:20Z">October 27, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">4</dd></div></dl>

### Changes
* refactor: decompose and reduce reactor code complexity (<a href="https://github.com/acsandmann/rift/issues/78">#78</a>) <a href="https://github.com/acsandmann/rift/commit/3d34191"><code>3d34191</code></a>
* fix: windows being lost during space switches <a href="https://github.com/acsandmann/rift/issues/93">#93</a> <a href="https://github.com/acsandmann/rift/commit/224e993"><code>224e993</code></a>
* fix: selection descends to stack immediately, for navigation to work (<a href="https://github.com/acsandmann/rift/issues/94">#94</a>) <a href="https://github.com/acsandmann/rift/commit/bdecc66"><code>bdecc66</code></a>
* feat: Allow switching to last workspace on duplicate focus (<a href="https://github.com/acsandmann/rift/issues/92">#92</a>) <a href="https://github.com/acsandmann/rift/commit/ccc8fd9"><code>ccc8fd9</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.10">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.10/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.9...v0.0.10">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.9-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-25T16:21:44Z">October 25, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">51</dd></div></dl>

### Changes
* Update path for embedding Info.plist by <a href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/74
* Beautify stackline ui by <a href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/88
* fix: mouse warping by <a href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/89
* fix <a href="https://github.com/acsandmann/rift/issues/83">#83</a>: Respect stack default orientation when unstacking by <a href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/85

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.9">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.9/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.8...v0.0.9">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.8-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-23T18:56:10Z">October 23, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">48</dd></div></dl>

### Changes
* refactor: rewrite and fix fn `get_focused_frame_for_index` by <a href="https://github.com/alle-ox">@alle-ox</a> in https://github.com/acsandmann/rift/pull/77

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.8">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.8/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.7...v0.0.8">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.7-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-23T01:43:46Z">October 23, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">20</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.7">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.7/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.6.2...v0.0.7">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.6.2-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-22T21:26:36Z">October 22, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">8</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.6.2">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.6.2/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.6.1...v0.0.6.2">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.6.1-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-22T21:02:31Z">October 22, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">4</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.6.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.6.1/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.6...v0.0.6.1">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.6-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-22T18:40:00Z">October 22, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">10</dd></div></dl>

### Changes
* fix: dragging windows via mission control no longer *sometimes* loses windows <a href="https://github.com/acsandmann/rift/commit/dba79c4"><code>dba79c4</code></a>
* feat: make GetConfig useful <a href="https://github.com/acsandmann/rift/commit/2572328"><code>2572328</code></a>
* feat: add function keys as possible keys <a href="https://github.com/acsandmann/rift/commit/1246434"><code>1246434</code></a>
* feat: configurable default stack orientation + perpendicular (<a href="https://github.com/acsandmann/rift/issues/65">#65</a>) <a href="https://github.com/acsandmann/rift/commit/ded7a1f"><code>ded7a1f</code></a>
* feat: toggle fullscreen within gaps (<a href="https://github.com/acsandmann/rift/issues/72">#72</a>) <a href="https://github.com/acsandmann/rift/commit/89ae444"><code>89ae444</code></a>
* fix rendering and hot reload issues with stackline by <a href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/73
* feat: expose mission_control + save_on_exit to cli (<a href="https://github.com/acsandmann/rift/issues/54">#54</a>) <a href="https://github.com/acsandmann/rift/commit/0f387ab"><code>0f387ab</code></a>
* fix: mach port response detection <a href="https://github.com/acsandmann/rift/commit/aca20cb"><code>aca20cb</code></a> + <a href="https://github.com/acsandmann/rift/commit/4825914"><code>4825914</code></a>
* feat: toggle between vert/horiz tile layout (<a href="https://github.com/acsandmann/rift/issues/68">#68</a>) <a href="https://github.com/acsandmann/rift/commit/d13249b"><code>d13249b</code></a>
* fix: hot reload hot keys properly (<a href="https://github.com/acsandmann/rift/issues/69">#69</a>) <a href="https://github.com/acsandmann/rift/commit/f1e1cb3"><code>f1e1cb3</code></a>
* fix: floating assignments with no workspace (<a href="https://github.com/acsandmann/rift/issues/71">#71</a>) <a href="https://github.com/acsandmann/rift/commit/deb6305"><code>deb6305</code></a>

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.6">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.6/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.5...v0.0.6">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.5-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-21T21:54:41Z">October 21, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">28</dd></div></dl>

### Changes
* fix: improved focus behavior for traditional stack layouts by <a href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/64
* fix: windows being lost after fullscreen by <a href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/57



huuuugggeee improvements relating to fullscreening windows, moving windows btwn macos' spaces through mission control, and dragging windows btwn monitors!

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.5">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.5/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.4.1...v0.0.5">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.4.1-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-20T20:33:15Z">October 20, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">30</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.4.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.4.1/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.4...v0.0.4.1">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.4-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-19T22:48:05Z">October 19, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">29</dd></div></dl>

### Changes
* fix: instant menu disappearing and mouse warping behavior by <a href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/55
* fix: embed info.plist by <a href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/62
* Fix/brew by <a href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/63

### Contributors
* <a href="https://github.com/sytherax">@sytherax</a> made their first contribution in https://github.com/acsandmann/rift/pull/55

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.4">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.4/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.3...v0.0.4">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.3-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-16T03:08:24Z">October 16, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">62</dd></div></dl>

_No release notes were provided._

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.3">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.3/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.2...v0.0.3">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.2-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-15T19:19:47Z">October 15, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">9</dd></div></dl>

### Changes
* fix: jetbrains/wezterm by <a href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/43
* fix: make rift-cli pipeable by <a href="https://github.com/alle-ox">@alle-ox</a> in https://github.com/acsandmann/rift/pull/35
* fix/erroneous window delete by <a href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/44

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.2">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.2/rift.default.toml">Default config</a><a href="https://github.com/acsandmann/rift/compare/v0.0.1.1...v0.0.2">Compare changes</a></p>

</section>

<section class="apple-entry">

## v0.0.1.1-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-15T01:26:20Z">October 15, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">20</dd></div></dl>

emergency fix for pathfinding in service builder

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.1.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.1.1/rift.default.toml">Default config</a></p>

</section>

<section class="apple-entry">

## v0.0.1-beta

<dl class="apple-meta"><div><dt>Released</dt><dd><time datetime="2025-10-15T00:59:19Z">October 15, 2025</time></dd></div><div><dt>Downloads</dt><dd title="Across 1 release asset">8</dd></div></dl>

rifts first release, and also a test

<p class="apple-meta"><a href="https://github.com/acsandmann/rift/releases/tag/v0.0.1">GitHub release</a><a href="https://github.com/acsandmann/rift/blob/v0.0.1/rift.default.toml">Default config</a></p>

</section>

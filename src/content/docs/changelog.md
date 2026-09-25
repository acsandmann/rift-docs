---
title: Changelog
description: Release history and notable changes for Rift.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

Rift's release notes, newest first. Each entry links back to its original [GitHub release](https://github.com/acsandmann/rift/releases).

## v0.5.9

<div class="changelog-release-meta">
  <time datetime="2026-09-16T13:44:18Z">September 16, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">53 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.9">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.9/rift.default.toml">Default config ↗</a>
</div>

### Changes
* feat: move-workspace-to-display (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/314">#314</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/52b2846"><code>52b2846</code></a>
* fix: hide off-screen scrolling columns and stop boundary focus jumps (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/320">#320</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cf102d4"><code>cf102d4</code></a>
* fix: keep self-initiated focus raises quiet (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/485">#485</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0121cf2"><code>0121cf2</code></a>
* perf: bulk window attributes (2-4x faster) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d3be1bc"><code>d3be1bc</code></a>
* perf: reuse native id resolutions <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d7c7734"><code>d7c7734</code></a>
* perf: only request stale observations when needed <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a8a1079"><code>a8a1079</code></a>
* perf: gate window_spaces query <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6d66b90"><code>6d66b90</code></a>

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/lmk02">@lmk02</a> made their first contribution in https://github.com/acsandmann/rift/pull/485
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.5.8.1...v0.5.9">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.5.8.1

<div class="changelog-release-meta">
  <time datetime="2026-09-11T00:55:10Z">September 11, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">318 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.8.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.8.1/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.5.8...v0.5.8.1">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.5.8

<div class="changelog-release-meta">
  <time datetime="2026-09-11T00:28:53Z">September 11, 2026</time>
  
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.8">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.8/rift.default.toml">Default config ↗</a>
</div>

### Changes
* Revert "fix: avoid redundant layout [asses" <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7a59369"><code>7a59369</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.5.7...v0.5.8">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.5.7

<div class="changelog-release-meta">
  <time datetime="2026-09-09T22:00:35Z">September 9, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">114 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.7">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.7/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: memory leaks in ipc <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/be3bbea"><code>be3bbea</code></a>
* fix: make persistence matching more permissive (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/481">#481</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/563d54a"><code>563d54a</code></a>
* fix(traditional): avoid panic when join collapses the shared parent (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/470">#470</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/9b4f133"><code>9b4f133</code></a>

### News
After over a year of being out in the open, rift now has a docs site! Check it out at https://acsandmann.github.io/rift-docs/ and provide any and all feedback in rifts [matrix room](https://matrix.to/#/%23rift:matrix.org).

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/Trigus42">@Trigus42</a> made their first contribution in https://github.com/acsandmann/rift/pull/470
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.5.6...v0.5.7">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.5.6

<div class="changelog-release-meta">
  <time datetime="2026-09-06T20:35:40Z">September 6, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">234 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.6">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.6/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: only rerun title rule <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/556b7ad"><code>556b7ad</code></a>
* fix: avoid redundant layout [asses <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6baa565"><code>6baa565</code></a>
* fix(bsp): raise only the focus target on move_focus (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/478">#478</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b9e6d6c"><code>b9e6d6c</code></a>
* fix: keep tracking the dragged frame while a drag swap is pending (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/475">#475</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/beeac0e"><code>beeac0e</code></a>
* fix: windowtitlechanged not firing (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/471">#471</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1714f90"><code>1714f90</code></a>
* perf: menu bar <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/dd9ad8f"><code>dd9ad8f</code></a>
* fix: dont destroy on invaliduielement (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/456">#456</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/251fe8b"><code>251fe8b</code></a>
* fix: make loginwindow activation authoritative (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/456">#456</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e7eb854"><code>e7eb854</code></a>
* fix: don't reset layout when moving between display sizes (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/440">#440</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d8214ba"><code>d8214ba</code></a>
* fix: refresh stale AX inventories after display wake <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d095bb6"><code>d095bb6</code></a>
* feat: selection changed event (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/466">#466</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7821dd3"><code>7821dd3</code></a>
* feat: stable node_id in layoutchanged (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/466">#466</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7e76bdb"><code>7e76bdb</code></a>
* feat: frame in container_tree in layoutchanged (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/466">#466</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/487168d"><code>487168d</code></a>
* fix(master-stack): preserve membership when removing windows (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/469">#469</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/ed3b6c5"><code>ed3b6c5</code></a>
* fix: reap the child when NOTE_EXIT beats the zombie transition (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/465">#465</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/372fcd2"><code>372fcd2</code></a>

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/deancureton">@deancureton</a> made their first contribution in https://github.com/acsandmann/rift/pull/465
* <a class="changelog-reference changelog-reference--author" href="https://github.com/zuozh11">@zuozh11</a> made their first contribution in https://github.com/acsandmann/rift/pull/469
* <a class="changelog-reference changelog-reference--author" href="https://github.com/ChrisAmora">@ChrisAmora</a> made their first contribution in https://github.com/acsandmann/rift/pull/475
* <a class="changelog-reference changelog-reference--author" href="https://github.com/ae-bii">@ae-bii</a> made their first contribution in https://github.com/acsandmann/rift/pull/478
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.5.5...v0.5.6">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.5.5-beta

<div class="changelog-release-meta">
  <time datetime="2026-09-01T01:02:31Z">September 1, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">327 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.5">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.5/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: warp cursor to the focused window on focus_display <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b67cf2e"><code>b67cf2e</code></a>
* fix: move real window focus on focus_display and move_mouse_to_display (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/332">#332</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/afa767f"><code>afa767f</code></a>
* fix: warp cursor after move_node <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8a1cad0"><code>8a1cad0</code></a>
* fix: reject snapshots with space: None <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/21efa52"><code>21efa52</code></a>
* fix: handle window_spaces returning >1 spaces <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b1060de"><code>b1060de</code></a>
* fix: hotkey parsing/key list <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0f70787"><code>0f70787</code></a>
* fix: dock orientation values <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/9deb843"><code>9deb843</code></a>
* fix: refresh stale ax identifies <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6d7b21c"><code>6d7b21c</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.5.3...v0.5.4">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.5.4-beta

<div class="changelog-release-meta">
  <time datetime="2026-08-31T20:39:20Z">August 31, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">24 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.4">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.4/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: duplication of child windows (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/462">#462</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f9b152d"><code>f9b152d</code></a>
* fix: axwindows update resetting layouts/workspaces (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/440">#440</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e4aa60d"><code>e4aa60d</code></a>
* fix: layout/workspace resets (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/456">#456</a>) (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/440">#440</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/59b9033"><code>59b9033</code></a>
* fix: reject ordered-out windows during app discovery (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/460">#460</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/46f5ba0"><code>46f5ba0</code></a>
* perf: menu bar <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/73a475f"><code>73a475f</code></a>
* fix: honor double-quote grouping in parse_command (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/445">#445</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/74ce00d"><code>74ce00d</code></a>
* fix: app activation away from loginwindow messing up wake cycle <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/fad6498"><code>fad6498</code></a>
* fix: allow ffm to target only layer=0 windows <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a99c898"><code>a99c898</code></a>
* feat: center/size window on float (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/448">#448</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/54ac143"><code>54ac143</code></a>
* fix: master_stack insertion point handling (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/452">#452</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7b8a0a4"><code>7b8a0a4</code></a>
* feat: layout_changed ipc event (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/453">#453</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7d026c4"><code>7d026c4</code></a>
* feat: col/row ordering in query api (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/454">#454</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/38eacff"><code>38eacff</code></a>
* fix: col width calculation (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/449">#449</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/be8afef"><code>be8afef</code></a>
* feat: explicit manage=true lets nominally unmanageable windows into layout <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cce710a"><code>cce710a</code></a>
* feat: improved gestures (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/446">#446</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/9215d53"><code>9215d53</code></a>
* fix: retry failed position requests <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/5e10972"><code>5e10972</code></a>
* fix: ghost windows + layout reset (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/440">#440</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f2a9349"><code>f2a9349</code></a>
* fix: use after free panic (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/447">#447</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b84dda4"><code>b84dda4</code></a>
* feat: !BREAKING! reveal layout state to ipc/cli (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/439">#439</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/3a52122"><code>3a52122</code></a>
* fix: ghost windows after minimization <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7783d52"><code>7783d52</code></a> <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/792370e"><code>792370e</code></a>
* perf: only rebuild menu bar once <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/abdbcc8"><code>abdbcc8</code></a>
* perf: fast path for frame ack <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/02f16c3"><code>02f16c3</code></a>
* perf: optimized enhancedui handling <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6eff0b8"><code>6eff0b8</code></a>
* fix: make ax destroy not be authoritative (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/440">#440</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1e3a898"><code>1e3a898</code></a>
* fix: move_node hiding col in scroll layout (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/437">#437</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1de4d09"><code>1de4d09</code></a>

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/YuriNachos">@YuriNachos</a> made their first contribution in https://github.com/acsandmann/rift/pull/445
* <a class="changelog-reference changelog-reference--author" href="https://github.com/CoolJosh0221">@CoolJosh0221</a> made their first contribution in https://github.com/acsandmann/rift/pull/460
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.5.3...v0.5.4">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.5.3-beta

<div class="changelog-release-meta">
  <time datetime="2026-08-04T01:27:41Z">August 4, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">800 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.3">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.3/rift.default.toml">Default config ↗</a>
</div>

### Changes
* feat: more app rule fields (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/375">#375</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6c64d8b"><code>6c64d8b</code></a>
* fix: hot reload main settings that arent keybindings <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b619ce5"><code>b619ce5</code></a>
* fix: mouse_hides_on_focus (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/374">#374</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/155d522"><code>155d522</code></a>
* fix: roll strip automatically when focus changes (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/434">#434</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/12e8efc"><code>12e8efc</code></a>
* feat: rift-protocol <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a39581e"><code>a39581e</code></a> <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/103af15"><code>103af15</code></a> <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e546861"><code>e546861</code></a>
* feat: dimmer example <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8f0d925"><code>8f0d925</code></a>
* feat: rift-client library <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/25d5923"><code>25d5923</code></a>
* fix: insertion point in scrolling layout <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6e5ed78"><code>6e5ed78</code></a>
* fix: improvements to mission control 1/n <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0bf5549"><code>0bf5549</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.5.2...v0.5.3">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.5.2-beta

<div class="changelog-release-meta">
  <time datetime="2026-08-03T14:28:21Z">August 3, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">55 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.2">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.2/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: make animations respect config (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/432">#432</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/3185d1c"><code>3185d1c</code></a>
* feat: focused window changed broadcast event <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/5c0b38d"><code>5c0b38d</code></a>
* perf: position only workspace switch <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a5c429d"><code>a5c429d</code></a>
* perf: remove duplicate menu update <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/fe8a687"><code>fe8a687</code></a>
* perf: recognize layout noops <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b9b79be"><code>b9b79be</code></a>
* chore: default equalize_nodes to true <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a369cf2"><code>a369cf2</code></a>
* perf: scope workspace switch to active display <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/fe97ae2"><code>fe97ae2</code></a>
* fix: app activation handling <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/652a53f"><code>652a53f</code></a>
* feat: layout normalizations (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/430">#430</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e95944e"><code>e95944e</code></a>
* feat: configurable window insertion point (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/427">#427</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/95bc739"><code>95bc739</code></a>
* fix: slow workspace switch following app activation <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7f26efe"><code>7f26efe</code></a>
* fix: consume gesture events that count towards a swipe <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/fa4ca62"><code>fa4ca62</code></a>
* fix: event_taps going offline (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/431">#431</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/38572a0"><code>38572a0</code></a>
* fix: restore space logic <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/eb05b70"><code>eb05b70</code></a>
* fix: ghost windows from layout restore <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c160d6c"><code>c160d6c</code></a>
* perf: correct EventOutcome semantics <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c6ebf61"><code>c6ebf61</code></a>
* perf: less redundant layout arrangements <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6a2b3ad"><code>6a2b3ad</code></a>
* fix: dont add gap for menubar on non notched displays (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/425">#425</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/93a1fd3"><code>93a1fd3</code></a>
* fix: StackLineHoverMode being reversed <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/ef39a1b"><code>ef39a1b</code></a>
* feat: follow window to workspace <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/af9fff7"><code>af9fff7</code></a>
* feat: track role window (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/242">#242</a>) (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/308">#308</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a5fa216"><code>a5fa216</code></a>
* fix: smarter restoration <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/dd1e2be"><code>dd1e2be</code></a>
* feat: prevent_wrapping virtual workspace option (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/205">#205</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/ad6288b"><code>ad6288b</code></a>
* feat: movewindowtoworkspace = "next" (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/198">#198</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0991ca5"><code>0991ca5</code></a>
* feat: optional on hover stackline actions (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/417">#417</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/80edaee"><code>80edaee</code></a>
* feat: resize_window_grow/shrink optional orientation (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/421">#421</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2fe38b8"><code>2fe38b8</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.5.1...v0.5.2">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.5.1-beta

<div class="changelog-release-meta">
  <time datetime="2026-07-23T16:01:55Z">July 23, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">348 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.1/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: smarter restoration <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f2a2e56"><code>f2a2e56</code></a>  <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b47bb75"><code>b47bb75</code></a>
* feat: prevent_wrapping virtual workspace option (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/205">#205</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0991ca5"><code>0991ca5</code></a>
* feat: movewindowtoworkspace = "next" (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/198">#198</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/80edaee"><code>80edaee</code></a>
* feat: optional on hover stackline actions (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/417">#417</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2fe38b8"><code>2fe38b8</code></a>
* feat: resize_window_grow/shrink optional orientation (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/421">#421</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/3866b7e"><code>3866b7e</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.5.0...v0.5.1">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.5.0-beta

<div class="changelog-release-meta">
  <time datetime="2026-07-22T22:02:04Z">July 22, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">73 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.5.0">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.5.0/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: app kvo observers <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/023cd33"><code>023cd33</code></a>
* feat: sls based focus state <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f008fee"><code>f008fee</code></a>
* fix: noop single window raises when already front <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/aa31d7e"><code>aa31d7e</code></a>
* fix: get rid of watchdog polling in event_tap <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2c350f7"><code>2c350f7</code></a>
* fix: dont wait to app to be active to raise <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/ad77133"><code>ad77133</code></a>
* feat: Allow fullscreen toggling of floating windows (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/420">#420</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0ba4f68"><code>0ba4f68</code></a>
* fix: early return if display is same after display changed event <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7b67c36"><code>7b67c36</code></a>
* feat: experimental restoreable state/layouts <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/de0f346"><code>de0f346</code></a> <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d710931"><code>d710931</code></a>
* chore: add missing "scrolling" layout in default config (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/419">#419</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e4b4e4c"><code>e4b4e4c</code></a>
* feat: focus window by id in cli (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/338">#338</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/4b2882d"><code>4b2882d</code></a>

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/nuugen">@nuugen</a> made their first contribution in https://github.com/acsandmann/rift/pull/419
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.4...v0.5.0">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.4-beta

<div class="changelog-release-meta">
  <time datetime="2026-07-13T19:18:08Z">July 13, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">347 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.4">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.4/rift.default.toml">Default config ↗</a>
</div>

### Changes
* feat: consume_and_expel (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/373">#373</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2933c3e"><code>2933c3e</code></a>
* feat: reload_config keybind command (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/348">#348</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d292448"><code>d292448</code></a>
* feat: raise max workspaces (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/394">#394</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cdbbed8"><code>cdbbed8</code></a>
* fix: windows resetting after sleep/churn <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f22b84e"><code>f22b84e</code></a>
* fix: adjust_master_ratio (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/326">#326</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a47abd9"><code>a47abd9</code></a>
* fix: direction specific hotkeys (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/346">#346</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/80f6d35"><code>80f6d35</code></a>
* fix: close_window (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/411">#411</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/9e3f60c"><code>9e3f60c</code></a>
* fix: handle constraints better in bsp (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/409">#409</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8713867"><code>8713867</code></a>
* feat: space actor (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/392">#392</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/223c3dc"><code>223c3dc</code></a>
* fix: Master Stack Layout Reordering and Arrangement (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/397">#397</a>) (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/398">#398</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/23a4c9d"><code>23a4c9d</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.3...v0.5.0">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.3-beta

<div class="changelog-release-meta">
  <time datetime="2026-06-15T17:00:47Z">June 15, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">656 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.3">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.3/rift.default.toml">Default config ↗</a>
</div>

**Whats Changed**
* feat: async animations <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1852328"><code>1852328</code></a>
* fix: mouse getting hidden and not unhidden <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d482adb"><code>d482adb</code></a>
* feat: retry app notifications for apps slow to respond <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d9a36aa"><code>d9a36aa</code></a>
* feat: optimize app actor <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b039b32"><code>b039b32</code></a>
* chore: clean up handling of minimized windows <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/78371aa"><code>78371aa</code></a>
* fix: focus correct window on activation (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/389">#389</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/77501ab"><code>77501ab</code></a>
* fix: keep track of windows after native unfullscreened <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a7b4908"><code>a7b4908</code></a>
* chore: condense all window state into window_registry <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/05ea842"><code>05ea842</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.2...v0.4.3">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.2-beta

<div class="changelog-release-meta">
  <time datetime="2026-06-14T20:36:10Z">June 14, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">77 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.2">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.2/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: stop floating window ping-pong across displays <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2f0b55d"><code>2f0b55d</code></a>
* feat: add event hints in observers refcons to reduce lookups <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/5c20512"><code>5c20512</code></a>
* feat: update window skylight tag filtering <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/26f28d3"><code>26f28d3</code></a>
* feat: ignore windows with near zero alphas <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8f91244"><code>8f91244</code></a>
* fix: scrolling alignment (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/387">#387</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/432c83d"><code>432c83d</code></a>
* fix(scrolling): preserve vertical window sizes when resizing within columns (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/386">#386</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2aaeeac"><code>2aaeeac</code></a>
* fix(hotkey): handle device-dependent modifiers for remapped hyper keys (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/383">#383</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/86bc4f4"><code>86bc4f4</code></a>
* feat: Decouple Master/Stack Side Placement from Window Arrangement Direction (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/367">#367</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f5693f0"><code>f5693f0</code></a>
* fix: space_switch on macos27 (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/381">#381</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0d5eb42"><code>0d5eb42</code></a>
* fix: stop freeze after a raise times out <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c0b2755"><code>c0b2755</code></a>
* fixes <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/98681e2"><code>98681e2</code></a>
* fix: focus follows mouse <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/9d1f080"><code>9d1f080</code></a>
* fix: preserve other display spaces when fullscreen space exists <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/db08871"><code>db08871</code></a>
* fix: keyboard becomes unresponsive after prolonged use (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/368">#368</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/955ac8a"><code>955ac8a</code></a>

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/sj-cstar">@sj-cstar</a> made their first contribution in https://github.com/acsandmann/rift/pull/368
* <a class="changelog-reference changelog-reference--author" href="https://github.com/hajiboy95">@hajiboy95</a> made their first contribution in https://github.com/acsandmann/rift/pull/367
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.1...v0.4.2">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.1-beta

<div class="changelog-release-meta">
  <time datetime="2026-05-15T19:20:04Z">May 15, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">957 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.1/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: stabilize cross-display drag snapback by <a class="changelog-reference changelog-reference--author" href="https://github.com/leokeba">@leokeba</a> in https://github.com/acsandmann/rift/pull/310
* fix: restore main-window selection after startup discovery by <a class="changelog-reference changelog-reference--author" href="https://github.com/corpooo">@corpooo</a> in https://github.com/acsandmann/rift/pull/321
* fix: prevent fullscreen spaces from wiping workspace assignments on wake by <a class="changelog-reference changelog-reference--author" href="https://github.com/strayer">@strayer</a> in https://github.com/acsandmann/rift/pull/334
* fix: broadcast windows_changed on all MoveWindowToWorkspace paths by <a class="changelog-reference changelog-reference--author" href="https://github.com/yuukidach">@yuukidach</a> in https://github.com/acsandmann/rift/pull/336
* fix: stackline appears behind floating window (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/279">#279</a>) by <a class="changelog-reference changelog-reference--author" href="https://github.com/Swoorup">@Swoorup</a> in https://github.com/acsandmann/rift/pull/325
* fix: prevent window oscillation after display topology change by <a class="changelog-reference changelog-reference--author" href="https://github.com/strayer">@strayer</a> in https://github.com/acsandmann/rift/pull/342
* fix: handle zero window server ids by <a class="changelog-reference changelog-reference--author" href="https://github.com/adamjhf">@adamjhf</a> in https://github.com/acsandmann/rift/pull/362
* fix: stop handling full screen windows in tile layout by <a class="changelog-reference changelog-reference--author" href="https://github.com/alextorma">@alextorma</a> in https://github.com/acsandmann/rift/pull/358
* fix: don't drop tiled windows when app has a fullscreen space by <a class="changelog-reference changelog-reference--author" href="https://github.com/alextorma">@alextorma</a> in https://github.com/acsandmann/rift/pull/359
* fix(engine): mitigate focus corruption from boundary raise races by <a class="changelog-reference changelog-reference--author" href="https://github.com/qeude">@qeude</a> in https://github.com/acsandmann/rift/pull/355

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/leokeba">@leokeba</a> made their first contribution in https://github.com/acsandmann/rift/pull/310
* <a class="changelog-reference changelog-reference--author" href="https://github.com/corpooo">@corpooo</a> made their first contribution in https://github.com/acsandmann/rift/pull/321
* <a class="changelog-reference changelog-reference--author" href="https://github.com/strayer">@strayer</a> made their first contribution in https://github.com/acsandmann/rift/pull/334
* <a class="changelog-reference changelog-reference--author" href="https://github.com/yuukidach">@yuukidach</a> made their first contribution in https://github.com/acsandmann/rift/pull/336
* <a class="changelog-reference changelog-reference--author" href="https://github.com/Swoorup">@Swoorup</a> made their first contribution in https://github.com/acsandmann/rift/pull/325
* <a class="changelog-reference changelog-reference--author" href="https://github.com/alextorma">@alextorma</a> made their first contribution in https://github.com/acsandmann/rift/pull/358
* <a class="changelog-reference changelog-reference--author" href="https://github.com/qeude">@qeude</a> made their first contribution in https://github.com/acsandmann/rift/pull/355
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.0...v0.4.1">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.0

<div class="changelog-release-meta">
  <time datetime="2026-03-03T13:44:57Z">March 3, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">1,485 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.0/rift.default.toml">Default config ↗</a>
</div>

### Changes
* feat: stack layout <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/50b50b3"><code>50b50b3</code></a>
* feat: sublevels for ffm <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/3aaf6f4"><code>3aaf6f4</code></a>
* fix: constrained windows <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a46c4bc"><code>a46c4bc</code></a>
* fix: adjust maximum column width ratio to 1.0 by <a class="changelog-reference changelog-reference--author" href="https://github.com/BennyDeeDev">@BennyDeeDev</a> in https://github.com/acsandmann/rift/pull/292
* feat: handle unresizeable windows <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1c94cc8"><code>1c94cc8</code></a>
* fix: prevent stale txid (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/268">#268</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b491525"><code>b491525</code></a>
* feat: menu bar menu <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/3460769"><code>3460769</code></a>
* fix: ffm not working <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d9af21c"><code>d9af21c</code></a>
* perf: lock free main loop <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/056224c"><code>056224c</code></a>
* feat: properly determine hide corner <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d8ff72e"><code>d8ff72e</code></a>
* fix: improve display handling <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/45d77a2"><code>45d77a2</code></a>
* fix: display churn after sleep <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/04283dc"><code>04283dc</code></a>
* fix: multi display handling <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1bf16a9"><code>1bf16a9</code></a>
* perf: reduce allocations <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0599eff"><code>0599eff</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/9522797"><code>9522797</code></a>
* perf: reduce cpu <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f3159ae"><code>f3159ae</code></a>
* feat: event streaming via mach server <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b5e8114"><code>b5e8114</code></a>
* chore: only send stackschanged if there are stacks <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/56d9c0e"><code>56d9c0e</code></a>
* chore: animations disabled by default <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/80e27e3"><code>80e27e3</code></a>
* fix: dup app thread launches leading to window oscillation <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0be579d"><code>0be579d</code></a>
* fix: window oscillation <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cbd70b2"><code>cbd70b2</code></a>
* perf: event_tap <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/783d7b8"><code>783d7b8</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6a8957f"><code>6a8957f</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c7cc120"><code>c7cc120</code></a>
* perf: don't fully refresh window info on title change <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8b0b3b2"><code>8b0b3b2</code></a>
* chore: cleanup layout engine <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8427aa2"><code>8427aa2</code></a>
* fix: focus follows mouse breaking intermittently <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cb3f75b"><code>cb3f75b</code></a>
* fix: bundle_id is now correct !BREAKING <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/50c2bab"><code>50c2bab</code></a>
* chore: demote MainWindowChanged logs from warn <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a6b072f"><code>a6b072f</code></a>
* feat: stacks_changed broadcast event <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/bac1194"><code>bac1194</code></a>
* chore: update stack line defaults <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/86044b5"><code>86044b5</code></a>
* feat: cycle windows sequentially instead of using directional focus (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/268">#268</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7cc8aca"><code>7cc8aca</code></a>
* fix: dismiss misson control cli command <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6c6943a"><code>6c6943a</code></a>
* fix: crash when moving btwn spaces (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/272">#272</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6bc2ee6"><code>6bc2ee6</code></a>
*  fix: scrolling with multi monitor (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/266">#266</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e71a6fd"><code>e71a6fd</code></a>
* perf: optimize animations <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/fc00c51"><code>fc00c51</code></a>
* fix: respect invert_horizontal_swipe <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7a124c6"><code>7a124c6</code></a>
* feat: per workspace layouts (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/258">#258</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/9852561"><code>9852561</code></a>
* fix: not assigning keycodes properly (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/263">#263</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d4c5b28"><code>d4c5b28</code></a>
* chore: ensure ffm state is proper <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/99af084"><code>99af084</code></a>
* fix: scrolling layout using wrong defaults <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d87787d"><code>d87787d</code></a>
* feat: scrolling layout (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/251">#251</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/550256d"><code>550256d</code></a>
* fix: disable eui on app <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/867ca99"><code>867ca99</code></a>
* fix: window animations (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/255">#255</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7346b64"><code>7346b64</code></a>
* chore: hide notice when default_disable=false (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/254">#254</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/efc4d53"><code>efc4d53</code></a>
* fix: hide stackline when node is zoomed (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/96">#96</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b3be792"><code>b3be792</code></a>
* fix: preserve master stack <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/84bcca5"><code>84bcca5</code></a>

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/BennyDeeDev">@BennyDeeDev</a> made their first contribution in https://github.com/acsandmann/rift/pull/292


### Changes
* fix: hide notice when default_disable=false by <a class="changelog-reference changelog-reference--author" href="https://github.com/adamjhf">@adamjhf</a> in https://github.com/acsandmann/rift/pull/254
* feat: scrolling layout by <a class="changelog-reference changelog-reference--author" href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/251
* feat: per workspace layouts by <a class="changelog-reference changelog-reference--author" href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/258
* chore: fix failing test by <a class="changelog-reference changelog-reference--author" href="https://github.com/adamjhf">@adamjhf</a> in https://github.com/acsandmann/rift/pull/270
* feat: cycle windows sequentially instead of using directional focus by <a class="changelog-reference changelog-reference--author" href="https://github.com/bnjjo">@bnjjo</a> in https://github.com/acsandmann/rift/pull/268
* fix: adjust maximum column width ratio to 1.0 by <a class="changelog-reference changelog-reference--author" href="https://github.com/BennyDeeDev">@BennyDeeDev</a> in https://github.com/acsandmann/rift/pull/292

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/adamjhf">@adamjhf</a> made their first contribution in https://github.com/acsandmann/rift/pull/254
* <a class="changelog-reference changelog-reference--author" href="https://github.com/bnjjo">@bnjjo</a> made their first contribution in https://github.com/acsandmann/rift/pull/268
* <a class="changelog-reference changelog-reference--author" href="https://github.com/BennyDeeDev">@BennyDeeDev</a> made their first contribution in https://github.com/acsandmann/rift/pull/292
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.7...v0.4.0-alpha.8">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.0-alpha.7

<div class="changelog-release-meta">
  <time datetime="2026-02-28T22:14:13Z">February 28, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">134 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.7">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.7/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.6...v0.4.0-alpha.7">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.0-alpha.6

<div class="changelog-release-meta">
  <time datetime="2026-02-27T04:17:54Z">February 27, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">122 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.6">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.6/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.5...v0.4.0-alpha.6">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.0-alpha.5

<div class="changelog-release-meta">
  <time datetime="2026-02-26T18:49:37Z">February 26, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">33 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.5">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.5/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.4...v0.4.0-alpha.5">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.0-alpha.4

<div class="changelog-release-meta">
  <time datetime="2026-02-25T16:14:38Z">February 25, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">82 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.4">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.4/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.3...v0.4.0-alpha.4">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.0-alpha.3

<div class="changelog-release-meta">
  <time datetime="2026-02-20T14:21:50Z">February 20, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">216 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.3">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.3/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha.2...v0.4.0-alpha.3">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.0-alpha.2

<div class="changelog-release-meta">
  <time datetime="2026-02-20T02:49:11Z">February 20, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">49 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha.2">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha.2/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: multi display handling <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1bf16a9"><code>1bf16a9</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.4.0-alpha...v0.4.0-alpha.2">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.4.0-alpha

<div class="changelog-release-meta">
  <time datetime="2026-02-20T02:36:34Z">February 20, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">7 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.4.0-alpha">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.4.0-alpha/rift.default.toml">Default config ↗</a>
</div>

### Changes
* feat: event streaming via mach server <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b5e8114"><code>b5e8114</code></a>
* chore: animations disabled by default <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/80e27e3"><code>80e27e3</code></a>
* fix: dup app thread launches leading to window oscillation <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0be579d"><code>0be579d</code></a>
* fix: window oscillation <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cbd70b2"><code>cbd70b2</code></a>
* perf: event_tap <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/783d7b8"><code>783d7b8</code></a>
* perf: adaptive event_mask to avoid extra processing <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6a8957f"><code>6a8957f</code></a>
* perf: event_tap <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c7cc120"><code>c7cc120</code></a>
* perf: don't fully refresh window info on title change <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8b0b3b2"><code>8b0b3b2</code></a>
* chore: cleanup layout engine <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8427aa2"><code>8427aa2</code></a>
* fix: focus follows mouse breaking intermittently <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cb3f75b"><code>cb3f75b</code></a>
* fix: bundle_id is now correct !BREAKING <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/50c2bab"><code>50c2bab</code></a>
* chore: demote MainWindowChanged logs from warn <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a6b072f"><code>a6b072f</code></a>
* feat: stacks_changed broadcast event <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/bac1194"><code>bac1194</code></a>
* chore: update stack line defaults <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/86044b5"><code>86044b5</code></a>
* feat: cycle windows sequentially instead of using directional focus (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/268">#268</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7cc8aca"><code>7cc8aca</code></a>
* fix: crash when moving btwn spaces (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/272">#272</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6bc2ee6"><code>6bc2ee6</code></a>
* fix: scrolling with multi monitor (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/266">#266</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e71a6fd"><code>e71a6fd</code></a>
* feat: per workspace layouts (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/258">#258</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/9852561"><code>9852561</code></a>
* fix: not assigning keycodes properly (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/263">#263</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d4c5b28"><code>d4c5b28</code></a>
* chore: ensure ffm state is proper <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/99af084"><code>99af084</code></a>
* fix: scrolling layout using wrong defaults <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d87787d"><code>d87787d</code></a>
* feat: scrolling layout (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/251">#251</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/550256d"><code>550256d</code></a>
* fix: window animations (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/255">#255</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7346b64"><code>7346b64</code></a>
* chore: update default config <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/14d2a22"><code>14d2a22</code></a>
* chore: hide notice when default_disable=false (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/254">#254</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/efc4d53"><code>efc4d53</code></a>
* fix: hide stackline when node is zoomed (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/96">#96</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b3be792"><code>b3be792</code></a>
* fix: preserve master stack <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/84bcca5"><code>84bcca5</code></a>


### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/adamjhf">@adamjhf</a> made their first contribution in https://github.com/acsandmann/rift/pull/254
* <a class="changelog-reference changelog-reference--author" href="https://github.com/bnjjo">@bnjjo</a> made their first contribution in https://github.com/acsandmann/rift/pull/268

### "Breaking" Changes
Window's in IPC payloads now have the proper bundle_id and the value that it used to be is now app_name.
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.3.9...v0.4.0-alpha">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.3.9-beta

<div class="changelog-release-meta">
  <time datetime="2026-01-30T22:47:57Z">January 30, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">524 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.3.9">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.3.9/rift.default.toml">Default config ↗</a>
</div>

### Changes
* feat: master/stack layout engine (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/249">#249</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c0f63ec"><code>c0f63ec</code></a>
* feat: show stack lines for all active stacks on all active spaces (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/246">#246</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/19b3214"><code>19b3214</code></a>
* fix: losing windows after mission control <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6bf710e"><code>6bf710e</code></a>
* fix: handle generic mods <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/43a5493"><code>43a5493</code></a>
* fix: autoraise intermittently breaking <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1c8882b"><code>1c8882b</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.3.8...v0.4.0">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.3.8-beta

<div class="changelog-release-meta">
  <time datetime="2026-01-23T17:48:22Z">January 23, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">197 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.3.8">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.3.8/rift.default.toml">Default config ↗</a>
</div>

### Changes
- fix: autoraise intermittently not working (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/133">#133</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/98c3b87"><code>98c3b87</code></a>
- chore: harden focus changing (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/133">#133</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/622b955"><code>622b955</code></a>
- fix: mission control should take up full screen <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/034d99f"><code>034d99f</code></a>
- fix: dont manage minized windows <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/652dc8b"><code>652dc8b</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.3.7...v0.3.8">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.3.7-beta

<div class="changelog-release-meta">
  <time datetime="2026-01-20T14:06:42Z">January 20, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">136 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.3.7">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.3.7/rift.default.toml">Default config ↗</a>
</div>

### Whats New
- fix: crash when mission control is disabled
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.3.6...v0.3.7">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.3.6-beta

<div class="changelog-release-meta">
  <time datetime="2026-01-20T00:57:11Z">January 20, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">53 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.3.6">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.3.6/rift.default.toml">Default config ↗</a>
</div>

### Changes
- feat: improve pattern of querying state from reactor <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b262166"><code>b262166</code></a>
- fix: layout engine should stay aware of display size changes after churn <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e5f5160"><code>e5f5160</code></a>
- fix: clear login window state properly <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/816f93a"><code>816f93a</code></a>
- perf: remove mutex in runloop <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/fd9b579"><code>fd9b579</code></a>
- feat: by default fibonacci spiral layout for BSP mode (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/232">#232</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c09528c"><code>c09528c</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.3.5...v0.3.6">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.3.5-beta

<div class="changelog-release-meta">
  <time datetime="2026-01-17T22:29:15Z">January 17, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">115 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.3.5">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.3.5/rift.default.toml">Default config ↗</a>
</div>

### Changes
- fix: windows tiling in middle of tree instead of end <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0e6f6e8"><code>0e6f6e8</code></a>
-  fix: window spaz when >1 windows of same app open (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/231">#231</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d2ac491"><code>d2ac491</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.3.4...v0.3.5">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.3.4-beta

<div class="changelog-release-meta">
  <time datetime="2026-01-16T21:50:35Z">January 16, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">55 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.3.4">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.3.4/rift.default.toml">Default config ↗</a>
</div>

### Changes
- fix: space activation tracking
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.3.3...v0.3.4">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.3.3

<div class="changelog-release-meta">
  <time datetime="2026-01-16T05:24:11Z">January 16, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">69 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.3.3">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.3.3/rift.default.toml">Default config ↗</a>
</div>

### Changes
- fix: slow window destroys <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/12b91ca"><code>12b91ca</code></a>
- chore: harden animation event blocking <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/981ded4"><code>981ded4</code></a>
- fix: potential race <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/5b1c15d"><code>5b1c15d</code></a>
- fix: disable eui on app not window <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/134198c"><code>134198c</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.3.2...v0.3.3">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.3.2-beta

<div class="changelog-release-meta">
  <time datetime="2026-01-16T03:11:00Z">January 16, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">8 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.3.2">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.3.2/rift.default.toml">Default config ↗</a>
</div>

### Changes
- fix: browsers sometime jitter when multiple windows of same app are opened
- fix: disable eui on app not window
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.3.1...v0.3.2">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.3.1-beta

<div class="changelog-release-meta">
  <time datetime="2026-01-15T22:53:48Z">January 15, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">15 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.3.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.3.1/rift.default.toml">Default config ↗</a>
</div>

### Changes
- fix: needing to uninstall/reinstall between updates <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e482b8d"><code>e482b8d</code></a>
- fix: fullscreening window in space 1 makes it a ghost window in space 0 <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/82e4e50"><code>82e4e50</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.3.0...v0.3.1">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.3.0-beta

<div class="changelog-release-meta">
  <time datetime="2026-01-15T21:14:29Z">January 15, 2026</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">16 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.3.0">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.3.0/rift.default.toml">Default config ↗</a>
</div>

### Changes
- fix: properly disable move/resize events during animation <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/25f858f"><code>25f858f</code></a>
- fix: handle apps that dont send windowclosed events(firefox) (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/201">#201</a>) (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/121">#121</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e70fc04"><code>e70fc04</code></a>
- feat: stack lines are now clickable <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8f3b0ed"><code>8f3b0ed</code></a>
- feat: drag window to resize <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/099c3ce"><code>099c3ce</code></a>
- fix: respecting space activation status <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0b563f6"><code>0b563f6</code></a> <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/4f25cfd"><code>4f25cfd</code></a>
- feat: allow all keyboard layouts natively (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/195">#195</a>) (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/182">#182</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d460480"><code>d460480</code></a>
- chore: add exec example to default config (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/221">#221</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e74ec3e"><code>e74ec3e</code></a>
- feat: move space activation into its own manager <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c3a90ec"><code>c3a90ec</code></a>
- fix: track stack line space id for proper cleanup <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/96ed81f"><code>96ed81f</code></a>
- fix: determine actual layout mode <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7b76dd5"><code>7b76dd5</code></a>
- fix: pass quiet flag through raise manager to prevent workspace switch loops <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/bf76af6"><code>bf76af6</code></a>
- fix: prevent similar crashes (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/211">#211</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/95f7b56"><code>95f7b56</code></a>
- fix: panic on slow activation change (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/211">#211</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0a8c1c7"><code>0a8c1c7</code></a>
- feat: let certain windows be insivible to rift <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/468c2ac"><code>468c2ac</code></a>
- fix: multi display behavior <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/93fdc5b"><code>93fdc5b</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/99bf93e"><code>99bf93e</code></a>
- fix: next/prev window being inverted (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/208">#208</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cb5ddb3"><code>cb5ddb3</code></a>
- fix: joining 2 windows with another (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/206">#206</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/ce7b918"><code>ce7b918</code></a>
- fix: stack_line not hot reloading <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/55c9d92"><code>55c9d92</code></a>
- fix: reapply_app_rules_on_title_change (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/197">#197</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2780e9c"><code>2780e9c</code></a>
- fix: refreshing correct window (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/203">#203</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/72061a0"><code>72061a0</code></a>
- fix: should_raise_on_mouse_over (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/197">#197</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f5d6589"><code>f5d6589</code></a>
- fix: if directional focus finds no target refocus the active window (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/197">#197</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/839344a"><code>839344a</code></a>
- fix: reset hover tracking after a warp so the next mouse move always generates a focus-follows-mouse update for the window now under the cursor. <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f30ae6e"><code>f30ae6e</code></a>
- fix: ensure layoutengine has the correct info about floating focused windows (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/197">#197</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/62b1145"><code>62b1145</code></a>
- feat: show active workspace in menubar even if empty (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/204">#204</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c13397f"><code>c13397f</code></a>
- fix: display reconfig and be less optimistic to clear display cache <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7e22fac"><code>7e22fac</code></a>
- fix: add brackets to keymap (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/195">#195</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b25bc7c"><code>b25bc7c</code></a>
- fix: upstream activation block <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/bbd6b1a"><code>bbd6b1a</code></a>
- fix: locked into a workspace <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c112786"><code>c112786</code></a>

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/axm2">@axm2</a> made their first contribution in https://github.com/acsandmann/rift/pull/221
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.2.8...v0.3.0">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.2.8-beta

<div class="changelog-release-meta">
  <time datetime="2025-12-05T15:48:41Z">December 5, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">709 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.2.8">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.2.8/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: display getting disabled (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/180">#180</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0915d2b"><code>0915d2b</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/ce9a32a"><code>ce9a32a</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.2.7...v0.2.8">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.2.7-beta

<div class="changelog-release-meta">
  <time datetime="2025-12-05T04:20:19Z">December 5, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">37 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.2.7">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.2.7/rift.default.toml">Default config ↗</a>
</div>

### Changes
* feat: side specific modifier keys (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/160">#160</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/9c28bc0"><code>9c28bc0</code></a>
* feat: more macos native looking currentworkspace view in mission control <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f274992"><code>f274992</code></a>
* fix: move focus not working with recently joined nodes (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/183">#183</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8360961"><code>8360961</code></a>
* fix: non primary display deactivating after sleep (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/180">#180</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f897349"><code>f897349</code></a>
* fix: protect against improper autoswitches (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/159">#159</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8bff8fe"><code>8bff8fe</code></a>
* fix: windows being stolen from other displays/spaces v2 (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/138">#138</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/3a5250d"><code>3a5250d</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d1f5b0a"><code>d1f5b0a</code></a>
* feat: move window to display (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/137">#137</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/35fd4a0"><code>35fd4a0</code></a>
* feat: update current workspace view when workspace changes in mission control (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/164">#164</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/ee4afc9"><code>ee4afc9</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.2.6...v0.2.7">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.2.6-beta

<div class="changelog-release-meta">
  <time datetime="2025-12-01T20:46:24Z">December 1, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">130 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.2.6">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.2.6/rift.default.toml">Default config ↗</a>
</div>

### Changes
* feat: optimize ipc; median latency down to ~5ms from ~15ms (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/184">#184</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0ff6212"><code>0ff6212</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7f316da"><code>7f316da</code></a>
* fix: toggle_space_activated not toggling to off (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/174">#174</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2c8c883"><code>2c8c883</code></a>
* fix: focus goes to windows in the hidden corner (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/145">#145</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a89ee4f"><code>a89ee4f</code></a>
* fix: resize-grow/shrink being reversed in bsp layout engine (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/178">#178</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/eef98dd"><code>eef98dd</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.2.5...v0.2.6">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.2.5-beta

<div class="changelog-release-meta">
  <time datetime="2025-11-24T06:04:08Z">November 24, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">178 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.2.5">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.2.5/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: not triggering layout refresh aggressively enough (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/156">#156</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cfedd22"><code>cfedd22</code></a>
* fix: windows not being retiled after a drag (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/156">#156</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/bf536f0"><code>bf536f0</code></a>
* fix: dragging windows between displays (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/138">#138</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/a3dd211"><code>a3dd211</code></a>
* fix: make mouse up/down tracking much more reliable (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/156">#156</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2732a42"><code>2732a42</code></a>
* fix: handling of sheet/child/pip windows in PIP (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/149">#149</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/5f8ab35"><code>5f8ab35</code></a>
* fix: erroneously auto switching on activation when leaving fullscreen <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8ffe90b"><code>8ffe90b</code></a>
* fix: ensure stacks dont get erroneously broken (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/150">#150</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e001cb7"><code>e001cb7</code></a>
* fix: layout issues (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/148">#148</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/7d95272"><code>7d95272</code></a>
* fix: use mach port as a way to only let one rift instance run at a time (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/147">#147</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/67bb7d5"><code>67bb7d5</code></a>
* fix: service can only be uninstalled if its stopped (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/147">#147</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2d4d4b6"><code>2d4d4b6</code></a>
* fix: make it autoraise a window on display switch so no mouse input is needed (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/137">#137</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8742d69"><code>8742d69</code></a>
* fix: isolate virtual workspaces better (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/145">#145</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/656a56a"><code>656a56a</code></a>
* fix: app rules (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/144">#144</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/25555e4"><code>25555e4</code></a>
* feat: focus a display (chooses last focused window or warps cursor to midpoint) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0aedbb1"><code>0aedbb1</code></a>
* feat: title changed broadcast event <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8debd00"><code>8debd00</code></a>
* fix: mouse warping when no windows (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/136">#136</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1193fe2"><code>1193fe2</code></a>
* fix: add a retry for certain windows that don't accept setbatchwindowframe (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/140">#140</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/fd20b44"><code>fd20b44</code></a>
* fix: don't crash on touchbar movements (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/116">#116</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/eba053b"><code>eba053b</code></a>
* fix: better flow from focusing between displays <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8ce9be4"><code>8ce9be4</code></a>
* fix: windows not being retiled <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/acc9075"><code>acc9075</code></a>
* feat: use ax frame change events + merge tx stores <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/93e35fe"><code>93e35fe</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.2.4...v0.2.5">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.2.4-beta

<div class="changelog-release-meta">
  <time datetime="2025-11-13T22:05:57Z">November 13, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">196 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.2.4">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.2.4/rift.default.toml">Default config ↗</a>
</div>

### Changes
* feat: close windows via cli <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/583d5e6"><code>583d5e6</code></a>
* fix: default_workspace <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/371d980"><code>371d980</code></a>
* fix: stop throwing mouse (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/136">#136</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/361d9e2"><code>361d9e2</code></a>
* perf: optimize menu bar actor <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/4010a93"><code>4010a93</code></a>
* fix: make toggle_active_space actually toggle <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1a2de75"><code>1a2de75</code></a>
* feat: move mouse to display (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/137">#137</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/db8ad22"><code>db8ad22</code></a>
* feat: menubar now supports showing workspace indexes/names instead of layouts <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2b9bf8f"><code>2b9bf8f</code></a>
* feat: query workspaces by space + incl active space/display uuid in broadcast (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/132">#132</a>) 3a32ef


<img width="173" height="39" alt="image" src="https://github.com/user-attachments/assets/6eab59c9-9b5f-4089-9072-<a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d5a44747d51f"><code>d5a44747d51f</code></a>" />
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.2.3...v0.2.4">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.2.3-beta

<div class="changelog-release-meta">
  <time datetime="2025-11-12T16:29:34Z">November 12, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">48 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.2.3">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.2.3/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: handle mouse warp better when there are no windows present <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/10e41b0"><code>10e41b0</code></a>
* fix: focus/switching with no windows + multiple spaces (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/125">#125</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/85214b0"><code>85214b0</code></a>
* fix: request refocus on the right space <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/937cb3f"><code>937cb3f</code></a>
* fix: prefer screen/space under cursor over main window space (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/125">#125</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/ae98a1c"><code>ae98a1c</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.2.2...v0.2.3">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.2.2-beta

<div class="changelog-release-meta">
  <time datetime="2025-11-12T15:21:27Z">November 12, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">8 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.2.2">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.2.2/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: menu bar cpu usage (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/129">#129</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/3b921bb"><code>3b921bb</code></a>
* fix: ignore space change with no active screens <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/3de151b"><code>3de151b</code></a>
* fix: proper screen2space mappings (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/125">#125</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/adba64f"><code>adba64f</code></a>
* fix: properly detect screen under cursor (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/120">#120</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8e3ee62"><code>8e3ee62</code></a>
* fix: correctly select window in direction (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/97">#97</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/dc3e339"><code>dc3e339</code></a>
* fix: set cgwindow shape properly (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/120">#120</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b00c56d"><code>b00c56d</code></a>
* fix: focusing between displays now respects orientation (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/97">#97</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0818fbf"><code>0818fbf</code></a>
* fix: mission control on extended displays (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/120">#120</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b36f15b"><code>b36f15b</code></a>
* fix: it is possible to have a spaceid of 0 <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/6f2fb80"><code>6f2fb80</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.2.1...v0.2.2">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.2.1-beta

<div class="changelog-release-meta">
  <time datetime="2025-11-10T20:10:22Z">November 10, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">52 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.2.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.2.1/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: app activation race (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/108">#108</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/4b742f3"><code>4b742f3</code></a>
* chore: remove autofix from config <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/47a029c"><code>47a029c</code></a>
* fix: update menubar on window frame changes too <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e8b2192"><code>e8b2192</code></a>
* feat: even faster menubar drawing
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.2.0...v0.2.1">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.2.0-beta

<div class="changelog-release-meta">
  <time datetime="2025-11-09T21:04:24Z">November 9, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">46 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.2.0">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.2.0/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: crashes with normalizedPosition (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/117">#117</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cdb1f35"><code>cdb1f35</code></a>
* feat: ResizeWindowBy for specific window resizing <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/35a0d7b"><code>35a0d7b</code></a>
* feat: use carbon for process events (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/111">#111</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/3a4c87d"><code>3a4c87d</code></a>
* feat: per display gaps + space/display uuid mapping (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/113">#113</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/e2f0ca9"><code>e2f0ca9</code></a>
* fix: dont erroneously float windows <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/907d2d4"><code>907d2d4</code></a>
* feat: hotload app rules <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/19fa4f6"><code>19fa4f6</code></a>
* fix: app rules (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/71">#71</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/b10ba24"><code>b10ba24</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/cf7210c"><code>cf7210c</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d7ad836"><code>d7ad836</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/39f566b"><code>39f566b</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/af57651"><code>af57651</code></a>
* fix: nsapp:run for tahoe <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/9e2413f"><code>9e2413f</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.1.1...v0.2.0">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.1.1-beta

<div class="changelog-release-meta">
  <time datetime="2025-11-06T03:14:01Z">November 6, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">68 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.1.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.1.1/rift.default.toml">Default config ↗</a>
</div>

**Whats Changed:**
* fix: handle native macos app hides <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8344394"><code>8344394</code></a>
* feat: move window to workspace by window id (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/105">#105</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f7486d7"><code>f7486d7</code></a>

**New Features:**
* you can now move any window (instead of only the focused) a workspace of your choosing: `cargo run --bin rift-cli execute workspace move-window <workspace_index> <window_id>`. this should open up a lot of possibilities for scripting rift._

<hr class="changelog-release-divider" />

## v0.1.0-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-30T02:24:38Z">October 30, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">133 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.1.0">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.1.0/rift.default.toml">Default config ↗</a>
</div>

**Whats Changed**
* fix: mission control invocation via cli (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/100">#100</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/8372a0d"><code>8372a0d</code></a>
* feat: toggle-stack + toggle-orientation !BREAKING! <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0a7fb07"><code>0a7fb07</code></a>
* fix: unjoin_windows <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/955a913"><code>955a913</code></a>
* feat: fast space switches no longer block <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/099ee1d"><code>099ee1d</code></a>
* fix: stackline being above all + showing when window toggled as fullscreen (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/96">#96</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/5b1c1f4"><code>5b1c1f4</code></a>
* fix: ability to set the window focus lost randomly (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/82">#82</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/c45b4b4"><code>c45b4b4</code></a>
* fix: insert windows after selection not root (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/86">#86</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1bcbfcd"><code>1bcbfcd</code></a>
* fix: float windows when specified (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/71">#71</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0bdd0f5"><code>0bdd0f5</code></a>

**Breaking Changes**
* `stack_windows` and `unstack_windows` are not `toggle_stack`
* `toggle_tile_orientation` is now `toggle_orientation`
* `toggle_orientation` is a catch all: it will change the orientation of both stacks and splits(normal tiles)

<hr class="changelog-release-divider" />

## v0.0.10.1-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-27T21:12:52Z">October 27, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">51 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.10.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.10.1/rift.default.toml">Default config ↗</a>
</div>

**Whats Changed**
* chore: workspace_auto_back_and_forth default to off <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1d534a3"><code>1d534a3</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.10...v0.0.10.1">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.10-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-27T20:30:20Z">October 27, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">4 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.10">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.10/rift.default.toml">Default config ↗</a>
</div>

### Changes
* refactor: decompose and reduce reactor code complexity (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/78">#78</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/3d34191"><code>3d34191</code></a>
* fix: windows being lost during space switches <a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/93">#93</a> <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/224e993"><code>224e993</code></a>
* fix: selection descends to stack immediately, for navigation to work (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/94">#94</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/bdecc66"><code>bdecc66</code></a>
* feat: Allow switching to last workspace on duplicate focus (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/92">#92</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/ccc8fd9"><code>ccc8fd9</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.9...v0.0.10">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.9-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-25T16:21:44Z">October 25, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">51 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.9">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.9/rift.default.toml">Default config ↗</a>
</div>

### Changes
* Update path for embedding Info.plist by <a class="changelog-reference changelog-reference--author" href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/74
* Beautify stackline ui by <a class="changelog-reference changelog-reference--author" href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/88
* fix: mouse warping by <a class="changelog-reference changelog-reference--author" href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/89
* fix <a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/83">#83</a>: Respect stack default orientation when unstacking by <a class="changelog-reference changelog-reference--author" href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/85
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.8...v0.0.9">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.8-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-23T18:56:10Z">October 23, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">47 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.8">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.8/rift.default.toml">Default config ↗</a>
</div>

### Changes
* refactor: rewrite and fix fn `get_focused_frame_for_index` by <a class="changelog-reference changelog-reference--author" href="https://github.com/alle-ox">@alle-ox</a> in https://github.com/acsandmann/rift/pull/77
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.7...v0.0.8">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.7-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-23T01:43:46Z">October 23, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">20 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.7">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.7/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.6.2...v0.0.7">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.6.2-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-22T21:26:36Z">October 22, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">8 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.6.2">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.6.2/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.6.1...v0.0.6.2">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.6.1-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-22T21:02:31Z">October 22, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">4 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.6.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.6.1/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.6...v0.0.6.1">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.6-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-22T18:40:00Z">October 22, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">10 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.6">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.6/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: dragging windows via mission control no longer *sometimes* loses windows <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/dba79c4"><code>dba79c4</code></a>
* feat: make GetConfig useful <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/2572328"><code>2572328</code></a>
* feat: add function keys as possible keys <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/1246434"><code>1246434</code></a>
* feat: configurable default stack orientation + perpendicular (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/65">#65</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/ded7a1f"><code>ded7a1f</code></a>
* feat: toggle fullscreen within gaps (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/72">#72</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/89ae444"><code>89ae444</code></a>
* fix rendering and hot reload issues with stackline by <a class="changelog-reference changelog-reference--author" href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/73
* feat: expose mission_control + save_on_exit to cli (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/54">#54</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/0f387ab"><code>0f387ab</code></a>
* fix: mach port response detection <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/aca20cb"><code>aca20cb</code></a> + <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/4825914"><code>4825914</code></a>
* feat: toggle between vert/horiz tile layout (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/68">#68</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/d13249b"><code>d13249b</code></a>
* fix: hot reload hot keys properly (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/69">#69</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/f1e1cb3"><code>f1e1cb3</code></a>
* fix: floating assignments with no workspace (<a class="changelog-reference changelog-reference--issue" href="https://github.com/acsandmann/rift/issues/71">#71</a>) <a class="changelog-reference changelog-reference--commit" href="https://github.com/acsandmann/rift/commit/deb6305"><code>deb6305</code></a>
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.5...v0.0.6">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.5-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-21T21:54:41Z">October 21, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">28 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.5">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.5/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: improved focus behavior for traditional stack layouts by <a class="changelog-reference changelog-reference--author" href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/64
* fix: windows being lost after fullscreen by <a class="changelog-reference changelog-reference--author" href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/57



huuuugggeee improvements relating to fullscreening windows, moving windows btwn macos' spaces through mission control, and dragging windows btwn monitors!
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.4.1...v0.0.5">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.4.1-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-20T20:33:15Z">October 20, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">30 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.4.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.4.1/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.4...v0.0.4.1">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.4-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-19T22:48:05Z">October 19, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">29 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.4">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.4/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: instant menu disappearing and mouse warping behavior by <a class="changelog-reference changelog-reference--author" href="https://github.com/sytherax">@sytherax</a> in https://github.com/acsandmann/rift/pull/55
* fix: embed info.plist by <a class="changelog-reference changelog-reference--author" href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/62
* Fix/brew by <a class="changelog-reference changelog-reference--author" href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/63

### Contributors
* <a class="changelog-reference changelog-reference--author" href="https://github.com/sytherax">@sytherax</a> made their first contribution in https://github.com/acsandmann/rift/pull/55
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.3...v0.0.4">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.3-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-16T03:08:24Z">October 16, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">62 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.3">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.3/rift.default.toml">Default config ↗</a>
</div>

_No release notes were provided._
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.2...v0.0.3">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.2-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-15T19:19:47Z">October 15, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">9 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.2">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.2/rift.default.toml">Default config ↗</a>
</div>

### Changes
* fix: jetbrains/wezterm by <a class="changelog-reference changelog-reference--author" href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/43
* fix: make rift-cli pipeable by <a class="changelog-reference changelog-reference--author" href="https://github.com/alle-ox">@alle-ox</a> in https://github.com/acsandmann/rift/pull/35
* fix/erroneous window delete by <a class="changelog-reference changelog-reference--author" href="https://github.com/acsandmann">@acsandmann</a> in https://github.com/acsandmann/rift/pull/44
<p class="changelog-compare"><a href="https://github.com/acsandmann/rift/compare/v0.0.1.1...v0.0.2">Compare changes →</a></p>
<hr class="changelog-release-divider" />

## v0.0.1.1-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-15T01:26:20Z">October 15, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">20 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.1.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.1.1/rift.default.toml">Default config ↗</a>
</div>

emergency fix for pathfinding in service builder

<hr class="changelog-release-divider" />

## v0.0.1-beta

<div class="changelog-release-meta">
  <time datetime="2025-10-15T00:59:19Z">October 15, 2025</time>
  <span class="changelog-release-downloads" title="Across 1 release asset">7 downloads</span>
  <a href="https://github.com/acsandmann/rift/releases/tag/v0.0.1">GitHub release ↗</a>
  <a href="https://github.com/acsandmann/rift/blob/v0.0.1/rift.default.toml">Default config ↗</a>
</div>

rifts first release, and also a test



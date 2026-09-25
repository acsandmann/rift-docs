import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repository = process.env.RELEASES_REPOSITORY ?? 'acsandmann/rift';
const apiBase = `https://api.github.com/repos/${repository}/releases`;
const githubBase = `https://github.com/${repository}`;
const outputPath = resolve(dirname(fileURLToPath(import.meta.url)), '../src/content/docs/changelog.md');
const token = process.env.GH_TOKEN ?? process.env.GITHUB_TOKEN;

async function fetchReleases() {
  const releases = [];

  for (let page = 1; ; page += 1) {
    const headers = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'rift-docs-changelog-generator',
      'X-GitHub-Api-Version': '2022-11-28',
    };

    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(`${apiBase}?per_page=100&page=${page}`, { headers });
    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`GitHub releases request failed (${response.status}): ${detail}`);
    }

    const pageReleases = await response.json();
    releases.push(...pageReleases.filter((release) => !release.draft));

    if (pageReleases.length < 100) break;
  }

  return releases;
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
}

function formatCount(count) {
  return new Intl.NumberFormat('en-US').format(count);
}

function linkReferences(body) {
  return body
    .replace(/(^|[^\w])@([a-z\d](?:[a-z\d-]{0,38}))/gi, '$1<a class="changelog-reference changelog-reference--author" href="https://github.com/$2">@$2</a>')
    .replace(/(^|[^\w/])#(\d+)\b/g, '$1<a class="changelog-reference changelog-reference--issue" href="' + githubBase + '/issues/$2">#$2</a>')
    .replace(/(^|[^\w/])([0-9a-f]{7,40})\b/gi, '$1<a class="changelog-reference changelog-reference--commit" href="' + githubBase + '/commit/$2"><code>$2</code></a>');
}

function indentReleaseHeadings(body) {
  return body
    .trim()
    .replace(/\r\n/g, '\n')
    .replace(/^(#{1,5})\s+(.+?)\s*$/gm, (_, hashes, heading) => {
      const lowerHeading = heading.toLowerCase();
      const normalized = lowerHeading === "what's changed" || lowerHeading === 'whats changed'
        ? 'Changes'
        : lowerHeading === 'new contributors'
          ? 'Contributors'
          : heading;
      return `### ${normalized}`;
    })
    .replace(/[ \t]+$/gm, '');
}

function renderRelease(release, index, releases) {
  const label = release.name?.trim() || release.tag_name;
  // Early beta releases use a -beta label, but their Git tags omit that suffix.
  const configRef = release.tag_name.replace(/-beta$/, '');
  const configUrl = `${githubBase}/blob/${encodeURIComponent(configRef)}/rift.default.toml`;
  const rawBody = (release.body || '').replace(/\r\n/g, '\n');
  const compareUrl = rawBody.match(/\*\*Full Changelog\*\*:\s*(https?:\/\/\S+)/i)?.[1];
  const body = indentReleaseHeadings(
    rawBody.replace(/^\*\*Full Changelog\*\*:\s*https?:\/\/\S+\s*$/gim, '')
  );
  const linkedBody = linkReferences(body) || '_No release notes were provided._';
  const assets = Array.isArray(release.assets) ? release.assets : [];
  const downloadCount = assets.reduce((total, asset) => total + (asset.download_count ?? 0), 0);
  const downloadStat = assets.length > 0
    ? `<span class="changelog-release-downloads" title="Across ${assets.length} release asset${assets.length === 1 ? '' : 's'}">${formatCount(downloadCount)} download${downloadCount === 1 ? '' : 's'}</span>`
    : '';
  const divider = index < releases.length - 1 ? '<hr class="changelog-release-divider" />' : '';

  return `## ${label}

<div class="changelog-release-meta">
  <time datetime="${release.published_at}">${formatDate(release.published_at)}</time>
  ${downloadStat}
  <a href="${release.html_url}">GitHub release ↗</a>
  <a href="${configUrl}">Default config ↗</a>
</div>

${linkedBody}
${compareUrl ? `<p class="changelog-compare"><a href="${compareUrl}">Compare changes →</a></p>` : ''}
${divider}`;
}

const releases = await fetchReleases();
const content = `---
title: Changelog
description: Release history and notable changes for Rift.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

Rift's release notes, newest first. Each entry links back to its original [GitHub release](https://github.com/${repository}/releases).

${releases.map(renderRelease).join('\n\n')}
`;

await writeFile(outputPath, content);
console.log(`Wrote ${releases.length} releases to ${outputPath}`);

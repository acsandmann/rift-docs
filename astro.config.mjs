import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNext from 'starlight-theme-next';

const repository = 'acsandmann/rift-docs';

export default defineConfig({
  site: 'https://acsandmann.github.io',
  base: process.env.SITE_BASE ?? '/rift-docs',
  integrations: [starlight({
    title: 'Rift Docs',
    description: 'Documentation for Rift, a macOS tiling window manager.',
    social: [{ icon: 'github', label: 'GitHub', href: `https://github.com/${repository}` }],
    customCss: ['./src/styles/custom.css'],
    sidebar: [
      { label: 'Start here', items: ['index', 'quick-start', 'installation', 'configuration'] },
      {
        label: 'Layouts',
        collapsed: false,
        items: [
          { label: 'Overview', slug: 'layouts' },
          { label: 'Traditional', slug: 'layouts/traditional' },
          { label: 'BSP', slug: 'layouts/bsp' },
          { label: 'Master-stack', slug: 'layouts/master-stack' },
          { label: 'Stack', slug: 'layouts/stack' },
          { label: 'Scrolling', slug: 'layouts/scrolling' },
        ],
      },
      {
        label: 'Guides',
        collapsed: true,
        items: [
          { label: 'Layout guide', slug: 'guides/layouts' },
          { label: 'Window management', slug: 'guides/window-management' },
          { label: 'Virtual workspaces', slug: 'guides/workspaces' },
          { label: 'Keybindings', slug: 'guides/keybindings' },
          { label: 'App rules', slug: 'guides/app-rules' },
          { label: 'Gestures', slug: 'guides/gestures' },
          { label: 'Troubleshooting', slug: 'guides/troubleshooting' },
        ],
      },
      {
        label: 'Ecosystem',
        collapsed: true,
        items: [
          { label: 'Plugins', slug: 'ecosystem/plugins' },
          { label: 'Integrations', slug: 'ecosystem/integrations' },
          { label: 'Community configurations', slug: 'ecosystem/configurations' },
        ],
      },
      {
        label: 'Configuration reference',
        collapsed: true,
        items: [
          { label: 'Overview', slug: 'reference/configuration' },
          { label: 'General settings', slug: 'reference/configuration/general' },
          { label: 'Layout settings', slug: 'reference/configuration/layouts' },
          { label: 'Scrolling settings', slug: 'reference/configuration/scrolling' },
          { label: 'Gesture settings', slug: 'reference/configuration/gestures' },
          { label: 'UI settings', slug: 'reference/configuration/ui' },
          { label: 'Virtual workspaces', slug: 'reference/configuration/virtual-workspaces' },
          { label: 'App rules', slug: 'reference/configuration/app-rules' },
          { label: 'Keybindings', slug: 'reference/configuration/keybindings' },
          { label: 'Modifier combinations', slug: 'reference/configuration/modifiers' },
          { label: 'Commands and startup', slug: 'reference/configuration/commands' },
        ],
      },
    ],
    editLink: { baseUrl: 'https://github.com/acsandmann/rift-docs/edit/main/' },
    head: [{ tag: 'meta', attrs: { name: 'generator', content: 'Rift docs generator' } }],
    plugins: [starlightThemeNext()],
  })],
});

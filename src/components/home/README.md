# Rift homepage

`HomeHero.astro` adapts Starlight’s Hero slot for the root splash page and delegates to Starlight’s standard Hero everywhere else. The theme still owns the header, navigation, page shell, search, and footer. Homepage styles are component-scoped; the two shell rules are gated by `.rift-home`.

`Homepage.astro` owns product copy, optimized images, playback, and installation. `Layouts.astro` uses native radio controls and CSS for the five schematic layout illustrations. `Ambient.astro` owns the decorative CSS frames and their visibility/reduced-motion lifecycle. No client framework or animation library is needed.

Assets are genuine Rift repository captures: the desktop poster is the first frame of the existing `public/rift-demo.webp`, the menu image is `assets/menu_menu.png`, and `public/rift-demo.mp4` is an H.264 conversion of `assets/demo.gif` (960×624, CRF 24, faststart). The video loads only on request. Astro produces responsive WebP images from the PNG sources.

Copy was checked against the v0.7.0 release, its bundled configuration, layout systems, and the installation/workspace/gesture guides. The illustrations explain layout geometry; they are not application screenshots. Future marketing changes should continue to use released behavior.

Links use `import.meta.env.BASE_URL`. Verify both `/rift-docs/` and `/rift-docs/latest/`, including the existing latest-build rewriting step. Analytics remain in the site configuration; the two installation actions have homepage-specific event attributes.

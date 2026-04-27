---
title: "2.0.0.rc.2 - esbuild"
date: 2026-03-01
locale: "en"
description: "It is no longer necessary to use UNPKG ever again when you can simply have everything locally... I hope I did not break anything with this update."
layout: layouts/base.html
back: /content/en/changelog/index.html
tags: ["2.0.rc", "big"]
---

<div class="changelog-card new">
  <h1>Added</h1>
  <div class="changelog-card-content">
    <ul>
      <li>esbuild, this software should help me optimize and compile all my scripts and dependencies that I used to load in index.html into a single .js file, bundled and minified to consume the least space possible while also loading as fast as possible.</li>
      <li>Mithril.js installed locally, no longer fetched via UNPKG.</li>
      <li>Swup installed locally, no longer fetched via UNPKG.</li>
      <li>Sidebar images, now every 10 seconds it switches between random images to avoid leaving the sidebar empty because I cannot think of anything to add there for now.</li>
      <li>New minecraft legacy edition blog :3</li>
      <li>You can now also see the latest changelog and blog entries on the home page so it is not necessary to constantly enter them to check for new content.</li>
    </ul>
  </div>
</div>

<div class="changelog-card change">
  <h1>Changes</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Stylelint updated, 17.3.0 > 17.4.0</li>
      <li>CSS "styles" fully refactored, now all classes have consistent and proper names instead of being things like "div-inside", "div-div", etc.</li>
      <li>Index.html fully compressed, now it only loads what is necessary, styles.css and app.js, no longer needs to load multiple scripts separately and UNPKG dependencies.</li>
      <li>Several images and banners were compressed.</li>
      <li>Improvements in the markdown of the repository readme, several of those things will be added to the site in the future, essentially the "Credits"</li>
    </ul>
  </div>
</div>

<div class="changelog-card fix">
  <h1>Fixes</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Broken links in the sitemap after the last update that split it into 3 parts, now all 3 are in the same sitemap, while the sidebar rss leads to the general one.</li>
      <li>Fixes in the rain effect that was not scaling correctly with the browser window size and when it did it lost its color and appearance defined by CSS. It should now work without any issues.</li>
      <li>Broken favicons in changelogs and blogs I think?</li>
      <li>The "link" style was added back because it seems I removed it accidentally breaking several elements with the "a" tag that no longer looked like links. All links in about me still do not have the fix due to aesthetics.</li>
    </ul>
  </div>
</div>

<div class="changelog-card del">
  <h1>Removals</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Several images and videos were deleted as they are not planned to be used again, an animated banner used in my old layout was archived.</li>
    </ul>
  </div>
</div>
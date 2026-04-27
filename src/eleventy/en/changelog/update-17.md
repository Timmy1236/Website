---
title: "2.0.0 - Recode!"
date: 2026-04-11
locale: "en"
description: "Oh God. I was not expecting this recode to take so long and require so many changes to finally have a version that I like."
layout: layouts/base.html
back: /content/en/changelog/index.html
tags: ["2.0", "big"]
---

<div class="changelog-card info">
  <h1>Information</h1>
  <div class="changelog-card-content">
    <ul>
      <li>This is the first time I integrate commits into the changelog. Sadly I am putting this together after making a lot of commits and it is becoming a bit ""complicated"" to document everything. Important to remember this for the next update.</li>
    </ul>
  </div>
</div>

<div class="changelog-card new">
  <h1>Added</h1>
  <div class="changelog-card-content">
    <ul>
      <li><a href="https://github.com/Timmy1236/Website/commit/5602d1353cbb9c2de60b285ddc9ab23853a64832">5602d13</a> The source code of the website is now written in 'TypeScript', this should help a lot in the future so scripts stop breaking every update.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/83ba1dd047e67ed7e270d7d007b3163d591875fe">83ba1dd</a> Pixel icons for navigation buttons made in Aseprite.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/e5300c04782d82f4f8b4f5881f02e9b120046c0e">e5300c0</a> New page: 'links'. Neighbors and various links with credits and resources are located there for now.</li>
      <li><a href="https://github.com/Timmy1236/Website/commit/d328c1035e993362e9054ac0926970348f73ab0c">d328c10</a> Dependency: 'Concurrently' added and configured in the project.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/73ef2af1ee34340378895d6f111c6d0d1d195ac0">73ef2af</a> Integrating colors in the console for better debug.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/c226f631e7a34160b38707d9307a0aeec378b967">c226f63</a> Fetch latest commits from the repository directly on the website.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/0b841626c6ea2c03080967637573a393e51f282b">0b84162</a> New panel type: Panel tabs
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/6e0e7be480eeb978a1449744cfe75dcb3335e10f">6e0e7be</a> Section: 'about me' now shows what I am doing on my PC thanks to Discord spyware.</li>
      <li><a href="https://github.com/Timmy1236/Website/commit/a554faa12baf038eb618936d6c46d99b263dc642">a554faa</a> Settings logic now has a mini version control, this will help future updates if there are big changes that could break previous settings... like now!
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/2a27085424fc75cf3f78a75b3339be7eeff61489">2a27085</a> Completely new tooltip that now follows the mouse instead of being static.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/8a1b713f22c15bb292b09f4b69d94ccd4d89cb7e">8a1b713</a> Nav buttons now support i18n.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/406fb39a7ec2e787370cf74fc20c324d9ae055ac">406fb39</a> Nav buttons now support tooltips.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/e32c3f81ed0b43c2558f9e0cbc0971502e239e48">e32c3f8</a> All changelogs were rewritten for better documentation and now titles include their versions. Fun fact: You are seeing this commit right now, this update was made for this update, what did I say?
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/3778c5cae73ae31078e4b788763e4c06ac61f948">3778c5c</a> All panel titles are now paragraphs instead of h1, browsers like chromium applied a forced style and it looked bad, now it should be fixed, I guess, maybe I will tweak it again in future updates, I do not like it much for now.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/45c4d18d6e32e0868537bf2ff00071b671399c88">45c4d18</a> New neighbors, new credits, extra stuff :3
      </li>
    </ul>
  </div>
</div>

<div class="changelog-card change">
  <h1>Changes</h1>
  <div class="changelog-card-content">
    <ul>
      <li><a href="https://github.com/Timmy1236/Website/commit/6ee54c321bd49568860c26de7db81a5e5198d330">6ee54c3</a> Script: 'mouse-click.ts' refactored, should cause less lag and network usage as it now uses AudioBuffers.</li>
      <li><a href="https://github.com/Timmy1236/Website/commit/c143e706bd383c2c2cf2d17f90c02783527dd2a8">c143e70</a> Settings logic refactored from scratch, should be more readable and avoid previous errors.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/5beef7590757ebc3cc357402947bf6bc4ddfe3f7">5beef75</a> i18n logic refactored.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/f6690135a89025cfc6caff4a72481b4612f84ff4">f669013</a> The readable font should be more readable now... yeah.</li>
      <li><a href="https://github.com/Timmy1236/Website/commit/93ad2d755d2695fa628d6198bc92d4e2987a3cbc">93ad2d7</a> All scripts and css are now outside the public folder, no longer visible to the user.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/acf3854ec245b7976c4f44a17a3ef6957858373a">acf3854</a> The page now loads a single minified css to reduce load times and network usage.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/ca97b40117cd41ed35583a5950a2d65fa0bdc056">ca97b40</a> Date format changed to a simpler one.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/5c49ba231029301c69a3568df394f3bff8dbf903">5c49ba2</a> esbuild updated 0.27.4 > 0.28.0
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/d4e9531e23196ab5aa33b1893f0eff07196ba8d6">d4e9531</a> 11ty updated 3.1.2 > 3.1.5
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/18a642ce2e1e813058542258367b5931298267da">18a642c</a> Section: 'configuration' now uses the new tab panel instead of a long panel.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/ca818d8132a59448238c5ff32817bd99cfc2b9de">ca818d8</a> Section: 'home' now uses dual panels for blog and changelog.
      </li>      
    </ul>
  </div>
</div>

<div class="changelog-card fix">
  <h1>Fixes</h1>
  <div class="changelog-card-content">
    <ul>
      <li><a href="https://github.com/Timmy1236/Website/commit/dc2676836a27af8414ca6d7b104343f9bc5f20ac">dc26768</a> The script handling background music logic was still loading the full audio file... even when the setting indicated it should be off :3
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/8a74312f216e305d8792b9544ea073e750ac8217">8a74312</a> Vignette effect not loading correctly, sometimes it worked and sometimes it did not.
      </li>
    </ul>
  </div>
</div>

<div class="changelog-card del">
  <h1>Removals</h1>
  <div class="changelog-card-content">
    <ul>
      <li><a href="https://github.com/Timmy1236/Website/commit/df9689ef3e6d2d26eacf052dbfa14fed10f512ca">df9689e</a> Theme: Details green removed as it is complicated to make it compatible with the new layout, rip :(
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/04f23c8225f10f17bb6e6ad4ec07c60a6eac09e0">04f23c8</a> Script: nekoweb-stats removed as Nekoweb SSI is now used.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/58eb79f88f6d32e5dc46b1c864dcb53e9f9e81c7">58eb79f</a> Dependency: Swup removed.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/60d0a81b800a63734165b0cc0a2b55caf707838d">60d0a81</a> Sidebar images and the song 'Grace FM' removed for certain reasons.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/a15e215d7925941019be79fe7872e4d71e00d217">a15e215</a> Archive 2025 removed due to too many errors, I will add it back in the future but properly archived.
      </li>
    </ul>
  </div>
</div>
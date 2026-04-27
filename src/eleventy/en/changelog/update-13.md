---
title: "2.0.0.alpha.3 - Polish"
date: 2026-02-03
locale: "en"
description: "Fixing, adding and changing things that were somewhat wrong with the previous recode. This should be the last recode I do."
layout: layouts/base.html
back: /content/en/changelog/index.html
tags: ["2.0.alpha", "big"]
---

<div class="changelog-card info">
  <h1>Information</h1>
  <div class="changelog-card-content">
    <ul>
      <li>With all these new changes I made, not everything turned out as well as possible ('' •᷄ ᴗ •᷅ ). This update is focused on fixing most of the things that broke with the previous recode.</li>
    </ul>
  </div>
</div>

<div class="changelog-card new">
  <h1>Added</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Automatic RSS generator, now all changelogs and blogs should be created at build time, this will fix any issue I had before with my feed not updating correctly.</li>
    </ul>
  </div>
</div>

<div class="changelog-card change">
  <h1>Changes</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Changed the image host of the nyani58 button.</li>
      <li>A more "clean" CSS, I removed most effects, made shadows and transparent backgrounds more opaque, added more padding to center content, removed most rounded borders, etc. </li>
      <li>The buttons are now more 'clicky' :3, they have a completely new animation and now have a special effect when clicked.</li>
      <li>New animated background and mp3 player for all pages generated with 11ty, also now swup.js is used so there is a transition animation every time you change pages and the browser does not need to fully reload when navigating.</li>
      <li>Rewritten all texts and updated the json files for i18n.</li>
    </ul>
  </div>
</div>

<div class="changelog-card fix">
  <h1>Fixes</h1>
  <div class="changelog-card-content">
    <ul>
      <li>CSS inconsistencies, there were many divs missing important classes and others that looked the same but when switching themes they broke or did not update with new variables, etc.</li>
      <li>Some scripts were running multiple times and duplicating causing performance issues depending on how many times you switched pages on the home, this should no longer happen and now each script runs separately depending on the page, i18n should run once each time you enter a new page as a precaution.</li>
    </ul>
  </div>
</div>

<div class="changelog-card del">
  <h1>Removals</h1>
  <div class="changelog-card-content">
    <ul>
      <li>pursuer</li>
    </ul>
    <img src="https://i.pinimg.com/736x/14/7d/be/147dbe99a775ed1c0d98dba85649f5a1.jpg" alt="NOOOOOOOOOOO" width="200"/>
  </div>
</div>
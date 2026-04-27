---
title: "1.6.0 - Styles"
date: 2025-11-08
locale: "en"
description: "Do you know what is the most important thing? Presentation!"
layout: layouts/base.html
back: /content/en/changelog/index.html
tags: ["1.6", "big"]
---

<div class="changelog-card info">
  <h1>Information</h1>
  <div class="changelog-card-content">
    <ul>
      <li>I rewrote a large part of the general code of the website before starting to make a new layout, the code was so terrible that if I made a change everything broke. This should now be fixed</li>
    </ul>
  </div>
</div>

<div class="changelog-card new">
  <h1>Added</h1>
  <div class="changelog-card-content">
    <ul>
      <li>The page now has a sitemap, I plan to add more pages or keep inserting more links but this time more in the sitemap instead of leaving everything packed into the nav, for now it does not have many things.</li>
      <li>New options in the settings section, now there is a whole theme system that applies to the general style of the page.</li>
    </ul>
  </div>
</div>

<div class="changelog-card change">
  <h1>Changes</h1>
  <div class="changelog-card-content">
    <ul>
      <li>I replaced the changelog theme with a simple one, I like to overuse CSS a lot but it can make texts impossible to read, so these types of pages that will mostly have text now have a unique and simple style.</li>
      <li>I completely remade the about-me, I merged my profile section and the discord one so now the pfp and username update in real time depending on my profile stats, it will also show whether I am online or not when you enter.</li>
      <li>I modified elements.css so the site box is simpler and nicer than before instead of having a whole blurry image.</li>
    </ul>
  </div>
</div>

<div class="changelog-card fix">
  <h1>Fixes</h1>
  <div class="changelog-card-content">
    <ul>
      <li>I adjusted the custom mouse icon because it turned out it was slightly offset and it looked weird where you had to click.</li>
      <li>I fixed a lot of i18n strings and added more support to other strings that were not translated, there are still several more I identified but I do not have time to fix them in this update.</li>
      <li>I fixed some pages of the mini easter eggs that were in the about me, like the minecraft one or the half life 2 one that did not have the font paths correctly set, causing them to use the generic arial and breaking several CSS elements.</li>
    </ul>
  </div>
</div>

<div class="changelog-card del">
  <h1>Removals</h1>
  <div class="changelog-card-content">
    <ul>
      <li>I completely removed the "Flash Archive" section in others for now.</li>
      <li>I removed a lot of files that were no longer used on the site to save some size and simplify the repository directories.</li>
    </ul>
  </div>
</div>
---
title: "1.2.0 - Refactor"
date: 2024-05-27
locale: "en"
description: "Magically, it turns out that having all your website files in the same root can be a serious problem as you keep progressing and adding new things, who the hell would have thought?"
layout: layouts/base.html
back: /content/en/changelog/index.html
tags: ["1.2", "medium"]
---

<div class="changelog-card change">
  <h1>Changes</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Several HTML and CSS codes were rewritten from scratch.</li>
      <li>Most files, scripts, etc. are now in different organized folders, this does not make any visual change to the page, but this is to improve future updates and keep the project cleaner in one way or another.</li>
      <li>The MP3 control was completely removed, but the logic still works in the background, now the page detects if you are viewing it or not, if you are not viewing it, the music will automatically stop so it is not an annoyance in the background.</li>
      <li>I remade the nav again but now it is a div with several custom css classes??? I do not know if this is correct, I do not know much about web development, I hope I am not messing it up with that.</li>
    </ul>
  </div>
</div>
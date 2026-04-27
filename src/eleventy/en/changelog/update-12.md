---
title: "2.0.0.alpha.2 - Mithril.js and 11ty"
date: 2026-01-17
locale: "en"
description: "With the help of the new design of my page, having the changing content in a single place allows me to switch pages in a smooth way without needing to reload the entire HTML every time the user clicks a NAV button! I was able to do this thanks to Mithril.js. Also, I have started using 11ty, a static site generator, instead of writing all the HTML again for each changelog, blog, sitemap, etc. Now I can use a single base html and write each article from a simple markdown!"
layout: layouts/base.html
back: /content/en/changelog/index.html
tags: ["2.0.alpha", "big"]
---

<div class="changelog-card info">
  <h1>Information</h1>
  <div class="changelog-card-content">
    <ul>
      <li>New year, new me, literally. Since I moved to Nekoweb I have focused on learning more about how frontend development works, I put aside my other projects to fully dedicate myself to figuring out how to use a static site generator. This update brings: [mithril.js](https://mithril.js.org/) and [11ty](https://www.11ty.dev/), I described how they work briefly in the added section. I highly recommend visiting their sites to see their full potential, I am serious.</li>
    </ul>
  </div>
</div>

<div class="changelog-card new">
  <h1>Added</h1>
  <div class="changelog-card-content">
    <ul>
      <li>'Mithril.js' Now the page instead of running purely on static HTML, everything is based on a simple index.html that uses mithril.js as a virtual DOM, basically when you switch pages, instead of fully reloading an entire HTML, even if most of it is just copy paste, now only the content changes, without wasting network for nothing, this should even be faster, all my pages are loaded instantly in the script and when you click a button, boom, instant switch!</li>
      <li>'11ty' The sitemap, blog, changelog, and possibly more pages in the future will no longer be simple copies of the same HTML with different text, now everything is generated instantly thanks to 11ty, a static site generator, I just create a base HTML and that is it, then if I want to create something new, like a sitemap, I make a markdown and only write what I want to show, a list with links, an h1 title, and nothing else, 11ty does all the work, recommended!</li>
    </ul>
  </div>
</div>

<div class="changelog-card change">
  <h1>Changes</h1>
  <div class="changelog-card-content">
    <ul>
      <li>I reorganized the directories again, now scripts are organized by categories and all 11ty tools and generators are separated from the deploy, basically nekoweb will only host what is visible while all my tools and bases are stored outside for future updates, this should help avoid uploading too much weight with node modules and all that stuff.</li>
    </ul>
  </div>
</div>

<div class="changelog-card fix">
  <h1>Fixes</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Minor fixes in some scripts I found while organizing them, nothing important.</li>
    </ul>
  </div>
</div>
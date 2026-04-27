---
title: Changelog
description: History of changes and updates to the website
layout: layouts/base.html
locale: "en"
---

<h1 class="text-header">Update History</h1>

A history of all features added, modified, removed or fixed that were made to this website over time. They are documented in an easy to understand way, but you can see the real and complete list of all changes from the commits made in the repository: <a href="https://github.com/Timmy1236/Website/commits/main/">github.com/Timmy1236/Website/commits</a>.

<br>
{% for post in collections.changelog_en | reverse %}

<div class="post-card">

  <a class="post-card-title" href="{{ post.url | url }}">
    {{ post.data.title }}
  </a>

  <div class="post-card-date">{{ post.data.date | readableDate }}</div>

  <p class="post-card-description">{{ post.data.description }}</p>

</div>

{% endfor %}

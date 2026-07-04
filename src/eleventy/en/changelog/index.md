---
title: Changelog
description: History of changes and updates to the website
layout: layouts/base.html
locale: "en"
---

Here you'll find a complete history of all the updates made to the website. You can view more details about the changes I make in the public repository: <a href="https://github.com/Timmy1236/Website/commits/main/">github.com/Timmy1236/Website</a>.

<div class="post-list">
{% for post in collections.changelog_en | reverse %}
  <div class="post-card">
    <span class="post-card-title"><a class="post-card-link" href="{{ post.url | url }}"> {{ post.data.title }} </a> <span class="post-card-date">{{ post.data.date | readableDate }}</span></span>
    <p class="post-card-description">{{ post.data.description }}</p>
  </div>
{% endfor %}
</div>
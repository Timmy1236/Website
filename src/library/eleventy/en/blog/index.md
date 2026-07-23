---
title: Blog
locale: "en"
description: Blogs and Microblogs about any topic
layout: layouts/base.html
---

Blogs, Microblogs, Posts, etc. Whatever you want to call them, this is really just a place for whatever pops into my head that I'd like to save and share publicly.

<div class="post-list">
{% for post in collections.blog_en | reverse %}
  <div class="post-card">
    <span class="post-card-title"><a class="post-card-link" href="{{ post.url | url }}"> {{ post.data.title }} </a> <span class="post-card-date">{{ post.data.date | readableDate }}</span></span>
    <p class="post-card-description">{{ post.data.description }}</p>
  </div>
{% endfor %}
</div>
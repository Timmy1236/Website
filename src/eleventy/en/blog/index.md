---
title: Blog
locale: "en"
description: Blogs and Microblogs about any topic
layout: layouts/base.html
---

<h1 class="text-header">Blog</h1>

**Blogs and Microblogs on any topic!** With no specific theme or topic, computers, games, multimedia, etc. The more bytes spent on this blog, the more unstable the code of this site becomes. That's the fun part!

<br>
{% for post in collections.blog_en | reverse %}

<div class="post-card">

  <a class="post-card-title" href="{{ post.url | url }}">
    {{ post.data.title }}
  </a>

  <div class="post-card-date">{{ post.data.date | readableDate }}</div>

  <p class="post-card-description">{{ post.data.description }}</p>

</div>

{% endfor %}

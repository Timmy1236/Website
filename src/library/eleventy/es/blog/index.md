---
title: Blog
locale: "es"
description: Blogs y Microblogs de cualquier tema
layout: layouts/base.html
---

Blogs, MicroBlogs, Entradas, etc. Como tu quieras llamarlo, acá realmente hay cualquier tipo de cosa que se me pasa por la cabeza y me gustaría dejarlo en un lugar para que quede guardado y en publico.

<div class="post-list">
{% for post in collections.blog_es | reverse %}
  <div class="post-card">
    <span class="post-card-title"><a class="post-card-link" href="{{ post.url | url }}"> {{ post.data.title }} </a> <span class="post-card-date">{{ post.data.date | readableDate }}</span></span>
    <p class="post-card-description">{{ post.data.description }}</p>
  </div>
{% endfor %}
</div>
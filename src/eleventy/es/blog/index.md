---
title: Blog
locale: "es"
description: Blogs y Microblogs de cualquier tema
layout: layouts/base.html
---

<h1 class="text-header">Blog</h1>

**¡Blogs y MicroBlogs de cualquier tema!** Sin ningún tipo de temática o tema en concreto, informática, juegos, multimedia, etc. Mientras mas byte's sean gastados en este blog, mas inestable se vuelve el código de este sitio. ¡Esa es la gracia!

<br>
{% for post in collections.blog_es | reverse %}

<div class="post-card">

  <a class="post-card-title" href="{{ post.url | url }}">
    {{ post.data.title }}
  </a>

  <div class="post-card-date">{{ post.data.date | readableDate }}</div>

  <p class="post-card-description">{{ post.data.description }}</p>

</div>

{% endfor %}

---
title: Blog
description: Historial de cambios y actualizaciones del sitio
layout: layouts/base.html
---

# Blog

**¡Blog's y microblog's de cualquier tema!** Sin ningún tipo de temática o tema en concreto, informática, juegos, multimedia, etc. Mientras mas byte's sean gastados en este blog, mas inestable se vuelve el código de este sitio, ¡esa es la gracia!

---
{% for post in collections.blog | reverse %}

<div class="post-card">

  <a class="post-card-title" href="{{ post.url | url }}">
    {{ post.data.title }}
  </a>

  <div class="post-card-date">
    {{ post.date | readableDate }}
  </div>

  {%- if post.data.tags %}
    <div class="post-tags">
      {%- for tag in post.data.tags %}
        {%- if tag != "all" %}
          <span class="post-tag">{{ tag }}</span>
        {%- endif %}
      {%- endfor %}
    </div>
  {%- endif %}

  <p class="post-card-desc">
    {{ post.data.description }}
  </p>
</div>

{% endfor %}
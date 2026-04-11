---
title: Changelog
description: Historial de cambios y actualizaciones del sitio
layout: layouts/base.html
---

# Historial de actualizaciones

Aquí puedes ver todos los cambios que le he hecho a la pagina, por ejemplo cosas nuevas que he añadido, modificada, arregladas o eliminadas, al principio puede no tener una buena documentación ya que no pensaba hacer esto un proyecto importante si te soy sincero.

<br>
{% for post in collections.changelog | reverse %}

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
          <span class="post-tag" id=tag-{{ tag }} >{{ tag }}</span>
        {%- endif %}
      {%- endfor %}
    </div>
  {%- endif %}

  <p class="post-card-desc">
    {{ post.data.description }}
  </p>
</div>
{% endfor %}
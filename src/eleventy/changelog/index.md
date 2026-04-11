---
title: Changelog
description: Historial de cambios y actualizaciones del sitio
layout: layouts/base.html
---

<h1 class="text-header">Historial de actualizaciones</h1>

El historial de todas las funciones agregadas, modificas, eliminadas o arregladas que fueron realizadas en esta pagina web con el paso del tiempo. Se documentan de una forma fácil de entender, pero puedes ver la lista real y completa de todos los cambios desde los commits hechos en el repositorio: <a href="https://github.com/Timmy1236/Website/commits/main/">github.com/Timmy1236/Website/commits</a>.

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
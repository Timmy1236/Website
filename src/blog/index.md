---
title: Blog
description: Historial de cambios y actualizaciones del sitio
layout: layouts/base.html
---

# Blog

**¡Blog's y microblog's de cualquier tema!** Sin ningún tipo de temática o tema en concreto, informática, juegos, multimedia, etc. Mientras mas byte's sean gastados en este blog, mas inestable se vuelve el código de este sitio, ¡esa es la gracia!

---

{% for post in collections.blog | reverse %}
- [{{ post.data.title }}]({{ post.url | url }})  _({{ post.date | readableDate }})_ <br>
{{ post.data.description }}
{% endfor %}

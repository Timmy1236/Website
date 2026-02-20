---
title: Blog
description: Historial de cambios y actualizaciones del sitio
layout: layouts/base.html
---

# Microblog

*Algunas veces pierdo la cabeza y empiezo hablarle hacia la pared, ahora, pierdo la cabeza y empiezo hablarle a la computadora*

---

{% for post in collections.blog | reverse %}
- [{{ post.data.title }}]({{ post.url | url }})  _({{ post.date | readableDate }})_ <br>
{{ post.data.description }}
{% endfor %}

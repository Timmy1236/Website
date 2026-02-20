---
title: Changelog
description: Historial de cambios y actualizaciones del sitio
layout: layouts/base.html
---

# Historial de actualizaciones

Aquí puedes ver todos los cambios que le he hecho a la pagina, por ejemplo cosas nuevas que he añadido, modificada, arregladas o eliminadas, al principio puede no tener una buena documentación ya que no pensaba hacer esto un proyecto importante si te soy sincero.

---
{% for post in collections.changelog | reverse %}
- [{{ post.data.title }}]({{ post.url | url }})  _({{ post.date | readableDate }})_ <br>
{{ post.data.description }}
<br>
{% endfor %}

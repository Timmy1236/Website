---
title: "Recode 2: Mithril.js y 11ty"
date: 2026-01-17
description: "Con la ayuda del nuevo diseño de mi pagina, tendiendo el contenido que cambia entre ellas en una sola parte, me permite realizar un cambio de paginas de forma 'smooth' sin la necesidad de re-cargar enteramente todo el código HTML cada vez que el usuario clickea un botón el NAV! Esto lo pude hacer gracias a Mithril.js. También, he empezado a usar 11ty, un generador de paginas estáticas, en vez de escribir otra vez todos los HTML's para cada changelog, blog, sitemap, etc. Ahora puedo usar solamente un html base y escribir cada articulo desde un simple markdown!"
layout: layouts/base.html
back: /content/changelog/index.html
---

# Información

Nuevo año, nuevo yo, literalmente. Desde que me pase a NekoWeb me he enfocado en aprender mas como funciona el desarrollo en el frontend, deje un poco de lado mis otros proyectos a dedicarme completamente en investigar como usar un generador de sitios estático. En esta update trae: [mithril.js](https://mithril.js.org/) y [11ty](https://www.11ty.dev/), describí como funcionan de forma poca detallada en la sección de añadidos. Recomiendo mucho visitar sus paginas para ver el potencial máximo que tienen, hablo en serio.

---

### Añadidos
- 'Mithril.js' Ahora la pagina en vez de correr simplemente en HTML estático, ahora todo se basa en un simple index.html que usa mithril.js como DOM virtual, básicamente cuando te cambias de pagina, en vez de recargar completamente un HTML entero, incluso cuando gran parte sea simplemente un copia y pega, ahora solamente cambiara el contenido de ella, sin necesidad de gastar red al pedo, incluso esto debería ser mas rápido, al instante ya cargas todas mis paginas en el script y al clickear un botón, pum, cambio al instante!
- '11ty' El sitemap, blog, changelog, y posiblemente mas paginas que haga en algún futuro, tampoco serán simplemente copias y pegas del mismo HTML pero con diferente textos, ahora todo se genera al instante gracias a 11ty, un generador de paginas estáticos, simplemente creo un HTML como base y listo, después solamente si quiero crear algo nuevo, como un sitemap, hago un markdown y pongo solamente lo que quiero ver que se vea en ella, una lista con varios links, un titulo h1, y nada mas, 11ty hace todo el trabajo, recomendado!

---

### Cambios
- Acabo de otra vez re-formar los directorios, ahora los scripts se encuentran organizados por categorías y todas las herramientas de 11ty y generadores se encuentran separados del deploy, básicamente nekoweb solamente hosteara lo visible mientras que todas mis herramientas y bases se encuentran afuera guardadas para futuras updates, esto debería de ayudar en no subir tanto el peso con node modules y toda esas mierdas.

---

### Arreglos
- Minis fixes en algunos scripts que he encontrado al estar organizándolos, no son nada de importancia.
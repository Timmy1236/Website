---
title: "1.2.0 - Refactorización"
date: 2024-05-27
locale: "es"
description: "Mágicamente, resulta que tener todos los archivos de tu pagina en el mismo raíz puede ser un problema serio mientras vas avanzando y añadiendo nuevas cosas, ¿quien coño lo diría?"
layout: layouts/base.html
back: /content/es/changelog/index.html
tags: ["1.2", "mediano"]
---

<div class="changelog-card change">
  <h1>Cambios</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Varios códigos HTML y CSS fueron re-escritos de vuelta desde cero.</li>
      <li>La mayoría de archivos, scripts, etc. Se encuentran en diferentes carpetas de forma organizadas, no hace ningún cambio visual a la pagina, pero esto es para mejorar en las futuras actualizaciones y tener el proyecto de una forma u otra mas limpia.</li>
      <li>El control de MP3 fue eliminado completamente, pero la lógica sigue funcionando de fondo, ahora la pagina detecta si estas visualizándolo o no, en caso que no Estes viendo, la música se detendrá automáticamente para no ser una molestia en segundo plano.</li>
      <li>Re hice de vuelta el nav pero ahora es un div con varias clases css personalizadas??? No se si esto sea lo correcto, no se mucho sobre desarrollo web, espero no estar cagandola con eso.</li>
    </ul>
  </div>
</div>

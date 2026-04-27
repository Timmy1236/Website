---
title: "2.0.0.alpha.4 - Directorios"
date: 2026-02-20
locale: "es"
description: "Esta update prácticamente no agrega contenido nuevo, simplemente re organizando todos los archivos y directorios para que tenga una estructura mas limpia y arreglando y comprimiendo ciertas cositas en las paginas que se añadieron de forma bruta"
layout: layouts/base.html
back: /content/es/changelog/index.html
tags: ["2.0.alpha", "grande"]
---

<div class="changelog-card info">
  <h1>Información</h1>
  <div class="changelog-card-content">
    <ul>
      <li>No muchas cosas nuevas, simplemente re organizando todos los archivos internos de la pagina.</li>
    </ul>
  </div>
</div>

<div class="changelog-card new">
  <h1>Añadidos</h1>
  <div class="changelog-card-content">
    <ul>
      <li>No-Good angel button.</li>
      <li>Nuevo efectos de sonidos para los botones del nav.</li>
      <li>Tooltips, aún no se donde usarlos en la página, pero hay tooltips.</li>
    </ul>
  </div>
</div>

<div class="changelog-card change">
  <h1>Cambios</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Re hice de vuelta la pagina 404 ya que no había hecho un cambio en ella ya prácticamente un año y me estaba dando un tic.</li>
      <li>La pagina ya no se encuentra en /website/ sino que ahora es /public/, esto es para que quede mas claro en github que lo único que se publicara sera lo que este adentro de esa carpeta y que src solamente sirve para guardar los markdowns y base del content.</li>
      <li>Las paginas generadas con 11ty se encontraran ahora en la carpeta content en vez de 'generated' para que no se confunda con una carpeta temporal.</li>
      <li>Varios archivos multimedia estaban mal organizados o inclusos fuera de sus categorías adecuadas, debería de estar todo ordenado, espero que ninguna pagina haya perdido por una ruta no actualizada :).</li>
      <li>Mayoría de scripts y CSS fueron documentados y estilizados con stylelint para mantener una limpieza en los códigos, pero esta pensado hacer eso mas profundamente en las siguientes actualizaciones.</li>
      <li>Se cambiaron las músicas de la pagina principal y las generadas por 11ty por unas músicas sin copyright, en futuras actualizaciones tengo pensado crear una pagina de créditos para creditar a los compositores!</li>
      <li>Cambie el favicon por uno que hice en 30 segundos en libresprite. wow, horrible.</li>
    </ul>
  </div>
</div>

<div class="changelog-card fix">
  <h1>Arreglos</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Settings setup no estaba haciendo su trabajo, me olvide de llamar su función.</li>
    </ul>
  </div>
</div>

<div class="changelog-card del">
  <h1>Eliminaciones</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Varias imágenes y audios que ya no se estaban usando en la página.</li>
    </ul>
  </div>
</div>

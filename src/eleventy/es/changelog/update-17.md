---
title: "2.0.0 - Recode!"
date: 2026-04-11
locale: "es"
description: "Oh Dios. No estaba esperando que este recode tardara tanto y necesitara tantos cambios para finalmente tener una sola version que me guste."
layout: layouts/base.html
back: /content/es/changelog/index.html
tags: ["2.0", "grande"]
---

<div class="changelog-card info">
  <h1>Información</h1>
  <div class="changelog-card-content">
    <ul>
      <li>Es la primera vez que integro los commits en el changelog. Tristemente estoy armando esto mismo después de haber realizado un montón de commits y se esta volviendo un poco ""complicado"" documentarlo todo. Importante recordar esto para siguiente update.</li>
    </ul>
  </div>
</div>

<div class="changelog-card new">
  <h1>Añadidos</h1>
  <div class="changelog-card-content">
    <ul>
      <li><a href="https://github.com/Timmy1236/Website/commit/5602d1353cbb9c2de60b285ddc9ab23853a64832">5602d13</a> El código fuente de la pagina web ahora se encuentra escrita en 'TypeScript' esto debería de ayudar mucho en el futuro para que los scripts dejen de explotar en cada update.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/83ba1dd047e67ed7e270d7d007b3163d591875fe">83ba1dd</a>  Iconos pixel para los botones de navegaciones hechos en Aseprite.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/e5300c04782d82f4f8b4f5881f02e9b120046c0e">e5300c0</a> Nueva pagina: 'links'. Los vecinos y varios links con créditos y recursos se encuentran ahí por ahora.</li>
      <li><a href="https://github.com/Timmy1236/Website/commit/d328c1035e993362e9054ac0926970348f73ab0c">d328c10</a> Dependencia: 'Concurrently' agregado y configurado en el proyecto.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/73ef2af1ee34340378895d6f111c6d0d1d195ac0">73ef2af</a>  Integrando colores en la consola para un mejor debug.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/c226f631e7a34160b38707d9307a0aeec378b967">c226f63</a>  Obtener los últimos commits subidos al repositorios en la misma pagina web.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/0b841626c6ea2c03080967637573a393e51f282b">0b84162</a>  Nuevo tipo de panel: Panel tabs
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/6e0e7be480eeb978a1449744cfe75dcb3335e10f">6e0e7be</a>  Sección: 'about me' ahora cuenta con la actividad que estoy haciendo en mi PC gracias al spyware de Discord.</li>
      <li><a href="https://github.com/Timmy1236/Website/commit/a554faa12baf038eb618936d6c46d99b263dc642">a554faa</a>  La lógica de settings ahora cuenta con un mini control de versiones, esto servirá para futuras updates si se realiza cambios grandes que puede joderse con el anterior settings... Como ahora!
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/2a27085424fc75cf3f78a75b3339be7eeff61489">2a27085</a> Tooltip completamente nuevo que ahora sigue al mouse en vez de ser estático.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/8a1b713f22c15bb292b09f4b69d94ccd4d89cb7e">8a1b713</a> Los botones del nav ahora soportan i18n.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/406fb39a7ec2e787370cf74fc20c324d9ae055ac">406fb39</a> Los botones del nav ahora soportan tooltips.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/e32c3f81ed0b43c2558f9e0cbc0971502e239e48">e32c3f8</a> Todos los changelogs fueron re-escritos para tener una mejor documentación (en general) y ahora en el titulo puedes encontrar su versiones. Fun fact: Estas viendo este commit ahora mismo, esta update fue hecha para esta update, que dije?
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/3778c5cae73ae31078e4b788763e4c06ac61f948">3778c5c</a> Todos los títulos de los paneles ahora son un párrafo en vez de h1, resulta que en los navegadores chromium aplicaba un style obligatorio y se veía feo, ahora eso debería de estar solucionado, supongo, posiblemente en siguientes updates cambie de vuelta un poco el estilo, no me gusta mucho por ahora.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/45c4d18d6e32e0868537bf2ff00071b671399c88">45c4d18</a> Nuevos vecinos, nuevos créditos, cositas extras :3
      </li>
    </ul>
  </div>
</div>

<div class="changelog-card change">
  <h1>Cambios</h1>
  <div class="changelog-card-content">
    <ul>
      <li><a href="https://github.com/Timmy1236/Website/commit/6ee54c321bd49568860c26de7db81a5e5198d330">6ee54c3</a>  Script: 'mouse-click.ts' refactorizado, debería de causar menos lag y consumo en red ya que ahora usa AudioBuffers.</li>
      <li><a href="https://github.com/Timmy1236/Website/commit/c143e706bd383c2c2cf2d17f90c02783527dd2a8">c143e70</a>  Lógica de settings refactorizado desde 0, debería ser mas legible y evitar futuros errores que había antes.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/5beef7590757ebc3cc357402947bf6bc4ddfe3f7">5beef75</a>  Lógica de i18n refactorizado.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/f6690135a89025cfc6caff4a72481b4612f84ff4">f669013</a> La fuente legible debería de ser mas legible ahora... yeah.</li>
      <li><a href="https://github.com/Timmy1236/Website/commit/93ad2d755d2695fa628d6198bc92d4e2987a3cbc">93ad2d7</a> Todos los scripts y css se encuentran afuera de la carpeta public, ya no son visibles en el navegador del usuario.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/acf3854ec245b7976c4f44a17a3ef6957858373a">acf3854</a> Ahora la pagina carga un simple css mirificado en uno solo para reducir tiempos de carga y consumo de red.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/ca97b40117cd41ed35583a5950a2d65fa0bdc056">ca97b40</a> El formato de las fechas fueron cambiados a uno mas simple.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/5c49ba231029301c69a3568df394f3bff8dbf903">5c49ba2</a> esbuild actualizado 0.27.4 > 0.28.0
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/d4e9531e23196ab5aa33b1893f0eff07196ba8d6">d4e9531</a> 11ty actualizado 3.1.2 > 3.1.5
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/18a642ce2e1e813058542258367b5931298267da">18a642c</a> Sección: 'configuration' ahora usa el nuevo panel con tabs en vez de un simple panel super largo.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/ca818d8132a59448238c5ff32817bd99cfc2b9de">ca818d8</a> Sección: 'home' ahora usa el nuevo panel duales para el blog y changelog.
      </li>      
    </ul>
  </div>
</div>

<div class="changelog-card fix">
  <h1>Arreglos</h1>
  <div class="changelog-card-content">
    <ul>
      <li><a href="https://github.com/Timmy1236/Website/commit/dc2676836a27af8414ca6d7b104343f9bc5f20ac">dc26768</a> El script encargado de manejar la lógica de la música de fondo, seguía cargando el archivo de audio completo... Incluso cuando su settings indicaba que debería de estar apagado :3
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/8a74312f216e305d8792b9544ea073e750ac8217">8a74312</a> Efecto vignette no cargando correctamente, a veces se activaba y en otras no.
      </li>
    </ul>
  </div>
</div>

<div class="changelog-card del">
  <h1>Eliminaciones</h1>
  <div class="changelog-card-content">
    <ul>
      <li><a href="https://github.com/Timmy1236/Website/commit/df9689ef3e6d2d26eacf052dbfa14fed10f512ca">df9689e</a> Theme: Details green eliminado ya que es complicado hacerlo compatible con el nuevo layout, rip :(
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/04f23c8225f10f17bb6e6ad4ec07c60a6eac09e0">04f23c8</a> Script: nekoweb-stats eliminado ya que ahora se usa el SSI de Nekoweb.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/58eb79f88f6d32e5dc46b1c864dcb53e9f9e81c7">58eb79f</a> Dependencia: Swup eliminado.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/60d0a81b800a63734165b0cc0a2b55caf707838d">60d0a81</a> Sidebar images y la canción 'Grace FM' eliminados por ciertas razones.
      </li>
      <li><a href="https://github.com/Timmy1236/Website/commit/a15e215d7925941019be79fe7872e4d71e00d217">a15e215</a> Archive 2025 eliminado por tener demasiados errores, en algún futuro volveré agregarlo de vuelta pero que realmente se encuentre archivado.
      </li>
    </ul>
  </div>
</div>

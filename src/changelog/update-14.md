---
title: "Update 14: Styles"
date: 2025-11-08
description: "¿Sabes que es lo mas importante? ¡La presentación!"
layout: layouts/base.html
back: /generated/changelog/index.html
---

# Información
Rehíce gran parte del código general de la pagina web antes de comenzar de hacer un nuevo layout, el código era tan terrible que si hacia un cambio se rompía todo.

---

### Añadidos
- Ahora la pagina cuenta con un sitemap, tengo pensado en añadir mas paginas o continuar insertando mas links pero esta vez mas en el sitemap antes que dejarlo todo compactado en el nav, por ahora no tiene muchas cosas.
- Nuevas opciones en la sección de settings, ahora hay todo un sistema de themes que se aplica en el style general de la pagina.

---

### Cambios
- Remplace el theme del changelog por uno simple me gusta abusar mucho el CSS pero puede ser imposible intentar leer textos, así que estos tipos de paginas que tendrán mayormente textos, ahora cuentan con un style único y simple.
- Rehíce por completo el about-me, junte la sección de mi perfil y la de discord haciendo que ahora el pfp y username que tenia antes, se actualicen a tiempo real dependiendo de las stats de mi perfil, también mostrara si estoy conectado o no al momento que entres.
- Modifique elements.css para que el site box sea mas simple y lindo que el anterior teniendo toda una imagen borrosa.

---

### Arreglos
- Re ajuste el icono del mouse personalizado porque resulta que estaba un poco offset y quedaba raro donde había que clickear
- Arregle un montón de strings del i18n y añadiendo le mas soporte a otros strings que no se traducían, aún hay otros varios mas que pude identificar pero no tengo tiempo para arreglarlos en esta actualización. 
- Arregle algunas paginas de los mini-easter eggs que estaban en el about me, como el de minecraft o el del half life 2 que no tenían correctamente bien ubicados las direcciones de los fonts, haciendo que usaran la genérica del arial y rompiendo varios elementos del css.

---

### Eliminaciones
- Elimine completamente la sección "Flash Archive" en others por ahora.
- Elimine un montón de archivos que no se usaban mas en la pagina para ahorrar algo de tamaño y simplificar los directorios del repositorio.

---
title: "Update 15: Pulir"
date: 2026-02-03
description: "Arreglando, añadiendo y cambiando cosas que estaban medio mal con el anterior recode. Este debería de ser el ultimo recode que haga."
layout: layouts/base.html
back: /content/changelog/index.html
---

# Información

Con todos estos nuevos cambios que he hecho, no todos salieron lo mejor posible ('' •᷄ ᴗ •᷅ ). Esta update esta enfocado en arreglar las mayorías de cosas que se rompieron con el recode anterior.

---

### Añadidos
- Generador de RSS automático, ahora todos los changelogs y blogs deberían de crearse al momento de hacer una build de la pagina, esto solucionara cualquier tipo de error que tenia antes con mi feed que no se actualizaba bien.

---

### Cambios
- Cambio de host de imagen del botón de nyani58.
- Un CSS mas "limpio", elimine la mayoría de efectos, hice las sombras y los fondos transparentes mas opacos, agregue mas padding para juntar el contenido en el medio, quite la mayoría de los bordes redondos, etc. 
- Los botones ahora son mas 'clickys' :3, tienen una animación re-hecha completamente nueva y ahora tienen un efecto especial cuando son clickeados.
- Nuevo fondo animado y reproductor mp3 para todas las paginas generados con 11ty, también ahora se usa swup.js, para que tenga una animación de transición cada vez que cambies de pagina y que el navegador no se vea obligado a recargar de vuelta cada vez que te muevas entre paginas.
- Re-escrito de vuelta todos los textos y actualizado los json para el i18n.

---

### Arreglos
- Inconsistencias en el CSS, había muchos divs que le faltaban clases importantes y otras que aunque se veían iguales, si cambiabas de theme se rompían o no se actualizaba con las nuevas variables, etc.
- Unos scripts se ejecutaban varias veces y se duplicaban generando problemas de rendimiento dependiendo de la cantidad de veces que te cambiabas de paginas en el home, esto ya no debería de pasar y ahora cada script se ejecuta por separado dependiendo de la pagina, i18n debería de ejecutar una vez cada vez que entres una pagina nueva por precaución.


---

### Eliminaciones
- pursuer

<img src="https://i.pinimg.com/736x/14/7d/be/147dbe99a775ed1c0d98dba85649f5a1.jpg" alt="NOOOOOOOOOOO" width="200"/>
---
title: "Blog 2: Minecraft legacy edition"
date: 2026-02-28
description: "¿Huh? ¿A que te refieres que lekearon el código fuente completo de Minecraft legacy edition? ¿Se podrá jugar de vuelta en PC?"
layout: layouts/base.html
back: /content/blog/index.html
---

*¿Qué?* Resulta ser que alguien [lekeo el codigo fuente completo de "Minecraft Legacy Edition"](https://xcancel.com/i/status/2027862579226247278), una version especial desarrollada por **4J Studios** para dar soporte a las consolas de septima generacion que no podrían ejecutar Minecraft java, ya que las consolas nunca fueron diseñados originalmente para correr la maquina virtual de java, obligando a que se reconstruyera Minecraft desde cero pero esta vez en C++.

## Legacy ≠ Bedrock 

Entonces... ¿Que le paso a esta versión? Tristemente fue abandonada en 2019 ya que Microsoft quería impulsar la version "Bedrock edition" otra version de Minecraft hecha desde cero que corre también en C++. Pero esta vez diseñado para ser multi-plataforma, haces una version, corre en los demás dispositivos. Esto es un punto clave ya que las "Legacy edition" están compiladas de forma diferente para cada sistema operativo, la version de xbox360 no podría correr en la ps3, y viceversa, esto también mataba completamente la idea de un modo multijugador entre plataformas.

... También había otro problema... Nunca recibimos un port para PC, aunque suene estúpido la idea de tener un port en PC teniendo en cuenta que existe literalmente Minecraft Java con su control de versiones excelente que te permite volver a versiones antiguas y una "alterativa(?" con el mismo Bedrock. Las 2 versiones tenían una *"esencia"* diferente, no por el hecho obvio que una esta estancada a una época diferente cuando Microsoft no intentaba meter cambios agresivos arruinando la experiencia ***EJEM...***, sino que contaba varias características y funciones notorias que armaban la diferencia.

## "Esencia"

**Minecraft Legacy**, se notaba que 4J lo diseño para pasar el rato jugando con amigos, permitiendo que puedas jugar multijugador de forma online o [**local**](https://minecraft.wiki/w/Splitscreen/Legacy_Console_Edition) al mismo tiempo, varios [**minijuegos**](https://es.minecraft.wiki/w/Minijuegos) que se podían jugar al instante sin la necesidad de armar un servidor complejo, un generación de [**mundo limitado**](https://minecraft.wiki/w/Legacy_Console_Edition_exclusive_features#World_generation) ocasionando que puedas navegar sin preocuparte que nunca vas a encontrar la estructura que estas buscando, había un [**mundo tutorial**](https://minecraft.wiki/w/Legacy_Console_Edition_Tutorial) que explicaba que hacia y como era cada mecánica que incluso se fue actualizando para incluir todas que iban agregando. Era simple y *divertido(?*.

Mientras que **Minecraft Bedrock** no cuenta con ninguna de estas funciones, no tiene multijugador local split-screen teniendo en cuenta que corre en consolas, *al menos ahora puedes jugar con los demás usuarios que estén en un diferente sistema*, no hay un mundo tutorial para enseñar a los nuevos jugadores, no existe una función para crear mundos pequeños limitados, ni siquiera los minijuegos fueron porteado entre versions, quedando una función exclusiva para Legacy.

Posiblemente sea una estúpida ceguera nostálgica que siento por Legacy, pero siento que realmente había una gran diferencia entre **Mojang** y **4J** de como diseñaron Minecraft. Uno lo diseño para expandir lo máximo el aspecto sandbox para permitir historias increíbles, mientras que el otro maximizaba con lo tenia para traer la mayor jugabilidad. No tengo ninguna preferencia entre las 3 versiones, Java, Bedrock o Legacy, pero me gustaría tener Legacy de vuelta en pc, tener a los 3.

# Jugar Legacy en PC?

Volviendo lo que estaba hablando, el leak del código fuente de Legacy, si, eso mismo... ¿Que tiene que ver todo con todo esto? *pues...* Que ***teóricamente*** al tener el código fuente, se podría compilar perfectamente una version Legacy que corra de forma **NATIVA** en PC. Ya no sera necesario de usar emuladores o un modpack gigantesco en Java para traer de vuelta todas esas funciones. Podríamos tener ese port que nunca llegamos a tener... La pregunta viene ahora... *¿Se puede hacer eso?*... nose. Había que probar ya que tenemos el código, ¿no?


## A probar pue.

1: Descargar el código fuente que supuestamente fue subido a [Gofile](https://gofile.io/d/RRf1hv) ezzz.

<img src="https://file.garden/aSqYsBZqpx5ZY3su/website/blog/Captura%20de%20pantalla%202026-03-01%20072334.png" style="max-width: 900px;  margin: auto;  display: flex;.">

<br>

2 (Problema 1): Una vez descargado, descomprimí el archivo con WinRAR que estaba bloqueado con una contraseña, lo encontré fácilmente en el mismo hilo y era simplemente: "fuckanon". Viendo el contenido que traía, había un archivo tipo **.sln**, tipo de archivo muy usado en Visual Studio para organizar y manejar proyectos, eso significa que podría abrirlo perfectamente con Visual Studio, ¿No?... Ehhh.. No. Había demasiados mensajes de error y ni tenia la opción para compilar o hacer nada ya que requería una version de Visual Studio especifica de 2012, fácil de solucionar, supongo.

<br>

3 (Problema 2): Al buscar el instalador de visual studio 2012 en las versiones anteriores en Microsoft, resulta que esa version ya no esta disponible al publico por el fin de soporte, haciendo que no sea una version disponible 'legalmente', ahora me toca buscar de terceros un instalador, genial.

<img src="https://file.garden/aSqYsBZqpx5ZY3su/website/blog/Captura%20de%20pantalla%202026-03-01%20072922.png" style="max-width: 900px;  margin: auto;  display: flex;.">

<br>

4 (Problema 3): Encontré varias copias del instalador de Visual Studio 2012 RC, pero una no estaba crackeada y la otra que si pude instalar, no abrió después, genial. Finalmente había encontrado otra en [archive.org](https://archive.org/details/vs-2012-rc-ult-enu) que si me funciono correctamente.
<br>

5: Después de perder una hora de mi vida en buscar un IDE que ya ni tiene soporte, finalmente pude abrir el proyecto .sln de Legacy, y me encontré con la sorpresa de que había una carpeta que no había visto y un target a una plataforma que tenían el mismo nombre, "**Windows64**", ... ¿Eso significa que se puede compilar para Windows? Quien sabe, a probar supongo... "***warning MSB3785: No SDKs were found. SDKReference items will not be resolved. If your application requires these references there may be compilation errors.***", me hizo recordar a "***Abandon all hope, all ye who enter***", así que decidir ignorarlo y continuar con mi aventura.

<img src="https://file.garden/aSqYsBZqpx5ZY3su/website/blog/Captura%20de%20pantalla%202026-03-01%20073528.png" style="max-width: 900px;  margin: auto;  display: flex;.">


<br>

6 (Problema 4): ... ¿Funciono? ¿¿Nada mas era simplemente hacer eso?? ¿¿¿¿Puedo volver a jugar Legacy???? En vez de seguirme haciendo preguntas, decidí continuar... Oh vaya! Intento clickear el botón, intento presionar el enter, pero nada pasa. Necesitas un control para poder jugarlo, quien lo diría, ni me lo había pensado, necesitas un control para jugar algo de consola, muy genio de mi parte. Me toco sacar un control genérico que no uso hace años porque deje usarlos cuando me cambie a PC. De todas formas no recibe mi inputs porque supongo que estaría esperando unos de Xbox360 en especifico, ni eso me sirvió.

<img src="https://file.garden/aSqYsBZqpx5ZY3su/website/blog/Captura%20de%20pantalla%202026-03-01%20081950.png" style="max-width: 900px;  margin: auto;  display: flex;.">

<br>

7: Como mi control enviaba señales genéricas que Legacy no captaba, me toco sacar la clásica que siempre se usa para estas ocasiones. **X360CE**, dicho software que su pagina principal ahora cuenta con una historia medieval generada con inteligencia artificial, que lindo, supongo. No se que tiene que ver una cosa con la otra. gracias.

<img src="https://file.garden/aSqYsBZqpx5ZY3su/website/blog/Captura%20de%20pantalla%202026-03-01%20075849.png" style="max-width: 900px;  margin: auto;  display: flex;.">

<br>

8 (Problema 5): ¡Oh! ¡No! Espera... No esta funcionando, la clásica me esta fallando. Por alguna extraña razón que no comprendo, x360ce se esta quejando que no tengo instalado Visual C++ 2015-2019, cuando es algo que si o si ya debería de tenerlo instalado. No... De hecho, LO TENGO INSTALADO, AHÍ MISMO LO PUTAS DICE, **¿¡PORQUE ESTAS FALLANDO!?**

<img src="https://file.garden/aSqYsBZqpx5ZY3su/website/blog/Captura%20de%20pantalla%202026-03-01%20080145.png" style="max-width: 900px;  margin: auto;  display: flex;.">

<br>

9: Revisando el GitHub de x360ce, resulta que todos están teniendo el mismo problema, hace tiempo que no recibe una buena update que ya ni siquiera es capaz de checkear correctamente las versiones, me toco instalar version fixeada por [Glitchtest51](https://github.com/x360ce/x360ce/pull/1576), supongo que la pagina ya ni cumple el proposito de darte el software, sino que una historia medieval hecho con IA.

<img src="https://file.garden/aSqYsBZqpx5ZY3su/website/blog/Captura%20de%20pantalla%202026-03-01%20080754.png" style="max-width: 900px;  margin: auto;  display: flex;.">

<br>

Paso 10 (Problema 6): La version fixeada corre ahora mismo sin problemas ya que no se queja por algo que ni esta roto, pero de todas formas no esta funcionando ya que también esta ignorando el hecho que ni tiene un driver para entender los controles, así que me toco instalar el de **[VigemBus](https://vigembusdriver.com/download/)**

<br>

FINALMENTE, PUEDO, JUGAR, LEGACY, NADA, ESTA, FALLANDO, ¿FUNCIONA?. Si te soy honesto, me esperaba que después de gastar 2 horas y media de mi vida solucionando problema tras problema, pense que iba a llegar en nada, pero extrañamente funciona tan bien que al correr de forma nativa sin la necesidad de la emulación, es super estable y apenas consume 300mb de ram in-game, solamente hay pequeños fallos como la interfaz un poco rota y que las partidas guardadas no funcionan al menos que actives en el debug: "Load/Write Saves From Local Folder Mode" y ya estaría, para ser una version diseñada exclusivamente para consolas, no trajo demasiado problemas para compilarlo en PC, posiblemente incluso la mayoría de cosas lo hizo la misma 4J para testealro, pero como nunca la idea fue de publicarlo en PC, nunca llego ver a la luz. 

<img src="https://file.garden/aSqYsBZqpx5ZY3su/website/blog/Captura%20de%20pantalla%202026-03-01%20082912.png" style="max-width: 900px;  margin: auto;  display: flex;.">


# Conclusion

**nunca mas voy hacer esto en mi puta vida, fue horrible y lo odie**. Fuera de bromas, el hecho que sea posible de jugar Legacy edition en PC es simplemente unas de las mejores cosas que me ha pasado en la vida, y como ahora el codigo fuente esta al publico, cualquier persona puede modificarlo y mejorarlo para que sea aún mas estable y jugable en PC, al momento que estoy escribiendo esto, no vi nadie publicar un mod o un parche, pero se que ahora habrá una comunidad que pueda volver a la luz Legacy edition después de estar varios años estancado en el olvido. Nunca me pude dar el lujo de jugar Minecraft moderno porque me había estancado con la época de las consolas de séptima generación, en 19 mayo de 2024 finalmente pude probar el Minecraft "moderno", pero siempre me impacto el hecho que ahora como existe una version moderna de Legacy llamada Bedrock, no tuviera la opción de jugar en multijugador split-screen, cuando perfectamente es capaz de obtener inputs de controles que Java no puede hacerlo sin la necesidad de mods, no se que significa "moderno" si no puedo jugar con alguien a mi alado. Espero honestamente que esto llegue a ser un gran proyecto por parte de la comunidad...

porque esto de arreglar problema y problema me tiene hasta las bolas, no pude dormir toda esta noche por este puta mierda, adios.
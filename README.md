# Timmy's Digital Dumpster
> Una simple pagina web personal hosteada en Nekoweb.

## Screenshot
<p align="middle">
  <img src="https://file.garden/aSqYsBZqpx5ZY3su/github/website/default.webp" width="400"/>
  <img src="https://file.garden/aSqYsBZqpx5ZY3su/github/website/11ty.webp" width="400"/> 
</p>

## Instalación
1. Clona el repositorio.
```bash
git clone https://github.com/Timmy1236/Website.git
```
2. Instala todas las dependencias de node.js
```bash
npm install
```
3. Enciende un servidor para visualizar la pagina, puedes usar la extension: [live server para vscode](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), o también puedes usar Python.
```bash
cd public && python -m http.server 8000
```

4. Nota: La mayoría de cambios que hagas en la pagina web puede ser que no se vean a tiempo real ya que primero necesitas hacer una build de ciertas cosas.
```bash
npm run build # Ejecuta esbuild y eleventy una vez

npm run dev # Ejecuta esbuild y eleventy cada vez que guardas un cambio.
```

## Licencia
Todo el código de la pagina web esta debajo de la licencia "[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)"
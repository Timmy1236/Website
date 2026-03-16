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

4. Nota: Todos los cambios que hagas en 11ty o en los scripts de la pagina web no serán visibles en el momento, ya que necesitaras realizar una build primero.
```bash
# 11ty:
npm run build

# esbuild:
npm run bundle
npm run bundle:watch # Hacer bundle automáticamente cada vez que guardas cambios nuevos.
```

## Créditos
- - [ **Host** ]
- [Website: Nekoweb](https://nekoweb.org/)
- [Images: File Garden](https://filegarden.com/)
<br><br>
- - [ **Herramientas** ] 
- [Mithril: Single Page Application](https://mithril.js.org/)
- [11ty: Static Site Generator](https://www.11ty.dev/)
- [Swup: Page Transition Library](https://swup.js.org/)
- [esbuild: Bundler](https://esbuild.github.io/)
<br><br>
- - [ **Herramientas Externas** ] 
- [Dither it!](https://ditherit.com/)
- [Compress or Die](https://compress-or-die.com/)
<br><br>
- - [ **Audios/Songs** ]
- ["Spring night is over"](https://pixabay.com/es/music/ambiente-spring-night-is-over-ambient-liminal-darkambient-night-322125/)
- ["Elevator Music"](https://lesfm.net/track/elevator-music/)
<br><br>
- - [ **Images** ]
- [Background wallpaper main](https://unsplash.com/es/fotos/el-horizonte-de-la-ciudad-emerge-a-traves-de-la-luz-tenue-de-la-manana-XQJOFs-lZVk)
- [Banner & others VotV images](https://www.reddit.com/r/LiminalSpace/comments/19ek506/voices_of_the_void/)

## Licencia
Todo el código de la pagina web esta debajo de la licencia "[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)"
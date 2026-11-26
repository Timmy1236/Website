import { argv } from "node:process";
import { build, context } from "esbuild";
import { glsl } from "esbuild-plugin-glsl";

const isWatch = argv[2] === "watch";

const mainOptions = {
  entryPoints: [{ in: "src/main/app/app.ts", out: "main/app" }, { in: "src/main/css/main.css", out: "main/styles" }],
  outdir: "public/main/dist",
  plugins: [glsl({ minify: true })],
  bundle: true,
  minify: true,
  external: ["/main/assets/*"]
};

const libraryOptions = {
  entryPoints: [{ in: "src/library/css/main.css", out: "library/styles" }],
  outdir: "public/library/dist",
  bundle: true,
  minify: true,
  external: ["/library/assets/*"]
};

if (isWatch) {
  const contexts = await Promise.all([context(mainOptions), context(libraryOptions)]);
  await Promise.all(contexts.map(ctx => ctx.watch()));
  console.log("Watching...");
}
else {
  await Promise.all([build(mainOptions), build(libraryOptions)]);
}

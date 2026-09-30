import { argv } from "node:process";
import { build, context } from "esbuild";
import { glsl } from "esbuild-plugin-glsl";

const isWatch = argv[2] === "watch";

const options = {
  entryPoints: [
    { in: "src/main/app/app.ts", out: "main/app" },
    { in: "src/main/css/main.css", out: "main/styles" },
    { in: "src/library/app/app.ts", out: "library/app" },
    { in: "src/library/css/main.css", out: "library/styles" }
  ],
  plugins: [glsl({ minify: true })],
  outdir: "public/dist",
  bundle: true,
  minify: true,
  external: ["/assets/*"]
};

if (isWatch) {
  const ctx = await context(options);
  await ctx.watch();
  console.log("Watching...");
}
else {
  await build(options);
}

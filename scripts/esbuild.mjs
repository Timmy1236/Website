/* eslint-disable no-undef */
import { build, context } from "esbuild";

const isWatch = process.argv[2] === "watch";

const options = {
  entryPoints: [
    { in: "src/main/app/app.ts", out: "main/app" },
    { in: "src/main/css/main.css", out: "main/styles" },
    { in: "src/library/css/main.css", out: "pages" }
  ],
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

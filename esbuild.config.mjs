import * as esbuild from "esbuild";

let ctx = await esbuild.context({
  entryPoints: ["src/index.js"],
  outdir: "www",
  bundle: true,
  minify: true,
  sourcemap: true,
});

await ctx.watch();

let { host, port } = await ctx.serve({
  servedir: "www",
});

// await ctx.watch();
// console.log("watching...");

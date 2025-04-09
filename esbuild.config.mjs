import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["theme.css"],
    bundle: true,
    outfile: "theme.css",
    minify: true,
    target: ["chrome58", "firefox57", "safari11", "edge16"],
  })
  .catch(() => process.exit(1));

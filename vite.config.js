import { defineConfig } from "vite"
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"

import fg from "fast-glob";
const entry = fg
  .sync([
    "./src/**/*.js",
    "./src/**/*.css",
  ])
  .filter(
    (name) =>
      !name.includes("__tests__") &&
      !name.includes(".storybook.") &&
      !name.includes(".stories."));

export default defineConfig({
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, "/src/components"),
      },
    }),
  ],
  build: {
    minify: "esbuild",
    cssCodeSplit: true,
    outDir: 'libraries/nicethings',
    lib: {
      name: "NiceThings",
      formats: ["es"],
      entry,
    },
  }
})

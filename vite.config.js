import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";

import { execSync } from "child_process";

const htmlFiles = fs
  .readdirSync(`${__dirname}/vite`)
  .filter((file) => file.endsWith(".html"));

// Create an object: { index: '/abs/path/index.html', about: '/abs/path/about.html' }
const input = htmlFiles.reduce((entries, file) => {
  const name = file.replace(/\.html$/, "");
  entries[name] = resolve(__dirname, "vite", file);
  return entries;
}, {});

export default defineConfig({
  resolve: {
    preserveSymlinks: true,
  },
  root: "vite",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    cssMinify: false,
    emptyOutDir: true,
    rollupOptions: {
      input,
    },
  },
  /* plugins: [
    {
      name: 'fluid-build',
      buildStart() {
        execSync('npx fluid-build', { stdio: 'inherit' });
      },
    },
  ],*/
  optimizeDeps: {
    include: ["fluid-scale"],
  },
  server: {
    host: true,
    fs: {
      allow: ["../node_modules", "../src", "../dev-temp"],
    },
  },
});

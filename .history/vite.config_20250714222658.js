import { defineConfig } from 'vite';

export default defineConfig({
  root: 'vite',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    cssMinify: false,
    emptyOutDir: true
  },
});

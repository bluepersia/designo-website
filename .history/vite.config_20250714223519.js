import { defineConfig } from 'vite';
import { resolve } from 'path'
import fs from 'fs'

const htmlFiles = fs
  .readdirSync(`${__dirname}/vite`)
  .filter((file) => file.endsWith('.html'))

// Create an object: { index: '/abs/path/index.html', about: '/abs/path/about.html' }
const input = htmlFiles.reduce((entries, file) => {
  const name = file.replace(/\.html$/, '')
  entries[name] = resolve(__dirname, 'vite', file)
  return entries
}, {})

console.log (input);

export default defineConfig({
  root: 'vite',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    cssMinify: false,
    emptyOutDir: true,
    rollupOptions: {
      input
    }
  },
});


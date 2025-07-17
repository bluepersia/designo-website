import { defineConfig } from 'vite';

export default defineConfig({
  root: 'vite',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    cssMinify: false,
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs(),
    },
  },
});


function getHtmlInputs() {
  const files = fs.readdirSync(__dirname)
  return files
    .filter((file) => file.endsWith('.html'))
    .reduce((entries, file) => {
      const name = file.replace(/\.html$/, '')
      entries[name] = resolve(__dirname, file)
      return entries
    }, {})
}

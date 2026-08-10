import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'bundled',
  },
  server: {
    open: true,
  },
});

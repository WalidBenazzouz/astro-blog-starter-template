import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://walidbenazzouz.pages.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});

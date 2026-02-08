// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://isanthoshkumar76-tech.github.io',
base: '/mechanical-mercury/',
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
  integrations: [react()],
    output: 'static'
});

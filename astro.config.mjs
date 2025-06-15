import { defineConfig } from 'astro/config';
  import sanity from '@sanity/astro';
  import tailwind from '@astrojs/tailwind';
  import netlify from '@astrojs/netlify/functions';

  export default defineConfig({
    output: 'server',
    adapter: netlify(),
    integrations: [
      sanity({
        projectId: '90fa7e4c-0afa-4df6-b841-f6f39e4dfb66',
        dataset: 'production',
        apiVersion: '2023-05-03',
        useCdn: true,
      }),
      tailwind(),
    ],
    site: 'https://raksabuku.netlify.app',
  });

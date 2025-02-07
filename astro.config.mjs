// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import { visualizer } from "rollup-plugin-visualizer";
import vercel from '@astrojs/vercel';

// @ts-ignore
const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
  ],
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [visualizer({
      emitFile: true,
      filename: "stats.html",
  })]
  }
});
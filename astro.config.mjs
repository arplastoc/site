import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import {replaceImagesUrl} from './replaceImagesPaths.js'
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [replaceImagesUrl]
  },
  integrations: [tailwind(), svelte()]
});
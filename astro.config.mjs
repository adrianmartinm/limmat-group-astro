import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  site: 'https://example.com',  
});
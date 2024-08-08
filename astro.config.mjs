import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap(),
		tailwind({
			// Puedes pasar opciones personalizadas aquí, si es necesario.
			config: {
				// Path a tu archivo de configuración de Tailwind
				// Si tienes uno en una ubicación diferente:
				// path: './tailwind.config.js',
			},
		}),
	],
});

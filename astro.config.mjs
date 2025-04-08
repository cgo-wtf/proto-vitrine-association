// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://cgo-wtf.github.io',
	base: '/proto-vitrine-association',
	integrations: [mdx(), sitemap()],
});

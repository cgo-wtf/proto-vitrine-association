// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://VOTRE_NOM_UTILISATEUR.github.io',
	base: '/annuaire-blog',
	integrations: [mdx(), sitemap()],
});

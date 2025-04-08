import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object with support for French format
		pubDate: z.union([
			z.string().transform((str) => {
				// Support for French date format (DD/MM/YYYY)
				const frenchDateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
				const match = str.match(frenchDateRegex);
				if (match) {
					const [_, day, month, year] = match;
					return new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00Z`);
				}
				return new Date(str);
			}),
			z.coerce.date(),
		]),
		updatedDate: z.union([
			z.string().transform((str) => {
				// Support for French date format (DD/MM/YYYY)
				const frenchDateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
				const match = str.match(frenchDateRegex);
				if (match) {
					const [_, day, month, year] = match;
					return new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00Z`);
				}
				return new Date(str);
			}),
			z.coerce.date(),
		]).optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
